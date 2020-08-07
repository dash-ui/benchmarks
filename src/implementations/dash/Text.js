import React from "react";
import clsx from "clsx";
import { styles } from "@dash-ui/styles";

class Text extends React.Component {
  render() {
    return (
      <span
        {...this.props}
        className={clsx(this.props.className, textStyle())}
      />
    );
  }
}

const textStyle = styles.one({
  display: "inline",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontSize: 14,
  margin: 0,
  padding: 0,
  whiteSpace: "pre-wrap",
  overflowWrap: "break-word",
});

export default Text;
