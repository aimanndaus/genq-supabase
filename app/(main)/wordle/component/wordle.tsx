import React from "react";

const EmbeddedForm: React.FC = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl">Wordle</h1>
      <iframe
        className="rounded-lg"
        src="https://www.nytimes.com/games/wordle/index.html"
        width="100%"
        height="700px"
        style={{ border: "none" }}
        title="Embedded Form"
      />
    </div>
  );
};

export default EmbeddedForm;
