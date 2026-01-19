import { Route, Switch } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PageContent from './layout/PageContent'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import TeamPage from './pages/TeamPage'
import AboutPage from './pages/AboutPage'
import PricingPage from './pages/PricingPage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import PreviousOrders from './pages/PreviousOrders'
import { verifyToken } from './store/actions/clientActions'
import { fetchCategories } from './store/actions/productActions'
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for token in localStorage on app start
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token and auto-login if valid
      dispatch(verifyToken()).catch((error) => {
        console.error('Token verification failed:', error);
      });
    }
    
    // Fetch categories on app start
    dispatch(fetchCategories()).catch((error) => {
      console.error('Error fetching categories:', error);
    });
  }, [dispatch]);

  return (
    <PageContent>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/shop">
          <ShopPage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <ProductDetailPage />
        </Route>
        <Route exact path="/shop/:gender/:categoryName/:categoryId">
          <ShopPage />
        </Route>
        <Route path="/product/:productId">
          <ProductDetailPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/pricing">
          <PricingPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/order">
          <OrderPage />
        </Route>
        <Route path="/orders">
          <PreviousOrders />
        </Route>
      </Switch>
    </PageContent>
  )
}

export default App
