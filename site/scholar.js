/**
 * Based on https://github.com/WenyanLiu/CCFrank4dblp/blob/704960f95393fdcacdd5f71864f3768518a9fb2a/js/scholar.js
 * 
 * MIT License
 * 
 * Copyright (c) 2019 wyliu
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const scholar = {};

scholar.rankSpanList = [];

scholar.rankSpanListSwufe = [];

scholar.run = function () {
  let url = window.location.pathname;
  if (url == "/scholar") {
    scholar.appendRank();
  } else if (url == "/citations") {
    setInterval(function () {
      $(window).bind("popstate", function () {
        scholar.appendRanks();
      });
      scholar.appendRanks();
    }, 2000);
  }
};

scholar.appendRank = function () {
  let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
  elements.each(function () {
    let node = $(this).find("h3 > a");
    let title = node.text().replace(/[^A-z]/g, " ");
    let data = $(this)
      .find("div.gs_a")
      .text()
      .replace(/[\,\-\…]/g, "")
      .split(" ");
    let author = data[1];
    let year = data.slice(-3)[0];
    let pattern = /(?<=- ).*?(?=, [0-9]{4})/;
    let journal = $(this)
      .find("div.gs_a")
      .text().match(pattern);
    let q_key_pattern = /(?<=related:).*?(?=:scholar)/;
    let q_key = $(this).find('div.gs_fl > a:nth-child(4)').attr('href').toString().match(q_key_pattern);
    fetchRank(node, title, author, year, journal, q_key);
  });
};

scholar.appendRanks = function () {
  let elements = $("tr.gsc_a_tr");
  elements.each(function () {
    let node = $(this).find("td.gsc_a_t > a");
    if (!node.next().hasClass("ccf-ranking")) {
      let title = node.text().replace(/[^A-z]/g, " ");
      let author = $(this)
        .find("div.gs_gray")
        .text()
        .replace(/[\,\…]/g, "")
        .split(" ")[1];
      let year = $(this).find("td.gsc_a_y").text();
      fetchRank(node, title, author, year);
    }
  });
};

function fetchRank(node, title, author, year, journal, q_key) {
  var xhr = new XMLHttpRequest();
  api_format = "https://dblp.org/search/publ/api?q=" + encodeURIComponent(title + " " + author) + "&format=json";
  xhr.open("GET", api_format, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var dblp_url = "";
      var resp = JSON.parse(xhr.responseText).result.hits;
      if (resp == undefined || resp["@total"] == 0) {
        dblp_url == "";
      } else if (resp["@total"] == 1) {
        url = resp.hit[0].info.url;
        dblp_url = url.substring(
          url.indexOf("/rec/") + 5,
          url.lastIndexOf("/")
        );
      } else {
        for (let hit of resp.hit) {
          info = hit.info
          if (info.authors.author[0] == undefined) {
            continue;
          }
          author_1st = info.authors.author[0].text;
          year_fuzzy = info.year;
          year_last_check = 0;
          if (Math.abs(Number(year) - year_fuzzy) <= 1
            && author_1st.toLowerCase().split(" ").indexOf(author.toLowerCase()) != -1
            && year_fuzzy != year_last_check) {
            year_last_check = year_fuzzy;
            url = resp.hit[h].info.url;
            dblp_url_last_check = url.substring(
              url.indexOf("/rec/") + 5,
              url.lastIndexOf("/")
            );
            if (year_fuzzy == year + 1) {
              dblp_url = dblp_url_last_check;
            } else if (year_fuzzy == year) {
              dblp_url = dblp_url_last_check;
              break;
            } else {
              if (dblp_url == "") {
                dblp_url = dblp_url_last_check;
              };
            }
          }
        }
      }
      const names = [{uri: dblp_url}];
      for (let getRankSpan of scholar.rankSpanList) {
        $(node).after(getRankSpan(names));
      }
    }
  };
  xhr.send();

  if(journal!=null){
    journal_str = journal[0];
    if(journal_str.match("…")===null){
        for (let getRankSpan of scholar.rankSpanListSwufe) {
        $(node).after(getRankSpan(journal_str.toUpperCase()));
      }
    }
    else {
      if(q_key){
        let code = q_key[0];
        cite_api_format = document.location.hostname + "?q=info:"+ code +":scholar.google.com/&output=cite&scirp=0&hl=zh-CN";
        var cite_xhr = new XMLHttpRequest();
        cite_xhr.open("GET", cite_api_format, true);
        cite_xhr.onreadystatechange = function () {
        if (cite_xhr.readyState == 4) {
          var resp = cite_xhr.responseText;
          if (resp){
          var journal = resp.match(/(?<=]. ).*?(?=, [0-9]{4})/);
          if(journal){
            journal_str = journal[0];
            for (let getRankSpan of scholar.rankSpanListSwufe) {
            $(node).after(getRankSpan(journal_str.toUpperCase()));
    }
          }
        }
        }
        }
        cite_xhr.send();
      }
    }
  };
};