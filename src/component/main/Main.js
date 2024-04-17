import React from 'react'
import './Main.css'
import Shop1 from '../../assents/images/shop-1-removebg-preview.png'

const Main = () => {
  return (
    <main>
      <section className="shop">
        <div className="container">
            <div className="shop_box">
                <div className="shop_box_card">
                    <button className='shop_btn_1'>New</button>
                    <div className="shop_box_card_img">
                     <img src={Shop1} alt="" />
                    </div>
                    <h3>Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera Illuminated Precision Knobs</h3>
                    <span>
                        <p>Save $1600</p>
                        <p>From $1499</p>
                    </span>
                    <button>Pre-order now</button>
                </div>
            </div>
        </div>
      </section>

    </main>
  )
}

export default Main
