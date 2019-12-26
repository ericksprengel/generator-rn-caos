import React from 'react'
import {
  View,
} from 'react-native'
import {
  Text, FormInput,
} from 'jadd-components'
import {
  Button,
} from 'jadd-components/components/future'
import PropTypes from 'prop-types'
import styles from './styles'

const Login = ({
  email,
  emailStatus,
  emailMessage,
  onChangeEmail,
  password,
  passwordStatus,
  passwordMessage,
  onChangePassword,
  onLogin,
  onBack,
  onForgotPassword,
}) => (
  <View style={styles.container}>
    <Text>Login</Text>
    <FormInput
      onChangeText={onChangeEmail}
      value={email}
      type="default"
      status={emailStatus}
      message={emailMessage}
      placeholder="email"
      label="email"
    />
    <FormInput
      onChangeText={onChangePassword}
      value={password}
      type="default"
      status={passwordStatus}
      message={passwordMessage}
      placeholder="password"
      label="password"
    />
    <Button
      title="onLogin"
      style={styles.button}
      onPress={onLogin}
    />
    <Button
      title="onBack"
      style={styles.button}
      onPress={onBack}
    />
    <Button
      title="onForgotPassword"
      style={styles.button}
      onPress={onForgotPassword}
    />
  </View>
)

Login.defaultProps = {
  email: '',
  emailStatus: 'default',
  emailMessage: '',
  password: '',
  passwordStatus: 'default',
  passwordMessage: '',
}

Login.propTypes = {
  email: PropTypes.string,
  emailStatus: FormInput.propTypes.status,
  emailMessage: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  password: PropTypes.string,
  passwordStatus: FormInput.propTypes.status,
  passwordMessage: PropTypes.string,
  onChangePassword: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
}

export default Login
