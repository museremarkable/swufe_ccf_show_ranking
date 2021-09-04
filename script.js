var optionCheckd;

function checkOption() {
	chrome.storage.sync.get({
		options: ['sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc']
	}, function(items) {
		optionCheckd = items.options;
		start();
	});
}

function start(){
	if (location.href.startsWith("https://ieeexplore.ieee.org/search/searchresult.jsp?")) {
		if (optionCheckd.includes("ccf")){
			ieee.rankingSpanProvider.push(ccf.getRankingSpan);
		}
		if(optionCheckd.includes("cufe")){
			ieee.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			ieee.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			ieee.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			ieee.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("swufe")){
			ieee.rankSpanListSwufe.push(swufe.getRankingSpanEn);
		}
		ieee.start();
	} else if (location.href.startsWith("https://dl.acm.org/action/doSearch?")) {
		acm.rankingSpanProvider.push(ccf.getRankingSpan);
		acm.start();
	} else if (location.hostname.startsWith("dblp")) {
		ccf.custom2rank = dblp.uri2rank
		dblp.rankingSpanProvider.push(ccf.getRankingSpan);
		dblp.start();
	} else if (location.href.startsWith("https://link.springer.com/search")) {
		if (optionCheckd.includes("ccf")){
			springer.rankingSpanProvider.push(ccf.getRankingSpan);
		}
		if(optionCheckd.includes("cufe")){
			springer.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			springer.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			springer.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			springer.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("swufe")){
			springer.rankSpanListSwufe.push(swufe.getRankingSpanEn);
		}
		springer.start();
		
	} else if (location.href.startsWith("https://www.engineeringvillage.com/search")) {
		ei.rankingSpanProvider.push(ccf.getRankingSpan);
		ei.start();
	} else if (location.hostname.startsWith("scholar.google")) {
		
		if (optionCheckd.includes("ccf")){
			ccf.custom2rank = dblp.uri2rank;
			scholar.rankSpanList.push(ccf.getRankingSpan);
			scholar.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			scholar.rankSpanListSwufe.push(cufe.getRankingSpan);
			scholar.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			scholar.rankSpanListSwufe.push(ruc.getRankingSpan);
			scholar.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			scholar.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			scholar.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			scholar.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			scholar.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			scholar.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			scholar.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			scholar.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(swufe.getRankingSpan);
		}
		scholar.run();
	} else if (location.href.startsWith(
			"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421fbf952d2243e635930068cb8/kns8/defaultresult/index"
		) || location.href.startsWith("https://kns.cnki.net/kns8/defaultresult")) {
		if(optionCheckd.includes("cufe")){
			zhiwang.rankingSpanProvider.push(cufe.getRankingSpan);	
		}
		if(optionCheckd.includes("ruc")){
			zhiwang.rankingSpanProvider.push(ruc.getRankingSpan);	
		}
		if(optionCheckd.includes("fdu")){
			zhiwang.rankingSpanProvider.push(fdu.getRankingSpan);	
		}
		if(optionCheckd.includes("sjtu")){
			zhiwang.rankingSpanProvider.push(sjtu.getRankingSpan);	
		}
		if(optionCheckd.includes("cssci")){
			zhiwang.rankingSpanProvider.push(cssci.getRankingSpan);	
		}
		if(optionCheckd.includes("xmu")){
			zhiwang.rankingSpanProvider.push(xmu.getRankingSpan);	
		}
		if(optionCheckd.includes("swufe")){
			zhiwang.rankingSpanProvider.push(swufe.getRankingSpan);
		}
		zhiwang.start();
	} else if (location.href.startsWith("https://academic.microsoft.com/")) {
		if (optionCheckd.includes("ccf")){
			microsoft.rankingSpanProvider.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			microsoft.rankingSpanProvider.push(cufe.getRankingSpan);
			microsoft.rankingSpanProvider.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			microsoft.rankingSpanProvider.push(ruc.getRankingSpan);
			microsoft.rankingSpanProvider.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			microsoft.rankingSpanProvider.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			microsoft.rankingSpanProvider.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			microsoft.rankingSpanProvider.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			microsoft.rankingSpanProvider.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			microsoft.rankingSpanProvider.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			microsoft.rankingSpanProvider.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			microsoft.rankingSpanProvider.push(swufe.getRankingSpanEn);
			microsoft.rankingSpanProvider.push(swufe.getRankingSpan);
		}
		microsoft.start();
	} else if (location.href.startsWith("https://apps.webofknowledge.com") || location.href.startsWith(
			"http://apps.webofknowledge.com") || location.href.startsWith(
			"https://webvpn.swufe.edu.cn/http/77726476706e69737468656265737421f1e7518f69276d52710e82a297422f30a0c6fa320a29ae") ||
			location.href.startsWith(
				"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421f1e7518f69276d52710e82a297422f30a0c6fa320a29ae"
			)) {
			
			if (optionCheckd.includes("ccf")){
				webofscience.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
			}
			if(optionCheckd.includes("cufe")){
				webofscience.rankSpanListSwufe.push(cufe.getRankingSpan);
				webofscience.rankSpanListSwufe.push(cufe.getRankingSpanEn);
			}
			if(optionCheckd.includes("ruc")){
				webofscience.rankSpanListSwufe.push(ruc.getRankingSpan);
				webofscience.rankSpanListSwufe.push(ruc.getRankingSpanEn);
			}
			if (optionCheckd.includes("sci")){
				webofscience.rankSpanListSwufe.push(sci.getRankingSpanEn);
			}
			if (optionCheckd.includes("sciif")){
				webofscience.rankSpanListSwufe.push(sciif.getRankingSpanEn);
			}
			if (optionCheckd.includes("fdu")){
				webofscience.rankSpanListSwufe.push(fdu.getRankingSpan);
			}
			if (optionCheckd.includes("sjtu")){
				webofscience.rankSpanListSwufe.push(sjtu.getRankingSpan);
			}
			if (optionCheckd.includes("cssci")){
				webofscience.rankSpanListSwufe.push(cssci.getRankingSpan);
			}
			if (optionCheckd.includes("xmu")){
				webofscience.rankSpanListSwufe.push(xmu.getRankingSpan);
			}
			if (optionCheckd.includes("swufe")){
				webofscience.rankSpanListSwufe.push(swufe.getRankingSpanEn);
				webofscience.rankSpanListSwufe.push(swufe.getRankingSpan);
			}	
			webofscience.start();
	} else if (location.href.startsWith("https://www.webofscience.com/wos/alldb/summary") || location.href.startsWith(
			"http://www.webofscience.com/wos/alldb/summary") || location.href.startsWith(
			"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421e7e056d230356a5f781b8aa59d5b20301c1db852/wos/alldb/summary"
		) || location.href.startsWith(
			"https://webvpn.swufe.edu.cn/http/77726476706e69737468656265737421e7e056d230356a5f781b8aa59d5b20301c1db852/wos/alldb/summary"
		)) {
			
		if (optionCheckd.includes("ccf")){
			newwebofscience.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			newwebofscience.rankSpanListSwufe.push(cufe.getRankingSpan);
			newwebofscience.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			newwebofscience.rankSpanListSwufe.push(ruc.getRankingSpan);
			newwebofscience.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			newwebofscience.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			newwebofscience.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			newwebofscience.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			newwebofscience.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			newwebofscience.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			newwebofscience.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			newwebofscience.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			newwebofscience.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
		newwebofscience.start();
	} else if (location.href.startsWith("http://xueshu.baidu.com/") || location.href.startsWith(
			"https://xueshu.baidu.com/")) {
		if (optionCheckd.includes("ccf")){
			baiduxueshu.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			baiduxueshu.rankSpanListSwufe.push(cufe.getRankingSpan);
			baiduxueshu.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			baiduxueshu.rankSpanListSwufe.push(ruc.getRankingSpan);
			baiduxueshu.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			baiduxueshu.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			baiduxueshu.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			baiduxueshu.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			baiduxueshu.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			baiduxueshu.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			baiduxueshu.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
		baiduxueshu.start();
	}
}


$(document).ready(checkOption);