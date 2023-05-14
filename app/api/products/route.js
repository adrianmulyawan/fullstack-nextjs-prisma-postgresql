// > import NextResponse dan Prisma Client
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// > instansiasi prisma client
// => Simpan kedalam variable prisma
const prisma = new PrismaClient();

// > API Untuk Store Data Product (Inser New Product)
export const POST = async (request) => {
  // > tangkap data yang dikirimkan 
  const body = await request.json();
  
  // > add product
  const product = await prisma.product.create({
    data: {
      title: body.title,
      price: body.price,
      category: body.category,
      brandId: body.brandId
    }
  });

  return NextResponse.json(product, {status: 201});
}