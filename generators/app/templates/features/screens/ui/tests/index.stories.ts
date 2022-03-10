import storiesOfComponentStates from 'src/test/helpers/storiesOfComponentStates'
import * as states from './componentStates'

storiesOfComponentStates(
  'features/<%= featureName %>/<%= screenName %>',
  states,
  module,
)
