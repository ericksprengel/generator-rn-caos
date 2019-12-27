import React from 'react'
import {
  View,
} from 'react-native'
import {
  Text, FormInput,
} from 'jadd-components'
import {
  Text,
} 'src/components'
import {
  Button,
} from 'jadd-components/components/future'
import styles from './styles'

export interface Props {
  email?: string;
  emailStatus?: 'default' | 'success' | 'error';
  emailMessage?: string;
  onChangeEmail: (email: string) => void;
  password?: string;
  passwordStatus?: 'default' | 'success' | 'error';
  passwordMessage?: string;
  onChangePassword: (password: string) => void;
  onLogin: () => void;
  onBack: () => void;
  onForgotPassword: () => void;
}

const Login: React.FC<Props> = ({
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
}: Props) => (
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

export default Login
