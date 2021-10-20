const sciZhongUp = {};


sciZhongUp.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = sciZhongUp.rankingFullName[name];
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "SCI " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

sciZhongUp.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = sciZhongUp.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SCI升级版" + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




sciZhongUp.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SCI升级版一区") {
			return 'sci-1';
		}
	}
	return 'sci-none';
}



sciZhongUp.getRankingSpanEn = function(name) {
	let rankingInfo = sciZhongUp.getRankingInfoEn(name);
	let span = $('<span>').addClass(sciZhongUp.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (sciZhongUp.getRankingClass(rankingInfo.rankings) != "sci-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

