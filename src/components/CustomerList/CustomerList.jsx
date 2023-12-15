
import "./CustomerList.css"
import CustomerItem from '../CustomerItem/CustomerItem'



const CustomerList = ({customers, setCustomers}) => {
  const deleteHandler=(item)=>{setCustomers(customers.filter(
    (customer)=>customer.id!==item.id
  ))
}
 
   return (
    <ul className='customer-list'>
      {customers.map((customer)=>{ return <CustomerItem key={customer.id}  customer={customer} deleteHandler={deleteHandler}/>})}
      
    </ul>
  )
}

export default CustomerList
