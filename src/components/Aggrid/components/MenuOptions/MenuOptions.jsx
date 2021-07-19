import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IcEllipsis from '../../../commons/Icons/IcEllipsis'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import Options from './Options/Options'

const MenuOptions = ({ agGridReact, api, value }) => {
  const [open, setOpen] = useState(false)
  if (!agGridReact.props.options) {
    return null
  }
  const onClose = () => {
    setOpen(false)
  }

  const row = api.getSelectedRows()
  return (
    <div className="tw-relative tw-h-full">
      {open && (
        <Options
          options={agGridReact.props.options}
          row={row}
          onClose={onClose}
        />
      )}
      <div
        className="Menu-Options tw-cursor-pointer tw-flex tw-h-full tw-items-center"
        onClick={() => setOpen(true)}
        aria-hidden
      >
        <div className="tw-flex tw-items-center tw-gap-2 tw-h-full">
          {value && (
            <div className="icon-ellipsis tw-flex tw-items-center tw-justify-center tw-w-4 tw-h-full">
              <IcEllipsis />
            </div>
          )}

          <Paragraphs>{value}</Paragraphs>
        </div>
      </div>
    </div>
  )
}

MenuOptions.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  agGridReact: PropTypes.object,
  api: PropTypes.object,
}

MenuOptions.defaultProps = {
  agGridReact: {
    props: { options: [] },
  },
}

export default MenuOptions
