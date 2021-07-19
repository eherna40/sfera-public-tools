import { gql } from '@apollo/client'

export const GET_REPORT = gql`
  mutation($id: ID) {
    menuBI(modulo_recurso_id: $id) {
      reportSectionBI {
        pageName
      }
      filtrosBI {
        page
        table
        column
        value
      }
      conexionBI {
        code
        success
        result {
          token
          embed {
            odataContext
            id
            reportType
            name
            webUrl
            embedUrl
          }
          reportId
          embedToken
        }
      }
      reportSectionBI {
        pageName
      }
    }
  }
`
