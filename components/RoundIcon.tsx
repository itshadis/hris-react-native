import React, { ReactNode } from "react";
import { View } from "react-native";

// Convert ANY color → rgba(r,g,b,A)
const toRGBA = (color: string, alpha = 0.15) => {
  // CASE 1: Named colors (green, red, blue, etc)
  const named: any = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    yellow: "#ffff00",
    gray: "#808080",
    grey: "#808080",
    orange: "#ffa500",
    purple: "#800080",
    pink: "#ffc0cb",
    brown: "#a52a2a",
  };

  if (named[color?.toLowerCase()]) {
    color = named[color.toLowerCase()];
  }

  // CASE 2: Hex — #fff or #ffffff
  if (color.startsWith("#")) {
    let hex = color.replace("#", "");

    // expand #fff → #ffffff
    if (hex.length === 3) {
      hex = hex.split("").map(x => x + x).join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // CASE 3: rgb or rgba
  if (color.startsWith("rgb")) {
    const nums = color
      .replace(/rgba?\(/, "")
      .replace(")", "")
      .split(",")
      .map(n => parseFloat(n.trim()));

    const [r, g, b] = nums;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // fallback: soft gray
  return `rgba(0,0,0,${alpha})`;
};

const RoundIcon = ({
  icon,
  color,
}: {
  icon: ReactNode;
  color: string;
}) => {
  return (
    <View
      style={{
        padding: 6,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        backgroundColor: toRGBA(color, 0.18), // fade 18%
      }}
    >
      {icon}
    </View>
  );
};

export default RoundIcon;
