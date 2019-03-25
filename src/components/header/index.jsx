import React from "react";

class Header extends React.Component {
	static defaultProps = {
		title:"这是标题"
	}
    render() {
        const { title } = this.props;
        return <header className="header">
        	<h4 className="mt15">{title}</h4>
    	</header>
    }
}

export default Header;
