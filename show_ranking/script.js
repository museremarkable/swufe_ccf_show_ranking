let optionCheckd;
let default_displayUnit = ['all', 'sci', 'swufe', 'ccf', 'cufe', 'sciif', 'fdu', 'sjtu', 'cssci', 'xmu', 'ruc', 'cscd', 'uibe', 'swjtu', 'xdu','sci-base', 'sci-up', 'pku'];

function checkOption() {
	chrome.storage.sync.get({"displayUnit": default_displayUnit}, function(items) {
		optionCheckd = items["displayUnit"];
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
		if (optionCheckd.includes("xdu")){
			ieee.rankSpanListSwufe.push(xdu.getRankingSpanEn);
		}
		if (optionCheckd.includes("swufe")){
			ieee.rankSpanListSwufe.push(swufe.getRankingSpanEn);
		}
		ieee.start();
	} else if (location.href.startsWith("https://dl.acm.org/action/doSearch?")) {
		acm.rankingSpanProvider.push(ccf.getRankingSpan);
		acm.start();
	} else if (location.hostname.startsWith("dblp")) {
		if (optionCheckd.includes("ccf")){
			dblp2.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		
		if(optionCheckd.includes("cufe")){
			dblp2.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			dblp2.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			dblp2.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			dblp2.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			dblp2.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			dblp2.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			dblp2.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			dblp2.rankSpanListSwufe.push(cscd.getRankingSpanEn);
		}
		if (optionCheckd.includes("swjtu")){
			dblp2.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
		}
		if (optionCheckd.includes("xdu")){
			dblp2.rankSpanListSwufe.push(xdu.getRankingSpanEn);
		}
		if (optionCheckd.includes("swufe")){
			dblp2.rankSpanListSwufe.push(swufe.getRankingSpanEn);
		}
		dblp2.start();

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
		if (optionCheckd.includes("xdu")){
			springer.rankSpanListSwufe.push(xdu.getRankingSpanEn);
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
		if (optionCheckd.includes("xdu")){
			scholar.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			scholar.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			scholar.rankSpanListSwufe.push(pku.getRankingSpan);
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
		if(optionCheckd.includes("xdu")){
			zhiwang.rankingSpanProvider.push(xdu.getRankingSpan);
		}
		if(optionCheckd.includes("pku")){
			zhiwang.rankingSpanProvider.push(pku.getRankingSpan);
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
		if (optionCheckd.includes("xdu")){
			microsoft.rankingSpanProvider.push(xdu.getRankingSpanEn);
			microsoft.rankingSpanProvider.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			microsoft.rankingSpanProvider.push(pku.getRankingSpan);
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
			if (optionCheckd.includes("xdu")){
				webofscience.rankSpanListSwufe.push(xdu.getRankingSpanEn);
				webofscience.rankSpanListSwufe.push(xdu.getRankingSpan);
			}
			if (optionCheckd.includes("pku")){
				webofscience.rankSpanListSwufe.push(pku.getRankingSpan);
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
		if (optionCheckd.includes("xdu")){
			newwebofscience.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			newwebofscience.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			newwebofscience.rankSpanListSwufe.push(pku.getRankingSpan);
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
		if (optionCheckd.includes("xdu")){
			baiduxueshu.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			baiduxueshu.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			baiduxueshu.rankSpanListSwufe.push(pku.getRankingSpan);
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
		if (optionCheckd.includes("xdu")){
			aminer.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			aminer.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			aminer.rankSpanListSwufe.push(pku.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			aminer.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			aminer.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
		aminer.start();
	}else if (location.href.startsWith("https://pubmed.ncbi.nlm.nih.gov/") || location.href.startsWith(
			"http://pubmed.ncbi.nlm.nih.gov/")){
		if (optionCheckd.includes("ccf")){
			pubmed.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			pubmed.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			pubmed.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			pubmed.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			pubmed.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			pubmed.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			pubmed.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("uibe")){
			pubmed.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			pubmed.rankSpanListSwufe.push(cscd.getRankingSpanEn);
		}
		if (optionCheckd.includes("swjtu")){
			pubmed.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
		}
		if (optionCheckd.includes("xdu")){
			pubmed.rankSpanListSwufe.push(xdu.getRankingSpanEn);
		}
		if (optionCheckd.includes("swufe")){
			pubmed.rankSpanListSwufe.push(swufe.getRankingSpanEn);
		}	
		pubmed.start();
	}else if (location.href.startsWith("https://cn.bing.com/academic/") || location.href.startsWith(
			"http://cn.bing.com/academic/")) {
		if (optionCheckd.includes("ccf")){
			bing.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			bing.rankSpanListSwufe.push(cufe.getRankingSpan);
			bing.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			bing.rankSpanListSwufe.push(ruc.getRankingSpan);
			bing.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			bing.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			bing.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			bing.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			bing.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			bing.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			bing.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			bing.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			bing.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("uibe")){
			bing.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			bing.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			bing.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			bing.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			bing.rankSpanListSwufe.push(swjtu.getRankingSpan);
		}
		if (optionCheckd.includes("xdu")){
			bing.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			bing.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			bing.rankSpanListSwufe.push(pku.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			bing.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			bing.rankSpanListSwufe.push(swufe.getRankingSpan);
		}	
	bing.start();
	}else if (location.href.startsWith("https://readpaper.com")){
		if (optionCheckd.includes("ccf")){
			readpaper.rankSpanListSwufe.push(swufe.CCFgetRankingSpanEn);
		}
		if(optionCheckd.includes("cufe")){
			readpaper.rankSpanListSwufe.push(cufe.getRankingSpan);
			readpaper.rankSpanListSwufe.push(cufe.getRankingSpanEn);
		}
		if(optionCheckd.includes("ruc")){
			readpaper.rankSpanListSwufe.push(ruc.getRankingSpan);
			readpaper.rankSpanListSwufe.push(ruc.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci")){
			readpaper.rankSpanListSwufe.push(sci.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-base")){
			readpaper.rankSpanListSwufe.push(sciZhongBase.getRankingSpanEn);
		}
		if (optionCheckd.includes("sci-up")){
			readpaper.rankSpanListSwufe.push(sciZhongUp.getRankingSpanEn);
		}
		if (optionCheckd.includes("sciif")){
			readpaper.rankSpanListSwufe.push(sciif.getRankingSpanEn);
		}
		if (optionCheckd.includes("fdu")){
			readpaper.rankSpanListSwufe.push(fdu.getRankingSpan);
		}
		if (optionCheckd.includes("sjtu")){
			readpaper.rankSpanListSwufe.push(sjtu.getRankingSpan);
		}
		if (optionCheckd.includes("cssci")){
			readpaper.rankSpanListSwufe.push(cssci.getRankingSpan);
		}
		if (optionCheckd.includes("xmu")){
			readpaper.rankSpanListSwufe.push(xmu.getRankingSpan);
		}
		if (optionCheckd.includes("uibe")){
			readpaper.rankSpanListSwufe.push(uibe.getRankingSpanEn);
		}
		if (optionCheckd.includes("cscd")){
			readpaper.rankSpanListSwufe.push(cscd.getRankingSpanEn);
			readpaper.rankSpanListSwufe.push(cscd.getRankingSpan);
		}
		if (optionCheckd.includes("swjtu")){
			readpaper.rankSpanListSwufe.push(swjtu.getRankingSpanEn);
			readpaper.rankSpanListSwufe.push(swjtu.getRankingSpan);
		}
		if (optionCheckd.includes("xdu")){
			readpaper.rankSpanListSwufe.push(xdu.getRankingSpanEn);
			readpaper.rankSpanListSwufe.push(xdu.getRankingSpan);
		}
		if (optionCheckd.includes("pku")){
			readpaper.rankSpanListSwufe.push(pku.getRankingSpan);
		}
		if (optionCheckd.includes("swufe")){
			readpaper.rankSpanListSwufe.push(swufe.getRankingSpanEn);
			readpaper.rankSpanListSwufe.push(swufe.getRankingSpan);
		}
		readpaper.start();
	}
}


$(document).ready(checkOption);