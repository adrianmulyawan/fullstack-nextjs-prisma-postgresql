import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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