import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');

  const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  
  const applyFilter=()=>{
    let productsCopy=products.slice();

    if(search && showSearch){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length>0){
      productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if(subCategory.length>0){
      productsCopy=productsCopy.filter(item=>subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }


  const sortProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high':
        fpCopy.sort((a,b)=>(a.price-b.price));
        break;
      case 'high-low':
        fpCopy.sort((a,b)=>(b.price-a.price));
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(fpCopy);


  }


  useEffect(()=>{
    console.log(subCategory);
  },[subCategory])

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,showSearch,search])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <Container fluid className="mt-4 border-top pt-3">
      {/* Wrapper for Sidebar + Button to Prevent Vertical Stacking */}
      <div className="d-flex align-items-center justify-content-between">
        {/* Toggle Button for Small Screens */}
        <button
          className="btn btn-secondary d-md-none"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content Area (Filters + Products) */}
      <div className="d-flex flex-column flex-md-row gap-3 gap-md-4">
        {/* Sidebar for Filters */}
        <div className={`min-vw-25 ${showFilter ? "d-block" : "d-none d-md-block"}`}>
          <h2 className="my-3 mb-2 fw-light">FILTERS</h2>

          {/* CATEGORIES Section */}
          <div className="my-3 border border-secondary p-3 w-100" style={{ minWidth: "15vw" }}>
            <p className="mb-2 fw-bold">CATEGORIES</p>

            <div className="d-flex flex-column gap-2 text-secondary">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Men'} onChange={toggleCategory} id="men1" />
                <label className="form-check-label" htmlFor="men1">Men</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Women'} onChange={toggleCategory} id="women1" />
                <label className="form-check-label" htmlFor="women1">Women</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Kids'} onChange={toggleCategory} id="kids1" />
                <label className="form-check-label" htmlFor="kids1">Kids</label>
              </div>
            </div>
          </div>

          {/* TYPE Section */}
          <div className="my-3 border border-secondary p-3 w-100" style={{ minWidth: "15vw" }}>
            <p className="mb-2 fw-bold">TYPE</p>

            <div className="d-flex flex-column gap-2 text-secondary">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Topwear'} onChange={toggleSubCategory} id="topwear" />
                <label className="form-check-label" htmlFor="topwear">Topwear</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} id="bottomwear" />
                <label className="form-check-label" htmlFor="bottomwear">Bottomwear</label>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} id="winterwear" />
                <label className="form-check-label" htmlFor="winterwear">Winterwear</label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Products Section */}
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* Title on Left */}
            <Title text1="ALL" text2="COLLECTIONS" />

            {/* Product Sort (Aligned to Right) */}
            <select onChange={(e)=>setSortType(e.target.value)} className="form-select w-auto">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Product Grid - Same as LatestCollection */}
          <Row className="gy-4 justify-content-center">
            {filterProducts && filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="col-xl-4-custom">
                  <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                </Col>
              ))
            ) : (
              <p className="text-center">No collections available</p>
            )}
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
