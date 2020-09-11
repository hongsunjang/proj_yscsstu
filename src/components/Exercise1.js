import React, {useState} from 'react'

function Exercise1(){
    return(
        <div>
            <FuncComp initNumber = {2} ></FuncComp>
            <ClassComp initNumber = {2}></ClassComp>
        </div>
    );
}


function FuncComp(props){
    var numberState = useState(props.initNumber);
    var number = numberState[0]; // numberState 0에는 변수가
    var setNumber = numberState[1]; // number의 값을 이 함수로 바꿀 수 있다.
    var dateState = useState((new Date()).toString());
    var date = dateState[0];
    var setDate = dateState[1];
    // var [data, setDate] = useState((new Date()).toString()); 이렇게 쓰는게 축양형이다.
  
    return(
      <div className = "container">
        <h2> Function style component</h2>
        <p>Number: {number}</p>
        <p>Date : {date}</p>
        <input type ="button" value ="random" onClick ={
            function(){
              setNumber(Math.random());
            }
          }>
        </input>
        <input type ="button" value ="now" onClick ={
            function(){
              setDate((new Date()).toString());
            }
          }></input>
      </div>
    );
  }
  
class ClassComp extends React.Component{
    state = {
      number:this.props.initNumber, //state로 props.initNumber을 number로 바꿀수있다.
      date:(new Date()).toString()
    }
    render(){
      return(
        <div className = "container">
          <h2> Class style component</h2>
          <p>Number: {this.state.number}</p>
          <p>Date: {this.state.date} </p>
          <input type ="button" value ="random" onClick ={
            function(){
              this.setState({number:Math.random()})
            }.bind(this)
          }></input>
          <input type ="button" value ="set noew" onClick ={
            function(){
              this.setState({date:(new Date()).toString()})
            }.bind(this)
          }></input>
        </div>
      )
    }
}

export default Exercise1;