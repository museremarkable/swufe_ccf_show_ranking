function processNameEn(name){
	
	let name_list = [];
	
	name_list.push(name.replace("AND","&").trim());
	name_list.push(name.replace("&","AND").trim());
	name_list.push(name.replace("*"," ").trim());
	name_list.push((name.replace("&","AND") + " *").trim());
	
	name_list.push(name.replace(","," "));
	name_list.push(name.replace(","," ").replace("&","AND"));
	name_list.push(name.replace(","," ").replace("AND","&"));
	name_list.push(name.replace("-",": ").trim());
	name_list.push(name.replace("-",":").trim());
	name_list.push(name.replace(": ","-").trim());
	name_list.push(name.replace(":",":").trim());
	
	if (name.indexOf("(") != -1 ){ 
		let temp1 = name.split("(")[0]
		let temp2 = name.split(")")[1]
		name_list.push(temp1 + temp2);
	}
	
	let pattern = /(?<=THE ).*/;
	if (name.match(pattern)){
		name_list.push(name.match(pattern)[0]);
		name_list.push(name.match(pattern)[0].replace("AND","&"));
		name_list.push(name.match(pattern)[0].replace("&","AND"));
	}
	return Array.from(new Set(name_list));
}

function processName(name){
	
	let name_list = [];
	
	name_list.push(name.replace("（",'(').replace("）",')'));

	
	if (name.indexOf("(") != -1 ){
		name_list.push(name.replace("(",'（').replace(")",'）'));
		name_list.push(name.replace("(",'-').replace(")",''));
		
		let temp1 = name.split("(")[0]
		let temp2 = name.split(")")[1]
		name_list.push(temp1 + temp2);
	}
	
	
	
	return Array.from(new Set(name_list));
}



