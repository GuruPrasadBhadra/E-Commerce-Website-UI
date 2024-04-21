import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Loader from '../components/Loader'
import Header from '../components/Header'

const Home = lazy(() => import("../pages/Home"))
const Search = lazy(() => import("../pages/Search"))
const Cart = lazy(() => import("../pages/Cart"))
// import Error from '../components/Error'
const Dashboard = lazy(() => import("../pages/admin/Dashboard"))
const Products = lazy(() => import("../pages/admin/Products"))
const Transaction = lazy(() => import("../pages/admin/Transaction"))
const User = lazy(() => import("../pages/admin/User"))
const NewProduct = lazy(() => import("../pages/admin/management/NewProduct"))
const ProductManagement = lazy(() => import("../pages/admin/management/ProductManagement"))
const TransactionManagement = lazy(() => import("../pages/admin/management/TransactionManagement"))
const Barcharts = lazy(() => import("../pages/admin/charts/Barcharts"))
const Piecharts = lazy(() => import("../pages/admin/charts/Piecharts"))
const Linecharts = lazy(() => import("../pages/admin/charts/Linecharts"))
const Toss = lazy(() => import("../pages/admin/apps/Toss"))
const Coupon = lazy(() => import("../pages/admin/apps/Coupon"))
const Stopwatch = lazy(() => import("../pages/admin/apps/Stopwatch"))
const Shipping = lazy(() => import("../pages/Shipping"))
const Login=lazy(()=>import("../pages/Login"))
const UserOrders=lazy(()=>import("../pages/Orders"))
const OrderDetails=lazy(()=>import("../pages/OrderDetails"))
const BaseRoutes: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/cart" element={<Cart />} />


                        <Route
                            path="/login"
                            element={ <Login/>}/>

                        <Route>
                            <Route path="/shipping" element={<Shipping />} />
                            <Route path="/order/:id" element={<OrderDetails />} />
                            {/* <Route path="/pay" element={<Checkout />} />  */}
                             <Route path="/orders" element={<UserOrders />} />
                        </Route>


                        {/* admin route */}
                        <Route>

                            <Route path='/admin/dashboard' element={<Dashboard />} />
                            <Route path='/admin/product' element={<Products />} />
                            <Route path='/admin/transaction' element={<Transaction />} />
                            <Route path='/admin/user' element={<User />} />

                            {/* Charts */}
                            <Route path="/admin/chart/bar" element={<Barcharts />} />
                            <Route path="/admin/chart/pie" element={<Piecharts />} />
                            <Route path="/admin/chart/line" element={<Linecharts />} />

                            {/* Apps */}
                            <Route path="/admin/app/toss" element={<Toss />} />
                            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
                            <Route path="/admin/app/coupon" element={<Coupon />} />


                            {/*-------------- Management Routing ----------------*/}
                            <Route path="/admin/product/new" element={<NewProduct />} />

                            <Route path="/admin/product/:id" element={<ProductManagement />} />

                            <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
                        </Route>

                        {/* <Route path='*' element={<Error />} /> */}
                    </Routes>
                </Suspense>

            </Router>
        </>
    )
}

export default BaseRoutes