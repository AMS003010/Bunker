import FileIcon from '../images/file-icon.png';
import PdfIcon from '../images/pdf-icon.png';

const FileDispComp = ({text,url,ext}) => {
    const compStyle = {
        backgroundImage: `url('${ext==="pdf" ? PdfIcon : FileIcon}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center top'
    }
    return(
        <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-4 flex flex-col">
            <div className='flex justify-between items-center px-2'>
                <div className='flex justify-between items-center w-max gap-2'>
                    <image src={FileIcon} className='w-4 h-4' style={compStyle}/>
                    <div>{text}</div>
                </div>
                <div className='flex flex-col justify-between gap-1'>
                    <div className='bg-[#ffffff] rounded-full w-1 h-1'></div>
                    <div className='bg-[#ffffff] rounded-full w-1 h-1'></div>
                    <div className='bg-[#ffffff] rounded-full w-1 h-1'></div>
                </div>
            </div>
            <a
                href={url}
                target='blank'
                className='w-[100%] h-[100%]'
            >
            <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-4 flex-grow' style={{ height: 'calc(100% - 2rem)' }}>&nbsp;</div>
            </a>
        </div>
    )
}

export default FileDispComp;
