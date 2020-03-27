import React from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import * as R from 'ramda'
import routes from 'src/navigation/routes'
import { log } from 'src/utils/native_modules'
import LoginContainer from 'src/containers/App/Auth/Login'
import useForm from 'src/utils/hooks/useForm'
import validators from 'src/utils/validators'

const LOG_TAG = 'App/Auth/Login'

export interface NavigationParams {
}

export interface LoginScreenProps {
  navigation: NavigationStackProp<NavigationParams>;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const {
    formData, formErrors, onChangeFormInput, isFormValid
  } = useForm({
    initialData: {
      email: '',
      password: '',
    },
    validators: {
      email: [validators.required],
      password: [validators.required],
    },
    formatters: {
      email: R.identity,
      password: R.identity,
    },
    initialErrors: {
      email: null,
      password: null,
    },
  })

  const handleOnLogin = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onLogin NOT IMPLEMENTED')
    if (isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  const handleOnBack = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onBack NOT IMPLEMENTED')
    if (isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  const handleOnForgotPassword = (): void => {
    log.e(LOG_TAG, 'TODO: Login/onForgotPassword NOT IMPLEMENTED')
    if (isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  return (
    <LoginContainer
      email={formData.email}
      emailStatus={formErrors.email ? 'error' : 'default'}
      emailMessage={formErrors.email && formErrors.email[0]}
      onChangeEmail={onChangeFormInput('email')}
      password={formData.password}
      passwordStatus={formErrors.password ? 'error' : 'default'}
      passwordMessage={formErrors.password && formErrors.password[0]}
      onChangePassword={onChangeFormInput('password')}
      onLogin={handleOnLogin}
      onBack={handleOnBack}
      onForgotPassword={handleOnForgotPassword}
    />
  )
}

export default LoginScreen
