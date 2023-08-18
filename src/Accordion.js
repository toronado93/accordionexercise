import { useState } from "react";
import { Button } from "./Button";

export function Accordion(props) {
  // Generate a state and handle , when button is clicked handle method update the state

  // // Handler
  // function handlerAccordion() {
  //   return ccontrol ? setCControl(false) : setCControl(true);
  // }

  return (
    <div
      className={
        props.parentcontroller === props.controlindex
          ? "accordion-active"
          : "accordion"
      }
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <span style={{ alignSelf: "center" }}>{"0" + props.index}</span>
          <h1>{props.title}</h1>
        </div>
        <Button
          id={props.controlindex}
          customclass="luisbutton"
          handler={props.handler}
        >
          {props.parentcontroller === props.controlindex
            ? props.buttonfeeder[1]
            : props.buttonfeeder[0]}
        </Button>
      </div>
      <div className="accordion_paraf">
        {props.parentcontroller === props.controlindex && props.paraf}
      </div>
    </div>
  );
}
