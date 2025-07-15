import { FaCopyright } from "react-icons/fa";
import { Paragraph } from "../Typography/Paragraph";

function Copyrights() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center gap-1 justify-center text-xs w-full border-purple-500">
      <FaCopyright />
      <Paragraph>{`Keltra Marie ${year} - All rights reserved`}</Paragraph>
    </div>
  );
}

export default Copyrights;
