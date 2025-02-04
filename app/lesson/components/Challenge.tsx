import { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Card from "./Card";

interface ChallengeProps {
  options: (typeof challengeOptions.$inferSelect)[];
  onSelect: (id: number) => void;
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: (typeof challenges.$inferSelect)["type"];
}

export const Challenge: FC<ChallengeProps> = ({
  onSelect,
  options,
  status,
  type,
  disabled,
  selectedOption,
}) => {
  return (
    <div
      className={cn(
        "grid gap-3",
        type === "ASSIST" && "grid-cols-2",
        type === "SELECT" && "grid-cols-1"
        //   lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))] old value
      )}
    >
      {options.map((option, i) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imgSrc={option.imgSrc}
          shortcut={`${i + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
          isArabic={option.isArabic}
        />
      ))}
    </div>
  );
};
{
  /* <Card
  id={1}
  text="مرحبا"
  imgSrc={null}
  shortcut="A"
  selected={false}
  onClick={() => {}}
  status="none"
  audioSrc={null}
  disabled={false}
  type="ASSIST"
  isArabic={true} // Set to true for Arabic content
/> */
}
