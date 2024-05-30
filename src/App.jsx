import { BrowserRouter } from "react-router-dom";
import Path from "./Routes/index";

const App = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        <Path />
      </BrowserRouter>
    </div>
  );
};

export default App;
