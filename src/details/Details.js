import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView,Image
} from 'react-native';

export class Details extends Component{
    constructor(props){
        super(props);
       console.log(this.props.route.params.obj)
       this.state={
           items:this.props.route.params.obj,
       }
        
    }
    render(){
       
      
        return(
        <View style={styles.container} >
            <View style={styles.imageContainer}>
            <Image style={styles.imageView} source={{uri:`${this.state.items.artworkUrl60}`}} />
            </View>
            <View style={styles.othersDetails}>
                
                <Text>{this.state.items.collectionCensoredName}</Text>
                <Text>{this.state.items.artistName}</Text>
                <Text>{this.state.items.country}</Text>
                <Text>{this.state.items.longDescription}</Text>
            </View>
              
        </View>
        )
        
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:25,
    },
    imageView: {
        width: 250,
        height: 100,
    },
    imageContainer:{
        //flex:1,
        alignItems:'center'
    },
    othersDetails:{
        marginTop:30,
        alignItems:'center'
    }
})
export default Details;
