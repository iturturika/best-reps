import React from 'react'
import './DetailedImage.scss'
import Image from 'next/image'
import arrowImg from '../../assets/img/arrow.png'
import closeImg from '../../assets/img/close.png'
import Link from 'next/link'

const DetailedImage = ({backURL}) => {
  return (
    <div className='detailed-image-block'>
      <div className='detailed-image-wrap'>
        <Link href={backURL}>
            <span style={{position: 'fixed', top: '20px', right: '20px', zIndex: 13}} className='control-arrow'>
                <Image
                    src={closeImg}
                    alt="Picture of the author"
                    priority
                    style={{transform: 'rotate(90deg)'}}
                />
            </span>
        </Link>
        <img className='detailed-image-photo' src={'https://imgsz.pandabuy.com/static/ios/2023-12-29/NormalPI23213189703PandaBuyOriginal2_1703841522838.jpg?image_process=quality,Q_50'}/>
        <span style={{position: 'fixed', bottom: '20px', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 13, width: '100px', fontWeight: 700}} className='control-arrow'>
            Copy URL
        </span>
        <div className='detailed-image-controls'>
            <span className='control-arrow'>
                <Image
                    src={arrowImg}
                    alt="Picture of the author"
                    priority
                    style={{transform: 'rotate(90deg)'}}
                />
            </span>
            <span className='control-arrow'>
                <Image
                    src={arrowImg}
                    alt="Picture of the author"
                    priority
                    style={{transform: 'rotate(-90deg)'}}
                />
            </span>
        </div>
      </div>
    </div>
  )
}

export default DetailedImage
