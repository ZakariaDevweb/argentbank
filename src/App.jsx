import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './Pages/Connexion/Connexion';
import Profil from './Pages/Profil/Profil';
import Error from './Pages/ErrorPages/ErrorPages';
import Home from './Pages/HomePage/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Connexion />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;