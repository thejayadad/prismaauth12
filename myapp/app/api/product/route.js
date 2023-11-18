import { NextResponse } from "next/server"
import prisma from "../../../lib/prismadb"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {name, img, desc, price} = body;

        const newProduct = await prisma.product.create({
            data: {
                name,
                desc,
                img,
                price
            }
        })

        return NextResponse.json(newProduct);

    } catch(err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try {

        const products = await prisma.product.findMany()

        return NextResponse.json(products);

    } catch(err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}