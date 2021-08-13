import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goal, setGoals] = React.useState('');
  const [goalsList, setGoalsList] = React.useState([]);

  const handleOnChange = (value) => {
    setGoals(value);
  };

  const addGoalHandler = () => {
    setGoalsList((prevState) => [
      ...prevState,
      { id: Math.random().toString(), value: goal }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <GoalInput goal={goal} handleOnChange={handleOnChange} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <GoalItem goalsList={goalsList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  containerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  }
});
