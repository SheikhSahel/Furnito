import ProductCard from '@/components/ProductCard'
import HeadingPeraTxt from '@/utils/HeadingPeraTxt'
import React from 'react'
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import product5 from "@/assets/product5.jpg";
import product6 from "@/assets/product6.jpg";
import product7 from "@/assets/product7.jpg";
import product8 from "@/assets/product8.jpg";
import Button from '@/utils/Button';

const products = [
  {
    id: 0,
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    isNew: false,
    price: 2500000,
    oldPrice: 3500000,
    discount: 30,
    image: product1,
  },
  {
    id: 1,
    title: "Leviosa",
    subtitle: "Elegant desk chair",
    isNew: true,
    price: 3000000,
    oldPrice: null,
    discount: null,
    image: product2,
  },
  {
    id: 2,
    title: "Lolito",
    subtitle: "Luxury big sofa",
    isNew: false,
    price: 7000000,
    oldPrice: 14000000,
    discount: 50,
    image: product3,
  },
  {
    id: 3,
    title: "Respira",
    subtitle: "Outdoor bar table and stool",
    isNew: true,
    price: 5000000,
    oldPrice: null,
    discount: null,
    image: product4,
  },
  {
    id: 4,
    title: "Grifo",
    subtitle: "Night lamp",
    isNew: false,
    price: 1500000,
    oldPrice: null,
    discount: null,
    image: product5,
  },
  {
    id: 5,
    title: "Muggo",
    subtitle: "Small mug",
    isNew: true,
    price: 150000,
    oldPrice: null,
    discount: null,
    image: product6,
  },
  {
    id: 6,
    title: "Pingky",
    subtitle: "Cute bed set",
    isNew: false,
    price: 7000000,
    oldPrice: 14000000,
    discount: 50,
    image: product7,
  },
  {
    id: 7,
    title: "Potty",
    subtitle: "Minimalist flower pot",
    isNew: true,
    price: 5000000,
    oldPrice: null,
    discount: null,
    image: product8,
  },
];

const Products = () => {
  return (
    <section className='pt-14'>
       <div className='max-w-container mx-auto'>
         <div>
         <HeadingPeraTxt level="h3" className="text-40 font-bold text-center text-secHeding leading-[120%] capitalize" text="Our Products"/>
         <div className='pt-8 grid grid-cols-4 justify-between gap-8 '>
         {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              discount={product.discount}
              isNew={product.isNew}
              price={product.price}
              oldPrice={product.oldPrice}
            />
          ))}
         </div>
         <div className='pt-8 flex justify-center items-center'>
          <Button className="py-3 px-[80px] border border-boxH text-boxH text-base font-semibold" btntxt="Show More"/>
         </div>
         </div>
       </div>
    </section>
  )
}

export default Products