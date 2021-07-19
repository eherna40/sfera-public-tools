import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import CodeAndType from './components/CodeAndType/CodeAndType'
import Total from './components/Total/Total'
import { TPVContext } from '../../../../infrastructure/contexts/TPV/TPV'
import RadioInput from '../../../commons/Form/RadioInput/RadioInput'
import { Selector, SelectorInner } from './styles'
import IcArrowDown from '../../../commons/Icons/IcArrowDown'
// eslint-disable-next-line
import colors from '../../../../styles/colors'

const SidebarLastSell = () => {
  const { t } = useTranslation()
  const {
    currentClient,
    sellSearchTypes,
    currentLastSellsSearchType,
    setCurrentLastSellsSearchType,
    currentLastSellsSearchSelector,
    setCurrentLastSellsSearchSelector,
    searchSellsbyKeys,
    currentLastSellsSearch,
  } = useContext(TPVContext)

  const setCheckRadioInput = (searchType) => {
    if (searchType.id !== currentLastSellsSearchType.id) {
      setCurrentLastSellsSearchType(searchType)
      searchSellsbyKeys(searchType, currentLastSellsSearchSelector)
    }
  }
  const setCheckSelectort = (seleted) => {
    if (seleted.id !== currentLastSellsSearchSelector.id) {
      setCurrentLastSellsSearchSelector(seleted)
      searchSellsbyKeys(currentLastSellsSearchType, seleted)
    }
  }

  return (
    <div className="tw-w-96 tw-overflow-auto tw-overflow-x-hidden">
      <div className="tw-flex tw-justify-between tw-px-4 tw-mb-5">
        <Paragraphs size="xs" weight="bold">
          {t('labels.Últimas ventas')}
        </Paragraphs>
        <Selector className="tw-relative tw-cursor-pointer">
          <div className="tw-flex tw-items-center">
            <Paragraphs weight="bold" size="xs">
              {t(`labels.${currentLastSellsSearchSelector.name}`)}
            </Paragraphs>
            <IcArrowDown
              className="tw-ml-1"
              color={colors.green[900]}
              size={16}
            />
          </div>
          <SelectorInner className="tw-absolute selector-inner">
            {sellSearchTypes.map((i, index) =>
              !i.filter ? (
                <div
                  key={index}
                  className="selection-text tw-px-5 tw-py-3 tw-cursor-pointer tw-pr-8"
                  onClick={() => setCheckSelectort(i)}
                  aria-hidden
                >
                  <Paragraphs>{t(`labels.${i.name}`)}</Paragraphs>
                </div>
              ) : null,
            )}
          </SelectorInner>
        </Selector>
      </div>
      <div className="tw-flex tw-justify-around tw-items-center tw-w-full tw-px-1">
        {sellSearchTypes &&
          sellSearchTypes.map((i, index) =>
            i.filter ? (
              <RadioInput
                key={index}
                checked={currentLastSellsSearchType.id === i.id}
                name={i.name}
                checkActive
                available={!!currentClient}
                id={i.id}
                label={t(`labels.${i.name}`)}
                handleClick={() => {
                  setCheckRadioInput(i)
                }}
              />
            ) : null,
          )}
      </div>
      <div className="tw-flex tw-flex-col tw-overflow-y-auto tw-w-full tw-px-4">
        {currentLastSellsSearch &&
          currentLastSellsSearch.length &&
          currentLastSellsSearch.map((ticket, indexV) => (
            <div key={indexV} className="tw-px-4 tw-my-3 tw-py-2 tw-border">
              {/* HEADER */}
              <Header
                date={ticket.created_at}
                user={(ticket.usuario && ticket.usuario.nombre) || ''}
              />
              {/* PRODUCTO */}
              {ticket.ventaLinea &&
                ticket.ventaLinea.map((item, indexP) => (
                  <div key={indexP}>
                    <Product
                      units={item.unidades}
                      productName={item.descripcion}
                      price={`${item.importe_a_pagar}`}
                    />
                    {/* CODIGO Y TIPO */}
                    <CodeAndType
                      code={item.codigo}
                      type={item.tipoVenta.descripcion}
                    />
                  </div>
                ))}
              {/* TOTAL */}
              <Total total={`${ticket.importe_a_pagar}`} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default SidebarLastSell
