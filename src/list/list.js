import React, { Component } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, Image,TouchableHighlight, TouchableOpacity, FlatList
} from 'react-native';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayList: [],
        }

    }
    componentDidMount = () => {
        this.getListFromApi();
    }
    renderItem = ({ item }) => {
       
        return (
           
    
            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex:1,marginBottom:25}}>
                <Image style={styles.imageView} source={{uri:`${item.artworkUrl60}`}} />
                </View>
                <View style={{flex:2}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Details',{obj:item})}
                >
                    <Text style={styles.btnText}>{item.artistName}</Text>
                    <Text style={styles.btnText}>{item.country}</Text>
                </TouchableOpacity>
                </View>
               
            </View>

        )

    }
    getListFromApi = () => {
        return fetch('https://itunes.apple.com/search?term=Michael+jackson')
            .then((response) => response.json())
            .then((json) => {
                //console.log(json.results);
                this.setState({
                    arrayList: json.results
                })
                return json.results;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    render() {
        console.log(this.state.arrayList);

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.listView}>

                        <FlatList
                            data={this.state.arrayList}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index}
                        />


                    </View>

                </View>
            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
   
    listView: {
        flexDirection: 'row',
        padding:15,
    },
    imageView: {
        width: 80,
        height: 60,
    },

})
export default List;
