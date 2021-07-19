import React from 'react'
import PropTypes from 'prop-types'
import { useProfile } from '../../Hooks/Profile/useProfile'
import Container from '../../../components/Page/Container/Container'
import Loader from '../../../components/commons/Loader/Loader'

const ProfileContext = React.createContext()

const ProfileProvider = ({ children }) => {
  const {
    loading,
    loadingupdate,
    user,
    softwares,
    credentials,
    update,
    uploadImageProfile,
    validateInput,
    reload,
    updateOnlyPin,
  } = useProfile()

  return (
    <ProfileContext.Provider
      value={{
        loading,
        loadingupdate,
        user,
        softwares,
        credentials,
        update,
        uploadImageProfile,
        validateInput,
        reload,
        updateOnlyPin,
      }}
    >
      <Container name="profileProvider" className="tw-w-full tw-relative">
        {loading && (
          <div className="tw-absolute tw-top-0 tw-left-0 tw-z-50 tw-bg-white tw-flex tw-w-full tw-h-full tw-items-center tw-justify-center">
            <Loader />
          </div>
        )}
        {children}
      </Container>
    </ProfileContext.Provider>
  )
}

ProfileContext.propTypes = {
  children: PropTypes.node,
}

export { ProfileContext, ProfileProvider }
