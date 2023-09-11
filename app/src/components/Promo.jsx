import React from 'react'

const Promo = ({classContainer,children}) => {
  return (
    <>
    <div className={classContainer}>
    {children}
    </div>
    </>
  )
}

export default Promo