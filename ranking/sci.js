const sci = {};


sci.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = sci.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "sci " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sci.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking = sci.rankingFullNameEn[name];
	if (ranking == null){
		ranking = sci.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = sci.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null){
		ranking = sci.rankingFullNameEn[name.replace("-"," ")];
	}
	if (ranking == null){
		ranking = sci.rankingFullNameEn[name.replace(":"," ")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = sci.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = sci.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "sci " + new_ranking;
				}
			}else{
				ranking = "sci " + new_ranking;
			}
		}
	} else {
		ranking = "sci " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}




sci.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "sci Q1") {
			return 'sci-Q1';
		} else if (result == "sci Q2") {
			return 'sci-Q2';
		} else if (result == "sci Q3") {
			return 'sci-Q3';
		} else if (result == "sci Q4") {
			return 'sci-Q4';
		} 
	}
	return 'sci-none';
}



sci.getRankingSpanEn = function(name) {
	let rankingInfo = sci.getRankingInfoEn(name);
	let span = $('<span>').addClass(sci.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sci.getRankingClass(rankingInfo.rankings) != "sci-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

