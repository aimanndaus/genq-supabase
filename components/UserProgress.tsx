import Link from "next/link";
import Image from "next/image";

import { courses } from "@/db/schema";

import { Button } from "./ui/button";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: Props) => {
  return (
    <section className="flex justify-between items-center gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="defaultOutline">
          <Image
            src={activeCourse.imgSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>

      <Link href="/quests">
        <Button className="text-orange-500" variant="defaultOutline">
          <Image
            src="/points.svg"
            alt="Points"
            className="mr-2"
            width={28}
            height={28}
          />
          {points}
        </Button>
      </Link>

      <Link href="/shop">
        <Button className="text-orange-500" variant="defaultOutline">
          <Image
            src="/heart.svg"
            height={28}
            width={28}
            alt="Heart"
            className="mr-2 animate-pulse"
          />
          {hasActiveSubscription ? (
            <Image
              src="/img/icon/infinity.svg"
              height={28}
              width={28}
              alt="infinity"
              className="mr-2"
            />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </section>
  );
};
