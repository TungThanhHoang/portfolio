import React from 'react'

const ViewModal = ({ onHide, data, title }) => {

    return (
        <div>
            <div className="fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center appear-done enter-done">
                <div className="overflow-y-auto w-full h-3/4 px-6 py-4 bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-5xl appear-done enter-done">
                    <div className='sticky top-0 w-full'>
                        <div className="flex justify-between items-center">
                            <div className="capitalize font-bold text-lg p-2  text-black">
                                <span>Project #{title}</span>
                            </div>
                            <div className='cursor-pointer shadow-2xl bg-black text-white rounded-full p-2 opacity-50' onClick={onHide}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`grid ${data.length !== 0 ? "md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" : "grid-cols-1" }`}>
                        {data.length !== 0 ? data.map((item) => {
                            return (
                                <img className="w-full h-auto" src={item.image} alt="" />
                            )
                        }) : <span className='font-bold flex justify-center'>No Data</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewModal
