import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row" >
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Active Doctors List</h1>
          <p className="text-center">
            Number of Doctors Available Today : {products.length}
          </p>
           <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div
                  className="card m-2"
                  style={{ width: "220px", height: "320px" }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    style={{ objectFit: "cover", width: "100%", height: "50%" }}
                  />
                  <div className="card-body" style={{ height: "50%" }}>
                    <h5 className="card-title">{p.name}</h5>
                    <p
                      className="card-text"
                      style={{ maxHeight: "100px", overflow: "hidden" }}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div> 


        </div>
      </div>
    </Layout>
  );
};

export default Products;
