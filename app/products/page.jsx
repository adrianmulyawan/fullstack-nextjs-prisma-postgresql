import { PrismaClient } from "@prisma/client";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import Link from "next/link";

// > metadata
export const metadata = {
  title: 'Products'
};

// > instance prisma
const prisma = new PrismaClient();

// > method get all data products from db 
const getAllProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      category: true,
      brandId: true,
      Brand: true
    }
  });
  return res;
};

// > method get all data brand from db
const getBrands = async () => {
  const res = await prisma.brand.findMany();
  return res;
};

const ProductPage = async () => {
  // > inisialisasi data
  const products = await getAllProducts();
  const brands = await getBrands();

  return (
    <>
      <div className="container mt-3">
        <h1>Products Page</h1>
        <hr />

        {/* Button Section */}
        <div className="table-products my-2">
          {/* Button Add Products */}
          <AddProduct brands={ brands } />

          {/* List of Products */}
          <div className="card p-2">
            <h3 className="my-3 text-center">
              List of Products
            </h3>
            <table className="table table-bordered table-responsive table-striped">
              <thead>
                <tr>
                  <th scope="col" className="text-center">No</th>
                  <th scope="col" className="text-center">Brand</th>
                  <th scope="col" className="text-center">Product Name</th>
                  <th scope="col" className="text-center">Price</th>
                  <th scope="col" className="text-center">Category</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.length < 1 ? (
                    <tr>
                      <td colSpan={ 6 } className="text-center">
                        Data Products is Empty!
                      </td>
                    </tr>
                  ) : (
                    products.map((product, index) => (
                      <tr key={ product.id }>
                        <th scope="row" className="text-center">
                          { index += 1 }
                        </th>
                        <td className="text-center">
                          { product.Brand.name }
                        </td>
                        <td className="text-center">
                          { product.title }
                        </td>
                        <td className="text-center">
                          { product.price }
                        </td>
                        <td className="text-center">
                          { product.category }
                        </td>
                        <td className="text-center">
                          <span className="badge bg-primary">Detail</span>
                          <div className="mx-2">
                            <Link href={`/products/update/${product.id}`} className="badge bg-secondary text-decoration-none">
                              Update
                            </Link>
                          </div>
                          <DeleteProduct { ...product } />
                        </td>
                      </tr>
                    ))
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
