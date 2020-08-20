import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { FormInput } from 'jadd-components'
import { Button, Header, Text } from 'src/components'
import Error, { Errors } from 'src/containers/common/Error'
import States from 'src/containers/common/states'
import styles from './styles'

export { States } 

export enum FormInputStatus {
  default = 'default',
  success = 'success',
  error = 'error',
}

export interface LoginProps {
  state: States
  name?: string
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
  name,
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
}) => {
  const content = (
    <View style={styles.container}>
    <Text>Login</Text>
    <Text>State: {state}</Text>
    <Text>name: {name}</Text>
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
      disabled={state === States.loading}
      loading={state === States.loading}
      onPress={onLogin}
      />
  <Button
      title="onBack"
      style={styles.button}
      disabled={state === States.loading}
      loading={state === States.loading}
      onPress={onBack}
      />
  <Button
      title="onForgotPassword"
      style={styles.button}
      disabled={state === States.loading}
      loading={state === States.loading}
      onPress={onForgotPassword}
      />
      </View>
  )

  const networkError = <Error error={Errors.networkError} />
  const genericError = <Error error={Errors.genericError} />

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Header Title" />
      {
        {
          [States.default]: content,
          [States.loading]: content,
          [States.networkError]: networkError,
          [States.genericError]: genericError,
        }[state]
      }
    </SafeAreaView>
  )
}

export default Login
