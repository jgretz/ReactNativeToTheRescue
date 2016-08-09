## Slide 1
Welcome

## Slide 2
Sponsors

## Slide 3
Bio

* talk about how you've given an iOS talk and a ruby cross platform talk here before

## Slide 4
Truefit hiring - yay Pittsburgh ()

## Slide 5
Tell em what you are going to tell them

## Slide 6
* Yes, its the king in the book - :P
* Talk about the ideal - getting the dream to become a reality
* Explain where Truefit fits in and why you have credibility

## Slide 7
* TF Architects
* Explain Sales vs Implementation

## Slide 8
* Development - WET code
* Development - Maintenance Time
* Design - Supporting multiple resolutions, want quality
* Design - Training Cost
* Business - Cost
* Business - Risk
* Business - Training Cost

## Slide 9
Acknowledge other attempts at a solution (be nice, but honest)

* Ruby Motion
* Xamarin - death
* Ionic
* PhoneGap
* Icenium

## Slide 10
React Native History

* Based on React
* Explain high level react dom vs native - more later
* Announced early in 2015, android support came around september 2015
* Came into is own April-ish this year
* Still some rough edges, but amazingly stable

## Slide 11
Others Opinions

## Slide 12
Getting started

## Slide 13
Editors

## Slide 14,15
Project Setup

* Discuss CLI
* react-native init <Project name>
  * Can take a while (like 5 or more minutes)

## Slide 16
### Demo - demo-start

#### Step 1
* Show resulting files
* react-native run-ios
* react-native run-android

#### Step 2
* Discuss npm start, the file host and how it all works together

* show running out of XCode
* show running out of Android Studio
  * Comment on the nicety of gradle tools here vs manual debugging
  * Comment on GenyMotion

----------------

## Slide 17
* How does the code get onto the device - what is happening?
* Native controls

## Slide 18
* 2 threads
* First cringe, but its amazingly fast (facebook's resources)

## Slide 19
* Lets dive in
* I'm a developer, its the foundation, lets start there

## Slide 20
ES6

## Slide 21
* Talk through ES6 syntax

## Slide 22
### Demo - Demo-2

#### Step 1
* Show index.ios.js
* Show index.android.js
* Discuss how we bring them together
  * create src directory
  * create host.js
  * copy over code
  * clean up
  * add platform & renderGetStartedText
  ```
  renderGetStartedText() {
    switch (Platform.OS) {
      case 'ios':
        return 'IOS';

      case 'android':
        return 'Android';

      default:
        return 'Who are you?';
    }
  }
  ```  
  * export default class  
  * call from ios & android
  ```
  import Host from './src/host';
  import { AppRegistry } from 'react-native';

  AppRegistry.registerComponent('ToDo', () => Host);
  ```

* show Debugger
  * cmd-m on android

## Slide 23
JSX - Sample

## Slide 24
JSX - Meme

## Slide 25
JSX - Good points

## Slide 26
Interface Builders

## Slide 27
### Demo - demo-3

### Step 1
* Show JSX - manipulate it a bit
* Explain imports
* Explain styling (FlexBox)

### Step 2
* Set state with an array of colors and a bgColorIndex
```
this.state = {
  colors: [ '#ff0000', '#00ff00', '#0000ff' ],
  bgColorIndex: 0
};
```

* Add set interval to change bgColorIndex (use js that you know)
```
setInterval(() => {
  let newIndex = this.state.bgColorIndex + 1;
  if (newIndex >= this.state.colors.length) {
    newIndex = 0;
  }

  this.setState({ bgColorIndex: newIndex })
}, 1000);
```

* Set Background color in render (descriptive)
```
const bgColor = { backgroundColor: this.state.colors[this.state.bgColorIndex] };
```

* Create .eslintrc file
```
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "react-native"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true,
    "mocha": true
  },
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "globals": {
    __DEV__,
  }
}
```
* quit / reopen - show & correct all the errors that now get created

## Slide 28
HMR

* Corey House codemash story - KILLER feature
* Relatively new to React native, stable around April 2016
* Allows design and development to collaborate quickly, reduce risk

## Slide 29
HMR Diagram - file system

## Slide 30
HMR Diagram - In Memory
* Maintains state while re-applying code (calls render after code is hotswapped)

## Slide 31
### Demo - demo-4
* enable hot reload from dev menu
* change the refresh time - explain again that a constructor wouldnt be called because of how HMR works
* change text

* Talk about how HMR is a live connect
  * Can't have iOS and Android both connected to HMR service point
  * Demo switch back and forth

-------------------

## Slide 32
Mental Clarity
Webster defines mental health as an appropriate balance of love, work, and leisure pursuits

Our code contributes to this and adheres to this

## Slide 33
Talk about clear code and why it matters

* Look at this code from js
* Look at this code from python (will hit the else because of type equality)

## Slide 34
Simplify until needed, be intentional about added complexity

## Slide 35
### Demo - demo-5
show demo app todo list

### Demo - demo-6

### Step 1
* Talk about what we are doing now (to do list)
* Talk about breaking this view into its parts

* Add controls directory and index
  * talk about export from here and why

* Extract Button
  * talk about why we are exporting const and not default
  * talk about how we pass things in (onPress and text)
  * talk about PropTypes
```
import React, { PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 22.5,
    width: 220,
    height: 45,
    marginBottom: 12,
  },
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
  },
});

export const Button = props =>
  <TouchableHighlight style={styles.button} onPress={props.onPress}>
    <View style={styles.contentView}>
      <Text style={styles.buttonText}>
        {props.children}
      </Text>
    </View>
  </TouchableHighlight>;

Button.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func,
};
```

* Extract input
```
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export const Input = () =>
  <TextInput style={styles.input} />;
```
* Extract itemlist
```
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

export const ItemList = props =>
  <View>
    {
      props.items.map((item, index) =>
        <Text key={index}>
          {item.title}
        </Text>
      )
    }
  </View>;

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};
```
* Simplify host

## Slide 36
Unidirectional data flow - Flux

* Mention immutability
* Mention Redux
* Talk about why its simpler - and mention nightmares of two-way databinding

## Slide 37
Flux flow

## Slide 38
Flux flow part 2

## Slide 39
### DEMO - demo-7

* Add inputText to state
```
inputText: '',
```

* Map to input text
  * Add propTypes for text property
  * Add padding now that we see the text (not HMR again)
  * Add onChangeText - talk about Unidirectional flow again
    * In input
      ```
      import React, { PropTypes } from 'react';
      import { StyleSheet, TextInput } from 'react-native';

      const styles = StyleSheet.create({
        input: {
          margin: 20,
          height: 50,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
        },
      });

      export const Input = props =>
        <TextInput style={styles.input} value={props.text} onChangeText={props.onChangeText} />;

      Input.propTypes = {
        text: PropTypes.string.isRequired,
        onChangeText: PropTypes.func.isRequired,
      };
      ```

    * In Host
      * start as () {} syntax first
      * note { property } syntax
      ```
      onInputChangeText = (inputText) => {
        this.setState({ inputText });
      }
      ```
    * show error, explain whats happening and show .bind or = () => syntax

* Add button press handler
  * note ...
  * note reset of text
```
onButtonPress = () => {
  this.setState({
    items: [
      ...this.state.items,
      { title: this.state.inputText },
    ],
    inputText: '',
  });
}
```

## Slide 40
Redux
Redux Form
Redux Observable

-------------------

## Slide 41
Cross platform - oh yeah that :)
* So we have already seen shared code
* show current state running in both

## Slide 42
Cover all the ways you can support cross platform

## Slide 43
### Demo - demo-end

#### Step 1 - Show Platform again
* prepend platform on input
  * note string interpolation
  ```
  { title: `${Platform.OS}: ${this.state.inputText}` },
  ```

#### Step 2 - Show Split files
* add button.android.js
* Invert Colors on android button

-------------------

## Slide 44
Not all unicorns and rainbows

## Slide 45
Styling

## Slide 46
Device support

* NPM packages of varying quality
* Decent low level access via NativeMethods, but then you have to maintain code

## Slide 47
Upgrades are painful

-------------------

## Slide 48
That said, its worth the couple of downsides for the reasons we've discussed

One more thing - a couple of tools that
can make you faster and better looking like me ;)

## Slide 49
BuddyBuild

## Slide 50
CodePush

## Slide 51
Pepperoni

-------------------

## Slide 52
Recap - how awesome :)

## Slide 53
Thank you

## Slide 54
Next Year
