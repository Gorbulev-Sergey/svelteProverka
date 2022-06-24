<script>
	import Book from '../components/Book.svelte';

	let books = [
		{ title: 'Новая книга', description: 'Хорошая книга' },
		{ title: 'Другая книга', description: 'Хорошая книга' },
		{ title: 'Книга', description: 'Я тебя люблю' },
		{ title: 'Мудрость приходит не сразу', description: 'Как ты думаешь?' }
	];
</script>

<h1 class="mb-3">Список книг</h1>

{#each books as book}
	<Book book={{ title: book.title, description: book.description }} />
{/each}
