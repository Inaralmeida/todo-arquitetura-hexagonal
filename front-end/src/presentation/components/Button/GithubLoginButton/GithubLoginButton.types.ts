export interface GithubLoginButtonProps {
  onClick?: () => void;
  onGithubLogin?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "contained" | "outlined";
}
