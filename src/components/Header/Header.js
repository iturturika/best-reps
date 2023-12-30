import './Header.scss'
import React from 'react'
import Link from 'next/link'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header className='header'>
        <div className='header-wrap'>
            <Logo widthImg={61} heightImg={60} fontSize={'40px'}/>
            <nav className='nav-links'>
                <Link href="/guide">Гайд</Link>
                <Link href="/replicas">Реплики</Link>
                <Link href="/favourites">Избранные</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
