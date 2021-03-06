import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
function PartnerSection(){
    const [isOpen, setOpen] = useState(false);
    const [isOpenTwo, setOpenTwo] = useState(false);
    function toggleVideoModal() {setOpen(!isOpen);}
    function toggleVideoModal2() {setOpenTwo(!isOpenTwo);}
    return(
        <section className="pt-10 pb-8">
            <div className="max-w-screen-xl container mx-auto px-4">
                <div className="-mx-5 flex flex-wrap">
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <svg width="100%" height="100%" viewBox="0 0 599 299" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Partner-Page" transform="translate(-336.000000, -1707.000000)" fill="#FFFFFF" stroke="#AED6F2" strokeWidth={8}>
                                <g id="Modernize" transform="translate(340.000000, 1711.000000)">
                                <polygon id="Rectangle-Copy-5" points="0 1.75873205e-13 591 0 591 217.603692 532.82783 291 0 291" />
                                <text x="60" y="70" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                    Partner Program 
                                </text>
                                <text x="60" y="130" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                    Overview
                                </text>
                                <a target="_tab" href="https://www.kddiamessaging.com/pdf/KDDI-America-Partner-Program-Overview.pdf">
                                    <text x="60" y="250" fontFamily="Arial" fontWeight="normal" fill="#E86A24" stroke="none" fontSize="3.3em">
                                        Download &#8594;
                                    </text> 
                                </a>
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <svg width="100%" height="100%" viewBox="0 0 599 299" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Partner-Page" transform="translate(-336.000000, -1707.000000)" fill="#FFFFFF" stroke="#AED6F2" strokeWidth={8}>
                                <g id="Modernize" transform="translate(340.000000, 1711.000000)">
                                <polygon id="Rectangle-Copy-5" points="0 1.75873205e-13 591 0 591 217.603692 532.82783 291 0 291" />
                                <text x="60" y="70" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                    Cloud Services 
                                </text>
                                <text x="60" y="130" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                    Brochure
                                </text>
                                <a target="_tab" href="https://www.kddiacloud.com/pdf/Accelerate-Your-Hybrid-and-Multi-Cloud-Strategy-with-KDDI-America-Telehouse.pdf">
                                    <text x="60" y="250" fontFamily="Arial" fontWeight="normal" fill="#E86A24" stroke="none" fontSize="3.3em">
                                        Download &#8594;
                                    </text> 
                                </a>
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="5Jv9XXSEFdk" onClose={toggleVideoModal} />
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <svg width="100%" height="100%" viewBox="0 0 599 299" version="1.1" xmlnshtml="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="Partner-Page" transform="translate(-336.000000, -1707.000000)" fill="#FFFFFF" stroke="#AED6F2" strokeWidth={8}>
                                    <g id="Modernize" transform="translate(340.000000, 1711.000000)">
                                    <polygon id="Rectangle-Copy-5" points="0 1.75873205e-13 591 0 591 217.603692 532.82783 291 0 291" />
                                    <text x="60" y="70" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                        Cloud Services 
                                    </text>
                                    <text x="60" y="130" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                        Video 
                                    </text>
                                        <g transform="translate(1 0)">
                                            <foreignObject xmlns="http://www.w3.org/2000/svg" x={60} y={190} width={300} height={220}  fill="#E86A24" stroke="none" fontSize="3.3em">
                                                <button 
                                                    type="button" 
                                                    style={{  color:"#E86A24", fontFamily:"Arial", fontWeight:"normal" }} 
                                                    onClick={toggleVideoModal}
                                                >
                                                    Watch &#8594;
                                                </button>
                                            </foreignObject>
                                        </g>
                                    </g>     
                                </g>
                            </g>
                        </svg>
                    </div>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpenTwo} custom="" videoId="J-81QHjaTNo" onClose={toggleVideoModal2} />
                    <div className="w-full flex flex-col p-5 sm:w-1/2 lg:w-1/4">
                        <svg width="100%" height="100%" viewBox="0 0 599 299" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Partner-Page" transform="translate(-336.000000, -1707.000000)" fill="#FFFFFF" stroke="#AED6F2" strokeWidth={8}>
                                <g id="Modernize" transform="translate(340.000000, 1711.000000)">
                                    <polygon id="Rectangle-Copy-5" points="0 1.75873205e-13 591 0 591 217.603692 532.82783 291 0 291" />
                                    <text x="60" y="70" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                        Omnichannel 
                                    </text>
                                    <text x="60" y="120" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                        Communications
                                    </text>
                                    <text x="60" y="170" fontWeight="500" fill="#2B3175" stroke="none" fontSize="2.8em">
                                        Video
                                    </text><g transform="translate(1 0)">
                                        <foreignObject xmlns="http://www.w3.org/2000/svg" x={60} y={190} width={300} height={220}  fill="#E86A24" stroke="none" fontSize="3.3em">
                                            <button 
                                                type="button" 
                                                style={{  color:"#E86A24", fontFamily:"Arial", fontWeight:"normal" }} 
                                                onClick={toggleVideoModal2}
                                            >
                                                Watch &#8594;
                                            </button>
                                        </foreignObject>
                                    </g>
                                </g>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PartnerSection;