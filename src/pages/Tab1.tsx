import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React from 'react';
import { FaRegBell,FaBaby } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { repeat } from 'ionicons/icons';
const Tab1: React.FC = () => {
      // State for Active index
      const [activeIndex, setActiveIndex] = React.useState(0);
  
      // State for Animation
      const [animating, setAnimating] = React.useState(false);
    
      // Sample items for Carousel
      const items = [
          {
              caption: 'Sample Caption One',
              src: '/imgcard.png' ,
              altText: 'Slide One'
          },
          {
              caption: 'Sample Caption Two',
              src:'/imgcard.png',
              altText: 'Slide Two'
          },
          {
            caption: 'Sample Caption One',
            src: '/imgcard.png' ,
            altText: 'Slide One'
        },
        {
          caption: 'Sample Caption One',
          src: '/imgcard.png' ,
          altText: 'Slide One'
      },
      {
        caption: 'Sample Caption One',
        src: '/imgcard.png' ,
        altText: 'Slide One'
      },
      ];
    
      // Items array length
      const itemLength = items.length - 1
    
      // Previous button for Carousel
      const previousButton = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ?
              itemLength : activeIndex - 1;
          setActiveIndex(nextIndex);
      }
    
      // Next button for Carousel
      const nextButton = () => {
          if (animating) return;
          const nextIndex = activeIndex === itemLength ?
              0 : activeIndex + 1;
          setActiveIndex(nextIndex);
      }
    
      // Carousel Item Data
      const carouselItemData = items.map((item) => {
          return (
              <CarouselItem
                  key={item.altText}
                  onExited={() => setAnimating(false)}
                  onExiting={() => setAnimating(true)}
              >
                  <img src={item.src} alt={item.altText} />
              </CarouselItem>
          );
      });
  return (
    <IonPage>
      <>
        <header className='header'>
        <div className='cover'></div>
          <nav className='nav'>
            <img src='/assets/icon/logo-famihood.png' />

            <div className='links'>
            <a href="#"><FaRegBell/></a>
            <a className='link-2' href="#"><MdFamilyRestroom/></a>
            </div>
          </nav>
          <div className='header-text'>
            <div className='recomendado'><span><AiFillStar/></span><p>Recomendato para tí</p></div>
            <div className='header-text_title'>
              <h2>¿Es necesario prepararse para</h2>
              <span>amamantar?</span>
            </div>
            <p>Embarazo - Alimentación - 12 min</p>
          </div>
        </header>
      </>
      <section style={{marginTop:'0px',}}>
        <p style={{marginLeft:'10px'}}>Descubre por etapas....</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <div className='div-avatar'><span className='span1'><FaBaby/></span><p>Embarazo</p></div>  
          <div className='div-avatar'><span className='span2'><FaBaby/></span><p>0-12 min</p></div>  
          <div className='div-avatar'><span className='span3'><FaBaby/></span><p>12-24 min</p></div>  
          <div className='div-avatar'><span className='span4'><FaBaby/></span><p>24-36 m</p></div>  
        </div>
      </section>
      <section style={{height:'200px',}}>
        <h2 className='title-carucel'><span><BsFillLightningFill/></span>Nuevos lanzamientos</h2>
      <div style={{
            display: 'block', width: 320, padding: 30,background: 'none',margin: 'auto'
        }}>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                {/* <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} 
                /> */}
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
      </section>
    
    </IonPage>
  );
};

export default Tab1;

