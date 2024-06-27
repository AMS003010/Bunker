const DropDownComp = ({text}) => {
    return(
        <div className='flex justify-between items-center w-max gap-5 border-[0.1rem] p-2 px-4 rounded-xl border-[#535353]'>
            <div className='text-[#535353] text-base'>{text}</div>
            <div className='w-6'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#535353" stroke="#ffffff" strokeWidth="0.00024000000000000003">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g>
                    <g id="SVGRepo_iconCarrier">
                        <rect x="0" fill="none" width="24" height="24"></rect>
                        <g>
                            <path d="M7 10l5 5 5-5"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default DropDownComp;