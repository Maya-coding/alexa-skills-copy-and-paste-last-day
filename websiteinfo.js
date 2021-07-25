// all past written items should not be touched as it might break the skill for harvest park.

const request = require('request-promise');
const jsdom = require("jsdom");
const { Module } = require('module');
const PKFirstDayVersion = 1.0;

//
// exported module
//
module.exports = {
  version: PKFirstDayVersion,
  //
  // Core Voice UI Helpers
  //
 getLastDay() {
//function returnEvts() {
    const { JSDOM } = jsdom;
    const options = {
        method: 'GET',
        url: 'https://www.pleasantonusd.net/apps/pages/calendar',
        headers: {
            'Accept': 'application/html',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)'
        }
    };
    return new Promise(((resolve, reject) => {
        const options = {
            url: 'https://www.pleasantonusd.net/apps/pages/calendar',
            method: 'GET',
            headers: {
                'Accept': 'application/html',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)'
            }
        };
        let resp = request(options, function(err, res, body) {
            const { JSDOM } = jsdom;
            const dom = new JSDOM(body);
            let firstDay = "";
//            console.log(body);
            var els = dom.window.document.getElementsByClassName("page-block page-block-text");
            Array.prototype.forEach.call(els, function(el) {
                // Do stuff here
//                console.log(el.tagName);
                let str = el.textContent;
                let firstDayIndex = 0, endStringIndex = 0;
                if (str.includes("Last Day of School:")) {
                    firstDayIndex = str.indexOf("Last Day of School:", 0);
                   // endStringIndex = str.indexOf("Last", firstDayIndex);
                    firstDay = str.substring(firstDayIndex).trim();
//                    console.log("index=" + firstDayIndex + "----sub===" + firstDay);
                    
                }
            });
            resolve(firstDay);
            return firstDay;
        })
    
    }));
},
