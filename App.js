import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text } from 'react-native';  // Import Text component
import Display from './components/display';
import { styles } from './assets/style';
import Keyboard from './components/keyboard/keyboard';

export default function App() {
  const [oldOper, setOldOper] = useState("");
  const [oper, setOper] = useState("");

  return (
    <View style={styles.container}>
      <Display
        oper={oper}
        setOper={setOper}
      />
      <Keyboard 
        oper={oper}
        setOper={setOper}
      />
      
      {/* Add the Calc by Rushikesh Kulkarni text */}
      <Text style={styles.footerText}>Calc by Rushikesh Kulkarni</Text>

      <StatusBar style="dark" />
    </View>
  );
}
