import Herro from "./Herro"
import TopNavbar from "../home/components/TopNavbar"
import Navbar from "../home/components/Navbar"
import Campus from "./Campus"
import Whole from "./Whole"
import Choose from "./Choose"
import Values from "./Values"
import Vision from "./Vision"
import Mission from "./Mission"
import Footer from "../home/components/Footer"


export default function Home() {
    return (
        <div>
            <TopNavbar/>
             <Navbar/>
             <Herro/>
             <Campus/>
             <Whole/>
             <Choose/>
             <Values/>
             <Vision/>
             <Mission/>
             <Footer/>
        </div>
    );
    }