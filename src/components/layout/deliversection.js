import React from 'react';

function DeliverSection() {
    return (
        <div className="m-auto bg-deliver max-w-full ">
            <div className="p-8 m-auto container">
                <h2 className="mb-10 text-kddiOrange text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-9 font-normal uppercase sm:leading-10">
                    Deliver High-Value, High-Margin Business Solutions with KDDI America
                </h2>
                <p className="mt-8 text-lg leading-7 text-kddiGray lg:mx-auto">
                    KDDI America Partners gain access to world-class datacenters and public clouds, carrier-grade networks, and 
                    a global connectivity backbone for enabling your customers’ end-to-end digital transformation.
                </p>

                
                <div className="mt-6">
                    <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <li className="cards-margin flex bg-auto bg-center bg-no-repeat ...">
                            <section className="tony-css icon-css-tony icon-css-tony flex items-center justify-center h-auto">
                                <img className="icons-delivery-section" src="../assets/img/Group-1.svg" alt="icon"></img>
                            </section>
                               
                            <section className="">
                                <h4 className="text-xl mb-6 text-cta">
                                    Modernize customer interactions
                                </h4>
                                <p className="mt-2 text-lg">
                                    Using omnichannel communications, built
                                    with advanced messaging and RCS. 
                                </p>
                            </section>
                        </li>

                        <li className="cards-margin">
                            <div className="flex bg-auto bg-center bg-no-repeat ..." style={{backgroundImage: 'url(../assets/img/rectangle.svg)'}}>
                                <section className="flex-shrink-0 tony-css">
                                    <section className="icon-css-tony flex items-center justify-center h-auto ">
                                        <img className="icons-delivery-section" src="../assets/img/Group-1.svg" alt="icon"></img>
                                    </section>
                                </section>
                                <section className="ml-4">
                                    <h4 className="text-2xl mb-6 text-cta">
                                        Modernize customer interactions
                                    </h4>
                                    <p className="mt-2 text-lg">
                                        Using omnichannel communications, built
                                        with advanced messaging and RCS. 
                                    </p>
                                </section>
                            </div>
                            </li>

                            <li className="cards-margin">
                                <div className="flex bg-auto bg-center bg-no-repeat ..." style={{backgroundImage: 'url(../assets/img/rectangle.svg)'}}>
                                    <section className="flex-shrink-0 tony-css">
                                        <section className="icon-css-tony flex items-center justify-center h-auto ">
                                            <img className="icons-delivery-section" src="../assets/img/Group-1.svg" alt="icon"></img>
                                        </section>
                                    </section>
                                    <section className="ml-4">
                                        <h4 className="text-2xl mb-6 text-cta">
                                            Modernize customer interactions
                                        </h4>
                                        <p className="mt-2 text-lg">
                                            Using omnichannel communications, built
                                            with advanced messaging and RCS. 
                                        </p>
                                    </section>
                                </div>
                            </li>

                            <li className="cards-margin">
                            <div className="flex bg-auto bg-center bg-no-repeat ..." style={{backgroundImage: 'url(../assets/img/rectangle.svg)'}}>
                                <section className="flex-shrink-0 tony-css">
                                    <section className="icon-css-tony flex items-center justify-center h-auto ">
                                        <img className="icons-delivery-section" src="../assets/img/Group-1.svg" alt="icon"></img>
                                    </section>
                                </section>
                                <section className="ml-4">
                                    <h4 className="text-2xl mb-6 text-cta">
                                        Modernize customer interactions
                                    </h4>
                                    <p className="mt-2 text-lg">
                                        Using omnichannel communications, built
                                        with advanced messaging and RCS. 
                                    </p>
                                </section>
                            </div>
                            </li>
                           

                            {/* <li className="mt-10 md:mt-0">
                                <div className="flex blue-delivers-square-img">
                                    <section className="">
                                        <section className="icon-css-tony flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <img src="../assets/img/Group-1.svg" alt="icon"></img> */}
                                        {/* <svg width="75px" height="75px" viewBox="0 0 148 148" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="Partner-Page" transform="translate(-1035.000000, -1751.000000)">
                                                    <g id="Build" transform="translate(992.000000, 1711.000000)">
                                                        <g id="Group-2" transform="translate(47.000000, 44.000000)">
                                                            <circle id="Oval-Copy" stroke="#AED6F2" strokeWidth="8" fill="#AED6F2" cx="70" cy="70" r="70"></circle>
                                                            <g id="Group-8" transform="translate(30.000000, 24.000000)">
                                                                <path d="M63.525696,63.543552 L63.519616,63.543552 C61.492096,62.305792 59.342336,61.280832 57.104256,60.484352 C58.339456,56.174592 59.010496,51.723072 59.100416,47.240832 L69.428096,47.240832 C69.130176,53.141952 67.074496,58.819392 63.525696,63.543552 L63.525696,63.543552 Z M61.627136,65.848832 C60.964736,66.564352 60.266816,67.238592 59.543936,67.878592 C59.492096,67.925952 59.443136,67.974912 59.396096,68.026432 C58.698176,68.637312 57.970496,69.209472 57.223936,69.746112 C57.132416,69.812672 57.043456,69.880832 56.950336,69.945792 C56.220096,70.461952 55.464576,70.939392 54.692736,71.384512 C54.575936,71.450752 54.459136,71.520512 54.342336,71.585472 C53.575296,72.014272 52.789696,72.408512 51.985216,72.768512 L51.595136,72.940032 C51.087936,73.157312 50.559936,73.336192 50.044096,73.531392 C52.773056,70.572352 54.863616,67.083712 56.185856,63.281792 C58.086016,63.957952 59.918016,64.812992 61.656576,65.835392 L61.627136,65.848832 Z M41.400256,75.199232 L41.400256,60.642752 C45.443136,60.731392 49.459776,61.321472 53.357376,62.399232 L53.357376,62.400512 C50.688576,69.497792 46.362496,74.377152 41.400256,75.199232 L41.400256,75.199232 Z M41.400256,47.240832 L56.144576,47.240832 C56.054016,51.420032 55.430016,55.570112 54.287616,59.591232 C50.088896,58.417472 45.758976,57.778752 41.400256,57.689792 L41.400256,47.240832 Z M41.400256,33.878912 C45.761216,33.777792 50.091776,33.125312 54.288896,31.937472 C55.430976,35.956992 56.054656,40.106112 56.144576,44.283392 L41.400256,44.283392 L41.400256,33.878912 Z M41.400256,16.326592 C46.362496,17.144192 50.688576,22.022272 53.357376,29.124992 C49.459776,30.203392 45.443456,30.793152 41.400256,30.881792 L41.400256,16.326592 Z M51.596416,18.597632 L51.986816,18.764672 C52.788096,19.122752 53.574976,19.514432 54.340736,19.947712 C54.459136,20.014272 54.575936,20.083712 54.694016,20.151552 C55.465856,20.595392 56.220096,21.072832 56.950336,21.587392 C57.043456,21.652352 57.133696,21.723392 57.225536,21.789952 C57.964736,22.328192 58.703936,22.897472 59.397376,23.508032 C59.449216,23.553792 59.498176,23.602752 59.545216,23.648512 C60.271296,24.293312 60.972096,24.970432 61.638976,25.690432 C59.905536,26.710592 58.079936,27.564992 56.185856,28.242432 C54.862656,24.445312 52.772416,20.961152 50.045376,18.006272 C50.566016,18.195712 51.089216,18.374592 51.596416,18.597632 L51.596416,18.597632 Z M63.525696,27.980672 C67.074496,32.704832 69.129856,38.382272 69.428096,44.283392 L59.100416,44.283392 C59.012416,39.801792 58.343296,35.349952 57.110016,31.039872 C59.347776,30.242752 61.497536,29.217472 63.525696,27.980672 L63.525696,27.980672 Z M38.443136,30.884672 C34.400256,30.794752 30.384256,30.204032 26.486976,29.125632 C29.148416,22.029952 33.481536,17.151552 38.443136,16.329472 L38.443136,30.884672 Z M38.443136,44.283392 L23.698816,44.283392 C23.788736,40.106112 24.412416,35.956992 25.554176,31.937472 C29.751296,33.125952 34.082176,33.778112 38.443136,33.878912 L38.443136,44.283392 Z M38.443136,57.688512 C34.084416,57.778112 29.754496,58.417152 25.555776,59.589952 C24.413376,55.569472 23.789376,51.419392 23.698816,47.240832 L38.443136,47.240832 L38.443136,57.688512 Z M38.443136,75.197632 C33.480896,74.380032 29.154496,69.502272 26.485696,62.399232 C30.383616,61.321152 34.399936,60.731072 38.443136,60.642752 L38.443136,75.197632 Z M28.242496,72.924992 C28.116736,72.874752 27.988096,72.820032 27.860736,72.761152 C27.056576,72.401792 26.266816,72.008512 25.495296,71.578112 C25.379776,71.514432 25.267456,71.446592 25.152256,71.381632 C24.377216,70.937792 23.618816,70.455872 22.884096,69.936832 C22.796736,69.874752 22.710976,69.809792 22.623616,69.746112 C21.872576,69.204992 21.145216,68.631232 20.439936,68.017792 C20.392576,67.974912 20.346816,67.929152 20.292096,67.887552 C19.563136,67.239872 18.859136,66.556992 18.190976,65.838272 C19.928576,64.815872 21.758656,63.959872 23.657216,63.281792 C24.980416,67.077952 27.070016,70.561792 29.796416,73.516672 C29.275776,73.327232 28.750976,73.148352 28.242496,72.924992 L28.242496,72.924992 Z M16.317696,63.543552 C12.768896,58.819392 10.713216,53.141952 10.414976,47.240832 L20.742976,47.240832 C20.830656,51.722752 21.499776,56.174592 22.733056,60.484352 C20.495616,61.281472 18.345536,62.306752 16.317696,63.543552 L16.317696,63.543552 Z M16.317696,27.980672 C18.345216,29.218432 20.495296,30.243392 22.733056,31.039872 C21.500096,35.349952 20.830976,39.801792 20.742976,44.283392 L10.414976,44.283392 C10.712896,38.382272 12.768576,32.704832 16.317696,27.980672 L16.317696,27.980672 Z M18.210176,25.675712 C18.870976,24.963072 19.566016,24.290112 20.280256,23.651392 C20.334976,23.602752 20.388096,23.549632 20.444416,23.503552 C21.137856,22.895872 21.862336,22.329792 22.604416,21.792832 C22.700736,21.723392 22.793856,21.644992 22.891456,21.582912 C23.618816,21.071232 24.367936,20.594752 25.138816,20.153152 C25.258496,20.083712 25.378496,20.005312 25.499456,19.944512 C26.264576,19.516992 27.046976,19.124992 27.847616,18.769152 L28.245376,18.594752 C28.752576,18.377472 29.280256,18.198592 29.794816,18.003392 C27.068416,20.959232 24.979456,24.444672 23.657216,28.242432 C21.759616,27.565952 19.930176,26.710912 18.193856,25.689152 L18.210176,25.675712 Z M60.599616,20.652032 C53.326336,14.661312 43.813376,12.116672 34.520256,13.676992 C33.460096,13.854272 32.414976,14.091072 31.384256,14.370432 C31.088576,14.450112 30.792896,14.537472 30.497216,14.624832 C24.354176,16.479872 18.897856,20.111232 14.815296,25.061952 C3.382976,38.920192 5.349376,59.422272 19.207616,70.854272 C25.038336,75.664512 32.362496,78.293952 39.921536,78.2907549 C42.329536,78.291712 44.729856,78.026432 47.079296,77.499712 C47.842496,77.328512 48.593536,77.119872 49.340096,76.895232 C55.484416,75.042112 60.942976,71.412032 65.027776,66.462272 C76.455296,52.589312 74.472576,32.079552 60.599616,20.652032 L60.599616,20.652032 Z" id="Fill-1" fill="#2B3175"></path>
                                                                <g id="Group-5" transform="translate(14.080000, 45.444160)">
                                                                    
                                                                    <g id="Clip-4"></g>
                                                                    <path d="M62.806112,0.317984 C62.783392,20.723424 46.247072,37.259744 25.841632,37.282464 L5.753632,37.282464 L9.501792,33.532704 L7.411232,31.442144 L0.093792,38.761184 L7.411232,46.079904 L9.501792,43.989344 L5.753632,40.239584 L25.841632,40.239584 C47.879712,40.215264 65.738912,22.356064 65.763232,0.317984 L62.806112,0.317984 Z" id="Fill-3" fill="#2B3175" mask="url(#mask-2)"></path>
                                                                </g>
                                                                <path d="M55.394912,9.6e-05 L53.304352,2.090976 L57.052512,5.840416 L39.921632,5.840416 C17.883552,5.865056 0.024352,23.724256 3.2e-05,45.762016 L2.957152,45.762016 C2.979872,25.356576 19.516192,8.820256 39.921632,8.797536 L57.052512,8.797536 L53.304352,12.547296 L55.394912,14.638176 L62.712352,7.319136 L55.394912,9.6e-05 Z" id="Fill-6" fill="#2B3175"></path>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>  */}
                                        {/* </section>
                                    </section> */}

                                    {/* <section className="ml-4">
                                        <h4 className="text-2xl mb-6 text-cta">
                                            Build global, carrier-grade networks
                                        </h4>
                                        <p className="mt-2 text-lg">
                                            Including internet peering, 
                                            SD-WAN, global IP-VPN, transoceanic backbones.
                                        </p>
                                    </section>
                                </div>
                            </li> */}
{/* 
                            <li className="mt-10 md:mt-0">
                                <div className="flex blue-delivers-square-img">
                                    <section className="flex-shrink-0">
                                        <section className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path></path>
                                            </svg>
                                        </section>
                                    </section>
                                    <section className="ml-4">
                                        <h4 className="text-2xl mb-6 text-cta">
                                            Manage last-mile global connectivity
                                        </h4>
                                        <p className="mt-2 text-lg">
                                            Across Telehouse datacenters and cloud down to the device.
                                        </p>
                                    </section>
                                </div>
                            </li> */}

                            {/* <li className="mt-10 md:mt-0">
                                <div className="flex blue-delivers-square-img">
                                    <section className="flex-shrink-0">
                                        <section className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path></path>
                                            </svg>
                                        </section>
                                    </section>
                                    <section className="ml-4">
                                        <h4 className="text-2xl mb-6 text-cta">
                                            Innovate with IoT and RPA solutions
                                        </h4>
                                        <p className="mt-2 text-lg">
                                            Including connected cars, smart factories, and workflow automations. 
                                        </p>
                                    </section>
                                </div>
                            </li> */}

                        </ul>
                    </div>
                
                
                
            </div>
        </div>
    )
}
export default DeliverSection;// 