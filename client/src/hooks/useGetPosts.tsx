import useSWR from 'swr'

import { fetchPosts } from '../lib/apis/fetchPosts'
import { SWR_FETCH_POST_KEY } from '../constants/swrKey'

export const useGetPosts = () => {
  const { data, error, isValidating } = useSWR(SWR_FETCH_POST_KEY, fetchPosts, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  return {
    data,
    error,
    isValidating
  }
}