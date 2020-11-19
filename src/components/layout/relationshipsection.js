import React from 'react';

function RelationshipSection() {
    return (
        <div className="container mx-auto p-8">
            <h2 className="mb-10 text-kddiOrange text-2xl sm:text-2xl md:text-3xl lg:text-4xl leading-9 font-normal uppercase sm:leading-10">
                One Relationship: Connectivity, Cloud, and Communications
            </h2>

            <div className="-mx-4 flex flex-wrap mb-6">
                <div className="w-full flex flex-col sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col flex-1 px-4 py-2 m-2">
                        <div className="flex-1">
                            <h2 className="text-2xl mb-3 text-cta font-bold">Connected</h2>
                            <p className="text-lg">
                                Connect your clients with their customers,
                                their datacenters to the cloud, 
                                and their business to the world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col flex-1 px-4 py-2 m-2">
                        <div className="flex-1">
                            <h2 className="text-2xl mb-3 text-cta font-bold">Local Relationships</h2>
                            <p className="text-lg">
                                Scale and connect your customers' infrastructure
                                across the country and globe with a single US partner. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:w-1/2 lg:w-1/3">
                    <div className="flex flex-col flex-1 px-4 py-2 m-2">
                        <div className="flex-1">
                            <h2 className="text-2xl mb-3 text-cta font-bold">Carrier-Grade</h2>
                            <p className="text-lg">
                                Achieve the highest levels of network and
                                datacenter infrastructure uptime, resiliency,
                                throughput, and last-mile connectivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default RelationshipSection;