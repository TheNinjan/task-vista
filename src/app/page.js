import ActionSection from "@/components/homepage/ActionSection";
import ContactForm from "@/components/homepage/ContactForm";
import FeatureSection from "@/components/homepage/FeatureSection";
import BannerSection from "@/components/homepage/HomeBanner";
import TestimonialSection from "@/components/homepage/TestimonialSection";
import Image from "next/image";

export const metadata = {
  title: "TaskVista",
  description: "Generated by The Ninjan | Niranjan Solanki",
};

export default function Home() {
  return (
    <div>
      {/* banner section  */}

      <BannerSection />
      <FeatureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  );
}
