// bugSolution.js
'use client';
import { Suspense } from 'react';

async function fetchData(id) {
  // Simulate asynchronous data fetching
  await new Promise((res) => setTimeout(res, 500));
  return { id, data: `Data for product ${id}` };
}

export default async function ProductPage({ params }) {
  const { id } = params;
  const productData = await fetchData(id);
  return (
    <div>
      <h1>Product {id}</h1>
      <p>{productData.data}</p>
    </div>
  );
}

// Additional improvements: Use a loading state while fetching data
// Integrate a middleware to handle edge runtime errors to improve debugging