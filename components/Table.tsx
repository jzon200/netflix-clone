import CheckIcon from '@heroicons/react/outline/CheckIcon'
import { Product } from '@stripe/firestore-stripe-payments'
import { FC } from 'react'

type Props = {
  products: Product[]
  selectedPlan: Product
}

const Table: FC<Props> = (props) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="table-row">
          <td className="table-data-title">Monthly price</td>

          {props.products.map((product) => (
            <td
              className={`table-data-feature ${
                props.selectedPlan.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-white'
              }`}
              key={product.id}
            >
              ₱{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>

        <tr className="table-row">
          <td className="table-data-title">Video quality</td>
          {props.products.map((product) => (
            <td
              className={`table-data-feature ${
                props.selectedPlan.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-white'
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr className="table-row">
          <td className="table-data-title">Resolution</td>
          {props.products.map((product) => (
            <td
              className={`table-data-feature ${
                props.selectedPlan.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-white'
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr className="table-row">
          <td className="table-data-title">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {props.products.map((product) => (
            <td
              className={`table-data-feature ${
                props.selectedPlan.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-white'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
