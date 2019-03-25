import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
    render() {
        return <div>
        	this is Login111
        	<hr/>
        	<Link className="btn btn-default" to="/registry">跳转到注册页面</Link>
        	<Link className="btn btn-danger" to={{
        		pathname:"/registry",
        		params:{
        			username:"heinan",
        			password:"1qaz!QAZ"
        		},
        		state:{
        			hobby:["吃饭饭","睡觉觉","打豆豆"]
        		}
        	}}>跳转到注册页面</Link>
        	<hr/>
        	<button className="btn btn-default" onClick={()=>{
        		this.props.history.push("/registry")
        	}}>跳转到注册页面</button>
        	<button className="btn btn-default" onClick={()=>{
        		this.props.history.push({
        		pathname:"/registry",
        		params:{
        			username:"heinan",
        			password:"1qaz!QAZ"
        		},
        		state:{
        			hobby:["吃饭饭","睡觉觉","打豆豆"]
        		}
        	})
        	}}>跳转到注册页面</button>
        	<hr/>
        	<button className="btn btn-default" onClick={()=>{
        		this.props.history.push({
        		pathname:"/login/zhangsan"
        	})
    		}}>跳转到张三主页面</button>
    		<button className="btn btn-default" onClick={()=>{
        		this.props.history.push({
        		pathname:"/login/lisi"
        	})
    		}}>跳转到李四主页面</button>
        </div>
    }
}
export default Login;