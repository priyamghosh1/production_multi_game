"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{1449:function(t,s,e){e.d(s,{$:function(){return i}});var r=e(7716);let i=(()=>{class t{constructor(){this.helloText=""}ngOnInit(){}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,s){1&t&&(r.TgZ(0,"h1"),r._uU(1),r.TgZ(2,"p"),r._uU(3,"receipt works!"),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Oqu(s.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),t})()},2700:function(t,s,e){e.r(s),e.d(s,{ReceiptModule:function(){return h}});var r=e(8583),i=e(3423),c=e(1449),o=e(7716);const n=[{path:"",component:c.$}];let u=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[i.Bz.forChild(n)],i.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.ez,u]]}),t})()},2396:function(t,s,e){e.d(s,{c:function(){return c}});var r=e(7716),i=e(3535);let c=(()=>{class t{constructor(t){this.authService=t}canActivate(t,s){return this.authService.isSuperStockist()}}return t.\u0275fac=function(s){return new(s||t)(r.LFG(i.e))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1982:function(t,s,e){e.d(s,{v:function(){return c}});var r=e(7716),i=e(3535);let c=(()=>{class t{constructor(t){this.authService=t}canActivate(t,s){return this.authService.isTerminal()}}return t.\u0275fac=function(s){return new(s||t)(r.LFG(i.e))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2567:function(t,s,e){e.d(s,{u:function(){return a}});var r=e(2340),i=e(9765),c=e(5304),o=e(8307),n=e(7716),u=e(1841),h=e(4889);let a=(()=>{class t{constructor(t,s){this.http=t,this.errorService=s,this.BASE_API_URL=r.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new i.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(t=>{this.gameTypes=t.data,this.gameTypeSubject.next([...this.gameTypes])})}getGameType(){return[...this.gameTypes]}getGameTypeListener(){return this.gameTypeSubject.asObservable()}updatePayout(t){return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",t).pipe((0,c.K)(this.errorService.serverError),(0,o.b)(t=>{this.gameTypes=t.data,this.gameTypeSubject.next([...this.gameTypes])}))}}return t.\u0275fac=function(s){return new(s||t)(n.LFG(u.eN),n.LFG(h.T))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2173:function(t,s,e){e.d(s,{E:function(){return p}});var r=e(3679),i=e(5304),c=e(8307),o=e(2340),n=e(9765),u=e(7716),h=e(1841),a=e(4889);let p=(()=>{class t{constructor(t,s){this.http=t,this.errorService=s,this.BASE_API_URL=o.N.BASE_API_URL,this.stockists=[],this.stockistSubject=new n.xQ,this.stockits=[],this.masterStockistForm=new r.cw({id:new r.NI(null),stockistName:new r.NI(null,[r.kI.required]),loginId:new r.NI(null)}),JSON.parse(localStorage.getItem("user")),this.http.get(this.BASE_API_URL+"/stockists").subscribe(t=>{this.stockists=t.data,this.stockistSubject.next([...this.stockists])})}getStockists(){return[...this.stockists]}getStockistListener(){return this.stockistSubject.asObservable()}updateStockiist(t){return this.http.put(this.BASE_API_URL+"/stockists",t).pipe((0,i.K)(this.errorService.serverError),(0,c.b)(t=>{console.log(t);const s=this.stockists.findIndex(s=>s.userId===t.data.userId);this.stockists[s]=t.data,this.stockistSubject.next([...this.stockists])}))}saveNewStockist(t){return this.http.post(this.BASE_API_URL+"/stockists",t).pipe((0,i.K)(this.errorService.serverError),(0,c.b)(t=>{this.stockists.unshift(t.data),this.stockistSubject.next([...this.stockists])}))}saveStockistBalance(t){return this.http.put(this.BASE_API_URL+"/stockists/balance",t).pipe((0,i.K)(this.errorService.serverError),(0,c.b)(t=>{const s=this.stockists.findIndex(s=>s.userId===t.data.userId);this.stockists[s]=t.data,this.stockistSubject.next([...this.stockists])}))}updateBlock(t){return this.http.post(this.BASE_API_URL+"/updateBlock",{id:t}).pipe((0,i.K)(this.errorService.serverError),(0,c.b)(t=>{}))}}return t.\u0275fac=function(s){return new(s||t)(u.LFG(h.eN),u.LFG(a.T))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1599:function(t,s,e){e.d(s,{Q:function(){return a}});var r=e(9765),i=e(2340),c=e(5304),o=e(8307),n=e(7716),u=e(1841),h=e(4889);let a=(()=>{class t{constructor(t,s){this.http=t,this.errorService=s,this.BASE_API_URL=i.N.BASE_API_URL,this.superStockists=[],this.stockists=[],this.superStockistSubject=new r.xQ,this.stockistSubject=new r.xQ,this.http.get(this.BASE_API_URL+"/superStockists").subscribe(t=>{this.superStockists=t.data,this.superStockistSubject.next([...this.superStockists])})}saveSuperStockist(t){return this.http.post(this.BASE_API_URL+"/superStockists",t).pipe((0,c.K)(this.errorService.serverError),(0,o.b)(t=>{this.superStockists.unshift(t.data),this.superStockistSubject.next([...this.superStockists])}))}updateSuperStockist(t){return this.http.put(this.BASE_API_URL+"/superStockists",t).pipe((0,c.K)(this.errorService.serverError),(0,o.b)(t=>{const s=this.superStockists.findIndex(s=>s.userId===t.data.userId);this.superStockists[s]=t.data,this.superStockistSubject.next([...this.superStockists])}))}getStockistBySuperStockistId(t){this.http.get(this.BASE_API_URL+"/getStockistBySuperStockistId/"+t).subscribe(t=>{this.stockists=t.data,this.stockistSubject.next([...this.stockists])})}getStockistBySuperStockistIdListener(){return this.stockistSubject.asObservable()}saveSuperStockistBalance(t){return this.http.put(this.BASE_API_URL+"/superStockists/balance",t).pipe((0,c.K)(this.errorService.serverError),(0,o.b)(t=>{const s=this.superStockists.findIndex(s=>s.userId===t.data.userId);this.superStockists[s]=t.data,this.superStockistSubject.next([...this.superStockists])}))}getSuperStockists(){return[...this.superStockists]}getSuperStockistListener(){return this.superStockistSubject.asObservable()}getStockistListener(){return this.stockistSubject.asObservable()}updateBlock(t){return this.http.post(this.BASE_API_URL+"/updateBlock",{id:t}).pipe((0,c.K)(this.errorService.serverError),(0,o.b)(t=>{}))}}return t.\u0275fac=function(s){return new(s||t)(n.LFG(u.eN),n.LFG(h.T))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7431:function(t,s,e){e.d(s,{z:function(){return h}});var r=e(5304),i=e(8307),c=e(2340),o=e(205),n=e(7716),u=e(1841);let h=(()=>{class t{constructor(t){this.http=t,this.BASE_API_URL=c.N.BASE_API_URL}getTransactionByUser(t){return this.http.post(this.BASE_API_URL+"/dev/getTransaction",t).pipe((0,r.K)(this.handleError),(0,i.b)(t=>{}))}handleError(t){return t.error.message.includes("1062")?(0,o._)("Record already exists"):(0,o._)(t.error.message)}}return t.\u0275fac=function(s){return new(s||t)(n.LFG(u.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);