import { Button } from "@/components/ui/button";
import Link from "next/link";

function comingSoon() {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-4 justify-center items-center fixed top-0 left-0 z-[10000] bg-white/55 backdrop-blur-sm">
      <h1 className="text-2xl font-thin text-dark-400 text-center">
        "Something went wrong !"
      </h1>
      <div className="flex gap-x-4 items-center">
        <Link href="/advance">
          <Button className="" variant="secondary">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default comingSoon;
