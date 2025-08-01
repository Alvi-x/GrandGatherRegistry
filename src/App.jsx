import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import EventsPage from './pages/EventsPage';
import VendorsPage from "./pages/VendorsPage";
import VendorRegister from "./pages/VendorRegister";
import EventPlanner from "./pages/EventPlanner";
import HostDashboard from "./pages/HostDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup"; // New Signup page

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    });
    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav session={session} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/vendors" element={<VendorsPage />} />
            <Route path="/vendorRegister" element={<VendorRegister />} />
            <Route path="/eventplanner" element={<EventPlanner />} />
            <Route path="/hostdashboard" element={<HostDashboard />} />
            <Route path="/vendordashboard" element={<VendorDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
