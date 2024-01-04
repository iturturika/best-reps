'use client'
import Header from "@/components/Header/Header";
import React from "react";
import './page.scss';
import BasicSelect from "@/components/Select/Select";
import Item from "@/components/Item/Item";
import axios from "axios";

const page = () => {

  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  const [category, setCategory] = React.useState(null);
  const [brand, setBrand] = React.useState(null);
  const [items, setItems] = React.useState([]);

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

    const getItems = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_BE_URL + '/items?' + `category=${category.value}&brand=${brand.value}`);
        
        setItems(res.data);

      } catch (err) {
        return err;
      }
    }

    getCategories();
    getBrands();
    getItems();

  }, [category, brand])

  return (
      <main>
        <Header />
        <div className="replicas-page-wrap">
          <div className="filter-block">
            <h2>Фильтр</h2>
            <BasicSelect  id={'id1'} label={'Бренды'} options={brands} selectedOption={brand} setSelectedOption={setBrand}/>
            <BasicSelect id={'id2'} label={'Категории'} options={categories} selectedOption={category} setSelectedOption={setCategory}/>
          </div>
          <div className="items-block-wrap">
            {
              items.length > 0 ? items.map((item) => {
                return(
                  <Item key={item._id} id={item._id} url={'/replicas/'} copyurl={item.url} label={item.label} price={item.price} images={item.images}/>
                )
              })
              : null
            }
          </div>
        </div>
      </main>
  )
}

export default page
