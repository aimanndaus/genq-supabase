"use client";

import { useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  return (
    <ul className="w-full">
      <li className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/genq.svg" alt="Heart" width={60} height={60} />

        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Alphazoo
          </p>
        </div>
        <Link href="/tester">
          <Button>
            <div className="flex items-center">
              {/* <Image src="/points.svg" alt="Points" height={20} width={20} /> */}
              <p>Coming Soon</p>
            </div>
          </Button>
        </Link>
      </li>
      <li className="flex items-center w-full p-4 gap-x-4 border-t-2 ">
        <Image src="/heart.svg" alt="Heart" width={60} height={60} />

        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            GENQ AI
          </p>
        </div>
        <Link href="/comingSoon">
          <Button>
            <div className="flex items-center">
              {/* <Image src="/points.svg" alt="Points" height={20} width={20} /> */}
              <p>Coming Soon</p>
            </div>
          </Button>
        </Link>
      </li>
      <li className="flex items-center w-full p-4 gap-x-4 border-t-2 ">
        <Image src="/heart.svg" alt="Heart" width={60} height={60} />

        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            The Good Words
          </p>
        </div>
        <Link href="/wordle">
          <Button>
            <div className="flex items-center">
              {/* <Image src="/points.svg" alt="Points" height={20} width={20} /> */}
              <p>Play Now</p>
            </div>
          </Button>
        </Link>
      </li>

      {/* <div>
        {isAdmin() && (
          <SidebarItem label="Admin console" href="/admin" iconSrc="/boy.svg" />
        )}
      </div> */}
    </ul>
  );
};
export default Items;
