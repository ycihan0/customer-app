
import "./CustomerItem.css"
import styled from 'styled-components'

const CustomerItem = ({customer,deleteHandler}) => {
    //console.log(props.customer.customerName)
    
   
  return (
    <li className='customer-item'>
        <div className='customer-info'>
          <img src='https://i.pravatar.cc/300' alt='' className='customer-avatar'/>
          <span className='customer-name'>{customer.customerName}</span>
        </div>
        <button className='delete-button' onClick={()=>deleteHandler(customer)}><i className='bi bi-trash3'></i></button>
      </li>
  )
}

export default CustomerItem
