const sciif = {};


sciif.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = sciif.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "sciif " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sciif.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sciif.impactFactorFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SCIIF " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
	
	
}




sciif.getRankingClass = function(rankings) {
	for (let result of rankings) { 
		var number = parseFloat(result.split(" ")[1]) 
		if (number >= 10) {
			return 'sciif-10';
		} else if (number >= 4 && number < 10) {
			return 'sciif-4';
		} else if (number >= 2 && number < 4) {
			return 'sciif-2';
		} else if (number >= 1 && number < 2) {
			return 'sciif-1';
		} else if (number >= 0 && number < 1) {
			return 'sciif-0';
		} 
	}
	return 'sciif-none';
}


sciif.getRankingSpanEn = function(name) {
	let rankingInfo = sciif.getRankingInfoEn(name);
	
	let span = $('<span>').addClass(sciif.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sciif.getRankingClass(rankingInfo.rankings) != "sciif-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

