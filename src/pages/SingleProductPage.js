import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context";

const SingleProductPage = () => {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            return <h1>Loading...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`}
                      alt="single product"
                      className="img fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model: {title}</h5>
                    <h5
                      className="mb-4"
                      style={{ "text-transform": "capitalize" }}
                    >
                      company: {company}
                    </h5>
                    <h5
                      className="text-main mb-4"
                      style={{ "text-transform": "capitalize" }}
                    >
                      price: {price}€
                    </h5>
                    <p
                      className="text-title mt-3"
                      style={{ "text-transform": "capitalize" }}
                    >
                      Some info about product
                    </p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem", "font-size": "1rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem", "text-decoration": "none" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
};

export default SingleProductPage;
