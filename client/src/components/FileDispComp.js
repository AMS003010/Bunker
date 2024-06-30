import FileIcon from '../images/file-icon.png';
import PdfIcon from '../images/pdf-icon.png';

import FileOptions from './FileOptions';

const FileDispComp = ({_id,text,url,ext}) => {
    const compStyle = {
        backgroundImage: `url('${ext==="pdf" ? PdfIcon : FileIcon}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center top'
    }
    return(
        <div className="bg-[#1c1d1d] w-[15rem] h-[17rem] rounded-xl p-2 flex flex-col" id={_id}>
            <div className='flex justify-between items-center p-3'>
                <div className='flex justify-between items-center w-max gap-2'>
                    <image src={ext==="pdf" ? PdfIcon : FileIcon} className='w-4 h-4' style={compStyle}/>
                    <div className='text-xs w-[6rem] truncate'>{text}</div>
                </div>
                <div className='flex flex-col justify-center'>
                    <FileOptions/>
                </div>
            </div>
            <a
                href={url}
                target='blank'
                className='w-[100%] h-[100%]'
            >
            <div className='bg-[#ffffff94] text-[#ffffff94] rounded-xl m-1 flex-grow' style={{ height: 'calc(100% - 0.5rem)' }}>&nbsp;</div>
            </a>
        </div>
    )
}

export default FileDispComp;
