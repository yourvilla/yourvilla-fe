import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Chip } from "@mui/material";
import classNames from "classnames";

const CustomChip = ({
  onClick,
  onDelete,
  className,
  label,
  color,
  variant="outlined",
}) => {
  return (
    <>
      <Chip
        className={classNames("!m-1 !shadow-xl", className)}
        variant={variant}
        onClick={onClick}
        color={color}
        onDelete={onDelete}
        deleteIcon={<DoneIcon />}
        label={label}
      />
    </>
  );
};

export default CustomChip;
