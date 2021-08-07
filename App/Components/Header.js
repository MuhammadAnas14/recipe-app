import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

const Headers = (props) => {

  return (

    <Header style={styles.row}
      backgroundColor="#97ce00"
      leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
      centerComponent={{ text: props.title, style: { color: '#fff', fontSize: 20, fontWeight: 'bold' } }}
      rightComponent={{ icon: 'refresh', color: '#fff' }} />

  )
}

const styles = StyleSheet.create({

  row: {
    height: 50,
    fontSize: 40,
    backgroundColor: "#97ce00"
  },

})

export default Headers