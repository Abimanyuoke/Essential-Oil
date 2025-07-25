import AboutLetter from "./components/AboutLetter";
import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-5">
        <AboutLetter />
        <Products/>
      </div>
    </div>
  );
}
