import React from "react";
import { Helmet } from "react-helmet-async";
import "./stem-labs.css";

import stemImage from "../../../assets/stem-edit.png";

const StemLabs = () => {
  return (
    <>
      <Helmet>
        <title>STEM Lab Programs for Students | EduTechEx</title>
        <meta
          name="description"
          content="Explore innovative STEM lab programs designed to enhance inquiry-based learning, critical thinking, and scientific skills for students."
        />
        <link
          rel="canonical"
          href="https://www.edutechex.com/consulting/stem-labs"
        />
      </Helmet>

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
    </>
  );
};

export default StemLabs;