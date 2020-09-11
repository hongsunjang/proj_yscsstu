import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',

  'name': '장홍선',
  'number' : '2017147510',
  'gender' : '남자',
  'grade' : '3'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',

  'name': '권동현',
  'number' : '2017123510',
  'gender' : '남자',
  'grade' : '3'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',

  'name': '신지헌',
  'number' : '2017127534',
  'gender' : '남자',
  'grade' : '3'
}
]
class App extends Component {
  render(){
  return (
    <div>
    {
      customers.map(c =>{
        return <Customer
          key = {c.id} //key를 항상 넣어줘야함(고유값)
          id = {c.id}
          image = {c.image}
          name = {c.name}
          number ={c.number}
          gender ={c.gender}
          grade = {c.grade}

        />
      })
    }
    </div>
  );
  }
}

export default App;
