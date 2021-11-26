const sjtu = {};


sjtu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sjtu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "SJTU " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sjtu.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sjtu.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SJTU " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




sjtu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SJTU A") {
			return 'sjtu-A';
		} else if (result == "SJTU B") {
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

