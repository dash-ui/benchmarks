import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";

const Dot = ({ size, x, y, children, color }) => (
  <div
    className={clsx(
      styles,
      css({
        borderBottomColor: color,
      }),
      css({
        borderRightWidth: `${size / 2}px`,
        borderBottomWidth: `${size / 2}px`,
        borderLeftWidth: `${size / 2}px`,
      }),
      css({
        marginLeft: `${x}px`,
        marginTop: `${y}px`,
      })
    )}
  >
    {children}
  </div>
);

const styles = css({
  position: "absolute",
  cursor: "pointer",
  width: 0,
  height: 0,
  borderColor: "transparent",
  borderStyle: "solid",
  borderTopWidth: 0,
  transform: "translate(50%, 50%)",
});

export default Dot;
