import React from 'react'
import './DetailedImage.scss'
import Image from 'next/image'
import arrowImg from '../../assets/img/arrow.png'
import closeImg from '../../assets/img/close.png'
import Link from 'next/link'

const DetailedImage = ({backURL, images, url}) => {
    const [selectedImage, setSelectedImage] = React.useState(0);

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
        <img className='detailed-image-photo' src={images[selectedImage]}/>
        <Link href={url} style={{position: 'fixed', bottom: '20px', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 13, width: '150px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', textDecoration: 'none', color: '#000'}} target='_blank' className='control-arrow'>
            Купить на Pandabuy
        </Link>
        <div className='detailed-image-controls'>
            {
                selectedImage !== 0 ?
                <span className='control-arrow' onClick={() => {setSelectedImage(selectedImage - 1)}} style={{marginLeft: 0, marginRight: 'auto'}}>
                    <Image
                        src={arrowImg}
                        alt="Picture of the author"
                        priority
                        style={{transform: 'rotate(90deg)'}}                        
                    />
                </span> : null
            }
            {
                selectedImage !== images.length - 1?
                <span className='control-arrow' onClick={() => {setSelectedImage(selectedImage + 1)}} style={{marginLeft: 'auto', marginRight: 0}}>
                <Image
                    src={arrowImg}
                    alt="Picture of the author"
                    priority      
                    style={{transform: 'rotate(-90deg)'}}                      
                />
                </span> : null
            }
        </div>
      </div>
    </div>
  )
}

export default DetailedImage
