import React, { useState, useEffect } from 'react'
import * as R from 'ramda'

import { NavigationStackProp } from 'react-navigation-stack'

import { NetworkError } from 'src/servicesTon/request'
import { log } from 'src/utils/native_modules'
import routes from 'src/navigation/routes'
import useForm from 'src/utils/hooks/useForm'
import validators from 'src/utils/validators'

import {
  <%= screenName %>Container,
  FormInputStatus,
  States,
} from 'src/features/<%= featureName %>/screens/<%= screenName %>/ui'

const LOG_TAG = '<%= featureName %>/<%= screenName %>'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavigationParams {}

export interface <%= screenName %>ScreenProps {
  navigation: NavigationStackProp<NavigationParams>
}

export const <%= screenName %>Screen: React.FC<<%= screenName %>ScreenProps> = ({ navigation }) => {
  const [state, setState] = useState(States.<%= states[0] %>)
<% for (const uiParam of uiParams) { -%>
  const [<%- uiParam -%>, set<%- helpers.toUpperCaseFirstLetter(uiParam) -%>] = useState('')
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
    log.e(LOG_TAG, 'TODO: <%= screenName %>/handleFetch NOT IMPLEMENTED')

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
    log.e(LOG_TAG, 'TODO: <%= screenName %>/<%= action %> NOT IMPLEMENTED')
    
    if (isFormValid() || !isFormValid()) {
      navigation.navigate(routes.App.itself)
    }
  }

<% } -%>

  return (
    <<%= screenName %>Container
      state={state}
<% for (const uiParam of uiParams) { -%>
      <%- uiParam -%>={<%- uiParam -%>}
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
