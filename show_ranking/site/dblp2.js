const dblp2 = {};
// const abb = {};

dblp2.rankSpanListSwufe = [];

dblp2.start = function() {
	setInterval(function() {
		dblp2.addRankings();
	}, 1000);
}


dblp2.addRankings = function() {
	let results = $(".publ-list li.entry").filter(".article");
	results.each(function(index) {
		let result = $(this);
		if(result.find("span[class*='none']").length == 0 && result.find("span[class*='ccf']").length == 0 ){
			let title = result.find("cite.data a span[itemprop='isPartOf'] span[itemprop='name']");
			let abbName = result.find("a span[itemprop='isPartOf'] span[itemprop='name']").text().replace(".","").toUpperCase();
			let fullName = abb.NIHnameEn[abbName];
			if (fullName == undefined){
				fullName = abb.BritishColumbiaNameEn[abbName];
			}
			if (fullName == undefined){
				fullName = abb.WOS[abbName];
			}
			if(fullName == undefined){
				fullName = "#$%^";
			}else{
				fullName = fullName.toUpperCase();
			}
			
			for (let getRankingSpan of dblp2.rankSpanListSwufe) {
				title.after(getRankingSpan(fullName));
			}
		}
	});
};
