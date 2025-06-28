import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  AllTodosButton,
  CancelButton,
  CompletedTodosButton,
  ConfirmButton,
  CreateButton,
  DeleteButton,
  EditButton,
  MoreButton,
  PendingTodosButton,
  SortAZButton,
  SortNewestButton,
  SortOldestButton,
  SortZAButton,
} from "../ActionButtons";

describe("ActionButtons", () => {
  const mockOnAction = jest.fn();

  beforeEach(() => {
    mockOnAction.mockClear();
  });

  describe("CreateButton", () => {
    it("deve renderizar o botão de criar", () => {
      render(<CreateButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Criar novo item"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<CreateButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<CreateButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("MoreButton", () => {
    it("deve renderizar o botão de mais opções", () => {
      render(<MoreButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Mais opções"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<MoreButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<MoreButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("EditButton", () => {
    it("deve renderizar o botão de editar", () => {
      render(<EditButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Editar item"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<EditButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<EditButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("DeleteButton", () => {
    it("deve renderizar o botão de excluir", () => {
      render(<DeleteButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Excluir item"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<DeleteButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<DeleteButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("ConfirmButton", () => {
    it("deve renderizar o botão de confirmar", () => {
      render(<ConfirmButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Confirmar ação"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<ConfirmButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<ConfirmButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("CancelButton", () => {
    it("deve renderizar o botão de cancelar", () => {
      render(<CancelButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Cancelar ação"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<CancelButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve renderizar ícone", () => {
      render(<CancelButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("AllTodosButton", () => {
    it("deve renderizar o botão de todos os to-dos", () => {
      render(<AllTodosButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ver todos os to-dos"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<AllTodosButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<AllTodosButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Todos os to-dos")).toBeInTheDocument();
    });
  });

  describe("CompletedTodosButton", () => {
    it("deve renderizar o botão de finalizados", () => {
      render(<CompletedTodosButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ver to-dos finalizados"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<CompletedTodosButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<CompletedTodosButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Finalizados")).toBeInTheDocument();
    });
  });

  describe("PendingTodosButton", () => {
    it("deve renderizar o botão de pendentes", () => {
      render(<PendingTodosButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ver to-dos pendentes"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<PendingTodosButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<PendingTodosButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Pendentes")).toBeInTheDocument();
    });
  });

  describe("SortAZButton", () => {
    it("deve renderizar o botão de ordenar A-Z", () => {
      render(<SortAZButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ordenar de A a Z"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<SortAZButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<SortAZButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Ordenar A-Z")).toBeInTheDocument();
    });
  });

  describe("SortZAButton", () => {
    it("deve renderizar o botão de ordenar Z-A", () => {
      render(<SortZAButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ordenar de Z a A"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<SortZAButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<SortZAButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Ordenar Z-A")).toBeInTheDocument();
    });
  });

  describe("SortOldestButton", () => {
    it("deve renderizar o botão de mais antigos", () => {
      render(<SortOldestButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ordenar por mais antigos"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<SortOldestButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<SortOldestButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Mais antigos")).toBeInTheDocument();
    });
  });

  describe("SortNewestButton", () => {
    it("deve renderizar o botão de mais recentes", () => {
      render(<SortNewestButton onAction={mockOnAction} />);
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "Ordenar por mais recentes"
      );
    });

    it("deve chamar onAction quando clicado", () => {
      render(<SortNewestButton onAction={mockOnAction} />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it("deve ter tooltip correto", () => {
      render(<SortNewestButton onAction={mockOnAction} />);
      const button = screen.getByRole("button");
      fireEvent.mouseEnter(button);
      expect(screen.getByText("Mais recentes")).toBeInTheDocument();
    });
  });

  describe("Comportamento Geral", () => {
    it("deve renderizar ícones em todos os botões", () => {
      const buttons = [
        CreateButton,
        MoreButton,
        EditButton,
        DeleteButton,
        ConfirmButton,
        CancelButton,
        AllTodosButton,
        CompletedTodosButton,
        PendingTodosButton,
        SortAZButton,
        SortZAButton,
        SortOldestButton,
        SortNewestButton,
      ];

      buttons.forEach((ButtonComponent) => {
        const { unmount } = render(<ButtonComponent onAction={mockOnAction} />);
        const button = screen.getByRole("button");
        expect(button.querySelector("svg")).toBeInTheDocument();
        unmount();
      });
    });

    it("deve não chamar onAction quando não fornecido", () => {
      render(<CreateButton />);
      fireEvent.click(screen.getByRole("button"));
      expect(mockOnAction).not.toHaveBeenCalled();
    });
  });
});
