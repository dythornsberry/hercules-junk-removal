import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/LoadingSpinner.jsx';
import Footer from '@/components/sections/Footer.jsx';
import StickyContactBar from '@/components/sections/StickyContactBar.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/sections/Header.jsx';
import CalendlyPopup from '@/components/ui/CalendlyPopup.jsx';
import HercJunkPricingSection from '@/components/sections/HercJunkPricingSection.jsx';

// Lazy load pages to optimize performance and prevent circular dependencies
const HomePage = lazy(() => import('@/pages/HomePage.jsx'));
const AboutPage = lazy(() => import('@/pages/AboutPage.jsx'));
const QuotePage = lazy(() => import('@/pages/QuotePage.jsx'));
const BookingPage = lazy(() => import('@/pages/BookingPage.jsx'));
const AdminPage = lazy(() => import('@/pages/AdminPage.jsx'));
const LoginPage = lazy(() => import('@/pages/LoginPage.jsx'));
const DebugPage = lazy(() => import('@/pages/DebugPage.jsx'));
const TestEmailPage = lazy(() => import('@/pages/TestEmailPage.jsx'));
const FaqPage = lazy(() => import('@/pages/FaqPage.jsx'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage.jsx'));
const ServiceAreasPage = lazy(() => import('@/pages/ServiceAreasPage.jsx'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage.jsx'));
const GarageCleanoutsPage = lazy(() => import('@/pages/services/GarageCleanoutsPage.jsx'));
const FurnitureRemovalPage = lazy(() => import('@/pages/services/FurnitureRemovalPage.jsx'));
const ConstructionDebrisRemovalPage = lazy(() => import('@/pages/services/ConstructionDebrisRemovalPage.jsx'));
const HouseholdJunkRemovalPage = lazy(() => import('@/pages/services/HouseholdJunkRemovalPage.jsx'));
const YardWasteRemovalPage = lazy(() => import('@/pages/services/YardWasteRemovalPage.jsx'));
const JunkRemovalKenmorePage = lazy(() => import('@/pages/locations/JunkRemovalKenmorePage.jsx'));
const JunkRemovalBothellPage = lazy(() => import('@/pages/locations/JunkRemovalBothellPage.jsx'));
const JunkRemovalKirklandPage = lazy(() => import('@/pages/locations/JunkRemovalKirklandPage.jsx'));
const JunkRemovalWoodinvillePage = lazy(() => import('@/pages/locations/JunkRemovalWoodinvillePage.jsx'));
const JunkRemovalLakeForestParkPage = lazy(() => import('@/pages/locations/JunkRemovalLakeForestParkPage.jsx'));
const JunkRemovalMountlakeTerracePage = lazy(() => import('@/pages/locations/JunkRemovalMountlakeTerracePage.jsx'));
const JunkRemovalLynnwoodPage = lazy(() => import('@/pages/locations/JunkRemovalLynnwoodPage.jsx'));
const JunkRemovalShorelinePage = lazy(() => import('@/pages/locations/JunkRemovalShorelinePage.jsx'));

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('hercules-auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <CalendlyPopup />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/pricing" element={<div className="pt-20"><HercJunkPricingSection /></div>} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Service Pages */}
              <Route path="/household-junk-removal" element={<HouseholdJunkRemovalPage />} />
              <Route path="/garage-cleanouts" element={<GarageCleanoutsPage />} />
              <Route path="/yard-waste-removal" element={<YardWasteRemovalPage />} />
              <Route path="/construction-debris-removal" element={<ConstructionDebrisRemovalPage />} />
              <Route path="/furniture-removal" element={<FurnitureRemovalPage />} />

              {/* Location Pages */}
              <Route path="/junk-removal-kenmore" element={<JunkRemovalKenmorePage />} />
              <Route path="/junk-removal-bothell" element={<JunkRemovalBothellPage />} />
              <Route path="/junk-removal-kirkland" element={<JunkRemovalKirklandPage />} />
              <Route path="/junk-removal-woodinville" element={<JunkRemovalWoodinvillePage />} />
              <Route path="/junk-removal-lake-forest-park" element={<JunkRemovalLakeForestParkPage />} />
              <Route path="/junk-removal-mountlake-terrace" element={<JunkRemovalMountlakeTerracePage />} />
              <Route path="/junk-removal-lynnwood" element={<JunkRemovalLynnwoodPage />} />
              
              <Route path="/junk-removal-shoreline" element={<JunkRemovalShorelinePage />} />

              {/* Protected Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/debug" 
                element={
                  <ProtectedRoute>
                    <DebugPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/test-email" 
                element={
                  <ProtectedRoute>
                    <TestEmailPage />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
      <StickyContactBar />
    </>
  );
}

export default App;