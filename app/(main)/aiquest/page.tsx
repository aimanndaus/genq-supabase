import React from "react";

const EmbeddedForm: React.FC = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl">Ai Quest</h1>
      <iframe
        className="rounded-lg"
        src="https://aiquest.ilmoore.academy/app"
        width="100%"
        height="650px"
        style={{ border: "none" }}
        title="Embedded Form"
      />
    </div>
  );
};

export default EmbeddedForm;
