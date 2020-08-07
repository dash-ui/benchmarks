import React from "react";
import clsx from "clsx";
import { styles as dashStyles, compileStyles } from "@dash-ui/styles";

const Dot = ({ size, x, y, children, color }) => (
  <div
    className={clsx(
      styles(),
      borderStyles(size),
      marginStyles([x, y]),
      colorStyles(color)
    )}
  >
    {children}
  </div>
);

const styles = dashStyles.one({
  position: "absolute",
  cursor: "pointer",
  width: 0,
  height: 0,
  borderColor: "transparent",
  borderStyle: "solid",
  borderTopWidth: 0,
  transform: "translate(50%, 50%)",
});

const dynamicStyle = (styleCallback) => {
  const oneCache = new Map();

  const css = (value) => {
    if (value === undefined) return "";
    const key = typeof value === "object" ? JSON.stringify(value) : value;
    let result = oneCache.get(key);

    if (!result) {
      result = compileStyles(styleCallback(value));
      oneCache.set(key, result);
    }

    return result;
  };

  return Object.assign((value) => dashStyles.cls(css(value)), {
    css,
  });
};

const borderStyles = dynamicStyle((size) => ({
  borderRightWidth: size / 2,
  borderBottomWidth: size / 2,
  borderLeftWidth: size / 2,
}));

const marginStyles = dynamicStyle(([x, y]) => ({
  marginLeft: x,
  marginTop: y,
}));

const colorStyles = dynamicStyle((color) => ({
  borderBottomColor: color,
}));

export default Dot;
