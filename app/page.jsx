import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import LogoMarquee from "../components/LogoMarquee";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";

export default function Page(){
  return (
    <>
      <Reveal><Hero /></Reveal>
      <Reveal delay={0.1}><LogoMarquee /></Reveal>
      <Reveal delay={0.15}><Services /></Reveal>
      <Reveal delay={0.2}><Portfolio /></Reveal>
      <Reveal delay={0.25}><About /></Reveal>
    </>
  );
}
