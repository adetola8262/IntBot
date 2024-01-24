import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default Image = ({ startAnimation  }) => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    let timeoutId;

    if (startAnimation) {
      // Delay the animation start by 500 milliseconds (adjust as needed)
      timeoutId = setTimeout(() => {
        // Reset animation to start from the beginning
        animationProgress.current.setValue(0);

        Animated.timing(animationProgress.current, {
          toValue: 1,
          duration: 5000,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(() => {
          // Animation completed
          // Uncomment the line below if you want to restart the animation when it completes
          // setStartAnimation(true);
        });
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId); // Clear the timeout if the component unmounts or startAnimation changes
    };
  }, [startAnimation]);


  return (
    <AnimatedLottieView
      source={require('../../../assets/animation_lmrhkiqg.json')}
      progress={animationProgress.current}
      style={{ width: 300, height: 300, alignItems: 'center' }}
    />
  );
};

const styles = StyleSheet.create({});
