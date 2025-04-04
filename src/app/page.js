
import CorporateAndBuilding from '@/components/CorporateAndBuilding'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ProductDeal from '@/components/ProductDeal'
import ProductFeature from '@/components/ProductFeature'
import Slider from '@/components/Slider'
import Tastimonial from '@/components/Tastimonial'
import WholeshellRetails from '@/components/wholeshellRetails'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'
 
 const page = () => {
   return (
     <div> 
      {/* <Header/> */}

      <Navbar/>
       <Slider/>
       <WholeshellRetails/>
       {/* <ProductFeature/> */}
       <CorporateAndBuilding/>
      
       <WhyChooseUs/>
       <ProductDeal/>
       {/* <Tastimonial/> */}
       <Footer/>
     </div>
   )
 }
 
 export default page