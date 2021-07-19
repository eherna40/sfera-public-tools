import React from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../Modal/Draggable/Draggable'
import Footer from '../../Modal/Draggable/Footer/Footer'
import Paragraphs from '../../commons/Paragraphs/Paragraphs'
import fakeMaps from '../../../assets/img/ic_icons/ic_fake_maps.svg'

const ModalLocation = ({ toggle, loading }) => (
  <Draggable
    toggle={toggle}
    footerComponent={() => null}
    title="MAPA LOCALIZACIÓN CLIENTE"
  >
    <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
      <div style={{ height: 180 }}>
        <img src={fakeMaps} alt="maps" />
      </div>
      <div className="tw-flex tw-items-center tw-justify-between">
        <div>
          <Paragraphs className="tw-text-primary" size="xs" weight="bold">
            a 10,5 km
          </Paragraphs>
          <Paragraphs size="xs" className="tw-leading-5">
            Gran Via de les Corts Catalanes, 272 3º2ª <br />
            O8004 Barcelona, España
          </Paragraphs>
        </div>
        <Footer
          type="button"
          onAccept={toggle}
          loading={loading}
          onlyOneButton
          toggle={() => toggle()}
        />
      </div>
    </div>
  </Draggable>
)

ModalLocation.propTypes = {
  toggle: PropTypes.func,
  loading: PropTypes.bool,
}

ModalLocation.defaultProps = {
  toggle: () => null,
}

export default ModalLocation
