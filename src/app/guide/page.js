import Header from '@/components/Header/Header'
import './page.scss'
import Accordion from '@/components/Accordion/Accordion'
import Link from 'next/link'
import guideimg1 from '../../assets/img/guideimg1.jpeg'
import guideimg2 from '../../assets/img/guideimg2.jpeg'
import guideimg3 from '../../assets/img/guideimg3.jpeg'
import guideimg4 from '../../assets/img/guideimg4.jpeg'
import guideimg5 from '../../assets/img/guideimg5.jpeg'
import guideimg6 from '../../assets/img/guideimg6.jpeg'
import Image from 'next/image'
const page = () => {
  return (
    <main>
      <Header />
      <div className='guide-page-block'>
        <h2 className='guide-header'>Гайд</h2>
        <div className='guide-page-wrap'>
            <Accordion label={'1 шаг: Регистрация'} text={
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <ul>
                  <li>Перейдите на сайт посредника <Link href="https://pandabuy.allapp.link/cmbtsjogpf6qoog1cisg">PandaBuy</Link></li>
                  <li>Заполните форму регистрации и нажмите зарегистрироваться</li>
                </ul>
                <Image
                    src={guideimg1}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
              </div>
            }/>
            <Accordion label={'2 шаг: Поиск товара'} text={
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <ul>
                  <li>Выбирите понравившиеся товар на сайте</li>
                  <li>Скопируйте ссылку нажав на соответствующую кнопку</li>
                </ul>
                <Image
                    src={guideimg2}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
              </div>
            }/>
            <Accordion label={'3 шаг: Заказ на склад'} text={
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <ul>
                  <li>Выполнив выше указанные пункты перед вами будет открыта страница товара у посредника</li>
                </ul>
                <Image
                    src={guideimg3}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
                <p>Тут вы можете увидеть фото и всю информацию о товаре. Чуть ниже могут быть фото Quality Check по которым вы можете подробнее осмотреть товар, а так же почитать отзывы.</p>
                <ul>
                  <li>Если вы уже со всем ознакомились вы можете нажать на кнопку добавить в корзину, выбрать соответствующую комплектацию и поместить товар в корзину.</li>
                </ul>
                <p>Собрав интересующие вас товары вы можете еще раз проверить выбранные вами комплектации и приступить к оплате.</p>
                <Image
                    src={guideimg4}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
                <p>Выберите товары и нажмите кнопку Submit и перейдите к оплате. Тут вы можете выбрать удобный для вас метод оплаты и совершить заказ.</p>
                <Image
                    src={guideimg5}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
                <p>После оплаты посредник займеться оформление вашего заказа и через несколько дней товар прибудет на склад.</p>
              </div>
            }/>
            <Accordion label={'4 шаг: Сборка посылки'} text={
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <ul>
                  <li>Когда весь товар прибыл на склад вы можете приступить к сборке поссылки.</li>
                </ul>
                <Image
                    src={guideimg6}
                    alt="Picture of the author"
                    className='main-page-panda-img'
                    priority
                    width={700}
                    height={500}
                    style={{objectFit: 'fill'}}
                />
                <ul>
                  <li>Перейдите на вкладку warehouse выберите товар и перейдите к оформлению посылки.</li>
                  <li>Укажите адрес</li>
                  <li>Выберите метод доставки</li>
                  <li>Задекларируйте стоимость посылки (можно всегда указывать 90-100$)</li>
                  <li>После примие соглашение и оплатите посылку.</li>
                </ul>
                <p>И так поздравляю вы оформили первую посылку. Осталось ждать и отслеживать ее. Отслеживать вы можете e PandaBuy, а так же и на других трек-сайтах.</p>
                <p>Вот и все! Спасибо что посетил мой сайт, не забудь поделиьться им с друзьями в соц.сетях.</p>
              </div>
            }/>
        </div>
      </div>
    </main>
  )
}

export default page
