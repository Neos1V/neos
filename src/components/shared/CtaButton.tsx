import Link from "next/link";
import { RippleButton } from "../animate-ui/buttons/ripple";

export default function CtaButton({
  text,
  link,
  person,
}: {
  text: string;
  link: string;
  person?: boolean;
}) {
  return (
    <RippleButton className="bg-gradient-to-r from-[#0051D2] to-[#2978FE] text-white px-6 py-3 rounded-[8px] flex gap-2 items-center">
      {person && <img src="/person.svg" alt="" />}
      <Link href={link}>{text}</Link>
    </RippleButton>
  );
}
