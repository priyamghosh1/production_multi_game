!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(e,a,r){r.d(a,{q:function(){return m}});var n,o=r(1095),l=r(9983),s=r(7716),m=((n=t(function e(){i(this,e)})).\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[o.ot,l.c]}),n)},4582:function(e,a,r){r.r(a),r.d(a,{MasterTerminalModule:function(){return K}});var n=r(8583),o=r(3423),l=r(1068),s=r(2340),m=r(3679),c=r(8259),u=r.n(c),d=r(7716),f=r(2088),p=r(2173),Z=r(3535),g=r(1599),h=r(5620),T=r(5939),v=r(3738),x=r(5618),A=r(8295),b=r(9983),q=r(7441),k=r(1095),I=r(1494),S=r(2458),y=r(8030),N=r(6627),w=r(5396);function U(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(2);d.xp6(1),d.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function _(e,t){if(1&e&&(d.TgZ(0,"div",38),d.YNc(1,U,2,1,"mat-error",39),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function F(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"mat-option",40),d.NdJ("blur",function(){var e=d.CHM(i).$implicit;return d.oxw().selectSuperStockist(e)}),d._uU(1),d.qZA()}if(2&e){var a=t.$implicit;d.Q6J("value",a.userId),d.xp6(1),d.hij(" ",a.userName," ")}}function L(e,t){if(1&e&&(d.TgZ(0,"mat-option",41),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.id),d.xp6(1),d.hij(" ",i.slab_status," ")}}function C(e,t){if(1&e&&(d.TgZ(0,"mat-option",41),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.userId),d.xp6(1),d.hij(" ",i.userName," ")}}function J(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"tr",42),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d._uU(12),d.qZA(),d.TgZ(13,"td"),d._uU(14),d.qZA(),d.TgZ(15,"td"),d.TgZ(16,"i",43),d.NdJ("click",function(){var e=d.CHM(i).$implicit;return d.oxw().editTerminal(e)}),d.qZA(),d.qZA(),d.qZA()}if(2&e){var a=t.$implicit,r=t.index,n=d.oxw();d.Q6J("ngStyle",n.getBackgroundColor(r)),d.xp6(2),d.Oqu(r+1),d.xp6(2),d.Oqu(a.terminalName),d.xp6(2),d.Oqu(a.password),d.xp6(2),d.Oqu(a.commission),d.xp6(2),d.Oqu(a.balance),d.xp6(2),d.Oqu(a.superStockist.userName),d.xp6(2),d.Oqu(a.stockist.userName)}}function M(e,t){if(1&e&&(d.TgZ(0,"mat-option",41),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.terminalId),d.xp6(1),d.hij(" ",i.pin," ")}}function B(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",44),d.TgZ(1,"mat-label"),d._uU(2,"Name"),d.qZA(),d._UZ(3,"input",45),d.TgZ(4,"mat-icon",46),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.terminalName)}}function Q(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",44),d.TgZ(1,"mat-label"),d._uU(2,"Current balance"),d.qZA(),d._UZ(3,"input",47),d.TgZ(4,"mat-icon",46),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.balance)}}function Y(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",44),d.TgZ(1,"mat-label"),d._uU(2,"Stockist owner"),d.qZA(),d._UZ(3,"input",45),d.TgZ(4,"mat-icon",46),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.userName)}}function O(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",44),d.TgZ(1,"mat-label"),d._uU(2,"Stockist balance"),d.qZA(),d._UZ(3,"input",47),d.TgZ(4,"mat-icon",46),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.balance)}}function j(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,Y,6,1,"mat-form-field",34),d.YNc(2,O,6,1,"mat-form-field",34),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal),d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function P(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(3);d.xp6(1),d.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function D(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",49),d.TgZ(1,"mat-label"),d._uU(2,"Recharge amount"),d.qZA(),d._UZ(3,"input",50),d.TgZ(4,"mat-icon",46),d._uU(5," money"),d.qZA(),d.YNc(6,P,2,1,"mat-error",39),d.qZA()),2&e){var i=d.oxw(2);d.xp6(6),d.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function V(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,D,7,1,"mat-form-field",48),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function R(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",51),d.TgZ(1,"div",52),d.TgZ(2,"mat-slide-toggle",53),d.NdJ("change",function(){d.CHM(i);var e=d.oxw();return e.showDevArea=!e.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&e){var a=d.oxw();d.xp6(3),d.Oqu(a.showDevArea?"Hide Developer Area":"Show Developer Area")}}function E(e,t){if(1&e&&(d.TgZ(0,"div",51),d.TgZ(1,"div",54),d.TgZ(2,"pre"),d._uU(3),d._uU(4),d.ALo(5,"json"),d._uU(6,"\n      "),d.qZA(),d.qZA(),d._UZ(7,"div",52),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.hij("        ",i.terminalLimitForm.valid,"\n        "),d.xp6(1),d.hij("\n        terminalForm = ",d.lcZ(5,2,i.terminalMasterForm.value),"\n")}}function G(e,t,i){return(e<t?-1:1)*(i?1:-1)}var $,H=[{path:"",canActivate:[l.m],component:($=function(){function e(t,a,r,n,o){var l=this;i(this,e),this.masterTerminalService=t,this.masterStockistService=a,this.authService=r,this.masterSuperStockistService=n,this.commonService=o,this.isProduction=s.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.payoutSlabs=[],this.superStockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.terminalMasterForm=new m.cw({id:new m.NI(null),terminalName:new m.NI(null,[m.kI.required,m.kI.minLength(2)]),stockistId:new m.NI(null,[m.kI.required]),payoutSlabId:new m.NI(null,[m.kI.required]),superStockistId:new m.NI(null,[m.kI.required]),pin:new m.NI(null,[m.kI.required]),commission:new m.NI(null,[m.kI.required,m.kI.max(100)])}),this.terminalLimitForm=new m.cw({beneficiaryUid:new m.NI(null,[m.kI.required]),amount:new m.NI(null,[m.kI.required,m.kI.max(0)])}),this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(function(e){l.user=e})}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(function(t){e.payoutSlabs=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([m.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"checkPinValidation",value:function(){var e=this;this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(function(t){0===t.success?(u().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),e.pinCheckValidator=!0,e.terminalMasterForm.patchValue({terminalName:null})):e.pinCheckValidator=!1})}},{key:"editTerminal",value:function(e){this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockistId,superStockistId:e.superStockistId,payoutSlabId:e.payoutSlabId,pin:e.pin}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.terminalMasterForm.value.superStockistId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,pin:e.terminalMasterForm.value.pin,userId:e.user.userId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"selectSuperStockist",value:function(e){this.terminalMasterForm.patchValue({superStockistId:e.superStockistId}),this.terminalMasterForm.value.superStockistId=e.superStockistId}},{key:"createNewTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,pin:e.terminalMasterForm.value.pin,superStockistId:e.terminalMasterForm.value.superStockistId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,createdBy:e.user.userId,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var a="asc"===e.direction;switch(e.active){case"terminalName":return G(t.terminalName,i.terminalName,a);case"stockistName":return G(t.stockist.userName,i.stockist.userName,a);case"balance":return G(t.balance,i.balance,a);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;this.terminalLimitForm.value.amount>this.user.balance?u().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.highLightedRowIndex=a,e.terminalLimitForm.controls.amount.setValidators([m.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}}]),e}(),$.\u0275fac=function(e){return new(e||$)(d.Y36(f.S),d.Y36(p.E),d.Y36(Z.e),d.Y36(g.Q),d.Y36(h.v))},$.\u0275cmp=d.Xpm({type:$,selectors:[["app-master-terminal"]],decls:111,vars:17,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(d.TgZ(0,"mat-tab-group"),d.TgZ(1,"mat-tab",0),d.TgZ(2,"div",1),d.TgZ(3,"div",2),d.TgZ(4,"mat-card"),d.TgZ(5,"mat-card-header"),d._UZ(6,"div",3),d.TgZ(7,"mat-card-title"),d._uU(8,"New Terminal Form"),d.qZA(),d.qZA(),d.TgZ(9,"mat-card-content"),d.TgZ(10,"div",4),d.TgZ(11,"div",5),d.TgZ(12,"form",6),d.TgZ(13,"div",4),d.TgZ(14,"mat-form-field",5),d.TgZ(15,"mat-label"),d._uU(16,"Terminal Name"),d.qZA(),d.TgZ(17,"input",7),d.NdJ("change",function(){return t.checkPinValidation()}),d.qZA(),d.YNc(18,_,2,1,"div",8),d.qZA(),d.qZA(),d.TgZ(19,"div",4),d.TgZ(20,"mat-form-field",5),d.TgZ(21,"mat-label"),d._uU(22,"PIN"),d.qZA(),d._UZ(23,"input",9),d.qZA(),d.qZA(),d.TgZ(24,"div",4),d.TgZ(25,"mat-form-field",5),d.TgZ(26,"mat-label"),d._uU(27,"Stockist"),d.qZA(),d.TgZ(28,"mat-select",10),d.YNc(29,F,2,2,"mat-option",11),d.qZA(),d.qZA(),d.qZA(),d.TgZ(30,"div",4),d.TgZ(31,"mat-form-field",5),d.TgZ(32,"mat-label"),d._uU(33,"Payout Slab"),d.qZA(),d.TgZ(34,"mat-select",12),d.YNc(35,L,2,2,"mat-option",13),d.qZA(),d.qZA(),d.qZA(),d.TgZ(36,"div",4),d.TgZ(37,"mat-form-field",5),d.TgZ(38,"mat-label"),d._uU(39,"Super Stockist"),d.qZA(),d.TgZ(40,"mat-select",14),d.YNc(41,C,2,2,"mat-option",13),d.qZA(),d.qZA(),d.qZA(),d.TgZ(42,"div",4),d.TgZ(43,"div",15),d.TgZ(44,"mat-form-field",5),d.TgZ(45,"mat-label"),d._uU(46,"Commission"),d.qZA(),d._UZ(47,"input",16),d.qZA(),d.qZA(),d.TgZ(48,"label",17),d._uU(49,"(Max: 100)"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(50,"div",4),d.TgZ(51,"button",18),d.NdJ("click",function(){return t.createNewTerminal()}),d._uU(52,"Create"),d.qZA(),d.TgZ(53,"button",18),d.NdJ("click",function(){return t.updateTerminal()}),d._uU(54,"Update"),d.qZA(),d.TgZ(55,"button",19),d.NdJ("click",function(){return t.clearMasterTerminalForm()}),d._uU(56,"clear"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(57,"div",20),d.TgZ(58,"table",21),d.NdJ("matSortChange",function(e){return t.sortData(e)}),d.TgZ(59,"thead"),d.TgZ(60,"tr"),d.TgZ(61,"th",22),d._uU(62,"Terminal List"),d.qZA(),d.qZA(),d.TgZ(63,"tr"),d.TgZ(64,"th"),d._uU(65,"Id"),d.qZA(),d.TgZ(66,"th",23),d._uU(67,"Terminal name"),d.qZA(),d.TgZ(68,"th",24),d._uU(69,"Pin"),d.qZA(),d.TgZ(70,"th",25),d._uU(71,"Commission"),d.qZA(),d.TgZ(72,"th",25),d._uU(73,"Balance"),d.qZA(),d.TgZ(74,"th",26),d._uU(75,"Super Stockist"),d.qZA(),d.TgZ(76,"th",26),d._uU(77,"Stockist"),d.qZA(),d.TgZ(78,"th",27),d._uU(79,"Edit"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(80,"tbody"),d.YNc(81,J,17,8,"tr",28),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(82,"mat-tab",29),d.TgZ(83,"div",1),d._UZ(84,"div",30),d.TgZ(85,"div",31),d.TgZ(86,"mat-card"),d.TgZ(87,"mat-card-header"),d._UZ(88,"div",3),d.TgZ(89,"mat-card-title"),d._uU(90,"Recharge Terminal"),d.qZA(),d.qZA(),d.TgZ(91,"mat-card-content"),d.TgZ(92,"div",4),d.TgZ(93,"div",5),d.TgZ(94,"form",6),d.TgZ(95,"div",4),d.TgZ(96,"mat-form-field",32),d.TgZ(97,"mat-label"),d._uU(98,"Terminal"),d.qZA(),d.TgZ(99,"mat-select",33),d.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),d.YNc(100,M,2,2,"mat-option",13),d.qZA(),d.qZA(),d.YNc(101,B,6,1,"mat-form-field",34),d.YNc(102,Q,6,1,"mat-form-field",34),d.qZA(),d.YNc(103,j,3,2,"div",35),d.YNc(104,V,2,1,"div",35),d.TgZ(105,"div",4),d.TgZ(106,"button",36),d.NdJ("click",function(){return t.rechargeToTerminal()}),d._uU(107,"Save"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(108,"div",30),d.qZA(),d.qZA(),d.qZA(),d.YNc(109,R,4,1,"div",37),d.YNc(110,E,8,4,"div",37)),2&e&&(d.xp6(12),d.Q6J("formGroup",t.terminalMasterForm),d.xp6(6),d.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),d.xp6(11),d.Q6J("ngForOf",t.stockists),d.xp6(6),d.Q6J("ngForOf",t.payoutSlabs),d.xp6(6),d.Q6J("ngForOf",t.superStockists),d.xp6(10),d.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble||t.pinCheckValidator),d.xp6(2),d.Q6J("disabled",!t.isTerminalUpdatAble),d.xp6(28),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(13),d.Q6J("formGroup",t.terminalLimitForm),d.xp6(6),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(2),d.Q6J("disabled",!t.terminalLimitForm.valid),d.xp6(3),d.Q6J("ngIf",!t.isProduction),d.xp6(1),d.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[T.SP,T.uX,v.a8,v.dk,v.kc,v.n5,v.dn,x.xw,x.Wh,x.SQ,x.yH,m._Y,m.JL,m.sg,A.KE,A.hX,b.Nt,m.Fj,m.JJ,m.u,n.O5,q.gD,n.sg,k.lW,I.YE,I.nU,A.TO,S.ey,n.PC,y.Zl,N.Hw,A.R9,w.Rr],pipes:[n.Ts],styles:[""]}),$),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],X=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[o.Bz.forChild(H)],o.Bz]}),e}(),z=r(5480),W=r(5566),K=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[n.ez,X,T.Nh,z.q,W.o9,v.QW,m.u5,m.UX,w.rP,I.JX,q.LD,N.Ps]]}),e}()}}])}();