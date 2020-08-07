import React from "react";
import { styles as dashStyles } from "@dash-ui/styles";
import Text from "./Text";

const TextBox = ({ color, outer = false, ...other }) => (
  <Text {...other} className={styles({ [`color${color}`]: true, outer })} />
);

const styles = dashStyles({
  default: {
    color: "white",
  },
  outer: {
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
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
