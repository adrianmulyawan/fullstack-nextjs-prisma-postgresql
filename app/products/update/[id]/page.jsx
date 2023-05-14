"use client";

import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// > config swr
const fetcher = (...args) => fetch(...args).then(res => res.json())

const UpdateProduct = ({ params }) => {
  // > test console
  // console.info(params, '=> params');

   // > state 
   const [title, setTitle] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');
   const [chooseBrand, setChooseBrand] = useState('');

  // > ambil id dari params
  const { id } = params;
  // console.info(id, '=> ini id dari params');

  // > inisialisasi package useRoute
  const router = useRouter();

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  // > useEffect untuk update state
  useEffect(() => {
    if (data && !error) {
      setTitle(data.title);
      setPrice(data.price);
      setCategory(data.category);
      setChooseBrand(data.Brand);
    }
  }, [data, error]);

  // > method untuk handle update product
  const handleUpdateProduct = async (event) => {
    event.preventDefault();

    // > parse to int
    const parsePrice = parseInt(price);
    const parseBrandId = parseInt(chooseBrand);

    // > Tampung data
    const updateData = {
      title: title, 
      price: parsePrice, 
      category: category, 
      brandId: parseBrandId
    };

    // > Test console
    // console.info(updateData, '=> data yang akan dikirim');

    // > Update Data Product
    

    router.push('/products');
  };

  return (
    <>
      <div className="container mt-3">
        {/* {
          error && (
            <h1>Failed to load product details</h1>
          )
        } */}
        {/* {
          !data && (
            <h1>Data Not Found</h1>
          )
        } */}

        <h3>Update Product: {  }</h3>
        <hr />
        <div className="card p-3">
        <form onSubmit={ handleUpdateProduct }>
        <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" id="title" value={ title } onChange={ (e) => setTitle(e.target.value) } placeholder="Product Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="price" value={ price } onChange={ (e) => setPrice(e.target.value) } placeholder="Product Price" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Product Category
                  </label>
                  <input type="text" className="form-control" id="category" value={ category } onChange={ (e) => setCategory(e.target.value) } placeholder="Product Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">
                    Select Brand
                  </label>
                  <select className="form-select" value={ chooseBrand } onChange={ (e) => setChooseBrand(e.target.value) }>
                    <option value="1">
                      Apple
                    </option>
                    <option value="2">
                      Samsung
                    </option>
                    <option value="3">
                      Xiaomi
                    </option>
                    <option value="4">
                      Google Pixel
                    </option>
                  </select>
                </div>
          <Link href={'/products'} className="btn btn-secondary">
            Back to Product
          </Link>
          <button type="submit" className="btn btn-primary mx-2">
            Update Product
          </button>
        </form>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
