import React from "react";
import Carousel from "comp/carousel";
import { connect } from "react-redux";
import { update } from "store/actions/rank";
import { getCarouselList, getRankList } from "api/rank";

const RankListItem = (props) => {
    const { item } = props;
    return <dl className="clearfix mb15">
        <dt className="col-xs-4">
            <img src={`http://y.gtimg.cn/music/photo_new/T002R90x90M000${item.albummid}.jpg?max_age=2592000`} alt=""/>
        </dt>
        <dd className="col-xs-8">
            <h4 className="text-nobr">{item.songname}</h4>
            <p className="text-nobr pt10 pb10 mlf3">{item.albumdesc}</p>
        </dd>
    </dl>
}

class Rank extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselList: []
        }
        this._getCarouselList = this._getCarouselList.bind(this);
    }
    componentDidMount() {
        this._getCarouselList()
        // this._getRankList()
        this.props.update();
    }
    _getCarouselList() {
        getCarouselList().then(res => {
            this.setState({
                carouselList: res.data.dataList
            })
        })
    }
    _getRankList() {
        getRankList().then(res => {
            this.props.update(res.data.dataList)
        })
    }
    render() {
        const { carouselList } = this.state;
        const { rankList } = this.props;
        return <div>
            <Carousel carouselList={carouselList}></Carousel>
            <ul className="pt15 pb15">
                {
                    rankList.length && rankList.map((item,index)=>{
                        return <li key={item.data.songid}>
                            <RankListItem  item={item.data}/>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            
            dispatch(update(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rank);