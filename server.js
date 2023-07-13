const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51NRMmIAurErxcB2I4jcXhFBjYxnTStWa1OCrMwCgIm4quBq0txexnTDiO8UsO1KL4LTzQDtWMo3xbG7I1RuvXvBZ00XLUcxIA8'); // Replace with your secret key
const app = express();
app.use(cors());

app.use(express.json()); // This is important as it allows us to parse JSON requests
app.get('/', (req, res) => {
    res.send('Server is running');
});
app.post('/create-checkout-session', async (req, res) => {
    const {items, shippingCost} = req.body; // Grab the cart items and shipping cost from the request

    // Convert items into a format that Stripe requires
    const lineItems = items.map(item => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.id.title,
                },
                unit_amount: parseFloat(item.id.price) * 100, // Stripe uses cents as the unit
            },
            quantity: item.id.quantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: 'http://localhost:3000/Cart', // Replace with your success URL
        cancel_url: 'http://localhost:3000/Login', // Replace with your cancellation URL
    });

    res.json({id: session.id});
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));