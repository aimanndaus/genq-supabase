import React from "react";
import Image from "next/image";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ClerkLoading, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DockDemo = async () => {
  return (
    <div className="relative">
      <Dock
        direction="middle"
        className="fixed bottom-0 left-0 w-full h-20 right-0 flex justify-center"
      >
        <DockIcon>
          <Link href="/learn">
            <Image
              src="/img/icon/learn.svg"
              height={30}
              width={30}
              alt="Learn"
              className="mr-2 size-9 "
            />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/leaderboard">
            <Image
              src="/img/icon/leaderboard.svg"
              height={30}
              width={30}
              alt="Leaderboard"
              className="mr-2 size-9 "
            />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/quests">
            <Image
              src="/img/icon/quest.svg"
              height={30}
              width={30}
              alt="quest"
              className="mr-2 size-9 "
            />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/shop">
            <Image
              src="/img/icon/shop.svg"
              height={30}
              width={30}
              alt="Heart"
              className="mr-2 size-9 "
            />
          </Link>
        </DockIcon>
        <DockIcon>
          <ClerkLoading>
            <Image
              alt="loader"
              src="/icons/loader.svg"
              height={200}
              width={200}
              className="size-5  text-muted-foreground animate-spin"
            />
            {/* <Loader className="w-5 h-5 text-blue-700 animate-spin" /> */}
          </ClerkLoading>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "size-9",
              },
            }}
          />
        </DockIcon>
      </Dock>
    </div>
  );
};

export default DockDemo;
