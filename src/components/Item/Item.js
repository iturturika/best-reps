'use client'
import React from 'react'
import './Item.scss'
import heart from '../../assets/img/heart.png'
import heart_active from '../../assets/img/heart_active.png'
import Image from 'next/image'
import Link from 'next/link'
const Item = ({url}) => {

  return (
    <div className='item-block'>
        <div className='img-wrap'>
            <Link href={url + '1'}>
                <img
                    src={'https://imgsz.pandabuy.com/static/ios/2023-12-29/NormalPI23213189703PandaBuyOriginal2_1703841522838.jpg?image_process=quality,Q_50'}
                    alt="Picture of the author"
                    className='item-image'
                />
            </Link>
        </div>
        <p className='item-label'>Very long label for this item on this page on this site</p>
        <div className='item-info'>
            <p className='item-price'>180 CNY</p>
            <div className='item-controls'>
                {
                    false ?
                    <Image
                        src={heart}
                        alt="Picture of the author"
                        priority
                        className='favourite-img'
                    /> :
                    <Image
                        src={heart_active}
                        alt="Picture of the author"
                        priority
                        className='favourite-img'
                    />
                }
                <button className='copy-url-btn'>URL</button>
            </div>
        </div>
    </div>
  )
}

export default Item
