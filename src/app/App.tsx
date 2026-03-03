import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '@/app/components/layout/Layout';
import { Home } from '@/app/pages/Home';
import { Services } from '@/app/pages/Services';
import { ServicePage } from '@/app/pages/ServicePage';
import { Locations } from '@/app/pages/Locations';
import { LocationPage } from '@/app/pages/LocationPage';
import { About } from '@/app/pages/About';
import { Contact } from '@/app/pages/Contact';
import { Offers } from '@/app/pages/Offers';
import { OfferDetail } from '@/app/pages/OfferDetail';
import { WhoWeServe } from '@/app/pages/WhoWeServe';
import { SegmentPage } from '@/app/pages/SegmentPage';
import { Careers } from '@/app/pages/Careers';
import { Privacy } from '@/app/pages/Privacy';
import { Terms } from '@/app/pages/Terms';
import { Sitemap } from '@/app/pages/Sitemap';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          
          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          
          {/* Location Routes */}
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:city" element={<LocationPage />} />
          
          {/* Other Pages */}
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/who-we-serve/:segmentId" element={<SegmentPage />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/:slug" element={<OfferDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}