import React from 'react'
import { useTranslation } from 'react-i18next'
import { Col, Row, Button } from 'reactstrap'

export default function AccessInfo({ fields }) {
  const { t } = useTranslation()
  return (
    <div className="AccessInfo row">
      <Col md={6}>
        <Row>
          <Col md={12} className="pb-2">
            <div className="infoTitle color-primary font-weight-bold">
              {t('labels.crmAccess')}
            </div>
            <div className="text-field">
              <small>{t('accessInfo.title')}</small>
            </div>
          </Col>
          {fields(['nickname', 'pin', 'password'])}
        </Row>
      </Col>
      <Col md={6}>
        <Row>
          <Col md={12} className="pb-2">
            <div className="infoTitle color-primary font-weight-bold">
              {t('accessInfo.erecipeTitle')}
            </div>
            <div className="text-field">
              <small>{t('accessInfo.erecipeMesssage')}</small>
            </div>
          </Col>
        </Row>
        <Row>
          {fields(['erecipe_user', 'erecipe_password'])}
          <Col md={6} className="">
            <Button className="custom-buttom mb-1 mt-1  color-primary" block>
              {t('user.newPassword').toUpperCase()}
            </Button>
          </Col>
          <Col md={6} className="">
            <Button className="custom-buttom mb-1 mt-1 color-primary" block>
              {t('user.identification').toUpperCase()}
            </Button>
          </Col>
          <Col md={6} className="">
            <Button className="custom-buttom mb-1 mt-1  color-primary" block>
              {t('user.activation').toUpperCase()}
            </Button>
          </Col>
          <Col md={6} className="">
            <Button className="custom-buttom mb-1 mt-1  color-primary" block>
              {t('user.unlock').toUpperCase()}
            </Button>
          </Col>
        </Row>
      </Col>
    </div>
  )
}
