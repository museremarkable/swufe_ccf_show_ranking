const uibe = {};


uibe.getRankingInfo = function(name) {
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
	
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = uibe.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
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

