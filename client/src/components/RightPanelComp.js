const RightPanelComp = ({image}) => {
    const compStyle = {
        backgroundImage: `url('${image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center top'
    }

    return(
        <div className='flex justify-start items-center rounded-3xl hover:bg-[#00416B] cursor-pointer p-2 w-max'>
            <image src={image} className='w-6 h-6' style={compStyle}/>
        </div>
    )
}

export default RightPanelComp;