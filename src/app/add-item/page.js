'use client'
import React from 'react';
import './page.scss'
import BasicSelect from '@/components/Select/Select';
import axios from 'axios';
const page = () => {
    const [token, setToken] = React.useState(false);
    const [brands, setBrands] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [brand, setBrand] = React.useState({value: '', label: 'Бренды'});
    const [category, setCategory] = React.useState({value: '', label: 'Категории'});

    const [label, setLabel] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [refUrl, setRefUrl] = React.useState('');
    const [img1url, setImg1url] = React.useState('');
    const [img2url, setImg2url] = React.useState('');
    const [img3url, setImg3url] = React.useState('');

    const [err, setErr] = React.useState(false);

    React.useEffect(() => {
    const getCategories = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + '/category');
            const modifiedArr = res.data.map((category) => {
            return (
                {
                value: category.label,
                label: category.label
                }
            )
            });
    
            setCategories(modifiedArr);
    
        } catch (err) {
            return err;
        }
        }
    
        const getBrands = async () => {
        try {
            const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + '/brand');
            const modifiedArr = res.data.map((brand) => {
            return (
                {
                value: brand.label,
                label: brand.label
                }
            )
            });
    
            setBrands(modifiedArr);
    
        } catch (err) {
            return err;
        }
        }

        if(typeof window !== 'undefined') {
            setToken(localStorage.getItem("token"));
        }

        getBrands();
        getCategories();
    }, [])

    const addItem = async () => {
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_BE_URL + "/items", {
                label,
                price,
                url: refUrl,
                brand: brand.value,
                category: category.value,
                images: [img1url, img2url, img3url]
            }, 
            {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            });

            if(res.status === 200){
                setErr("Добавленно");
                setTimeout(() => {
                    setErr(false)
                }, 2000)
            }
        } catch (err) {
            setErr(err.response.data.message);
            setTimeout(() => {
                setErr(false)
            }, 2000)
            return err;
        }
    }

  return (
    <>
    {
        token ? 
        <div className='add-item-wrap'>
            <div className='add-item-block'>
                <input className='add-item-input' type='text' placeholder='Название' value={label} onChange={(event) => {setLabel(event.target.value)}}></input>
                <input className='add-item-input' type='text' placeholder='Цена' value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
                <input className='add-item-input' type='text' placeholder='Реф ссылка' value={refUrl} onChange={(event) => {setRefUrl(event.target.value)}}></input>
                <BasicSelect  id={'id1'} label={'Бренды'} options={brands} selectedOption={brand} setSelectedOption={setBrand}/>
                <BasicSelect id={'id2'} label={'Категории'} options={categories} selectedOption={category} setSelectedOption={setCategory}/>
                <input className='add-item-input' type='text' placeholder=' 1 Ссылка на картинку' value={img1url} onChange={(event) => {setImg1url(event.target.value)}}></input>
                <input className='add-item-input' type='text' placeholder=' 2 Ссылка на картинку' value={img2url} onChange={(event) => {setImg2url(event.target.value)}}></input>
                <input className='add-item-input' type='text' placeholder=' 3 Ссылка на картинку' value={img3url} onChange={(event) => {setImg3url(event.target.value)}}></input>
                <button className='add-item-button' onClick={() => {addItem()}}>Добавить</button>
                {err ? <p>{err}</p> : null}
            </div>
        </div> 
        : () => {window.location.href = "/login"}
    }
    </>
  )
}

export default page
