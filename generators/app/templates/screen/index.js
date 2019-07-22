import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavigationProp } from 'react-navigation'
import { log } from 'src/utils/native_modules'
import <%= componentName %>Container from 'src/containers/<%= componentPath %>/<%= componentName %>'

const LOG_TAG = '<%= componentPath %>/<%= componentName %>'

class <%= componentName %>Screen extends Component {
<% for (const action of actions) { -%>
  <%= helpers.getHandleActionName(action) %> = () => {
    log.e(LOG_TAG, 'TODO: <%= componentName %>/<%= action %> NOT IMPLEMENTED')
  }

<% } -%>
  render () {
    return (
      <<%= componentName %>Container
<% for (const action of actions) { -%>
        <%= action %>={this.<%= helpers.getHandleActionName(action) %>}
<% } -%>
      />
    )
  }
}

<%= componentName %>Screen.propTypes = {
  navigation: PropTypes.shape(NavigationProp).isRequired,
}

export default <%= componentName %>Screen
