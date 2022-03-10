import storiesOfComponentStates from 'src/test/helpers/storiesOfComponentStates'
import * as states from './componentStates'

storiesOfComponentStates(
  'features/Auth/Login',
  states,
  module,
)
