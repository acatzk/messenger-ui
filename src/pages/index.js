import Head from 'next/head'
import Layout from '~/components/Layout'

export default function Home() {


  return (
    <>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        You're in index page
      </Layout>
    </>
  )
}
