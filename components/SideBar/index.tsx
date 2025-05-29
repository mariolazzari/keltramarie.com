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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  FaHome,
  FaInfo,
  FaPeopleCarry,
  FaAt,
  FaInstagram,
  FaTiktok,
  FaFacebook,
} from "react-icons/fa";
import { ThemeToggle } from "../ThemeToggle";
import { LocaleToggle } from "../LocaleToggle";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Copyrights from "../Copyrights";

export async function SideBar() {
  const t = await getTranslations("Sidebar");

  const items = [
    {
      title: t("home"),
      url: "/",
      icon: FaHome,
    },
    {
      title: t("about"),
      url: "/about",
      icon: FaInfo,
    },
    {
      title: t("projects"),
      url: "/projects",
      icon: FaPeopleCarry,
    },
  ];

  const contacts = [
    {
      title: t("mail"),
      url: "mailto://keltramarketing@gmail.com",
      icon: FaAt,
    },
    {
      title: t("instagram"),
      url: "https://www.instagram.com/keltramarie/",
      icon: FaInstagram,
    },
    {
      title: t("tikTok"),
      url: "https://www.tiktok.com/@keltra.marie",
      icon: FaTiktok,
    },
    {
      title: t("facebook"),
      url: "https://www.facebook.com/profile.php?id=61574022441564#",
      icon: FaFacebook,
    },
  ];

  const settings = [
    { id: "theme", component: <ThemeToggle /> },
    { id: "locale", component: <LocaleToggle /> },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader />
      <SidebarTrigger className="ml-2.5" />

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
              {settings.map(({ component, id }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild>{component}</SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Copyrights />
      </SidebarFooter>
    </Sidebar>
  );
}
