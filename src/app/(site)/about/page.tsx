import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | Langkah Kembang Anak",
  description: "About Langkah",
};

const AboutPage = () => {
  return (
    <main>
      <About />
      <Team />
      <Clients />
    </main>
  );
};

export default AboutPage;
