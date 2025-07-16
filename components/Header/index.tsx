import { LocaleToggle } from "../LocaleToggle";
import { ThemeToggle } from "../ThemeToggle";
import { SidebarTrigger } from "../ui/sidebar";

export function Header() {
  return (
    <nav className="h-12 w-full flex items-center px-2 justify-between">
      <SidebarTrigger />
      <div className="flex items-center gap-1">
        <LocaleToggle showLabel={false} />
        <ThemeToggle showLabel={false} />
      </div>
    </nav>
  );
}
