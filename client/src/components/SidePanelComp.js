const SidePanelComp = ({text,image}) => {

    const compStyle = {
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center top'
    }

    return(
        <div className='flex justify-start items-center gap-6 rounded-3xl hover:bg-[#00416B] cursor-pointer p-2 px-6'>
            <image src={image} className='w-4 h-4' style={compStyle}/>
            <div className="text-sm">{text}</div>
        </div>
    )
}

export default SidePanelComp;