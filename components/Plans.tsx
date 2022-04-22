import { CheckIcon } from '@heroicons/react/solid'
import CircularProgress from '@mui/material/CircularProgress'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { FC, Fragment, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loadCheckout } from '../lib/stripe'
import Table from './Table'

const Plans: FC<{ products: Product[] }> = ({ products }) => {
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState(products[2])
  const [isBillingLoading, setIsBillingLoading] = useState(false)

  console.log(products)

  const subscribeToPlan = async () => {
    if (user === null) return

    loadCheckout(selectedPlan.prices[0].id)
    setIsBillingLoading(true)
  }

  return (
    <Fragment>
      <Head>
        <title>Netflix</title>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>
      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products.map((product) => (
              <div
                key={product.id}
                className={`plan-box ${
                  selectedPlan.id === product.id
                    ? 'opacity-100'
                    : 'opacity-60 after:border-none'
                }`}
                onClick={() => {
                  setSelectedPlan(product)
                }}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914]
             py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
               isBillingLoading && 'opacity-60'
             }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <CircularProgress size="medium" className="w-6" color="inherit" />
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </main>
    </Fragment>
  )
}

export default Plans
