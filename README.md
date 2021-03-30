### @weedx/react-native-code-input

------

A <Input> component for react-native

Needs React Native Version above than 0.59

#### Installation

------

Using npm:

```
npm install --save @weedx/react-native-code-input
```

or using yarn:

```
yarn add @weedx/react-native-code-input
```

#### Usage

------

```javascript
import CodeInput from '@weedx/react-native-code-input';
<CodeInput
  length={6}
  onValueChanged={(value) => {
    if (value.length === 6) {
      console.log('输入完成')
    }
  }}
/>
```

##### Configurable props

- length
- onValueChanged

##### Methods

- clear
