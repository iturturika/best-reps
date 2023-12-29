import './Logo.scss'
import Image from 'next/image'
import pandaImage from '../../assets/img/panda.png'

const Logo = ({widthImg, heightImg, fontSize}) => {
  return (
    <div className="logo">
        <Image
            src={pandaImage}
            alt="Picture of the author"
            width={widthImg}
            height={heightImg}
        />
        <p style={{fontSize: fontSize}}>Best-Reps</p>
    </div>
  )
}

export default Logo
