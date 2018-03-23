## Install

Install the package:

```bash
$ npm i react-native-animate-loading-button --save
```

## Example

![Example](https://raw.githubusercontent.com/andcosta/react-native-animate-loading-button-example/master/android-ios.gif)

## Usage

```javascript
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button';

export default class LoadingButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  _onPressHandler() {
    this.setState({ isLoading: true });

    // mock
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
        <AnimateLoadingButton
          width={300}
          height={50}
          title="BUTTON"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="rgb(29,18,121)"
          borderRadius={4}
          showLoading={this.state.isLoading}
          onPress={this._onPressHandler.bind(this)}
        />
      </View>
    );
  }
}
```

## Properties

| NAME                   | DESCRIPTION              |     TYPE | REQUIRED |
| :--------------------- | :----------------------- | -------: | :------- |
| width                  | Button width             |   Number | Yes      |
| height                 | Button height            |   Number | Yes      |
| title                  | Button title             |   String | No       |
| titleColor             | Button title color       |   String | No       |
| titleFontFamily        | Button title font family |   String | No       |
| titleFontSize          | Button title font size   |   Number | No       |
| backgroundColor        | Button background color  |   String | No       |
| borderWidth            | Button border width      |   Number | No       |
| borderRadius           | Button border radius     |   Number | No       |
| activityIndicatorColor | Activity indicator color |   String | No       |
| showLoading            | Show loading             |  Boolean | Yes      |
| onPress                | Button onPress callback  | Function | Yes      |

## Author

[Anderson de Carvalho](http://linkedin.com/in/andcosta)

## License

MIT
