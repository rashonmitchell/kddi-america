import React from 'react';

// ui/svg
import GroupOne from "../ui/svg/desktop/groupOne" 
import GroupTwo from "../ui/svg/desktop/groupTwo" 
import GroupThree from "../ui/svg/desktop/groupThree"
import GroupFour from "../ui/svg/desktop/groupFour"

import GroupOneMobile from "../ui/svg/mobile/groupOneMobile"
import GroupTwoMobile from "../ui/svg/mobile/groupTwoMobile"
import GroupThreeMobile from "../ui/svg/mobile/groupThreeMobile"
import GroupFourMobile from "../ui/svg/mobile/groupFourMobile"
function DeliverSection() {
    return (
        <div className="m-auto bg-deliver max-w-full ">
            <div className="p-8 m-auto container">
                <h2 className="mb-10 text-kddiOrange text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-9 font-normal uppercase sm:leading-10">
                    Deliver High-Value, High-Margin Business Solutions with KDDI America
                </h2>
                <p className="mt-8 pb-8 text-lg leading-7 text-kddiGray lg:mx-auto">
                    KDDI America Partners gain access to world-className datacenters and public clouds, carrier-grade networks, and 
                    a global connectivity backbone for enabling your customers’ end-to-end digital transformation.
                </p>
                

                <div className="hidden flex-wrap -mx-4 overflow-hidden sm:hidden md:flex lg:flex xl:flex">
                    {/* <div className="hidden md:hidden lg:block xl:block"> */}
                        <GroupOne />
                        <GroupTwo />
                        <GroupThree />
                        <GroupFour />
                    {/* </div> */}
                </div>

                <div className="block md:hidden lg:hidden xl:hidden">
                    <GroupOneMobile />
                    <GroupTwoMobile />
                    <GroupThreeMobile />
                    <GroupFourMobile />
                </div>

                
            </div>
        </div>
    )
}
export default DeliverSection;