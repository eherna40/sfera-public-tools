import React from 'react'
import PropTypes from 'prop-types'
import FormGeneral from './components/FormGeneral/FormGeneral'
import FormPrices from './components/FormPrices/FormPrices'
import PharmaData from './components/PharmaData/PharmaData'
import ActivePrinciples from './components/ActivePrinciples/ActivePrinciples'

const MainTab = ({ product, selectMainTab }) => (
  <div className="tw-flex tw-flex-col">
    {selectMainTab === 1 && (
      <div className="tw-m-2">
        <FormGeneral product={product} />
      </div>
    )}
    {selectMainTab === 2 && (
      <div className="tw-m-2">
        <FormPrices product={product} />
      </div>
    )}
    {selectMainTab === 3 && (
      <div className="tw-m-2">
        <PharmaData product={product} />
      </div>
    )}
    {selectMainTab === 4 && (
      <div className="tw-m-2">
        <ActivePrinciples product={product} />
      </div>
    )}
  </div>
)

MainTab.propTypes = {
  product: PropTypes.object,
  selectMainTab: PropTypes.number,
}

MainTab.defaultProps = {
  product: {},
  selectMainTab: 1,
}

export default MainTab
