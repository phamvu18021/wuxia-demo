import React,{useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import product from '../assets/fake-data/product'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-products.css'
import ReactPaginate from 'react-paginate'
import '../styles/pagination.css'


const AllProducts = () => {
 
   const [searchTerm,setSearchTerm] =useState("");
   const [values,setValues] =useState("default")
   const [allproductselect,setALLproductselect] =useState(product);
   const[pageNumber,setPageNumber] = useState(0);

  useEffect(()=>{
    if(values === "default"){
      const fillallproductselect = product;
               setALLproductselect(fillallproductselect)
    }
    if(values === "ascending"){
      const fillallproductselect = product.sort((item1,item2) => item1.title.localeCompare(item2.title));
               setALLproductselect(fillallproductselect)
    }
    if(values === "descending"){
      const fillallproductselect = product.sort((item1,item2) => item2.title.localeCompare(item1.title));
               setALLproductselect(fillallproductselect)
    }
    if(values === "high-price"){
     const fillallproductselect = product.sort((item1,item2)=> item1.price -item2.price);
               setALLproductselect(fillallproductselect)
    }
    if(values === "low-price"){
       const fillallproductselect = product.sort((item1,item2)=> item1.price -item2.price);
               setALLproductselect(fillallproductselect)
    }
  },[values])
  const searchedProduct = allproductselect.filter((item)=>{
    if(searchTerm.value === '') return item;
    if(
      item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()))
    return item;
  }) 

   const productPerPage = 15
   const vistitedPage = pageNumber* productPerPage
   const displayPage = searchedProduct.slice(vistitedPage, vistitedPage +
    productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }


  return (
    <Helmet title='All Products'>
      <CommonSection title='All products '/>

      <section className='mt-5 mb-5'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className="search__widget d-flex align-item-center
              justify-content-between ">
                <input 
                type="text" 
                placeholder="I'm looking for..."
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
              <div className="sorting__widget text-end">
                <select className='w-50' value={values} onChange={(e) => setValues(e.target.value)}>
                  <option value="default" >default</option>
                  <option value="ascending">Alphabetically,A-Z</option>
                  <option value="descending">Alphabetically,Z-A</option>
                  <option value="high-price">high Price</option>
                  <option value="low-price">low Price</option>
                </select>               
              </div>
            </Col>

            {
              displayPage          
              .map((item) =>(
                <Col md='4' sm='6' className='colwidth gy-4 justify-content-center align-content-center'   key={item.id}
                >
                  {" "}
                <ProductCard item={item}  />
                </Col>
              ) )  }
          <div>
            <ReactPaginate 
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel='Prev'
            nextLabel='Next'
            containerClassName='paginationBttns'
            />
          </div>


          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllProducts