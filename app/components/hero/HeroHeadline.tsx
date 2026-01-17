export default function HeroHeadline() {
  return (
    <h1 className="font-bold my-4 tracking-tight leading-[1.1] text-[clamp(3px,3.5199vw,48.7px)] wrap-break-words">
      Votre <span className="text-(--green-main)">site</span> doit{" "}
      <span className="text-(--green-main)">donner envie</span> de
      <span className="text-(--green-main)"> rester</span>, pas de{" "}
      <span className="strike-black">revenir</span>
      <span className="strike-white"> en</span>{" "}
      <span className="strike-black">arrière</span>.
    </h1>
  );
}