!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{1449:function(t,e,r){r.d(e,{$:function(){return c}});var i,u=r(7716),c=((i=function(){function t(){n(this,t),this.helloText=""}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(u.TgZ(0,"h1"),u._uU(1),u.TgZ(2,"p"),u._uU(3,"receipt works!"),u.qZA(),u.qZA()),2&t&&(u.xp6(1),u.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),i)},2700:function(t,e,r){r.r(e),r.d(e,{ReceiptModule:function(){return l}});var i,u=r(8583),c=r(3423),a=r(1449),f=r(7716),s=[{path:"",component:a.$}],p=((i=o(function t(){n(this,t)})).\u0275fac=function(t){return new(t||i)},i.\u0275mod=f.oAB({type:i}),i.\u0275inj=f.cJS({imports:[[c.Bz.forChild(s)],c.Bz]}),i),l=function(){var t=o(function t(){n(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[[u.ez,p]]}),t}()},2396:function(t,e,r){r.d(e,{c:function(){return a}});var i,u=r(7716),c=r(3535),a=((i=function(){function t(e){n(this,t),this.authService=e}return o(t,[{key:"canActivate",value:function(t,e){return this.authService.isSuperStockist()}}]),t}()).\u0275fac=function(t){return new(t||i)(u.LFG(c.e))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},1982:function(t,e,r){r.d(e,{v:function(){return a}});var i,u=r(7716),c=r(3535),a=((i=function(){function t(e){n(this,t),this.authService=e}return o(t,[{key:"canActivate",value:function(t,e){return this.authService.isTerminal()}}]),t}()).\u0275fac=function(t){return new(t||i)(u.LFG(c.e))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i)},2567:function(e,r,i){i.d(r,{u:function(){return y}});var u,c=i(2340),a=i(9765),f=i(5304),s=i(8307),p=i(7716),l=i(1841),h=i(4889),y=((u=function(){function e(r,o){var i=this;n(this,e),this.http=r,this.errorService=o,this.BASE_API_URL=c.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new a.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(function(e){i.gameTypes=e.data,i.gameTypeSubject.next(t(i.gameTypes))})}return o(e,[{key:"getGameType",value:function(){return t(this.gameTypes)}},{key:"getGameTypeListener",value:function(){return this.gameTypeSubject.asObservable()}},{key:"updatePayout",value:function(e){var n=this;return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",e).pipe((0,f.K)(this.errorService.serverError),(0,s.b)(function(e){n.gameTypes=e.data,n.gameTypeSubject.next(t(n.gameTypes))}))}}]),e}()).\u0275fac=function(t){return new(t||u)(p.LFG(l.eN),p.LFG(h.T))},u.\u0275prov=p.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u)}}])}();