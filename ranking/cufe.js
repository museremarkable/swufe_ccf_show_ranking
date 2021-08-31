const cufe = {};


cufe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = cufe.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "cufe " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

cufe.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = cufe.rankingFullNameEn[name];
	if (ranking == null){
		ranking = cufe.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = cufe.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = cufe.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = cufe.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "cufe " + new_ranking;
				}
			}else{
				ranking = "cufe " + new_ranking;
			}
		}
	} else {
		ranking = "cufe " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




cufe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "cufe AAA") {
			return 'cufe-AAA';
		} else if (result == "cufe AA") {
			return 'cufe-AA';
		} else if (result == "cufe A") {
			return 'cufe-A';
		} 
	}
	return 'cufe-none';
}

cufe.getRankingSpan = function(name) {
	let rankingInfo = cufe.getRankingInfo(name);
	let span = $('<span>').addClass(cufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cufe.getRankingClass(rankingInfo.rankings) != "cufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

cufe.getRankingSpanEn = function(name) {
	let rankingInfo = cufe.getRankingInfoEn(name);
	let span = $('<span>').addClass(cufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cufe.getRankingClass(rankingInfo.rankings) != "cufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

