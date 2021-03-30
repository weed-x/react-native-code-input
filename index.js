import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from 'react-native';

export default forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setText('');
    },
  }));

  const focus = () => {
    inputRef.current.focus();
  };

  const numberItem = () => {
    let items = [];
    let i = 0;
    while (i < parseInt(props.length, 10)) {
      items.push(
        <View key={i} style={[styles.numItem]}>
          <Text>{i < text.length ? text.substring(i, i + 1) : ''}</Text>
          <View style={styles.bottomLine} />
        </View>,
      );
      i++;
    }
    return items;
  };

  return (
    <TouchableOpacity onPress={focus} activeOpacity={1}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.inputStyle}
          ref={inputRef}
          maxLength={props.length}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={val => {
            setText(val);
            props.onValueChanged(val);
          }}
        />
        {numberItem()}
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  inputStyle: {
    height: 50,
    zIndex: 99,
    position: 'absolute',
    width: '100%',
    opacity: 0,
  },
  numItem: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#333',
    height: 1,
    width: '80%',
    alignSelf: 'center',
  },
});
