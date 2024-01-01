'use client'
import Header from "@/components/Header/Header";
import React from "react";
import './page.scss';
import BasicSelect from "@/components/Select/Select";
import Item from "@/components/Item/Item";
import DetailedImage from "@/components/DetailedImage/DetailedImage";

const page = () => {
  const [onClickItem, setOnClickItem] = React.useState(false);
  return (
    <>
    {
      onClickItem ?
      <DetailedImage />
      :
      <main>
        <Header />
        <div className="replicas-page-wrap">
          <div className="filter-block">
            <h2>Фильтр</h2>
            <BasicSelect  id={'id1'} label={'Бренды'} options={[
              { value: 'Balenciaga', label: 'Balenciaga' },
              { value: 'Raf Simons', label: 'Raf Simons' },
              { value: 'Rick Owens', label: 'Rick Owens' },
            ]}/>
            <BasicSelect id={'id2'} label={'Категории'} options={[
              { value: 'Pants', label: 'Pants' },
              { value: 'Coats', label: 'Coats' },
              { value: 'Socks', label: 'Socks' },
            ]}/>
          </div>
          <div className="items-block-wrap">
            <Item url={'/replicas/'}/>
            <Item url={'/replicas/'}/>
            <Item url={'/replicas/'}/>
          </div>
        </div>
      </main>
    }
    </>
  )
}

export default page
