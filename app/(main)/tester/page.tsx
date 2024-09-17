// import React from "react";

// const EmbeddedForm: React.FC = () => {
//   return (
//     <div>
//       <h1 className="mb-5 text-2xl">Alphazoo</h1>
//       <iframe
//         className="rounded-lg"
//         src="https://alphazoo.vercel.app/"
//         width="110%"
//         height="700px"
//         style={{ border: "none" }}
//         title="Embedded Form"
//       />
//       <div>hello</div>
//     </div>
//   );
// };

// export default EmbeddedForm;

import { getUserProgress } from "@/db/queries";

const tester = async () => {
  const userProgressPromise = getUserProgress();

  const [userProgress] = await Promise.all([userProgressPromise]);
  return (
    <div>
      <p>{userProgress?.userName}</p>
    </div>
  );
};

export default tester;
