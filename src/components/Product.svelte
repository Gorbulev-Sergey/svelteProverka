<script>
	export let product = {
		id: '',
		title: '',
		description: '',
		image: '',
		count: 0,
		price: 0
	};
</script>

<div class="card h-100 bg-light text-dark border-0">
	<div class="card-body">
		<h4>{product.title}</h4>
		<small>{product.description}</small><br />
		<small>количество: {product.count}</small><br />
		<small>цена: {product.price}</small>
	</div>
	<img class="img-fluid rounded-bottom" src={product.image} alt="" />
</div>
