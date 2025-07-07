import React from 'react'
import { getProducts } from '../../../lib/appwrite/index'
import { Button } from '../../../components/ui/button'
import Link from 'next/link'

interface ProductShowcaseProps {
  params: { id: string }
}

interface Product {
  $id: string
  name: string
  price: number
  tags?: string[]
  file: string
}


const ProductShowcase = async ({ params }: ProductShowcaseProps) => {
  const products = await getProducts()
  const product = products.find((p: any) => p.$id === params.id)

  if (!product) {
    return <div className="max-w-2xl mx-auto p-8">Product not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <img
        src={product.file || '/1.jpg'}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-xl border shadow-md"
      />
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="text-xl font-semibold text-blue-700">₹{product.price}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          {(product.tags || []).map((tag: string) => (
            <span
              key={tag}
              className="border border-blue-600 text-blue-700 px-2 py-1 rounded text-xs font-medium bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button className="w-fit bg-blue-600 text-white hover:bg-blue-700">
          <Link href="https://creations.mtdv.me/complete-transaction">
            Buy Now
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default ProductShowcase
