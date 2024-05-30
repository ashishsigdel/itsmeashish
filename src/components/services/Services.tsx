import { HomeContact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services";
import { MainServices } from "@/components/services";

export default function Projects() {
  return (
    <>
      <div className="px-3 sm:px-4 md:px-5">
        <ServicesHero />
        <MainServices />
        <HomeContact />
      </div>
      <Footer />
    </>
  );
}
