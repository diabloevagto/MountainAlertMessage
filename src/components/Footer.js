import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const Footer = ({ todos, addTodo }) => (
  <View>
    {todos.map((todo, idx) =>
      <Text key={idx}>{todo}</Text>
    )}
    <Button
      title="add"
      onPress={() => { addTodo(Math.random()) }}
    />
  </View>
)

export default Footer
