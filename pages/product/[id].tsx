import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
          setLoading(false)
        });
    } else {
      setProduct(null);
      setLoading(false)
    }
  }, [query.id])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
      {loading == false && product == null ? <div className="not-found">
        <h2>We do not have this avocado</h2>
        <Link href="/"><a>Return to the main page</a></Link>
        <style jsx>{`
          .not-found {
            text-align: center;
          }
        `}</style>
      </div> : null}
    </Layout>
  )
}

export default ProductPage
