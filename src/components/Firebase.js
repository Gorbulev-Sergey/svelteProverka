import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import { getFirestore, collection, addDoc, doc, getDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAi-71cKm9oV9x1hmc_hx3Kxe3HqmyK1L0',
	authDomain: 'wasmproducts-48fbb.firebaseapp.com',
	databaseURL: 'https://wasmproducts-48fbb-default-rtdb.firebaseio.com',
	projectId: 'wasmproducts-48fbb',
	storageBucket: 'wasmproducts-48fbb.appspot.com',
	messagingSenderId: '926285225596',
	appId: '1:926285225596:web:de0bec62fcada5dd2fb3f9'
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dataFirestore = getFirestore(app);

export let getData = () => {
	let a = [];
	let data;
	onValue(ref(database, 'products'), (snap) => {
		data = Object.values(snap.val());
		console.log(data);
	});
	data.forEach((item) => a.push(item));
	return a;
};

export let addProduct = async (product) => {
	try {
		await addDoc(collection(dataFirestore, 'products'), {
			title: product.title,
			description: product.description,
			image: product.image,
			count: product.count,
			price: product.price
		});
	} catch (e) {}
};

export let addObject = async (item) => {
	try {
		await addDoc(collection(dataFirestore, 'products'), item);
	} catch (e) {}
};

export let getProducts = async () => {
	let a = [];
	let d;
	d = await getDocs(collection(dataFirestore, 'products'));
	d.forEach((item) => {
		a.push(item);
	});
	return a;
};
