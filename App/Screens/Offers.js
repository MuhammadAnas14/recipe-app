import React from 'react';
import Header from '../Components/Header'
import { SafeAreaView } from "react-native"
import Tabs from '../Components/Tabs'

const Offers = () => {

  return (
    <SafeAreaView>
      <Header title="Offers For you" />
      <Tabs />
    </SafeAreaView>
  )
}

export default Offers