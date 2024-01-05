'use client'
import React from 'react'
import Header from '@/components/Header/Header'
import './page.scss'
import Item from '@/components/Item/Item'

const page = () => {
  return (
    <main>
      {/* <Header />
      <div className='favourites-page-block'>
        <h2 className='favourites-header'>Избранные</h2>
        <div className='favourites-page-wrap'>
            {
              items.map((item) => {
                return(
                  <Item key={item._id} id={item._id} url={'/favourites/'} copyurl={item.url} label={item.label} price={item.price} images={item.images}/>
                )
              })
            }
        </div>
      </div> */}
    </main>
  )
}

export default page
