import React from "react";
import Navbar from '../layout/navbar'

function HeroSection() {
  return (
    <header className="headerBody hero-section hero-img">
        <Navbar/>

        <div className="container mx-auto p-8 text-grey-darkest">
            <div className="hero ml-0 ">
                <div className="hero-caption ">
                    <h1 className="mb-6 mt-5 leading-tight text-white text-3xl sm:text-4xl md:text-4xl lg:text-6xl ">
                        KDDI America 
                        <br />
                        Partner Program
                    </h1>
                    <p className="text-white text-2xl pb-4">
                        Enable end-to-end digital transformation from infrastructure 
                        and cloud to the last mile of customer communications and experiences.
                    </p>
                </div>
            </div>
        </div>
    </header>
  );
}
export default HeroSection;
