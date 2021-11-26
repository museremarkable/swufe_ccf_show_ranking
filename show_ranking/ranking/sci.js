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
		ranking = "SCI " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sci.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sci.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SCI " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




sci.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SCI Q1") {
			return 'sci-Q1';
		} else if (result == "SCI Q2") {
			return 'sci-Q2';
		} else if (result == "SCI Q3") {
			return 'sci-Q3';
		} else if (result == "SCI Q4") {
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

