var optionCheckd;

function checkOption() {
	chrome.storage.sync.get({
		options: ['sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc', 'cscd', 'uibe', 'swjtu']
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
		if (optionCheckd.includes("sci-base")){
			ieee.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			ieee.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			ieee.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			ieee.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			ieee.rankSpanListSwufe.push(cscd.getRankingSpanEn);
		}
		if (optionCheckd.includes("swjtu")){
			ieee.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
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
		if (optionCheckd.includes("sci-base")){
			springer.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			springer.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			springer.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			springer.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			springer.rankSpanListSwufe.push(cscd.getRankingSpanEn);
		}
		if (optionCheckd.includes("swjtu")){
			springer.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
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
		if (optionCheckd.includes("sci-base")){
			scholar.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			scholar.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			scholar.rankSpanListSwufe.push(uibe.getRankingSpanEn);
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
		if (optionCheckd.includes("cscd")){
			scholar.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			scholar.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(swjtu.getRankingSpan);
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
		if(optionCheckd.includes("cscd")){
			zhiwang.rankingSpanProvider.push(cscd.getRankingSpan);
		}
		if(optionCheckd.includes("swjtu")){
			zhiwang.rankingSpanProvider.push(swjtu.getRankingSpan);
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
		if (optionCheckd.includes("sci-base")){
			microsoft.rankingSpanProvider.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			microsoft.rankingSpanProvider.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			microsoft.rankingSpanProvider.push(uibe.getRankingSpanEn);
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
		if (optionCheckd.includes("cscd")){
			microsoft.rankingSpanProvider.push(cscd.getRankingSpanEn);
			microsoft.rankingSpanProvider.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			microsoft.rankingSpanProvider.push(swjtu.getRankingSpanEn);
			microsoft.rankingSpanProvider.push(swjtu.getRankingSpan);
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
			if (optionCheckd.includes("sci-base")){
				webofscience.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
			}
			if (optionCheckd.includes("sci-up")){
				webofscience.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
			}
			if (optionCheckd.includes("uibe")){
				webofscience.rankSpanListSwufe.push(uibe.getRankingSpanEn);
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
			if (optionCheckd.includes("cscd")){
				webofscience.rankSpanListSwufe.push(cscd.getRankingSpanEn);
				webofscience.rankSpanListSwufe.push(cscd.getRankingSpan);
			}
			if (optionCheckd.includes("swjtu")){
				webofscience.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
				webofscience.rankSpanListSwufe.push(swjtu.getRankingSpan);
			}
			if (optionCheckd.includes("swufe")){
				webofscience.rankSpanListSwufe.push(swufe.getRankingSpanEn);
				webofscience.rankSpanListSwufe.push(swufe.getRankingSpan);
			}	
			webofscience.start();
	} else if (location.href.startsWith("https://www.webofscience.com") || location.href.startsWith(
			"http://www.webofscience.com") || location.href.startsWith(
			"https://webvpn.swufe.edu.cn/https/77726476706e69737468656265737421e7e056d230356a5f781b8aa59d5b20301c1db852"
		) || location.href.startsWith(
			"https://webvpn.swufe.edu.cn/http/77726476706e69737468656265737421e7e056d230356a5f781b8aa59d5b20301c1db852"
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
		if (optionCheckd.includes("sci-base")){
			newwebofscience.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			newwebofscience.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			newwebofscience.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			newwebofscience.rankSpanListSwufe.push(uibe.getRankingSpanEn);
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
		if (optionCheckd.includes("cscd")){
			newwebofscience.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			newwebofscience.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			newwebofscience.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			newwebofscience.rankSpanListSwufe.push(swjtu.getRankingSpan);
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
		if (optionCheckd.includes("sci-base")){
			baiduxueshu.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			baiduxueshu.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
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
		if (optionCheckd.includes("uibe")){
			baiduxueshu.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			baiduxueshu.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			baiduxueshu.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			baiduxueshu.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			baiduxueshu.rankSpanListSwufe.push(swjtu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			baiduxueshu.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
		baiduxueshu.start();
	} else if (location.href.startsWith("https://www.aminer.cn/search") || location.href.startsWith(
			"http://www.aminer.cn/search")){
		if (optionCheckd.includes("ccf")){
			aminer.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			aminer.rankSpanListSwufe.push(cufe.getRankingSpan);
			aminer.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			aminer.rankSpanListSwufe.push(ruc.getRankingSpan);
			aminer.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			aminer.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			aminer.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			aminer.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			aminer.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			aminer.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			aminer.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			aminer.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			aminer.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("uibe")){
			aminer.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			aminer.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			aminer.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			aminer.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			aminer.rankSpanListSwufe.push(swjtu.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			aminer.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			aminer.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
		aminer.start();
	}
}


$(document).ready(checkOption);