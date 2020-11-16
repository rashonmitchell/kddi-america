import React from 'react';

function PartnerSection(){
    return(
        <section className="pt-20 pb-48">
            <div className="max-w-screen-xl container mx-auto px-4">
                <div className="-mx-5 flex flex-wrap">
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <div className="justify-center flex flex-col flex-none px-10 pt-10 pb-12 blue-delivers-square-img">
                            <div className="flex-1">
                                <h2 className="text-cta text-xl sm:text-xl lg:text-xl font-bold leading-snug">
                                    Partner Program Overview
                                </h2>
                            </div>
                            <a href="#" 
                                className="mt-4 inline-flex items-center py-3 text-kddiOrange font-normal text-2xl">
                                Download &#8594;
                            </a>
                        </div>
                    </div>
                
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <div className="justify-center flex flex-col flex-none px-10 pt-10 pb-12 blue-delivers-square-img">
                            <div className="flex-1">
                                <h2 className="text-cta text-xl sm:text-xl lg:text-xl font-bold leading-snug">
                                    Cloud Services Brochure
                                </h2>
                            </div>
                            <a href="https://www.kddiacloud.com/pdf/Accelerate-Your-Hybrid-and-Multi-Cloud-Strategy-with-KDDI-America-Telehouse.pdf" 
                                className="mt-4 inline-flex items-center py-3 text-kddiOrange font-normal text-2xl">
                                Download &#8594;
                            </a>
                        </div>
                    </div>
                
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <div className="flex flex-col flex-none px-10 pt-10 pb-12 blue-delivers-square-img">
                            <div className="flex-1">
                                <h2 className="text-cta text-xl sm:text-xl lg:text-xl font-bold leading-snug">
                                    Cloud 
                                    Services 
                                    Video  
                                </h2>
                            </div>
                            <a href="# https://youtu.be/5Jv9XXSEFdk" 
                                className="mt-4 inline-flex items-center py-3 text-kddiOrange font-normal text-2xl">
                                Watch &#8594;
                            </a>
                        </div>
                    </div>
                
                <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                    <div className="flex flex-col flex-none px-10 pt-10 pb-12 blue-delivers-square-img">
                        <div className="flex-1">
                            <h2 className="text-cta text-xl sm:text-xl lg:text-xl font-bold leading-snug">
                                Omnichannel Communications Video
                            </h2>
                        </div>
                        <a href="#  https://youtu.be/J-81QHjaTNo" 
                            className="pt-2 inline-flex items-center py-3 text-kddiOrange font-normal text-2xl">
                            Watch &#8594;
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default PartnerSection;