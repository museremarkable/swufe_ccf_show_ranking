const cscd = {};


cscd.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = cscd.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
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
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = cscd.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
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

