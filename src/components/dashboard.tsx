import React from 'react'
import Products from './dash/products'
import Videos from './dash/videos'

const Dashboard = () => {
  return (
    <div className="dashboard-container p-4 md:p-12">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        <Products />
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        <Videos />
      </section>
      {/* Other sections like Videos will go here */}

    </div>
  )
}

export default Dashboard