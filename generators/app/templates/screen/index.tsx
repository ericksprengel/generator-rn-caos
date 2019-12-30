import React, { Component } from 'react'
import { NavigationStackProp } from 'react-navigation-stack'
import routes from 'src/navigation/routes'
import { log } from 'src/utils/native_modules'
import <%= componentName %>Container from 'src/containers/<%= componentPath %>/<%= componentName %>'

const LOG_TAG = '<%= componentPath %>/<%= componentName %>'

export interface Props {
  navigation: NavigationStackProp;
}

class <%= componentName %>Screen extends Component<Props> {
  state = {
<% for (const input of inputs) { -%>
    <%- input -%>: '',
    <%- input -%>Status: 'default',
    <%- input -%>Message: '',
<% } -%>
  }

<% for (const input of inputs) { -%>
  <%= helpers.getInputCallbackName(input) %> = (<%= input %>): void => {
    log.e(LOG_TAG, 'TODO: <%= componentName %>/<%= input %> NOT IMPLEMENTED')
    this.setState({
      <%= input %>,
    })
  }

<% } -%>

<% for (const action of actions) { -%>
  <%= helpers.getHandleActionName(action) %> = (): void => {
    log.e(LOG_TAG, 'TODO: <%= componentName %>/<%= action %> NOT IMPLEMENTED')
  }

<% } -%>
  render (): React.ReactNode {
    const {
<% for (const input of inputs) { -%>
      <%- input -%>,
      <%- input -%>Status,
      <%- input -%>Message,
<% } -%>
    } = this.state
    return (
      <<%= componentName %>Container
<% for (const input of inputs) { -%>
        <%- input -%>={<%- input -%>}
        <%- input -%>Status={<%- input -%>Status}
        <%- input -%>Message={<%- input -%>Message}
        <%= helpers.getInputCallbackName(input) %>={this.<%= helpers.getInputCallbackName(input) %>}
<% } -%>
<% for (const action of actions) { -%>
        <%= action %>={this.<%= helpers.getHandleActionName(action) %>}
<% } -%>
      />
    )
  }
}

export default <%= componentName %>Screen
