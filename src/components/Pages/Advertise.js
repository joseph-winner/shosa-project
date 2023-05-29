import React from 'react'
import item1 from "../Images/clothingsshosa.webp"
import item2 from "../Images/shoesshosa.jpeg"
import item3 from "../Images/shosaplots.jpeg"
import item4 from "../Images/shosaphones.jpeg"
import item5 from "../Images/shosacars.jpeg"
import item6 from "../Images/shosabikes.jpeg"

function Advertise() {
  return (
    <div className='ad'>
        <h2>Biggest market to buy and sell</h2>
        <div className='advert-sect'>
            <div className='ad-items'>
                <img src={item1} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>

            <div className='ad-items'>
                <img src={item2} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>

            <div className='ad-items'>
                <img src={item3} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>

            <div className='ad-items'>
                <img src={item4} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>

            <div className='ad-items'>
                <img src={item5} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>

            <div className='ad-items'>
                <img src={item6} alt='clothes' />
                <div className='ad-cover'></div>
                <div className='ad-desc'>
                    <p className='ad-off'>SAVE 40%</p>
                    <h3>Special Offer</h3>
                    <p className='ad-button'>Buy Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advertise