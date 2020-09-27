import './CaseStudy.css';
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 

class Slide extends React.Component {
  render() {
    let copy = []
    if (this.props.content.copy.indexOf('<br />') !== -1) {
      this.props.content.copy.split('<br />').forEach(paragraph => {
        copy.push(<p>{paragraph}</p>)
      })
    } else {
      copy.push(<p>{this.props.content.copy}</p>)
    }
    return(
      <div className="content grid-12">
        <div className="d-span-6 d-row-1 m-row-2 m-span-12 copy">
          <h3>{this.props.content.title}</h3>
          {copy}
        </div>
        <div className="d-span-6 row-1 m-span-12 image-container">
          <img src={this.props.content.image.src} alt={this.props.content.image.alt} />
        </div>
      </div>
    )
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {modal: "closed"};
  }
  render() {
    const condition = this.props.condition

    let onClose = () => {
      this.props.hideModal()
    }

    let slides = []
    for (var i = 0; i < this.props.content.length; i++) {
      slides.push(<Slide content={this.props.content[i]} />)
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <div className="modal closed" condition={condition}>
          <div className="header">
            <div className="closeButton" onClick={onClose}>
              <span>X</span>
            </div>
          </div>
          <Slider {...settings}>
            {slides}
          </Slider>
        </div>
      )
  }
}

class CaseStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: "closed"};
  }

  render() {
    let showModal = () => {
      document.body.classList.add('noScroll')
      this.setState({modal: 'open'});
    }

    let hideModal = () => {
      document.body.classList.remove('noScroll')
      this.setState({modal: 'closed'});
    }

    let project = this.props.project
    let id = `CaseStudy-${project.client.trim().replace(/ /g, '-')}`
    let styleRules = {}
    let imageContainer = <div className="image-container t-span-6 t-offset-7 d-span-9 d-offset-4 m-span-12 m-row-1">
          <img src={project.image.src} alt={project.image.alt} />
        </div>
    if (project["highlight"] === "image") {
      imageContainer = <div className="hidden"></div>
      styleRules = {
        backgroundImage: `url(${project.image.src})`
      }
    }

    return [
      <div>
        <section className="caseStudy" id={id} highlight={project.highlight} style={styleRules}>
          <div className="content grid-12">
            <div className="copy t-span-6 d-span-3 m-span-12 m-row-2">
              <h2>
                {project.client}
                <span className="subheading">{project.project}</span>
              </h2>
              <p>{project.excerpt}</p>
              <button className="cta" onClick={showModal}>See More</button>
            </div>
            {imageContainer}
          </div>
        </section>
        <Modal content={project.modal.slides} condition={this.state.modal} hideModal={hideModal} />
      </div>
    ]
  }
}

export default CaseStudy;
