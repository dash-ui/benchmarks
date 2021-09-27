import React from "react";
import { styles } from "@dash-ui/styles";
import Text from "./Text";

const TextBox = ({ color, outer = false, ...other }) => (
  <Text {...other} className={style("color" + color, outer && "outer")} />
);

const style = styles({
  default: {
    color: "white",
  },
  outer: {
    fontStyle: "italic",
  },
  color0: {
    color: "#14171A",
  },
  color1: {
    color: "#AAB8C2",
  },
  color2: {
    color: "#E6ECF0",
  },
  color3: {
    color: "#FFAD1F",
  },
  color4: {
    color: "#F45D22",
  },
  color5: {
    color: "#E0245E",
  },
});

export default TextBox;
