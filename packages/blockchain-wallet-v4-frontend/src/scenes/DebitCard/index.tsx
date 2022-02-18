import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators, Dispatch } from 'redux'

import { actions } from 'data'

import DebitCard from './template'

const DebitCardContainer = (props: Props) => <DebitCard {...props} />

const mapDispatchToProps = (dispatch: Dispatch) => ({
  modalActions: bindActionCreators(actions.modals, dispatch)
})

const connector = connect(undefined, mapDispatchToProps)

export type Props = ConnectedProps<typeof connector>

export default withRouter(connector(DebitCardContainer))
