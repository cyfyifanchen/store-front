'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import Button from '@/components/ui/button'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { toast } from 'react-hot-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, Terminal } from 'lucide-react'

const Summary = () => {
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.')
      removeAll()
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.')
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    )

    window.location = response.data.url
  }

  const disabled = true

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={disabled}
        className="w-full mt-6"
      >
        Checkout
      </Button>
      <Alert
        variant="destructive"
        className="mt-5"
      >
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Payment Unsupported</AlertTitle>
        <AlertDescription>No checkout available at the moment</AlertDescription>
      </Alert>
    </div>
  )
}

export default Summary
