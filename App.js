import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import Title from "./src/components/Title";

class App extends Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
    this.setState({
      fontLoaded: true,
    });
  }
  render() {
    const { fontLoaded } = this.state;
    return !fontLoaded ? (
      <View>
        <Text>Loading...</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <Title title="Hello I'am the title" />
        <Title title="Lorem ipsum" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
