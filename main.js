const app = Vue.createApp({
	data() {
		return {
			product: 'Shoes',
			image: './assets/images/sneakers_green.png',
			inventory: 8,
			onSale: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			sizes: ['S', 'M', 'L'],
			variants: [
				{ id: 2234, color: 'green' },
				{ id: 2235, color: 'blue' },
			]
		}
	}
})