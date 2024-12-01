import Image from "next/image";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />  
      <Recipes heading={"Top Recipes"}/>
    </>
  );
}
