import React from 'react'
import storiesOfComponentStates from 'src/test/helpers/storiesOfComponentStates'
import * as states from './componentStates'
import Login from '..'

storiesOfComponentStates(
  'containers/App/Auth/Login',
  states,
  module
)
