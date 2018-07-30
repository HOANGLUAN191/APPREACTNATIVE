/*
Tran Hoang Luan

*/


import React from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {View} from 'react-native';
import {Provider} from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import {createStore} from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import reducers from './src/reducers';
import KindergartenList from './src/components/Page/KindergartenList';

// import {StackNavigator} from 'react-navigation';
// import Start from "./src/components/Page/Start";
// import Login from "./src/components/Page/Login";
// import dn from "./src/components/Page/dn";
// import Home from "./src/components/Page/Home";

// const Application=StackNavigator({
//   Login: {screen: dn},
//   Home: {screen: Home}},
//   {
//     navigationOptions:{
//       header:false,
//     }
//   });

// export default class App extends Component {
//   render() {
//     return (
//       <Login/>
       
      
//     );
//   }
// }

export default class App extends Component{
  reder(){
    return(
      <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
          <Headers headerText="APP"/>
          <KindergartenList/>
        </View>
      </Provider>
    );
  }

  }

 

