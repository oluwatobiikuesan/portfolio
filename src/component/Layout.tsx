import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../style/layout.css';

export default function Layout({children}: any) {
  return (
    <div className='layout'>
        <Header/>
        <main>
        {
            children
        }
        </main>
        <Footer/>
    </div>
  )
}
