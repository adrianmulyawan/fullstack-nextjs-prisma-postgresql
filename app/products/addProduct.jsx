"use client";

import { useState } from "react";

const AddProduct = () => {
  // > state 
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // > Method handle submit form
  const handleAddProduct = (event) => {
    event.preventDefault();

  }

  // > Method handle modal
  const handleModal = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" onClick={ handleModal } className="btn btn-md btn-outline-primary my-3" data-bs-toggle="modal" data-bs-target="#addProductModal">
        Add New Product
      </button>

      {/* <!-- Modal --> */}
      <div className={ isOpen ? "modal fade" : "modal fade" } id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
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
                  <input type="text" className="form-control" id="title" value="title" placeholder="Product Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="price" value="price" placeholder="Product Price" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Product Category
                  </label>
                  <input type="text" className="form-control" id="category" value="category" placeholder="Product Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="brand" className="form-label">
                    Select Brand
                  </label>
                  <select className="form-select">
                    <option selected disabled>
                      Selecet Brand
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>

              {/* Submit Form */}
              <div className="modal-footer">
                <button type="button" onClick={ handleModal } className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">
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
