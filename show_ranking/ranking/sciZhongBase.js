const sciZhongBase = {};


sciZhongBase.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = sciZhongBase.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "SCI " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sciZhongBase.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sciZhongBase.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SCI基础版" + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




sciZhongBase.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SCI基础版一区") {
			return 'sci-1';
		}
	}
	return 'sci-none';
}



sciZhongBase.getRankingSpanEn = function(name) {
	let rankingInfo = sciZhongBase.getRankingInfoEn(name);
	let span = $('<span>').addClass(sciZhongBase.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sciZhongBase.getRankingClass(rankingInfo.rankings) != "sci-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

