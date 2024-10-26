import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
import { HeightProvider } from '../../../context/HeightHeaderContext'
import TrailerPreview from '../../strailerPreview/StrailerPreview'
import { TrailerProvider } from '../../../context/TrailerContext'

export default function MainLayout() {

   return (
      <HeightProvider>
         <Header />
         <TrailerProvider>
            <Outlet /> {/* Các component con sẽ sử dụng context từ đây */}
            <TrailerPreview /> {/* Đặt TrailerPreview bên ngoài Outlet để nó có thể truy cập vào context */}
         </TrailerProvider>
         <Footer />

      </HeightProvider>
   )
}
