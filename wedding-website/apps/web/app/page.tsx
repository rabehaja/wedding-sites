import { HeroSection, Navbar, Footer } from "@repo/ui/organisms";
import { FillImage } from "@repo/ui/atoms";

export default function HomePage(): React.ReactElement {
  return (
    <>
    
      <main className="flex justify-center">
        <div className="container"> 
          <HeroSection
          coupleNames="Loïc & Wiebke"
          tagline="Join us for our wedding celebrations"
          date={{
            day: 18,
            month: "July",
            year: 2026,
          }}
          location="Chateau de Blier, Belgium"
          imageSrc="/images/hero-couple.jpg"
        />
          <Navbar />
        </div>
       

       
      </main>
      <Footer />
    </>
  );
}
