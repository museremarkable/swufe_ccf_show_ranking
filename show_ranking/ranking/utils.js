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
	name_list.push(name.replace("：",":").trim());
	name_list.push(name.replace(".","").trim());
	if (name.indexOf(":") != -1 ){
		name_list.push(name.split(":")[0].trim());
		name_list.push(name.split(":")[1].trim());
	}
	name_list.push("IEEE "+name);
	if (name.indexOf("=") != -1 ){
		name_list.push(name.replace(" = ","-").trim());
		temp_name_array = name.split("=");
		for(j = 0; j < temp_name_array.length; j++) {
		   name_list.push(temp_name_array[j]);
		} 
	}
	
	if (name.indexOf("(") != -1 ){ 
		let temp1 = name.split("(")[0];
		name_list.push(temp1.trim());
		let temp2 = name.split(")")[1];
		let temp_title1 = temp1 + temp2;
		name_list.push(temp_title1.trim());
		
		temp3 = name.split("(")[1];
		temp4 = temp3.split(")")[0];
		let temp_title2 = temp3 + temp4;
		name_list.push(temp_title2.trim());
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
	name_list.push(name.replace("·",'.'));
	name_list.push(name.replace("·",'、'));
	
	if (name.indexOf("(") != -1 ){
		name_list.push(name.replace("(",'.').replace(")",''));
		name_list.push(name.replace("(",'（').replace(")",'）'));
		name_list.push(name.replace("(",'-').replace(")",''));
		
		let temp1 = name.split("(")[0]
		let temp2 = name.split(")")[1]
		name_list.push(temp1 + temp2);
	}
	
	
	
	return Array.from(new Set(name_list));
}



