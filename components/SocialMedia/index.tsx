"use client";
import { useEffect, useState } from "react";
import { InstagramEmbed, InstagramEmbedProps } from "react-social-media-embed";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  title: string;
  text?: string;
} & InstagramEmbedProps;

export function SocialMedia({ title, text, className, ...props }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-primary text-center text-2xl font-semibold">
          {title}
        </CardTitle>
        <CardDescription>{text}</CardDescription>
      </CardHeader>
      <CardContent>
        <InstagramEmbed {...props} />
      </CardContent>
    </Card>
  );
}
