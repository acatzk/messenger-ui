import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Spinner from '~/components/Spinner'

export default function IndexPage() {

  const router = useRouter()

  useEffect(() => {
    router.push('/t/100002023141302')
  }, [])

  return <Spinner />
}
