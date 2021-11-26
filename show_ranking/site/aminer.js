const aminer = {};

aminer.rankSpanListSwufe = [];

aminer.start = function () {
   setInterval(function() {
   	aminer.addRankings();
   }, 1000);
}


aminer.addRankings = function () {
    let results = $("div.paper-item");
    results.each(function (index) {
        let result = $(this);
		
        let source = result.find("div.venue-line");
		let name = source.html().split("<span>")[0];
		let flag1 = result.find("div.title-line a.title-link span.ccf-ranking");
		let flag2 = result.find("div.title-line a.title-link span[class$='none']");
        if (name != undefined && name.length != 0 && flag1.length == 0 && flag2.length == 0) {
			// console.log(name) 
			for (let getRankingSpan of aminer.rankSpanListSwufe) {
			    title = result.find("div.title-line span.paper-title");
				// console.log(title)
				title.after(getRankingSpan(name.toUpperCase()));
			}
        }
		
    });
}


