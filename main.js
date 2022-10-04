const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Shoes',
			image: './assets/images/sneakers_green.png',
			inventory: 8,
			onSale: true,
			details: ['50% cotton', '30% wool', '20% polyester'],
			sizes: ['S', 'M', 'L'],
			variants: [
				{ id: 2234, color: 'green', image: './assets/images/sneakers_green.png' },
				{ id: 2235, color: 'blue', image: './assets/images/sneakers_blue.png' },
			]
		}
	},
	methods: {
		addToCart() {
			this.cart +=1
		},
		removeFromCart() {
			this.cart -=1
		},
		updateImage(variantImage) {
			this.image = variantImage
		}
	}
})