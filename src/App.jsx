

import { BrowserRouter as Router, Routes, Route ,  Navigate } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Signup from './components/Auth/SignUp';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PipelinesPage from './pages/PipelinesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactsPage from './pages/ContactsPage';
import BankPage from './pages/BankPage';
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/pipelines" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          
          <Route
            path="/*"
            element={
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex flex-grow">
                <Sidebar />
                <main className="flex-grow p-4">
                  <Routes>
                  <Route path="/pipelines" element={<PipelinesPage />} />
                  <Route path="/contacts" element={<ContactsPage />} />
                  <Route path="/bank" element={<BankPage />} />
                  <Route path="/products" element={<ProductsPage />} />   
                  <Route path="/activities" element={<ActivitiesPage />} />
                  </Routes>
                </main>
                <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
