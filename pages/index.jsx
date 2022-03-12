import Head from 'next/head'
import { Collapsible } from '../components/index'
import { components } from '../components'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Head>
        <title>Systems</title>
        <meta name="description" content="Testing cool algorithms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl w-full'>
        <h1 className='flex items-center justify-center text-3xl font-helvetica h-20 bg-red-600'>Systems</h1>

        {components.map((item, index) => {
          return(
            <Collapsible key={index} title={`${item.id}. ${item.name}`}>
              {item.component}
            </Collapsible>
          )
        })}
      </main>
    </div>
  )
}
