import './App.css'
import { Routes, Route} from 'react-router';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';

function App() {

  return (
    <Routes>
      {/* path = "URL path", URL path is the last part of the URL*/}
      {/* this tells react when we go to url path / or empty, display HomePage component */}
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage />} />
      <Route path='orders' element={<OrdersPage/>}/>
      <Route path="tracking" element={<TrackingPage/>} />
    </Routes>
  )
}

export default App
