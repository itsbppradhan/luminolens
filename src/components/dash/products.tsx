import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

// Placeholder product data
const products = [
	{
		id: '1',
		name: 'LuminoLens Classic',
		tags: ['Student', 'Affordable'],
		image: '/1.jpg',
	},
	{
		id: '2',
		name: 'LuminoLens Pro',
		tags: ['Designer', 'Minimal'],
		image: '/2.jpg',
	},
]

const Products = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{products.map((product) => (
				<Card key={product.id} className="p-0 overflow-hidden flex flex-col justify-end relative h-80 shadow-lg">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-cover absolute top-0 left-0 z-0"
					/>
					<div className="relative z-10 mt-auto bg-white/40 dark:bg-black/40 backdrop-blur text-white p-4 rounded-t-xl flex flex-col items-start">
						<h3 className="font-semibold text-lg mb-2 text-black dark:text-white">{product.name}</h3>
						<div className="flex flex-wrap justify-start gap-2 mb-4 items-start w-full">
							{product.tags.map((tag) => (
								<span
									key={tag}
									className="bg-blue-200/60 text-blue-900 dark:bg-blue-900/60 dark:text-blue-100 px-2 py-1 rounded text-xs"
								>
									{tag}
								</span>
							))}
						</div>
						<div className="flex gap-2">
							<Button variant="default" className="bg-white text-blue-700 hover:bg-blue-100">
								Buy Now
							</Button>
							<Button variant="outline" className="border-white text-black dark:text-white hover:bg-blue-700/80">
								Learn More
							</Button>
						</div>
					</div>
				</Card>
			))}
		</div>
	)
}

export default Products