import './page.scss'
import Image from "next/image"
import bamboockImage from '../assets/img/bamboock.png'
import pandaImage from '../assets/img/panda.png'
import Link from 'next/link'

const page = () => {
  return (
    <main className='main-page-layout'>
      <Image
        src={bamboockImage}
        alt="Picture of the author"
        className="first-bamboock-img"
        priority
      />
      <span className='background-circle'></span>
      <div className='main-page-glass-block'>
        <div style={{display: 'flex', columnGap: '20px', alignItems: 'center'}}>
          <Image
              src={pandaImage}
              alt="Picture of the author"
              className='main-page-panda-img'
              priority
          />
          <p className='main-page-label'>Best-Reps</p>
        </div>
        <h1 className='main-page-description'>Каталог лучших реплик во всем мире.</h1>
      </div>

      <Link href="/replicas"><button className='main-page-glass-button'>Посмотреть</button></Link>
      <Image
        src={bamboockImage}
        alt="Picture of the author"
        className="second-bamboock-img"
        priority
      />
    </main>
  )
}

export default page
