import React ,{Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import {List} from '../list/list';
import {Details} from '../details/Details';

const stack = createStackNavigator();

export class Route extends Component{
    render(){
        return(
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen 
                        name="List"
                        component={List}
                    />    
                     <stack.Screen 
                        name="Details"
                        component={Details}
                    /> 
                </stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default Route