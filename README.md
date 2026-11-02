# WinCo Bulk Food Finder

A full-stack web application that helps shoppers search for bulk foods and find their approximate locations on a store map.

## Demo 

https://github.com/user-attachments/assets/58f47f8e-fc4e-4519-aede-ee9bb0c81f61



## Why I Built This

As a WinCo employee, I have seen customers struggle to find products in the bulk department and sometimes leave without the items they wanted. Inspired by the product-location feature in Target’s app, I built this project to explore how a searchable catalog and store map could make bulk shopping easier.

## Features

- **Product search:** Case-insensitive filtering across a catalog of 381 bulk products.
- **Product details:** Individual pages showing product names, categories, sections, and listed prices per pound.
- **Store map:** An SVG map of four bulk-food islands, with eight numbered long faces and a marker based on the selected product’s section and approximate left, middle, or right position.
- **Navigation:** Product detail URLs, a home link, and a back-to-products link. Search remains available on the product-list page, and the query is preserved during client-side navigation.
- **Search controls:** A clear button that resets the query and returns keyboard focus to the input.
- **Request states:** Loading, error, empty-results, and product-not-found messages.
- **Interface:** React components styled with Tailwind CSS, including a responsive product grid, circular image placeholders, and a branded navbar.
- **Backend API:** Express endpoints for creating, reading, updating, replacing, and deleting products.

## Tech Stack

| Layer        | Technologies                                |
| ------------ | ------------------------------------------- |
| Frontend     | React, JavaScript, Vite                     |
| Styling      | Tailwind CSS, CSS                           |
| Routing      | React Router                                |
| Map          | Inline SVG rendered with JSX                |
| Backend      | Node.js, Express                            |
| Data         | In-memory JavaScript objects served as JSON |
| Code quality | ESLint                                      |

## Architecture

The React frontend lives in `client/`, while the Express backend lives at the repository root. The backend separates routes, controllers, and service logic.

The frontend fetches `/products` through a custom `useFetch` hook that manages data, loading, errors, and request cancellation with `AbortController`. Search text stays in `App`, and the filtered list is derived from the fetched products.

The details route, `/product/:id`, reads the URL parameter and finds the corresponding product. The map receives section and position props and translates them into SVG marker coordinates.

During development, Vite proxies `/products` requests to the Express server on port `3050`. Frontend detail routes use the singular `/product/:id` path to avoid conflicting with the API proxy.

## Getting Started

Install Node.js and npm, then clone the repository:

```bash
git clone https://github.com/buaypd/winco-bulk-finder.git
cd winco-bulk-finder
npm install
```

### Start the backend

From the repository root:

```bash
npm run dev
```

This starts `server.js` with nodemon, which automatically restarts the backend when files change. To run without automatic restarts, use `npm start` instead.

The API should be available at `http://localhost:3050/products`.

### Start the frontend

In a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`. Keep both servers running.

### Frontend checks

From `client/`:

```bash
npm run lint
npm run build
```

## API Endpoints

| Method | Endpoint        | Purpose               |
| ------ | --------------- | --------------------- |
| GET    | `/products`     | Retrieve all products |
| GET    | `/products/:id` | Retrieve one product  |
| POST   | `/products`     | Create a product      |
| PATCH  | `/products/:id` | Update product fields |
| PUT    | `/products/:id` | Replace a product     |
| DELETE | `/products/:id` | Delete a product      |

## What I Learned

- Passing data through props and keeping state in the component that owns it.
- Using controlled inputs, event handlers, and derived values to filter products.
- Extracting fetch logic into a reusable custom hook and canceling outdated requests during effect cleanup.
- Using route parameters for product selection so detail pages work after a refresh.
- Handling loading, failure, missing products, and unknown locations separately.
- Using refs to manage input focus without storing DOM elements in state.
- Rendering data-driven SVG markers and grouping related map labels.
- Combining Tailwind utilities with existing CSS, including resolving cascade-layer conflicts.
- Connecting a React frontend to an Express CRUD API through a Vite development proxy.

## Data and Current Limitations

- The catalog was assembled from public bulk-product listings. Prices are not verified as current in-store prices.
- Locations are approximate, based on my recollection of the department layout. Unknown locations are left unset, and the map does not show real-time shopper positioning or walking directions.
- The map currently represents the numbered long faces. Short-end locations, including the spices endcap, still need mapping.
- Products are stored in memory. API changes are lost when the backend restarts.
- Product-card photos are shared placeholders rather than individual product photos.

## Possible Next Steps

- Verify product locations and prices in the store.
- Map short-end displays and improve map readability on smaller screens.
- Add persistent storage and individual product images.
- Add an authenticated admin dashboard for creating, editing, and deleting products, updating prices, and correcting map locations.

This is an independent personal portfolio project, not an official WinCo Foods application.


