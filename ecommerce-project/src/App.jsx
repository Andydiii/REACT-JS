import './App.css'
import { Routes, Route} from 'react-router';
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <Routes>
      {/* path = "URL path", URL path is the last part of the URL*/}
      {/* this tells react when we go to url path / or empty, display HomePage component */}
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<>Test checkout page</>} />
    </Routes>
  )
}

export default App
