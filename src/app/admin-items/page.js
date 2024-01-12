'use client'
import React from 'react'
import './page.scss'
import Header from '@/components/Header/Header'
import axios from 'axios'
import Item from '@/components/Item/Item'

const page = () => {
    const [items, setItems] = React.useState([]);
    const [token, setToken] = React.useState(false);
    React.useEffect(() => {
        const getItems = async () => {
            try {
                const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + '/items');

                if(res.status === 200){
                    setItems(res.data);
                }
            } catch (err) {
                setItems([]);
                return err;
            }
        }

        if(typeof window !== 'undefined') {
            setToken(localStorage.getItem("token"));
        }
        getItems();
    }, [])
  return (
    <>
        {   
            token ?
            <div className='admin-items-page-block'>
                <Header />
                <div className='admin-items-page-wrap'>
                    <h2 className='admin-items-page-header'>Список реплик</h2>
                    <div className='admin-items-block-wrap'>
                        {
                            items.length > 0 ? items.map((item) => {
                                return(
                                <Item key={item._id} id={item._id} url={'/replicas/'} copyurl={item.url} label={item.label} price={item.price} images={item.images} withDelete={true} token={token}/>
                                )
                            })
                            : <div style={{width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Ничего не найдено</div>
                        }
                    </div>
                </div>
            </div>
            : () => {window.location.href = "/login"} 
        }
    </>
  )
}

export default page
