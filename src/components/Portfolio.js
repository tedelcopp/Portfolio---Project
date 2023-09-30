//  import React, { Component } from "react";
//  export default class Porfolio extends Component {
//    render() {
//      let resumeData = this.props.resumeData;
    
//      return (
//        <section id="portfolio">
//          <div className="row">
//            <div className="twelve columns collapsed">
//              <h1>
//               <b>
//                 Check Out Some of My Projects
//                 </b> 
//              </h1>
//              <div
//                id="portfolio-wrapper"
//                className="bgrid-quarters s-bgrid-thirds cf"
//              >
//                {resumeData.portfolio &&
//                  resumeData.portfolio.map((item, key) => {
//                    return (
//                      <div key={key} className="columns portfolio-item">
//                        <div className="item-wrap">
//                          <a onClick={() => (window.location.href = item.url)}>
//                            <img src={`${item.imgurl}`} className="item-img" />
//                            <div className="overlay">
//                              <div className="portfolio-item-meta">
//                                <h5>{item.name}</h5>
//                                <p>{item.description}</p>
//                              </div>
//                            </div>
//                          </a>
//                        </div>
//                      </div>
//                    );
//                  })}
//              </div>
//            </div>
//          </div>
//        </section>
//      );
//    }
//  }
 
import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              <b>Check Out Some of My Projects</b>
            </h1>
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              autoPlay={true}
              interval={3500}
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, key) => {
                  return (
                    <div key={key} className="columns portfolio-item">
                      <div className="item-wrap">
                        <a onClick={() => (window.location.href = item.url)}>
                          <img src={`${item.imgurl}`} className="item-img" alt={item.name} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}
