import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import DanceClassRouter from './routes/DanceClass.js';
import PriceRouter from './routes/Price.js';
import TeacherRouter from './routes/Teacher.js';
import Stripe from 'stripe';
import Price from './models/Price.js';

const app = express();
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(express.json());

app.use('/danceclass', DanceClassRouter);
app.use('/price', PriceRouter);
app.use('/teacher', TeacherRouter);
app.post('/create-checkout-session', async (req, res) => {
  const price = req.body.price;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: price.passType,
          },
          unit_amount: price.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/checkout-success',
    cancel_url: 'http://localhost:3000/price',
  });
  res.send({ url: session.url });
});

const PORT = process.env.PORT || 8801;

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is connected on ${PORT}`));
  })
  .catch((err) => console.log(err));
