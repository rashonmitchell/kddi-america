import React from 'react';
import Modal from '../ui/modal';

function CtaJoin() {
    return (
        <div className="bg-cta max-w-full">
            <div className="container mx-auto p-8">
                <div className="max-w-screen-xl mx-auto lg:flex lg:items-center lg:justify-between flex flex-wrap">
                    <div className="w-full lg:w-3/4 sm:w-1/2 flex flex-wrap mb-4 sm:mb-0"> 
                        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left text-white font-boldss">
                            Join the KDDI America Partner Program
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/4 sm:w-1/2 text-center sm:text-right">
                        <div className="text-center orange">
                            <Modal content={"ENROLL TODAY"} className="uppercase orange text-center font-bold focus:outline-none"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CtaJoin;