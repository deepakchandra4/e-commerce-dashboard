import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Footer from "./component/Footer";
import SignUp from "./component/SignUp";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/Login";
import AddProduct from "./component/AddProduct";
import ProductList from "./component/ProductList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path='/update' element={<h1>update Product</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
          </Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
