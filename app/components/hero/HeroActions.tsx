// components/hero/HeroActions.tsx
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

export default function HeroActions() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">

      <button className="flex items-center gap-2 px-4 py-3 bg-linear-to-br from-[#72c990] to-[#386454] text-[#121313] text-[23px] font-extrabold tracking-widest rounded-lg hover:scale-105 hover:brightness-110 transition">
        <FaCalendarAlt  />
        Prendre RDV
      </button>

      <button className="flex items-center gap-2 border border-(--green-main) text-lg text-(--green-main) font-bold px-5 py-4 rounded-lg hover:bg-(--green-main) hover:text-black transition">
        Découvrir nos projets
        <FiArrowDown size={18} style={{ strokeWidth: "4px" }} />
      </button>

      <div className="hidden md:block absolute -bottom-12 left-11.5">
        <Image
          src="/Un_Ptit_Click.png"
          alt="Un ptit click"
          width={130}
          height={130}
        />
      </div>

    </div>
  );
}