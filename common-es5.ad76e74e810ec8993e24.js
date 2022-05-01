!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{1449:function(t,e,n){n.d(e,{$:function(){return u}});var s,o=n(7716),u=((s=function(){function t(){r(this,t),this.helloText=""}return i(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(o.TgZ(0,"h1"),o._uU(1),o.TgZ(2,"p"),o._uU(3,"receipt works!"),o.qZA(),o.qZA()),2&t&&(o.xp6(1),o.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),s)},2700:function(t,e,n){n.r(e),n.d(e,{ReceiptModule:function(){return h}});var s,o=n(8583),u=n(3423),c=n(1449),a=n(7716),p=[{path:"",component:c.$}],f=((s=i(function t(){r(this,t)})).\u0275fac=function(t){return new(t||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[u.Bz.forChild(p)],u.Bz]}),s),h=function(){var t=i(function t(){r(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,f]]}),t}()},2396:function(t,e,n){n.d(e,{c:function(){return c}});var s,o=n(7716),u=n(3535),c=((s=function(){function t(e){r(this,t),this.authService=e}return i(t,[{key:"canActivate",value:function(t,e){return this.authService.isSuperStockist()}}]),t}()).\u0275fac=function(t){return new(t||s)(o.LFG(u.e))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},1982:function(t,e,n){n.d(e,{v:function(){return c}});var s,o=n(7716),u=n(3535),c=((s=function(){function t(e){r(this,t),this.authService=e}return i(t,[{key:"canActivate",value:function(t,e){return this.authService.isTerminal()}}]),t}()).\u0275fac=function(t){return new(t||s)(o.LFG(u.e))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)},2567:function(e,n,s){s.d(n,{u:function(){return S}});var o=s(2340),u=s(9765),c=s(5304),a=s(8307),p=s(7716),f=s(1841),h=s(4889),S=function(){var e=function(){function e(n,i){var s=this;r(this,e),this.http=n,this.errorService=i,this.BASE_API_URL=o.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new u.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(function(e){s.gameTypes=e.data,s.gameTypeSubject.next(t(s.gameTypes))})}return i(e,[{key:"getGameType",value:function(){return t(this.gameTypes)}},{key:"getGameTypeListener",value:function(){return this.gameTypeSubject.asObservable()}},{key:"updatePayout",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){r.gameTypes=e.data,r.gameTypeSubject.next(t(r.gameTypes))}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.LFG(f.eN),p.LFG(h.T))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},2173:function(e,n,s){s.d(n,{E:function(){return v}});var o,u=s(3679),c=s(5304),a=s(8307),p=s(2340),f=s(9765),h=s(7716),S=s(1841),k=s(4889),v=((o=function(){function e(n,i){var s=this;r(this,e),this.http=n,this.errorService=i,this.BASE_API_URL=p.N.BASE_API_URL,this.stockists=[],this.stockistSubject=new f.xQ,this.stockits=[],this.masterStockistForm=new u.cw({id:new u.NI(null),stockistName:new u.NI(null,[u.kI.required]),loginId:new u.NI(null)}),JSON.parse(localStorage.getItem("user")),this.http.get(this.BASE_API_URL+"/stockists").subscribe(function(e){s.stockists=e.data,s.stockistSubject.next(t(s.stockists))})}return i(e,[{key:"getStockists",value:function(){return t(this.stockists)}},{key:"getStockistListener",value:function(){return this.stockistSubject.asObservable()}},{key:"updateStockiist",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/stockists",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){console.log(e);var n=r.stockists.findIndex(function(t){return t.userId===e.data.userId});r.stockists[n]=e.data,r.stockistSubject.next(t(r.stockists))}))}},{key:"saveNewStockist",value:function(e){var r=this;return this.http.post(this.BASE_API_URL+"/stockists",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){r.stockists.unshift(e.data),r.stockistSubject.next(t(r.stockists))}))}},{key:"saveStockistBalance",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/stockists/balance",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){var n=r.stockists.findIndex(function(t){return t.userId===e.data.userId});r.stockists[n]=e.data,r.stockistSubject.next(t(r.stockists))}))}},{key:"updateBlock",value:function(t){return this.http.post(this.BASE_API_URL+"/updateBlock",{id:t}).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(t){}))}}]),e}()).\u0275fac=function(t){return new(t||o)(h.LFG(S.eN),h.LFG(k.T))},o.\u0275prov=h.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o)},1599:function(e,n,s){s.d(n,{Q:function(){return S}});var o=s(9765),u=s(2340),c=s(5304),a=s(8307),p=s(7716),f=s(1841),h=s(4889),S=function(){var e=function(){function e(n,i){var s=this;r(this,e),this.http=n,this.errorService=i,this.BASE_API_URL=u.N.BASE_API_URL,this.superStockists=[],this.stockists=[],this.superStockistSubject=new o.xQ,this.stockistSubject=new o.xQ,this.http.get(this.BASE_API_URL+"/superStockists").subscribe(function(e){s.superStockists=e.data,s.superStockistSubject.next(t(s.superStockists))})}return i(e,[{key:"saveSuperStockist",value:function(e){var r=this;return this.http.post(this.BASE_API_URL+"/superStockists",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){r.superStockists.unshift(e.data),r.superStockistSubject.next(t(r.superStockists))}))}},{key:"updateSuperStockist",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/superStockists",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){var n=r.superStockists.findIndex(function(t){return t.userId===e.data.userId});r.superStockists[n]=e.data,r.superStockistSubject.next(t(r.superStockists))}))}},{key:"getStockistBySuperStockistId",value:function(e){var r=this;this.http.get(this.BASE_API_URL+"/getStockistBySuperStockistId/"+e).subscribe(function(e){r.stockists=e.data,r.stockistSubject.next(t(r.stockists))})}},{key:"getStockistBySuperStockistIdListener",value:function(){return this.stockistSubject.asObservable()}},{key:"saveSuperStockistBalance",value:function(e){var r=this;return this.http.put(this.BASE_API_URL+"/superStockists/balance",e).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(e){var n=r.superStockists.findIndex(function(t){return t.userId===e.data.userId});r.superStockists[n]=e.data,r.superStockistSubject.next(t(r.superStockists))}))}},{key:"getSuperStockists",value:function(){return t(this.superStockists)}},{key:"getSuperStockistListener",value:function(){return this.superStockistSubject.asObservable()}},{key:"getStockistListener",value:function(){return this.stockistSubject.asObservable()}},{key:"updateBlock",value:function(t){return this.http.post(this.BASE_API_URL+"/updateBlock",{id:t}).pipe((0,c.K)(this.errorService.serverError),(0,a.b)(function(t){}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.LFG(f.eN),p.LFG(h.T))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},7431:function(t,e,n){n.d(e,{z:function(){return h}});var s,o=n(5304),u=n(8307),c=n(2340),a=n(205),p=n(7716),f=n(1841),h=((s=function(){function t(e){r(this,t),this.http=e,this.BASE_API_URL=c.N.BASE_API_URL}return i(t,[{key:"getTransactionByUser",value:function(t){return this.http.post(this.BASE_API_URL+"/dev/getTransaction",t).pipe((0,o.K)(this.handleError),(0,u.b)(function(t){}))}},{key:"handleError",value:function(t){return t.error.message.includes("1062")?(0,a._)("Record already exists"):(0,a._)(t.error.message)}}]),t}()).\u0275fac=function(t){return new(t||s)(p.LFG(f.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s)}}])}();