import React, {
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import AsyncSelect from 'react-select/async'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
import colors from '../../../../styles/colors'

// cellEditor components are require to use the fowardRef tecnique
// this helpel in the process of acces and reuse funtionalities from the own aggrid
// LINKS -EXAMPLES:
// https://www.ag-grid.com/react-grid/component-cell-editor/
// https://react-select.com/home
// https://plnkr.co/edit/XNTtwbkYSBrJ1sM4?open=lib%2Fscript.js&preview
// https://plnkr.co/edit/54uoBPER9fsFng7W?preview
// https://codesandbox.io/s/github/icedjello/vuex-ag-grid-modal?file=/src/main.js
const CellSearch = forwardRef(({ value, colDef, api, data }, ref) => {
  const { t } = useTranslation()
  const {
    searchPatientsByCurrentClient,
    updateLine,
    getCart,
    searchPatient,
    loadingseachpatient,
  } = useContext(TPVContext)
  const refInput = useRef(null)
  const [input, setInput] = useState(null)
  const [options, setOptions] = useState(null)
  // const [defaultValue, setDefaultValue] = useState(null)

  const handlerKeyboardEvent = (param) => {
    // DOC - Example about how to change the default examples under the key evnets
    // https://www.ag-grid.com/javascript-grid/component-cell-editor/#option-2---suppress-keyboard-event
    const gridShouldDoNothing = param.editing && param.event.keyCode === 13
    return gridShouldDoNothing
  }

  useEffect(() => {
    if (colDef) {
      colDef.suppressKeyboardEvent = handlerKeyboardEvent
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (data) {
  //     const {
  //       paciente: { id, nombre },
  //     } = data
  //     setDefaultValue({
  //       value: id,
  //       label: nombre,
  //     })
  //   }
  // }, [data])

  useEffect(() => {
    setOptions(searchPatient)
  }, [searchPatient])

  // DOC - Interface regarding the celEditor. It is neseceari to return the getValue funtion
  // https://www.ag-grid.com/react-grid/component-cell-editor/
  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!input || input !== '') {
        return null
      }
      return 'Actualizando'
    },
    afterGuiAttached: () => {
      setTimeout(() => refInput.current.focus())
      searchPatientsByCurrentClient(value || '')
    },
    isCancelAfterEnd() {
      // our editor will reject any value greater than 1000
      return value > 1000
    },
  }))

  // This onChange fucntion handle the actions and events trigger by the component react-select
  const onChange = async (option, act) => {
    if (!option || !act || !act.action) return
    const { action } = act
    if (action === 'select-option' && data && data.id) {
      // The editing cell is stop before. the reason is to add a loader to the cell
      api.stopEditing()
      const reponseupdateLine = await updateLine({
        id: data.id,
        paciente_id: option.value,
      })
      // IF the reponse goes not succesfull the cart is restart
      if (!reponseupdateLine.success) getCart()
    }
  }

  const styles = {
    control: (provided) => ({
      ...provided,
      borderStyle: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontFamily: 'Atkinson Hyperlegible Regular',
      fontSize: '0.75rem',
      padding: 0,
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: '100%',
    }),
    menu: (provided) => ({
      ...provided,
      borderStyle: 'none',
      borderRadius: 0,
      marginTop: 0,
      boxShadow: 'none',
    }),
    option: (provided) => ({
      ...provided,
      // marginTop: 0,
      borderBottomWidth: 1,
      cursor: 'pointer',
    }),
    menuList: (provided) => ({
      ...provided,
      marginTop: 0,
      paddingTop: 0,
    }),
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className="tw-w-full tw-h-full">
        <AsyncSelect
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.primary,
            },
          })}
          styles={styles}
          loadingMessage={() => t('actions.loadingOoo')}
          ref={refInput}
          defaultInputValue={value}
          loadOptions={searchPatientsByCurrentClient}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          onChange={onChange}
          onInputChange={(e) => setInput(e)}
          defaultOptions={options}
          isLoading={loadingseachpatient}
          onMenuOpen={() => searchPatientsByCurrentClient([])}
          onFocus={() => searchPatientsByCurrentClient([])}
        />
      </div>
    </div>
  )
})

CellSearch.propTypes = {}

export default CellSearch
