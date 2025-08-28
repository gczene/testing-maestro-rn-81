import React from 'react';
import { Text, View } from 'react-native';


export default function ExampleBox() {

  return (
    <View style={{padding: 20, backgroundColor: 'yellow'}} testID={'box'}>
      <View testID={'box-title'} style={{backgroundColor: 'green'}}>
        <Text>BOX 1</Text>
        <Text>Lorem ipsum 1</Text>
      </View>
    </View>
  )
}

export const ExampleBox2 = function() {

  return (
    <View style={{padding: 20, backgroundColor: 'green'}} testID={'box2'}>
      <View testID={'box-title2'} style={{backgroundColor: 'yellow'}}>
        <Text>BOX 2</Text>
      </View>
      <View testID={'box-description'} style={{backgroundColor: 'yellow'}}>
        <Text>Lorem ipsum 2</Text>
      </View>
    </View>
  )
}
