!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[24],{5480:function(e,r,a){a.d(r,{q:function(){return m}});var n,o=a(1095),l=a(9983),s=a(7716),m=((n=t(function e(){i(this,e)})).\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[o.ot,l.c]}),n)},3024:function(e,r,a){a.r(r),a.d(r,{MasterTerminalModule:function(){return W}});var n=a(8583),o=a(3423),l=a(2340),s=a(3679),m=a(8259),c=a.n(m),u=a(7716),d=a(2088),f=a(2173),Z=a(3535),g=a(1599),p=a(5939),T=a(3738),h=a(5618),v=a(8295),x=a(9983),A=a(7441),q=a(1095),b=a(1494),k=a(2458),I=a(8030),w=a(6627),y=a(5396);function N(e,t){1&e&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function S(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function U(e,t){if(1&e&&(u.TgZ(0,"div",34),u.YNc(1,N,2,0,"mat-error",35),u.YNc(2,S,2,1,"mat-error",35),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function _(e,t){if(1&e&&(u.TgZ(0,"mat-option",36),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.userId),u.xp6(1),u.hij(" ",i.userName," ")}}function L(e,t){if(1&e&&(u.TgZ(0,"mat-option",36),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.id),u.xp6(1),u.hij(" ",i.slab_status," ")}}function F(e,t){if(1&e&&(u.TgZ(0,"mat-option",36),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.id),u.xp6(1),u.hij(" ",i.user_name," ")}}function J(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"tr",37),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u.TgZ(12,"i",38),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().editTerminal(e)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var r=t.$implicit,a=t.index,n=u.oxw();u.Q6J("ngStyle",n.getBackgroundColor(a)),u.xp6(2),u.Oqu(a+1),u.xp6(2),u.Oqu(r.terminalName),u.xp6(2),u.Oqu(r.pin),u.xp6(2),u.Oqu(r.balance),u.xp6(2),u.Oqu(r.stockist.userName)}}function C(e,t){if(1&e&&(u.TgZ(0,"mat-option",36),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.terminalId),u.xp6(1),u.hij(" ",i.pin," ")}}function Q(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",39),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",40),u.TgZ(4,"mat-icon",41),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.terminalName)}}function B(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",39),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",42),u.TgZ(4,"mat-icon",41),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.balance)}}function M(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",39),u.TgZ(1,"mat-label"),u._uU(2,"Stockist owner"),u.qZA(),u._UZ(3,"input",40),u.TgZ(4,"mat-icon",41),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.userName)}}function Y(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",39),u.TgZ(1,"mat-label"),u._uU(2,"Stockist balance"),u.qZA(),u._UZ(3,"input",42),u.TgZ(4,"mat-icon",41),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.balance)}}function O(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,M,6,1,"mat-form-field",30),u.YNc(2,Y,6,1,"mat-form-field",30),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal),u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function R(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(3);u.xp6(1),u.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function j(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",44),u.TgZ(1,"mat-label"),u._uU(2,"Recharge amount"),u.qZA(),u._UZ(3,"input",45),u.TgZ(4,"mat-icon",41),u._uU(5," money"),u.qZA(),u.YNc(6,R,2,1,"mat-error",35),u.qZA()),2&e){var i=u.oxw(2);u.xp6(6),u.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function D(e,t){if(1&e&&(u.TgZ(0,"div",4),u.YNc(1,j,7,1,"mat-form-field",43),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function P(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"div",46),u.TgZ(1,"div",47),u.TgZ(2,"mat-slide-toggle",48),u.NdJ("change",function(){u.CHM(i);var e=u.oxw();return e.showDevArea=!e.showDevArea}),u._uU(3),u.qZA(),u.qZA(),u.qZA()}if(2&e){var r=u.oxw();u.xp6(3),u.Oqu(r.showDevArea?"Hide Developer Area":"Show Developer Area")}}function E(e,t){if(1&e&&(u.TgZ(0,"div",46),u.TgZ(1,"div",49),u.TgZ(2,"pre"),u._uU(3),u._uU(4),u._uU(5,"\n      "),u.qZA(),u.qZA(),u._UZ(6,"div",47),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.hij("        ",i.terminalLimitForm.valid,"\n      "),u.xp6(1),u.hij("\n        terminalForm = ",i.terminalMasterForm.value,"\n      ")}}function G(e,t,i){return(e<t?-1:1)*(i?1:-1)}var V,$=[{path:"",component:(V=function(){function e(t,r,a,n){i(this,e),this.masterTerminalService=t,this.masterStockistService=r,this.authService=a,this.masterSuperStockistService=n,this.isProduction=l.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.superStockists=[],this.selectedTerminal=null,this.selectedStockiest=null,this.payoutSlabs=[],this.highLightedRowIndex=-1,this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required]),payoutSlabId:new s.NI(null,[s.kI.required]),superStockistId:new s.NI(null,[s.kI.required]),pin:new s.NI(null,[s.kI.required])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])})}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(function(t){e.payoutSlabs=t}),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t;var i=e.stockists.findIndex(function(t){return t.userId===e.user.userId});e.selectedStockiest=e.stockists[i],e.terminalMasterForm.patchValue({stockistId:e.user.userId,superStockistId:e.selectedStockiest.superStockistId})})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,userId:e.user.userId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"createNewTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.terminalMasterForm.value.superStockistId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,createdBy:e.user.userId,pin:e.terminalMasterForm.value.pin}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var r="asc"===e.direction;switch(e.active){case"terminalName":return G(t.terminalName,i.terminalName,r);case"stockistName":return G(t.stockist.userName,i.stockist.userName,r);case"balance":return G(t.balance,i.balance,r);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,r=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[r].balance=i.balance,e.terminals[r].stockist.balance=i.stockist.balance,e.sortedTerminalList[r].balance=i.balance,e.sortedTerminalList[r].stockist.balance=i.stockist.balance,e.highLightedRowIndex=r,e.terminalLimitForm.controls.amount.setValidators([s.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),e}(),V.\u0275fac=function(e){return new(e||V)(u.Y36(d.S),u.Y36(f.E),u.Y36(Z.e),u.Y36(g.Q))},V.\u0275cmp=u.Xpm({type:V,selectors:[["app-master-terminal"]],decls:98,vars:17,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],["formControlName","superStockistId","disabled",""],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(u.TgZ(0,"mat-tab-group"),u.TgZ(1,"mat-tab",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"mat-card"),u.TgZ(5,"mat-card-header"),u._UZ(6,"div",3),u.TgZ(7,"mat-card-title"),u._uU(8,"New Terminal Form"),u.qZA(),u.qZA(),u.TgZ(9,"mat-card-content"),u.TgZ(10,"div",4),u.TgZ(11,"div",5),u.TgZ(12,"form",6),u.TgZ(13,"div",4),u.TgZ(14,"mat-form-field",5),u.TgZ(15,"mat-label"),u._uU(16,"Terminal Name"),u.qZA(),u._UZ(17,"input",7),u.YNc(18,U,3,2,"div",8),u.qZA(),u.TgZ(19,"mat-form-field",5),u.TgZ(20,"mat-label"),u._uU(21,"PIN"),u.qZA(),u._UZ(22,"input",9),u.qZA(),u.qZA(),u.TgZ(23,"div",4),u.TgZ(24,"mat-form-field",5),u.TgZ(25,"mat-label"),u._uU(26,"Stockist"),u.qZA(),u.TgZ(27,"mat-select",10),u.YNc(28,_,2,2,"mat-option",11),u.qZA(),u.qZA(),u.qZA(),u.TgZ(29,"div",4),u.TgZ(30,"mat-form-field",5),u.TgZ(31,"mat-label"),u._uU(32,"Payout Slab"),u.qZA(),u.TgZ(33,"mat-select",12),u.YNc(34,L,2,2,"mat-option",11),u.qZA(),u.qZA(),u.qZA(),u.TgZ(35,"div",4),u.TgZ(36,"mat-form-field",5),u.TgZ(37,"mat-label"),u._uU(38,"Super Stockist"),u.qZA(),u.TgZ(39,"mat-select",13),u.YNc(40,F,2,2,"mat-option",11),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(41,"div",4),u.TgZ(42,"button",14),u.NdJ("click",function(){return t.createNewTerminal()}),u._uU(43,"Create"),u.qZA(),u.TgZ(44,"button",14),u.NdJ("click",function(){return t.updateTerminal()}),u._uU(45,"Update"),u.qZA(),u.TgZ(46,"button",15),u.NdJ("click",function(){return t.clearMasterTerminalForm()}),u._uU(47,"clear"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(48,"div",16),u.TgZ(49,"table",17),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(50,"thead"),u.TgZ(51,"tr"),u.TgZ(52,"th",18),u._uU(53,"Terminal List"),u.qZA(),u.qZA(),u.TgZ(54,"tr"),u.TgZ(55,"th"),u._uU(56,"Id"),u.qZA(),u.TgZ(57,"th",19),u._uU(58,"Terminal name"),u.qZA(),u.TgZ(59,"th",20),u._uU(60,"Pin"),u.qZA(),u.TgZ(61,"th",21),u._uU(62,"Balance"),u.qZA(),u.TgZ(63,"th",22),u._uU(64,"Stockist"),u.qZA(),u.TgZ(65,"th",23),u._uU(66,"Edit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(67,"tbody"),u.YNc(68,J,13,6,"tr",24),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(69,"mat-tab",25),u.TgZ(70,"div",1),u._UZ(71,"div",26),u.TgZ(72,"div",27),u.TgZ(73,"mat-card"),u.TgZ(74,"mat-card-header"),u._UZ(75,"div",3),u.TgZ(76,"mat-card-title"),u._uU(77,"Recharge Terminal"),u.qZA(),u.qZA(),u.TgZ(78,"mat-card-content"),u.TgZ(79,"div",4),u.TgZ(80,"div",5),u.TgZ(81,"form",6),u.TgZ(82,"div",4),u.TgZ(83,"mat-form-field",28),u.TgZ(84,"mat-label"),u._uU(85,"Terminal"),u.qZA(),u.TgZ(86,"mat-select",29),u.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),u.YNc(87,C,2,2,"mat-option",11),u.qZA(),u.qZA(),u.YNc(88,Q,6,1,"mat-form-field",30),u.YNc(89,B,6,1,"mat-form-field",30),u.qZA(),u.YNc(90,O,3,2,"div",31),u.YNc(91,D,2,1,"div",31),u.TgZ(92,"div",4),u.TgZ(93,"button",32),u.NdJ("click",function(){return t.rechargeToTerminal()}),u._uU(94,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(95,"div",26),u.qZA(),u.qZA(),u.qZA(),u.YNc(96,P,4,1,"div",33),u.YNc(97,E,7,2,"div",33)),2&e&&(u.xp6(12),u.Q6J("formGroup",t.terminalMasterForm),u.xp6(6),u.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),u.xp6(10),u.Q6J("ngForOf",t.stockists),u.xp6(6),u.Q6J("ngForOf",t.payoutSlabs),u.xp6(6),u.Q6J("ngForOf",t.superStockists),u.xp6(2),u.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),u.xp6(2),u.Q6J("disabled",!t.isTerminalUpdatAble),u.xp6(24),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(13),u.Q6J("formGroup",t.terminalLimitForm),u.xp6(6),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(2),u.Q6J("disabled",!t.terminalLimitForm.valid),u.xp6(3),u.Q6J("ngIf",!t.isProduction),u.xp6(1),u.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[p.SP,p.uX,T.a8,T.dk,T.kc,T.n5,T.dn,h.xw,h.Wh,h.SQ,h.yH,s._Y,s.JL,s.sg,v.KE,v.hX,x.Nt,s.Fj,s.JJ,s.u,n.O5,A.gD,n.sg,q.lW,b.YE,b.nU,v.TO,k.ey,n.PC,I.Zl,w.Hw,v.R9,y.Rr],styles:[""]}),V)}],H=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.Bz.forChild($)],o.Bz]}),e}(),X=a(5480),z=a(5566),W=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[n.ez,H,p.Nh,X.q,z.o9,T.QW,s.u5,s.UX,y.rP,b.JX,A.LD,w.Ps]]}),e}()}}])}();