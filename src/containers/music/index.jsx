import React from "react";
import RouterView from "router";
import {NavLink} from "react-router-dom";

const NavBar = ()=>{
	return <nav>
		<ul className="clearfix text-center">
			<li className="col-xs-4 pl0 pr0">
				<NavLink className="pt10 pb10 block f16" to="/music/rank" activeClassName="navbar-active">推荐</NavLink>
			</li>
			<li className="col-xs-4 pl0 pr0">
				<NavLink className="pt10 pb10 block f16" to="/music/toplist" activeClassName="navbar-active">排行</NavLink>
			</li>
			<li className="col-xs-4 pl0 pr0">
				<NavLink className="pt10 pb10 block f16" to="/music/search" activeClassName="navbar-active">搜索</NavLink>
			</li>
		</ul>
	</nav>
}
class Music extends React.Component {
    render() {
        const { routes } = this.props;
        return <div>
        	<NavBar></NavBar>
        	<RouterView routes={routes}/>
        </div>
    }
}
export default Music;