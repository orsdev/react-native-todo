import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const GoalInput = ({ handleOnChange, goal }) => {
  return (
    <TextInput
      placeholder="Enter your goals"
      style={styles.input}
      onChangeText={handleOnChange}
      value={goal}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '90%',
    height: 40
  }
});

export default GoalInput;
