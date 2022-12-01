import React from 'react'
import { connect } from 'react-redux'
const Orders = ({list}) => {
  return (
    <div>
      <center>

        <h1>Your Orders</h1>
        {list.length>0?
      <div className='row'>
            {list.map((item)=>(
                <div className='col-md-4' style={{padding:"3px"}}> 
                <div className='card' style={{width:"18rem",padding:"3px" }}>
                <img src={item.image} class="images card-img-top" />
                <div className='card-body'>
                    <h5 className="card-title">{item.title}</h5>
                    <p>Prize:200</p>
                    <p>Table Number:{item.table_number}</p>
                </div>
                    </div>
                </div>
            ))}

        </div>:
        <div>
          <h1>No Order placed Yet</h1>
        </div>
     }
       
      </center>
    </div>
  )
}
 const mapStateToProps=state=>({
  list:state.orderreducer
 })

 
export default connect(mapStateToProps)(Orders)
