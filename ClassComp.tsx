import React from 'react';

interface IState{
    names: String,
    title: String,
}
interface IProps{
    name: String;
    age: number;
}

export default class ClassComp extends React.Component <IProps, IState>{
 Constructor(props: IProps){
    //super(props);
    //this.state = {
      //names:"Youtuber" ,
      //title: "React-Dev",
    
        }
 

 render(){
    const {name, age} = this.props;
   // const {names, title} = this.state
    return(
   <>
   <h1 className ="bg-dark p-1 text-white text-centre">Class Component </h1>
   <div className="border px-4 bg-light mb-4">
    <h3>
        name: <b>{name}</b> <br/>
        Age: <b>{age}</b>  <br/>
            </h3>

   </div>
   {/*<div className="card bg-light">
   <h1>Class Comp State</h1>
   <h4>Names: {names}</h4>
   <h4>Title: {title}</h4>
   </div>*/}
    </>
    )
 }
}