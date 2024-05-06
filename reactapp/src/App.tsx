import React from 'react';
import { Routes, Route } from "react-router-dom";


const Main = React.lazy(() => import("./User/Home"));
const Cart = React.lazy(() => import("./User/Cart"));
const Login = React.lazy(() => import("./User/Login"));
const Register = React.lazy(() => import("./User/Register"));
const ProductsList = React.lazy(() => import("./User/Products/List"));
const ProductsDetail = React.lazy(() => import("./User/Products/Detail"));
const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

 function App() {
     return (
         <Routes>
             <Route
                 path="/"
                 element={
                     <React.Suspense fallback={<>...</>}>
                         <Header />
                         <Main />
                         <Footer />
                     </React.Suspense>
                 }
             ></Route>
             <Route
                 path="register"
                 element={
                     <React.Suspense fallback={<>...</>}>
                         <Header />
                         <Register />
                         <Footer />
                     </React.Suspense>
                 }
             ></Route>
             <Route
                 path="login"
                 element={
                     <React.Suspense fallback={<>...</>}>
                         <Header />
                         <Login />
                         <Footer />
                     </React.Suspense>
                 }
             ></Route>
             <Route path=":path" >
                 <Route
                     index
                     element={
                         <React.Suspense fallback={<>...</>}>
                             <Header />
                             <ProductsList />
                             <Footer />
                         </React.Suspense>
                     }
                 />
                 <Route
                     path=":prmId"
                     element={
                         <React.Suspense fallback={<>...</>}>
                             <Header />
                             <ProductsDetail />
                             <Footer />
                         </React.Suspense>
                     }
                 />
             </Route>
             <Route
                 path="cart"
                 element={
                     <React.Suspense fallback={<>...</>}>
                         <Header />
                         <Cart />
                         <Footer />
                     </React.Suspense>
                 }
             ></Route>
         </Routes>
    );
}
export default App;
