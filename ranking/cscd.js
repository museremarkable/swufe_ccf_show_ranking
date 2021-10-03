const cscd = {};


cscd.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = cscd.rankingFullName[name];
	if (ranking == null) {
		ranking = cscd.rankingFullName[name.replace("（",'(').replace("）",')')];
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "CSCD " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

cscd.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = cscd.rankingFullNameEn[name];
	if (ranking == null){
		ranking = cscd.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = cscd.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = cscd.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = cscd.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "CSCD " + new_ranking;
				}
			}else{
				ranking = "CSCD " + new_ranking;
			}
		}
	} else {
		ranking = "CSCD " + ranking;
	}
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




cscd.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "CSCD 扩展库") {
			return 'cscd-kuo';
		} else if (result == "CSCD 核心库") {
			return 'cscd-he';
		} 
	}
	return 'cscd-none';
}

cscd.getRankingSpan = function(name) {
	let rankingInfo = cscd.getRankingInfo(name);
	let span = $('<span>').addClass(cscd.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cscd.getRankingClass(rankingInfo.rankings) != "cscd-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

cscd.getRankingSpanEn = function(name) {
	let rankingInfo = cscd.getRankingInfoEn(name);
	let span = $('<span>').addClass(cscd.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cscd.getRankingClass(rankingInfo.rankings) != "cscd-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

