import { UserProgress } from "@/components/UserProgress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { redirect } from "next/navigation";

type Props = {
  title: string;
};

export const Navbar = async ({ title }: Props) => {
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
    <nav className="sticky top-0 bg-white pb-3 lg:pt-7 lg:-mt-7 flex items-center justify-center border-b-2 mb-5 text-neutral-400 lg:z-50">
      {/* <Link href="/courses">
        <Button variant="defaultOutline" size="sm">
          <ChevronLeft className="h-5 w-5 stroke-2 text-neutral-400" />
          <span className="ml-2">courses</span>
        </Button>
      </Link> */}
      <div className=" lg:hidden">
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
      </div>

      <h1 className="text-lg font-bold hidden lg:block ">{title}</h1>

      <div />
    </nav>
  );
};
