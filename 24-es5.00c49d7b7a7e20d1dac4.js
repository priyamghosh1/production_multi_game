!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[24],{5480:function(e,r,n){n.d(r,{q:function(){return m}});var a,o=n(1095),l=n(9983),s=n(7716),m=((a=t(function e(){i(this,e)})).\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[o.ot,l.c]}),a)},3024:function(e,r,n){n.r(r),n.d(r,{MasterTerminalModule:function(){return z}});var a=n(8583),o=n(3423),l=n(2340),s=n(3679),m=n(8259),c=n.n(m),u=n(7716),d=n(2088),f=n(2173),g=n(3535),Z=n(1599),p=n(5939),T=n(3738),h=n(5618),v=n(8295),x=n(9983),A=n(7441),q=n(1095),b=n(1494),k=n(2458),I=n(8030),w=n(6627),N=n(5396);function U(e,t){1&e&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function y(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function _(e,t){if(1&e&&(u.TgZ(0,"div",33),u.YNc(1,U,2,0,"mat-error",34),u.YNc(2,y,2,1,"mat-error",34),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function S(e,t){if(1&e&&(u.TgZ(0,"mat-option",35),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.userId),u.xp6(1),u.hij(" ",i.userName," ")}}function L(e,t){if(1&e&&(u.TgZ(0,"mat-option",35),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.id),u.xp6(1),u.hij(" ",i.user_name," ")}}function F(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"tr",36),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u.TgZ(12,"i",37),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().editTerminal(e)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var r=t.$implicit,n=t.index,a=u.oxw();u.Q6J("ngStyle",a.getBackgroundColor(n)),u.xp6(2),u.Oqu(n+1),u.xp6(2),u.Oqu(r.terminalName),u.xp6(2),u.Oqu(r.pin),u.xp6(2),u.Oqu(r.balance),u.xp6(2),u.Oqu(r.stockist.userName)}}function J(e,t){if(1&e&&(u.TgZ(0,"mat-option",35),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.terminalId),u.xp6(1),u.hij(" ",i.pin," ")}}function C(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",38),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",39),u.TgZ(4,"mat-icon",40),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.terminalName)}}function Q(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",38),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",41),u.TgZ(4,"mat-icon",40),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.balance)}}function B(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",38),u.TgZ(1,"mat-label"),u._uU(2,"Stockist owner"),u.qZA(),u._UZ(3,"input",39),u.TgZ(4,"mat-icon",40),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.userName)}}function M(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",38),u.TgZ(1,"mat-label"),u._uU(2,"Stockist balance"),u.qZA(),u._UZ(3,"input",41),u.TgZ(4,"mat-icon",40),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.balance)}}function Y(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,B,6,1,"mat-form-field",29),u.YNc(2,M,6,1,"mat-form-field",29),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal),u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function O(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(3);u.xp6(1),u.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function R(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",43),u.TgZ(1,"mat-label"),u._uU(2,"Recharge amount"),u.qZA(),u._UZ(3,"input",44),u.TgZ(4,"mat-icon",40),u._uU(5," money"),u.qZA(),u.YNc(6,O,2,1,"mat-error",34),u.qZA()),2&e){var i=u.oxw(2);u.xp6(6),u.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function D(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,R,7,1,"mat-form-field",42),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function j(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"div",45),u.TgZ(1,"div",46),u.TgZ(2,"mat-slide-toggle",47),u.NdJ("change",function(){u.CHM(i);var e=u.oxw();return e.showDevArea=!e.showDevArea}),u._uU(3),u.qZA(),u.qZA(),u.qZA()}if(2&e){var r=u.oxw();u.xp6(3),u.Oqu(r.showDevArea?"Hide Developer Area":"Show Developer Area")}}function E(e,t){if(1&e&&(u.TgZ(0,"div",45),u.TgZ(1,"div",48),u.TgZ(2,"pre"),u._uU(3),u._uU(4),u._uU(5,"\n      "),u.qZA(),u.qZA(),u._UZ(6,"div",46),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.hij("        ",i.terminalLimitForm.valid,"\n      "),u.xp6(1),u.hij("\n        terminalForm = ",i.terminalMasterForm.value,"\n      ")}}function G(e,t,i){return(e<t?-1:1)*(i?1:-1)}var P,V=[{path:"",component:(P=function(){function e(t,r,n,a){i(this,e),this.masterTerminalService=t,this.masterStockistService=r,this.authService=n,this.masterSuperStockistService=a,this.isProduction=l.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.superStockists=[],this.selectedTerminal=null,this.selectedStockiest=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required]),superStockistId:new s.NI(null,[s.kI.required]),pin:new s.NI(null,[s.kI.required])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])})}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t;var i=e.stockists.findIndex(function(t){return t.userId===e.user.userId});e.selectedStockiest=e.stockists[i],e.terminalMasterForm.patchValue({stockistId:e.user.userId,superStockistId:e.selectedStockiest.superStockistId})})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,userId:e.user.userId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"createNewTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.terminalMasterForm.value.superStockistId,createdBy:e.user.userId,pin:e.terminalMasterForm.value.pin}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var r="asc"===e.direction;switch(e.active){case"terminalName":return G(t.terminalName,i.terminalName,r);case"stockistName":return G(t.stockist.userName,i.stockist.userName,r);case"balance":return G(t.balance,i.balance,r);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,r=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[r].balance=i.balance,e.terminals[r].stockist.balance=i.stockist.balance,e.sortedTerminalList[r].balance=i.balance,e.sortedTerminalList[r].stockist.balance=i.stockist.balance,e.highLightedRowIndex=r,e.terminalLimitForm.controls.amount.setValidators([s.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),e}(),P.\u0275fac=function(e){return new(e||P)(u.Y36(d.S),u.Y36(f.E),u.Y36(g.e),u.Y36(Z.Q))},P.\u0275cmp=u.Xpm({type:P,selectors:[["app-master-terminal"]],decls:92,vars:16,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(u.TgZ(0,"mat-tab-group"),u.TgZ(1,"mat-tab",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"mat-card"),u.TgZ(5,"mat-card-header"),u._UZ(6,"div",3),u.TgZ(7,"mat-card-title"),u._uU(8,"New Terminal Form"),u.qZA(),u.qZA(),u.TgZ(9,"mat-card-content"),u.TgZ(10,"div",4),u.TgZ(11,"div",5),u.TgZ(12,"form",6),u.TgZ(13,"div",4),u.TgZ(14,"mat-form-field",5),u.TgZ(15,"mat-label"),u._uU(16,"Terminal Name"),u.qZA(),u._UZ(17,"input",7),u.YNc(18,_,3,2,"div",8),u.qZA(),u.TgZ(19,"mat-form-field",5),u.TgZ(20,"mat-label"),u._uU(21,"PIN"),u.qZA(),u._UZ(22,"input",9),u.qZA(),u.qZA(),u.TgZ(23,"div",4),u.TgZ(24,"mat-form-field",5),u.TgZ(25,"mat-label"),u._uU(26,"Stockist"),u.qZA(),u.TgZ(27,"mat-select",10),u.YNc(28,S,2,2,"mat-option",11),u.qZA(),u.qZA(),u.qZA(),u.TgZ(29,"div",4),u.TgZ(30,"mat-form-field",5),u.TgZ(31,"mat-label"),u._uU(32,"Super Stockist"),u.qZA(),u.TgZ(33,"mat-select",12),u.YNc(34,L,2,2,"mat-option",11),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(35,"div",4),u.TgZ(36,"button",13),u.NdJ("click",function(){return t.createNewTerminal()}),u._uU(37,"Create"),u.qZA(),u.TgZ(38,"button",13),u.NdJ("click",function(){return t.updateTerminal()}),u._uU(39,"Update"),u.qZA(),u.TgZ(40,"button",14),u.NdJ("click",function(){return t.clearMasterTerminalForm()}),u._uU(41,"clear"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(42,"div",15),u.TgZ(43,"table",16),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(44,"thead"),u.TgZ(45,"tr"),u.TgZ(46,"th",17),u._uU(47,"Terminal List"),u.qZA(),u.qZA(),u.TgZ(48,"tr"),u.TgZ(49,"th"),u._uU(50,"Id"),u.qZA(),u.TgZ(51,"th",18),u._uU(52,"Terminal name"),u.qZA(),u.TgZ(53,"th",19),u._uU(54,"Pin"),u.qZA(),u.TgZ(55,"th",20),u._uU(56,"Balance"),u.qZA(),u.TgZ(57,"th",21),u._uU(58,"Stockist"),u.qZA(),u.TgZ(59,"th",22),u._uU(60,"Edit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(61,"tbody"),u.YNc(62,F,13,6,"tr",23),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(63,"mat-tab",24),u.TgZ(64,"div",1),u._UZ(65,"div",25),u.TgZ(66,"div",26),u.TgZ(67,"mat-card"),u.TgZ(68,"mat-card-header"),u._UZ(69,"div",3),u.TgZ(70,"mat-card-title"),u._uU(71,"Recharge Terminal"),u.qZA(),u.qZA(),u.TgZ(72,"mat-card-content"),u.TgZ(73,"div",4),u.TgZ(74,"div",5),u.TgZ(75,"form",6),u.TgZ(76,"div",4),u.TgZ(77,"mat-form-field",27),u.TgZ(78,"mat-label"),u._uU(79,"Terminal"),u.qZA(),u.TgZ(80,"mat-select",28),u.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),u.YNc(81,J,2,2,"mat-option",11),u.qZA(),u.qZA(),u.YNc(82,C,6,1,"mat-form-field",29),u.YNc(83,Q,6,1,"mat-form-field",29),u.qZA(),u.YNc(84,Y,3,2,"div",30),u.YNc(85,D,2,1,"div",30),u.TgZ(86,"div",4),u.TgZ(87,"button",31),u.NdJ("click",function(){return t.rechargeToTerminal()}),u._uU(88,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(89,"div",25),u.qZA(),u.qZA(),u.qZA(),u.YNc(90,j,4,1,"div",32),u.YNc(91,E,7,2,"div",32)),2&e&&(u.xp6(12),u.Q6J("formGroup",t.terminalMasterForm),u.xp6(6),u.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),u.xp6(10),u.Q6J("ngForOf",t.stockists),u.xp6(6),u.Q6J("ngForOf",t.superStockists),u.xp6(2),u.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),u.xp6(2),u.Q6J("disabled",!t.isTerminalUpdatAble),u.xp6(24),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(13),u.Q6J("formGroup",t.terminalLimitForm),u.xp6(6),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(2),u.Q6J("disabled",!t.terminalLimitForm.valid),u.xp6(3),u.Q6J("ngIf",!t.isProduction),u.xp6(1),u.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[p.SP,p.uX,T.a8,T.dk,T.kc,T.n5,T.dn,h.xw,h.Wh,h.SQ,h.yH,s._Y,s.JL,s.sg,v.KE,v.hX,x.Nt,s.Fj,s.JJ,s.u,a.O5,A.gD,a.sg,q.lW,b.YE,b.nU,v.TO,k.ey,a.PC,I.Zl,w.Hw,v.R9,N.Rr],styles:[""]}),P)}],H=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.Bz.forChild(V)],o.Bz]}),e}(),X=n(5480),$=n(5566),z=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[a.ez,H,p.Nh,X.q,$.o9,T.QW,s.u5,s.UX,N.rP,b.JX,A.LD,w.Ps]]}),e}()}}])}();