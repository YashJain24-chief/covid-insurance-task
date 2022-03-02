import React from "react";

export default function Heading(props) {
  return (
    <p className={`top-plans-paragraph ${props.secondClass}`}>
      {props.heading}
    </p>
  );
}
