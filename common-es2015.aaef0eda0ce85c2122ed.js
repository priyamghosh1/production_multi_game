"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[592],{1449:function(t,e,r){r.d(e,{$:function(){return u}});var s=r(7716);let u=(()=>{class t{constructor(){this.helloText=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-receipt"]],inputs:{helloText:"helloText"},decls:4,vars:1,template:function(t,e){1&t&&(s.TgZ(0,"h1"),s._uU(1),s.TgZ(2,"p"),s._uU(3,"receipt works!"),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Oqu(e.helloText))},styles:["[_nghost-%COMP%]{margin-left:10px}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{color:red}"]}),t})()},2700:function(t,e,r){r.r(e),r.d(e,{ReceiptModule:function(){return c}});var s=r(8583),u=r(3423),i=r(1449),n=r(7716);const a=[{path:"",component:i.$}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.Bz.forChild(a)],u.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,h]]}),t})()},2396:function(t,e,r){r.d(e,{c:function(){return i}});var s=r(7716),u=r(3535);let i=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isSuperStockist()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(u.e))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},1982:function(t,e,r){r.d(e,{v:function(){return i}});var s=r(7716),u=r(3535);let i=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isTerminal()}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(u.e))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},7070:function(t,e,r){r.d(e,{W:function(){return a}});var s=r(2340),u=r(9765),i=r(7716),n=r(1841);let a=(()=>{class t{constructor(t){this.http=t,this.BASE_API_URL=s.N.BASE_API_URL,this.resultList=[],this.resultSubject=new u.xQ,this.currentResultList=[],this.currentResultSubject=new u.xQ,this.http.get(this.BASE_API_URL+"/dev/results/1").subscribe(t=>{this.resultList=t.data,this.resultSubject.next([...this.resultList])})}getResultByCurrentDate(t){this.http.get(this.BASE_API_URL+"/dev/results/currentDate/"+t).subscribe(t=>{this.currentResultList=t.data.result,this.currentResultSubject.next([...this.currentResultList])})}getResultByCurrentDateListener(){return this.currentResultSubject.asObservable()}getResultList(){return[...this.resultList]}getResultListListener(){return this.resultSubject.asObservable()}getUpdatedResult(){this.http.get(this.BASE_API_URL+"/dev/results/1").subscribe(t=>{this.resultList=t.data,this.resultSubject.next([...this.resultList])})}getSelectedGamedResult(t){}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(n.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},2567:function(t,e,r){r.d(e,{u:function(){return b}});var s=r(2340),u=r(9765),i=r(5304),n=r(8307),a=r(7716),h=r(1841),c=r(4889);let b=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=s.N.BASE_API_URL,this.gameTypes=[],this.gameTypeSubject=new u.xQ,this.http.get(this.BASE_API_URL+"/gameTypes").subscribe(t=>{this.gameTypes=t.data,this.gameTypeSubject.next([...this.gameTypes])})}getGameType(){return[...this.gameTypes]}getGameTypeListener(){return this.gameTypeSubject.asObservable()}updatePayout(t){return this.http.put(this.BASE_API_URL+"/cPanel/game/payout",t).pipe((0,i.K)(this.errorService.serverError),(0,n.b)(t=>{this.gameTypes=t.data,this.gameTypeSubject.next([...this.gameTypes])}))}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(h.eN),a.LFG(c.T))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},3865:function(t,e,r){r.d(e,{M:function(){return l}});var s=r(2340),u=r(9765),i=r(5304),n=r(8307),a=r(7716),h=r(1841),c=r(4889),b=r(3535);let l=(()=>{class t{constructor(t,e,r){this.http=t,this.errorService=e,this.authService=r,this.singleNumbers=[],this.singleNumberSubject=new u.xQ,this.numberCombinationMatrix=[],this.numberCombinationMatrixSubject=new u.xQ,this.currentDateResultSubject=new u.xQ,this.todayLastResultSubject=new u.xQ,this.BASE_API_URL=s.N.BASE_API_URL,this.doubleNumbers=[],this.doubleNumberSubject=new u.xQ,this.twelveCard=[],this.twelveCardSubject=new u.xQ,this.sixteenCard=[],this.sixteenCardSubject=new u.xQ,this.andaarNumber=[],this.AndaarNumberSubject=new u.xQ,this.baharNumber=[],this.BaharNumberSubject=new u.xQ,null!==JSON.parse(localStorage.getItem("user"))&&(this.http.get(this.BASE_API_URL+"/getSingleNumber").subscribe(t=>{this.singleNumbers=t.data,this.singleNumberSubject.next([...this.singleNumbers])}),this.http.get(this.BASE_API_URL+"/numberCombinations/matrix").subscribe(t=>{this.numberCombinationMatrix=t.data,this.numberCombinationMatrixSubject.next([...this.numberCombinationMatrix])}),this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(t=>{this.currentDateResult=t.data,this.currentDateResultSubject.next(Object.assign({},this.currentDateResult))}),this.http.get(this.BASE_API_URL+"/getDoubleNumber").subscribe(t=>{this.doubleNumbers=t.data,this.doubleNumberSubject.next([...this.doubleNumbers])}),this.http.get(this.BASE_API_URL+"/getTwelveCards").subscribe(t=>{this.twelveCard=t.data,this.twelveCardSubject.next([...this.twelveCard])}),this.http.get(this.BASE_API_URL+"/getSixteenCards").subscribe(t=>{this.sixteenCard=t.data,this.sixteenCardSubject.next([...this.sixteenCard])}),this.http.get(this.BASE_API_URL+"/getAndarNumbers").subscribe(t=>{this.andaarNumber=t.data,this.AndaarNumberSubject.next([...this.andaarNumber])}),this.http.get(this.BASE_API_URL+"/getBaharNumbers").subscribe(t=>{this.baharNumber=t.data,this.BaharNumberSubject.next([...this.baharNumber])}))}getBaharNumber(){return[...this.baharNumber]}getBaharNumberListener(){return this.BaharNumberSubject.asObservable()}getAndaarNumber(){return[...this.andaarNumber]}getAndaarNumberListener(){return this.AndaarNumberSubject.asObservable()}getSixteenCard(){return[...this.sixteenCard]}getSixteenCardListener(){return this.sixteenCardSubject.asObservable()}getTwelveCard(){return[...this.twelveCard]}getTwelveCardListener(){return this.twelveCardSubject.asObservable()}getSingleNumbers(){return[...this.singleNumbers]}getSingleNumberListener(){return this.singleNumberSubject.asObservable()}getDoubleNumbers(){return[...this.doubleNumbers]}getDoubleNumberListener(){return this.doubleNumberSubject.asObservable()}getNumberCombinationMatrix(){return[...this.numberCombinationMatrix]}getNumberCombinationMatrixListener(){return this.numberCombinationMatrixSubject.asObservable()}getCurrentDateResult(){return Object.assign({},this.currentDateResult)}getCurrentDateResultListener(){return this.currentDateResultSubject.asObservable()}saveUserPlayInputDetails(t){return this.http.post(this.BASE_API_URL+"/buyTicket",t).pipe((0,i.K)(this.errorService.serverError),(0,n.b)(t=>{console.log("service ",t)}))}getTodayResult(){this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(t=>{this.currentDateResult=t.data,this.currentDateResultSubject.next(Object.assign({},this.currentDateResult))})}getTodayLastResult(){this.http.get(this.BASE_API_URL+"/results/lastResult").subscribe(t=>{this.todayLastResult=t,this.todayLastResultSubject.next(Object.assign({},this.todayLastResult))})}getTodayLastResultListener(){return this.todayLastResultSubject.asObservable()}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(h.eN),a.LFG(c.T),a.LFG(b.e))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},5630:function(t,e,r){r.d(e,{I:function(){return o}});var s=r(2340),u=r(9765),i=r(205),n=r(5304),a=r(8307),h=r(7716),c=r(1841),b=r(4889),l=r(3535);let o=(()=>{class t{constructor(t,e,r){this.http=t,this.errorService=e,this.authService=r,this.BASE_API_URL=s.N.BASE_API_URL,this.resultByDateSubject=new u.xQ,this.currentDateResultSubject=new u.xQ,this.resultSubject=new u.xQ,this.todayResult=[],this.todayResultSubject=new u.xQ,this.http.get(this.BASE_API_URL+"/dev/results/currentDate").subscribe(t=>{this.currentDateResult=t.data,this.currentDateResultSubject.next(Object.assign({},this.currentDateResult))})}getTodayResultByGameId(t){this.http.get(this.BASE_API_URL+"/dev/getTodayResultByGame/"+t).subscribe(t=>{this.todayResult=t.data,this.resultSubject.next([...this.todayResult])})}getTodayResultByGameIdListener(){return this.resultSubject.asObservable()}getTodayResult(){return Object.assign({},this.todayResult)}getTodayResultListener(){return this.todayResultSubject.asObservable()}getResultByDate(t){return this.http.post(this.BASE_API_URL+"/dev/getResultByDate",{date:t}).pipe((0,n.K)(this.handleError),(0,a.b)(t=>{this.result=t.data}))}getCurrentDateResult(){return Object.assign({},this.currentDateResult)}getCurrentDateResultListener(){return this.currentDateResultSubject.asObservable()}getResultListener(){return this.resultByDateSubject.asObservable()}getResultByDateListener(){return this.resultByDateSubject.asObservable()}handleError(t){return t.error.message.includes("1062")?(0,i._)("Record already exists"):(0,i._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(h.LFG(c.eN),h.LFG(b.T),h.LFG(l.e))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);