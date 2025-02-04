import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/FeedWrapper";
import { Promo } from "@/components/Promo";
import { Quests } from "@/components/Quests";
import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { Navbar } from "./components/Navbar";
import { Unit } from "./components/Unit";
import Footer from "@/app/(marketing)/components/Footer";

export const metadata = {
  title: "GenQ | Learning page",
  description: "Learn, Practice and master new languages with GenQ.",
};

const LearnPage = async () => {
  const userProgressPromise = getUserProgress();
  const courseProgressPromise = getCourseProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const unitsDataPromise = getUnits();
  const userSubscriptionPromise = getUserSubscription();

  const [
    userProgress,
    courseProgress,
    lessonPercentage,
    units,
    userSubscription,
  ] = await Promise.all([
    userProgressPromise,
    courseProgressPromise,
    lessonPercentagePromise,
    unitsDataPromise,
    userSubscriptionPromise,
  ]);

  if (
    !userProgress ||
    !userProgress.activeCourse ||
    !courseProgress?.activeLesson
  )
    redirect("/courses");

  return (
    <div className="flex gap-20 px-5">
      <FeedWrapper>
        <Navbar title={userProgress.activeCourse.title} />

        {units.map((unit) => (
          <Unit
            {...unit}
            activeLesson={courseProgress.activeLesson}
            activeLessonPercentage={lessonPercentage}
            key={unit.id}
          />
        ))}
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
        <Footer />
      </StickyWrapper>
    </div>
  );
};
export default LearnPage;
