'use client'
import './Header.scss'
import React from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'
import Image from 'next/image'
import menuImg from '../../assets/img/menu.png'
import closeImg from '../../assets/img/close.png'

const Header = () => {
  const [onClickMenu, setOnClickMenu] = React.useState(false);

  return (
    <header className={onClickMenu ? 'header_active' : 'header'} >
        <div className='header-wrap'>
            <Logo widthImg={51} heightImg={50} fontSize={'30px'}/>
            <nav className='nav-links'>
                <Link href="/guide">Гайд</Link>
                <Link href="/replicas">Реплики</Link>
                {/* <Link href="/favourites">Избранные</Link> */}
            </nav>
            <Image
              src={onClickMenu ? closeImg : menuImg}
              alt="Picture of the author"
              className='humburger-menu'
              priority
              onClick={() => {setOnClickMenu(!onClickMenu)}}
            />
        </div>
            <nav className='humburger-menu-links' style={onClickMenu ? {display: 'flex'} : null}>
                <Link href="/guide">Гайд</Link>
                <Link href="/replicas">Реплики</Link>
                {/* <Link href="/favourites">Избранные</Link> */}
            </nav>
    </header>
  )
}

export default Header
