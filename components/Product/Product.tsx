import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface Props {
  id: string,
  image?: string,
  name: string,
  price: number,
  sku: string,
  attributes?: Attributes,
}

interface Attributes {
  description: string,
  hardiness?: string,
  shape: string,
  taste: string,
}

export const Product: FunctionComponent<Props> = (product: Props) => {
  return (
    <Link href={`/product/${product?.id}`}>
      <a>
        <div className="container">
          <img src={product?.image} alt={product?.name} />
          <p>Name: {product?.name}</p>
          <p>Price: {product?.price}</p>
          <p>Sku: {product?.sku}</p>
          <style jsx>{`
                .container {
                margin: 30px 0;
                border: 1px solid lightgray;
                border-radius: 1rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                text-align: center;
                }
            `}</style>
        </div>
      </a>
    </Link>
  )
}

export default Product
