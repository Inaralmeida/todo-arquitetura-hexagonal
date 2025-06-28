import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import IconButton from "../IconButton";

const MockIcon = () => <svg data-testid="mock-icon">Icon</svg>;

describe("IconButton Component", () => {
  it("deve renderizar o botão com ícone", () => {
    render(<IconButton icon={<MockIcon />} />);
    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("deve chamar onClick quando clicado", () => {
    const handleClick = jest.fn();
    render(<IconButton icon={<MockIcon />} onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("deve mostrar tooltip quando hover", () => {
    render(<IconButton icon={<MockIcon />} tooltip="Teste tooltip" />);
    const button = screen.getByRole("button");

    fireEvent.mouseEnter(button);
    expect(screen.getByText("Teste tooltip")).toBeInTheDocument();
  });

  it("deve esconder tooltip quando mouse sai", async () => {
    render(<IconButton icon={<MockIcon />} tooltip="Teste tooltip" />);
    const button = screen.getByRole("button");

    fireEvent.mouseEnter(button);
    expect(screen.getByText("Teste tooltip")).toBeInTheDocument();

    fireEvent.mouseLeave(button);
    await waitFor(() => {
      expect(screen.queryByText("Teste tooltip")).not.toBeInTheDocument();
    });
  });

  it("deve usar aria-label do tooltip quando não fornecido", () => {
    render(<IconButton icon={<MockIcon />} tooltip="Teste tooltip" />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Teste tooltip"
    );
  });

  it("deve usar aria-label fornecido quando disponível", () => {
    render(
      <IconButton
        icon={<MockIcon />}
        tooltip="Teste tooltip"
        aria-label="Label customizado"
      />
    );
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Label customizado"
    );
  });

  it("deve ter formato redondo", () => {
    render(<IconButton icon={<MockIcon />} />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ borderRadius: "50%" });
  });

  it("deve estar desabilitado quando disabled for true", () => {
    render(<IconButton icon={<MockIcon />} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("deve estar desabilitado quando loading for true", () => {
    render(<IconButton icon={<MockIcon />} loading />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("não deve chamar onClick quando desabilitado", () => {
    const handleClick = jest.fn();
    render(<IconButton icon={<MockIcon />} onClick={handleClick} disabled />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("não deve chamar onClick quando carregando", () => {
    const handleClick = jest.fn();
    render(<IconButton icon={<MockIcon />} onClick={handleClick} loading />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("não deve mostrar tooltip quando desabilitado", () => {
    render(<IconButton icon={<MockIcon />} tooltip="Teste tooltip" disabled />);
    const button = screen.getByRole("button");

    fireEvent.mouseEnter(button);
    expect(screen.queryByText("Teste tooltip")).not.toBeInTheDocument();
  });

  it("não deve mostrar tooltip quando carregando", () => {
    render(<IconButton icon={<MockIcon />} tooltip="Teste tooltip" loading />);
    const button = screen.getByRole("button");

    fireEvent.mouseEnter(button);
    expect(screen.queryByText("Teste tooltip")).not.toBeInTheDocument();
  });
});
