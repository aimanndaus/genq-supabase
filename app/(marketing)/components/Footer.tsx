import { Button } from "@/components/ui/button";
import { footerItems } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-20 w-full border-t-2 border-slate-200 p-2 items hidden lg:block">
      <div className="max-w-screen-lg grid grid-cols-5 mx-auto gap-10 items-center justify-center ">
        {footerItems.map((items) => (
          <Link key={items.link} href={items.link}>
            <Button
              size="footer"
              key={items.label}
              variant="defaultFooterOutline"
            >
              {/* <Image
              src={flag.src}
              alt={flag.label}
              height={32}
              width={40}
              className="rounded-md mr-4 shadow-[0_0_5px_#999999]"
              priority
            /> */}
              {items.label}
            </Button>
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
