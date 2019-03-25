import React from "react";

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return <section className="content">
            {children}
        </section>
    }
}
export default Layout;