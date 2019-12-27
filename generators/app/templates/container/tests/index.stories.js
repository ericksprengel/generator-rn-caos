import React from 'react'
import storiesOfComponentStates from 'src/test/helpers/storiesOfComponentStates'
import * as states from './componentStates'
import <%= componentName %> from '..'

storiesOfComponentStates(
  'containers/<%= componentPath %>/<%= componentName %>',
  states,
  module
)
