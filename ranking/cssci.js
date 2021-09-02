const cssci = {};


cssci.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = cssci.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

cssci.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "CSSCI") {
			return 'cssci-cssci';
		} 
	}
	return 'cssci-none';
}

cssci.getRankingSpan = function(name) {
	let rankingInfo = cssci.getRankingInfo(name);
	let span = $('<span>').addClass(cssci.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cssci.getRankingClass(rankingInfo.rankings) != "cssci-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}


