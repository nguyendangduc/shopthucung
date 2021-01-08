import React, { Component } from 'react';
import {check_auth_by_token} from 'store/actions/authAction';
import {connect} from 'react-redux'
class Auth extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            waitForCheckLogin: true,
        }
    }
    async componentDidMount() {
        await this.props.authByToken()
        this.setState({ waitForCheckLogin: false }) 
    }
    
    render() {
        return (
            <>
                { this.state.waitForCheckLogin ? null : this.props.children}
            </>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    authByToken: () => dispatch(check_auth_by_token())
})
const mapStateToProps = (state) => {
    return state.userReducer
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);