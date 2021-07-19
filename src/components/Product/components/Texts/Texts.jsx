import React from 'react'

const Texts = () => (
  <div
    className="tw-mt-4 tw-flex tw-flex-col tw-justify-between"
    style={{ height: 'calc(100% - 54px)' }}
  >
    {/* El array  textos da error en GraphQL, no se puede devolver null */}
    {/* <div className="tw-overflow-y-auto" style={{ height: '32rem' }}>
      {product?.textos.map((item) => (
        <div key={item.id} className="tw-my-2">
          <Paragraphs weight="bold">{item.title}</Paragraphs>
          <Paragraphs>{item.description}</Paragraphs>
        </div>
      ))}
    </div>
    <div className="tw-w-full tw-flex tw-justify-end">
      <Button label="IMPRIMIR" primary size="medium" />
    </div> */}
    El array textos da error en GraphQL, no se puede devolver null
  </div>
)

export default Texts
