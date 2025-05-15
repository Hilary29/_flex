import TopNavbar from "../home/components/TopNavbar"
import Navbar from "../home/components/Navbar"
import Landd from "./Landd"
import Items from "./Items"
import Footer from "../home/components/Footer"

export default function Home() {
    return (
      <div>
        <TopNavbar/>
        <Navbar/>
        <Landd/>
        <Items/>
        <Footer/>
      </div>
     );
   }