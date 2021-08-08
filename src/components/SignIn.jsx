import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const styles = StyleSheet.create({
  formBox: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    borderRadius: 5
  },
  input: {
    margin: 10, 
    fontSize: theme.fontSizes.heading
  },
  signInButton: {
    margin: 20, 
    textAlign: 'center',
    color: theme.colors.appBar    
  },
  signInButtonContainer: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    borderRadius: 5
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <View style={styles.formBox}>
      <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
      </View>
      <View style={styles.formBox}>
      <FormikTextInput name="password" placeholder="Password" style={styles.input} secureTextEntry />
      </View>
      <Pressable onPress={onSubmit} style={styles.signInButtonContainer}><Text fontSize='heading' style={styles.signInButton}>Sign in</Text></Pressable>
    </View>
    );
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => console.log('submitted')} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;