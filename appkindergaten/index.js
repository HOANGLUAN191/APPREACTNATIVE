/*
Tran Hoang Luan

*/


import React, { Component } from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import { AppRegistry } from 'react-native';
import {StackNavigator} from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-navigation'
import App from './App';
import Login from './src/components/Page/Login';
import Start from './src/components/Page/Start';

// class Main extends Component{
//     constructor(props){
//         super(props);
//         this.state={currentScreen: 'Start'};
//         console.log('Start doing some tasks for about 3 seconds')
//         setTimeout(()=>{
//             console.log('Done some tasks for about 3 seconds')
//             this.setState({ currentScreen: 'Login' })
//         }, 2000)
//     }
//         render(){
//             const { currentScreen } = this.state
//             let mainScreen = currentScreen === 'Start' ? <Start /> : <Login />
//             return mainScreen
//         }
        
//         }
    
AppRegistry.registerComponent('appkindergarten',()=> App);
