import React from 'react';

import TypographyHeroSection from './Herosection'
import AboutSection from './about'


export default function Home() {
  return (
    <div className="home bg-pink-200 ">
    <TypographyHeroSection/>
    <AboutSection/>
    </div>
  );
}
