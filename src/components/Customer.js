import React from 'react'

//material UI를 이용하자
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

//render(항상 실행되는 함수)
class Customer extends React.Component{
	render(){
        return(
		    <div>
                <CustomerProfile image = {this.props.image} name = {this.props.name} id ={this.props.id}></CustomerProfile>
                <CustomerInfo number ={this.props.number} gender ={this.props.gender} grade ={this.props.grade}></CustomerInfo>
            </div>
        )
	}
}

class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image} alt ="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.grade}</p>
            </div>
        )
    }
}

export default Customer;