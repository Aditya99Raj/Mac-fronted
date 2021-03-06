import { Login } from "@mui/icons-material"
import {Routes , Route} from "react-router"
import { Cart } from "../Components/Home/Cart"
import Checkout from "../Components/Home/Checkout"
import { Home } from "../Components/Home/Home"
import { Payment } from "../Components/Home/Payment"
import { PaymentSuccessful } from "../Components/Home/PaymentSuccessful"
import { Signin } from "../Components/LoginSIgnup/Login"
import { Signup } from "../Components/LoginSIgnup/Register"
import { DenimsDetails } from "../Components/ProductDetails/Denims"
import { FrocksDetails } from "../Components/ProductDetails/Frocks"
import { JacketsDetails } from "../Components/ProductDetails/Jackets"
import { KurtisDetails } from "../Components/ProductDetails/Kurtis"
import { MiddisDetails } from "../Components/ProductDetails/Middis"
import { TopsDetails } from "../Components/ProductDetails/Tops"
import { Denims } from "../Components/Products/Denims"
import { Frocks } from "../Components/Products/Frocks"
import { Jackets } from "../Components/Products/Jackets"
import { Kurtis } from "../Components/Products/Kurtis"
import { Middis } from "../Components/Products/Middis"
import { Tops } from "../Components/Products/Tops"


export const AllRoutes =() => {

    return(
        <Routes>

            <Route path ="/" element ={<Home />}/>

            <Route path ="/tops" element ={<Tops/>}/>
            <Route path ="/kurtis" element ={<Kurtis />}/>
            <Route path ="/denims" element ={<Denims />}/>
            <Route path ="/frocks" element ={<Frocks />}/>
            <Route path ="/jackets" element ={<Jackets />}/>
            <Route path ="/middis" element ={<Middis />}/>

            <Route path ="/topsdetails/:id" element ={<TopsDetails/>}/>
            <Route path ="/kurtisdetails/:id" element ={<KurtisDetails/>}/>
            <Route path ="/denimsdetails/:id" element ={<DenimsDetails/>}/>
            <Route path ="/frocksdetails/:id" element ={<FrocksDetails />}/>
            <Route path ="/jacketsdetails/:id" element ={<JacketsDetails/>}/>
            <Route path ="/middisdetails/:id" element ={<MiddisDetails/>}/>

            <Route path ="/cart" element ={<Cart/>}/>
            <Route path ="/payment" element ={<Payment />}/>
            <Route path ="/paymentsuccessful" element ={<PaymentSuccessful />}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
           
        </Routes>
    )
}