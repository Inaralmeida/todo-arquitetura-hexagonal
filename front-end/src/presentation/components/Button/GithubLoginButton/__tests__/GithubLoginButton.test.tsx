import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import GithubLoginButton from "../GithubLoginButton";

describe("GithubLoginButton Component", () => {
  it("deve renderizar o botão de login com GitHub", () => {
    render(<GithubLoginButton />);
    expect(
      screen.getByRole("button", { name: "Entrar com GitHub" })
    ).toBeInTheDocument();
  });

  it("deve chamar onGithubLogin quando clicado", () => {
    const handleGithubLogin = jest.fn();
    render(<GithubLoginButton onGithubLogin={handleGithubLogin} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleGithubLogin).toHaveBeenCalledTimes(1);
  });

  it("deve renderizar com ícone do GitHub", () => {
    render(<GithubLoginButton />);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("deve ter aria-label correto", () => {
    render(<GithubLoginButton />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Entrar com GitHub"
    );
  });

  it("deve renderizar o botão com texto correto", () => {
    render(<GithubLoginButton />);
    expect(screen.getByText("Entrar com GitHub")).toBeInTheDocument();
  });

  it("deve chamar onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<GithubLoginButton onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve chamar ambos onClick e onGithubLogin quando fornecidos", () => {
    const handleClick = jest.fn();
    const handleGithubLogin = jest.fn();
    render(
      <GithubLoginButton
        onClick={handleClick}
        onGithubLogin={handleGithubLogin}
      />
    );

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleGithubLogin).toHaveBeenCalledTimes(1);
  });

  it("não deve chamar onClick quando desabilitado", () => {
    const handleClick = jest.fn();
    render(<GithubLoginButton onClick={handleClick} disabled />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("não deve chamar onGithubLogin quando desabilitado", () => {
    const handleGithubLogin = jest.fn();
    render(<GithubLoginButton onGithubLogin={handleGithubLogin} disabled />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleGithubLogin).not.toHaveBeenCalled();
  });

  it("não deve chamar onClick quando carregando", () => {
    const handleClick = jest.fn();
    render(<GithubLoginButton onClick={handleClick} loading />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("deve mostrar 'Carregando...' quando loading for true", () => {
    render(<GithubLoginButton loading />);
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("deve ter aria-label apropriado", () => {
    render(<GithubLoginButton />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Entrar com GitHub"
    );
  });
});
