import { StyleSheet } from 'react-native'

import { PADDING } from 'src/utils/styles/globalStyleConstants'
import { scale } from 'src/styleguide/v5/scaling'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: scale(PADDING),
  },
  input: {
    margin: scale(10),
  },
  button: {
    margin: scale(10),
  },
})

export default styles
