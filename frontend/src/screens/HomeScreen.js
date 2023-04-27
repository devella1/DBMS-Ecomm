import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../components/Product";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "../index.css";
//import advertisementCard
import AdvertisementCard from "../components/AdvertisementCard";


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Vella Plaza</title>
      </Helmet>
      
      
      <div className="content">
        <div className="text-content">
            <h1>BEST SELLING TODAY</h1>
            <br/>
            <p>
                Convallis interdum purus adipiscing dis parturient
                posuere ac a quam a eleifend montes parturient posuere
                curae tempor  interdum purus adipiscing dis parturient
                posuere ac a quam a ele nvallis interdum purus adipiscing dis parturient
                posuere ac a quam a eleifend montes parturient posuere
                
            </p>
            <div className="ctas">
                <div className="banner-cta">Read More</div>
                <div className="banner-cta v2">Shop Now</div>
            </div>
        </div>
        {/* <img className="banner-img" src={BannerImg} /> */}
      <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/regionalbooks/4/f/o/archer-s-voice-original-imagn2f3ah2y8bfn.jpeg?q=70" alt="banner" className="banner-img" />
      </div>
      <br/>
      <br/>
      <h2 style={{'color':''}}>Fashionista Spot</h2>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
            <br/>
            <h2>Advertisement</h2>
      <div class="advert">
        <AdvertisementCard></AdvertisementCard>
      </div>
    </div>
  );
}
export default HomeScreen;
