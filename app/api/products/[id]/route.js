import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// > Method untuk get detail data
export const GET = async (request, {params}) => {
  // > parse id from string -> int
  const parseIdToInt = parseInt(params.id);
  console.info(parseIdToInt, '=> id yang masuk');

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