import TopNavbar from "../home/components/TopNavbar";
import Register_page from "./Register_page"
import Footer from "../home/components/Footer";
import Header from "../home/components/Header";


export default function Home() {
    return (
      <div> 
        <TopNavbar/>
        <Header/>
        <Register_page/>
        <Footer/>
      </div>
    );
  }