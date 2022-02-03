"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[464],{6464:function(t,e,r){r.r(e),r.d(e,{StockistReportModule:function(){return L}});var a=r(8583),o=r(3423),s=r(8259),i=r.n(s),n=r(2340),c=r(9925),d=r(7716),u=r(9765),l=r(205),p=r(5304),h=r(8307),g=r(1841),Z=r(4889);let m=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=n.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new u.xQ,this.barcodeDetailsSubject=new u.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new u.xQ,this.cardCustomerSaleReportRecords=[],this.cardCustomerSaleReportSubject=new u.xQ}getBarcodeReportRecords(){return[...this.barcodeReportRecords]}getBarcodeReportListener(){return this.barcodeReportSubject.asObservable()}getCustomerSaleReportRecords(){return[...this.customerSaleReportRecords]}getCustomerSaleReportListener(){return this.customerSaleReportSubject.asObservable()}getCardCustomerSaleReportListener(){return this.cardCustomerSaleReportSubject.asObservable()}getBarcodeDetails(t){return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+t).pipe((0,p.K)(this.handleError),(0,h.b)(t=>{this.barcodeDetails=t.data,this.barcodeDetailsSubject.next(Object.assign({},this.barcodeDetails))}))}getBarcodeDetailsListener(){return this.barcodeDetailsSubject.asObservable()}customerSaleReportByDate(t,e,r){return this.http.post(this.BASE_API_URL+"/stockist/customerSaleReports",{startDate:t,endDate:e,userID:r}).pipe((0,p.K)(this.handleError),(0,h.b)(t=>{t.data&&(this.customerSaleReportRecords=t.data,this.customerSaleReportSubject.next([...this.customerSaleReportRecords]))}))}cardCustomerSaleReportByDate(t,e,r){return this.http.post(this.BASE_API_URL+"/stockist/cardCustomerSaleReports",{startDate:t,endDate:e,userID:r}).pipe((0,p.K)(this.handleError),(0,h.b)(t=>{t.data&&(this.cardCustomerSaleReportRecords=t.data,this.cardCustomerSaleReportSubject.next([...this.cardCustomerSaleReportRecords]))}))}barcodeReportByDate(t,e,r){return this.http.post(this.BASE_API_URL+"/stockist/barcodeReportByDate",{startDate:t,endDate:e,userID:r}).pipe((0,p.K)(this.handleError),(0,h.b)(t=>{t.data&&(this.barcodeReportRecords=t.data,this.barcodeReportSubject.next([...this.barcodeReportRecords]))}))}serverError(t){return t instanceof Response?(0,l._)("backend server error"):(0,l._)(0===t.status?{status:t.status,message:"Backend Server is not Working",statusText:t.statusText}:401===t.status?{status:t.status,message:"Your are not authorised",statusText:t.statusText}:t)}handleError(t){return t.error.message.includes("1062")?(0,l._)("Record already exists"):(0,l._)(t.error.message)}}return t.\u0275fac=function(e){return new(e||t)(d.LFG(g.eN),d.LFG(Z.T))},t.\u0275prov=d.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r(5939),R=r(8295),_=r(9983),A=r(3220),q=r(3679),T=r(1095),f=r(1494);function S(t,e){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d._uU(12),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(t.terminal_pin),d.xp6(2),d.Oqu(t.stokiest_name),d.xp6(2),d.Oqu(t.total),d.xp6(2),d.Oqu(t.commission),d.xp6(2),d.Oqu(t.prize_value),d.xp6(2),d.Oqu(t.total-t.commission-t.prize_value)}}function D(t,e){1&t&&(d.TgZ(0,"div",29),d.TgZ(1,"h1"),d._uU(2,"No Data"),d.qZA(),d.qZA())}function U(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"div"),d.TgZ(1,"table",25),d.NdJ("matSortChange",function(e){return d.CHM(t),d.oxw().sortData(e)}),d.TgZ(2,"thead"),d.TgZ(3,"tr"),d.TgZ(4,"th",17),d._uU(5,"Terminal Id"),d.qZA(),d.TgZ(6,"th",17),d._uU(7,"Stokiest Name"),d.qZA(),d.TgZ(8,"th",26),d._uU(9,"Total"),d.qZA(),d.TgZ(10,"th",27),d._uU(11,"Commission"),d.qZA(),d.TgZ(12,"th",21),d._uU(13,"Prize"),d.qZA(),d.TgZ(14,"th",28),d._uU(15,"NTP"),d.qZA(),d._UZ(16,"th"),d.qZA(),d.qZA(),d.TgZ(17,"tbody"),d.YNc(18,S,13,6,"tr",22),d.TgZ(19,"tr"),d._UZ(20,"td"),d.TgZ(21,"td"),d._uU(22,"Grand Total"),d.qZA(),d.TgZ(23,"td"),d._uU(24),d.qZA(),d._UZ(25,"td"),d._UZ(26,"td"),d._UZ(27,"td"),d.qZA(),d.qZA(),d.qZA(),d.YNc(28,D,3,0,"div",23),d.qZA()}if(2&t){const t=d.oxw();d.xp6(18),d.Q6J("ngForOf",t.customerSaleReportRecords),d.xp6(6),d.Oqu(t.totalAmount),d.xp6(4),d.Q6J("ngIf",0==t.customerSaleReportRecords.length)}}function k(t,e){if(1&t&&(d.TgZ(0,"tr"),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d._uU(12),d.qZA(),d.TgZ(13,"td"),d._uU(14),d.qZA(),d.TgZ(15,"td"),d.TgZ(16,"a",30),d._UZ(17,"i",31),d.qZA(),d.qZA(),d.qZA()),2&t){const t=e.$implicit;d.xp6(2),d.Oqu(t.barcode_number),d.xp6(2),d.Oqu(t.draw_time),d.xp6(2),d.Oqu(t.terminal_pin),d.xp6(2),d.Oqu(t.ticket_taken_time),d.xp6(2),d.Oqu(t.total_quantity),d.xp6(2),d.Oqu(t.amount),d.xp6(2),d.Oqu(t.prize_value)}}function x(t,e){1&t&&(d.TgZ(0,"div",29),d.TgZ(1,"h1"),d._uU(2,"No Data"),d.qZA(),d.qZA())}function v(t,e,r){return(t<e?-1:1)*(r?1:-1)}const y=[{path:"",component:(()=>{class t{constructor(t){this.stockistReportService=t,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=n.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new a.uU("en-US"),this.totalAmount=0,this.columnNumber=4,this.selectedReport="0",this.userData=JSON.parse(localStorage.getItem("user"))}ngOnInit(){this.barcodeReportRecords=this.stockistReportService.getBarcodeReportRecords(),this.stockistReportService.getBarcodeReportListener().subscribe(t=>{this.barcodeReportRecords=t}),this.customerSaleReportRecords=this.stockistReportService.getCustomerSaleReportRecords(),this.stockistReportService.getCustomerSaleReportListener().subscribe(t=>{this.customerSaleReportRecords=t;let e=0;this.customerSaleReportRecords.forEach(function(t){e+=Number(t.total)}),this.totalAmount=e}),this.searchByDateTab1(),this.searchByDateTab2()}searchByDateTab1(){i().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{i().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.customerSaleReportByDate(t,e,this.userData.userId).subscribe(t=>{t.data&&i().close()})}searchByDateTab2(){i().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{i().showLoading()}});let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),e=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.barcodeReportByDate(t,e,this.userData.userId).subscribe(t=>{t.data&&i().close()})}sortData(t){const e=this.barcodeReportRecords.slice();this.barcodeReportRecords=t.active&&""!==t.direction?e.sort((e,r)=>{const a="asc"===t.direction;switch(t.active){case"barcode_number":return v(e.barcode_number,r.barcode_number,a);case"draw_time":return v(e.draw_time,r.draw_time,a);case"terminal_pin":return v(e.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return v(e.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return v(e.total_quantity,r.total_quantity,a);case"amount":return v(e.amount,r.amount,a);default:return 0}}):e}openPopup(t,e){this.stockistReportService.getBarcodeDetails(t).subscribe(t=>{this.barcodeDetails=t.data})}}return t.\u0275fac=function(e){return new(e||t)(d.Y36(m))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-stockiest-report"]],viewQuery:function(t,e){if(1&t&&d.Gf(c.oB,5),2&t){let t;d.iGM(t=d.CRH())&&(e.modal=t.first)}},decls:65,vars:19,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],[4,"ngIf"],["label","Barcode report"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","terminal_pin"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mat-sort-header","prize_value"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Draw wise report"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","ntp"],[1,"text-center"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4"],[1,"bi","bi-info-square-fill"]],template:function(t,e){if(1&t&&(d.TgZ(0,"mat-tab-group",0),d.TgZ(1,"mat-tab",1),d.TgZ(2,"div",2),d.TgZ(3,"div",3),d.TgZ(4,"mat-form-field",4),d.TgZ(5,"mat-label"),d._uU(6,"Start date"),d.qZA(),d.TgZ(7,"input",5),d.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),d.qZA(),d._UZ(8,"mat-datepicker-toggle",6),d.TgZ(9,"mat-datepicker",7,8),d.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(11,"div",3),d.TgZ(12,"mat-form-field",4),d.TgZ(13,"mat-label"),d._uU(14,"End date"),d.qZA(),d.TgZ(15,"input",5),d.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),d.qZA(),d._UZ(16,"mat-datepicker-toggle",6),d.TgZ(17,"mat-datepicker",7,9),d.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(19,"button",10),d.NdJ("click",function(){return e.searchByDateTab1()}),d._uU(20,"Search"),d.qZA(),d.qZA(),d.YNc(21,U,29,3,"div",11),d.qZA(),d.TgZ(22,"mat-tab",12),d.TgZ(23,"div",2),d.TgZ(24,"div",3),d.TgZ(25,"mat-form-field",4),d.TgZ(26,"mat-label"),d._uU(27,"Start date"),d.qZA(),d.TgZ(28,"input",5),d.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),d.qZA(),d._UZ(29,"mat-datepicker-toggle",6),d.TgZ(30,"mat-datepicker",7,8),d.NdJ("ngModelChange",function(t){return e.StartDateFilter=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(32,"div",3),d.TgZ(33,"mat-form-field",4),d.TgZ(34,"mat-label"),d._uU(35,"End date"),d.qZA(),d.TgZ(36,"input",5),d.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),d.qZA(),d._UZ(37,"mat-datepicker-toggle",6),d.TgZ(38,"mat-datepicker",7,9),d.NdJ("ngModelChange",function(t){return e.EndDateFilter=t}),d.qZA(),d.qZA(),d.qZA(),d.TgZ(40,"button",10),d.NdJ("click",function(){return e.searchByDateTab2()}),d._uU(41,"Search"),d.qZA(),d.qZA(),d.TgZ(42,"div",13),d.TgZ(43,"table",14),d.NdJ("matSortChange",function(t){return e.sortData(t)}),d.TgZ(44,"thead"),d.TgZ(45,"tr"),d.TgZ(46,"th",15),d._uU(47,"Barcode"),d.qZA(),d.TgZ(48,"th",16),d._uU(49,"Draw time"),d.qZA(),d.TgZ(50,"th",17),d._uU(51,"Terminal"),d.qZA(),d.TgZ(52,"th",18),d._uU(53,"Ticket take time"),d.qZA(),d.TgZ(54,"th",19),d._uU(55,"Quantity"),d.qZA(),d.TgZ(56,"th",20),d._uU(57,"Amount"),d.qZA(),d.TgZ(58,"th",21),d._uU(59,"Prize"),d.qZA(),d._UZ(60,"th"),d.qZA(),d.qZA(),d.TgZ(61,"tbody"),d.YNc(62,k,18,7,"tr",22),d.qZA(),d.qZA(),d.YNc(63,x,3,0,"div",23),d.qZA(),d.qZA(),d._UZ(64,"mat-tab",24),d.qZA()),2&t){const t=d.MAs(10),r=d.MAs(18);d.xp6(7),d.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),d.xp6(1),d.Q6J("for",t),d.xp6(1),d.Q6J("ngModel",e.StartDateFilter),d.xp6(6),d.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),d.xp6(1),d.Q6J("for",r),d.xp6(1),d.Q6J("ngModel",e.EndDateFilter),d.xp6(4),d.Q6J("ngIf","0"==e.selectedReport),d.xp6(7),d.Q6J("matDatepicker",t)("ngModel",e.StartDateFilter),d.xp6(1),d.Q6J("for",t),d.xp6(1),d.Q6J("ngModel",e.StartDateFilter),d.xp6(6),d.Q6J("matDatepicker",r)("ngModel",e.EndDateFilter),d.xp6(1),d.Q6J("for",r),d.xp6(1),d.Q6J("ngModel",e.EndDateFilter),d.xp6(24),d.Q6J("ngForOf",e.barcodeReportRecords),d.xp6(1),d.Q6J("ngIf",0==e.barcodeReportRecords.length)}},directives:[b.SP,b.uX,R.KE,R.hX,_.Nt,A.hl,q.Fj,q.JJ,q.On,A.nW,R.R9,A.Mq,T.lW,a.O5,f.YE,f.nU,a.sg,c.b6],styles:[""]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[o.Bz.forChild(y)],o.Bz]}),t})();var M=r(5566),w=r(5480),J=r(7441),B=r(3738),F=r(5396),E=r(9870),N=r(4820),O=r(2458),Q=r(2542),I=r(346);let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[a.ez,C,b.Nh,w.q,M.o9,J.LD,B.QW,q.u5,q.UX,F.rP,f.JX,E.aE,E.bz,c.At,N.UU,I.g,A.FA,_.c,q.u5,O.XK,O.si,q.u5,T.ot,Q.vV,A.FA,_.c,R.lN]]}),t})()}}]);