import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Note extends React.Component{
    render(){
        return(
            <View key={this.props.keyval} style={styles.note}>
                <Text style={styles.noteText}>{this.props.val.date}</Text>
                <Text style={styles.noteText}>{this.props.val.note}</Text>
            
                <TouchableOpacity 
                    style={styles.noteDelete} 
                    onPress={this.props.deleteMethod}
                >
                    <Text style={styles.noteDeleteText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noteEdit} onPress={this.props.editMethod}>
                    <Text style={styles.noteEditText}>Alterar</Text>
                </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    note:{
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2F4F4F'//DarkSlateGrey
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white'
    },
    noteEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8FBC8F',//DarkSeaGreen
        padding: 10,
        top: 10,
        bottom: 10,
        right: 80
    },
    noteEditText: {
        color: 'white'
    }
})