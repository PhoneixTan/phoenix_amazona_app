import Layout from '@/components/Layout'
import React from 'react'
import { useRouter } from 'next/router';

export default function ProductScreen() {
    const {query}=useRouter();
  return (
    <Layout title={product.name}></Layout>
  )
}
