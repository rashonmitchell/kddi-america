import React from 'react';

function CreateSection() {
    return (
        <div className="px-4 mx-auto max-w-full footer">
            <div className="container flex flex-wrap max-w-4xl mx-auto">
                <h2 className="mb-6 px-3 text-kddiOrange text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-9 font-normal uppercase sm:leading-10">
                    Create the last mile of connectivity, cloud, and customer communications
                </h2>
                <div className="w-full px-3 mb-6">
                    <p className="mb-5 text-lg leading-7 text-kddiGray lg:mx-auto">
                        Get started by talking with a KDDI America partner program manager today.
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <div className="p-8 orange w-full">
                        <div className="text-center">
                            <a href="" className="uppercase" type="button">
                                Become a KDDI America partner
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-3 mb-6">
                    <div className="p-8 orange w-full">
                        <div className="text-center">
                            <a href="" className="uppercase" type="button">
                                contact partner 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateSection;