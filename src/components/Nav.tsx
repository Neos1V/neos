import { NavType } from "@/sanity/lib/type";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "./shared/CtaButton";

export default function Nav({ data }: { data: NavType }) {
  return (
    <div className="shadow-md flex items-center px-6 py-3 border border-[#E5E7EB]/50 rounded-full w-fit bg-[#F8F8F8]/80 fixed left-1/2 -translate-x-1/2 top-[50px] z-50">
      <Image
        src={data.logo}
        alt="logo"
        width={80}
        height={40}
        className="flex-shrink-0"
      />
      <nav className="flex gap-6 mx-8">
        <Link href="#" className="whitespace-nowrap">
          A propos
        </Link>
        <Link href="#" className="whitespace-nowrap">
          Features
        </Link>
        <Link href="#" className="whitespace-nowrap">
          Programme
        </Link>
        <Link href="#" className="whitespace-nowrap">
          Testimonial
        </Link>
        <Link href="#" className="whitespace-nowrap">
          FAQ
        </Link>
      </nav>
      <CtaButton text={data.ctaButton} link={data.ctaLink} />
    </div>
  );
}
