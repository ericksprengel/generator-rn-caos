import React, { useEffect, useState } from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import * as R from 'ramda'
import routes from 'src/navigation/routes'
import { log } from 'src/utils/native_modules'
import useForm from 'src/utils/hooks/useForm'
import validators from 'src/utils/validators'
import { NetworkError } from 'src/servicesTon/request'
import <%= componentName %>Container, {
  FormInputStatus,
  States,
} from 'src/containers/<%= componentPath %>/<%= componentName %>'

const LOG_TAG = '<%= componentPath %>/<%= componentName %>'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavigationParams {}

export interface <%= componentName %>ScreenProps {
  navigation: NavigationStackProp<NavigationParams>
}

const <%= componentName %>Screen: React.FC<<%= componentName %>ScreenProps> = ({ navigation }) => {
  const [state, setState] = useState(States.<%= states[0] %>)
<% for (const containerParam of containerParams) { -%>
  const [<%- containerParam -%>, set<%- helpers.toUpperCaseFirstLetter(containerParam) -%>] = useState('')
<% } -%>
  const { formData, formErrors, onChangeFormInput, isFormValid } = useForm({
    initialData: {
<% for (const input of inputs) { -%>
      <%- input -%>: '',
<% } -%>
    },
    validators: {
<% for (const input of inputs) { -%>
      <%- input -%>: [validators.required],
<% } -%>
    },
    formatters: {
<% for (const input of inputs) { -%>
      <%- input -%>: R.identity,
<% } -%>
    },
    initialErrors: {
<% for (const input of inputs) { -%>
      <%- input -%>: null,
<% } -%>
    },
  })

  const handleFetch = async (): Promise<void> => {
    log.i(LOG_TAG, 'onHandleFetch')
    log.e(LOG_TAG, 'TODO: <%= componentName %>/handleFetch NOT IMPLEMENTED')

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

<% for (const action of actions) { -%>
  const <%= helpers.getHandleActionName(action) %> = (): void => {
    log.i(LOG_TAG, '<%= action %>')
    log.e(LOG_TAG, 'TODO: <%= componentName %>/<%= action %> NOT IMPLEMENTED')
    if (isFormValid() || !isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

<% } -%>
  return (
    <<%= componentName %>Container
      state={state}
<% for (const containerParam of containerParams) { -%>
      <%- containerParam -%>={<%- containerParam -%>}
<% } -%>
<% for (const input of inputs) { -%>
      <%- input -%>={formData.<%- input -%>}
      <%- input -%>Status={
        formErrors.<%- input -%> ? FormInputStatus.error : FormInputStatus.default
      }
      <%- input -%>Message={formErrors.<%- input -%> ? formErrors.<%- input -%>[0] : undefined}
      <%= helpers.getInputCallbackName(input) %>={onChangeFormInput('<%= input %>')}
<% } -%>
<% for (const action of actions) { -%>
      <%= action %>={<%= helpers.getHandleActionName(action) %>}
<% } -%>
    />
  )
}

export default <%= componentName %>Screen
