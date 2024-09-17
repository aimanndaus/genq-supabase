import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Promo = () => {
  return (
    <aside className="border-2 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image
            className="animate-pulse"
            src="/unlimited.svg"
            alt="Pro"
            height={30}
            width={30}
          />

          <h3 className="font-bold text-lg">Upgrade to pro</h3>
        </div>

        <p className="text-muted-foreground">Get unlimited hearts and more</p>
      </div>

      <Link href="/shop" className="block">
        <Button variant="secondary" className="w-full" size="lg">
          Upgrade today
        </Button>
      </Link>
    </aside>
  );
};
