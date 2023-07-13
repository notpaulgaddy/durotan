import Home from "../Home/Home";
import Login from "../Login/Login"
import ProductPage from "../ProductPage/ProductPage";
import Reset from "../Reset/Reset";
import Shop from "../Shop/Shop";
import Signup from "../Signup/Signup";
import CartView from "../CartView/CartView";
import Checkout from "../Checkout/Checkout";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/Login" element={<Login/>}/>
                <Route exact path="/Signup" element={<Signup/>}/>
                <Route exact path="/Shop" element={<Shop/>}/>
                <Route exact path="/Product/:productId" element={<ProductPage/>}/>
                <Route exact path="/Reset" element={<Reset/>}/>
                <Route exact path="/Cart" element={<CartView/>}/>
                <Route exact path="/Checkout" element={<Checkout/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;