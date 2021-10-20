const aminer = {};

aminer.rankSpanListSwufe = [];

aminer.start = function () {
   setInterval(function() {
   	aminer.addRankings();
   }, 2000);
}


aminer.addRankings = function () {
    let results = $("div.paper-item");
    results.each(function (index) {
        let result = $(this);
		
        let source = result.find("div.venue-line");
		let name = source.html().split("<span>")[0];
		let flag = result.find("div.title-line a.title-link span");
		console.log(flag.length)
        if (name != undefined && name.length != 0 && flag.length <= 5) {
			// console.log(name) 
			for (let getRankingSpan of aminer.rankSpanListSwufe) {
			    title = result.find("div.title-line span.paper-title");
				// console.log(title)
				title.after(getRankingSpan(name.toUpperCase()));
			}
        }
		
    });
}


