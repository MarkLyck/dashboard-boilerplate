import { useState, useEffect } from 'react'
import { message } from 'antd'
import { SPEC_URL } from '~/common/constants'

const options = {}

interface QueryType {
  resource: string
}

const useQuery = (query: QueryType) => {
  const [data, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const url = `${SPEC_URL}/${query.resource}`

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const doFetch = async () => {
      setLoading(true)

      try {
        const res = await fetch(url, options)
        const json = await res.json()

        if (res.status >= 300) {
          message.error(json.message)
          setError(new Error(json.message))
        } else if (!signal.aborted) {
          setResponse(json)
        }
      } catch (e) {
        if (!signal.aborted) setError(e)
      } finally {
        if (!signal.aborted) setLoading(false)
      }
    }

    doFetch()

    return () => {
      // cleanup in case of timeout
      abortController.abort()
    }
  }, [])

  return { data, error, loading }
}

export default useQuery
