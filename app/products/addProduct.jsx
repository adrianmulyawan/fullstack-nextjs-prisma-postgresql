"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProduct = ({ brands }) => {
  // > console brands
  // console.info(brands, 'brands boss');

  // > Instansiasi module useRouter
  // => dan simpan kedalam variable router
  const router = useRouter();

  // > state 
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [chooseBrand, setChooseBrand] = useState('');

  // > Method handle submit form
  const handleAddProduct = async (event) => {
    event.preventDefault();

    // > parse price and brandId to int
    const parsePriceInt = parseInt(price);
    const parseBrandIdInt = parseInt(chooseBrand);

    const data = {
      title: title, 
      price: parsePriceInt, 
      category: category, 
      brandId: parseBrandIdInt
    };

    // > Simpan data ke dalam DB dengan Axios
    // > api/products didapat dari ./app/products/route.js
    await axios.post('/api/products', data);

    // > set state title, price, category, brandId
    setTitle("");
    setPrice("");
    setCategory("");
    setChooseBrand("");

    // > refresh page
    router.refresh();
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-md btn-outline-primary my-3" data-bs-toggle="modal" data-bs-target="#addProductModal">
        Add New Product
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProductModalLabel">
                Add New Product
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            {/* Form */}
            <form onSubmit={ handleAddProduct }>
              {/* Input Form */}
              <div className="modal-body">
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
                    <option value="" disabled>
                      Selecet Brand
                    </option>
                    {
                      brands.map((brand) => (
                        <option value={ brand.id } key={ brand.id }>
                          { brand.name }
                        </option>
                      ))
                    }
                  </select>
                </div>
              </div>

              {/* Submit Form */}
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                  Add New Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
