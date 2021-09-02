const fudan = {};


fudan.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = fudan.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "FUDAN " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

fudan.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = fudan.rankingFullNameEn[name];
	if (ranking == null){
		ranking = fudan.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = fudan.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = fudan.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = fudan.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "FUDAN " + new_ranking;
				}
			}else{
				ranking = "FUDAN " + new_ranking;
			}
		}
	} else {
		ranking = "FUDAN " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




fudan.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "FUDAN A") {
			return 'fudan-A';
		} else if (result == "FUDAN B") {
			return 'fudan-B';
		} 
	}
	return 'fudan-none';
}

fudan.getRankingSpan = function(name) {
	let rankingInfo = fudan.getRankingInfo(name);
	let span = $('<span>').addClass(fudan.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (fudan.getRankingClass(rankingInfo.rankings) != "fudan-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

fudan.getRankingSpanEn = function(name) {
	let rankingInfo = fudan.getRankingInfoEn(name);
	let span = $('<span>').addClass(fudan.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (fudan.getRankingClass(rankingInfo.rankings) != "fudan-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

