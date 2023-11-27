import React, { useState, useEffect } from 'react'; // run this file as app.js
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the count every second
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 36,
  },
});

export default App;
