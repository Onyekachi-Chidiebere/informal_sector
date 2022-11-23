import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../appTheme';
const Input = ({
  label,
  placeholder,
  handleChange,
  editable,
  name,
  value,
  secureTextEntry,
  keyboardType,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        editable={editable}
        secureTextEntry={secureTextEntry}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        style={focused ? styles.focused : styles.input}
        onChangeText={text => handleChange(name, text)}
        keyboardType={keyboardType}
      />
    </View>
  );
};
export const Select = ({
  label,
  placeholder,
  name,
  value,
  data,
  editable,
  handleSelect,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => (editable ? setFocused(true) : null)}
        style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          value={value}
          editable={false}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
          style={styles.input}
          placeholder={placeholder}
        />
      </Pressable>
      {focused && (
        <View style={styles.popupContainer}>
          <View>
            {data.map((item, index) => (
              <Text
                onPress={() => {
                  handleSelect(item);
                  setFocused(false);
                }}
                style={styles.popupContainerSelect}
                key={index}>
                {item[name]}
              </Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  popupContainerSelect: {
    padding: 10,
    width: '100%',
    color: colors.darkText,
  },
  popupContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 55,
    backgroundColor: 'white',
    width: '100%',
  },
  container: {width: '100%'},
  label: {
    color:'black',
    position: 'absolute',
    top: -10,
    left: 5,
    backgroundColor: colors.background,
    zIndex: 2,
  },
  focused: {
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderRadius: 4,
  },
  input: {
    elevation: 2,
    borderColor: colors.background,
    borderWidth: 1,
    backgroundColor: colors.background,
    borderRadius: 4,
    color: colors.darkText,
  },
});