import React from 'react'
import { IconWrapper } from './styles'
import IcExcel from '../../../commons/Icons/IcExcel'
import IcPDF from '../../../commons/Icons/IcPDF'
import Paragraphs from '../../../commons/Paragraphs/Paragraphs'

const ExportOptions = () => (
  <div className="tw-flex tw-flex-col tw-p-6 tw-gap-4">
    <div className="tw-flex tw-items-center tw-gap-1 hover:tw-underline">
      <IconWrapper>
        <IcExcel size={24} />
      </IconWrapper>
      <Paragraphs size="sm">Exportar Excel</Paragraphs>
    </div>
    <div className="tw-flex tw-items-center tw-gap-1 hover:tw-underline">
      <IconWrapper>
        <IcExcel size={24} />
      </IconWrapper>
      <Paragraphs size="sm">Exportar CSV</Paragraphs>
    </div>
    <div className="tw-flex tw-items-center tw-gap-1 hover:tw-underline">
      <IconWrapper>
        <IcPDF size={22} />
      </IconWrapper>
      <Paragraphs size="sm">Exportar PDF</Paragraphs>
    </div>
  </div>
)

export default ExportOptions
