import React from "react";
import Header from "comp/header";
import Layout from "comp/layout";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "router";

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    render() {
        return <div className="wraper">
            <Header title={"QQ音乐"}></Header>
            <Layout>
                <Router>
                    <RouterView/>
                </Router>
            </Layout>
        </div>
    }
}
export default App;