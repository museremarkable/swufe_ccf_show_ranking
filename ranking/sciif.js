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
	let ranking = sciif.impactFactorFullNameEn[name];
	if (ranking == null){
		ranking = sciif.impactFactorFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = sciif.impactFactorFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null){
		ranking = sciif.impactFactorFullNameEn[name.replace("-"," ")];
	}
	if (ranking == null){
		ranking = sciif.impactFactorFullNameEn[name.replace(":"," ")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = sciif.impactFactorFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = sciif.impactFactorFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "SCIIF " + new_ranking;
				}
			}else{
				ranking = "SCIIF " + new_ranking;
			}
		}
	} else {
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

