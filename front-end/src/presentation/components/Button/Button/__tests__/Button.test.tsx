import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("deve renderizar o botão com texto", () => {
    render(<Button>Clique aqui</Button>);
    expect(
      screen.getByRole("button", { name: "Clique aqui" })
    ).toBeInTheDocument();
  });

  it("deve chamar onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique aqui</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar spinner quando carregando", () => {
    render(<Button loading>Carregando</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("deve aplicar aria-label corretamente", () => {
    render(<Button aria-label="Botão customizado">Clique aqui</Button>);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Botão customizado"
    );
  });

  it("deve estar desabilitado quando disabled for true", () => {
    render(<Button disabled>Desabilitado</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("não deve chamar onClick quando desabilitado", () => {
    const handleClick = jest.fn();
    render(
      <Button disabled onClick={handleClick}>
        Desabilitado
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("não deve chamar onClick quando carregando", () => {
    const handleClick = jest.fn();
    render(
      <Button loading onClick={handleClick}>
        Carregando
      </Button>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("deve ter largura total quando fullWidth for true", () => {
    render(<Button fullWidth>Largura total</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ width: "100%" });
  });

  it("deve renderizar com tipo submit", () => {
    render(<Button type="submit">Enviar</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("deve renderizar com tipo reset", () => {
    render(<Button type="reset">Reset</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });
});
