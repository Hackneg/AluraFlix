import React from 'react'

function Banner() {
  return (
    <section className='banner-section'>
        <div className='banner-inf'>
          <div className='banner-title'>
            <h1>Front End</h1>
          </div>
          <div className='banner-subtitle'>
            <h2>Challenge React</h2>
          </div>
          <div className='banner-description'>
            <p>Aplicar os conhecimentos adquiridos no treinamento React.</p>
          </div>
        </div>
        <div className='banner-img'>
          <div className='img-inset-shadow'>
            <img src='../img/banner-video.jpg' alt='Pense como um programador' />
            <div className='banner-img-shadow'></div>
          </div>
        </div>      
    </section>
  )
}

export default Banner