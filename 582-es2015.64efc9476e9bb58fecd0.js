"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(t,e,i){i.d(e,{q:function(){return o}});var r=i(1095),a=i(9983),n=i(7716);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ot,a.c]}),t})()},4582:function(t,e,i){i.r(e),i.d(e,{MasterTerminalModule:function(){return X}});var r=i(8583),a=i(3423),n=i(1068),o=i(2340),s=i(3679),l=i(8259),m=i.n(l),c=i(7716),u=i(2088),d=i(2173),Z=i(3535),g=i(1599),p=i(5939),f=i(3738),h=i(5618),T=i(8295),x=i(9983),A=i(7441),q=i(1095),v=i(1494),b=i(2458),I=i(8030),k=i(6627),S=i(5396);function N(t,e){1&t&&(c.TgZ(0,"mat-error"),c._uU(1,"This field is Required"),c.qZA())}function U(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(2);c.xp6(1),c.hij("Minimum length of name is ",t.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function w(t,e){if(1&t&&(c.TgZ(0,"div",38),c.YNc(1,N,2,0,"mat-error",39),c.YNc(2,U,2,1,"mat-error",39),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.required),c.xp6(1),c.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.minlength)}}function _(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"mat-option",40),c.NdJ("blur",function(){const e=c.CHM(t).$implicit;return c.oxw().selectSuperStockist(e)}),c._uU(1),c.qZA()}if(2&t){const t=e.$implicit;c.Q6J("value",t.userId),c.xp6(1),c.hij(" ",t.userName," ")}}function y(t,e){if(1&t&&(c.TgZ(0,"mat-option",41),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.id),c.xp6(1),c.hij(" ",t.slab_status," ")}}function F(t,e){if(1&t&&(c.TgZ(0,"mat-option",41),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.userId),c.xp6(1),c.hij(" ",t.userName," ")}}function L(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr",42),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.TgZ(13,"td"),c._uU(14),c.qZA(),c.TgZ(15,"td"),c.TgZ(16,"i",43),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().editTerminal(e)}),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,i=e.index,r=c.oxw();c.Q6J("ngStyle",r.getBackgroundColor(i)),c.xp6(2),c.Oqu(i+1),c.xp6(2),c.Oqu(t.terminalName),c.xp6(2),c.Oqu(t.pin),c.xp6(2),c.Oqu(t.commission),c.xp6(2),c.Oqu(t.balance),c.xp6(2),c.Oqu(t.superStockist.userName),c.xp6(2),c.Oqu(t.stockist.userName)}}function C(t,e){if(1&t&&(c.TgZ(0,"mat-option",41),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.terminalId),c.xp6(1),c.hij(" ",t.pin," ")}}function J(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",44),c.TgZ(1,"mat-label"),c._uU(2,"Name"),c.qZA(),c._UZ(3,"input",45),c.TgZ(4,"mat-icon",46),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.terminalName)}}function M(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",44),c.TgZ(1,"mat-label"),c._uU(2,"Current balance"),c.qZA(),c._UZ(3,"input",47),c.TgZ(4,"mat-icon",46),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.balance)}}function Q(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",44),c.TgZ(1,"mat-label"),c._uU(2,"Stockist owner"),c.qZA(),c._UZ(3,"input",45),c.TgZ(4,"mat-icon",46),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.userName)}}function B(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",44),c.TgZ(1,"mat-label"),c._uU(2,"Stockist balance"),c.qZA(),c._UZ(3,"input",47),c.TgZ(4,"mat-icon",46),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.balance)}}function Y(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,Q,6,1,"mat-form-field",34),c.YNc(2,B,6,1,"mat-form-field",34),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal),c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function O(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(3);c.xp6(1),c.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function D(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",49),c.TgZ(1,"mat-label"),c._uU(2,"Recharge amount"),c.qZA(),c._UZ(3,"input",50),c.TgZ(4,"mat-icon",46),c._uU(5," money"),c.qZA(),c.YNc(6,O,2,1,"mat-error",39),c.qZA()),2&t){const t=c.oxw(2);c.xp6(6),c.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function R(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,D,7,1,"mat-form-field",48),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function j(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",51),c.TgZ(1,"div",52),c.TgZ(2,"mat-slide-toggle",53),c.NdJ("change",function(){c.CHM(t);const e=c.oxw();return e.showDevArea=!e.showDevArea}),c._uU(3),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(3),c.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function G(t,e){if(1&t&&(c.TgZ(0,"div",51),c.TgZ(1,"div",54),c.TgZ(2,"pre"),c._uU(3),c._uU(4),c.ALo(5,"json"),c._uU(6,"\n      "),c.qZA(),c.qZA(),c._UZ(7,"div",52),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.hij("        ",t.terminalLimitForm.valid,"\n        "),c.xp6(1),c.hij("\n        terminalForm = ",c.lcZ(5,2,t.terminalMasterForm.value),"\n")}}function P(t,e,i){return(t<e?-1:1)*(i?1:-1)}const E=[{path:"",canActivate:[n.m],component:(()=>{class t{constructor(t,e,i,r){this.masterTerminalService=t,this.masterStockistService=e,this.authService=i,this.masterSuperStockistService=r,this.isProduction=o.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.payoutSlabs=[],this.superStockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required]),payoutSlabId:new s.NI(null,[s.kI.required]),superStockistId:new s.NI(null,[s.kI.required]),pin:new s.NI(null,[s.kI.required]),commission:new s.NI(null,[s.kI.required,s.kI.max(100)])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(t=>{this.terminals=t,this.sortedTerminalList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(t=>{this.superStockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(t=>{this.payoutSlabs=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t})}onTerminalSelect(t){this.selectedTerminal=this.terminals.find(e=>e.terminalId===t.value),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}editTerminal(t){this.terminalMasterForm.patchValue({id:t.terminalId,terminalName:t.terminalName,stockistId:t.stockistId,superStockistId:t.superStockistId,payoutSlabId:t.payoutSlabId,pin:t.pin}),this.isTerminalUpdatAble=!0}updateTerminal(){m().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.updateTerminal({terminalId:this.terminalMasterForm.value.id,terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,pin:this.terminalMasterForm.value.pin,userId:this.user.userId}).subscribe(t=>{1===t.success?(this.sortedTerminalList[this.highLightedRowIndex]=t.data,this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}selectSuperStockist(t){this.terminalMasterForm.patchValue({superStockistId:t.superStockistId}),this.terminalMasterForm.value.superStockistId=t.superStockistId}createNewTerminal(){m().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveNewTerminal({terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,pin:this.terminalMasterForm.value.pin,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,createdBy:this.user.userId,commission:this.terminalMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.highLightedRowIndex=0,this.terminalMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterTerminalForm(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}sortData(t){const e=this.terminals.slice();this.sortedTerminalList=t.active&&""!==t.direction?e.sort((e,i)=>{const r="asc"===t.direction;switch(t.active){case"terminalName":return P(e.terminalName,i.terminalName,r);case"stockistName":return P(e.stockist.userName,i.stockist.userName,r);case"balance":return P(e.balance,i.balance,r);default:return 0}}):e}rechargeToTerminal(){m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.S),c.Y36(d.E),c.Y36(Z.e),c.Y36(g.Q))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-master-terminal"]],decls:110,vars:17,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(c.TgZ(0,"mat-tab-group"),c.TgZ(1,"mat-tab",0),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c.TgZ(4,"mat-card"),c.TgZ(5,"mat-card-header"),c._UZ(6,"div",3),c.TgZ(7,"mat-card-title"),c._uU(8,"New Terminal Form"),c.qZA(),c.qZA(),c.TgZ(9,"mat-card-content"),c.TgZ(10,"div",4),c.TgZ(11,"div",5),c.TgZ(12,"form",6),c.TgZ(13,"div",4),c.TgZ(14,"mat-form-field",5),c.TgZ(15,"mat-label"),c._uU(16,"Terminal Name"),c.qZA(),c._UZ(17,"input",7),c.YNc(18,w,3,2,"div",8),c.qZA(),c.TgZ(19,"mat-form-field",5),c.TgZ(20,"mat-label"),c._uU(21,"PIN"),c.qZA(),c._UZ(22,"input",9),c.qZA(),c.qZA(),c.TgZ(23,"div",4),c.TgZ(24,"mat-form-field",5),c.TgZ(25,"mat-label"),c._uU(26,"Stockist"),c.qZA(),c.TgZ(27,"mat-select",10),c.YNc(28,_,2,2,"mat-option",11),c.qZA(),c.qZA(),c.qZA(),c.TgZ(29,"div",4),c.TgZ(30,"mat-form-field",5),c.TgZ(31,"mat-label"),c._uU(32,"Payout Slab"),c.qZA(),c.TgZ(33,"mat-select",12),c.YNc(34,y,2,2,"mat-option",13),c.qZA(),c.qZA(),c.qZA(),c.TgZ(35,"div",4),c.TgZ(36,"mat-form-field",5),c.TgZ(37,"mat-label"),c._uU(38,"Super Stockist"),c.qZA(),c.TgZ(39,"mat-select",14),c.YNc(40,F,2,2,"mat-option",13),c.qZA(),c.qZA(),c.qZA(),c.TgZ(41,"div",4),c.TgZ(42,"div",15),c.TgZ(43,"mat-form-field",5),c.TgZ(44,"mat-label"),c._uU(45,"Commission"),c.qZA(),c._UZ(46,"input",16),c.qZA(),c.qZA(),c.TgZ(47,"label",17),c._uU(48,"(Max: 100)"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(49,"div",4),c.TgZ(50,"button",18),c.NdJ("click",function(){return e.createNewTerminal()}),c._uU(51,"Create"),c.qZA(),c.TgZ(52,"button",18),c.NdJ("click",function(){return e.updateTerminal()}),c._uU(53,"Update"),c.qZA(),c.TgZ(54,"button",19),c.NdJ("click",function(){return e.clearMasterTerminalForm()}),c._uU(55,"clear"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(56,"div",20),c.TgZ(57,"table",21),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(58,"thead"),c.TgZ(59,"tr"),c.TgZ(60,"th",22),c._uU(61,"Terminal List"),c.qZA(),c.qZA(),c.TgZ(62,"tr"),c.TgZ(63,"th"),c._uU(64,"Id"),c.qZA(),c.TgZ(65,"th",23),c._uU(66,"Terminal name"),c.qZA(),c.TgZ(67,"th",24),c._uU(68,"Pin"),c.qZA(),c.TgZ(69,"th",25),c._uU(70,"Commission"),c.qZA(),c.TgZ(71,"th",25),c._uU(72,"Balance"),c.qZA(),c.TgZ(73,"th",26),c._uU(74,"Super Stockist"),c.qZA(),c.TgZ(75,"th",26),c._uU(76,"Stockist"),c.qZA(),c.TgZ(77,"th",27),c._uU(78,"Edit"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(79,"tbody"),c.YNc(80,L,17,8,"tr",28),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(81,"mat-tab",29),c.TgZ(82,"div",1),c._UZ(83,"div",30),c.TgZ(84,"div",31),c.TgZ(85,"mat-card"),c.TgZ(86,"mat-card-header"),c._UZ(87,"div",3),c.TgZ(88,"mat-card-title"),c._uU(89,"Recharge Terminal"),c.qZA(),c.qZA(),c.TgZ(90,"mat-card-content"),c.TgZ(91,"div",4),c.TgZ(92,"div",5),c.TgZ(93,"form",6),c.TgZ(94,"div",4),c.TgZ(95,"mat-form-field",32),c.TgZ(96,"mat-label"),c._uU(97,"Terminal"),c.qZA(),c.TgZ(98,"mat-select",33),c.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),c.YNc(99,C,2,2,"mat-option",13),c.qZA(),c.qZA(),c.YNc(100,J,6,1,"mat-form-field",34),c.YNc(101,M,6,1,"mat-form-field",34),c.qZA(),c.YNc(102,Y,3,2,"div",35),c.YNc(103,R,2,1,"div",35),c.TgZ(104,"div",4),c.TgZ(105,"button",36),c.NdJ("click",function(){return e.rechargeToTerminal()}),c._uU(106,"Save"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(107,"div",30),c.qZA(),c.qZA(),c.qZA(),c.YNc(108,j,4,1,"div",37),c.YNc(109,G,8,4,"div",37)),2&t&&(c.xp6(12),c.Q6J("formGroup",e.terminalMasterForm),c.xp6(6),c.Q6J("ngIf",!e.terminalMasterForm.get("terminalName").valid&&e.terminalMasterForm.get("terminalName").touched),c.xp6(10),c.Q6J("ngForOf",e.stockists),c.xp6(6),c.Q6J("ngForOf",e.payoutSlabs),c.xp6(6),c.Q6J("ngForOf",e.superStockists),c.xp6(10),c.Q6J("disabled",!e.terminalMasterForm.valid||e.isTerminalUpdatAble),c.xp6(2),c.Q6J("disabled",!e.isTerminalUpdatAble),c.xp6(28),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(13),c.Q6J("formGroup",e.terminalLimitForm),c.xp6(6),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(2),c.Q6J("disabled",!e.terminalLimitForm.valid),c.xp6(3),c.Q6J("ngIf",!e.isProduction),c.xp6(1),c.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[p.SP,p.uX,f.a8,f.dk,f.kc,f.n5,f.dn,h.xw,h.Wh,h.SQ,h.yH,s._Y,s.JL,s.sg,T.KE,T.hX,x.Nt,s.Fj,s.JJ,s.u,r.O5,A.gD,r.sg,q.lW,v.YE,v.nU,T.TO,b.ey,r.PC,I.Zl,k.Hw,T.R9,S.Rr],pipes:[r.Ts],styles:[""]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(E)],a.Bz]}),t})();var $=i(5480),H=i(5566);let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.ez,V,p.Nh,$.q,H.o9,f.QW,s.u5,s.UX,S.rP,v.JX,A.LD,k.Ps]]}),t})()},1068:function(t,e,i){i.d(e,{m:function(){return n}});var r=i(7716),a=i(3535);let n=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.e))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);