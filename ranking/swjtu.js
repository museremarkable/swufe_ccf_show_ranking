const swjtu = {};


swjtu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = swjtu.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "SWJTU " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

swjtu.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = swjtu.rankingFullNameEn[name];
	if (ranking == null){
		ranking = swjtu.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = swjtu.rankingFullNameEn[name.replace("&","AND")];
	}
	
	if (ranking == null){
		name = name.replace(","," ")
		ranking = swjtu.rankingFullNameEn[name];
		if (ranking == null){
			ranking = swjtu.rankingFullNameEn[name.replace("&","AND")];
		}
		if (ranking == null){
			ranking = swjtu.rankingFullNameEn[name.replace("AND","&")];
		}
	}
	
	if (ranking == null){
		ranking = swjtu.rankingFullNameEn[name.replace("*"," ").trim()];
	}
	if (ranking == null){
		name = name.replace("&","AND") + " *"
		ranking = swjtu.rankingFullNameEn[name.trim()];
	}
	if (ranking == null){
		temp1 = name.substring("(")[0]
		temp2 = name.substring(")")[1]
		name = temp1 + temp2
		ranking = swjtu.rankingFullNameEn[name.trim()];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = swjtu.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = swjtu.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "SWJTU " + new_ranking;
				}
			}else{
				ranking = "SWJTU " + new_ranking;
			}
		}
	} else {
		ranking = "SWJTU " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




swjtu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SWJTU A++") {
			return 'swjtu-AAA';
		} else if (result == "SWJTU A+") {
			return 'swjtu-AA';
		} else if (result == "SWJTU A") {
			return 'swjtu-A';
		} else if (result == "SWJTU B+") {
			return 'swjtu-BB';
		}else if (result == "SWJTU B") {
			return 'swjtu-B';
		}else if (result == "SWJTU C") {
			return 'swjtu-C';
		}
	}
	return 'swjtu-none';
}

swjtu.getRankingSpan = function(name) {
	let rankingInfo = swjtu.getRankingInfo(name);
	let span = $('<span>').addClass(swjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swjtu.getRankingClass(rankingInfo.rankings) != "swjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swjtu.getRankingSpanEn = function(name) {
	let rankingInfo = swjtu.getRankingInfoEn(name);
	let span = $('<span>').addClass(swjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swjtu.getRankingClass(rankingInfo.rankings) != "swjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

