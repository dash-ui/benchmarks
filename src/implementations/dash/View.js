import React from "react";
import clsx from "clsx";
import { styles } from "@dash-ui/styles";

class View extends React.Component {
  render() {
    return (
      <div
        {...this.props}
        className={clsx(this.props.className, viewStyle())}
      />
    );
  }
}

const viewStyle = styles.one({
  alignItems: "stretch",
  borderWidth: 0,
  borderStyle: "solid",
  boxSizing: "border-box",
  display: "flex",
  flexBasis: "auto",
  flexDirection: "column",
  flexShrink: 0,
  margin: 0,
  padding: 0,
  position: "relative",
  // fix flexbox bugs
  minHeight: 0,
  minWidth: 0,
});

export default View;
