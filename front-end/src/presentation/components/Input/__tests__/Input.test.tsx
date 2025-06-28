import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../style/theme";
import { Input } from "../Input";
import { InputProps } from "../Input.types";

const renderInput = (props: Partial<InputProps> = {}) => {
  const defaultProps: InputProps = {
    value: "",
    onChange: jest.fn(),
    ...props,
  };

  return render(
    <ThemeProvider theme={theme}>
      <Input {...defaultProps} />
    </ThemeProvider>
  );
};

describe("Input", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o input com placeholder", () => {
    renderInput({ placeholder: "Digite seu nome" });

    const input = screen.getByPlaceholderText("Digite seu nome");
    expect(input).toBeInTheDocument();
  });

  it("deve renderizar o label quando fornecido", () => {
    renderInput({ label: "Nome" });

    const label = screen.getByText("Nome");
    expect(label).toBeInTheDocument();
  });

  it("deve chamar onChange quando o valor é alterado", () => {
    const onChange = jest.fn();
    renderInput({ onChange });

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "teste" } });

    expect(onChange).toHaveBeenCalledWith("teste");
  });

  it("deve chamar onBlur quando o input perde o foco", () => {
    const onBlur = jest.fn();
    renderInput({ onBlur });

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalled();
  });

  it("deve exibir mensagem de erro quando fornecida", () => {
    renderInput({ error: "Campo obrigatório" });

    const errorMessage = screen.getByText("Campo obrigatório");
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("role", "alert");
  });

  it("deve aplicar estilos de erro quando há erro", () => {
    renderInput({ error: "Campo obrigatório" });

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("deve renderizar asterisco para campos obrigatórios", () => {
    renderInput({ label: "Nome", required: true });

    const requiredIndicator = screen.getByLabelText("campo obrigatório");
    expect(requiredIndicator).toBeInTheDocument();
  });

  it("deve desabilitar o input quando disabled é true", () => {
    renderInput({ disabled: true });

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("deve usar o tipo correto do input", () => {
    renderInput({ type: "email" });

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("deve usar o id fornecido", () => {
    renderInput({ id: "test-input", label: "Nome" });

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Nome");

    expect(input).toHaveAttribute("id", "test-input");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("deve usar o name fornecido", () => {
    renderInput({ name: "username" });

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("name", "username");
  });

  it("deve usar aria-label quando fornecido", () => {
    renderInput({ "aria-label": "Campo de entrada" });

    const input = screen.getByLabelText("Campo de entrada");
    expect(input).toBeInTheDocument();
  });

  it("deve usar label como aria-label quando aria-label não é fornecido", () => {
    renderInput({ label: "Nome do usuário" });

    const input = screen.getByLabelText("Nome do usuário");
    expect(input).toBeInTheDocument();
  });

  it("deve associar mensagem de erro ao input via aria-describedby", () => {
    renderInput({ error: "Campo obrigatório", id: "test-input" });

    const input = screen.getByRole("textbox");
    const errorMessage = screen.getByText("Campo obrigatório");

    expect(input).toHaveAttribute("aria-describedby", "test-input-error");
    expect(errorMessage).toHaveAttribute("id", "test-input-error");
  });

  it("deve gerar id único quando não fornecido", () => {
    renderInput({ label: "Nome" });

    const input = screen.getByRole("textbox");
    const label = screen.getByText("Nome");

    const inputId = input.getAttribute("id");
    expect(inputId).toBeTruthy();
    expect(label).toHaveAttribute("for", inputId);
  });
});
