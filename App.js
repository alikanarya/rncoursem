import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    //console.log(enteredGoalText);
    setCourseGoals((currentCourseGoals) =>[
      ...currentCourseGoals,
//      enteredGoalText,
//      { text: enteredGoalText, key: Math.random().toString() }, // Math.random(); key in unique olmasını garantilemez- demo için
      { text: enteredGoalText, id: Math.random().toString() }, // Math.random(); key in unique olmasını garantilemez- demo için
    ])
  };
  
  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
    //console.log('delete');
  };

  return (
    <View style={styles.appContainer} >
    
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return ( 
              <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id} 
                onDeleteItem={deleteGoalHandler}
              />
              );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}>
        </FlatList>
        {/*
        <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
        </ScrollView>
        */}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

/*
<View style={styles.container}>
<View>
  <Text style={styles.dummyText}>123</Text>
</View>

<Text>Hello World!</Text>
<Button title='Tap me!!!'/>
<StatusBar style="auto" />
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});

        <Text>List of your goals :</Text>

*/