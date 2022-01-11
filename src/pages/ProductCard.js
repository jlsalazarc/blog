import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ProductCard.css';

export function ProductCard () {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] =useState(false);
  
    useEffect(() => {
      setLoading(true)
      axios({
        method: 'GET',
        baseURL: 'https://fakestoreapi.com',
        url:'/products',
      })
        .then(({data}) => /* console.log(data) */setImages(data))
        .catch(() => setError(true))
        .finally(() => setLoading(false))
  
    }, []);
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>error</p>
    return (
      <div className="ProductCard">
        {images.map(({id, image, title}) => {
          return (
            <div className="ProductCard__images">
              <img className="ProductCard__images__centered"
                key={id} 
                src={image}
                alt={title}
                width="150 px"
                height="150 px"
                title={title}
              />
              <p className="ProductCard__images__text">{title}</p>
              <p>
                <Link className="Gotodetail" to={`/products/${id}`}>Go to Detail</Link>
              </p>
            </div>
          )
        })}
      </div>
    );
  }
  