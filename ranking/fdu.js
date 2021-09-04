const fdu = {};


fdu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = fdu.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "FDU " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

fdu.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = fdu.rankingFullNameEn[name];
	if (ranking == null){
		ranking = fdu.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = fdu.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = fdu.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = fdu.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "FDU " + new_ranking;
				}
			}else{
				ranking = "FDU " + new_ranking;
			}
		}
	} else {
		ranking = "FDU " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




fdu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "FDU A") {
			return 'fdu-A';
		} else if (result == "FDU B") {
			return 'fdu-B';
		} 
	}
	return 'fdu-none';
}

fdu.getRankingSpan = function(name) {
	let rankingInfo = fdu.getRankingInfo(name);
	let span = $('<span>').addClass(fdu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (fdu.getRankingClass(rankingInfo.rankings) != "fdu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

fdu.getRankingSpanEn = function(name) {
	let rankingInfo = fdu.getRankingInfoEn(name);
	let span = $('<span>').addClass(fdu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (fdu.getRankingClass(rankingInfo.rankings) != "fdu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

