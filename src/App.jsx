import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import Courses from "./Components/courses";

const App = () => {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar />
        <Courses />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
