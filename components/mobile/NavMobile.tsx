import { redirect } from "next/navigation";

import { StickyWrapper } from "@/components/StickyWrapper";
import { UserProgress } from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

export const metadata = {
  title: "GenQ | Learning page",
  description: "Learn, Practice and master new languages with GenQ.",
};

const LearnPage = async () => {
  const userProgressPromise = getUserProgress();
  const courseProgressPromise = getCourseProgress();
  const lessonPercentagePromise = getLessonPercentage();
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
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};
export default LearnPage;
