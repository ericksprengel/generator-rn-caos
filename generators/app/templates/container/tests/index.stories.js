import storiesOfComponentStates from 'src/test/helpers/storiesOfComponentStates'
import * as states from './componentStates'

storiesOfComponentStates(
  'containers/<%= componentPath %>/<%= componentName %>',
  states,
  module
)
