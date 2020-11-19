import React from 'react';

function CtaPartner() {
    return (
        <div className="container max-w-full ">
            <div className="hidden md:hidden lg:block xl:block">

                <div className="mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 sm:w-1/2 flex flex-wrap h-auto flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0">
                        <svg width="auto" height="auto" viewBox="0 0 1291 201" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="Partner-Page" transform="translate(0.000000, -3665.000000)">
                                    <g id="graphic" transform="translate(0.000000, 3665.000000)">
                                        <g id="Group-10">
                                            <polygon id="Rectangle-Copy-9" fill="#2B3175" points="0 0 1291 0 1197.86231 162 0 162" />
                                            <polygon id="Fill-1-Copy-3" fill="#E86A24" points="1099 201 1228 72 1228 201" />
                                        </g>
                                        <text id="Partner-Resources" fontFamily="Arial-BoldMT, Arial" fontSize={38} fontWeight="bold" linespacing={45} fill="#FFFFFF">
                                            <tspan x={130} y={85}>Partner Resources</tspan>
                                        </text>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 flex flex-wrap h-auto">
                        <img src="../assets/img/illustration.jpg" className="right-0  "/>
                    </div>
                </div>
            </div>


        <div className="sm:block md:block lg:hidden xl:hidden ">
            <div className=" mx-auto  flex-wrap ">
                {/* removed sm:1/2 width */}
                <div className="lg:w-2/3 flex flex-wrap h-auto flex-shrink sm:flex-shrink-0 md:flex-shrink lg:flex-shrink-0">
                    <svg width="auto" height="auto" viewBox="0 0 1291 201" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Partner-Page" transform="translate(0.000000, -3665.000000)">
                                <g id="graphic" transform="translate(0.000000, 3665.000000)">
                                    <g id="Group-10">
                                        <polygon id="Rectangle-Copy-9" fill="#2B3175" points="0 0 1291 0 1197.86231 162 0 162" />
                                        <polygon id="Fill-1-Copy-3" fill="#E86A24" points="1099 201 1228 72 1228 201" />
                                    </g>
                                    <text id="Partner-Resources" fontFamily="Arial-BoldMT, Arial" fontSize={58} fontWeight="bold" linespacing={45} fill="#FFFFFF">
                                        <tspan x={130} y={85}>Partner Resources</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

                <div className="sm:w-full lg:w-1/3  md:w-4/6 ml-auto flex flex-wrap h-auto flex-end ">
                        <img src="../assets/img/illustration.jpg" className="left-8  "/>
                    </div>

                
                </div>
            </div>

        </div>
    );
}
export default CtaPartner;