import React from "react";
import { ArrowDownChip, ArrowDownIcon, ArrowUpChip, ArrowUpIcon, PauseChip, PauseIcon } from "./styles";

export default function PriceChange(props) {
  const { text, direction } = props;

  const directionIcon = (direction) => {
    switch (direction) {
      case "up":
        return <ArrowUpChip label={text} icon={<ArrowUpIcon />} />;
      case "down":
        return <ArrowDownChip label={text} icon={<ArrowDownIcon />} />;
      case "pause":
        return <PauseChip label={text} icon={<PauseIcon />} />;
      default:
        return "";
    }
  };

  return directionIcon(direction);
}
