import React, { useState } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
        <button className="text-center font-bold focus:outline-none" type="button" onClick={() => setShowModal(true)}>
            {props.content}
        </button>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={() => setShowModal(false)}
          >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-black opacity-75"></div>
            </div>

            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-1 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                <div className="relative p-6 flex-auto">
                
                  <div className="flex items-start p-5">
                    <h3 className="text-2xl text-kddiOrange text-center whitespace-pre-line flex-wrap w-4/5">
                      Connect with a KDDI partner account manager to get started. 
                    </h3>
                    <button
                      className=" ml-auto bg-transparent float-right focus:outline-none"
                      onClick={toggleModal}
                    >
                      <span className="bg-transparent text-kddiGray opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                      </span>
                    </button>
                  </div>

                    <form className="px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <input className="form-modal w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name:" />
                        </div>
                        <div className="mb-6">
                            <input className="form-modal w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Company:" />
                        </div>

                        <div className="mb-6">
                            <input className="form-modal w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="business-email" type="text" placeholder="Business email:" />
                        </div>

                        <div className="mb-6">
                            <input className="form-modal w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="business-email" type="text" placeholder="Business phone:" />
                        </div>
                        
                    </form>

                    <button
                        className=" uppercase orange text-center focus:outline-none"
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