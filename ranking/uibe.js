const uibe = {};


uibe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = uibe.rankingFullName[name];
	if (ranking == null) {
		ranking = uibe.rankingFullName[name.replace("（",'(').replace("）",')')];
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "uibe " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

uibe.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = uibe.rankingFullNameEn[name];
	if (ranking == null){
		ranking = uibe.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = uibe.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = uibe.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = uibe.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "UIBE " + new_ranking;
				}
			}else{
				ranking = "UIBE " + new_ranking;
			}
		}
	} else {
		ranking = "UIBE " + ranking;
	}
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




uibe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "UIBE A") {
			return 'uibe-A';
		} else if (result == "UIBE A-") {
			return 'uibe-A-';
		} else if (result == "UIBE B") {
			return 'uibe-B';
		} 
	}
	return 'uibe-none';
}

uibe.getRankingSpan = function(name) {
	let rankingInfo = uibe.getRankingInfo(name);
	let span = $('<span>').addClass(uibe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (uibe.getRankingClass(rankingInfo.rankings) != "uibe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

uibe.getRankingSpanEn = function(name) {
	let rankingInfo = uibe.getRankingInfoEn(name);
	let span = $('<span>').addClass(uibe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (uibe.getRankingClass(rankingInfo.rankings) != "uibe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

