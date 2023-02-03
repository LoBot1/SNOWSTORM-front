import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const stripeTestPromise = loadStripe("pk_test_51MUBAvIG0wu5IZ8a93ksTeKdAXYyHzxTlEQHLTnaEy2mBAy8OIvsRZmAdRdag8sPcHsBk0E3xNxYBK3IG2IXcgXS00kI6XRdjb")

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}