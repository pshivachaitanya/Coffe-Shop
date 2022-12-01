import React from 'react'
import './Card.css';
import { connect } from 'react-redux';
import filter_name from '../Reducer/filterreducer';
import { addorder, resetfilter, resettablenumber } from '../Action';

const Card = ({filter_name,addorder,table_number}) => {
    const [data,setData]=React.useState([]);
    const [cloneData,setCloneData]=React.useState([])


  /*  React.useEffect(()=>{
        fetch('https://api.sampleapis.com/coffee/hot').then(
            response=>response.json()

        ).then(
            json=>{
                setData(json)
                setCloneData(json)
            }
            
        )
        console.log(filter_name)

    },[])*/



    React.useEffect(()=>{
     if(filter_name!='hot'){

       fetch('https://api.sampleapis.com/coffee/iced').then(
            response=>response.json()

        ).then(
            json=>{
                setData(json)
                setCloneData(json)
            }
            
        )
      
      }

      else{

        fetch('https://api.sampleapis.com/coffee/hot').then(
            response=>response.json()

        ).then(
            json=>{
                setData(json)
                setCloneData(json)
            }
            
        )

      }
    
    },[filter_name]) 


 const Handler=async(id,name,prize,image)=>{
  if(table_number!=null){

    await addorder(id,name,prize,table_number,image)

    await resettablenumber

    await resetfilter

    alert('order placed succesfully')

  }
  else{
    alert('please select table number')
  }


 }


  return (
    <div>
      <center>
        {data.length>0?
      <div className='row'>
            {data.map((item)=>(
                <div className='col-md-4' style={{padding:"3px"}}> 
                <div className='card' style={{width:"18rem",padding:"3px" }}>
                <img src={item.image} class="images card-img-top" />
                <div className='card-body'>
                    <h5 className="card-title">{item.title}</h5>
                    <button className='btn btn-primary' onClick={()=>Handler(item.id,item.title,item.prize,item.image)}>Order</button>
                    
                </div>
                    </div>
                </div>
            ))}

        </div>:
        <div className='spinner-border text-primary'></div>
     }
       
      </center>
    </div>
  )
}

const mapStateToProps=state=>({
  filter_name:state.filterreducer.filter_name,
  table_number:state.tablereducer.table_number
})
 
  console.log(filter_name)

export default connect(mapStateToProps,{addorder})(Card)
