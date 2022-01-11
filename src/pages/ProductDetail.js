import { useState,useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './ProductDetail.css'



export function ProductDetail() {
    const navigate = useNavigate ();
    const {productId} = useParams();
    const [imagesdetail,setImagesdetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(navigate)

    useEffect(() =>{
      axios({
        method:'GET',
        baseURL: 'https://fakestoreapi.com',
        url:`/products/${productId}`
      })
        .then(({data}) => setImagesdetail(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))


    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>
    },[]);
    return (
      <div className="ProductDetail">
              <div>
                <button type="button" onClick={() => navigate(-1)}>Go Back</button>
              </div>
              <div>
                <p>{imagesdetail.title}</p>
              </div>
              <div className="ProductDetail__image">
                <img
                  key={imagesdetail.id} 
                  src={imagesdetail.image}
                  alt={imagesdetail.title}
                  width="400 px"
                  height="400 px"
                  title={imagesdetail.title}
                />
              </div>
              <div>
                <p>{imagesdetail.description}</p>
              </div>
              
              <p>{imagesdetail.price}</p>
              
              
      </div>
    );
  }
  