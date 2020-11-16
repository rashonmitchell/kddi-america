import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <button className="orange text-center" type="button" onClick={() => setShowModal(true)}>
            Enroll Today
        </button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                    <button
                        className="p-1 ml-auto bg-transparent float-right focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-kddiGray opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                    </button>
                </div>
                <div className="relative p-6 flex-auto">
                    <h3 className="text-2xl text-kddiOrange text-center">
                        Connect with a KDDI partner account manager to get started. 
                    </h3>
                    <form className="px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name:" />
                        </div>
                        <div className="mb-6">
                            <input className="w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company:" />
                        </div>

                        <div className="mb-6">
                            <input className="appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="business-email" type="text" placeholder="Business email:" />
                        </div>

                        <div className="mb-6">
                            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="business-phone" type="text" placeholder="Business phone:" />
                        </div>
                        
                    </form>

                    <button
                        className=" uppercase orange text-center"
                        type="button"
                        onClick={() => setShowModal(false)}
                    >
                        Send
                    </button>
                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}