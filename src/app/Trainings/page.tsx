import TopNavbar from "../home/components/TopNavbar";
import Navbar from "../home/components/Navbar";
import Landing_page from "./Landing_page";
import Training from "../home/components/Trainings";
import Software from "../home/components/Software";
import Special from "./Special";
import Footer from "../home/components/Footer";

export default function Home() {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Landing_page />
      <Training />
      <Software />
      <Special />
      <Footer />
    </div>
  );
}
