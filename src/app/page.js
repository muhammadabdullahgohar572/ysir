import AboutUsWithIcons from "./Components/AboutUsWithIcons";
import CustomProducts from "./Components/CustomProducts";
import FAQPage from "./Components/Faqs";
import { Hero } from "./Components/Hero";
import OrderProcess from "./Components/OrderProcess";
import SimpleCreativeHero from "./Components/SimpleCreativeHero";

export default function Home() {
  return (
   <>
   <Hero/>
   <CustomProducts/>
  <OrderProcess/>
  <AboutUsWithIcons/>
  <SimpleCreativeHero/>
  <FAQPage/>
   </>
  );
}
