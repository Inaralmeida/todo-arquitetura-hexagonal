const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const SECRET_KEY = "your-secret-key";
const expiresIn = "1h";

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return router.db.get("users").find({ email, password }).value();
}

// Check if the user exists in database
function findUser({ email }) {
  return router.db.get("users").find({ email }).value();
}

server.use(cors());
server.use(jsonServer.bodyParser);

// Middleware para logs
server.use((req, res, next) => {
  console.log(
    `[BACKEND] ${new Date().toISOString()} - ${req.method} ${req.path}`
  );
  next();
});

// Login endpoint
server.post("/login", (req, res) => {
  const { email } = req.body;

  const user = findUser({ email });

  if (!user) {
    const status = 401;
    const message = "Usuário não encontrado";
    res.status(status).json({ status, message });
    return;
  }

  const access_token = createToken({ email: user.email, id: user.id });

  res.status(200).json({
    access_token,
    user: {
      id: user.id,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
    },
  });
});

// Logout endpoint
server.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout realizado com sucesso" });
});

// Middleware para verificar JWT em rotas protegidas
server.use(/^(?!\/login|\/logout).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    const status = 401;
    const message = "Token não fornecido";
    res.status(status).json({ status, message });
    return;
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyTokenResult = verifyToken(token);

    if (verifyTokenResult instanceof Error) {
      const status = 401;
      const message = "Token inválido";
      res.status(status).json({ status, message });
      return;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = "Token inválido";
    res.status(status).json({ status, message });
  }
});

// Middleware para filtrar todos visíveis
server.use("/todos", (req, res, next) => {
  if (req.method === "GET") {
    const todos = router.db.get("todos").filter({ visible: true }).value();
    res.jsonp(todos);
    return;
  }
  next();
});

// Middleware para soft delete (marcar como não visível)
server.use("/todos/:id", (req, res, next) => {
  if (req.method === "DELETE") {
    const todo = router.db.get("todos").find({ id: req.params.id }).value();
    if (todo) {
      router.db
        .get("todos")
        .find({ id: req.params.id })
        .assign({ visible: false, updatedAt: new Date().toISOString() })
        .write();
      res.status(200).json({ message: "Todo removido com sucesso" });
      return;
    }
  }
  next();
});

// Middleware para tratamento de erros
server.use((err, req, res, next) => {
  console.error(`[BACKEND] Erro: ${err.message}`);
  res.status(500).json({
    status: 500,
    message: "Erro interno do servidor",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

server.use(middlewares);
server.use(router);

server.listen(3009, () => {
  console.log("[BACKEND] JSON Server está rodando na porta 3009");
  console.log("[BACKEND] Endpoints disponíveis:");
  console.log("[BACKEND] - POST /login");
  console.log("[BACKEND] - POST /logout");
  console.log("[BACKEND] - GET /users");
  console.log("[BACKEND] - GET /todos (apenas visíveis)");
  console.log("[BACKEND] - POST /todos");
  console.log("[BACKEND] - PUT /todos/:id");
  console.log("[BACKEND] - DELETE /todos/:id (soft delete)");
});
