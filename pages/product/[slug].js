import Layout from '@/components/Layout'
import React, { useContext } from 'react'
import data from '../../utils/data'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '@/utils/Store';

export default function ProductScreen() {
  const {state,dispatch}=useContext(Store)
    //使用路由勾子
    const router=useRouter();
    const {query}=useRouter(); 
    const {slug}=query; //使用构造 分配保存代码对其进行格式化
    const product = data.products.find( (x) =>x.slug ===slug);
    if(!product){
      return <div>商品没找到</div>
    }
    const addToCartHandler=()=>{
      const existItem=state.cart.cartItems.find((x)=>x.slug === product.slug)
      const quantity = existItem ? existItem.quantity +1 :1;

      if(product.countInStock < quantity){
        alert('对不起，商品没有库存了')
        return
      }
      dispatch({type:'CART_ADD_ITEM',payload:{...product,quantity}});
      //router.push 将新地址作为一个参数
      router.push('/cart')
    }

  return (
    <Layout title={product.name}>
      <div className='py-2'>
        <Link href="/">back</Link>
      </div>
      <div className='grid md:grid-cols-4 md:gap-3'> 
        <div className='md:col-span-2'>
          <Image 
          src={product.image} //路径
          alt={product.name} //文字
          width={640}
          height={640}
          layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className='text-lg'>{product.name}</h1>
            </li>
            <li>类别：{product.category}</li>
            <li>品牌：{product.brand}</li>
            <li>{product.rating} of {product.numReviews} reviews</li>
            <li>描述：{product.description}</li>
          </ul>
        </div>
        <div className='card p-5 h-36'>
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In stock" :"Unavailable"}</div>
          </div>
          <button className='primary-button w-full' onClick={addToCartHandler}>加入购物车</button>
        </div>
      </div>
    </Layout>
  )
}
  