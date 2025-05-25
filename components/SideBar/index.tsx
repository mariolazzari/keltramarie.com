import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  FaHome,
  FaInfo,
  FaPeopleCarry,
  FaAt,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

export function SideBar() {
  const items = [
    {
      title: "Home",
      url: "/",
      icon: FaHome,
    },
    {
      title: "About",
      url: "/about",
      icon: FaInfo,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: FaPeopleCarry,
    },
  ];

  const contacts = [
    {
      title: "Write to me",
      url: "/about",
      icon: FaAt,
    },
    {
      title: "Instagram",
      url: "/",
      icon: FaInstagram,
    },
    {
      title: "TikTok",
      url: "/projects",
      icon: FaTiktok,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>My site</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My contacts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contacts.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ThemeToggle />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
