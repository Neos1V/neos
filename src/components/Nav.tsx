import { NavType } from "@/sanity/lib/type";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "./shared/CtaButton";

export default function Nav({ data }: { data: NavType }) {
  return (
    <div className="shadow-md flex items-center px-8 py-4 border border-[#E5E7EB]/50 rounded-full w-fit bg-[#F8F8F8]/80 fixed left-1/2 -translate-x-1/2 top-[50px] z-50">
      <Image src={data.logo} alt="logo" width={80} height={40} />
      <div className="gap-[26px] flex ml-[80px] mr-[50px]">
        <Link href="#">A propos</Link>
        <Link href="#">Features</Link>
        <Link href="#">Programme</Link>
        <Link href="#">Testimonial</Link>
        <Link href="#">FAQ</Link>
      </div>
      <CtaButton text={data.ctaButton} link={data.ctaLink} />
    </div>
  );
}
