import { useState } from 'react'
import { message } from 'antd'
import { SPEC_URL } from '~/common/constants'

const options = {}

interface QueryType {
  resource: string
}

const useLazyQuery = (query: QueryType) => {
  const [data, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [called, setCalled] = useState(false)

  const url = `${SPEC_URL}/${query.resource}`

  const doFetch = async () => {
    setCalled(true)
    setLoading(true)

    try {
      const res = await fetch(url, options)
      const json = await res.json()

      if (res.status >= 300) {
        message.error(json.message)
        setError(new Error(json.message))
      }

      setResponse(json)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  return [doFetch, { called, data, error, loading }]
}

export default useLazyQuery
