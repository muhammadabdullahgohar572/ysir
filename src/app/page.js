import AboutUsWithIcons from "./Components/AboutUsWithIcons";
import CustomProducts from "./Components/CustomProducts";
import FAQPage from "./Components/Faqs";
import OrderProcess from "./Components/OrderProcess";
import SimpleCreativeHero from "./Components/SimpleCreativeHero";

export default function Home() {
  return (
   <>
   <CustomProducts/>
  <OrderProcess/>
  <AboutUsWithIcons/>
  <SimpleCreativeHero/>
  <FAQPage/>
   </>
  );
}
