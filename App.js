import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default function App(){
  const [hitung, setHitung] = useState(0);

  const tambah = () => {
    setHitung(hitung + 1);
  }

  const kurang = () => {
    setHitung(hitung - 1);
  }

  return(
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Button title="-" onPress={kurang}/>
        <Text style={styles.counterText}>{hitung}</Text>
        <Button title="+" onPress={tambah}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    fontSize: 24,
    marginHorizontal: 20,
  }
});