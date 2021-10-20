const ruc = {};


ruc.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = ruc.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = ""
	}
	else {
		ranking = "RUC " + ranking;
	}

	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

ruc.getRankingInfoEn = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = ruc.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "RUC " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




ruc.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "RUC A+") {
			return 'ruc-AA';
		} else if (result == "RUC A") {
			return 'ruc-A';
		} else if (result == "RUC A-") {
			return 'ruc-A-';
		}  else if (result == "RUC B") {
			return 'ruc-B';
		} 
	}
	return 'ruc-none';
}

ruc.getRankingSpan = function(name) {
	let rankingInfo = ruc.getRankingInfo(name);
	let span = $('<span>').addClass(ruc.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (ruc.getRankingClass(rankingInfo.rankings) != "ruc-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

ruc.getRankingSpanEn = function(name) {
	let rankingInfo = ruc.getRankingInfoEn(name);
	let span = $('<span>').addClass(ruc.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (ruc.getRankingClass(rankingInfo.rankings) != "ruc-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

