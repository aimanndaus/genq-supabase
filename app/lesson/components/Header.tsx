import { FC } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/useExitModal";

interface HeaderProps {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
}

export const Header: FC<HeaderProps> = ({
  hasActiveSubscription,
  hearts,
  percentage,
}) => {
  const { open } = useExitModal();

  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
      <X
        onClick={open}
        className="text-slate-500 hover:opacity-75 text-xl transition cursor-pointer"
      />

      <Progress value={percentage} />

      <div className="text-rose-500 flex items-center font-bold">
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
            alt="Heart"
            className="mr-2"
          />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
};
