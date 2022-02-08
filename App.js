import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Hello I'am the title" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
