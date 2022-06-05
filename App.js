import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
     {/* Today's Tasks*/}
     <View style={styles.taskWrapper}>
      <text style={styles.sectionTitle}>Today's Tasks </text>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
