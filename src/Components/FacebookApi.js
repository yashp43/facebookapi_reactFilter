import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
//import { appid } from '../../../filter_form/appid.js/Appid';

class FacebookApi extends Component {
    state = {
        userID: '',
        name: '',
        email: '',
        picture: '',
        isLoaded: false
    }

    componentClicked = () => console.log("clicked");

    responseFacebook = response => {
        console.log(response);
    }
    render() {
        let facebookdata;
        if(this.props.isLoaded) {
            facebookdata = (
                <div styles={{
                    width: 100,
                    height: 100
                }}>
                    <img src={this.state.picture} alt="abcd"></img>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.email}</p>
                </div>
            );
        } else {
            facebookdata = (
                <FacebookLogin
                    appId={"your app id here"}
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                 />
            )
        }
        return <div>{facebookdata}</div>
    }
}

export default FacebookApi;