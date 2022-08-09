import React , {useEffect, useState} from 'react';
import axios from 'axios';
import {Image, ImageWrapper, Overlay, OverlaySpan, PortfolioItem, PortfolioList, PortfolioSection, PortfolioTitle, Span } from './style.js';

const Portfolio = () => {

    const [images , setImages] = useState([])
    useEffect (() => {
        axios.get('js/data.json').then( res => { setImages(res.data.portfolio)})
    }, [])

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt="" />
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
      <PortfolioSection>
          <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
          <PortfolioList>
              <PortfolioItem active>All</PortfolioItem>
              <PortfolioItem>HTML</PortfolioItem>
              <PortfolioItem>Photoshop</PortfolioItem>
              <PortfolioItem>Wordpress</PortfolioItem>
              <PortfolioItem>Mobile</PortfolioItem>
          </PortfolioList>
          
          <div className='box'>
             {PortfolioImages}
          </div>
      </PortfolioSection>
      )
}

export default Portfolio;