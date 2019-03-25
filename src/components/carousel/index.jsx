import React from "react";
import ReactSwipe from 'react-swipe';
import "./index.css";


class Carousel extends React.Component {
    constructor() {
        super()
        this.state = {
            posIndex: 0
        }
    }
    render() {
        let { carouselList = [] } = this.props;
        let reactSwipeEl;
        return <div className="carousel">
            {
              carouselList.length? <ReactSwipe  swipeOptions={{ continuous: true }}  ref={el => (reactSwipeEl = el)}>
              {
                carouselList.map(item=>{
                  return <div key={item.id}>
                        <img src={item.picUrl} className="img-responsive" alt=""/>
                    </div>
                })
              }
              </ReactSwipe> : null
            }
            <ul className="carousel-pagination">
              {
                carouselList.map((item,index)=>{
                  return <li key={index} onClick={()=>{
                    let getIndex = reactSwipeEl.swipe.getPos()
                    let posIndex =  index<getIndex? --getIndex: ++getIndex
                    this.setState({
                      posIndex:posIndex
                    })
                    reactSwipeEl.swipe.slide(index)
                    
                  }} className={index===this.state.posIndex?"active":""}></li>
                })
              }
            </ul>
        </div>
    }
}
export default Carousel;