import React from "react";
import "./Home.css"; // Import custom styles

export default function Home(props) {
  console.log(props);
  const product_photos = [
    "https://m.media-amazon.com/images/I/514k7uOBMwL._AC_SL1000_.jpg",
    "https://m.media-amazon.com/images/I/61PdhJpC4NL._AC_SL1500_.jpg",
    "https://m.media-amazon.com/images/I/61Ed2L5egWL._AC_SL1500_.jpg",
  ];

  const products = [
    { id: 1, name: "I Phone", price: 100000, image: product_photos[0] },
    { id: 2, name: "Samsung Galaxy", price: 85000, image: product_photos[1] },
    { id: 3, name: "OnePlus 11", price: 70000, image: product_photos[2] },
  ];

  return (
    
    <div className="home-container">
      <h1 className="home-title">Your Cart</h1>
      <div className="cart-wrapper">
        {products.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">Price: ₹ {product.price.toLocaleString()}</p>
              <div className="quantity-wrapper">
                <button className="quantity-btn">-</button>
                <span className="quantity">1</span>
                <button className="quantity-btn">+</button>
              </div>
            </div>
            <div className="actions">
              <button className="delete-btn">Delete</button>
              <button className="wishlist-btn">Save for Later</button>
              <button className="btn btn-primary" onClick={()=>props.addToCartHandler({price:1000,name:"i phone"})}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
