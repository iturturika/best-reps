import Header from '@/components/Header/Header'
import './page.scss'
import Item from '@/components/Item/Item'

const page = () => {
  return (
    <main>
      <Header />
      <div className='favourites-page-block'>
        <h2 className='favourites-header'>Избранные</h2>
        <div className='favourites-page-wrap'>
            <Item url={'/favourites/'}/>
            <Item url={'/favourites/'}/>
            <Item url={'/favourites/'}/>
        </div>
      </div>
    </main>
  )
}

export default page
