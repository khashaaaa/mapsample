import { Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Map from './Map'

function App() {

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="map" element={<Map />} />
    </Routes>
  );
}

export default App;
