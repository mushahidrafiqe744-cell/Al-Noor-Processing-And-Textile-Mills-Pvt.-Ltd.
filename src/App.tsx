/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/Toast';
import { QuoteModal } from './components/common/QuoteModal';
import { LightboxModal } from './components/common/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductionPage } from './pages/ProductionPage';
import { QualityPage } from './pages/QualityPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { AdminPage } from './pages/AdminPage';

const PageRenderer: React.FC = () => {
  const { currentPage } = useApp();

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'services':
      return <ServicesPage />;
    case 'products':
      return <ProductsPage />;
    case 'production':
      return <ProductionPage />;
    case 'quality':
      return <QualityPage />;
    case 'gallery':
      return <GalleryPage />;
    case 'contact':
      return <ContactPage />;
    case 'quote':
      return <QuotePage />;
    case 'admin':
      return <AdminPage />;
    default:
      return <HomePage />;
  }
};

const MainLayout: React.FC = () => {
  const { currentPage } = useApp();
  const isAdmin = currentPage === 'admin';

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5EF] text-[#123C38] font-sans selection:bg-[#A7E85A] selection:text-[#063F3A]">
      {/* Header is shown on all public pages */}
      {!isAdmin && <Header />}

      {/* Dynamic Page Component */}
      <main className="flex-1">
        <PageRenderer />
      </main>

      {/* Footer on public pages */}
      {!isAdmin && <Footer />}

      {/* Global Overlays & Modals */}
      <QuoteModal />
      <LightboxModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
