import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { Topbar } from "./components/Topbar";
import Digitize from "./components/Pages/Digitize";
import  Automation  from "./components/Pages/Automation";
import { Home } from "./components/Pages/Home";
import { useEffect } from "react";
import  Cloud  from "./components/Pages/Cloud";
import Artificialintellegence from "./components/Pages/Artificialintellegence";
import Blockchain from "./components/Pages/Blockchain";
import Aboutus from "./components/Pages/Aboutus";
import Testimonial from "./components/Pages/Testimonial";
import Business from "./components/Pages/Business";
import Clientele from "./components/Pages/Clientele";
import Pricing from "./components/Pages/Pricing";
import Windchill from "./components/Pages/Windchill";
import Blogs from "./components/Pages/Blogs";
import Blogs2 from "./components/Pages/Blogs2";
import Consultant from "./components/Pages/Consultant";
import Technical from "./components/Pages/Technical";
import Uncategorized from "./components/Pages/Uncategorized";
import Satifiedblogs from "./components/Pages/Satifiedblogs";

function Reload() {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}



function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Logo />
        <Navbar />
        <Reload />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/digitizes" exact Component={Digitize} />
          <Route path="/automation" exact Component={Automation} />
          <Route path="/CloudService" exact Component={Cloud} />
          <Route path="/Artificialintellegence" exact Component={Artificialintellegence} />
          <Route path="/blockchain" exact Component={Blockchain} />
          <Route path="/aboutus" exact Component={Aboutus} />
          <Route path="/testimonials" exact Component={Testimonial} />
          <Route path="/businesscase" exact Component={Business} />
          <Route path="/clientele" exact Component={Clientele} />
          <Route path="/pricingmodels" exact Component={Pricing} />
          <Route path="/windchill-consultants" exact Component={Windchill} />
          <Route path="/blogs" exact Component={Blogs} />
          <Route path="/blogspage2" exact Component={Blogs2} />
          <Route path="/Consultant" exact Component={Consultant} />
          <Route path="/Technical" exact Component={Technical} />
          <Route path="/Uncategorized" exact Component={Uncategorized} />
          <Route path="/satifiedblogs" exact Component={Satifiedblogs} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
