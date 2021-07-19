import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Draggable from '../../../Modal/Draggable/Draggable'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'
import IcArrowRight from '../../../commons/Icons/IcArrowRight'
import MainTab from '../MainTab/MainTab'
import img1 from '../../../../assets/img/imgBotPlus/1.svg'
import img2 from '../../../../assets/img/imgBotPlus/2.svg'
import img3 from '../../../../assets/img/imgBotPlus/3.svg'
import img4 from '../../../../assets/img/imgBotPlus/4.svg'
import Warnings from '../Warnings/Warnings'
import AditionalInfo from '../AditionalInfo/AditionalInfo'
import Sustitutions from '../Sustitutions/Sustitutions'
import ChangeHistory from '../ChangeHistory/ChangeHistory'
import Button from '../../../commons/Buttons/Button/Button'
import Texts from '../Texts/Texts'
import { OpacityGradientMenu } from './styles'
import { useBotPlus } from '../../../../infrastructure/Hooks/BotPlus/useBotPlus'
import Loader from '../../../commons/Loader/Loader'

const ModalBotPlus = ({ productName, toggle, id }) => {
  const [selectMenu, setSelectMenu] = useState(1)
  const { product, loading } = useBotPlus(id)
  const menuButtons = [
    {
      id: 1,
      name: 'Ficha Principal',
    },
    {
      id: 2,
      name: 'Advertencias',
    },
    {
      id: 3,
      name: 'Textos',
      children: [
        {
          id: 1,
          name: 'Consejos al paciente',
        },
        {
          id: 2,
          name: 'Embarazo',
        },
        {
          id: 3,
          name: 'Lactancia',
        },
      ],
    },
    {
      id: 4,
      name: 'Sustituciones',
    },
    {
      id: 5,
      name: 'Información adicional',
    },
    {
      id: 6,
      name: 'Histórico de cambios',
    },
    {
      id: 7,
      name: 'Ver artículos en PortalFarma',
    },
  ]

  const dataProduct = {
    id: 1,
    name: 'ACOFARVITAL JALEA REAL VIT 20 VIALES',
    dataPharma: [
      {
        id: 1,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 2,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 3,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
    ],
    dataPrinciplesActives: [
      {
        id: 1,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 2,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 3,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 4,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 5,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 6,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        id: 7,
        name: 'Lorem ipsum dolor sit amet consectetur',
      },
    ],
    images: [
      {
        id: 1,
        src: img1,
      },
      {
        id: 2,
        src: img2,
      },
      {
        id: 3,
        src: img3,
      },
      {
        id: 4,
        src: img4,
      },
    ],
    aditionalInfo: {
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, atque!',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia odit sit hic aliquid harum laboriosam eum reiciendis at incidunt id veniam voluptatibus ratione corrupti voluptas tempore, voluptate corporis nihil? Molestias, minima consequuntur! Illum reprehenderit odio dolorem voluptatibus possimus deleniti culpa, repellendus quidem veritatis cumque nesciunt numquam saepe fugiat, dignissimos sit qui. Placeat, eum. Dignissimos sunt neque sapiente optio. Repellendus aliquam exercitationem repudiandae libero voluptas! Nihil, aliquid. Enim numquam praesentium natus nulla asperiores quis! Tempora unde culpa non dolorem voluptates veniam incidunt aliquid? Rem culpa eius aspernatur blanditiis ipsa perferendis sequi rerum dolore unde, praesentium sunt perspiciatis pariatur voluptate asperiores placeat?',
    },
    changeHistory: [
      {
        id: 1,
        change: '01/09/2011 - CAMBIO DE PRECIO',
      },
      {
        id: 2,
        change: '01/07/2012 - CAMBIO DE PRECIO',
      },
      {
        id: 3,
        change: '23/08/2013 - CAMBIO DE PRECIO',
      },
      {
        id: 4,
        change: '27/08/2018 - CAMBIO DE PRECIO LABORATORIO DATACOM',
      },
      {
        id: 5,
        change: '01/09/2019 - CAMBIO DE PRECIO LABORATORIO COMERCIALIZADOR',
      },
    ],
    texts: [
      {
        id: 1,
        title: 'Consejos del paciente',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ratione, porro reprehenderit tempore quasi minima sit esse laboriosam soluta laudantium praesentium atque quaerat ut eius ipsa minus recusandae fugit libero optio rem deleniti nam. Obcaecati non minima quam suscipit optio, maiores doloribus corporis eveniet aperiam repellendus iste, similique inventore sunt hic aliquam sequi perferendis labore eum sit. Expedita sequi laudantium, iste aperiam temporibus dolorem dolore asperiores suscipit qui recusandae quo perspiciatis voluptas quis debitis repudiandae, eius corporis doloremque neque, similique mollitia deserunt! A possimus iste labore, iure ea amet molestiae, consectetur, nesciunt nemo dolore harum commodi nulla vel tempora temporibus vitae accusantium. Ut corporis quis qui blanditiis impedit similique praesentium, voluptas, necessitatibus eligendi consectetur distinctio repellendus velit quasi deserunt aliquid eaque recusandae quaerat expedita, libero laudantium ea dolorem illum. Aperiam, a iste. Velit a deleniti tempore, omnis magni quo excepturi praesentium vitae? Illo laboriosam blanditiis ullam, tempore at aperiam possimus, non odio nostrum inventore aut incidunt ea fugiat mollitia facere assumenda ut laborum quos. Ipsa unde deleniti molestiae sed eum harum voluptatibus qui similique rem, nulla, in, natus incidunt voluptatum? Quibusdam error et, beatae repellat eaque voluptatibus exercitationem! Sint repudiandae eum commodi doloremque quaerat, vel dolorem minima exercitationem tempora.',
      },
      {
        id: 2,
        title: 'Embarazo',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ratione, porro reprehenderit tempore quasi minima sit esse laboriosam soluta laudantium praesentium atque quaerat ut eius ipsa minus recusandae fugit libero optio rem deleniti nam. Obcaecati non minima quam suscipit optio, maiores doloribus corporis eveniet aperiam repellendus iste, similique inventore sunt hic aliquam sequi perferendis labore eum sit. Expedita sequi laudantium, iste aperiam temporibus dolorem dolore asperiores suscipit qui recusandae quo perspiciatis voluptas quis debitis repudiandae, eius corporis doloremque neque, similique mollitia deserunt! A possimus iste labore, iure ea amet molestiae, consectetur, nesciunt nemo dolore harum commodi nulla vel tempora temporibus vitae accusantium. Ut corporis quis qui blanditiis impedit similique praesentium, voluptas, necessitatibus eligendi consectetur distinctio repellendus velit quasi deserunt aliquid eaque recusandae quaerat expedita, libero laudantium ea dolorem illum. Aperiam, a iste. Velit a deleniti tempore, omnis magni quo excepturi praesentium vitae? Illo laboriosam blanditiis ullam, tempore at aperiam possimus, non odio nostrum inventore aut incidunt ea fugiat mollitia facere assumenda ut laborum quos. Ipsa unde deleniti molestiae sed eum harum voluptatibus qui similique rem, nulla, in, natus incidunt voluptatum? Quibusdam error et, beatae repellat eaque voluptatibus exercitationem! Sint repudiandae eum commodi doloremque quaerat, vel dolorem minima exercitationem tempora.',
      },
      {
        id: 3,
        title: 'Lactancia',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ratione, porro reprehenderit tempore quasi minima sit esse laboriosam soluta laudantium praesentium atque quaerat ut eius ipsa minus recusandae fugit libero optio rem deleniti nam. Obcaecati non minima quam suscipit optio, maiores doloribus corporis eveniet aperiam repellendus iste, similique inventore sunt hic aliquam sequi perferendis labore eum sit. Expedita sequi laudantium, iste aperiam temporibus dolorem dolore asperiores suscipit qui recusandae quo perspiciatis voluptas quis debitis repudiandae, eius corporis doloremque neque, similique mollitia deserunt! A possimus iste labore, iure ea amet molestiae, consectetur, nesciunt nemo dolore harum commodi nulla vel tempora temporibus vitae accusantium. Ut corporis quis qui blanditiis impedit similique praesentium, voluptas, necessitatibus eligendi consectetur distinctio repellendus velit quasi deserunt aliquid eaque recusandae quaerat expedita, libero laudantium ea dolorem illum. Aperiam, a iste. Velit a deleniti tempore, omnis magni quo excepturi praesentium vitae? Illo laboriosam blanditiis ullam, tempore at aperiam possimus, non odio nostrum inventore aut incidunt ea fugiat mollitia facere assumenda ut laborum quos. Ipsa unde deleniti molestiae sed eum harum voluptatibus qui similique rem, nulla, in, natus incidunt voluptatum? Quibusdam error et, beatae repellat eaque voluptatibus exercitationem! Sint repudiandae eum commodi doloremque quaerat, vel dolorem minima exercitationem tempora.',
      },
    ],
  }

  const [selectMainTab, setSelectMainTab] = useState(1)

  const tabs = [
    {
      id: 1,
      name: 'General',
    },
    {
      id: 2,
      name: 'Precios',
    },
    {
      id: 3,
      name: 'Datos farmacéuticos',
    },
    {
      id: 4,
      name: 'Principios Activos',
    },
  ]

  return (
    <Draggable
      toggle={toggle}
      padding={0}
      title={`BOT+ - ${productName}`}
      footerComponent={() => null}
      size="xl"
    >
      {loading && (
        <div className="tw-absolute tw-h-full tw-w-full tw-bg-white tw-top-0 tw-left-0 tw-z-50 tw-flex tw-items-center tw-justify-center">
          <Loader />
        </div>
      )}
      <div className="tw-flex tw-w-full">
        <div
          className="ModalBotPlus tw-w-3/12 tw-flex tw-flex-col tw-justify-between tw-bg-grey-700 tw-h-full tw-relative tw-py-8"
          style={{ height: '46rem' }}
        >
          <div className="tw-overflow-y-auto tw-p-8 tw-pt-0 tw-pb-16 tw-mb-16 tw-relative">
            {menuButtons.map((item) => (
              <div key={item.id}>
                <div
                  aria-hidden="true"
                  onClick={() => setSelectMenu(item.id)}
                  className={`tw-flex tw-justify-between tw-items-center ${
                    selectMenu === item.id
                      ? 'tw-bg-activeMenu'
                      : 'tw-bg-primary-300'
                  } tw-cursor-pointer tw-p-4 ${
                    item.id > 1 && item.id < 7 && item.children
                      ? 'tw-my-0'
                      : 'tw-my-4'
                  } ${item.id === menuButtons.length && 'tw-mb-10'}`}
                >
                  <Paragraphs
                    className={`${
                      selectMenu === item.id
                        ? 'tw-text-white'
                        : 'tw-text-activeMenu'
                    }`}
                    size="xs"
                    weight="bold"
                  >
                    {item.name}
                  </Paragraphs>
                  {selectMenu === item.id &&
                    selectMenu !== menuButtons.length && (
                      <IcArrowRight size={18} color="#FFFFFF" />
                    )}
                </div>

                {selectMenu === 3 && item.children && (
                  <div className="tw-bg-white tw-p-3 tw-border-b">
                    {item.children.map((title, index) => (
                      <div
                        key={index}
                        aria-hidden="true"
                        className="tw-py-2 tw-cursor-pointer"
                        onClick={() => alert()}
                      >
                        <Paragraphs
                          size="xs"
                          className={
                            title.id !== item.children.length ? 'tw-mb-3' : ''
                          }
                        >
                          {title.name}
                        </Paragraphs>
                        {title.id !== item.children.length && <hr />}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectMenu === 3 && (
            <OpacityGradientMenu className="tw-h-10 tw-absolute"></OpacityGradientMenu>
          )}
          <div className="tw-mx-8">
            <Button
              bgWhite
              onClick={toggle}
              uppercase
              label="Volver a la ficha"
              transparent
              size="large"
            />
          </div>
        </div>

        <div className="tw-w-9/12 tw-p-8">
          <div className="tw-flex tw-w-full tw-justify-between tw-border-b">
            {selectMenu === 1 && (
              <div className="tw-flex">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    aria-hidden="true"
                    onClick={() => setSelectMainTab(tab.id)}
                  >
                    <Paragraphs
                      className={`tw-mr-8 tw-text-secondary tw-cursor-pointer ${
                        selectMainTab === tab.id
                          ? 'tw-opacity-100'
                          : 'tw-opacity-40'
                      }`}
                      weight="bold"
                    >
                      {tab.name}
                    </Paragraphs>
                  </div>
                ))}
              </div>
            )}

            <div
              className={`tw-flex ${
                selectMenu !== 1 ? 'tw-w-full' : 'tw-w-3/12'
              } tw-justify-end tw-items-center tw-pb-3 tw-mx-2`}
            >
              <div className="tw-flex">
                {dataProduct.images.map((item, index) => (
                  <div className="tw-mr-4" key={index}>
                    <img src={item.src} alt="imagen" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {selectMenu === 1 && (
            <MainTab product={product} selectMainTab={selectMainTab} />
          )}
          {selectMenu === 2 && <Warnings product={product} />}

          {selectMenu === 3 && <Texts product={product} />}

          {selectMenu === 4 && <Sustitutions product={product} />}

          {selectMenu === 5 && <AditionalInfo product={product} />}

          {selectMenu === 6 && <ChangeHistory product={product} />}
        </div>
      </div>
    </Draggable>
  )
}

ModalBotPlus.propTypes = {
  productName: PropTypes.string,
  toggle: PropTypes.func,
}

ModalBotPlus.defaultProps = {
  productName: 'ACOFARVITAL JALEA REAL VIT 20 VIALES',
}

export default ModalBotPlus
