const xmu = {};


xmu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	
	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = xmu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

xmu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "XMU一类") {
			return 'xmu-1';
		} 
	}
	return 'xmu-none';
}

xmu.getRankingSpan = function(name) {
	let rankingInfo = xmu.getRankingInfo(name);
	let span = $('<span>').addClass(xmu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (xmu.getRankingClass(rankingInfo.rankings) != "xmu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}


