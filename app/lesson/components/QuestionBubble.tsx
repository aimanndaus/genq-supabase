import { FC, useCallback } from "react";
import Image from "next/image";
import { useAudio } from "react-use";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

interface QuestionBubbleProps {
  question: string;
  audioUrl?: string | null;
  imgUrl?: string | null;
  onClick: () => void;
  disabled: boolean;
}

export const QuestionBubble: FC<QuestionBubbleProps> = ({
  question,
  imgUrl,
  audioUrl,
  onClick,
  disabled,
}) => {
  const [audio, _, controls] = useAudio({
    src:
      audioUrl ||
      //this sound just for testing
      "https://res.cloudinary.com/dollexkwv/video/upload/v1721718263/genq/2.%20Fathah%202%20huruf/SAYUTI/%D8%A8%D9%8E_%D8%AC%D9%8E_ziuvcs.mp3",
  });
  const handleClick = useCallback(() => {
    if (disabled) return;
    //control sound to play if once clicked
    controls.play();
  }, [disabled, controls, onClick]);
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src={
          imgUrl ||
          "https://res.cloudinary.com/dhef1sxhg/image/upload/v1725003198/genq/asset/Icon_in_game_o74yhh.gif"
        }
        alt="genq"
        width={100}
        height={100}
        className="size-30 lg:size-40 "
      />

      <div className="relative py-3 px-4 border-2 rounded-xl gap-5 flex text-4xl font-bold lg:5xl">
        <h1 className="mt-2 text-center"> {question}</h1>
        <div onClick={handleClick} className="flex gap-2">
          <Button variant="default" className="mt-2">
            {audio}
            <Volume2 />
          </Button>
        </div>
        <div className="absolute size-0 border-x-8 -left-3 top-1/2 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
      </div>
    </div>
  );
};

//todo: add button sound and update image ✅
//default image if no image or null
// src:https://res.cloudinary.com/dhef1sxhg/image/upload/v1725003198/genq/asset/Icon_in_game_o74yhh.gif
