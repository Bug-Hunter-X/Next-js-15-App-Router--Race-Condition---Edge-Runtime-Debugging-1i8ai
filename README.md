# Next.js 15 App Router: Race Condition and Edge Runtime Debugging
This repository demonstrates a rare bug in Next.js 15's App Router involving race conditions when combining server components, asynchronous data fetching, and client-side navigation. It also highlights the challenges in debugging edge runtime errors.

## Bug Description
A race condition can occur when a server component fetches data based on a route parameter, and the client component subsequently makes a request based on that same parameter before it's fully hydrated.  Client-side navigation might change the parameter during this period, leading to stale data.  This is more pronounced with asynchronous data fetching in the server component.
Additionally, edge runtime errors can be difficult to reproduce and debug because they may not surface in the usual Next.js error boundaries.

## Setup
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Steps to Reproduce
1. Navigate to a route with a specific parameter (e.g., `/product/1`).
2. Quickly navigate to another route with a different parameter (e.g., `/product/2`).
3. Observe potential inconsistencies in data display, indicating the race condition.

## Solution
The solution involves careful synchronization between server and client-side data fetching.  Techniques such as ensuring all data is fully hydrated before client-side navigation or using suspense to handle loading states can prevent this.  Improved error handling using a dedicated middleware layer to catch potential edge runtime errors is essential for robust debugging.
