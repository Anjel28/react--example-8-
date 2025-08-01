import React from 'react';
//import Super from './path-to-super-component';

interface IPROPS {
    userid: number;
    username: String;
}

export default class Users extends React.Component <IPROPS> {
    Constructor(props: IPROPS){
    //Super (props);
    }


    render(){
        let {userid, username} = this.props
        return(
            <>
        <h1>Welcome to class component</h1>
        <h3>UserId : {userid}</h3>
         <h3>UserName : {username}</h3>
        </>
        )
    }
}