import React from 'react'
import './Main.css'
import Benner from "../banner/Banner"
import Shop1 from '../../assents/images/shop-1-removebg-preview.png'
import Shop2 from '../../assents/images/shop-2-removebg-preview.png'
import Shop3 from '../../assents/images/shop-3-removebg-preview.png'
import Shop4 from '../../assents/images/shop-4-removebg-preview.png'
import Shop5 from '../../assents/images/shop-5-removebg-preview.png'
import Shop6 from '../../assents/images/shop-6-removebg-preview.png'
import S24 from "../../assents/images/S24.avif"
import Home from "../../assents/images/Home.avif"
import Banner from '../banner/Banner'

const data = [
    {   
        new: true,
        id: 1,
        img: Shop1,
        title: "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera Illuminated Precision Knobs",
        price: ["Save $1600", "From $1499"],
        btn: "Pre-order now"
    },
    {
        new: false,   
        id: 2,
        img: Shop2,
        title: "Galaxy S24 Ultra, 256GB (Unlocked)",
        price: ["Save up to $750", "From $1299.99 before eligible trande-in"],
        btn: "By now"
    },
    {
        new: false,  
        id: 3,
        img: Shop3,
        title: "83 Class OLEd S90C",
        price: ["Save $1400", "From $3999.99"],
        btn: "By now"
    },
    {
        new: true,  
        id: 4,
        img: Shop4,
        title: "Q-series 9.1.2 ch. Wireless Dolby ATMOS Soundbar",
        price: ["Save $300", "From $1099.99"],
        btn: "Pre-order now"
    },
    {
        new: false,  
        id: 5,
        img: Shop5,
        title: "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
        price: ["Save $1200", "From $3899"],
        btn: "By now"
    },
    {
        new: false,  
        id: 6,
        img: Shop6,
        title: "Galaxy S24 Ultra, 1TB (Unlocked)",
        price: ["Save up to $150", "From $1509.99 before eliginle trade-in"],
        btn: "By now"
    }
]

const wrapper = [
    {
        phone: "Galaxy S24 Ultra"
    },
    {
        phone: "Galaxy S24+"
    },
    {
        phone: "Galaxy Book4 Ultra"
    },
    {
        phone: "Galaxy Tab S9 Series"
    },
    {
        phone: "Galaxy Watch6 Series"
    }
  
]

const Main = () => {

    let product = data?.map((e) => (
     
            <div className="shop_box_card" key={e.id}>
                {/* <button className='shop_btn_1'>New</button> */}
                <button className={`shop_btn_1 ${e.new ? "" : "hiddin"}`}>New</button>
                <div className="shop_box_card_img">
                    <img  key={e.img}  src={e.img}  alt="" />
                </div>
                <h3>{e.title}</h3>
                <span> {
                    e?.price?.map((el, inx) => 
                    <p  className='shop_par' key={inx}>
                        <p>{el}</p>
                    </p>
                    )
                    
                    }
                </span>

                <button className='shop_btn_2'>{e.btn}</button>
            </div>
      
    )
    )

    let text = "Mobile & Computing"
    let link = wrapper?.map((e, w) => (
        <div key={w}> 
            <h3>{e.phone}</h3>
        </div>
    ))

  return (
    <main>
      <section className="shop">
        <div className="container">
            <div className="shop_box box_cards ">  

                {/* <div className="shop_box_card">
                    <button className='shop_btn_1'>New</button>
                    <div className="shop_box_card_img">
                    <img src={Shop1} alt="" />
                    </div>
                    <h3>Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera Illuminated Precision Knobs</h3>
                    <span>
                    <p className='shop_par'>Save $1600</p>
                    <p>From $1499</p>
                    </span>
                    <button className='shop_btn_2'>Pre-order now</button>
                </div> */}
              
                 {product}
            </div>

        </div>
      </section>


                <Benner title = {text}
                    links = {link}
                    url = {S24}

                />
                <Banner
                   url = {Home}
                />
    </main>
  )
}

export default Main
