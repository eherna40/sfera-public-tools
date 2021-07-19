import React from 'react'
import PropTypes from 'prop-types'
import { ColorOption, EditBox } from './styles'
import IcEdit from '../Icons/IcEdit'
import IcUserActive from '../Icons/IcUserActive'
import Paragraphs from '../Paragraphs/Paragraphs'

const PaletteSelect = ({
  paletteName,
  id,
  name,
  primary,
  secondary,
  onClickEdit,
  tertiary,
  selected,
  onClickAction,
  reference,
}) => {
  const border = selected === id ? 'tw-border-primary' : 'tw-border-transparent'

  return (
    <div
      onClick={() => onClickAction(id)}
      className={`${border} tw-flex tw-relative tw-flex-col tw-p-2 tw-my-4 tw-border-2 tw-box-border`}
      // TODO QUICK FIX
      onKeyPress={() => null}
    >
      {selected === id && (
        <EditBox
          onClick={onClickEdit}
          className="tw-bg-primary tw-flex tw-justify-center tw-items-center"
        >
          <div className="tw-w-4 tw-h-4 tw-bg-white tw-rounded-full tw-flex tw-justify-center tw-items-center">
            {onClickEdit ? (
              <IcEdit size="10" color="black" />
            ) : (
              <IcUserActive checkColor="black" color="#fff" />
            )}
          </div>
        </EditBox>
      )}
      {paletteName && (
        <Paragraphs className="tw-text-gray-400" italic>
          {paletteName}
        </Paragraphs>
      )}
      <input ref={reference} name={name} type="hidden" value={paletteName} />
      <div className="tw-flex">
        {primary && <ColorOption size={30} color={primary}></ColorOption>}
        {secondary && <ColorOption size={30} color={secondary}></ColorOption>}
        {tertiary && <ColorOption size={30} color={tertiary}></ColorOption>}
      </div>
    </div>
  )
}

PaletteSelect.propTypes = {
  onClickAction: PropTypes.func,
  // title: PropTypes.string,
  name: PropTypes.string,
  // value: PropTypes.string,
  reference: PropTypes.object,
}

PaletteSelect.defaultProps = {
  onClickAction: () => {},
  name: 'themeSelect',
}

export default PaletteSelect
