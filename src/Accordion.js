import { useState } from "react";
import { Button } from "./Button";

export function Accordion(props) {
  // Generate a state and handle , when button is clicked handle method update the state
  const [ccontrol, setCControl] = useState(false);

  // Handler
  function handlerAccordion() {
    return ccontrol ? setCControl(false) : setCControl(true);
  }

  return (
    <div className={ccontrol ? "accordion-active" : "accordion"}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "15px" }}>
          <span style={{ alignSelf: "center" }}>{"0" + props.index}</span>
          <h1>{props.title}</h1>
        </div>
        <Button customclass="luisbutton" handler={handlerAccordion}>
          {ccontrol ? props.buttonfeeder[1] : props.buttonfeeder[0]}
        </Button>
      </div>
      <div className="accordion_paraf">{ccontrol && props.paraf}</div>
    </div>
  );
}
