"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[307],{4307:function(e,t,i){i.r(t),i.d(t,{ManualResultModule:function(){return se}});var r=i(8583),n=i(3423),a=i(1068),s=i(3679),l=i(7238),o=i(8259),d=i.n(o),u=i(2340),c=i(5435),g=i(8002),m=i(9773),Z=i(7716),p=i(1841),b=i(9765),h=i(5304),T=i(8307),A=i(4889);let x=(()=>{class e{constructor(e,t){this.http=e,this.errorService=t,this.drawTimes=[],this.oldDateResultDrawTime=[],this.drawTimeSubject=new b.xQ,this.inputLoad=[],this.BASE_API_URL=u.N.BASE_API_URL,this.gameSubject=new b.xQ,this.http.get(this.BASE_API_URL+"/drawTimes").subscribe(e=>{this.drawTimes=e.data,this.drawTimeSubject.next([...this.drawTimes])}),this.http.get(this.BASE_API_URL+"/getGame").subscribe(e=>{this.games=e.data,this.gameSubject.next([...this.games])})}getAllGame(){return[...this.games]}getAllGamesListener(){return this.gameSubject.asObservable()}getAllDrawTimes(){return[...this.drawTimes]}getAllDrawTimesListener(){return this.drawTimeSubject.asObservable()}saveManualResult(e){return this.http.post(this.BASE_API_URL+"/manualResult",e).pipe((0,h.K)(this.errorService.serverError),(0,T.b)(e=>{}))}saveOldDateResult(e){return this.http.post(this.BASE_API_URL+"/insertOldResultByDate",e).pipe((0,h.K)(this.errorService.serverError),(0,T.b)(e=>{}))}fetchRemainingDrawTimesToPutOldResult(e){return this.http.post(this.BASE_API_URL+"/drawTimesByDate",e).pipe((0,h.K)(this.errorService.serverError),(0,T.b)(e=>{this.oldDateResultDrawTime=e.data}))}totalSaleOnCurrentDraw(e,t){return this.http.post(this.BASE_API_URL+"/totalSaleOnCurrentDraw",{game_type_id:e,combination_id:t}).pipe((0,h.K)(this.errorService.serverError),(0,T.b)(e=>{}))}showInputLoadGameWise(e){return this.http.post(this.BASE_API_URL+"/manualResult/inputLoadByGameId",e).pipe((0,h.K)(this.errorService.serverError),(0,T.b)(e=>{this.inputLoad=e.data}))}}return e.\u0275fac=function(t){return new(t||e)(Z.LFG(p.eN),Z.LFG(A.T))},e.\u0275prov=Z.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=i(1397),q=i(3865),f=i(5620),w=i(5939),N=i(8295),C=i(7441),I=i(1095),M=i(9983),k=i(3220),S=i(2458),_=i(346),D=i(5396);function R(e,t){if(1&e&&(Z.TgZ(0,"mat-option",45),Z._uU(1),Z.qZA()),2&e){const e=t.$implicit;Z.Q6J("value",e.drawId),Z.xp6(1),Z.hij(" ",e.endTime," ")}}function y(e,t){if(1&e&&(Z.TgZ(0,"mat-option",45),Z._uU(1),Z.qZA()),2&e){const e=t.$implicit;Z.Q6J("value",e.id),Z.xp6(1),Z.hij(" ",e.game_name," ")}}function F(e,t){1&e&&(Z.TgZ(0,"table",46),Z.TgZ(1,"thead"),Z.TgZ(2,"tr"),Z.TgZ(3,"th",47),Z._uU(4,"Single"),Z.qZA(),Z.TgZ(5,"th",47),Z._uU(6,"Triple"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA())}function U(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"button",63),Z.NdJ("click",function(){const t=Z.CHM(e).$implicit;return Z.oxw(3).selectedNumber(2,t.numberCombinationId,t.visibleTripleNumber)}),Z._uU(1),Z.qZA()}if(2&e){const e=t.$implicit,i=Z.oxw(3);Z.ekj("green",i.isDisabledSingleHeaderButton),Z.xp6(1),Z.hij(" ",e.visibleTripleNumber," ")}}function J(e,t){if(1&e&&(Z.TgZ(0,"div",48),Z.YNc(1,U,2,3,"button",62),Z.qZA()),2&e){const e=t.index,i=Z.oxw(2);Z.xp6(1),Z.Q6J("ngForOf",i.numberCombinationMatrix.slice(e*i.columnNumber3,e*i.columnNumber3+i.columnNumber3))}}function O(e,t){if(1&e&&(Z.TgZ(0,"tr"),Z.TgZ(1,"td"),Z._uU(2),Z.qZA(),Z.TgZ(3,"td"),Z._uU(4),Z.qZA(),Z.TgZ(5,"td"),Z._uU(6),Z.qZA(),Z.TgZ(7,"td"),Z._uU(8),Z.qZA(),Z.qZA()),2&e){const e=t.$implicit;Z.xp6(2),Z.hij(" ",e.game_type_name," "),Z.xp6(2),Z.Oqu(e.quantity),Z.xp6(2),Z.Oqu(e.mrp),Z.xp6(2),Z.Oqu(e.winning)}}function j(e,t){if(1&e&&(Z.TgZ(0,"div",48),Z.TgZ(1,"div",49),Z.TgZ(2,"div",50),Z.TgZ(3,"label",51),Z._uU(4),Z.qZA(),Z.TgZ(5,"label",52),Z._uU(6),Z.qZA(),Z.TgZ(7,"label",53),Z._uU(8),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(9,"div",54),Z.TgZ(10,"div",55),Z.TgZ(11,"div",56),Z.TgZ(12,"div",57),Z.YNc(13,J,2,1,"div",58),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(14,"div",59),Z.TgZ(15,"div"),Z.TgZ(16,"table",60),Z.TgZ(17,"thead"),Z.TgZ(18,"tr"),Z.TgZ(19,"th",47),Z._uU(20,"Game Name"),Z.qZA(),Z.TgZ(21,"th",47),Z._uU(22,"Quantity"),Z.qZA(),Z.TgZ(23,"th",47),Z._uU(24,"Mrp"),Z.qZA(),Z.TgZ(25,"th",47),Z._uU(26,"Winning"),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(27,"tbody"),Z.YNc(28,O,9,4,"tr",61),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&e){const e=Z.oxw();Z.xp6(4),Z.Oqu(e.singleNumberVisible),Z.xp6(2),Z.Oqu(e.doubleNumberVisible),Z.xp6(2),Z.Oqu(e.tripleNumberVisible),Z.xp6(5),Z.Q6J("ngForOf",e.numberCombinationMatrix.slice(0,e.numberCombinationMatrix.length%e.columnNumber3==0?e.numberCombinationMatrix.length/e.columnNumber3:e.numberCombinationMatrix.length/e.columnNumber3+1)),Z.xp6(15),Z.Q6J("ngForOf",e.totalSale)}}function B(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",48),Z.TgZ(1,"div",64),Z.TgZ(2,"div",2),Z.TgZ(3,"div",65),Z.TgZ(4,"table",66),Z.TgZ(5,"thead"),Z.TgZ(6,"tr"),Z._UZ(7,"th",47),Z.TgZ(8,"th",67),Z._UZ(9,"img",68),Z.qZA(),Z.TgZ(10,"th",67),Z._UZ(11,"img",69),Z.qZA(),Z.TgZ(12,"th",67),Z._UZ(13,"img",70),Z.qZA(),Z.TgZ(14,"th",67),Z._UZ(15,"img",71),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(16,"tbody"),Z.TgZ(17,"tr"),Z.TgZ(18,"th",72),Z._UZ(19,"img",73),Z.qZA(),Z.TgZ(20,"td"),Z.TgZ(21,"div",74),Z.TgZ(22,"img",75),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(1),t.selectedNumber(3,1,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(23,"td"),Z.TgZ(24,"div",74),Z.TgZ(25,"img",76),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(2),t.selectedNumber(3,2,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(26,"td"),Z.TgZ(27,"div",74),Z.TgZ(28,"img",77),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(4),t.selectedNumber(3,4,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"td"),Z.TgZ(30,"div",74),Z.TgZ(31,"img",78),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(3),t.selectedNumber(3,3,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(32,"tr"),Z.TgZ(33,"th",79),Z._UZ(34,"img",80),Z.qZA(),Z.TgZ(35,"td"),Z.TgZ(36,"div",74),Z.TgZ(37,"img",81),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(5),t.selectedNumber(3,5,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(38,"td"),Z.TgZ(39,"div",74),Z.TgZ(40,"img",82),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(6),t.selectedNumber(3,6,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(41,"td"),Z.TgZ(42,"div",74),Z.TgZ(43,"img",83),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(8),t.selectedNumber(3,8,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(44,"td"),Z.TgZ(45,"div",74),Z.TgZ(46,"img",84),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(7),t.selectedNumber(3,7,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(47,"tr"),Z.TgZ(48,"th",79),Z._UZ(49,"img",85),Z.qZA(),Z.TgZ(50,"td"),Z.TgZ(51,"div",74),Z.TgZ(52,"img",86),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(9),t.selectedNumber(3,9,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(53,"td"),Z.TgZ(54,"div",74),Z.TgZ(55,"img",87),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(10),t.selectedNumber(3,10,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(56,"td"),Z.TgZ(57,"div",74),Z.TgZ(58,"img",88),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(12),t.selectedNumber(3,12,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(59,"td"),Z.TgZ(60,"div",74),Z.TgZ(61,"img",89),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.twelveCardInput(11),t.selectedNumber(3,11,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(62,"div",90),Z.TgZ(63,"div"),Z.TgZ(64,"h3"),Z._uU(65,"Selected Card"),Z.qZA(),Z.qZA(),Z.TgZ(66,"div"),Z._UZ(67,"img",91),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()}if(2&e){const e=Z.oxw();Z.xp6(67),Z.Q6J("src",e.twelveSelectedCard,Z.LSH)}}function H(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",48),Z.TgZ(1,"div",92),Z.TgZ(2,"div",2),Z.TgZ(3,"div",65),Z.TgZ(4,"table",66),Z.TgZ(5,"thead"),Z.TgZ(6,"tr"),Z._UZ(7,"th",47),Z.TgZ(8,"th",67),Z._UZ(9,"img",68),Z.qZA(),Z.TgZ(10,"th",67),Z._UZ(11,"img",69),Z.qZA(),Z.TgZ(12,"th",67),Z._UZ(13,"img",70),Z.qZA(),Z.TgZ(14,"th",67),Z._UZ(15,"img",71),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(16,"tbody"),Z.TgZ(17,"tr"),Z.TgZ(18,"th",72),Z._UZ(19,"img",73),Z.qZA(),Z.TgZ(20,"td"),Z.TgZ(21,"div",74),Z.TgZ(22,"img",75),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(1),t.selectedNumber(4,1,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(23,"td"),Z.TgZ(24,"div",74),Z.TgZ(25,"img",76),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(2),t.selectedNumber(4,2,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(26,"td"),Z.TgZ(27,"div",74),Z.TgZ(28,"img",77),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(4),t.selectedNumber(4,4,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(29,"td"),Z.TgZ(30,"div",74),Z.TgZ(31,"img",78),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(3),t.selectedNumber(4,3,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(32,"tr"),Z.TgZ(33,"th",79),Z._UZ(34,"img",80),Z.qZA(),Z.TgZ(35,"td"),Z.TgZ(36,"div",74),Z.TgZ(37,"img",81),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(5),t.selectedNumber(4,5,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(38,"td"),Z.TgZ(39,"div",74),Z.TgZ(40,"img",82),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(6),t.selectedNumber(4,6,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(41,"td"),Z.TgZ(42,"div",74),Z.TgZ(43,"img",83),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(8),t.selectedNumber(4,8,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(44,"td"),Z.TgZ(45,"div",74),Z.TgZ(46,"img",84),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(7),t.selectedNumber(4,7,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(47,"tr"),Z.TgZ(48,"th",79),Z._UZ(49,"img",85),Z.qZA(),Z.TgZ(50,"td"),Z.TgZ(51,"div",74),Z.TgZ(52,"img",86),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(9),t.selectedNumber(4,9,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(53,"td"),Z.TgZ(54,"div",74),Z.TgZ(55,"img",87),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(10),t.selectedNumber(4,10,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(56,"td"),Z.TgZ(57,"div",74),Z.TgZ(58,"img",88),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(12),t.selectedNumber(4,12,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(59,"td"),Z.TgZ(60,"div",74),Z.TgZ(61,"img",89),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(11),t.selectedNumber(4,11,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(62,"tr"),Z.TgZ(63,"th",79),Z._UZ(64,"img",93),Z.qZA(),Z.TgZ(65,"td"),Z.TgZ(66,"div",74),Z.TgZ(67,"img",94),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(13),t.selectedNumber(4,13,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(68,"td"),Z.TgZ(69,"div",74),Z.TgZ(70,"img",95),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(14),t.selectedNumber(4,14,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(71,"td"),Z.TgZ(72,"div",74),Z.TgZ(73,"img",96),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(16),t.selectedNumber(4,16,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(74,"td"),Z.TgZ(75,"div",74),Z.TgZ(76,"img",97),Z.NdJ("click",function(){Z.CHM(e);const t=Z.oxw();return t.sixteenCardInput(15),t.selectedNumber(4,15,1)}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(77,"div",90),Z.TgZ(78,"div"),Z.TgZ(79,"h3"),Z._uU(80,"Selected Card"),Z.qZA(),Z.qZA(),Z.TgZ(81,"div"),Z._UZ(82,"img",91),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()}if(2&e){const e=Z.oxw();Z.xp6(82),Z.Q6J("src",e.sixteenSelectedCard,Z.LSH)}}function Q(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"button",105),Z.NdJ("click",function(){const t=Z.CHM(e).$implicit;return Z.oxw(3).selectedNumber(6,t.singleNumberId,t.singleNumber)}),Z._uU(1),Z.qZA()}if(2&e){const e=t.$implicit,i=Z.oxw(3);Z.ekj("green",i.isDisabledSingleHeaderButton),Z.xp6(1),Z.hij(" ",e.singleNumber," ")}}function L(e,t){if(1&e&&(Z.TgZ(0,"div",103),Z.YNc(1,Q,2,3,"button",104),Z.qZA()),2&e){const e=t.index,i=Z.oxw(2);Z.xp6(1),Z.Q6J("ngForOf",i.singleNumber.slice(e*i.columnNumber,e*i.columnNumber+i.columnNumber))}}function P(e,t){if(1&e&&(Z.TgZ(0,"div",48),Z.TgZ(1,"div",2),Z.TgZ(2,"div",98),Z.TgZ(3,"label",99),Z._uU(4),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",100),Z.TgZ(6,"div",101),Z.TgZ(7,"div",42),Z.TgZ(8,"div",57),Z.YNc(9,L,2,1,"div",102),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&e){const e=Z.oxw();Z.xp6(4),Z.Oqu(e.singleIndividualNumberVisible),Z.xp6(5),Z.Q6J("ngForOf",e.singleNumber.slice(0,e.singleNumber.length%e.columnNumber==0?e.singleNumber.length/e.columnNumber:e.singleNumber.length/e.columnNumber+1))}}function Y(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"button",63),Z.NdJ("click",function(){const t=Z.CHM(e).$implicit;return Z.oxw(3).selectedNumber(7,t.doubleNumberCombinationId,t.visibleDoubleNumber)}),Z._uU(1),Z.qZA()}if(2&e){const e=t.$implicit,i=Z.oxw(3);Z.ekj("green",i.isDisabledSingleHeaderButton),Z.xp6(1),Z.hij(" ",e.visibleDoubleNumber," ")}}function E(e,t){if(1&e&&(Z.TgZ(0,"div",48),Z.YNc(1,Y,2,3,"button",62),Z.qZA()),2&e){const e=t.index,i=Z.oxw(2);Z.xp6(1),Z.Q6J("ngForOf",i.doubleNumber.slice(e*i.columnNumber,e*i.columnNumber+i.columnNumber))}}function G(e,t){if(1&e&&(Z.TgZ(0,"div",106),Z.TgZ(1,"div",2),Z.TgZ(2,"div",107),Z.TgZ(3,"label",108),Z._uU(4),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",109),Z.TgZ(6,"div",110),Z.TgZ(7,"div",57),Z.YNc(8,E,2,1,"div",58),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA()),2&e){const e=Z.oxw();Z.xp6(4),Z.Oqu(e.doubleIndividualNumberVisible),Z.xp6(4),Z.Q6J("ngForOf",e.doubleNumber.slice(0,e.doubleNumber.length%e.columnNumber==0?e.doubleNumber.length/e.columnNumber:e.doubleNumber.length/e.columnNumber+1))}}function V(e,t){if(1&e&&(Z.TgZ(0,"mat-option",45),Z._uU(1),Z.qZA()),2&e){const e=t.$implicit;Z.Q6J("value",e.drawId),Z.xp6(1),Z.hij(" ",e.endTime," ")}}function z(e,t){if(1&e&&(Z.TgZ(0,"mat-option",45),Z._uU(1),Z.qZA()),2&e){const e=t.$implicit;Z.Q6J("value",e.id),Z.xp6(1),Z.hij(" ",e.game_name," ")}}const $=function(e){return{"background-color":e}};function X(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",48),Z.TgZ(1,"button",113),Z.NdJ("click",function(){const t=Z.CHM(e).$implicit,i=Z.oxw().$implicit,r=Z.oxw(),n=Z.MAs(9);return r.setOldDateResultInForm(i.singleNumber,t),r.scroll(n)}),Z._uU(2),Z.qZA(),Z.qZA()}if(2&e){const e=t.$implicit,i=Z.oxw().$implicit,r=Z.oxw();Z.xp6(1),Z.s9C("matBadge",i.singleNumber),Z.Q6J("matBadgeHidden",r.currentCombinationMatrixSelectedId!=e.numberCombinationId)("ngStyle",Z.VKq(4,$,r.currentCombinationMatrixSelectedId===e.numberCombinationId?"rgb(30,64,30)":"#858b8b")),Z.xp6(1),Z.hij(" ",e.visibleTripleNumber," ")}}function K(e,t){if(1&e&&(Z.TgZ(0,"div",111),Z.TgZ(1,"div",48),Z.TgZ(2,"button",112),Z._uU(3),Z.qZA(),Z.qZA(),Z.YNc(4,X,3,6,"div",58),Z.qZA()),2&e){const e=t.$implicit,i=t.index,r=Z.oxw();Z.MGl("id","triple-flex-column-",i,""),Z.xp6(2),Z.ekj("green",r.isDisabledSingleHeaderButton),Z.Q6J("disabled",r.isDisabledSingleHeaderButton),Z.xp6(1),Z.hij(" ",e.singleNumber," "),Z.xp6(1),Z.Q6J("ngForOf",e.numberCombinations)}}function W(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",2),Z.TgZ(1,"div",27),Z.TgZ(2,"mat-slide-toggle",114),Z.NdJ("change",function(){Z.CHM(e);const t=Z.oxw();return t.showDevArea=!t.showDevArea}),Z._uU(3),Z.qZA(),Z.qZA(),Z.qZA()}if(2&e){const e=Z.oxw();Z.xp6(3),Z.Oqu(e.showDevArea?"Hide Developer Area":"Show Developer Area")}}function ee(e,t){if(1&e&&(Z.TgZ(0,"div",2),Z.TgZ(1,"div",27),Z.TgZ(2,"pre"),Z._uU(3),Z.ALo(4,"json"),Z.qZA(),Z.qZA(),Z.TgZ(5,"div",115),Z.TgZ(6,"pre"),Z._uU(7),Z.ALo(8,"json"),Z.qZA(),Z.qZA(),Z.TgZ(9,"div",27),Z._UZ(10,"pre"),Z.qZA(),Z.qZA()),2&e){const e=Z.oxw();Z.xp6(3),Z.hij("        numberCombinationMatrix = ",Z.lcZ(4,2,e.numberCombinationMatrix),"\n      "),Z.xp6(4),Z.hij("       manualResultForm = ",Z.lcZ(8,4,e.manualResultForm.value),"\n\n      ")}}const te=function(){return{standalone:!0}},ie=[{path:"",canActivate:[a.m],component:(()=>{class e{constructor(e,t,i,n,a,l,o,d){this.http=e,this.manualResultService=t,this.gameService=i,this.playGameService=n,this.route=a,this.router=l,this.commonService=o,this.errorService=d,this.BASE_API_URL=u.N.BASE_API_URL,this.drawTimes=[],this.numberCombinationMatrix=[],this.currentState="initial",this.isProduction=u.N.production,this.showDevArea=!1,this.isDisabledSingleHeaderButton=!0,this.manualResultSaveArray=[],this.singleNumberVisible=null,this.doubleNumberVisible=null,this.tripleNumberVisible=null,this.singleIndividualNumberVisible=null,this.doubleIndividualNumberVisible=null,this.twelveSelectedCard=null,this.sixteenSelectedCard=null,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.newDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new r.uU("en-US"),this.selectedNumberCombination=null,this.requestedData=[],this.columnNumber=10,this.columnNumber2=20,this.columnNumber3=200,this.columnNumber4=10,this.singleNumber=[],this.twelveCard=[],this.sixteenCard=[],this.doubleNumber=[],this.deviceXs=this.commonService.deviceXs;const c=new Date,g=(0,r.p6)(c,"yyyy-MM-dd","en");this.manualResultForm=new s.cw({id:new s.NI(null),drawMasterId:new s.NI(null,[s.kI.required]),numberCombinationId:new s.NI(null,[s.kI.required]),gameId:new s.NI(null,[s.kI.required]),single:new s.NI(null),triple:new s.NI(null),transaction_date:new s.NI(g)}),this.oldDateResultForm=new s.cw({id:new s.NI(null),drawMasterId:new s.NI(null,[s.kI.required]),numberCombinationId:new s.NI(null,[s.kI.required]),single:new s.NI(null),triple:new s.NI(null),gameId:new s.NI(null,[s.kI.required]),gameDate:new s.NI(this.startDate)})}ngOnInit(){this.manualResultForm.patchValue({gameId:1}),this.oldDateResultForm.patchValue({gameId:1}),this.router.events.pipe((0,c.h)(e=>e instanceof n.m2),(0,g.U)(()=>this.route),(0,g.U)(e=>{for(;e.firstChild;)e=e.firstChild;return e}),(0,c.h)(e=>"primary"===e.outlet),(0,m.zg)(e=>e.data)).subscribe(e=>console.log("data",e)),this.selectedGame=1,new Date,this.fetchDrawTime(this.selectedGame),this.numberCombinationMatrix=this.playGameService.getNumberCombinationMatrix(),this.playGameService.getNumberCombinationMatrixListener().subscribe(e=>{this.numberCombinationMatrix=e,this.copyNumberMatrix=JSON.parse(JSON.stringify(this.numberCombinationMatrix))}),this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(e=>{this.games=e}),this.twelveCard=this.playGameService.getTwelveCard(),this.playGameService.getTwelveCardListener().subscribe(e=>{this.twelveCard=e}),this.sixteenCard=this.playGameService.getSixteenCard(),this.playGameService.getSixteenCardListener().subscribe(e=>{this.sixteenCard=e}),this.singleNumber=this.playGameService.getSingleNumbers(),this.playGameService.getSingleNumberListener().subscribe(e=>{this.singleNumber=e}),this.doubleNumber=this.playGameService.getDoubleNumbers(),this.playGameService.getDoubleNumberListener().subscribe(e=>{this.doubleNumber=e})}fetchDrawTime(e){this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+e).subscribe(e=>{this.drawTimes=e.data})}iscurrentCombinationMatrixSelected(e){return e===this.currentCombinationMatrixSelectedId}setManualResultInForm(e,t){this.manualResultForm.patchValue({numberCombinationId:t.numberCombinationId,single:e,triple:t.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=t.numberCombinationId}setOldDateResultInForm(e,t){this.oldDateResultForm.patchValue({numberCombinationId:t.numberCombinationId,single:e,triple:t.visibleTripleNumber}),this.currentCombinationMatrixSelectedId=t.numberCombinationId,this.selectedNumberCombination=t.visibleTripleNumber}getTrippleButtonStyle(){return{"background-color":"red !important"}}gotoTop(){window.scroll({top:0,left:0,behavior:"smooth"})}scroll(e){e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}changeState(){this.currentState="initial"===this.currentState?"final":"initial"}changeDraw(){this.fetchDrawTime(this.manualResultForm.value.gameId),this.selectedGame=this.manualResultForm.value.gameId,this.manualResultSaveArray=[]}changeTime(){const e=this.manualResultForm.value.drawMasterId;this.manualResultSaveArray.forEach(function(t){t.drawMasterId=e})}selectedNumber(e,t,i){if(this.manualResultService.totalSaleOnCurrentDraw(e,t).subscribe(e=>{this.totalSale=e.data}),null==this.manualResultForm.value.drawMasterId)return void d().fire({position:"top-end",icon:"info",title:"Please Select Draw Time",showConfirmButton:!1,timer:2e3});2===e&&(this.tripleNumberVisible=i,this.singleNumberVisible=i.split("")[2],this.doubleNumberVisible=i.split("")[1]+i.split("")[2]),6===e&&(this.singleIndividualNumberVisible=i),7===e&&(this.doubleIndividualNumberVisible=i);const r=this.manualResultSaveArray.findIndex(t=>t.gameTypeId===e);r<0?this.manualResultSaveArray.push({drawMasterId:this.manualResultForm.value.drawMasterId,gameTypeId:e,combinationNumberId:t}):(this.manualResultSaveArray[r].drawMasterId=this.manualResultForm.value.drawMasterId,this.manualResultSaveArray[r].combinationNumberId=t)}saveManualResult(){this.validatorError=null,d().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(e=>{e.isConfirmed&&this.manualResultService.saveManualResult(this.manualResultSaveArray).subscribe(e=>{1===e.success?(d().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),this.manualResultForm.reset(),this.currentCombinationMatrixSelectedId=-1):(this.validatorError=e.error,d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},e=>{console.log("data saving error",e)})})}saveOldDateResult(){const e=this.pipe.transform(this.newDateFilter,"yyyy-MM-dd");this.oldDateResultForm.value.gameDate=e,this.validatorError=null,d().fire({title:"Confirmation",text:"Do you sure to save this result?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, save It!"}).then(e=>{e.isConfirmed&&this.manualResultService.saveOldDateResult(this.oldDateResultForm.value).subscribe(e=>{1===e.success?(d().fire({position:"top-end",icon:"success",title:"Result saved",showConfirmButton:!1,timer:1e3}),this.oldDateResultForm.reset(),this.selectedNumberCombination=null,this.currentCombinationMatrixSelectedId=-1,this.oldDateReultDrawTime.splice(e.data,1)):(this.validatorError=e.error,d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3}))},e=>{console.log("data saving error",e)})})}getDrawTimeForOldResult(e){const t=this.pipe.transform(e.value,"yyyy-MM-dd");if(t<this.pipe.transform(this.startDate,"yyyy-MM-dd")){const e={gameId:this.oldDateResultForm.value.gameId,gameDate:this.pipe.transform(t,"yyyy-MM-dd")};this.manualResultService.fetchRemainingDrawTimesToPutOldResult(e).subscribe(e=>{this.oldDateReultDrawTime=e.data})}else this.oldDateReultDrawTime=[]}getGameInputLoad(){this.manualResultService.showInputLoadGameWise({gameId:this.manualResultForm.value.gameId,drawId:this.manualResultForm.value.drawMasterId}).subscribe(e=>{this.inputLoad=e.data})}gameDatepickerChange(e){const t=(0,r.p6)(this.manualResultForm.value.transaction_date,"yyyy-MM-dd","en");this.http.get(this.BASE_API_URL+"/drawTimes/dates/"+t).subscribe(e=>{this.drawTimes=e.data})}searchByDateTab1(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});const e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd");this.manualResultService.saveOldDateResult(e).subscribe(e=>{e.data&&d().close()})}twelveCardInput(e){this.twelveSelectedCard="../../../../assets/images/"+e+".jpg"}sixteenCardInput(e){this.sixteenSelectedCard="../../../../assets/images/"+e+".jpg"}}return e.\u0275fac=function(t){return new(t||e)(Z.Y36(p.eN),Z.Y36(x),Z.Y36(v.h),Z.Y36(q.M),Z.Y36(n.gz),Z.Y36(n.F0),Z.Y36(f.v),Z.Y36(A.T))},e.\u0275cmp=Z.Xpm({type:e,selectors:[["app-manual-result"]],decls:88,vars:29,consts:[[3,"ngClass"],["label","Today"],[1,"d-flex"],[1,""],[3,"formGroup"],[1,"d-flex","flex-column","bd-highlight"],[1,"p-2","bd-highlight"],[1,"row"],["targetDiv",""],[1,"col-4"],["formControlName","drawMasterId","placeholder","Category",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"d-flex","col-2",2,"height","0px","border-radius","10px","padding-top","0px","padding-left","10px"],["formControlName","gameId","placeholder","Category",3,"selectionChange"],[1,"card",2,"width","18rem"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],["type","button",1,"btn","btn-primary","mt-2",3,"click"],[1,"ml-3"],["class","table-bordered text-center",4,"ngIf"],["class","p-1",4,"ngIf"],["class","p-5",4,"ngIf"],["mat-fab","",1,"coder-fab",3,"click"],[1,"bi","bi-arrow-up-circle"],["label","Old Day"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill","formControlName","gameDate"],["matInput","",3,"matDatepicker","ngModel","ngModelOptions","dateChange","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelOptions","ngModelChange"],["picker",""],[1,"col-2"],["formControlName","drawMasterId","placeholder","Category"],["formControlName","gameId","placeholder","Category"],[1,"col-1"],[1,"card","mt-2",2,"width","18rem","border","4px solid rgb(217, 255, 2)","color","rgb(4, 0, 255)"],[1,"card-header","text-center"],[1,"list-group-item","text-center"],[2,"padding-left","120px"],["type","button",1,"btn","btn-primary","mt-2",3,"disabled","click"],[1,"d-flex","flex-row","bd-highlight"],["class","d-flex flex-column",3,"id",4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],[3,"value"],[1,"table-bordered","text-center"],["scope","col"],[1,"p-1"],[1,"d-flex",2,"height","45px"],[1,"col-4",2,"text-align","center","align-items","center"],[1,"m-1",2,"border","2px solid black","height","90%!important","width","20%","text-align","center","border-radius","5px","background","linear-gradient(to left, rgb(203, 203, 228), rgb(102, 101, 101))","color","rgb(0, 0, 0)","font-size","x-large"],[1,"m-1",2,"border","2px solid black","height","90%!important","width","20%","text-align","center","border-radius","5px","background-image","radial-gradient( white, rgb(71, 73, 73))","color","rgb(0, 0, 0)","font-size","x-large"],[1,"m-1",2,"border","2px solid black","height","90%!important","width","20%","text-align","center","border-radius","5px","background","linear-gradient(to right, rgb(203, 203, 228), rgb(102, 101, 101))","color","rgb(0, 0, 0)","font-size","x-large"],[1,"d-flex","p-1"],[1,"col-5","m-0","p-0",2,"border","2px solid green","border-radius","10px","background-image","url('assets/images/bkgnd1.jpg')","background-position","center"],[1,"d-flex","flex-row","bd-highlight","scroll",2,"max-width","400px","overflow-x","hidden","max-height","500px","overflow-y","scroll"],[1,"d-flex","flex-row"],["class","p-1",4,"ngFor","ngForOf"],[1,"col"],[1,"table","table-bordered","table-dark"],[4,"ngFor","ngForOf"],["class","single-number-button coder-fab p-1",3,"green","click",4,"ngFor","ngForOf"],[1,"single-number-button","coder-fab","p-1",3,"click"],[2,"background-image","url('/assets/images/twelve-card.background4.jpg')","background-size","cover","border","30px solid red","margin-top","30px","height","710px"],[1,"col-6",2,"padding-top","50px"],[1,"table","table-striped","table-hover","container",2,"max-width","200px","height","450px"],["scope","col",2,"padding-left","35px"],["src","assets/images/clubs.png","width","50","alt",""],["src","assets/images/diamond.png","width","60","alt",""],["src","assets/images/spade.png","width","60","alt",""],["src","assets/images/heart.png","width","80","alt",""],["scope","row",2,"text-align","center"],["src","assets/images/jack.png","width","50","alt",""],[1,"zoom",2,"width","110px","height","140px","background-color","rgba(241, 143, 203, 0.199)","border","2px solid gold","border-radius","15px","box-shadow","5px 10px rgba(0, 128, 0, 0.295)","font-size","50px"],["src","assets/images/1.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/2.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/4.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/3.jpg","width","100px","alt","",1,"p-2",3,"click"],["scope","row"],["src","assets/images/queen.png","width","50","alt",""],["src","assets/images/5.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/6.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/8.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/7.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/king.png","width","50","alt",""],["src","assets/images/9.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/10.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/12.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/11.jpg","width","100px","alt","",1,"p-2",3,"click"],[1,"col-6",2,"text-align","center","align-content","center"],["width","50%",3,"src"],[2,"background-image","url('/assets/images/twelve-card.background4.jpg')","background-size","cover","border","30px solid red","margin-top","30px","height","869px"],["src","assets/images/ace.png","width","50","alt",""],["src","assets/images/13.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/14.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/16.jpg","width","100px","alt","",1,"p-2",3,"click"],["src","assets/images/15.jpg","width","100px","alt","",1,"p-2",3,"click"],[1,"col-6","p-5","container",2,"text-align","center","height","101px","align-items","center"],[2,"border","2px solid black","height","1000%!important","width","20%","text-align","center","border-radius","5px","background","linear-gradient(to left, rgb(203, 203, 228), rgb(102, 101, 101))","color","rgb(0, 0, 0)","font-size","x-large"],[1,"d-flex","p-1",2,"text-align","center","align-items","center"],[1,"col-6","p-5","container",2,"border","2px solid black","border-radius","10px","text-align","center","align-items","center"],["class","p-1","style"," align-items: center;",4,"ngFor","ngForOf"],[1,"p-1",2,"align-items","center"],["class","single-number-button coder-fab","class","p-1",3,"green","click",4,"ngFor","ngForOf"],[1,"p-1",3,"click"],[1,"p-5"],[1,"col-11",2,"text-align","center","align-items","center"],[2,"border","2px solid black","width","20%","text-align","center","border-radius","5px","background","linear-gradient(to left, rgb(203, 203, 228), rgb(102, 101, 101))","color","rgb(0, 0, 0)","font-size","x-large"],[1,"col-11","container","m-0","p-0",2,"border","2px solid black","border-radius","10px","text-align","center","align-items","center"],[1,"d-flex","flex-row","bd-highlight","scroll",2,"max-height","570px","overflow-y","scroll"],[1,"d-flex","flex-column",3,"id"],[1,"single-number-button","coder-fab",3,"disabled"],["mat-fab","","aria-label","",1,"coder-fab",3,"matBadge","matBadgeHidden","ngStyle","click"],[3,"change"],[1,"col-6"]],template:function(e,t){if(1&e){const e=Z.EpF();Z.TgZ(0,"div",0),Z.TgZ(1,"mat-tab-group"),Z.TgZ(2,"mat-tab",1),Z.TgZ(3,"div",2),Z.TgZ(4,"div",3),Z.TgZ(5,"form",4),Z.TgZ(6,"div",5),Z.TgZ(7,"div",6),Z.TgZ(8,"div",7,8),Z.TgZ(10,"mat-form-field",9),Z.TgZ(11,"mat-label"),Z._uU(12,"Draw time"),Z.qZA(),Z.TgZ(13,"mat-select",10),Z.NdJ("selectionChange",function(){return t.changeTime()}),Z.YNc(14,R,2,2,"mat-option",11),Z.qZA(),Z.qZA(),Z.TgZ(15,"div",12),Z.TgZ(16,"mat-form-field"),Z.TgZ(17,"mat-label"),Z._uU(18,"Game"),Z.qZA(),Z.TgZ(19,"mat-select",13),Z.NdJ("selectionChange",function(){return t.changeDraw()}),Z.YNc(20,y,2,2,"mat-option",11),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(21,"div"),Z.TgZ(22,"div",14),Z.TgZ(23,"div",15),Z._uU(24," Upcoming result "),Z.qZA(),Z.TgZ(25,"ul",16),Z.TgZ(26,"li",17),Z._uU(27),Z.qZA(),Z.TgZ(28,"li",17),Z._uU(29),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(30,"button",18),Z.NdJ("click",function(){return t.saveManualResult()}),Z._uU(31,"Save"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(32,"div",19),Z.YNc(33,F,7,0,"table",20),Z.qZA(),Z.qZA(),Z.YNc(34,j,29,5,"div",21),Z.YNc(35,B,68,1,"div",21),Z.YNc(36,H,83,1,"div",21),Z.YNc(37,P,10,2,"div",21),Z.YNc(38,G,9,2,"div",22),Z.TgZ(39,"button",23),Z.NdJ("click",function(){Z.CHM(e);const i=Z.MAs(9);return t.scroll(i)}),Z._UZ(40,"i",24),Z.qZA(),Z.qZA(),Z.TgZ(41,"mat-tab",25),Z.TgZ(42,"div"),Z.TgZ(43,"form",4),Z.TgZ(44,"div",5),Z.TgZ(45,"div",6),Z.TgZ(46,"div",7,8),Z.TgZ(48,"div",26),Z.TgZ(49,"div",27),Z.TgZ(50,"mat-form-field",28),Z.TgZ(51,"mat-label"),Z._uU(52,"Start date"),Z.qZA(),Z.TgZ(53,"input",29),Z.NdJ("dateChange",function(e){return t.getDrawTimeForOldResult(e)})("ngModelChange",function(e){return t.newDateFilter=e}),Z.qZA(),Z._UZ(54,"mat-datepicker-toggle",30),Z.TgZ(55,"mat-datepicker",31,32),Z.NdJ("ngModelChange",function(e){return t.newDateFilter=e}),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(57,"mat-form-field",33),Z.TgZ(58,"mat-label"),Z._uU(59,"Draw time"),Z.qZA(),Z.TgZ(60,"mat-select",34),Z.YNc(61,V,2,2,"mat-option",11),Z.qZA(),Z.qZA(),Z.TgZ(62,"div",12),Z.TgZ(63,"mat-form-field"),Z.TgZ(64,"mat-label"),Z._uU(65,"Game"),Z.qZA(),Z.TgZ(66,"mat-select",35),Z.YNc(67,z,2,2,"mat-option",11),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(68,"div"),Z.TgZ(69,"div",2),Z._UZ(70,"div",36),Z.TgZ(71,"div",37),Z.TgZ(72,"div",38),Z._uU(73," Upcoming result "),Z.qZA(),Z.TgZ(74,"ul",16),Z.TgZ(75,"li",39),Z._uU(76),Z.qZA(),Z.TgZ(77,"li",39),Z._uU(78),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(79,"div",40),Z.TgZ(80,"button",41),Z.NdJ("click",function(){return t.saveOldDateResult()}),Z._uU(81,"Save"),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(82,"div",42),Z.YNc(83,K,5,6,"div",43),Z.qZA(),Z.qZA(),Z.qZA(),Z.TgZ(84,"button",23),Z.NdJ("click",function(){Z.CHM(e);const i=Z.MAs(9);return t.scroll(i)}),Z._UZ(85,"i",24),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.qZA(),Z.YNc(86,W,4,1,"div",44),Z.YNc(87,ee,11,6,"div",44)}if(2&e){const e=Z.MAs(56);Z.Q6J("ngClass",t.deviceXs?"mobile":"desktop"),Z.xp6(5),Z.Q6J("formGroup",t.manualResultForm),Z.xp6(9),Z.Q6J("ngForOf",t.drawTimes),Z.xp6(6),Z.Q6J("ngForOf",t.games),Z.xp6(7),Z.Oqu(t.manualResultForm.value.triple),Z.xp6(2),Z.Oqu(t.manualResultForm.value.single),Z.xp6(4),Z.Q6J("ngIf",t.inputLoad),Z.xp6(1),Z.Q6J("ngIf",1===t.manualResultForm.value.gameId),Z.xp6(1),Z.Q6J("ngIf",2===t.manualResultForm.value.gameId),Z.xp6(1),Z.Q6J("ngIf",3===t.manualResultForm.value.gameId),Z.xp6(1),Z.Q6J("ngIf",4===t.manualResultForm.value.gameId),Z.xp6(1),Z.Q6J("ngIf",5===t.manualResultForm.value.gameId),Z.xp6(5),Z.Q6J("formGroup",t.oldDateResultForm),Z.xp6(10),Z.Q6J("matDatepicker",e)("ngModel",t.newDateFilter)("ngModelOptions",Z.DdM(27,te)),Z.xp6(1),Z.Q6J("for",e),Z.xp6(1),Z.Q6J("ngModel",t.newDateFilter)("ngModelOptions",Z.DdM(28,te)),Z.xp6(6),Z.Q6J("ngForOf",t.oldDateReultDrawTime),Z.xp6(6),Z.Q6J("ngForOf",t.games),Z.xp6(9),Z.Oqu(t.oldDateResultForm.value.triple),Z.xp6(2),Z.Oqu(t.oldDateResultForm.value.single),Z.xp6(2),Z.Q6J("disabled",t.oldDateResultForm.invalid),Z.xp6(3),Z.Q6J("ngForOf",t.numberCombinationMatrix),Z.xp6(3),Z.Q6J("ngIf",!t.isProduction),Z.xp6(1),Z.Q6J("ngIf",!t.isProduction&&t.showDevArea)}},directives:[r.mk,w.SP,w.uX,s._Y,s.JL,s.sg,N.KE,N.hX,C.gD,s.JJ,s.u,r.sg,r.O5,I.lW,M.Nt,k.hl,s.Fj,s.On,k.nW,N.R9,k.Mq,S.ey,_.k,r.PC,D.Rr],pipes:[r.Ts],styles:[".triple-number-button[_ngcontent-%COMP%]:hover{background-color:#676c67!important}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]{width:35px;height:35px;line-height:14px;font-size:14px}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper{line-height:14px;padding:0}.mobile[_ngcontent-%COMP%]   .coder-fab[_ngcontent-%COMP%]  .mat-button-wrapper .mat-icon{font-size:12px;padding-right:4px;padding-top:4px}.zoom[_ngcontent-%COMP%]{transition:transform .2s}.zoom[_ngcontent-%COMP%]:hover{transform:scale(1.2)}.scroll-arrow[_ngcontent-%COMP%]{border-radius:50%}.scroll[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.scroll[_ngcontent-%COMP%]{-ms-overflow-style:none;scrollbar-width:none}.green[_ngcontent-%COMP%]{background-color:#f766cb;height:55px;width:55px;border-radius:30px;color:#fff}"],data:{animation:[(0,l.X$)("changeDivSize",[(0,l.SB)("initial",(0,l.oB)({backgroundColor:"green",width:"100px",height:"100px"})),(0,l.SB)("final",(0,l.oB)({backgroundColor:"red",width:"200px",height:"200px"})),(0,l.eR)("initial=>final",(0,l.jt)("1500ms")),(0,l.eR)("final=>initial",(0,l.jt)("1000ms"))])]}}),e})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[n.Bz.forChild(ie)],n.Bz]}),e})();var ne=i(3738),ae=i(2542);let se=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[r.ez,re,D.rP,ne.QW,s.u5,N.lN,s.UX,M.c,k.FA,C.LD,_.g,I.ot,D.rP,w.Nh,ae.vV,k.FA,S.XK]]}),e})()}}]);