import items from "./demo-data";

class Api {
	key = 'item';

	getItems() {
		return new Promise(resolve=>{
			let item = JSON.parse(localStorage.getItem(this.key)),
				inf =[];

			if(Array.isArray(item)) {
				inf = item;
			} else {
				inf = items;
			}
			resolve(inf);
		}) ;
	}

	addItem(store,item){
			let prioretys = Number(item.priorety),
			 itemNew = {
				id: Date.now(),
				title: item.title,
				description: item.description,
				priority: prioretys,
				date: `${item.data}`,
				done: false
			},
				storeOut = [...store,itemNew];
			this.setItems(storeOut);
				return itemNew;	
	}	

	setItems = (store)=> {
		return new Promise(resolve=> {
			localStorage.setItem(this.key,JSON.stringify(store));
			resolve();
		});

	}


}

export let api = new Api();

