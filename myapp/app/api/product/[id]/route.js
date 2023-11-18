import { NextResponse } from "next/server";

import prisma from "../../../../lib/prismadb"

export const GET = async (request, { params }) => {
    try {
      const { id } = params;
  
      const product = await prisma.product.findUnique({
          where: {
              id
          }
      });
  
      if(!product) {
          return NextResponse.json(
              {message: "Post not found", err},
              {status: 404}
          )
      }
  
      return NextResponse.json(product);
    } catch (err) {
      return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
  };