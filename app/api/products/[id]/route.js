import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// > Method untuk get detail data
export const GET = async (request, {params}) => {
  // > parse id from string -> int
  const parseIdToInt = parseInt(params.id);
  // console.info(parseIdToInt, '=> id yang masuk');

  const product = await prisma.product.findFirst({
    where: {
      id: parseIdToInt
    },
    include: {
      Brand: true
    }
  });

  return NextResponse.json(product, {status: 200});
};

// > Method untuk update data product
export const PATCH = async (request, {params}) => {
  // > ambil body data yang dikirimkan
  const body = await request.json();

  // > parse id from string -> int
  const parseIdToInt = parseInt(params.id);
  // console.info(parseIdToInt, '=> id yang masuk');

  const product = await prisma.product.update({
    where: {
      id: parseIdToInt
    },
    data: {
      title: body.title,
      price: body.price,
      category: body.category,
      brandId: body.brandId
    }
  });

  // console.info(parseIdToInt, '=> id bro');
  // console.info(product, '=> data bro');

  return NextResponse.json(product, {status: 200})
};

// > Method untuk delete product
export const DELETE = async (request, {params}) => {
  // > parse id from string -> int
  const parseIdToInt = parseInt(params.id);
  // console.info(parseIdToInt, '=> id yang masuk');

  // > delete product
  const product = await prisma.product.delete({
    where: {
      id: parseIdToInt
    }
  });

  return NextResponse.json(product, {status: 200})
};