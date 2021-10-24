const pubmed = {};
const abb = {};

pubmed.rankSpanListSwufe = [];

pubmed.start = function() {
	setInterval(function() {
		pubmed.addRankings();
	}, 2500);
}


pubmed.addRankings = function() {
	let results = $("article.full-docsum");

	results.each(function(index) {
		let result = $(this);
		
		if(result.find("span[class*='none']").length == 0 && result.find("span[class*='ccf']").length == 0 ){
			let title = result.find("a.docsum-title");
			if(result.find("div.Scholarscope_Journal").length != 0){
				let abbName = result.find("div.Scholarscope_Journal").text().toUpperCase();
				let fullName = abb.NIHnameEn[abbName].toUpperCase();
				for (let getRankingSpan of pubmed.rankSpanListSwufe) {
					title.after(getRankingSpan(fullName));
				}
			}else{
				let abbName = result.find("span.full-journal-citation").text().split(".")[0].toUpperCase();
				let fullName = abb.NIHnameEn[abbName];
				if(fullName == undefined){
					fullName = "#$%^";
				}else{
					fullName = fullName.toUpperCase();
				}
				for (let getRankingSpan of pubmed.rankSpanListSwufe) {
					title.after(getRankingSpan(fullName));
				}
			}
		}
		
	});
};
