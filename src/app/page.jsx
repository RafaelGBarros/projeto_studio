'use client'
import Header from '@/components/Header'
import ConteudoPrincipal from '@/components/ConteudoPrincipal'
import Footer from '@/components/Footer'
import React from 'react'

export default function Home() {
  return (
    <section className="home">
      <Header />
      <ConteudoPrincipal />
      <Footer />
    </section>
  )
}