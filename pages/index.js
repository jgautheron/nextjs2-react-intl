import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import withStore from '../lib/withStore'

export default withStore(() => (
  <div>
    <Link href='/foo'><a>Foo</a></Link>
    <h1>Home /</h1>
    <p><FormattedMessage id='hello' /></p>
  </div>
))
