import { getFunctions, httpsCallable } from '@firebase/functions'
import {
  createCheckoutSession,
  getStripePayments,
} from '@stripe/firestore-stripe-payments'
import app from './firebase'

const payments = getStripePayments(app, {
  productsCollection: 'products',
  customersCollection: 'customers',
})

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message))
}

const goToBillingPortal = async () => {
  const instance = getFunctions(app, 'asia-southeast2')
  const functionsRef = httpsCallable(
    instance,
    'ext-firestore-stripe-payments-createPortalLink'
  )

  await functionsRef({
    returnUrl: `${window.location.origin}/account`,
  })
    .then(({ data }: any) => window.location.assign(data.url))
    .catch((error) => console.log(error.message))
}

export { loadCheckout, goToBillingPortal }
export default payments
