/* eslint-disable no-empty-pattern */
import { useState, useEffect } from 'react'
import { useQuery, useLazyQuery } from '@apollo/client'
import {
  GET_COUNTRIES,
  GET_POPULATIONS,
  GET_PROVINCES,
} from '../../api/populations'

export const useLocations = () => {
  const [populations, setPopulations] = useState([])
  const [provinces, setProvinces] = useState([])
  const [countries, setCountries] = useState([])

  /**
   *
   * @param {array} populationsList Unique Array of populations with repeated provincias
   * @returns an object with unique provincias and nested problaciones of the same pronvincia
   *
   */
  const keyValueFormat = (populationsList) =>
    populationsList.reduce((indexer, { poblacion, ...populationData }) => {
      if (!indexer[poblacion]) indexer[poblacion] = []
      indexer[poblacion].push(populationData)
      return indexer
    }, {})

  useQuery(GET_PROVINCES, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ provinciasP: { data } }) => {
      setProvinces(data)
    },
  })

  useQuery(GET_COUNTRIES, {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    onCompleted: ({ paisesP: { data } }) => {
      setCountries(data)
    },
  })

  const [getPopulations, { data: getPopulationsIdData }] = useLazyQuery(
    GET_POPULATIONS,
    {
      fetchPolicy: 'no-cache',
      nextFetchPolicy: 'no-cache',
    },
  )

  const getPopulationsByProvinceId = async (provinceId) => {
    const provincia_id = Number(provinceId)
    getPopulations({
      variables: {
        provincia_id,
      },
    })
  }

  useEffect(() => {
    if (getPopulationsIdData) {
      const {
        poblacionesP: { data },
      } = getPopulationsIdData

      setPopulations(keyValueFormat(data))
    }
  }, [getPopulationsIdData])

  return {
    provinces,
    countries,
    getPopulationsByProvinceId,
    populations,
  }
}
