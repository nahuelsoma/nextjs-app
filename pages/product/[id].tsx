import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <section>
      <div className="container">
        <img src={product?.image} alt={product?.name} />
        <p>Name: {product?.name}</p>
        <p>Price: {product?.price}</p>
        <p>Sku: {product?.sku}</p>
        <p>Description: {product?.attributes.description}</p>
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
                img {
                  height: 250px;
                  width: 250px;
                  margin: 0 auto;
                }
            `}</style>
      </div>
    </section>
  )
}

export default ProductPage
