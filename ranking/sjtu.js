const sjtu = {};


sjtu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = sjtu.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "sjtu " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sjtu.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = sjtu.rankingFullNameEn[name];
	if (ranking == null){
		ranking = sjtu.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = sjtu.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = sjtu.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = sjtu.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "sjtu " + new_ranking;
				}
			}else{
				ranking = "sjtu " + new_ranking;
			}
		}
	} else {
		ranking = "sjtu " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




sjtu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "sjtu A") {
			return 'sjtu-A';
		} else if (result == "sjtu B") {
			return 'sjtu-B';
		} 
	}
	return 'sjtu-none';
}

sjtu.getRankingSpan = function(name) {
	let rankingInfo = sjtu.getRankingInfo(name);
	let span = $('<span>').addClass(sjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sjtu.getRankingClass(rankingInfo.rankings) != "sjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

sjtu.getRankingSpanEn = function(name) {
	let rankingInfo = sjtu.getRankingInfoEn(name);
	let span = $('<span>').addClass(sjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sjtu.getRankingClass(rankingInfo.rankings) != "sjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

