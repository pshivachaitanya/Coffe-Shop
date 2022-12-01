import React from 'react'
import { connect } from 'react-redux';
import { setfilter,resetfilter } from '../Action';

const Filter = ({filter_name,setfilter,resetfilter}) => {
    const prod=['All Items' ,'hot','iced']
    const [filter,setiFlter]=React.useState('All Items')
  return (
    <div>
      <center className='p-2'>
        <span className='h4'>Filter </span>
        <select className='p-2 m-2' name='filter' onChange={(e)=> setfilter(e.target.value)}>
           {prod.map((item,index)=>(
            <option value={item} key={index}>{item}</option>
           ))}
        </select>
      </center>
    </div>
  )
}
const mapStatetoProps=state=>({
  filter_name:state.filterreducer.filter_name
})
export default connect(mapStatetoProps,{setfilter,resetfilter})(Filter)
