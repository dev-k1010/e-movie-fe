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
         <TrailerProvider>
            <Header />

            <Outlet />

            <TrailerPreview />

            <Footer />
         </TrailerProvider>

      </HeightProvider>
   )
}
