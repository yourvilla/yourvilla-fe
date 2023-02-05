import { Button } from "@mui/material";
import classNames from "classnames";

export const CustomButton = ({
  children,
  className = "",
  size = "small",
  variant = "outlined",
  type,
  disabled = false,
  onClick,
  isInverse = false,
}) => {
  return (
    <Button
      variant={variant}
      className={classNames(
        "!m-3 !capitalize",
        !disabled &&
          (isInverse
            ? "!text-primary !rounded !bg-white"
            : "!bg-primary !rounded !text-white"),
        className
      )}
      size={size}
      color="success"
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
