import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IMAGES } from '@/constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          {
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          },
        ]}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          blurRadius={2}
          style={{ width: 200, height: 300 }}
        />
        <Image source={IMAGES.favicon} />
        <Text
          numberOfLines={2}
          style={{
            fontSize: 20,
            fontWeight: '400',
            textDecorationLine: 'line-through',
            textDecorationColor: 'red',
            textTransform: 'uppercase',
            textAlign: 'left',
          }}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod lorem ipsum dolor sit amet,
          consectetur adipiscing elit. sed do eiusmod
        </Text>
        <View
          style={{
            backgroundColor: 'lightblue',
            paddingVertical: 20,
            width: 100,
            shadowColor: 'red',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,

            elevation: 11,
          }}
        />
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 20,
            width: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 20,
            width: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'grey',
            paddingVertical: 20,
            width: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: {
    color: 'blue',
  },
});

export { HomeScreen };
