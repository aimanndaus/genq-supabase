import {
  getAllSubscribedUser,
  getTopTenUsers,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quests } from "@/components/Quests";

export const metadata = {
  title: "GenQ | Leaderboard page",
  description: "See where you stand among other learners in the community.",
};

const LeaderBoardPage = async () => {
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();
  const leaderboardPromise = getTopTenUsers();
  const allSubscribedUserPromise = getAllSubscribedUser();

  const [userProgress, userSubscription, leaderboard, allSubscribedUser] =
    await Promise.all([
      userProgressPromise,
      userSubscriptionPromise,
      leaderboardPromise,
      allSubscribedUserPromise,
    ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <main className="flex gap-10 px-2">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/img/icon/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />

          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Leaderboard
          </h1>

          <p className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners in the community.
          </p>

          <Separator className="mb-4 h-0.5 rounded-full" />

          {leaderboard.map((userProgress, i) => {
            const subscribedUser = allSubscribedUser?.find(
              (userId) => userId === userProgress.userId
            );

            return (
              <div
                key={userProgress.userId}
                className="flex items-center mb-10  w-full p-2 px-6 rounded-xl hover:bg-gray-200/50"
              >
                <p className="font-bold text-slate-700 mr-4">{i + 1}</p>

                <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
                  <AvatarImage
                    alt={userProgress.userName}
                    className="object-cover"
                    src={userProgress.userImgSrc}
                  />
                </Avatar>

                <p className="font-bold text-neutral-800 flex-1 flex gap-x-1 items-center">
                  {userProgress.userName}
                  {subscribedUser && (
                    <Image
                      src="/blue-tick.png"
                      alt="Approval"
                      width={16}
                      height={16}
                    />
                  )}
                </p>

                <p className="text-muted-foreground">
                  {userProgress.points} XP
                </p>
              </div>
            );
          })}
        </div>
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />

        {!userSubscription?.isActive && <Promo />}

        <Quests points={userProgress.points} />
      </StickyWrapper>
    </main>
  );
};
export default LeaderBoardPage;
