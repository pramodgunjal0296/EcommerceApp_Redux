import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import { addToCart, removeFromCart } from './store/cartSlice';

function App() {
  const dispatch =useDispatch();

  const {products,cart,total} =useSelector((state)=> state.cart);

  const purchaseHandler = (e)=>{
    let name = e.target.options[e.target.selectedIndex].text;
    let price = parseInt(e.target.value);
    let itemObj ={name,price}; 
    dispatch(addToCart(itemObj));
  }

  const deleteHandler=(index,price)=>{
    let deleteItem ={index,price};
    dispatch(removeFromCart(deleteItem));
  }

  
  return (
    <div className="App">
    <h1>PRODUCTS</h1>
    <select onChange={(e)=> purchaseHandler(e)}>
      {products.map((product,index)=>{
         return(
          <option value={product.price} key={index}>
            {product.name}:{product.price}
          </option>
         );
      })}
    </select>
    <hr />
    <h2>CARTS</h2>
    {
      cart.map((item,index)=>{
        return(
          <li key={index} onClick={()=> deleteHandler(index,item.price)}>
            {item.name}
            </li>
        );
      })
    }
    <hr />
    <h2>Total</h2>
    <p>{total}</p>
    </div>
  );
}

export default App;
