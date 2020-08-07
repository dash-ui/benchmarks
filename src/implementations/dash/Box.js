import React from "react";
import View from "./View";
import { styles } from "@dash-ui/styles";

const Box = ({
  color,
  fixed = false,
  layout = "column",
  outer = false,
  ...other
}) => (
  <View
    {...other}
    className={style({
      ["color" + color]: true,
      [layout]: true,
      fixed,
      outer,
    })}
  />
);

const style = styles({
  outer: {
    alignSelf: "flex-start",
    padding: 4,
  },
  row: {
    flexDirection: "row",
  },
  color0: {
    backgroundColor: "#14171A",
  },
  color1: {
    backgroundColor: "#AAB8C2",
  },
  color2: {
    backgroundColor: "#E6ECF0",
  },
  color3: {
    backgroundColor: "#FFAD1F",
  },
  color4: {
    backgroundColor: "#F45D22",
  },
  color5: {
    backgroundColor: "#E0245E",
  },
  fixed: {
    width: 6,
    height: 6,
  },
});

export default Box;
