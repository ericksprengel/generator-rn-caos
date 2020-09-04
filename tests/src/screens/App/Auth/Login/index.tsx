import React, { useEffect, useState } from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import * as R from 'ramda'
import routes from 'src/navigation/routes'
import { log } from 'src/utils/native_modules'
import useForm from 'src/utils/hooks/useForm'
import validators from 'src/utils/validators'
import { NetworkError } from 'src/servicesTon/request'
import LoginContainer, {
  FormInputStatus,
  States,
} from 'src/containers/App/Auth/Login'

const LOG_TAG = 'App/Auth/Login'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavigationParams {}

export interface LoginScreenProps {
  navigation: NavigationStackProp<NavigationParams>
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [state, setState] = useState(States.default)
  const [name, setName] = useState('')
  const { formData, formErrors, onChangeFormInput, isFormValid } = useForm({
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

  const handleFetch = async (): Promise<void> => {
    log.i(LOG_TAG, 'onHandleFetch')
    log.e(LOG_TAG, 'TODO: Login/handleFetch NOT IMPLEMENTED')

    setState(States.loading)

    try {
      await Promise.resolve()
      setState(States.default)
    } catch (err) {
      const errorState = err instanceof NetworkError
        ? States.networkError
        : States.genericError
      setState(errorState)
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  const handleOnLogin = (): void => {
    log.i(LOG_TAG, 'onLogin')
    log.e(LOG_TAG, 'TODO: Login/onLogin NOT IMPLEMENTED')
    if (isFormValid() || !isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  const handleOnBack = (): void => {
    log.i(LOG_TAG, 'onBack')
    log.e(LOG_TAG, 'TODO: Login/onBack NOT IMPLEMENTED')
    if (isFormValid() || !isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  const handleOnForgotPassword = (): void => {
    log.i(LOG_TAG, 'onForgotPassword')
    log.e(LOG_TAG, 'TODO: Login/onForgotPassword NOT IMPLEMENTED')
    if (isFormValid() || !isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

  return (
    <LoginContainer
      state={state}
      name={name}
      email={formData.email}
      emailStatus={
        formErrors.email ? FormInputStatus.error : FormInputStatus.default
      }
      emailMessage={formErrors.email ? formErrors.email[0] : undefined}
      onChangeEmail={onChangeFormInput('email')}
      password={formData.password}
      passwordStatus={
        formErrors.password ? FormInputStatus.error : FormInputStatus.default
      }
      passwordMessage={formErrors.password ? formErrors.password[0] : undefined}
      onChangePassword={onChangeFormInput('password')}
      onLogin={handleOnLogin}
      onBack={handleOnBack}
      onForgotPassword={handleOnForgotPassword}
    />
  )
}

export default LoginScreen
