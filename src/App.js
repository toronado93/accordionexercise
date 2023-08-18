import "./App.css";
import { Accordion } from "./Accordion";
import { useState } from "react";

function App() {
  const data = [
    {
      title: "Where are these chairs assembled?",
      paraf:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      control: false,
      buttonfeeder: ["+", "-"],
    },
    {
      title: "How long do I have to return my chair?",
      paraf:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      control: false,
      buttonfeeder: ["+", "-"],
    },
    {
      title: "Do you ship to countries outside the EU?",
      paraf:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      control: false,
      buttonfeeder: ["+", "-"],
    },
    {
      title: "Thinking in React",
      paraf:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      control: false,
      buttonfeeder: ["+", "-"],
    },
  ];

  // We give a number

  const [curOpen, setCurOpen] = useState(null);

  function handler(id) {
    setCurOpen(id);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {data.map((d, _) => {
        return (
          <Accordion
            handler={handler}
            parentcontroller={curOpen}
            controlindex={_}
            key={_}
            title={d.title}
            control={d.control}
            buttonfeeder={d.buttonfeeder}
            paraf={d.paraf}
            index={_ + 1}
          ></Accordion>
        );
      })}
    </div>
  );
}

export default App;
//
