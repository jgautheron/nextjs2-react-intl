import { FormattedMessage } from 'react-intl'
import withStore from '../lib/withStore'

export default withStore(() => (
  <div>
    <h1>Page /foo</h1>
    <p><FormattedMessage id='hello' /></p>
  </div>
))
