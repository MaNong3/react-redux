import React from "react";
import Slot from "comp/slot";
import { gerCityList } from "api/location";

const CityList = (props) => {
    let { cityList, choice } = props;
    return <ul>
		{
			cityList.length && cityList.map(item=>{
			return <li onClick={(e)=>{
				if(e.target.className==="location-active"){
					e.target.className=""
				}else{
					e.target.className="location-active";
				}
				
				choice(e.target.innerHTML);
			}}  style={{display:"inline-block",padding:"2px 3px"}} key={item.id} >
				{item.name}
			</li>
			})
		}
	</ul>
}
class Location extends React.Component {
    constructor() {
        super();
        this.state = {
            cityList: [],
            proviceList: [],
            checkList: []
        }
        this._getCityList = this._getCityList.bind(this);
        this.choice = this.choice.bind(this);
    }
    componentDidMount() {
        this._getCityList();
    }
    _getCityList() {
        gerCityList().then(res => {
            this.setState({
                cityList: res.data.city,
                proviceList: res.data.provinceArr
            })
        })
    }
    choice(val) {
        // let val = e.target.innerHTML
        let tempCheck = this.state.checkList;
        if (tempCheck.includes(val)) {
            let checkIndex = tempCheck.findIndex((item, index) => {
                return item ===val;
            })
            tempCheck.splice(checkIndex, 1);
            // e.target.className = "";
            this.setState({
                checkList: [...tempCheck]
            })
            return;
        } else {
            // e.target.className = "location-active";
        }
        this.setState({
            checkList: [...tempCheck, val]
        })

    }
    render() {
        const { cityList, proviceList, checkList } = this.state;
        return <div>
        	this is Location
        	<Slot tip={"请选择城市"} data={checkList}>
        		<ol>
        		{
        			checkList.map(item=>{
        				return <li key={item} style={{display:"inline-block",padding:"2px 3px"}}>
        					{item}
        				</li>
        			})
        		}
        	</ol>
        	</Slot>
        	
        	<div>
        		{
        			proviceList.map((item,index)=>{
        				return <div key={index}>
        					<h3>{item.letter}</h3>
    						{
        						item.province.length && item.province.map((children)=>{

        							let tempCityList = cityList[children.id]===undefined?[]: cityList[children.id];
        							return <CityList key={children.id} cityList={tempCityList} choice={this.choice} />
        						})
    						}
        				</div>
        			})
        		}
        	</div>
        </div>
    }
}
export default Location;