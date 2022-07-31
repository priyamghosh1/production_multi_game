!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[464],{6464:function(t,a,n){n.r(a),n.d(a,{StockistReportModule:function(){return qe}});var o,d=n(8583),s=n(3423),c=n(8259),l=n.n(c),u=n(2340),g=n(9925),p=n(7716),m=n(9765),f=n(205),Z=n(5304),h=n(8307),b=n(1841),v=n(4889),A=((o=function(){function t(e,a){r(this,t),this.http=e,this.errorService=a,this.BASE_API_URL=u.N.BASE_API_URL,this.barcodeReportRecords=[],this.barcodeReportSubject=new m.xQ,this.barcodeDetailsSubject=new m.xQ,this.customerSaleReportRecords=[],this.customerSaleReportSubject=new m.xQ,this.cardCustomerSaleReportRecords=[],this.cardCustomerSaleReportSubject=new m.xQ}return i(t,[{key:"getBarcodeReportRecords",value:function(){return e(this.barcodeReportRecords)}},{key:"getBarcodeReportListener",value:function(){return this.barcodeReportSubject.asObservable()}},{key:"getCustomerSaleReportRecords",value:function(){return e(this.customerSaleReportRecords)}},{key:"getCustomerSaleReportListener",value:function(){return this.customerSaleReportSubject.asObservable()}},{key:"getCardCustomerSaleReportListener",value:function(){return this.cardCustomerSaleReportSubject.asObservable()}},{key:"getBarcodeDetails",value:function(e){var t=this;return this.http.get(this.BASE_API_URL+"/cPanel/barcodeReport/particulars/"+e).pipe((0,Z.K)(this.handleError),(0,h.b)(function(e){t.barcodeDetails=e.data,t.barcodeDetailsSubject.next(Object.assign({},t.barcodeDetails))}))}},{key:"getBarcodeDetailsListener",value:function(){return this.barcodeDetailsSubject.asObservable()}},{key:"customerSaleReportByDate",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/stockist/customerSaleReports",{startDate:t,endDate:r,userID:a}).pipe((0,Z.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.customerSaleReportRecords=t.data,i.customerSaleReportSubject.next(e(i.customerSaleReportRecords)))}))}},{key:"cardCustomerSaleReportByDate",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/stockist/cardCustomerSaleReports",{startDate:t,endDate:r,userID:a}).pipe((0,Z.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.cardCustomerSaleReportRecords=t.data,i.cardCustomerSaleReportSubject.next(e(i.cardCustomerSaleReportRecords)))}))}},{key:"barcodeReportByDate",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/stockist/barcodeReportByDate",{startDate:t,endDate:r,userID:a}).pipe((0,Z.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.barcodeReportRecords=t.data,i.barcodeReportSubject.next(e(i.barcodeReportRecords)))}))}},{key:"serverError",value:function(e){return e instanceof Response?(0,f._)("backend server error"):(0,f._)(0===e.status?{status:e.status,message:"Backend Server is not Working",statusText:e.statusText}:401===e.status?{status:e.status,message:"Your are not authorised",statusText:e.statusText}:e)}},{key:"handleError",value:function(e){return e.error.message.includes("1062")?(0,f._)("Record already exists"):(0,f._)(e.error.message)}}]),t}()).\u0275fac=function(e){return new(e||o)(p.LFG(b.eN),p.LFG(v.T))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),q=n(2088),T=n(1397),_=n(5939),x=n(8295),R=n(9983),y=n(3220),D=n(3679),S=n(1095),U=n(6640),k=n(7441),J=n(1494),w=n(2458),C=n(346);function I(e,t){if(1&e&&(p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.TgZ(5,"td"),p._uU(6),p.qZA(),p.TgZ(7,"td"),p._uU(8),p.qZA(),p.TgZ(9,"td"),p._uU(10),p.qZA(),p.TgZ(11,"td"),p._uU(12),p.qZA(),p.qZA()),2&e){var r=t.$implicit;p.xp6(2),p.Oqu(r.terminal_pin),p.xp6(2),p.Oqu(r.stokiest_name),p.xp6(2),p.Oqu(r.total),p.xp6(2),p.Oqu(r.commission),p.xp6(2),p.Oqu(r.prize_value),p.xp6(2),p.Oqu(r.total-r.commission-r.prize_value)}}function B(e,t){1&e&&(p.TgZ(0,"div",37),p.TgZ(1,"h1"),p._uU(2,"No Data"),p.qZA(),p.qZA())}function N(e,t){if(1&e){var r=p.EpF();p.TgZ(0,"div"),p.TgZ(1,"table",33),p.NdJ("matSortChange",function(e){return p.CHM(r),p.oxw().sortData(e)}),p.TgZ(2,"thead"),p.TgZ(3,"tr"),p.TgZ(4,"th",22),p._uU(5,"Terminal Id"),p.qZA(),p.TgZ(6,"th",22),p._uU(7,"Stokiest Name"),p.qZA(),p.TgZ(8,"th",34),p._uU(9,"Total"),p.qZA(),p.TgZ(10,"th",35),p._uU(11,"Commission"),p.qZA(),p.TgZ(12,"th",26),p._uU(13,"Prize"),p.qZA(),p.TgZ(14,"th",36),p._uU(15,"NTP"),p.qZA(),p._UZ(16,"th"),p.qZA(),p.qZA(),p.TgZ(17,"tbody"),p.YNc(18,I,13,6,"tr",27),p.TgZ(19,"tr"),p._UZ(20,"td"),p.TgZ(21,"td"),p._uU(22,"Grand Total"),p.qZA(),p.TgZ(23,"td"),p._uU(24),p.qZA(),p._UZ(25,"td"),p._UZ(26,"td"),p._UZ(27,"td"),p.qZA(),p.qZA(),p.qZA(),p.YNc(28,B,3,0,"div",28),p.qZA()}if(2&e){var a=p.oxw();p.xp6(18),p.Q6J("ngForOf",a.customerSaleReportRecords),p.xp6(6),p.Oqu(a.totalAmount),p.xp6(4),p.Q6J("ngIf",0==a.customerSaleReportRecords.length)}}function Q(e,t){if(1&e&&(p.TgZ(0,"mat-option",38),p._uU(1),p.qZA()),2&e){var r=t.$implicit;p.Q6J("value",r.id),p.xp6(1),p.hij(" ",r.game_name," ")}}function F(e,t){if(1&e){var r=p.EpF();p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.TgZ(5,"td"),p._uU(6),p.qZA(),p.TgZ(7,"td"),p._uU(8),p.qZA(),p.TgZ(9,"td"),p._uU(10),p.qZA(),p.TgZ(11,"td"),p._uU(12),p.qZA(),p.TgZ(13,"td"),p._uU(14),p.qZA(),p.TgZ(15,"td"),p._uU(16),p.qZA(),p.TgZ(17,"td"),p._uU(18),p.qZA(),p.TgZ(19,"td"),p.TgZ(20,"a",39),p.TgZ(21,"i",40),p.NdJ("click",function(){var e=p.CHM(r).$implicit,t=p.oxw();return p.MAs(79).show(),t.openPopup(e.play_master_id,e.barcode_number)}),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&e){var a=t.$implicit;p.xp6(2),p.Oqu(a.barcode_number),p.xp6(2),p.Oqu(a.draw_time),p.xp6(2),p.Oqu(a.terminal_pin),p.xp6(2),p.Oqu("SINGLE DOUBLE TRIPLE"==a.game_name?"Triple chance":a.game_name),p.xp6(2),p.Oqu(a.ticket_taken_time),p.xp6(2),p.Oqu(a.total_quantity),p.xp6(2),p.Oqu(a.amount),p.xp6(2),p.Oqu(a.prize_value>0&&0==a.is_claimed?a.prize_value:"--"),p.xp6(2),p.Oqu(a.prize_value>0&&1==a.is_claimed?a.prize_value:"--")}}function O(e,t){1&e&&(p.TgZ(0,"div",37),p.TgZ(1,"h1"),p._uU(2,"No Data"),p.qZA(),p.qZA())}function M(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Single"),p.qZA())}function E(e,t){if(1&e&&(p.TgZ(0,"button",52),p._uU(1),p.qZA()),2&e){var r=t.$implicit;p.s9C("matBadge",r.quantity),p.xp6(1),p.Oqu(r.single_number)}}function Y(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Double"),p.qZA())}function j(e,t){if(1&e&&(p.TgZ(0,"div",54),p.TgZ(1,"button",55),p._uU(2),p.qZA(),p.qZA()),2&e){var r=t.$implicit;p.xp6(1),p.s9C("matBadge",r.quantity),p.Q6J("matBadgeHidden",!1),p.xp6(1),p.hij(" ",r.visible_double_number," ")}}function P(e,t){if(1&e&&(p.TgZ(0,"div",48),p.YNc(1,j,3,3,"div",53),p.qZA()),2&e){var r=t.index,a=p.oxw(2);p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.double.slice(10*r,10*r+10))}}function L(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Triple"),p.qZA())}function z(e,t){if(1&e&&(p.TgZ(0,"div",54),p.TgZ(1,"button",55),p._uU(2),p.qZA(),p.qZA()),2&e){var r=t.$implicit;p.xp6(1),p.s9C("matBadge",r.quantity),p.Q6J("matBadgeHidden",!1),p.xp6(1),p.hij(" ",r.visible_triple_number," ")}}function $(e,t){if(1&e&&(p.TgZ(0,"div",48),p.YNc(1,z,3,3,"div",53),p.qZA()),2&e){var r=t.index,a=p.oxw(2);p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.triple.slice(10*r,10*r+10))}}function G(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Twelve Card"),p.qZA())}function H(e,t){if(1&e&&(p.TgZ(0,"button",52),p._uU(1),p.qZA()),2&e){var r=t.$implicit;p.s9C("matBadge",r.quantity),p.xp6(1),p.AsE("",r.rank_name,": ",r.suit_name,"")}}function W(e,t){if(1&e&&(p.TgZ(0,"div"),p.TgZ(1,"div"),p.TgZ(2,"div",47),p.YNc(3,G,2,0,"span",11),p.TgZ(4,"div",48),p.YNc(5,H,2,3,"button",49),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){var r=p.oxw(2);p.xp6(3),p.Q6J("ngIf",r.barcodeDetails.twelveCard.length),p.xp6(2),p.Q6J("ngForOf",r.barcodeDetails.twelveCard)}}function K(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Sixteen Card"),p.qZA())}function X(e,t){if(1&e&&(p.TgZ(0,"button",52),p._uU(1),p.qZA()),2&e){var r=t.$implicit;p.s9C("matBadge",r.quantity),p.xp6(1),p.AsE("",r.rank_name,": ",r.suit_name,"")}}function V(e,t){if(1&e&&(p.TgZ(0,"div"),p.TgZ(1,"div"),p.TgZ(2,"div",47),p.YNc(3,K,2,0,"span",11),p.TgZ(4,"div",48),p.YNc(5,X,2,3,"button",49),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){var r=p.oxw(2);p.xp6(3),p.Q6J("ngIf",r.barcodeDetails.sixteenCard.length),p.xp6(2),p.Q6J("ngForOf",r.barcodeDetails.sixteenCard)}}function ee(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Single"),p.qZA())}function te(e,t){if(1&e&&(p.TgZ(0,"button",52),p._uU(1),p.qZA()),2&e){var r=t.$implicit;p.s9C("matBadge",r.quantity),p.xp6(1),p.Oqu(r.single_number)}}function re(e,t){if(1&e&&(p.TgZ(0,"div"),p.TgZ(1,"div"),p.TgZ(2,"div",47),p.YNc(3,ee,2,0,"span",11),p.TgZ(4,"div",48),p.YNc(5,te,2,2,"button",49),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){var r=p.oxw(2);p.xp6(3),p.Q6J("ngIf",r.barcodeDetails.singleIndividual.length),p.xp6(2),p.Q6J("ngForOf",r.barcodeDetails.singleIndividual)}}function ae(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Double"),p.qZA())}function ie(e,t){if(1&e&&(p.TgZ(0,"div",54),p.TgZ(1,"button",55),p._uU(2),p.qZA(),p.qZA()),2&e){var r=t.$implicit;p.xp6(1),p.s9C("matBadge",r.quantity),p.Q6J("matBadgeHidden",!1),p.xp6(1),p.hij(" ",r.visible_double_number," ")}}function ne(e,t){if(1&e&&(p.TgZ(0,"div",48),p.YNc(1,ie,3,3,"div",53),p.qZA()),2&e){var r=t.index,a=p.oxw(3);p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.doubleIndividual.slice(10*r,10*r+10))}}function oe(e,t){1&e&&(p.TgZ(0,"span"),p._uU(1,"Single"),p.qZA())}function de(e,t){if(1&e&&(p.TgZ(0,"div",54),p.TgZ(1,"button",55),p._uU(2),p.qZA(),p.qZA()),2&e){var r=t.$implicit;p.xp6(1),p.s9C("matBadge",r.quantity),p.Q6J("matBadgeHidden",!1),p.xp6(1),p.hij(" ",r.single_number," ")}}function se(e,t){if(1&e&&(p.TgZ(0,"div",48),p.YNc(1,de,3,3,"div",53),p.qZA()),2&e){var r=t.index,a=p.oxw(3);p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.doubleIndividual.slice(10*r,10*r+10))}}function ce(e,t){if(1&e&&(p.TgZ(0,"div"),p.TgZ(1,"div"),p.TgZ(2,"div",47),p.YNc(3,ae,2,0,"span",11),p.YNc(4,ne,2,1,"div",50),p.YNc(5,oe,2,0,"span",11),p.YNc(6,se,2,1,"div",50),p.qZA(),p.qZA(),p.qZA()),2&e){var r=p.oxw(2);p.xp6(3),p.Q6J("ngIf",r.barcodeDetails.doubleIndividual.length),p.xp6(1),p.Q6J("ngForOf",r.barcodeDetails.doubleIndividual.slice(0,r.barcodeDetails.doubleIndividual.length%10==0?r.barcodeDetails.doubleIndividual.length/10:r.barcodeDetails.doubleIndividual.length/10+1)),p.xp6(1),p.Q6J("ngIf",r.barcodeDetails.doubleIndividual.length),p.xp6(1),p.Q6J("ngForOf",r.barcodeDetails.doubleIndividual.slice(0,r.barcodeDetails.doubleIndividual.length%10==0?r.barcodeDetails.doubleIndividual.length/10:r.barcodeDetails.doubleIndividual.length/10+1))}}function le(e,t){if(1&e){var r=p.EpF();p.TgZ(0,"div",41),p.TgZ(1,"div",42),p.TgZ(2,"div",43),p.TgZ(3,"h4",44),p._uU(4),p.qZA(),p.TgZ(5,"button",45),p.NdJ("click",function(){return p.CHM(r),p.oxw(),p.MAs(79).hide()}),p.TgZ(6,"span",46),p._uU(7,"\xd7"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(8,"div",47),p.YNc(9,M,2,0,"span",11),p.TgZ(10,"div",48),p.YNc(11,E,2,2,"button",49),p.qZA(),p.YNc(12,Y,2,0,"span",11),p.YNc(13,P,2,1,"div",50),p.YNc(14,L,2,0,"span",11),p.YNc(15,$,2,1,"div",50),p.qZA(),p.YNc(16,W,6,2,"div",11),p.YNc(17,V,6,2,"div",11),p.YNc(18,re,6,2,"div",11),p.YNc(19,ce,7,4,"div",11),p._UZ(20,"div",51),p.qZA(),p.qZA()}if(2&e){var a=p.oxw();p.xp6(4),p.hij(" Ticket: ",a.barcodeDetails.barcode," "),p.xp6(5),p.Q6J("ngIf",a.barcodeDetails.single.length),p.xp6(2),p.Q6J("ngForOf",a.barcodeDetails.single),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.double.length),p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.double.slice(0,a.barcodeDetails.double.length%10==0?a.barcodeDetails.double.length/10:a.barcodeDetails.double.length/10+1)),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.triple.length),p.xp6(1),p.Q6J("ngForOf",a.barcodeDetails.triple.slice(0,a.barcodeDetails.triple.length%10==0?a.barcodeDetails.triple.length/10:a.barcodeDetails.triple.length/10+1)),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.twelveCard.length),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.sixteenCard.length),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.singleIndividual.length),p.xp6(1),p.Q6J("ngIf",a.barcodeDetails.doubleIndividual.length)}}function ue(e,t,r){return(e<t?-1:1)*(r?1:-1)}var ge=[{path:"",component:function(){var e=function(){function e(t,a,i){r(this,e),this.stockistReportService=t,this.masterTerminalService=a,this.gameService=i,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.isProduction=u.N.production,this.showDevArea=!1,this.barcodeReportRecords=[],this.customerSaleReportRecords=[],this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new d.uU("en-US"),this.totalAmount=0,this.columnNumber=4,this.selectedReport="0",this.terminals=[],this.copyBarcodeReportRecords=[],this.userData=JSON.parse(localStorage.getItem("user"))}return i(e,[{key:"ngOnInit",value:function(){var e=this;this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(function(t){e.games=t,e.games.unshift({id:0,game_name:"All",auto_generate:"yes",active:"yes",multiplexer_random:"no",inforce:1,created_at:null,updated_at:null})}),this.games.unshift({id:0,game_name:"All",auto_generate:"yes",active:"yes",multiplexer_random:"no",inforce:1,created_at:null,updated_at:null}),this.terminals=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t}),this.barcodeReportRecords=this.stockistReportService.getBarcodeReportRecords(),this.stockistReportService.getBarcodeReportListener().subscribe(function(t){e.barcodeReportRecords=t}),this.customerSaleReportRecords=this.stockistReportService.getCustomerSaleReportRecords(),this.stockistReportService.getCustomerSaleReportListener().subscribe(function(t){e.customerSaleReportRecords=t;var r=0;e.customerSaleReportRecords.forEach(function(e){r+=Number(e.total)}),e.totalAmount=r}),this.searchByDateTab1(),this.searchByDateTab2()}},{key:"sortByGame",value:function(){var e=this;0!==this.gameId&&null!=this.terminalPin?(this.barcodeReportRecords=this.copyBarcodeReportRecords.filter(function(t){return t.game_id===e.gameId}),this.barcodeReportRecords=this.barcodeReportRecords.filter(function(t){return t.terminal_pin===e.terminalPin})):this.barcodeReportRecords=0!==this.gameId?this.copyBarcodeReportRecords.filter(function(t){return t.game_id===e.gameId}):this.terminalPin?this.copyBarcodeReportRecords.filter(function(t){return t.terminal_pin===e.terminalPin}):this.copyBarcodeReportRecords}},{key:"sortByTerminal",value:function(e){var t=this;0!==this.gameId&&null!=this.terminalPin?(this.barcodeReportRecords=this.copyBarcodeReportRecords.filter(function(e){return e.game_id===t.gameId}),this.barcodeReportRecords=this.barcodeReportRecords.filter(function(e){return e.terminal_pin===t.terminalPin})):this.barcodeReportRecords=null!=e?this.copyBarcodeReportRecords.filter(function(t){return t.terminal_pin===e}):0!==this.gameId?this.copyBarcodeReportRecords.filter(function(e){return e.game_id===t.gameId}):this.copyBarcodeReportRecords}},{key:"searchByDateTab1",value:function(){l().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){l().showLoading()}});var e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),t=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.customerSaleReportByDate(e,t,this.userData.userId).subscribe(function(e){e.data&&l().close()})}},{key:"searchByDateTab2",value:function(){l().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){l().showLoading()}});var e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),t=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.stockistReportService.barcodeReportByDate(e,t,this.userData.userId).subscribe(function(e){e.data&&l().close()})}},{key:"sortData",value:function(e){var t=this.barcodeReportRecords.slice();this.barcodeReportRecords=e.active&&""!==e.direction?t.sort(function(t,r){var a="asc"===e.direction;switch(e.active){case"barcode_number":return ue(t.barcode_number,r.barcode_number,a);case"draw_time":return ue(t.draw_time,r.draw_time,a);case"terminal_pin":return ue(t.terminal_pin,r.terminal_pin,a);case"ticket_taken_time":return ue(t.ticket_taken_time,r.ticket_taken_time,a);case"total_quantity":return ue(t.total_quantity,r.total_quantity,a);case"amount":return ue(t.amount,r.amount,a);default:return 0}}):t}},{key:"openPopup",value:function(e,t){var r=this;this.stockistReportService.getBarcodeDetails(e).subscribe(function(e){r.barcodeDetails=e.data})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(A),p.Y36(q.S),p.Y36(T.h))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-stockiest-report"]],viewQuery:function(e,t){var r;(1&e&&p.Gf(g.oB,5),2&e)&&(p.iGM(r=p.CRH())&&(t.modal=r.first))},decls:81,vars:24,consts:[[1,"mt-2","mr-3","ml-3"],["label","Customer sales report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],[4,"ngIf"],["label","Barcode report"],[1,"col"],[1,"text-center",2,"align-content","center","align-items","center","text-align","center"],[1,"row"],["bindLabel","pin","bindValue","pin",3,"items","ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["matSort","",1,"ml-4","col-11","table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","barcode_number"],["mat-sort-header","draw_time"],["mat-sort-header","terminal_pin"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mat-sort-header","prize_value"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Draw wise report"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll",3,"matSortChange"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","ntp"],[1,"text-center"],[3,"value"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4"],["mdbWavesEffect","",1,"bi","bi-info-square-fill",3,"click"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[1,"d-flex","flex-row","mt-2"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],["class","d-flex flex-row mt-2",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"mr-2",3,"matBadge"],["colspan","2","class","text-center align-middle mr-3","style","max-width: 100% !important;",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle","mr-3",2,"max-width","100% !important"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",2,"font-size","larger","min-width","97% !important","padding","0px !important","min-height","40px",3,"matBadge","matBadgeHidden"]],template:function(e,t){if(1&e&&(p.TgZ(0,"mat-tab-group",0),p.TgZ(1,"mat-tab",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"mat-form-field",4),p.TgZ(5,"mat-label"),p._uU(6,"Start date"),p.qZA(),p.TgZ(7,"input",5),p.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),p.qZA(),p._UZ(8,"mat-datepicker-toggle",6),p.TgZ(9,"mat-datepicker",7,8),p.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(11,"div",3),p.TgZ(12,"mat-form-field",4),p.TgZ(13,"mat-label"),p._uU(14,"End date"),p.qZA(),p.TgZ(15,"input",5),p.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),p.qZA(),p._UZ(16,"mat-datepicker-toggle",6),p.TgZ(17,"mat-datepicker",7,9),p.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(19,"button",10),p.NdJ("click",function(){return t.searchByDateTab1()}),p._uU(20,"Search"),p.qZA(),p.qZA(),p.YNc(21,N,29,3,"div",11),p.qZA(),p.TgZ(22,"mat-tab",12),p.TgZ(23,"div",2),p.TgZ(24,"div",13),p.TgZ(25,"mat-form-field",4),p.TgZ(26,"mat-label"),p._uU(27,"Start date"),p.qZA(),p.TgZ(28,"input",5),p.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),p.qZA(),p._UZ(29,"mat-datepicker-toggle",6),p.TgZ(30,"mat-datepicker",7,8),p.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(32,"div",13),p.TgZ(33,"mat-form-field",4),p.TgZ(34,"mat-label"),p._uU(35,"End date"),p.qZA(),p.TgZ(36,"input",5),p.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),p.qZA(),p._UZ(37,"mat-datepicker-toggle",6),p.TgZ(38,"mat-datepicker",7,9),p.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(40,"button",10),p.NdJ("click",function(){return t.searchByDateTab2()}),p._uU(41,"Search"),p.qZA(),p.qZA(),p.TgZ(42,"div",14),p.TgZ(43,"div",15),p.TgZ(44,"div",3),p.TgZ(45,"ng-select",16),p.NdJ("ngModelChange",function(e){return t.terminalPin=e})("change",function(){return t.sortByTerminal(t.terminalPin)}),p.qZA(),p.qZA(),p.TgZ(46,"div",3),p.TgZ(47,"mat-form-field",4),p.TgZ(48,"mat-label"),p._uU(49,"Games"),p.qZA(),p.TgZ(50,"mat-select",17),p.NdJ("ngModelChange",function(e){return t.gameId=e})("selectionChange",function(){return t.sortByGame()}),p.YNc(51,Q,2,2,"mat-option",18),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(52,"table",19),p.NdJ("matSortChange",function(e){return t.sortData(e)}),p.TgZ(53,"thead"),p.TgZ(54,"tr"),p.TgZ(55,"th",20),p._uU(56,"Barcode"),p.qZA(),p.TgZ(57,"th",21),p._uU(58,"Draw time"),p.qZA(),p.TgZ(59,"th",22),p._uU(60,"Terminal"),p.qZA(),p.TgZ(61,"th",22),p._uU(62,"Game"),p.qZA(),p.TgZ(63,"th",23),p._uU(64,"Ticket take time"),p.qZA(),p.TgZ(65,"th",24),p._uU(66,"Quantity"),p.qZA(),p.TgZ(67,"th",25),p._uU(68,"Amount"),p.qZA(),p.TgZ(69,"th",26),p._uU(70,"UnClaimed Amount"),p.qZA(),p.TgZ(71,"th",26),p._uU(72,"Claimed Amount"),p.qZA(),p._UZ(73,"th"),p.qZA(),p.qZA(),p.TgZ(74,"tbody"),p.YNc(75,F,22,9,"tr",27),p.qZA(),p.qZA(),p.YNc(76,O,3,0,"div",28),p.qZA(),p.qZA(),p._UZ(77,"mat-tab",29),p.qZA(),p.TgZ(78,"div",30,31),p.YNc(80,le,21,11,"div",32),p.qZA()),2&e){var r=p.MAs(10),a=p.MAs(18);p.xp6(7),p.Q6J("matDatepicker",r)("ngModel",t.StartDateFilter),p.xp6(1),p.Q6J("for",r),p.xp6(1),p.Q6J("ngModel",t.StartDateFilter),p.xp6(6),p.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),p.xp6(1),p.Q6J("for",a),p.xp6(1),p.Q6J("ngModel",t.EndDateFilter),p.xp6(4),p.Q6J("ngIf","0"==t.selectedReport),p.xp6(7),p.Q6J("matDatepicker",r)("ngModel",t.StartDateFilter),p.xp6(1),p.Q6J("for",r),p.xp6(1),p.Q6J("ngModel",t.StartDateFilter),p.xp6(6),p.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),p.xp6(1),p.Q6J("for",a),p.xp6(1),p.Q6J("ngModel",t.EndDateFilter),p.xp6(7),p.Q6J("items",t.terminals)("ngModel",t.terminalPin),p.xp6(5),p.Q6J("ngModel",t.gameId),p.xp6(1),p.Q6J("ngForOf",t.games),p.xp6(24),p.Q6J("ngForOf",t.barcodeReportRecords),p.xp6(1),p.Q6J("ngIf",0==t.barcodeReportRecords.length),p.xp6(4),p.Q6J("ngIf",t.barcodeDetails)}},directives:[_.SP,_.uX,x.KE,x.hX,R.Nt,y.hl,D.Fj,D.JJ,D.On,y.nW,x.R9,y.Mq,S.lW,d.O5,U.w9,k.gD,d.sg,J.YE,J.nU,g.oB,w.ey,g.b6,C.k],styles:[""]}),e}()}],pe=function(){var e=i(function e(){r(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[s.Bz.forChild(ge)],s.Bz]}),e}(),me=n(5566),fe=n(5480),Ze=n(3738),he=n(5396),be=n(9870),ve=n(4820),Ae=n(2542),qe=function(){var e=i(function e(){r(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[d.ez,pe,_.Nh,fe.q,me.o9,k.LD,Ze.QW,D.u5,D.UX,he.rP,J.JX,be.aE,be.bz,g.At,ve.UU,C.g,y.FA,R.c,D.u5,w.XK,w.si,S.ot,Ae.vV,x.lN,U.A0]]}),e}()}}])}();