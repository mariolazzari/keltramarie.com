import { PropsWithChildren } from "react";

export function Subtitle({ children }: PropsWithChildren) {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
}
