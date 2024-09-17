import MobileHeaderContainer from "./MobileHeaderContainer";
import { Sidebar } from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import MobileDock from "./MobileDock";

export const MobileSidebar = () => {
  return (
    <MobileHeaderContainer>
      <Sheet>
        <SheetTrigger>{/* <MenuIcon className="text-white" /> */}</SheetTrigger>
        <MobileDock />
        <SheetContent className="p-0 z-[100] shadow-2xl" side="left">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </MobileHeaderContainer>
  );
};
