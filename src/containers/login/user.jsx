import React from "react";

class User extends React.Component {
    render() {
        const { user } = this.props.match.params;
        return <div>
        	this is User,
        	{user}---吃个鸡
        </div>
    }
}
export default User;