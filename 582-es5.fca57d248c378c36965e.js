!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(e,r,n){n.d(r,{q:function(){return c}});var a,o=n(1095),l=n(9983),s=n(7716),c=((a=t(function e(){i(this,e)})).\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[o.ot,l.c]}),a)},4582:function(e,r,n){n.r(r),n.d(r,{MasterTerminalModule:function(){return W}});var a=n(8583),o=n(3423),l=n(1068),s=n(2340),c=n(3679),m=n(8259),u=n.n(m),d=n(7716),f=n(2088),g=n(2173),p=n(3535),Z=n(1599),T=n(5939),h=n(3738),v=n(5618),x=n(8295),A=n(9983),q=n(7441),k=n(1095),b=n(1494),I=n(2458),w=n(8030),S=n(6627),N=n(5396);function y(e,t){1&e&&(d.TgZ(0,"mat-error"),d._uU(1,"This field is Required"),d.qZA())}function U(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(2);d.xp6(1),d.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function _(e,t){if(1&e&&(d.TgZ(0,"div",34),d.YNc(1,y,2,0,"mat-error",35),d.YNc(2,U,2,1,"mat-error",35),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),d.xp6(1),d.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function L(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"mat-option",36),d.NdJ("blur",function(){var e=d.CHM(i).$implicit;return d.oxw().selectSuperStockist(e)}),d._uU(1),d.qZA()}if(2&e){var r=t.$implicit;d.Q6J("value",r.userId),d.xp6(1),d.hij(" ",r.userName," ")}}function F(e,t){if(1&e&&(d.TgZ(0,"mat-option",37),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.id),d.xp6(1),d.hij(" ",i.user_name," ")}}function C(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"tr",38),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d.TgZ(12,"i",39),d.NdJ("click",function(){var e=d.CHM(i).$implicit;return d.oxw().editTerminal(e)}),d.qZA(),d.qZA(),d.qZA()}if(2&e){var r=t.$implicit,n=t.index,a=d.oxw();d.Q6J("ngStyle",a.getBackgroundColor(n)),d.xp6(2),d.Oqu(n+1),d.xp6(2),d.Oqu(r.terminalName),d.xp6(2),d.Oqu(r.pin),d.xp6(2),d.Oqu(r.balance),d.xp6(2),d.Oqu(r.stockist.userName)}}function J(e,t){if(1&e&&(d.TgZ(0,"mat-option",37),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.terminalId),d.xp6(1),d.hij(" ",i.pin," ")}}function M(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",40),d.TgZ(1,"mat-label"),d._uU(2,"Name"),d.qZA(),d._UZ(3,"input",41),d.TgZ(4,"mat-icon",42),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.terminalName)}}function Q(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",40),d.TgZ(1,"mat-label"),d._uU(2,"Current balance"),d.qZA(),d._UZ(3,"input",43),d.TgZ(4,"mat-icon",42),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.balance)}}function B(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",40),d.TgZ(1,"mat-label"),d._uU(2,"Stockist owner"),d.qZA(),d._UZ(3,"input",41),d.TgZ(4,"mat-icon",42),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.userName)}}function Y(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",40),d.TgZ(1,"mat-label"),d._uU(2,"Stockist balance"),d.qZA(),d._UZ(3,"input",43),d.TgZ(4,"mat-icon",42),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.balance)}}function O(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,B,6,1,"mat-form-field",30),d.YNc(2,Y,6,1,"mat-form-field",30),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal),d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function D(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(3);d.xp6(1),d.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function j(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",45),d.TgZ(1,"mat-label"),d._uU(2,"Recharge amount"),d.qZA(),d._UZ(3,"input",46),d.TgZ(4,"mat-icon",42),d._uU(5," money"),d.qZA(),d.YNc(6,D,2,1,"mat-error",35),d.qZA()),2&e){var i=d.oxw(2);d.xp6(6),d.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function R(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,j,7,1,"mat-form-field",44),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function E(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",47),d.TgZ(1,"div",48),d.TgZ(2,"mat-slide-toggle",49),d.NdJ("change",function(){d.CHM(i);var e=d.oxw();return e.showDevArea=!e.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&e){var r=d.oxw();d.xp6(3),d.Oqu(r.showDevArea?"Hide Developer Area":"Show Developer Area")}}function G(e,t){if(1&e&&(d.TgZ(0,"div",47),d.TgZ(1,"div",50),d.TgZ(2,"pre"),d._uU(3),d._uU(4),d.ALo(5,"json"),d._uU(6,"\n      "),d.qZA(),d.qZA(),d._UZ(7,"div",48),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.hij("        ",i.terminalLimitForm.valid,"\n        "),d.xp6(1),d.hij("\n        terminalForm = ",d.lcZ(5,2,i.terminalMasterForm.value),"\n")}}function P(e,t,i){return(e<t?-1:1)*(i?1:-1)}var V,H=[{path:"",canActivate:[l.m],component:(V=function(){function e(t,r,n,a){i(this,e),this.masterTerminalService=t,this.masterStockistService=r,this.authService=n,this.masterSuperStockistService=a,this.isProduction=s.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.superStockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new c.cw({id:new c.NI(null),terminalName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),stockistId:new c.NI(null,[c.kI.required]),superStockistId:new c.NI(null,[c.kI.required]),pin:new c.NI(null,[c.kI.required])}),this.terminalLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.max(0)])})}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([c.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){console.log(e),this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockistId,superStockistId:e.superStockistId,pin:e.pin}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.terminalMasterForm.value.superStockistId,pin:e.terminalMasterForm.value.pin,userId:e.user.userId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"selectSuperStockist",value:function(e){this.terminalMasterForm.patchValue({superStockistId:e.superStockistId}),this.terminalMasterForm.value.superStockistId=e.superStockistId}},{key:"createNewTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,pin:e.terminalMasterForm.value.pin,superStockistId:e.terminalMasterForm.value.superStockistId,createdBy:e.user.userId}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var r="asc"===e.direction;switch(e.active){case"terminalName":return P(t.terminalName,i.terminalName,r);case"stockistName":return P(t.stockist.userName,i.stockist.userName,r);case"balance":return P(t.balance,i.balance,r);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,r=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[r].balance=i.balance,e.terminals[r].stockist.balance=i.stockist.balance,e.sortedTerminalList[r].balance=i.balance,e.sortedTerminalList[r].stockist.balance=i.stockist.balance,e.highLightedRowIndex=r,e.terminalLimitForm.controls.amount.setValidators([c.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}}]),e}(),V.\u0275fac=function(e){return new(e||V)(d.Y36(f.S),d.Y36(g.E),d.Y36(p.e),d.Y36(Z.Q))},V.\u0275cmp=d.Xpm({type:V,selectors:[["app-master-terminal"]],decls:92,vars:16,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(d.TgZ(0,"mat-tab-group"),d.TgZ(1,"mat-tab",0),d.TgZ(2,"div",1),d.TgZ(3,"div",2),d.TgZ(4,"mat-card"),d.TgZ(5,"mat-card-header"),d._UZ(6,"div",3),d.TgZ(7,"mat-card-title"),d._uU(8,"New Terminal Form"),d.qZA(),d.qZA(),d.TgZ(9,"mat-card-content"),d.TgZ(10,"div",4),d.TgZ(11,"div",5),d.TgZ(12,"form",6),d.TgZ(13,"div",4),d.TgZ(14,"mat-form-field",5),d.TgZ(15,"mat-label"),d._uU(16,"Terminal Name"),d.qZA(),d._UZ(17,"input",7),d.YNc(18,_,3,2,"div",8),d.qZA(),d.TgZ(19,"mat-form-field",5),d.TgZ(20,"mat-label"),d._uU(21,"PIN"),d.qZA(),d._UZ(22,"input",9),d.qZA(),d.qZA(),d.TgZ(23,"div",4),d.TgZ(24,"mat-form-field",5),d.TgZ(25,"mat-label"),d._uU(26,"Stockist"),d.qZA(),d.TgZ(27,"mat-select",10),d.YNc(28,L,2,2,"mat-option",11),d.qZA(),d.qZA(),d.qZA(),d.TgZ(29,"div",4),d.TgZ(30,"mat-form-field",5),d.TgZ(31,"mat-label"),d._uU(32,"Super Stockist"),d.qZA(),d.TgZ(33,"mat-select",12),d.YNc(34,F,2,2,"mat-option",13),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(35,"div",4),d.TgZ(36,"button",14),d.NdJ("click",function(){return t.createNewTerminal()}),d._uU(37,"Create"),d.qZA(),d.TgZ(38,"button",14),d.NdJ("click",function(){return t.updateTerminal()}),d._uU(39,"Update"),d.qZA(),d.TgZ(40,"button",15),d.NdJ("click",function(){return t.clearMasterTerminalForm()}),d._uU(41,"clear"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(42,"div",16),d.TgZ(43,"table",17),d.NdJ("matSortChange",function(e){return t.sortData(e)}),d.TgZ(44,"thead"),d.TgZ(45,"tr"),d.TgZ(46,"th",18),d._uU(47,"Terminal List"),d.qZA(),d.qZA(),d.TgZ(48,"tr"),d.TgZ(49,"th"),d._uU(50,"Id"),d.qZA(),d.TgZ(51,"th",19),d._uU(52,"Terminal name"),d.qZA(),d.TgZ(53,"th",20),d._uU(54,"Pin"),d.qZA(),d.TgZ(55,"th",21),d._uU(56,"Balance"),d.qZA(),d.TgZ(57,"th",22),d._uU(58,"Stockist"),d.qZA(),d.TgZ(59,"th",23),d._uU(60,"Edit"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(61,"tbody"),d.YNc(62,C,13,6,"tr",24),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(63,"mat-tab",25),d.TgZ(64,"div",1),d._UZ(65,"div",26),d.TgZ(66,"div",27),d.TgZ(67,"mat-card"),d.TgZ(68,"mat-card-header"),d._UZ(69,"div",3),d.TgZ(70,"mat-card-title"),d._uU(71,"Recharge Terminal"),d.qZA(),d.qZA(),d.TgZ(72,"mat-card-content"),d.TgZ(73,"div",4),d.TgZ(74,"div",5),d.TgZ(75,"form",6),d.TgZ(76,"div",4),d.TgZ(77,"mat-form-field",28),d.TgZ(78,"mat-label"),d._uU(79,"Terminal"),d.qZA(),d.TgZ(80,"mat-select",29),d.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),d.YNc(81,J,2,2,"mat-option",13),d.qZA(),d.qZA(),d.YNc(82,M,6,1,"mat-form-field",30),d.YNc(83,Q,6,1,"mat-form-field",30),d.qZA(),d.YNc(84,O,3,2,"div",31),d.YNc(85,R,2,1,"div",31),d.TgZ(86,"div",4),d.TgZ(87,"button",32),d.NdJ("click",function(){return t.rechargeToTerminal()}),d._uU(88,"Save"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(89,"div",26),d.qZA(),d.qZA(),d.qZA(),d.YNc(90,E,4,1,"div",33),d.YNc(91,G,8,4,"div",33)),2&e&&(d.xp6(12),d.Q6J("formGroup",t.terminalMasterForm),d.xp6(6),d.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),d.xp6(10),d.Q6J("ngForOf",t.stockists),d.xp6(6),d.Q6J("ngForOf",t.superStockists),d.xp6(2),d.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),d.xp6(2),d.Q6J("disabled",!t.isTerminalUpdatAble),d.xp6(24),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(13),d.Q6J("formGroup",t.terminalLimitForm),d.xp6(6),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(2),d.Q6J("disabled",!t.terminalLimitForm.valid),d.xp6(3),d.Q6J("ngIf",!t.isProduction),d.xp6(1),d.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[T.SP,T.uX,h.a8,h.dk,h.kc,h.n5,h.dn,v.xw,v.Wh,v.SQ,v.yH,c._Y,c.JL,c.sg,x.KE,x.hX,A.Nt,c.Fj,c.JJ,c.u,a.O5,q.gD,a.sg,k.lW,b.YE,b.nU,x.TO,I.ey,a.PC,w.Zl,S.Hw,x.R9,N.Rr],pipes:[a.Ts],styles:[""]}),V),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],$=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[o.Bz.forChild(H)],o.Bz]}),e}(),X=n(5480),z=n(5566),W=function(){var e=t(function e(){i(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[a.ez,$,T.Nh,X.q,z.o9,h.QW,c.u5,c.UX,N.rP,b.JX,q.LD,S.Ps]]}),e}()},1068:function(e,r,n){n.d(r,{m:function(){return s}});var a,o=n(7716),l=n(3535),s=((a=function(){function e(t){i(this,e),this.authService=t}return t(e,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),e}()).\u0275fac=function(e){return new(e||a)(o.LFG(l.e))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)}}])}();