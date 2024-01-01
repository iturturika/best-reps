import Header from '@/components/Header/Header'
import './page.scss'
import Accordion from '@/components/Accordion/Accordion'

const page = () => {
  return (
    <main>
      <Header />
      <div className='guide-page-block'>
        <h2 className='guide-header'>Гайд</h2>
        <div className='guide-page-wrap'>
            <Accordion label={'1 шаг: Регистрация'} text={"2 шаг: Поиск товара2 шаг: Поиск товара2 шаг: Поиск товара2 шаг: Поиск товара2 шаг: Поиск товара2 шаг: Поиск товара2 шаг: Поиск товара"}/>
            <Accordion label={'2 шаг: Поиск товара'}/>
            <Accordion label={'3 шаг: Заказ на склад'}/>
            <Accordion label={'4 шаг: Проверка качества и сборка поссылки'}/>
            <Accordion label={'5 шаг: Отслеживание и получении поссылки'}/>
        </div>
      </div>
    </main>
  )
}

export default page
