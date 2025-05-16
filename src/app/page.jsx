'use client'
import Header from '@/components/Header'
import GreenStrip from '@/components/GreenStrip'
import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <section className="home">
      <Header />
      <GreenStrip />
      <Footer />
    </section>
  )
}