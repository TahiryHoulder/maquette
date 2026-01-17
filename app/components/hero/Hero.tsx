import HeroBubble from "./HeroBubble";
import HeroHeadline from "./HeroHeadline";
import HeroSubheadline from "./HeroSubheadline";
import HeroActions from "./HeroActions";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">

        <HeroBubble />

        <HeroHeadline />

        <HeroSubheadline />

        <HeroActions />

      </div>
    </section>
  );
}