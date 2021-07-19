import { gql } from '@apollo/client'
import { queryTPV } from '../../_variables'

export const FIND_ERECETA = gql`
  mutation($input: BuscarERecetaInput) {
    buscarEReceta(input: $input) {
      result
      response {
        items_DET_REC {
          DTO_DET_REC_CalculReceptesPendentsDispensarEnBaseReceptaMestraResponse {
            articulo {
              dispensacion {
                controlLibro {
                  id
                }
              }
              id
              codigo
              nombre_descripcion
              stock
              ubicaciones {
                id
                almacenUbicacion {
                  id
                  codigo_ubicacion
                  nombre_ubicacion
                }
              }
              precio_eur
              precio_laboratorio
              precio {
                precio_pvp
              }
              laboratorio {
                codigo
                descripcion
              }
              ean13
            }
            articulo_sustitucion {
              articulo {
                id
                codigo
                nombre_descripcion
                stock
                laboratorio {
                  descripcion
                }
              }

              p_IMP_APOR_USU
            }
            p_IMP_APOR_USU
            p_DOS_PRE #unidades
            p_IMP_APOR_CAT #PVP
            p_IMP_APOR_USU #Total a pagar
            p_IMP_APOR_CAT #aportacion
            p_DIS_PRE #num. dispensados
            p_DAT_INI_PRE
            p_DAT_FI_PRE
            p_COD_UP_PRE
          }
        }
      }
    }
  }
`

export const PROXIMAS_DISPENSACIONES = gql`
  mutation($input: proximaDispensacionERecetaInput) {
    proximaDispensacionEReceta(input: $input) {
      result
      response {
        items_CONSULTA {
          DTO_CONSULTA_ConsultaDataProperaDispensacioResponse {
            p_COD_CPF
            p_LOC_DP
            p_DAT_FI_DIS
            p_DAT_INI_DIS
            p_NO_PER
            p_MAX_REC_PEN
            p_IND_ADS
            p_COD_MTU_ADS
            p_DES_MTU_ADS
            p_IND_REC_PAP
            p_DAT_POS_DIS
            p_IND_NO_FIN
            p_IND_PROD_REC
            articulo {
              nombre_descripcion
            }
          }
        }
      }
    }
  }
`

export const ERECETA_PENDENT_PRESCRIPTIONS_TO_SIGN = gql`
  mutation($input: consultarDispensacionPorFirmarERecetaInput) {
    consultarDispensacionPorFirmarEReceta(input: $input) {
      result
      response {
        items_CONSULTA {
          DTO_CONSULTA_ConsultaDispensacionsPendentsSignarPelFarmaceuticResponse {
            p_NCOG_ASS
            p_COD_UP_PRE
            p_INI_FSM
            p_COD_REC
            p_DES_CPF
            p_NOM_ENV_PRE
            p_DOS_PRE
            p_FRQ_ADM_PRE
            p_DAT_DIS
            p_COD_FSM
            p_CESP
            p_DESP
            p_LOC_DP
            p_TIPUS_UP_PRE
            p_NCON
            p_TIP_CON
            p_IDE
            p_NDI_EST
            p_COD_FIT_SEG
            p_TIP_REC
            p_ICS
            p_LLIN_PAG_ASS
            p_PVP
            p_IMP_APOR_USU
            p_APOFAR
            p_LIMAP
            p_TIP_PROD
            p_IND_SIRE
            p_REG
            p_TID
            p_ID
            p_EC_ASS
            p_CGGC_ASS
            p_IND_TAL_FIN
            p_IND_NO_FIN
            p_EST_EXE
            p_PAG_TOT
            p_INF_EXE {
              p_EST_EXE
              p_COD_EXE
              p_DES_COD
            }
          }
        }
      }
    }
  }
`

export const ERECETA_SIGN_PENDENT_PRESCRIPTIONS = gql`
  mutation($input: insertarDispensacionFirmadaERecetaInput) {
    insertarDispensacionFirmadaEReceta(input: $input) {
      result
      response {
        p_COD_LOT
        p_RES_EXE
        p_EST_EXE
        items_SIGNATURA {
          DTO_SIGNATURA_CreacioISignaturaLotsReceptesDispensadesResponse {
            p_INF_EXE
            p_COD_REC
          }
        }
      }
    }
  }
`

export const INSERT_ERECETA = gql`
  mutation($input: CarritoErecetaInput) {
    insertarCarritoEreceta(
      input: $input # { #   articulos: [{ id: 313 }, { id: 1574 }] #   codigo_ereceta: "12345678901234" #   cip: "SEBE812982" #   carrito_id: 1 # }
    ) {
        ${queryTPV}
    }
  }
`

export const DISPENSATION_HISTORY = gql`
  mutation($input: consultarDispensacionERecetaInput) {
    consultarDispensacionEReceta(input: $input) {
      result
      response {
        p_COD_CIP
        p_REG_ASS
        p_PAG_TOT
        p_FAC_APOR_ASS
        p_LLIN_PAG_ASS
        p_IND_ASS_PEN
        p_APOFAR
        p_LIMAP
        items_DET_REC {
          DTO_DET_REC_ConsultaReceptesDispensadesResponse {
            p_COD_DIL
            p_COD_REC
            p_COD_UP_PRE
            p_COM
            p_CPF_DIS
            p_CPF_PRE
            p_DAT_DIS
            p_DAT_FI
            p_DAT_INI
            p_DES_CPD
            p_DES_CPF
            p_DES_DIL
            p_DOS_DIS
            p_DOS_PRE
            p_DUR_TRC_PRE
            p_FRQ_ADM_PRE
            p_INI_FSM
            p_NOM_ENV_DIS
            p_NOM_ENV_PRE
            p_PVP
            p_IND_SIG_FAR
            p_COD_FSM
            p_CESP
            p_DESP
            p_IND_ADS
            p_COD_MTU_ADS
            p_DES_MTU_ADS
            p_TIPUS_UP_PRE
            p_NCON
            p_TIP_CON
            p_DIS_UP
            p_COD_FIT_SEG
            p_ORD_DIS
            p_TOT_REC
            p_IMP_APOR_USU
            p_IMP_APOR_CAT
            p_TIP_PROD
            p_IND_NO_FIN
            p_IND_PROD_REC
            p_REG
            p_VIA_ADM
            p_DESC_VIA_ADM
            p_COD_CIP
            p_REG_ASS
            p_PAG_TOT
            p_FAC_APOR_ASS
            p_LLIN_PAG_ASS
            p_IND_ASS_PEN
            p_APOFAR
            p_LIMAP
            p_IND_TRT_MHDA
            p_EST_EXE {
              p_EST_EXE
              p_COD_EXE
              p_DES_COD
            }
          }
        }
      }
    }
  }
`

export const GET_ERECETA_MESSAGES = gql`
  mutation($input: consultarMensajesDirigidosADispensadorInput) {
    consultarMensajesDirigidosADispensador(input: $input) {
      result
      response {
        p_EST_EXE
        p_PAG_TOT
        items_CONSULTA {
          DTO_CONSULTA_ConsultaMissatgesDirigitsDispensadorsResponse {
            p_COD_MIS #código del mensaje
            p_DES_MIS #descripción mensaje
            p_COD_MOT #codigo motivo
            p_COD_CRI #importancia
            p_CONF_LEC #confirmación lectura
            p_DAT_CONF_LEC #fecha última lectura
            p_DAT_INI_MIS #inicio mensaje
            p_DAT_FI_MIS #fin mensaje
            p_COD_CIP
            p_COD_PRE
            p_PRO_PRE
            p_COD_AMB
            p_EST_MIS #estado mensaje
            p_TIP_ORI #origen del mensaje
            p_NOM_PRO #Nombre de quien ha registrado el mensaje
            p_COG1_PRO #primer apellido
            p_COG2_PRO #segundo apellido
            p_NOM_UP #nombre d ela UP que ha registrado el mensaje
            p_TFN_UP
            p_EST_MIS
            p_PUL_PPR
            p_COD_UP_DES #código farmacia destino
            p_COD_UP_ORG #código UP origin del mensaje
          }
        }
      }
    }
  }
`

export const SEND_ERECETA_MESSAGE = gql`
  # {
  # 	P_COD_FAR: "123456789" # Codi del farmacèutic
  #   P_COD_AUX: "" # Codi del auxiliar. Només s'informarà quan el codi de farmacèutic no s'informi
  #   P_COD_FSM: "" # Codi Professional destí. Metge a qui va dirigit el missatge. Només ha d’estar informat si l’àmbit és M
  #   P_COD_UP_ORI: "" # Codi de UP origen. Es el codi de la OF que envia el missatge
  # 	P_COD_UP_DES:"" # Codi de UP destí. Codi de UP de la OF a qui va dirigit el missatge. Només ha d’estar informat si l’àmbit és F
  # 	P_MOT_MIS: "" #Codi del motiu del missatge. Codis de motiu de bloqueig de dispensadors. Veure taula 66 de l’anne
  #   P_COD_CIP: "12345678912345"
  #   P_COD_PRE: "" #prescripció a la que fa referència el missatge
  #   P_COD_AMB: ""
  #   P_DES_MIS: "" # Descripció del missatge a enviar
  #   P_COD_CRI: ""
  #   P_DAT_INI_VIG: ""
  #   P_DAT_FI_VIG: ""
  #   P_CONF_LEC: ""
  # }
  mutation($input: insertarMensajeInput) {
    insertarMensaje(input: $input) {
      result
      response {
        p_COD_MIS
      }
    }
  }
`

export const REPLACE_ERECETA_ARTICLE = gql`
  mutation($codigo: String!, $cip: String!, $codigo_ereceta: String!) {
    sustitucionAutomaticaEReceta(
      codigo: $codigo
      cip: $cip
      codigo_ereceta: $codigo_ereceta
    ) {
      result
      response {
        items_DET_REC {
          DTO_DET_REC_CalculReceptesPendentsDispensarEnBaseReceptaMestraResponse {
            articulo {
              dispensacion {
                controlLibro {
                  id
                }
              }
              id
              codigo
              nombre_descripcion
              stock
              ubicaciones {
                id
                almacenUbicacion {
                  id
                  codigo_ubicacion
                  nombre_ubicacion
                }
              }
              precio_eur
              precio_laboratorio
              precio {
                precio_pvp
              }
              laboratorio {
                codigo
                descripcion
              }
              ean13
            }
            articulo_sustitucion {
              articulo {
                id
                codigo
                nombre_descripcion
                stock
                laboratorio {
                  descripcion
                }
              }

              p_IMP_APOR_USU
            }
            p_IMP_APOR_USU
            p_DOS_PRE #unidades
            p_IMP_APOR_CAT #PVP
            p_IMP_APOR_USU #Total a pagar
            p_IMP_APOR_CAT #aportacion
            p_DIS_PRE #num. dispensados
            p_DAT_INI_PRE
            p_DAT_FI_PRE
            p_COD_UP_PRE
          }
        }
      }
    }
  }
`

export const REPLACE_MANUALLY_ERECETA_ARTICLE = gql`
  mutation(
    $codigo_sustitucion: String!
    $codigo_sustituido: String!
    $codigo_dilegencia: String
    $descripcion_diligencia: String
    $cip: String!
    $codigo_ereceta: String!
  ) {
    sustitucionManualEReceta(
      codigo_sustitucion: $codigo_sustitucion
      codigo_sustituido: $codigo_sustituido
      codigo_dilegencia: $codigo_dilegencia
      descripcion_diligencia: $descripcion_diligencia
      cip: $cip
      codigo_ereceta: $codigo_ereceta
    ) {
      result
      message
      response {
        items_DET_REC {
          DTO_DET_REC_CalculReceptesPendentsDispensarEnBaseReceptaMestraResponse {
            articulo {
              dispensacion {
                controlLibro {
                  id
                }
              }
              id
              codigo
              nombre_descripcion
              stock
              ubicaciones {
                id
                almacenUbicacion {
                  id
                  codigo_ubicacion
                  nombre_ubicacion
                }
              }
              precio_eur
              precio_laboratorio
              precio {
                precio_pvp
              }
              laboratorio {
                codigo
                descripcion
              }
              ean13
            }
            articulo_sustitucion {
              articulo {
                id
                codigo
                nombre_descripcion
                stock
                laboratorio {
                  descripcion
                }
              }

              p_IMP_APOR_USU
            }
            p_IMP_APOR_USU
            p_DOS_PRE #unidades
            p_IMP_APOR_CAT #PVP
            p_IMP_APOR_USU #Total a pagar
            p_IMP_APOR_CAT #aportacion
            p_DIS_PRE #num. dispensados
            p_DAT_INI_PRE
            p_DAT_FI_PRE
            p_COD_UP_PRE
          }
        }
      }
    }
  }
`
