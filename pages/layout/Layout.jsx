import React from 'react'
import Header from '../components/Header'



const Layout = ({children}) => {
  return (
    <div >
      <Header />
        <section >
          {children}
        </section>
    </div>
  )
}

export default Layout