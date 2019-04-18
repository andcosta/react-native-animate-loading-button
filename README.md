## Install

Install the package NPM:

```bash
$ npm i react-native-animate-loading-button --save
```

or install the package YARN:

```bash
yarn add react-native-animate-loading-button
```

## Example

<div style="display: flex; flex-direction: row; margin-bottom: 50px">
  <img src="https://raw.githubusercontent.com/andcosta/react-native-animate-loading-button-example/master/android-ios.gif" width="540" />
</div>

## Demo

[Try it with expo](https://snack.expo.io/@andcosta/react-native-animate-loading-button-v.1.0.0)

## Usage

```javascript
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button';

export default class LoadingButton extends PureComponent {
  _onPressHandler() {
    this.loadingButton.showLoading(true);

    // mock
    setTimeout(() => {
      this.loadingButton.showLoading(false);
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)', justifyContent: 'center' }}>
        <AnimateLoadingButton
          ref={c => (this.loadingButton = c)}
          width={300}
          height={50}
          title="BUTTON"
          titleFontSize={16}
          titleColor="rgb(255,255,255)"
          backgroundColor="rgb(29,18,121)"
          borderRadius={4}
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
| onPress                | Button onPress callback  | Function | Yes      |
| customStyles           | styles to customize the button | Object   | No       |

## Author

[Anderson Costa](http://linkedin.com/in/andcosta)

## License

MIT
