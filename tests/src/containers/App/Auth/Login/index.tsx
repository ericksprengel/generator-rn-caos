import React from 'react'
import { View } from 'react-native'
import { FormInput } from 'jadd-components'
import { Button, Text } from 'src/components'
import styles from './styles'

export enum FormInputStatus {
  default = 'default',
  success = 'success',
  error = 'error',
}

export enum State {
  default = 'default',
  loading = 'loading',
  error = 'error',
}

export interface LoginProps {
  state: State
  email?: string
  emailStatus?: FormInputStatus
  emailMessage?: string
  onChangeEmail: (email: string) => void
  password?: string
  passwordStatus?: FormInputStatus
  passwordMessage?: string
  onChangePassword: (password: string) => void
  onLogin: () => void
  onBack: () => void
  onForgotPassword: () => void
}

const Login: React.FC<LoginProps> = ({
  state,
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
}: LoginProps) => (
  <View style={styles.container}>
    <Text>Login</Text>
    <Text>State: {state}</Text>
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
      loading={state === State.loading}
      onPress={onLogin}
    />
    <Button
      title="onBack"
      style={styles.button}
      loading={state === State.loading}
      onPress={onBack}
    />
    <Button
      title="onForgotPassword"
      style={styles.button}
      loading={state === State.loading}
      onPress={onForgotPassword}
    />
  </View>
)

export default Login
