import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import PropTypes from 'prop-types'
import TextInput from '../Form/TextInput/TextInput'
import SelectInput from '../Form/SelectInput/SelectInput'
import catSalut from '../../../assets/img/ic_icons/cat_salut.svg'
import InputGroup from '../Form/InputGroup/InputGroup'
import IcCloseBold from '../Icons/IcCloseBold'
import { Wrapper } from './styles'
import Aggrid from '../../Aggrid/Aggrid'
import { columns } from '../../../infrastructure/Aggrid/columns/columns'
import CustomCheck from '../CustomCheck/CustomCheck'
import SelectDefault from './SelectOrgsDefault'
import colors from '../../../styles/colors'

const Entity = ({ data, orgs }) => {
  const [expanded, setExpanded] = useState(false)
  const { register } = useForm()
  const onReady = () => data.regimenEntidad
  return (
    <Wrapper
      expanded={expanded}
      onClick={() => !expanded && setExpanded(true)}
      aria-hidden="true"
      className={`Entity tw-flex tw-w-full tw-border tw-gap-4 tw-justify-center tw-p-4 ${
        !expanded && 'hover:tw-bg-primary-100'
      }`}
    >
      <div className="left-column tw-flex tw-flex-col tw-w-3/12">
        <div className={`tw-w-full tw-pl-8 tw-py-4 ${expanded && 'tw-mb-6'}`}>
          <img src={catSalut} alt="cat-salut-icon" style={{ width: 200 }} />
        </div>
        {expanded && (
          <div
            style={{ margubBottom: '-50px' }}
            className="tw-w-full tw-h-full tw-pr-4 tw-pb-4 tw-overflow-auto"
          >
            <InputGroup title="CONTROL DE LA TSI" underline={false}>
              <SelectInput
                disabled
                transparent
                items={[
                  { name: data.control_tsi, id: 1 },
                  { name: 'option 2', id: 2 },
                ]}
                reference={register}
                name="control-tsi"
              />
            </InputGroup>
            <InputGroup title="CONFIGURACIÓN" underline={false}>
              <div className="tw-flex tw-gap-8">
                <div className="tw-flex tw-flex-col tw-gap-3">
                  <CustomCheck
                    checked={!!data.control_genericos}
                    label="Control genéricos"
                  />
                  <CustomCheck
                    checked={!!data.control_doe}
                    label="Control DOE"
                  />
                  <CustomCheck
                    checked={!!data.receta_comunicar_ventas}
                    label="Comunicar facturación"
                  />
                </div>
                <div className="tw-flex tw-flex-col tw-gap-3">
                  <CustomCheck
                    checked={!!data.impresion_vertical}
                    label="Imp. vertical"
                  />
                  <CustomCheck
                    checked={!!data.receta_electronica}
                    label="E-receta"
                  />
                  <CustomCheck
                    checked={!!data.receta_comunicar_mutuas}
                    label="Comunicar recetas"
                  />
                </div>
              </div>
            </InputGroup>
            <div className="tw-pt-3">
              <InputGroup title="PRECIO FIJO" underline={false}>
                <TextInput
                  alignRight
                  disabled
                  transparent
                  value={`${data.precio_fijo} €`}
                  name="precio-fijo"
                  reference={register}
                />
              </InputGroup>
            </div>
            <InputGroup title="APORTACIÓN REDUCIDA" underline={false}>
              <TextInput
                disabled
                alignRight
                value={`${data.cicero_aportacion} %`}
                label="Aportación"
                name="aportacion"
                row
                labelStyles="tw-flex tw-items-center"
                transparent
                reference={register}
              />
              <TextInput
                alignRight
                value={`${data.cicero_maximo} €`}
                disabled
                label="Hasta un máximo de"
                name="maximo"
                row
                labelStyles="tw-flex tw-items-center"
                transparent
                reference={register}
              />
            </InputGroup>
          </div>
        )}
      </div>

      <div className="right-column tw-relative tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-start tw-w-9/12">
        {expanded && (
          <div
            className="tw-absolute tw-right-0 tw-top-0 tw-cursor-pointer"
            onClick={() => setExpanded(false)}
            aria-hidden="true"
          >
            <IcCloseBold color={colors.primary} />
          </div>
        )}
        <div className="tw-w-full">
          <div className="tw-flex tw-w-full tw-gap-4 tw-items-center">
            <div className="tw-w-4/12">
              <TextInput
                disabled
                label="Entidad"
                name="entidad"
                value={data.nombre}
                transparent
                containerStyles="tw-mt-2"
                labelStyles="tw-mb-2"
                reference={register}
              />
            </div>
            <div className="tw-w-2/12">
              <TextInput
                disabled
                label="CIF"
                name="cif"
                value={data.cif ? data.cif : undefined}
                transparent
                containerStyles="tw-mt-2"
                labelStyles="tw-mb-2"
                reference={register}
              />
            </div>
            <div style={{ paddingTop: 2 }} className="tw-w-4/12">
              <SelectDefault
                containerStyles="tw-mt-2"
                labelStyles="tw-mb-2"
                defName={data.organismo.nombre}
                orgs={orgs}
                label="Organismo"
              />
              {/* <SelectInput
                disabled
                label="Organismo"
                name="organismo"
                transparent
                // items={data.organismo.nombre}
                items={[
                  { name: data.organismo.nombre, id: 1 },
                  { name: 'option 2', id: 2 },
                ]}
                containerStyles="tw-mt-2"
                labelStyles="tw-mb-2"
                reference={register}
              /> */}
            </div>
            <div className="tw-w-2/12 tw-flex tw-justify-end tw-pr-8">
              {/* <EditableCheck label="Es mutua" disabled checked={data.es_mutua ? true : false }/> */}
              <CustomCheck checked={!!data.es_mutua} label="Es mutua" />
            </div>
          </div>
        </div>
        {expanded && (
          <div className="tw-w-full tw-h-full">
            <Aggrid
              rowModelType="clientSide"
              columns={columns.entities}
              onReady={onReady}
              id="Entity"
            />
          </div>
        )}
      </div>
    </Wrapper>
  )
}

Entity.propTypes = {}

Entity.defaultProps = {}

export default Entity
