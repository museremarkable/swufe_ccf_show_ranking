const pku = {};


pku.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = pku.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "北大中文核心";
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}



pku.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "北大中文核心") {
			return 'pku-1';
		} 
	}
	return 'pku-none';
}

pku.getRankingSpan = function(name) {
	let rankingInfo = pku.getRankingInfo(name);
	let span = $('<span>').addClass(pku.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (pku.getRankingClass(rankingInfo.rankings) != "pku-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}


