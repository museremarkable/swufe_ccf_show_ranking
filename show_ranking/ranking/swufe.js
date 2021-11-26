const swufe = {};


swufe.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = swufe.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "SWUFE " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

swufe.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = swufe.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SWUFE " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}

swufe.CCFgetRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	
	// let ranking = ccf.rankingFullName[name];
	// if (ranking == null) {
	// 	ranking = "";
	// 	name = "IEEE " + name; 
	// 	var new_ranking = ccf.rankingFullName[name];
	// 	if (new_ranking){
	// 		ranking = new_ranking;
	// 	}
	// } 
	// rankingInfo.rankings.push(ranking);
	// return rankingInfo;
	
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = ccf.rankingFullName[name_list[i]];
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


swufe.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SWUFE A") {
			return 'swufe-A';
		} else if (result == "SWUFE A+") {
			return 'swufe-AA';
		} else if (result == "SWUFE B") {
			return 'swufe-B';
		} else if (result == "SWUFE C") {
			return 'swufe-C';
		} 
	}
	return 'swufe-none';
}

swufe.getRankingSpan = function(name) {
	let rankingInfo = swufe.getRankingInfo(name);
	let span = $('<span>').addClass(swufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swufe.getRankingSpanEn = function(name) {
	let rankingInfo = swufe.getRankingInfoEn(name);
	let span = $('<span>').addClass(swufe.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swufe.CCFgetRankingSpanEn= function(name) {
	let rankingInfo = swufe.CCFgetRankingInfoEn(name);
	if (rankingInfo.rankings != "") {
		var span = $('<span>').addClass('ccf-ranking').addClass(ccf.getRankingClass(rankingInfo.rankings)).text(
			'CCF ' + rankingInfo.rankings.join('/'));
	}
	if (swufe.getRankingClass(rankingInfo.rankings) != "swufe-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

