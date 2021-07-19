import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../commons/Buttons/Button/Button'
import CustomAlert from '../../commons/CustomAlert/CustomAlert'

const Form = ({
  onSubmit,
  error,
  loading,
  children,
  onChange,
  disabled,
}) => {
  return (
    <div className="Form tw-max-w-screen-xl tw-m-auto">
      <form
        onChange={(e) => onChange(e)}
        autoComplete="off"
        onSubmit={onSubmit}
        className="sm:tw-w-6/12 lg:tw-w-4/12 xl:tw-w-3/12 tw-mx-auto tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4 "
      >
        <div className="tw-w-full">
          {children}
          {error && (
            <CustomAlert mode="danger" size="full">
              <div>{error.message}</div>
            </CustomAlert>
          )}
          <div className="tw-mt-4">
            <Button
              size="large"
              loading={loading}
              uppercase
              type="submit"
              label="Iniciar sesión"
              primary
              disabled={!disabled}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.func,
}

export default Form
