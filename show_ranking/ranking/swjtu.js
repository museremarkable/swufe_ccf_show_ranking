const swjtu = {};


swjtu.getRankingInfo = function(name) {
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';

	let ranking;
	let name_list = processName(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = swjtu.rankingFullName[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SWJTU " + ranking;
	}
	
	rankingInfo.rankings.push(ranking);

	return rankingInfo;
}

swjtu.getRankingInfoEn = function(name) {
	
	let rankingInfo = {};
	rankingInfo.rankings = [];
	rankingInfo.info = '';
	let ranking;
	let name_list = processNameEn(name);
	for(let i = 0; i < name_list.length; i++) {
		ranking = swjtu.rankingFullNameEn[name_list[i]];
		if(ranking != null){
			break;
		}
	}
	if (ranking == null) {
		ranking = "";
	}else{
		ranking = "SWJTU " + ranking;
	}
	rankingInfo.rankings.push(ranking);
	
	return rankingInfo;
}




swjtu.getRankingClass = function(rankings) {
	for (let result of rankings) { // 
		if (result == "SWJTU A++") {
			return 'swjtu-AAA';
		} else if (result == "SWJTU A+") {
			return 'swjtu-AA';
		} else if (result == "SWJTU A") {
			return 'swjtu-A';
		} else if (result == "SWJTU B+") {
			return 'swjtu-BB';
		}else if (result == "SWJTU B") {
			return 'swjtu-B';
		}else if (result == "SWJTU C") {
			return 'swjtu-C';
		}
	}
	return 'swjtu-none';
}

swjtu.getRankingSpan = function(name) {
	let rankingInfo = swjtu.getRankingInfo(name);
	let span = $('<span>').addClass(swjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swjtu.getRankingClass(rankingInfo.rankings) != "swjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

swjtu.getRankingSpanEn = function(name) {
	let rankingInfo = swjtu.getRankingInfoEn(name);
	let span = $('<span>').addClass(swjtu.getRankingClass(rankingInfo.rankings)).text(
		rankingInfo.rankings.join('/'));
	if (swjtu.getRankingClass(rankingInfo.rankings) != "swjtu-none"){
		span.addClass("ccf-ranking");
	}
	return span;
}

