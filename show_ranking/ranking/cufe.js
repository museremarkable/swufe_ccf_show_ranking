const cufe = {};


cufe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = cufe.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "CUFE " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

cufe.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = cufe.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "CUFE " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




cufe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "CUFE AAA") {
			return 'cufe-AAA';
		} else if (result == "CUFE AA") {
			return 'cufe-AA';
		} else if (result == "CUFE A") {
			return 'cufe-A';
		} 
	}
	return 'cufe-none';
}

cufe.getRankingSpan = function(name) {
	let rankingInfo = cufe.getRankingInfo(name);
	let span = $('<span>').addClass(cufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cufe.getRankingClass(rankingInfo.rankings) != "cufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

cufe.getRankingSpanEn = function(name) {
	let rankingInfo = cufe.getRankingInfoEn(name);
	let span = $('<span>').addClass(cufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (cufe.getRankingClass(rankingInfo.rankings) != "cufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

