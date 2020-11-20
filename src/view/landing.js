import React from "react";

// components
import HeroSection from '../components/layout/herosection'
import RelationshipSection from '../components/layout/relationshipsection'
import CtaJoin from '../components/layout/cta-join'
import CtaPartner from '../components/layout/cta-partner'
import DeliverSection from '../components/layout/deliversection'
import Table from '../components/layout/table'
import PartnerSection from '../components/layout/partnersection'
import CreateSection from '../components/layout/createsection'
import Footer from '../components/layout/footer'

export default function Landing() {
    return (
        <>
            <HeroSection/>
            <RelationshipSection/>
            <CtaJoin/>
            <DeliverSection/>
            <Table/>
            <CtaPartner/>
            <PartnerSection/>
            <CreateSection/>
            <Footer />
        </>
    )
}

// 1) top button isn't linking to form --- done
// 2) form has weird spacing around fields and title is off center  --- done
// https://metrix.meritmile.com/Stage/uploads/Screenshot%202020-11-19%20134600.png
// 3)Hero headline. Can the spacing between KDDI America and Partner Program be reduced? The spacing seems a bit wide. Not a showstopper. --- done
// 4) Headline copy. Can the width of the copy block be widened so "experiences" isn't a hanging chat. Desktop view. --- done
// 5) In this copy block, remove the dash in last mile, replace with a space. --- done
// Carrier-Grade
// Achieve the highest levels of network and datacenter infrastructure uptime, resiliency, throughput, and last-mile connectivity.

// 6) In the table section,  --- done
// I don't like how Committed to your success is sort of floating on top of the table. Close that gap or even use Committed to your success as the top row in the table
// 7) omnichannel communications video is wrong. should be: https://youtu.be/J-81QHjaTNo  --- done
// 8) this graphic is still wonky on mobile
// 9) On the bottom, the 2nd "Contact Partner" CTA button can be removed  --- done
// 10) footer, add space before "contact us"  --- done