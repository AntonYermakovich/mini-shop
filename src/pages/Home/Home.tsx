import Hero from "../../components/Home/Hero";
import Category from "../../components/Home/Category";
import BestSellers from "../../components/Home/BestSellers";
import Advantages from "../../components/Home/Advantages";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero />

      <Category />

      <BestSellers />

      <Advantages />
    </>
  );
};

export default Home;
