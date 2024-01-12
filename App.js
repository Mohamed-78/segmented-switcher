import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SegmentedSwitch } from './src/SegmentedSwitch';

export default function App() {
  const tabs = [
    {
      label: 'First',
      content: (
        <>
          <View>
            <Text>First</Text>
          </View>
        </>
      ),
    },
    {
      label: 'Second',
      content: (
        <>
          <View>
            <Text>Second</Text>
          </View>
        </>
      ),
    },
    {
      label: 'Third',
      content: (
        <>
          <View>
            <Text>Third</Text>
          </View>
        </>
      ),
    },
  ];

  const switchButtonStyle = {
    activeColor: 'orange',
    inactiveColor: 'transparent',
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: 'lightblue',
  };

  const touchableStyle = {
    activeColor: 'orange',
    inactiveColor: 'transparent',
    borderRadius: 20,
  };

  const textTouchableStyle = {
    activeColor: '#fff',
    inactiveColor: '#000',
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <SegmentedSwitch
        tabs={tabs}
        switchButtonStyle={switchButtonStyle}
        touchableStyle={touchableStyle}
        textTouchableStyle={textTouchableStyle}
      />
    </View>
  );
}