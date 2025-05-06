import TopNavbar from "../home/components/TopNavbar";
import Navbar from "../home/components/Navbar"
import Landing from "./Landing";
import FAQ from "../home/components/FAQ"
import Footer from "../home/components/Footer"


export default function Home() {
    return (
        <div>
            <TopNavbar/>
            <Navbar/>
            <Landing/>
            <FAQ/>
            <Footer/>
        </div>
    );
    }