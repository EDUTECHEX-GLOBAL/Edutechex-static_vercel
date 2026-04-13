import React from "react";
import "./stem-labs.css";

import stemImage from "../../../assets/stem-edit.png";

const StemLabs = () => {
  return (
    <div className="stem-container">

      {/* LEFT CONTENT */}
      <div className="stem-content">
        <h1>
          Innovating STEM Labs through <span>R&D</span>
        </h1>

        <p>
          Our programs enable inquiry-based learning that promotes acquisition of
          deep conceptual domain knowledge and inquiry skills, with the further
          intent of interesting students in careers in science.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="stem-image">
        <img src={stemImage} alt="STEM Labs" />
      </div>

    </div>
  );
};

export default StemLabs;