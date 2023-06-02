import { useTitle } from "../../hooks/useTitle"
import { Faq } from "./components/Faq"
import { FeaturedProducts } from "./components/FeaturedProduct"
import { Hero } from "./components/Hero"
import { Testimonials } from "./components/Testimonys"

export const HomePage = () => {
  useTitle("Latest EBooks");
    return (
      <main>
        <Hero/>
         <FeaturedProducts />
         <Testimonials/>
         <Faq/>
        
      </main>
    )
  }