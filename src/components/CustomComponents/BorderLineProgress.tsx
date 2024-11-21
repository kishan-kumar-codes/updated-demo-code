"use client";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

type BorderLinearProgressProps = {
  value: number;
  color?: string;
};

export const BorderLinearProgress = styled(
  ({ value, color, ...rest }: BorderLinearProgressProps) => (
    <LinearProgress variant="determinate" value={value} {...rest} />
  )
)(({ theme, value, color }) => {
  let barColorPrimary;

  if (color) {
    barColorPrimary = color;
  } else {
    if (value < 40) {
      barColorPrimary = "#00914C";
    } else if (value >= 40 && value < 60) {
      barColorPrimary = "#FAAC18";
    } else if (value >= 60) {
      barColorPrimary = "#CF232A";
    }
  }

  return {
    height: 16,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: barColorPrimary,
    },
  };
});
