const ruc = {};


ruc.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking = ruc.rankingFullName[name];
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
	let ranking = ruc.rankingFullNameEn[name];
	if (ranking == null){
		ranking = ruc.rankingFullNameEn[name.replace("AND","&")];
	}
	if (ranking == null){
		ranking = ruc.rankingFullNameEn[name.replace("&","AND")];
	}
	if (ranking == null){
		ranking = ruc.rankingFullNameEn[name.replace("‐","-")];
	}
	if (ranking == null){
		ranking = ruc.rankingFullNameEn[name.replace("‐"," ")];
	}
	if (ranking == null) {
		ranking = ""
		var pattern = /(?<=THE ).*/;
		if (name.match(pattern)){
			var new_ranking = ruc.rankingFullNameEn[name.match(pattern)[0]];
			if (new_ranking == null){
				new_ranking = ruc.rankingFullNameEn[name.match(pattern)[0].replace("AND","&")];
				if(new_ranking){
					ranking = "RUC " + new_ranking;
				}
			}else{
				ranking = "RUC " + new_ranking;
			}
		}
	} else {
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

