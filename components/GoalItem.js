import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const GoalItem = ({ goalsList }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={goalsList}
      renderItem={(data) => {
        return <Text style={styles.listItem}>{data.item.value}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});

export default GoalItem;
