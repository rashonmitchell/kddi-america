import React from 'react';
import 'react-table';
function Table() {
    return (
        <div className="container m-auto p-8 mt-12 ">
            <h2 className="mb-12 text-kddiOrange text-4xl leading-9 font-normal uppercase sm:text-4xl sm:leading-10">
                Committed to Your Success
            </h2>

            <div className="flex flex-wrap -m-4">
            
                <div className="sm:block md:block lg:hidden xl:hidden">
                    <section className='tony-table-section bg-kddiSkyBlue'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Simplicity</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                The KDDI America partner program is easy to join and free of
                                complexity, channel conflict, and risk.
                            </p>
                            <section className='tony-span-table'>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                        
                    </section>
                    <section className='tony-table-section'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Low Risk</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                There are no upfront costs, revenue commitments, and you don't pay
                                KDDI until you begin invoicing your customers.
                            </p>
                            <section className='tony-span-table'>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                    </section>
                    <section className='tony-table-section bg-kddiSkyBlue'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Cobranding</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                Learn how to showcase your KDDI partnership and services with the
                                partner brand guide.
                            </p>
                            <section className='tony-span-table'>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                    </section>
                    <section className='tony-table-section'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Marketing and Sales</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                Grow your pipeline and market mindshare with access to turn-key
                                marketing kits and sales tools.
                            </p>
                            <section className='tony-span-table'>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className=''></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                    </section>
                    <section className='tony-table-section bg-kddiSkyBlue'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Business Planning</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                Work directly with your KDDI partner manager to develop your
                                business strategy and plan opportunities.
                            </p>
                            <section className='tony-span-table'>
                                <p className="text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className=''></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                    </section>
                    <section className='tony-table-section'>
                        <h3 className="text-2xl px-4 pt-4 text-kddiOrange">Pre Sales Support</h3>
                        <div className='col px-4 py-4'>
                            <p className='text-lg leading-7 text-kddiGray'>
                                Accelerate the sales cycle with access to demo licenses, 
                                evaluation software, POC environments, and trial hardware.
                            </p>
                            <section className='tony-span-table'>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Advisor</p>
                                <p className="px-4 py-4 text-xl mb-4 text-cta text-center">KDDI America Solution Strategist </p>
                            </section>
                        </div>
                        <div className='col'>
                            <span className=''></span>
                        </div>
                        <div className='col'>
                            <span className='dot'></span>
                        </div>
                        <div className='line-break'></div>
                    </section>
                </div>

                <div className="hidden md:hidden lg:block xl:block">
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
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-4 py-4">
                                    <h3 className="text-2xl mb-2 text-kddiOrange">Low Risk</h3>
                                    <p className="text-lg leading-7 text-kddiGray">
                                        There are no upfront costs, revenue commitments,
                                        and you don't pay KDDI until you begin invoicing your customers.
                                    </p>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
                                </td>
                            </tr>
                            <tr className="bg-kddiSkyBlue">
                                <td className="px-4 py-4">
                                    <h3 className="text-2xl mb-2 text-kddiOrange">Cobranding</h3>
                                    <p className="text-lg leading-7 text-kddiGray">
                                        Learn how to showcase your KDDI partnership and services with the partner brand guide.
                                    </p>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
                                </td>
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
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
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
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
                                <td className="text-center align-middle">
                                    <div className="rounded-full dot"></div>
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
                                <td className="text-center align-middle">
                                    <div className="rounded-full justify-center items-center dot"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
		</div>
    </div>
    )
}
export default Table;