import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default Image = ({ resetAnimation }) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    if (resetAnimation) {
      // Reset animation to start from the beginning
      animationProgress.current.setValue(0);
      Animated.timing(animationProgress.current, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
    }
  }, [resetAnimation]);

  return (
    <AnimatedLottieView
      source={require('../../../assets/animation_lmrhkiqg.json')}
      progress={animationProgress.current}
      style={{ width: 300, height: 300, alignItems: 'center' }}
    />
  );
};

const styles = StyleSheet.create({});
