import React from "react";

const SideBar = (props) => {
    return <>
        <aside className="col-md-3 sidebar97239">
            <div className="status-part3821">
                {props.sidebar &&
                <>
                    <h4>{props.sidebar.title}</h4>
                    { props.sidebar.body &&
                      props.sidebar.body.map( (item, id)  => {
                        return <div key={id}>
                            <div className="post-details021">
                                <a href="#"><h5>{item.title}</h5></a>
                                <p>{item.desc}</p>
                                <small style={{color: '#848991'}}>{item.time}</small>
                            </div>
                            <hr />
                        </div>
                    })
                    }
                </>
                }
            </div>
            {/*login part*/}
            <div className="login-part2389">
                <h4>Login</h4>
                <div className="input-group300">
                    <span><i className="fa fa-user" aria-hidden="true" /></span>
                    <input type="text" className="namein309" placeholder="Username" />
                </div>
                <div className="input-group300">
                    <span><i className="fa fa-lock" aria-hidden="true" /></span>
                    <input type="password" className="passin309" placeholder="Name" />
                </div>
                <a href="#">
                    <button type="button" className="userlogin320">Log In</button>
                </a>
                <div className="rememberme">
                    <label><input type="checkbox" defaultChecked="checked" /> Remember Me</label>
                    <a href="#" className="resbutton3892">Register</a>
                </div>
            </div>
            {/*start tags part*/}
            <div className="tags-part2398">
                <h4>Tags</h4>
                <ul>
                    <li><a href="#">analytics</a></li>
                    <li><a href="#">Computer</a></li>
                    <li><a href="#">Developer</a></li>
                    <li><a href="#">Google</a></li>
                    <li><a href="#">Interview</a></li>
                    <li><a href="#">Programmer</a></li>
                    <li><a href="#">Salary</a></li>
                    <li><a href="#">University</a></li>
                    <li><a href="#">Employee</a></li>
                </ul>
            </div>
            {/*End tags part*/}
        </aside>
    </>
}

export default SideBar;
