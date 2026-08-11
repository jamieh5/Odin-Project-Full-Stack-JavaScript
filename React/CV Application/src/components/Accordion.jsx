import { useState } from "react";
import "../styles/accordion.css";

import PersonalInfo from "./PersonalInfo.jsx";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState();

  return (
    <div>
      <div className="item" onClick={() => setActiveAccordion(0)}>
        Test
      </div>
      <div className={activeAccordion == 0 ? "active" : "hidden"}>
        <PersonalInfo />
      </div>
    </div>
  );
}

export default Accordion;
