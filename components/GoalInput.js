import { 
  StyleSheet, 
  View, 
  Button, 
  TextInput, 
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  };  
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
          placeholder='Input your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}  
        />
{/*        <Button title='Add Goal' onPress={addGoalHandler}></Button> */}
        <Button title='Add Goal' onPress={addGoalHandler}></Button>
      </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
});