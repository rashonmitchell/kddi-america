import React from 'react';
import 'react-table';
function Table() {
    return (
        <div className="container m-auto p-8 mt-12 ">
            <h2 className="mb-12 text-kddiOrange text-4xl leading-9 font-normal uppercase sm:text-4xl sm:leading-10">
                Committed to Your Success
            </h2>
            
            {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
                <div className="p-4 col-span-1 lg:col-span-2">
                    <h3 className="text-2xl mb-2 text-kddiOrange">Simplicity</h3>
                    <p className="text-lg leading-7 text-kddiGray">
                        The KDDI America partner program is easy to join and free of complexity, channel conflict, and risk.
                    </p>
                </div>
                <div className="p-4 text-center">
                    <div className="rounded-full orange-dot"></div>
                </div>
                <div className="p-4 text-center">
                    <div className="rounded-full orange-dot"></div>
                </div>
            </div> */}
            
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-4"></th>
                        <th className="px-4 py-4 text-2xl mb-4 text-cta text-center">
                            KDDI America Advisor 
                        </th>
                        <th className="px-4 py-4 text-2xl mb-4 text-cta text-center">
                            KDDI America Solution Strategist 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-kddiSkyBlue">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Simplicity</h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                The KDDI America partner program is easy to join and free of complexity, channel conflict, and risk.
                            </p>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Low Risk</h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                There are no upfront costs, revenue commitments,
                                and you don’t pay KDDI until you begin invoicing your customers.
                            </p>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                    <tr className="bg-kddiSkyBlue">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Cobranding</h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                Learn how to showcase your KDDI partnership and services with the partner brand guide.
                            </p>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Marketing and Sales</h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                Grow your pipeline and market mindshare with access to turn-key marketing kits and sales tools.
                            </p>
                        </td>
                        <td className="">
                            <div className=""></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                    <tr className="bg-kddiSkyBlue">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Business Planning </h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                Work directly with your KDDI partner manager to develop your business strategy and plan opportunities.
                            </p>
                        </td>
                        <td className="">
                            <div className=""></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="px-4 py-4">
                            <h3 className="text-2xl mb-2 text-kddiOrange">Pre-Sales Support</h3>
                            <p className="text-lg leading-7 text-kddiGray">
                                Accelerate the sales cycle with access to demo licenses, evaluation software, POC environments, and trial hardware.
                            </p>
                        </td>
                        <td className="">
                            <div className=""></div>
                        </td>
                        <td className="">
                            <div className="rounded-full orange-dot"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Table;