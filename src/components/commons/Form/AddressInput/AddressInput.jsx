import React from 'react'
import PropTypes from 'prop-types'
import { DistanceInfo, Input } from './styles'
import icMap from '../../../../assets/img/ic_icons/ic_map_client_location.svg'
import Paragraphs from '../../Paragraphs/Paragraphs'

const AddressInput = ({ reference, onClickAdress, name, required }) => (
  <div>
    <label
      htmlFor="adress"
      className="tw-flex tw-flex-col tw-items-start tw-relative"
    >
      <Paragraphs size="xs" weight="bold" className="tw-mb-1">
        Dirección
        {required && <span className="tw-text-alert">*</span>}
      </Paragraphs>

      <Input
        id="adress"
        type="text"
        className="tw-p-4 tw-bg-secondary tw-bg-opacity-10 tw-outline-none tw-w-full"
        ref={reference}
        name={name}
      />
      <DistanceInfo
        className="tw-flex tw-items-end tw-gap-1 tw-absolute tw-self-end"
        onClick={onClickAdress}
      >
        <Paragraphs weight="bold" size="xs" className="tw-text-primary">
          a 10,5 km
        </Paragraphs>
        <div className="tw-h-full">
          <img src={icMap} alt="map-icon" />
        </div>
      </DistanceInfo>
    </label>
  </div>
)

AddressInput.propTypes = {
  reference: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  required: PropTypes.bool,
}

export default AddressInput
