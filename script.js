if (location.href.startsWith("https://ieeexplore.ieee.org/search/searchresult.jsp?")) {
	ieee.rankingSpanProvider.push(ccf.getRankingSpan);
	ieee.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	ieee.start();
} else if (location.href.startsWith("https://dl.acm.org/action/doSearch?")) {
	acm.rankingSpanProvider.push(ccf.getRankingSpan);
	acm.start();
} else if (location.hostname.startsWith("dblp")) {
	ccf.custom2rank = dblp.uri2rank
	dblp.rankingSpanProvider.push(ccf.getRankingSpan);
	dblp.start();
} else if (location.href.startsWith("https://link.springer.com/search")) {
	springer.rankingSpanProvider.push(ccf.getRankingSpan);
	springer.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	springer.start();
} else if (location.href.startsWith("https://www.engineeringvillage.com/search")) {
	ei.rankingSpanProvider.push(ccf.getRankingSpan);
	ei.start();
} else if (location.hostname.startsWith("scholar.google")) {
	ccf.custom2rank = dblp.uri2rank;
	scholar.rankSpanList.push(ccf.getRankingSpan);
	scholar.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	scholar.run();
} else if (location.href.startsWith(
		"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kns8/defaultresult/index"
	) || location.href.startsWith("https://kns.cnki.net/kns8/defaultresult")) {
	zhiwang.rankingSpanProvider.push(swufe.getRankingSpan);
	zhiwang.start();
} else if (location.href.startsWith("https://academic.microsoft.com/")) {
	microsoft.rankingSpanProvider.push(swufe.getRankingSpanEn);
	microsoft.start();
} else if (location.href.startsWith("https://apps.webofknowledge.com") || location.href.startsWith("http://apps.webofknowledge.com")) {
	webofscience.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	webofscience.start();
} else if (location.href.startsWith("https://www.webofscience.com/wos/alldb/summary") || location.href.startsWith("http://www.webofscience.com/wos/alldb/summary")) {
	newwebofscience.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	newwebofscience.start();
}else if (location.href.startsWith("http://xueshu.baidu.com/") || location.href.startsWith("https://xueshu.baidu.com/")) {
	baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpanEn);
	baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpan);
	baiduxueshu.start();
}
