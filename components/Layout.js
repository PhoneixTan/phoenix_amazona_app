import React from 'react'
import Head from 'next/head'
import Link from "next/link"

export default function Layout({title,children}) {
  return (
    <>
    {/* react component is html element */}
    <Head>
        {/* 使用大括号检查标题，如果确实存在使用它，否则render(渲染)，加上-amazona来显示 */}
        <title>{title ? title + '- Amazona':'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='flex min-h-screen flex-col justify-between '>
        <header>
            <nav className='flex h-12 p-4 justify-between shadow-md items-center'>
                <Link href="/" className='text-lg font-bold '>
                    amazona
                </Link>
                <div>
                    <Link href="/cart" className='p-2'>购物车</Link>
                    <Link href="/login" className='p-2'>登录</Link>
                </div>
            </nav>
        </header>
        <main className='container m-auto mt-4 px-4'>
            {/* render 渲染页面组件 */}
            {children} 
        </main>
        <footer className='flex h-10 justify-center items-center shadow-inner'>
            footer
        </footer>
    </div>
    </> 
  )
}
