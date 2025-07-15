import { SidebarTrigger } from "../ui/sidebar";

export function Header() {
  return (
    <header className="h-12 w-full flex items-center px-2">
      <SidebarTrigger />
    </header>
  );
}
