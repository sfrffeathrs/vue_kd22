const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Shoes',
			image: './assets/images/sneakers_green.png',
			inStock: false,
			details: ['50% cotton', '30% wool', '20% polyester'],
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