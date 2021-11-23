import React from "react";
import Projects from "./Projects";
// carousel
/* import Carousel from 'styled-components-carousel'; */
import Slider from 'react-styled-carousel';
import {Item, SliderContainer} from "./myProjectList.styled"




function MyProjectLis(props) {
 const settings = {
  cardsToShow: 2.5,
  showDots: true,
  showArrows: false,
  padding: "0px 3px",
  responsive: [
    { breakPoint: 1200, cardsToShow: 2.5}, 
    { breakPoint: 200, cardsToShow: 0.9},
  ]
  };

    return (
      <SliderContainer>
       <Slider {...settings}>
        {props.data.map((project) => (
            <Item key={project.id} id={project.id}> 
            <Projects
              name={project.name}
              id={project.id}
              imageWork={project.img}
              icoGithub={project.icoGithub}
              urlGithub={project.urlGithub}
              web={project.web}
              urlweb={project.urlweb}
            />
           
          </Item>
         
    ))}    
     </Slider> 
     </SliderContainer>
    );
}

MyProjectLis.propTypes = {};

export default MyProjectLis;
