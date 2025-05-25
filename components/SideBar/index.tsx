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
import { ThemeToggle } from "../ThemeToggle";
import { LocaleToggle } from "../LocaleToggle";
import Link from "next/link";

export function SideBar() {
  const items = [
    {
      title: "Home",
      url: "/it/",
      icon: FaHome,
    },
    {
      title: "About",
      url: "/it/about",
      icon: FaInfo,
    },
    {
      title: "Projects",
      url: "/it/projects",
      icon: FaPeopleCarry,
    },
  ];

  const contacts = [
    {
      title: "Scrivimi",
      url: "keltramarketing@gmail.com",
      icon: FaAt,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/keltramarie/",
      icon: FaInstagram,
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@keltra.marie",
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
                    <Link href={item.url} locale="en">
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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <LocaleToggle />
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
