import React, { Component } from 'react';
import JwtService from 'utils/JwtService';
import {set_user_data,check_auth_by_token} from 'store/actions/authAction';
import {connect} from 'react-redux'
class Auth extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            waitForCheckLogin: true,
        }
    }
    async componentDidMount() {
        console.log(this.props)
        await this.props.authByToken()
        this.setState({ waitForCheckLogin: false }) 
    }
    
    render() {
        return (
            <div>
                { this.state.waitForCheckLogin ? null : this.props.children}
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    setUser: (user) => dispatch(set_user_data(user)),
    authByToken: () => dispatch(check_auth_by_token())
})
const mapStateToProps = (state) => {
    return state.userReducer
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);