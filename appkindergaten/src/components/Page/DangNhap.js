import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this._loadTrangThai().done();
  }
  _loadTrangThai = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation("Profile");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Account Info</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChange={username => this.setState({ username })}
            underlinecolorAndroid="transparent"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            onChange={password => this.setState({ password })}
            secureTextEntry={true}  underlinecolorAndroid="transparent"
          />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
      
    fetch('http://192.5454.25.2:3000/users',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username:this.state.username,
            password:this.state.password,
        })
    
    })
    .then((response) => response.json())
    .then ((res=>{
      alert(res.message);
        if (res.success===true){
            AsyncStorage.setItem('user',res.user);
            this.props.navigation.navigate('Profile');
        }
        else{
            alert(res.message);
        }
    }))
    .done();
    

  }
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b1a33",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "rgb(255,255,120)",
    padding: 20,
    alignItems: "center"
  },
  textStyle: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    justifyContent: "center",
    margin: 40
  },
});

export default Login;