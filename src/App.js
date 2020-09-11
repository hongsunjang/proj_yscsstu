import React, {Component, useState} from 'react';
import './App.css';

//custom import files
import Customer from './components/Customer';
import Exercise1 from './components/Exercise1';
import RouterComponent from './components/RouterComponent';

//react router dom
import {BrowserRouter} from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit*3,
    overflowX: 'auto'
  },
  table: {
    minWidth:1080
  }
})

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

function App() {
  return (
    <BrowserRouter>
    <div>
    <RouterComponent></RouterComponent>

    <Exercise1></Exercise1>  
    {customers.map(c =>{return <Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} number ={c.number} gender ={c.gender}grade = {c.grade}/>})}
  
    </div>
    </BrowserRouter>
  );
}






export default App;
