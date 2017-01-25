import React from 'react'
import { Provider } from 'react-redux'
import acceptLanguage from 'accept-language'

import { initStore } from '../redux/store'
import IntlWrapper from '../components/IntlWrapper'
import { enabledLanguages } from '../intl/setup'
import { switchLanguage } from '../redux/intl/actions'

acceptLanguage.languages(enabledLanguages)

export default Component => (
  class extends React.Component {

    static async getInitialProps(ctx) {
      const isServer = !!ctx.req
      const store = initStore({}, true)
      return { initialState: store.getState(), isServer }
    }

    constructor(props) {
      super(props)
      this.store = initStore(props.initialState, props.isServer)
    }

    render() {
      return (
        <Provider store={this.store}>
          <IntlWrapper>
            <Component url={this.props.url} />
          </IntlWrapper>
        </Provider>
      )
    }
  }
)
