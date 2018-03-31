import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Animated, ActivityIndicator, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Component extends React.PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleFontFamily: PropTypes.string,
    titleFontSize: PropTypes.number,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderRadius: PropTypes.number,
    activityIndicatorColor: PropTypes.string,
    showLoading: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'Button',
    titleColor: 'white',
    backgroundColor: 'gray',
    activityIndicatorColor: 'white',
    borderRadius: 0
  };

  constructor(props) {
    super(props);

    this.loadingValue = {
      width: new Animated.Value(props.width),
      borderRadius: new Animated.Value(props.borderRadius),
      opacity: new Animated.Value(1)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.showLoading) {
      this._loadingAnimation(this.props.width, nextProps.height, this.props.borderRadius, nextProps.height / 2, 1, 0);
    } else {
      this._loadingAnimation(nextProps.height, this.props.width, nextProps.height / 2, this.props.borderRadius, 0, 1);
    }
  }

  _loadingAnimation(widthStart, widthEnd, borderRadiusStart, borderRadiusEnd, opacityStart, opacityEnd) {
    this.loadingValue.width.setValue(widthStart);
    this.loadingValue.opacity.setValue(opacityStart);
    this.loadingValue.borderRadius.setValue(borderRadiusStart);

    Animated.timing(this.loadingValue.width, {
      toValue: widthEnd,
      duration: 400
    }).start();

    Animated.timing(this.loadingValue.borderRadius, {
      toValue: borderRadiusEnd,
      duration: 400
    }).start();

    Animated.timing(this.loadingValue.opacity, {
      toValue: opacityEnd,
      duration: 300
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={!this.props.showLoading ? this.props.onPress : null}>
          <Animated.View
            style={[
              styles.containerButton,
              {
                width: this.loadingValue.width,
                height: this.props.height,
                backgroundColor: this.props.backgroundColor,
                borderWidth: this.props.borderWidth,
                borderRadius: this.loadingValue.borderRadius
              }
            ]}
          >
            {this.props.showLoading ? this._renderIndicator() : this._renderTitle()}
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _renderTitle() {
    return (
      <Animated.Text
        style={[
          styles.buttonText,
          {
            opacity: this.loadingValue.opacity,
            color: this.props.titleColor,
            fontFamily: this.props.titleFontFamily,
            fontSize: this.props.titleFontSize
          }
        ]}
      >
        {this.props.title}
      </Animated.Text>
    );
  }

  _renderIndicator() {
    return <ActivityIndicator color={this.props.activityIndicatorColor} />;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerButton: {
    justifyContent: 'center'
  },
  buttonText: {
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
});
