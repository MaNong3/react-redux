import React from "react";

class Slot extends React.Component {
    render() {
        const { tip, data } = this.props;
        return <div>
        	{
        		data.length ? this.props.children : tip
        	}
        </div>
    }
}
export default Slot;