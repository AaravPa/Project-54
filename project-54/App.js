import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Button1 extends Component {
  displayAlert() {
    alert('Alert 1');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Sound 1"
        onPress={this.displayAlert}
      />
    );
  }
}

class Button2 extends Component {
  displayAlert() {
    alert('Alert 2');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Sound 2"
        onPress={this.displayAlert}
      />
    );
  }
}

class Button3 extends Component {
  displayAlert() {
    alert('Alert 3');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Sound 3"
        onPress={this.displayAlert}
      />
    );
  }
}

class Button4 extends Component {
  displayAlert() {
    alert('Alert 4');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Sound 4"
        onPress={this.displayAlert}
      />
    );
  }
}

class Button5 extends Component {
  displayAlert() {
    alert('Alert 5');
  }
  render() {
    return (
      <Button
        color={this.props.color}
        title="Sound 5"
        onPress={this.displayAlert}
      />
    );
  }
}

export default function App() {
  return (
    <View>
      <Button1 color="red" />
      <Button2 color="yellow" />
      <Button3 color="blue" />
      <Button4 color="green" />
      <Button5 color="orange" />
    </View>
  );
}
