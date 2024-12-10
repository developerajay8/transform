import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/footer/page";
import Home from './home/page'

export default function Page() {
  return (
    <div className="">
      <div className="bg-gray-100 " >
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Home/>
      </div>

      <div className="">
        <Footer/>
      </div>
    </div>
  );
}
