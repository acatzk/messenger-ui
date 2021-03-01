import Head from 'next/head'
import Layout from '~/components/Layout'

export default function Chat () {
  return (
    <>
      <Head>
        <title>Messenger</title>
      </Head>
      <Layout>
        <div className="flex-1 flex flex-col justify-between h-screen">
          <div className="h-16 flex-none shadow"></div>
          <div className="overflow-y-auto flex-grow">
            Do in sit veniam laboris adipisicing. Occaecat nulla occaecat ut ea aliquip minim ea culpa. Nisi sint nisi cupidatat sunt tempor elit nulla velit consequat ea consectetur id. Deserunt id officia dolor nulla. Dolor in minim ipsum do Lorem proident consequat. Deserunt sint adipisicing est consequat dolore cupidatat culpa laboris proident magna. Veniam officia sunt ullamco labore.
          </div>
          <div className="h-16 bg-gray-100 flex-none"></div>
        </div>
      </Layout>
    </>
  )
}