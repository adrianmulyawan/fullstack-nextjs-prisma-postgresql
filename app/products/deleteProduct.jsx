"use client";

import { useRouter } from "next/navigation";
import axios from "axios";

const DeleteProduct = (product) => {
  // > console
  // console.info(product, 'product boss');

  // > Instansiasi module useRouter
  // => dan simpan kedalam variable router
  const router = useRouter();

  // > Method handle submit form
  const handleDeleteProduct = async (id) => {
    const confirmation = window.confirm(`Are your sure delete ${product.title}? Product is permanently delete`);

    if (confirmation) {
      await axios.delete(`/api/products/${id}`);
       // > refresh page
      router.refresh();
    }
  }

  return (
    <>
      {/* <!-- Button trigger delete --> */}
      <span className="badge bg-danger" onClick={ () => handleDeleteProduct(product.id) }>
        Delete
      </span>
    </>
  );
}

export default DeleteProduct;
