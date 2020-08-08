import React from "react";
import clsx from "clsx";
import { styles, compileStyles } from "@dash-ui/styles";

const Dot = ({ size, x, y, children, color }) => (
  <div
    className={clsx(
      style(),
      borderStyles(size),
      marginStyles([x, y]),
      colorStyles(color)
    )}
  >
    {children}
  </div>
);

const style = styles.one({
  position: "absolute",
  cursor: "pointer",
  width: 0,
  height: 0,
  borderColor: "transparent",
  borderStyle: "solid",
  borderTopWidth: 0,
  transform: "translate(50%, 50%)",
});

const borderStyles = styles.lazy((size) => ({
  borderRightWidth: size / 2,
  borderBottomWidth: size / 2,
  borderLeftWidth: size / 2,
}));

const marginStyles = styles.lazy(([x, y]) => ({
  marginLeft: x,
  marginTop: y,
}));

const colorStyles = styles.lazy((color) => ({
  borderBottomColor: color,
}));

export default Dot;
