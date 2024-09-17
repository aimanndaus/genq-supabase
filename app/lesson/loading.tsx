// import { Loader } from "lucide-react";

// const Loading = () => {
//   return (
//     <div className="h-full w-full flex items-center justify-center">
//       <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
//     </div>
//   );
// };
// export default Loading;

import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-loading/70">
      <Image
        alt="loader"
        src="/icons/loader.svg"
        height={200}
        width={200}
        className="size-8  text-muted-foreground animate-spin"
      />
    </div>
  );
};
export default Loading;
