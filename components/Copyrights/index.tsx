import { FaCopyright } from "react-icons/fa";
import { Paragraph } from "../Typography/Paragraph";

export function Copyrights() {
  const year = new Date().getFullYear();

  return (
    <ul>
      <li className="flex gap-1 items-center justify-center">
        <FaCopyright />
        <Paragraph>{`Keltra Marie ${year}`}</Paragraph>
      </li>
      <li>
        <Paragraph className="text-center">All rights reserved</Paragraph>
      </li>
    </ul>
  );
}
