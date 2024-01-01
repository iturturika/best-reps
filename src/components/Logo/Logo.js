import './Logo.scss'
import Image from 'next/image'
import pandaImage from '../../assets/img/panda.png'
import Link from 'next/link'
const Logo = ({widthImg, heightImg, fontSize}) => {
  return (
    <Link href={'/replicas'} className="logo">
        <Image
            src={pandaImage}
            alt="Picture of the author"
            width={widthImg}
            height={heightImg}
        />
        <p style={{fontSize: fontSize}}>Best-Reps</p>
    </Link>
  )
}

export default Logo
