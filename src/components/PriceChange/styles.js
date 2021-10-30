import { Chip } from "@mui/material";
import { withStyles } from "@mui/styles";

// direction icons
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

export const ArrowUpChip = withStyles({
  root: {
    backgroundColor: "#E2FFE3",
    color: "#07A287",
    marginTop: "-.25rem",
  },
})(Chip);
export const ArrowUpIcon = withStyles({
  root: {
    fill: "#07A287",
  },
})(ArrowCircleUpIcon);

export const ArrowDownChip = withStyles({
  root: {
    backgroundColor: "#FDADAD",
    color: "#F43C3C",
    marginTop: "-.25rem",
  },
})(Chip);
export const ArrowDownIcon = withStyles({
  root: {
    fill: "#F43C3C",
  },
})(ArrowCircleDownIcon);

export const PauseChip = withStyles({
  root: {
    backgroundColor: "#AFD2FD",
    color: "#0C77F8",
    marginTop: "-.25rem",
  },
})(Chip);
export const PauseIcon = withStyles({
  root: {
    fill: "#0C77F8",
  },
})(PauseCircleIcon);
