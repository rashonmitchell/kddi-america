import React from "react";

// components
//import Navbar from '../components/layout/navbar'
import HeroSection from '../components/layout/herosection'
import RelationshipSection from '../components/layout/relationshipsection'
import CtaJoin from '../components/layout/cta-join'
import CtaPartner from '../components/layout/cta-partner'
import DeliverSection from '../components/layout/deliversection'
import Table from '../components/layout/table'
import PartnerSection from '../components/layout/partnersection'
import CreateSection from '../components/layout/createsection'

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
        </>
    )
}