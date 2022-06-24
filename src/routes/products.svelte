<script>
	import Product from '../components/Product.svelte';
	import { getData, getProducts, addObject } from '../components/Firebase.js';
	import { dataset_dev } from 'svelte/internal';

	let product = { title: '', description: '', image: '', count: 0, price: 0 };
	let promise = new Promise((res, rej) => {
		//addObject({ title: 'Хлеб', description: 'Вкуснейший хлеб', image: '', count: 1, price: 20.2 });
		res(getProducts());
		//res(getData());
	});
</script>

<div class="bg-light p-3 rounded mb-3">
	<div class="d-flex justify-content-between align-items-center mb-2">
		<h4>Добавить новый продукт</h4>
		<button
			class="btn btn-dark me-1"
			on:click={() => {
				if (product.title != '') {
					addObject(product);
					product = {};
				}
			}}>Добавить</button
		>
	</div>
	<div class="d-flex">
		<input class="form-control me-1" bind:value={product.title} placeholder="title" />
		<input class="form-control me-1" bind:value={product.description} placeholder="description" />
		<input class="form-control me-1" bind:value={product.image} placeholder="image" />
		<input
			class="form-control border me-1"
			type="number"
			style="border: 0;"
			bind:value={product.count}
		/>
		<input
			class="form-control border me-1"
			type="number"
			style="border: 0;"
			bind:value={product.price}
		/>
	</div>
</div>

<div class="row">
	{#await promise}
		<div class="d-flex justify-content-center align-items-center vh-100">
			<div class="spinner-grow">
				<span class="visually-hidden">Загрузка...</span>
			</div>
		</div>
	{:then list}
		{#each list as item}
			<div class="col-3 mb-3">
				<Product product={item.data()} />
			</div>
		{/each}
	{/await}
</div>
