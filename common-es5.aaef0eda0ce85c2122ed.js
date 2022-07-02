!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{1449:function(t,e,n){n.d(e,{$:function(){return a}});var s,i=n(7716),a=((s=function(){function t(){r(this,t),this.helloText=""}return u(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=i.Xpm({type:s,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(i.TgZ(0,"h1"),i._uU(1),i.TgZ(2,"p"),i._uU(3,"receipt works!"),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),s)},2700:function(t,e,n){n.r(e),n.d(e,{ReceiptModule:function(){return h}});var s,i=n(8583),a=n(3423),c=n(1449),o=n(7716),l=[{path:"",component:c.$}],b=((s=u(function t(){r(this,t)})).\u0275fac=function(t){return new(t||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),s),h=function(){var t=u(function t(){r(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.ez,b]]}),t}()},2396:function(t,e,n){n.d(e,{c:function(){return c}});var s,i=n(7716),a=n(3535),c=((s=function(){function t(e){r(this,t),this.authService=e}return u(t,[{key:"canActivate",value:function(t,e){return this.authService.isSuperStockist()}}]),t}()).\u0275fac=function(t){return new(t||s)(i.LFG(a.e))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},1982:function(t,e,n){n.d(e,{v:function(){return c}});var s,i=n(7716),a=n(3535),c=((s=function(){function t(e){r(this,t),this.authService=e}return u(t,[{key:"canActivate",value:function(t,e){return this.authService.isTerminal()}}]),t}()).\u0275fac=function(t){return new(t||s)(i.LFG(a.e))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},7070:function(e,n,s){s.d(n,{W:function(){return b}});var i,a=s(2340),c=s(9765),o=s(7716),l=s(1841),b=((i=function(){function e(n){var u=this;r(this,e),this.http=n,this.BASE_API_URL=a.N.BASE_API_URL,this.resultList=[],this.resultSubject=new c.xQ,this.currentResultList=[],this.currentResultSubject=new c.xQ,this.http.get(this.BASE_API_URL+"/dev/results/1").subscribe(function(e){u.resultList=e.data,u.resultSubject.next(t(u.resultList))})}return u(e,[{key:"getResultByCurrentDate",value:function(e){var r=this;this.http.get(this.BASE_API_URL+"/dev/results/currentDate/"+e).subscribe(function(e){r.currentResultList=e.data.result,r.currentResultSubject.next(t(r.currentResultList))})}},{key:"getResultByCurrentDateListener",value:function(){return this.currentResultSubject.asObservable()}},{key:"getResultList",value:function(){return t(this.resultList)}},{key:"getResultListListener",value:function(){return this.resultSubject.asObservable()}},{key:"getUpdatedResult",value:function(){var e=this;this.http.get(this.BASE_API_URL+"/dev/results/1").subscribe(function(r){e.resultList=r.data,e.resultSubject.next(t(e.resultList))})}},{key:"getSelectedGamedResult",value:function(t){}}]),e}()).\u0275fac=function(t){return new(t||i)(o.LFG(l.eN))},i.\u0275prov=o.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},2567:function(e,n,s){s.d(n,{u:function(){return v}});var i,a=s(2340),c=s(9765),o=s(5304),l=s(8307),b=s(7716),h=s(1841),f=s(4889),v=((i=function(){function e(n,u){var s=this;r(this,e),this.http=n,this.errorService=u,this.BASE_API_URL=a.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new c.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(function(e){s.gameTypes=e.data,s.gameTypeSubject.next(t(s.gameTypes))})}return u(e,[{key:"getGameType",value:function(){return t(this.gameTypes)}},{key:"getGameTypeListener",value:function(){return this.gameTypeSubject.asObservable()}},{key:"updatePayout",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",e).pipe((0,o.K)(this.errorService.serverError),(0,l.b)(function(e){r.gameTypes=e.data,r.gameTypeSubject.next(t(r.gameTypes))}))}}]),e}()).\u0275fac=function(t){return new(t||i)(b.LFG(h.eN),b.LFG(f.T))},i.\u0275prov=b.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},3865:function(e,n,s){s.d(n,{M:function(){return d}});var i,a=s(2340),c=s(9765),o=s(5304),l=s(8307),b=s(7716),h=s(1841),f=s(4889),v=s(3535),d=((i=function(){function e(n,u,s){var i=this;r(this,e),this.http=n,this.errorService=u,this.authService=s,this.singleNumbers=[],this.singleNumberSubject=new c.xQ,this.numberCombinationMatrix=[],this.numberCombinationMatrixSubject=new c.xQ,this.currentDateResultSubject=new c.xQ,this.todayLastResultSubject=new c.xQ,this.BASE_API_URL=a.N.BASE_API_URL,this.doubleNumbers=[],this.doubleNumberSubject=new c.xQ,this.twelveCard=[],this.twelveCardSubject=new c.xQ,this.sixteenCard=[],this.sixteenCardSubject=new c.xQ,this.andaarNumber=[],this.AndaarNumberSubject=new c.xQ,this.baharNumber=[],this.BaharNumberSubject=new c.xQ,null!==JSON.parse(localStorage.getItem("user"))&&(this.http.get(this.BASE_API_URL+"/getSingleNumber").subscribe(function(e){i.singleNumbers=e.data,i.singleNumberSubject.next(t(i.singleNumbers))}),this.http.get(this.BASE_API_URL+"/numberCombinations/matrix").subscribe(function(e){i.numberCombinationMatrix=e.data,i.numberCombinationMatrixSubject.next(t(i.numberCombinationMatrix))}),this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(function(t){i.currentDateResult=t.data,i.currentDateResultSubject.next(Object.assign({},i.currentDateResult))}),this.http.get(this.BASE_API_URL+"/getDoubleNumber").subscribe(function(e){i.doubleNumbers=e.data,i.doubleNumberSubject.next(t(i.doubleNumbers))}),this.http.get(this.BASE_API_URL+"/getTwelveCards").subscribe(function(e){i.twelveCard=e.data,i.twelveCardSubject.next(t(i.twelveCard))}),this.http.get(this.BASE_API_URL+"/getSixteenCards").subscribe(function(e){i.sixteenCard=e.data,i.sixteenCardSubject.next(t(i.sixteenCard))}),this.http.get(this.BASE_API_URL+"/getAndarNumbers").subscribe(function(e){i.andaarNumber=e.data,i.AndaarNumberSubject.next(t(i.andaarNumber))}),this.http.get(this.BASE_API_URL+"/getBaharNumbers").subscribe(function(e){i.baharNumber=e.data,i.BaharNumberSubject.next(t(i.baharNumber))}))}return u(e,[{key:"getBaharNumber",value:function(){return t(this.baharNumber)}},{key:"getBaharNumberListener",value:function(){return this.BaharNumberSubject.asObservable()}},{key:"getAndaarNumber",value:function(){return t(this.andaarNumber)}},{key:"getAndaarNumberListener",value:function(){return this.AndaarNumberSubject.asObservable()}},{key:"getSixteenCard",value:function(){return t(this.sixteenCard)}},{key:"getSixteenCardListener",value:function(){return this.sixteenCardSubject.asObservable()}},{key:"getTwelveCard",value:function(){return t(this.twelveCard)}},{key:"getTwelveCardListener",value:function(){return this.twelveCardSubject.asObservable()}},{key:"getSingleNumbers",value:function(){return t(this.singleNumbers)}},{key:"getSingleNumberListener",value:function(){return this.singleNumberSubject.asObservable()}},{key:"getDoubleNumbers",value:function(){return t(this.doubleNumbers)}},{key:"getDoubleNumberListener",value:function(){return this.doubleNumberSubject.asObservable()}},{key:"getNumberCombinationMatrix",value:function(){return t(this.numberCombinationMatrix)}},{key:"getNumberCombinationMatrixListener",value:function(){return this.numberCombinationMatrixSubject.asObservable()}},{key:"getCurrentDateResult",value:function(){return Object.assign({},this.currentDateResult)}},{key:"getCurrentDateResultListener",value:function(){return this.currentDateResultSubject.asObservable()}},{key:"saveUserPlayInputDetails",value:function(t){return this.http.post(this.BASE_API_URL+"/buyTicket",t).pipe((0,o.K)(this.errorService.serverError),(0,l.b)(function(t){console.log("service ",t)}))}},{key:"getTodayResult",value:function(){var t=this;this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(function(e){t.currentDateResult=e.data,t.currentDateResultSubject.next(Object.assign({},t.currentDateResult))})}},{key:"getTodayLastResult",value:function(){var t=this;this.http.get(this.BASE_API_URL+"/results/lastResult").subscribe(function(e){t.todayLastResult=e,t.todayLastResultSubject.next(Object.assign({},t.todayLastResult))})}},{key:"getTodayLastResultListener",value:function(){return this.todayLastResultSubject.asObservable()}}]),e}()).\u0275fac=function(t){return new(t||i)(b.LFG(h.eN),b.LFG(f.T),b.LFG(v.e))},i.\u0275prov=b.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},5630:function(e,n,s){s.d(n,{I:function(){return y}});var i,a=s(2340),c=s(9765),o=s(205),l=s(5304),b=s(8307),h=s(7716),f=s(1841),v=s(4889),d=s(3535),y=((i=function(){function e(t,n,u){var s=this;r(this,e),this.http=t,this.errorService=n,this.authService=u,this.BASE_API_URL=a.N.BASE_API_URL,this.resultByDateSubject=new c.xQ,this.currentDateResultSubject=new c.xQ,this.resultSubject=new c.xQ,this.todayResult=[],this.todayResultSubject=new c.xQ,this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(function(t){s.currentDateResult=t.data,s.currentDateResultSubject.next(Object.assign({},s.currentDateResult))})}return u(e,[{key:"getTodayResultByGameId",value:function(e){var r=this;this.http.get(this.BASE_API_URL+"/dev/getTodayResultByGame/"+e).subscribe(function(e){r.todayResult=e.data,r.resultSubject.next(t(r.todayResult))})}},{key:"getTodayResultByGameIdListener",value:function(){return this.resultSubject.asObservable()}},{key:"getTodayResult",value:function(){return Object.assign({},this.todayResult)}},{key:"getTodayResultListener",value:function(){return this.todayResultSubject.asObservable()}},{key:"getResultByDate",value:function(t){var e=this;return this.http.post(this.BASE_API_URL+"/dev/getResultByDate",{date:t}).pipe((0,l.K)(this.handleError),(0,b.b)(function(t){e.result=t.data}))}},{key:"getCurrentDateResult",value:function(){return Object.assign({},this.currentDateResult)}},{key:"getCurrentDateResultListener",value:function(){return this.currentDateResultSubject.asObservable()}},{key:"getResultListener",value:function(){return this.resultByDateSubject.asObservable()}},{key:"getResultByDateListener",value:function(){return this.resultByDateSubject.asObservable()}},{key:"handleError",value:function(t){return t.error.message.includes("1062")?(0,o._)("Record already exists"):(0,o._)(t.error.message)}}]),e}()).\u0275fac=function(t){return new(t||i)(h.LFG(f.eN),h.LFG(v.T),h.LFG(d.e))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)}}])}();