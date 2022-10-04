const app = Vue.createApp({
	data() {
		return {
			cart: 0,
			product: 'Shoes',
			brand: 'Vue Mastery',
			onSale: true,
			selectedVariant: 0,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{ id: 2234, color: 'green', image: './assets/images/sneakers_green.png', quantity: 50 },
				{ id: 2235, color: 'blue', image: './assets/images/sneakers_blue.png', quantity: 0 },
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
		updateVariant(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title() {
			return this.brand + ' ' + this.product
		},
		image() {
			return this.variants[this.selectedVariant].image
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity
		},
		saleMessage() {
			if (this.onSale) {
				return this.brand + ' ' + this.product + ' is on sale.'
			}
			return ''
		}
	}
})