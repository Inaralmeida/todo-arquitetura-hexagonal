import {
  AllTodosIcon,
  CancelIcon,
  CompletedIcon,
  ConfirmIcon,
  CreateIcon,
  DeleteIcon,
  EditIcon,
  MoreIcon,
  PendingIcon,
  SortAZIcon,
  SortNewestIcon,
  SortOldestIcon,
  SortZAIcon,
} from "../../../images/icons";
import IconButton from "../IconButton";
import { ActionButtonProps } from "./ActionButtons.types";

export const CreateButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<CreateIcon />}
    tooltip="Criar"
    variant="contained"
    onClick={onAction}
    aria-label="Criar novo item"
    {...props}
  />
);

export const MoreButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<MoreIcon />}
    tooltip="Mais opções"
    variant="outlined"
    onClick={onAction}
    aria-label="Mais opções"
    {...props}
  />
);

export const EditButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<EditIcon />}
    tooltip="Editar"
    variant="outlined"
    onClick={onAction}
    aria-label="Editar item"
    {...props}
  />
);

export const DeleteButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<DeleteIcon />}
    tooltip="Excluir"
    variant="contained"
    onClick={onAction}
    aria-label="Excluir item"
    {...props}
  />
);

export const ConfirmButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<ConfirmIcon />}
    tooltip="Confirmar"
    variant="contained"
    onClick={onAction}
    aria-label="Confirmar ação"
    {...props}
  />
);

export const CancelButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<CancelIcon />}
    tooltip="Cancelar"
    variant="outlined"
    onClick={onAction}
    aria-label="Cancelar ação"
    {...props}
  />
);

export const AllTodosButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<AllTodosIcon />}
    tooltip="Todos os to-dos"
    variant="outlined"
    onClick={onAction}
    aria-label="Ver todos os to-dos"
    {...props}
  />
);

export const CompletedTodosButton = ({
  onAction,
  ...props
}: ActionButtonProps) => (
  <IconButton
    icon={<CompletedIcon />}
    tooltip="Finalizados"
    variant="outlined"
    onClick={onAction}
    aria-label="Ver to-dos finalizados"
    {...props}
  />
);

export const PendingTodosButton = ({
  onAction,
  ...props
}: ActionButtonProps) => (
  <IconButton
    icon={<PendingIcon />}
    tooltip="Pendentes"
    variant="outlined"
    onClick={onAction}
    aria-label="Ver to-dos pendentes"
    {...props}
  />
);

export const SortAZButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<SortAZIcon />}
    tooltip="Ordenar A-Z"
    variant="outlined"
    onClick={onAction}
    aria-label="Ordenar de A a Z"
    {...props}
  />
);

export const SortZAButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<SortZAIcon />}
    tooltip="Ordenar Z-A"
    variant="outlined"
    onClick={onAction}
    aria-label="Ordenar de Z a A"
    {...props}
  />
);

export const SortOldestButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<SortOldestIcon />}
    tooltip="Mais antigos"
    variant="outlined"
    onClick={onAction}
    aria-label="Ordenar por mais antigos"
    {...props}
  />
);

export const SortNewestButton = ({ onAction, ...props }: ActionButtonProps) => (
  <IconButton
    icon={<SortNewestIcon />}
    tooltip="Mais recentes"
    variant="outlined"
    onClick={onAction}
    aria-label="Ordenar por mais recentes"
    {...props}
  />
);
