import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({count}) => {
   
  return (
    <div>
     <nav className='navbar navbar-light bg-light p-3'>
      <a className='navbar-brand'>Coffe Shop</a>
      <button className='btn btn-primary'> <Link style={{color: "white", textDecoration: 'none'}} to='./orders'>Order</Link><span className='badge badge-secondary'>{count}</span></button>
     </nav>
    </div>
  )
}
const mapStateToProps=state=>({
  count:state.orderreducer.length
})

export default connect(mapStateToProps)(Header)
