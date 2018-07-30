import React, { Component } from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {connect} from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import {ListView}from 'react-native';
import ListItem from '../ListItem';

class KindergartenList extends Component {
    componentWillMount(){
        const ds=new ListView.DataSource({
            rowHasChanged: (r1,r2)=>r1!==r2
        });
        this.dataSource=ds.cloneWithRows(this.props.kindergartens);

    }
    renderRow(kindergarten){
        return <ListItem kindergarten={kindergarten}/>;

    }
    render(){
        return(
            <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />
        );
    }
}
const mapStateToProps =state=>{
    return{ kindergartens: state.indergartens};
};

export default connect(mapStateToProps) (KindergartenList);
