'use client'
import React from 'react'
import './Item.scss'
import heart from '../../assets/img/heart.png'
import heart_active from '../../assets/img/heart_active.png'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
const Item = ({url, label, images, copyurl, price, id, withDelete, token}) => {
    const [onClickFavourite, setOnClickFavourite] = React.useState(false);
    const [ifDeleted, setIfDeleted] = React.useState('');

    const deleteItem = async () => {
        try {
            let data = JSON.stringify({
                "id": id
            });
              
            let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: process.env.NEXT_PUBLIC_BE_URL + "/items",
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
            data : data
            };

            const res = await axios.request(config);

            if(res.status = 200){
                setIfDeleted(true);
            }
        } catch (err) {
            setIfDeleted(false);
            return err;
        }
    }

  return (
    <div className='item-block' key={id}>
        <div className='img-wrap'>
            <Link href={url + id} >
                <img
                    src={images[0]}
                    alt="Picture of the author"
                    className='item-image'
                />
            </Link>
        </div>
        <p className='item-label'>{label}</p>
        <div className='item-info'>
            <p className='item-price'>{price} CNY</p>
            <div className='item-controls'>
                {
                    //onClickFavourite ?
                    // <Image
                    //     src={heart_active}
                    //     alt="Picture of the author"
                    //     priority
                    //     className='favourite-img'
                    //     onClick={() => {setOnClickFavourite(!onClickFavourite)}}
                    // /> :
                    // <Image
                    //     src={heart}
                    //     alt="Picture of the author"
                    //     priority
                    //     className='favourite-img'
                    //     onClick={() => {setOnClickFavourite(!onClickFavourite); addFavourite}}
                    // />
                }
                {
                    withDelete ? <button className='copy-url-btn' onClick={() => {deleteItem()}}>{ifDeleted ? 'Удалено' : 'Удалить'}</button>
                    : <Link href={copyurl} target='_blank'><button className='copy-url-btn'>Купить на Pandabuy</button></Link> 
                }
            </div>
        </div>
    </div>
  )
}

export default Item
