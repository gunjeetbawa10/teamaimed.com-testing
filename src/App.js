import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Stats from './stats'
import Hero from './hero';
import Featuremain from './feature';
import FeatureSecond from './featuresecond';
import Testi from './testimonial/testi';
import CompanyLogo from './CompanyLogo/company_logo';
import { CheckIcon } from '@heroicons/react/20/solid'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Pricing from './pages/pricing';
import Featurethird from './pages/featurethird'
import About from './pages/about'
import Header from './header'



const IndexPage = () => {
  return (
   <> 

<Routes>

          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about_us" element={<About/>} />
         
       </Routes>

   <SpeedInsights/>

    </>
  );
};
export default IndexPage;