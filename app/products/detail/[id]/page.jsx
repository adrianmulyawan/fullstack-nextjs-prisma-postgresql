"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useSWR from 'swr';
import Link from "next/link";

// > setup swr
const fetcher = (...args) => fetch(...args).then(res => res.json())

const DetailProduct = ({ params }) => {
  // > tangkap id dari paramter
  const { id } = params;

  // > state 
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brandName, setBrandName] = useState('');

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  useEffect(() => {
    if (data && !error) {
      setTitle(data.title);
      setPrice(data.price);
      setCategory(data.category);
      setBrandName(data.Brand.name);
    }
  }, [data, error])

  return (
    <>
      {
        error && (
          <h1>Failed to load product details</h1>
        )
      }
      {
        !data && (
          <h1>Data Not Found</h1>
        )
      }
      <div className="container mt-3">
        <h2>Detail Product: { title }</h2>
        <hr />
        <div className="card p-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Product Name</label>
            <input type="email" className="form-control" id="title" value={ title } disabled />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Product Price</label>
            <input type="email" className="form-control" id="price" value={ price } disabled />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Product Category</label>
            <input type="email" className="form-control" id="category" value={ category } disabled />
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">Brand</label>
            <input type="email" className="form-control" id="brand" value={ brandName } disabled />
          </div>
          <Link href={ "/products" } className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
