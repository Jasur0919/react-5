import React, {memo} from 'react'
import './Banner.css'

const Banner = ({title, url, links}) => {
    // console.log();
  return (
    <>
        <div  style={{height: 780, background: `url(${url}) no-repeat center/cover`
    }}>
            <h1 style={{fontSize:45}} >{title}</h1>
            <p className='par' style={{display: 'flex', alignItems:'center',justifyContent: 'center', gap: 50, marginTop:25}}>{links}</p>

        </div>

        <div style={{height:780, background: `url(${url}) no-repeat center/cover`}}>

        </div>
    </>
  )
}

export default memo(Banner)
