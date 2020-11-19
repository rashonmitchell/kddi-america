import React, { useState } from "react";

export default function Footer() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <footer className="footer-1 bg-black">
            <div className="mx-auto p-6">
                <div className="max-w-screen-xl mx-auto lg:flex lg:items-center lg:justify-between flex flex-wrap">
                    <div className="w-full lg:w-3/4 sm:w-1/2 flex flex-wrap mb-4 sm:mb-0"> 
                        <h2 className="text-center sm:text-left md:texr-left text-white font-boldss">
                            Copyright © KDDI Corporation. All Rights Reserved. 
                            <span className="font-bold"> Contact Us</span>
                        </h2>
                    </div>
                    
                    <div className="w-full lg:w-1/4 sm:w-1/2 text-center sm:text-right ">
                        <div className="px-6 my-1 w-3/4 shadow flex ml-auto">
                            <a href="https://instagram.com/" target="_tab" className="mx-2  pt-2">
                                <svg width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Partner-Landing-Page_mobile" transform="translate(-143.000000, -7925.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Group-12" transform="translate(143.000000, 7919.000000)">
                                                <g id="instagram-(3)-copy" transform="translate(0.000000, 6.000000)">
                                                    <path d="M24.75,0 L11.25,0 C5.03775,0 0,5.03775 0,11.25 L0,24.75 C0,30.96225 5.03775,36 11.25,36 L24.75,36 C30.96225,36 36,30.96225 36,24.75 L36,11.25 C36,5.03775 30.96225,0 24.75,0 Z M32.625,24.75 C32.625,29.0925 29.0925,32.625 24.75,32.625 L11.25,32.625 C6.9075,32.625 3.375,29.0925 3.375,24.75 L3.375,11.25 C3.375,6.9075 6.9075,3.375 11.25,3.375 L24.75,3.375 C29.0925,3.375 32.625,6.9075 32.625,11.25 L32.625,24.75 Z" id="Shape" />
                                                    <path d="M18,9 C13.02975,9 9,13.02975 9,18 C9,22.97025 13.02975,27 18,27 C22.97025,27 27,22.97025 27,18 C27,13.02975 22.97025,9 18,9 Z M18,23.625 C14.8995,23.625 12.375,21.1005 12.375,18 C12.375,14.89725 14.8995,12.375 18,12.375 C21.1005,12.375 23.625,14.89725 23.625,18 C23.625,21.1005 21.1005,23.625 18,23.625 Z" id="Shape" />
                                                    <circle id="Oval" cx="27.675" cy="8.325" r="1.19925" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>

                            <a href="https://facebook.com/" target="_tab" className=" mx-2 ">
                                <svg width="22px" height="44px" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <g id="Partner-Landing-Page_mobile" transform="translate(-211.000000, -7919.000000)" fill="#FFFFFF" fillRule="nonzero">
                                            <g id="Group-12" transform="translate(143.000000, 7919.000000)">
                                                <g id="facebook-(5)-copy" transform="translate(68.000000, 0.000000)">
                                                    <path d="M17.9299432,7.30583333 L21.9156382,7.30583333 L21.9156382,0.309833333 C21.2280103,0.2145 18.8631525,0 16.1090026,0 C10.3623979,0 6.42581912,3.64283333 6.42581912,10.3381667 L6.42581912,16.5 L0.0843617571,16.5 L0.0843617571,24.321 L6.42581912,24.321 L6.42581912,44 L14.2007442,44 L14.2007442,24.3228333 L20.2857054,24.3228333 L21.2516589,16.5018333 L14.1989251,16.5018333 L14.1989251,11.1136667 C14.2007442,8.85316667 14.8046925,7.30583333 17.9299432,7.30583333 L17.9299432,7.30583333 Z" id="Path" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}