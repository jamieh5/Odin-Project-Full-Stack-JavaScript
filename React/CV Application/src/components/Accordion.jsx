import { useState } from "react";
import "../styles/accordion.css";
import arrow from "../styles/arrow.svg";

import PersonalInfo from "./PersonalInfo.jsx";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState();

  return (
    <div>
      <div className="item" onClick={() => setActiveAccordion(0)}>
        <p>Personal Info</p>
        <img
          src={arrow}
          alt="arrow-icon"
          className="arrow"
          style={{
            transform:
              activeAccordion === 0 ? "rotate(270deg)" : "rotate(90deg)",
          }}
        />
      </div>
      <div className={activeAccordion == 0 ? "active" : "hidden"}>...</div>
    </div>
  );
}

export default Accordion;
