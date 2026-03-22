# e-plantShopping

A React + Redux Toolkit shopping cart app for an online plant store called **Paradise Nursery**.

## Features

### Landing Page

- Paradise Nursery welcome message
- company information (`AboutUs.jsx`)
- background hero image (`App.css`)
- "Get Started" button (`/products`)

### Product List Page

- multiple plant categories (3+)
- at least 6 plants per category
- plant image, name, description, and price
- Add to Cart button that becomes disabled after adding
- Router-based navigation (`/`, `/products`, `/cart`)
- dynamic cart icon count

### Cart Page

- total cart amount
- per-item subtotal
- quantity increment/decrement
- remove item
- continue shopping
- checkout placeholder alert

### Redux Cart State

- `addItem`
- `removeItem`
- `updateQuantity`
- item identity based on stable `id` (supports same-name products)

### Testing

- reducer unit tests with Vitest
- covers add/increment/remove/update and duplicate-name-different-id behavior

## Tech Stack

- React 18
- Vite 5
- Redux Toolkit
- React Redux
- React Router DOM
- CSS
- Vitest

## Project Structure

```text
src/
  components/
    Header.jsx
    Header.css
    ProductCard.jsx
    CategorySection.jsx
  data/
    plants.js
  AboutUs.jsx
  App.jsx
  App.css
  CartPage.jsx
  ProductList.jsx
  ProductList.css
  CartItem.jsx
  CartItem.css
  CartSlice.js
  CartSlice.test.js
  store.js
  main.jsx
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```

## Preview Production Build

```bash
npm run preview
```

## Deploy to GitHub Pages

This project already includes `gh-pages` scripts in `package.json`:

- `predeploy`: `npm run build`
- `deploy`: `gh-pages -d dist`

Deploy command:

```bash
npm run deploy
```

Important:

- `vite.config.js` currently uses `base: "/e-plantShopping"`.
- Make sure this matches your GitHub repository name.
- If your repository name changes, update `base` accordingly.

## Redux Store

The Redux store is configured in `src/store.js` with the `cart` slice:

- `cart: cartReducer`

The app is wrapped with `<Provider store={store}>` in `src/main.jsx`.

## Notes

- Cart count reflects total item quantity.
- Checkout is a placeholder and can be extended with real payment flow later.
