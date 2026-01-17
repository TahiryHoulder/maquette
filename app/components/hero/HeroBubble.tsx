import Image from "next/image";

export default function HeroBubble() {
  return (
    <div className="flex justify-center w-full px-6">
      <div className="flex items-center gap-2 sm:gap-1 justify-start bg-white text-[#131414] pl-4 pr-8 py-3 sm:py-4 rounded-full shadow-[0_0_18px_rgba(60,197,90,0.40)] w-fit max-w-full overflow-hidden">
        
        <div className="relative w-10 h-10 sm:w-16 sm:h-12 shrink-0">
          <Image
            src="/Logo_Bulle.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <h2 className="font-black uppercase tracking-wide leading-none text-[clamp(14px,3.5vw,24px)] text-left">
          CRÉER UN SITE WEB{" "}
          <span className="underline decoration-[3px] underline-offset-4">
            VRAIMENT
          </span>{" "}
          UNIQUE
        </h2>

      </div>
    </div>
  );
}