import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { useSelector ,useDispatch} from 'react-redux'
import { Container,Row,Col } from 'reactstrap'
import '../styles/cart-page.css'
import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'



const Cart = () => {
  
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state =>state.cart.totalAmount)


  return (
    <Helmet title="Cart">
     <CommonSection  title="Your cart"/>
     <section className='mt-5 mb-5 pb-5 section_cart' >
      <Container>
        <Row>
          <Col lg='12'>
            {
              cartItems.length === 0 ? <h5 className='text-center'>
                Your cart is empty 
              </h5> : 
              <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((item) =>(
                     <Tr item={item} key={item.id} />
                  )                  
                  )
                }                
              </tbody>
            </table>
            }
            <div className='mt-4'>
              <h6>Subtotal: $<span className='cart_subtotal'>{totalAmount}</span></h6>
              <p>Taxes and shing will caculate at check out</p>
              <div className='cart__page-btn'>
                <button className="addTOCart__btn me-4">
                  <Link to='/foods' >Continue Shopping </Link>
                </button>
                <button className="addTOCart__btn">
                  <Link to='/checkout'>Proceed to check out</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
     </section>
    </Helmet>
  );
};


const Tr = (props)=>{

  const {id,image01,title,price,quantity} =props.item;
  const dispatch = useDispatch()

  const deleteItem = ()=>{
    dispatch(cartActions.deleteItem(id))
  }

  return (
  <tr>
    <td className='text-center cart__img-box'><img src={image01} alt="" /> </td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>${price}</td>
    <td className='text-center'>{quantity}x</td>
    <td className='text-center cart__item-del'>
    <i class="ri-delete-bin-5-line" onClick={deleteItem}></i></td>
  </tr>
  );
}
export default Cart;