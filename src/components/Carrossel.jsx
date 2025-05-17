'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import ItemCarrossel from './ItemCarrossel'
import ExibeItem from './ExibeItem'

export default function Carrossel({ items }) {
  const [itemSelecionado, setItemSelecionado] = useState(null)

  const abrirModal = (item) => {
    setItemSelecionado(item)
  }

  const fecharModal = () => {
    setItemSelecionado(null)
  }

  return (
    <div className="carrossel_container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="swiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="swiper_slide">
            <ItemCarrossel item={item} onOpenModal={abrirModal} />
          </SwiperSlide>
        ))}
      </Swiper>

      {itemSelecionado && (
        <ExibeItem item={itemSelecionado} onClose={fecharModal} />
      )}
    </div>
  )
} 