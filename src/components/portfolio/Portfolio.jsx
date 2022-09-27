import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/images/stockmarket.jfif"
import IMG2 from "../../assets/images/SC2006.png"
import IMG3 from "../../assets/images/forkbomb.png"




const data= [
  {
    id: 1,
    image: IMG1,
    title: "Data Science Mini Project",
    github: "https://github.com/KohJiaWei/SC1015-1"
    
  },
  {
    id: 2,
    image: IMG2,
    title: "SC2006",
    github: "https://github.com/bertrainn/SC2006_Depressed-Mahjong-Tables"
    
  },
  {
    id: 1,
    image: IMG3,
    title: "Glitch Hosted Website",
    github: "https://pwa-finaljiawei.glitch.me/"
    
  }
]

const Portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>My recent works</h5>
      <h2>Portfolio</h2>
      

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src= {image} alt={title}/>
                </div>
                  <h3>{title}</h3>
                  <div className='portfolio_item-cta'>
                    <a href={github} className='btn' target="_blank">Github</a>
                    <a href='https://github.com/kohJiaWei' className='btn btn-primary' target="_blank">Main</a>
                </div>
              </article>
            )
          })
        }
        

      
{/*
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {IMG1} alt=""/>
          </div>
            <h3>My Portfolio</h3>
              <div className='portfolio_item-cta'>
              <a href='https://pwa-finaljiawei.glitch.me/' className='btn' target="_blank">Glitch Website</a>
            <a href='https://github.com/kohJiaWei' className='btn btn-primary' target="_blank">Github</a>
              </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {IMG1} alt=""/>
          </div>
            <h3>My Portfolio</h3>
              <div className='portfolio_item-cta'>
              <a href='https://pwa-finaljiawei.glitch.me/' className='btn' target="_blank">Glitch Website</a>
            <a href='https://github.com/kohJiaWei' className='btn btn-primary' target="_blank">Github</a>
              </div>
        </article>
      */}

      </div>
      </section>

   
    
  )
}

export default Portfolio