import React, { Component } from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {Text,
        TouchableWithoutFeedback,
        View,
        LayoutAnimation,
        Image,
        } from 'react-native';
import {connect} from 'C:/Users/hoang/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-redux';
import { CardSection } from './common/CardSection';
import * as actions from '../actions';


class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
      }
    renderDetailKindergarten(){
        const {kindergarten,expand}=this.props;
        if(expand){
            return (
                
                <CardSection>
                    <Image style={styles.imageStyle}>
                        {kindergarten.image}
                    </Image>
                    <Text style={styles.text}>
                        {kindergarten.address}
                    </Text>
                    <Text style={styles.text}>
                        {kindergarten.phone}
                    </Text>
                    <Text style={styles.text}>
                        {kindergarten.last_updated}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titileStyle}=styles;
        const {id, title}=this.props.kindergarten;
        return (
        
            <TouchableWithoutFeedback onPress={() => this.props.selectKindergarten(id)}>
            <View>
                <CardSection>
                    <Text style={titileStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDetailKindergarten()}
            </View>
            </TouchableWithoutFeedback>
        );
        }
}

const styles={
    titileStyle:{
        fontSize:18,
        paddingLeft:15
    },
    descriptionStyle: {
        paddingLeft: 10,
        paddingRight: 10
      }
};
const mapStateToProps=(state, ownProps)=>{
    const expanded=state.selectedKindergartenId===ownProps.kindergarten.id;
    return {expanded};
}

export default connect(mapStateToProps,actions) (ListItem);