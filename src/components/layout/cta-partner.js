import React from 'react';

function CtaPartner() {
    return (
        <div className="container ">
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between flex flex-wrap">
                <div className="w-full lg:w-3/4 md:w-1/2 flex flex-wrap "> 
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-white">
                        {/* Join the KDDI America Partner Program */}
                    </h2>
                </div>
                
                {/* <div style={{textAlign: 'right'}}><img src="../assets/img/illustration.jpg"/></div> */}
                <div className="overflow-hidden lg:w-1/4 sm:w-1/2 ">
                    <img src="../assets/img/illustration.jpg" className="absolute max-w-none right-0 "></img>
                    {/* <div className="orange items-center ">
                        <a href="" className="uppercase" type="button">
                            Enroll Today
                        </a>
                    </div> */}
                </div>
            </div>
        </div>

    // <div className="container m-auto bg-cta max-w-full">
    //     <div className="max-w-screen-xl mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    //         <h2 className="text-4xl sm:text-2xl lg:text-4xl leading-9 font-bold text-white sm:leading-10 text-center sm:text-center">
    //             Join the KDDI America Partner Program
    //         </h2>
    //         <div className="mt-8 flex flex-wrap lg:mt-0 sm:items-center px-10 sm:px-10">
    //             <div className="orange sm:justify-center md:justify-center lg:justify-center sm:items-center md:items-center">
    //                 <button  className="uppercase" type="button">
    //                     Enroll Today
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}
export default CtaPartner;