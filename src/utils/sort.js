class Sort {
	sortBy(item,howSort) {
		if(!howSort) {
			return item;
		}
		let items = [...item];
			let how = howSort.replace(/^-/, "");
		items.sort((a,b)=>{
			let aSort = a[how],
				bSort = b[how];
			if (aSort < bSort ) {
				return -1;
			}
			if (aSort > bSort ) {
				return 1;
			}
			return 0; 
		});


		return howSort[0]==='-' ? items.reverse() : items;

	}



}

export let sort = new Sort();