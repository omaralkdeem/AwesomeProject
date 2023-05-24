import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "./src/components";
const App = () => { //function component//

  const data = [
    {
      name: 'brahem',
      bd: '19.3', 
      bgc:'red'
    },
    {
      name: 'saleh',
      bd: '23.6',
      bgc:'blue'
    },
    {
      name: 'huda',
      bd: '21.10',
    },
    {
      name: 'nor',
      bd: '28.8'
    } , 
    {
      name:'zeen' , 
      bd:'24.8' , 
    }, 
    {
      name:'rabea' , 
      bd:'6.7'
    }
  ]

  const renderCards = ()=> {
    return data.map(cardData => {
      return <Card name={cardData.name} bd={cardData.bd} bgc={cardData.bgc} />
    })
  }

  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}>
          {renderCards()}
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center' , 
    paddingTop: 50
  },

})


export default App