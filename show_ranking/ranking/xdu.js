const xdu = {};


xdu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = xdu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "XDU " + ranking;
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

xdu.getRankingInfoEn = function(name) {
	
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = xdu.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "XDU " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




xdu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "XDU 1类贡献度") {
			return 'xdu-1';
		} else if (result == "XDU 2类贡献度") {
			return 'xdu-2';
		} 
	}
	return 'xdu-none';
}

xdu.getRankingSpan = function(name) {
	let rankingInfo = xdu.getRankingInfo(name);
	let span = $('<span>').addClass(xdu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (xdu.getRankingClass(rankingInfo.rankings) != "xdu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

xdu.getRankingSpanEn = function(name) {
	let rankingInfo = xdu.getRankingInfoEn(name);
	let span = $('<span>').addClass(xdu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (xdu.getRankingClass(rankingInfo.rankings) != "xdu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

