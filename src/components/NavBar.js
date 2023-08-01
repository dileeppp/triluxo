import React from 'react'
import styles from '../app/page.module.css'
import Link from 'next/link'
const NavBar = ({isLoggedIn,logout}) => {
 
  return (
    <div className={styles.nav__1} >
    <div className={styles.nav__2}>
       <h1 >Triluxo</h1> 
    </div>
      <div className={styles.nav__3}>
      {
        isLoggedIn ? 
        <Link href='/' onClick={logout}>Signout</Link>
        :
        <div>
        <Link href="../pages/login" className={styles.nav__4} >Login</Link>
        <Link href="../pages/signup">Signup</Link>
        </div>
      }
      
      </div>
    </div>
  )
}

export default NavBar
