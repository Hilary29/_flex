import TopNavbar from "../home/components/TopNavbar";
import Navbar from "../home/components/Navbar"
import Register_page from "./Register_page"
import Footer from "../home/components/Footer";


export default function Home() {
    return (
      <div> 
        <TopNavbar/>
        <Navbar/>
        <Register_page/>
        <Footer/>
      </div>
    );
  }