import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Loading, SingleWorkView } from '../../components'
import { work } from '../../data/work'

export default function SingleWork({ requestedWork }) {
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflowY = 'auto'
  }, [])

  if (router.isFallback) {
    return <Loading />
  }

  const title = `Agustín Piriz - ${requestedWork.title}`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <SingleWorkView requestedWork={requestedWork} />
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps = ({ params }) => {
  const { slug } = params

  const requestedWork = work.find((singleWork) => {
    if (singleWork.hasOwnProperty('slug')) {
      return singleWork.slug === slug
    }
  })

  if (requestedWork) {
    return {
      props: {
        requestedWork,
      },
    }
  } else {
    return {
      notFound: true,
    }
  }
}
