import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent/>}/>
          <Route path='/' element={<h1>Product</h1>}/>
          <Route path='/add' element={<h1>ADD product</h1>}/>
          <Route path='/update' element={<h1>update Product</h1>}/>
          {/* <Route path='/logout' element={<h1>ADD product</h1>}/> */}
          <Route path='/profile' element={<h1>Profile</h1>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
