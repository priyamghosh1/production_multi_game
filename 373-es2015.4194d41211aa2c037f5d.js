"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[373],{5480:function(t,e,r){r.d(e,{q:function(){return s}});var i=r(1095),o=r(9983),a=r(7716);let s=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[i.ot,o.c]}),t})()},1373:function(t,e,r){r.r(e),r.d(e,{MasterSuperStockistModule:function(){return Y}});var i=r(8583),o=r(3423),a=r(1068),s=r(3679),n=r(8259),c=r.n(n),u=r(7716),l=r(3535),m=r(1599),d=r(5620),p=r(7431),Z=r(5939),g=r(3738),h=r(5618),f=r(8295),S=r(9983),q=r(1095),T=r(1494),A=r(7441),k=r(6627),x=r(6640),b=r(8030),v=r(2458);function U(t,e){1&t&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function _(t,e){if(1&t&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&t){const t=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",t.superStockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function y(t,e){if(1&t&&(u.TgZ(0,"div",47),u.YNc(1,U,2,0,"mat-error",48),u.YNc(2,_,2,1,"mat-error",48),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.superStockistMasterForm.get("userName").errors.required),u.xp6(1),u.Q6J("ngIf",t.superStockistMasterForm.get("userName").errors.minlength)}}function I(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"tr",49),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u.TgZ(12,"i",50),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().editStockist(e)}),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=e.$implicit,r=e.index,i=u.oxw();u.Q6J("ngStyle",i.getBackgroundColor(r)),u.xp6(2),u.Oqu(r+1),u.xp6(2),u.Oqu(t.userName),u.xp6(2),u.Oqu(t.password),u.xp6(2),u.Oqu(t.balance),u.xp6(2),u.Oqu(t.commission)}}function N(t,e){if(1&t&&(u.TgZ(0,"mat-option",51),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.Q6J("value",t.userId),u.xp6(1),u.hij(" ",t.pin," ")}}function w(t,e){if(1&t&&(u.TgZ(0,"mat-form-field",52),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",53),u.TgZ(4,"mat-icon",36),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&t){const t=u.oxw();u.xp6(3),u.Q6J("value",t.selectedSuperStockist.userName)}}function C(t,e){if(1&t&&(u.TgZ(0,"mat-form-field",52),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",54),u.TgZ(4,"mat-icon",36),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&t){const t=u.oxw();u.xp6(3),u.Q6J("value",t.selectedSuperStockist.balance)}}function F(t,e){if(1&t&&(u.TgZ(0,"mat-form-field",55),u.TgZ(1,"mat-label"),u._uU(2,"User balance"),u.qZA(),u._UZ(3,"input",54),u.TgZ(4,"mat-icon",36),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&t){const t=u.oxw();u.xp6(3),u.Q6J("value",t.user.balance)}}function L(t,e){if(1&t&&(u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u._uU(12),u.qZA(),u.TgZ(13,"td"),u._uU(14),u.qZA(),u.qZA()),2&t){const t=e.$implicit,r=e.index;u.xp6(2),u.Oqu(r+1),u.xp6(2),u.Oqu(t.rechargedTo.userName),u.xp6(2),u.Oqu(t.rechargedby.userName),u.xp6(2),u.Oqu(t.oldAmount),u.xp6(2),u.Oqu(t.rechargedAmount),u.xp6(2),u.Oqu(t.newAmount),u.xp6(2),u.Oqu(t.dateAndTime)}}const B=[{path:"",canActivate:[a.m],component:(()=>{class t{constructor(t,e,r,i){this.authService=t,this.masterSuperStockistService=e,this.commonService=r,this.transactionReportService=i,this.isSuperStockistUpdateAble=!1,this.superStockists=[],this.highLightedRowIndex=-1,this.selectedSuperStockist=null,this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(t=>{this.superStockists=t}),this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(t=>{this.user=t,console.log(this.user)})}ngOnInit(){this.superStockistMasterForm=new s.cw({id:new s.NI(null),userName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),pin:new s.NI(null,[s.kI.required]),commission:new s.NI(null,[s.kI.required])}),this.superStockistLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.minLength(2)])})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}onSuperStockistSelect(t){this.selectedSuperStockist=this.superStockists.find(e=>e.userId===t.value)}checkPinValidation(){this.commonService.checkPinValidation(this.superStockistMasterForm.value.pin).subscribe(t=>{0===t.success?(c().fire({position:"top-end",icon:"error",title:"Pin already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0):this.pinCheckValidator=!1})}createNewSuperStockist(){c().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterSuperStockistService.saveSuperStockist({userName:this.superStockistMasterForm.value.userName,pin:this.superStockistMasterForm.value.pin,createdBy:this.user.userId,commission:this.superStockistMasterForm.value.commission}).subscribe(t=>{1===t.success?(c().fire({position:"top-end",icon:"success",title:"Super Stockist created",timer:1e3}),this.superStockistMasterForm.reset()):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})})})}getTransaction(){this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(t=>{this.transactionData=t.data})}rechargeToSuperStockist(){parseInt(this.superStockistLimitForm.value.amount)>parseInt(String(this.user.balance))?c().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterSuperStockistService.saveSuperStockistBalance({beneficiaryUid:this.superStockistLimitForm.value.beneficiaryUid,amount:this.superStockistLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3});const e=t.data,r=this.superStockists.findIndex(t=>t.userId===e.userId);this.superStockists[r].balance=e.balance,this.authService.setUserBalanceBy(this.user.balance-this.superStockistLimitForm.value.amount),this.selectedSuperStockist.balance=e.balance,this.superStockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4)}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}clearMasterSuperStockistForm(){this.superStockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isSuperStockistUpdateAble=!1}editStockist(t){this.superStockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin,commission:t.commission}),this.isSuperStockistUpdateAble=!0}updateSuperStockist(){c().fire({title:"Confirmation",text:"Do you want update super stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterSuperStockistService.updateSuperStockist(this.superStockistMasterForm.value).subscribe(t=>{1===t.success?(c().fire({position:"top-end",icon:"success",title:"Super Stockist created",timer:1e3}),this.superStockistMasterForm.reset()):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})})})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(l.e),u.Y36(m.Q),u.Y36(d.v),u.Y36(p.z))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-master-super-stockist"]],decls:132,vars:14,consts:[["label","Create super stockist"],[1,"flex-row"],[1,""],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,""],["fxFlex","100"],[3,"formGroup"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["fxFlex","50"],["type","text","matInput","","formControlName","pin","placeholder","Enter name",3,"change"],[1,"col-10","m-0","p-0"],["fxFlex","col 100"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Super Stockist limit"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["appearance","legacy","class","ml-5",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Super Stockist Transaction Report"],["fxFlex","60"],["bindLabel","pin","bindValue","userId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],["scope","colgroup","colspan","7",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","stockistName"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["appearance","legacy",1,"ml-5"]],template:function(t,e){1&t&&(u.TgZ(0,"mat-tab-group"),u.TgZ(1,"mat-tab",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"mat-card"),u.TgZ(5,"mat-card-header"),u._UZ(6,"div",3),u.TgZ(7,"mat-card-title"),u._uU(8,"New Super Stockist Form"),u.qZA(),u.qZA(),u.TgZ(9,"mat-card-content"),u.TgZ(10,"div",4),u.TgZ(11,"div",5),u.TgZ(12,"form",6),u.TgZ(13,"div",7),u.TgZ(14,"mat-form-field",5),u.TgZ(15,"mat-label"),u._uU(16,"Super Stockist Name"),u.qZA(),u._UZ(17,"input",8),u.YNc(18,y,3,2,"div",9),u.qZA(),u.TgZ(19,"mat-form-field",10),u.TgZ(20,"mat-label"),u._uU(21,"PIN"),u.qZA(),u.TgZ(22,"input",11),u.NdJ("change",function(){return e.checkPinValidation()}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"div",7),u.TgZ(24,"div",12),u.TgZ(25,"mat-form-field",13),u.TgZ(26,"mat-label"),u._uU(27,"Commission"),u.qZA(),u._UZ(28,"input",14),u.qZA(),u.qZA(),u.TgZ(29,"label",15),u._uU(30,"(Max: 100)"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(31,"div",7),u.TgZ(32,"button",16),u.NdJ("click",function(){return e.createNewSuperStockist()}),u._uU(33,"Create"),u.qZA(),u.TgZ(34,"button",16),u.NdJ("click",function(){return e.updateSuperStockist()}),u._uU(35,"Update"),u.qZA(),u.TgZ(36,"button",17),u.NdJ("click",function(){return e.clearMasterSuperStockistForm()}),u._uU(37,"clear"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(38,"div",18),u.TgZ(39,"table",19),u.TgZ(40,"thead"),u.TgZ(41,"tr"),u.TgZ(42,"th",20),u._uU(43,"Stockist List"),u.qZA(),u.qZA(),u.TgZ(44,"tr"),u.TgZ(45,"th"),u._uU(46,"Id"),u.qZA(),u.TgZ(47,"th",21),u._uU(48,"Stockist name"),u.qZA(),u.TgZ(49,"th",22),u._uU(50,"Pin"),u.qZA(),u.TgZ(51,"th",23),u._uU(52,"Balance"),u.qZA(),u.TgZ(53,"th",23),u._uU(54,"Commission"),u.qZA(),u.TgZ(55,"th",24),u._uU(56,"Edit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(57,"tbody"),u.YNc(58,I,13,6,"tr",25),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(59,"mat-tab",26),u.TgZ(60,"div",27),u._UZ(61,"div",28),u.TgZ(62,"div",29),u.TgZ(63,"mat-card"),u.TgZ(64,"mat-card-header"),u._UZ(65,"div",3),u.TgZ(66,"mat-card-title"),u._uU(67,"Recharge Super Stockist"),u.qZA(),u.qZA(),u.TgZ(68,"mat-card-content"),u.TgZ(69,"div",7),u.TgZ(70,"div",30),u.TgZ(71,"form",6),u.TgZ(72,"div",7),u.TgZ(73,"mat-form-field",5),u.TgZ(74,"mat-label"),u._uU(75,"Super Stockist"),u.qZA(),u.TgZ(76,"mat-select",31),u.NdJ("selectionChange",function(t){return e.onSuperStockistSelect(t)}),u.YNc(77,N,2,2,"mat-option",32),u.qZA(),u.qZA(),u.YNc(78,w,6,1,"mat-form-field",33),u.YNc(79,C,6,1,"mat-form-field",33),u.qZA(),u.TgZ(80,"div",7),u.TgZ(81,"mat-form-field",34),u.TgZ(82,"mat-label"),u._uU(83,"Recharge amount"),u.qZA(),u._UZ(84,"input",35),u.TgZ(85,"mat-icon",36),u._uU(86," money"),u.qZA(),u.qZA(),u.YNc(87,F,6,1,"mat-form-field",37),u.qZA(),u.TgZ(88,"div",7),u.TgZ(89,"button",38),u.NdJ("click",function(){return e.rechargeToSuperStockist()}),u._uU(90,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(91,"div",28),u.qZA(),u.qZA(),u.TgZ(92,"mat-tab",39),u.TgZ(93,"div",27),u._UZ(94,"div",28),u.TgZ(95,"div",29),u.TgZ(96,"mat-card"),u.TgZ(97,"mat-card-header"),u._UZ(98,"div",3),u.TgZ(99,"mat-card-title"),u._uU(100,"Super Stockist Transaction Report"),u.qZA(),u.qZA(),u.TgZ(101,"mat-card-content"),u.TgZ(102,"div",7),u.TgZ(103,"div",40),u.TgZ(104,"div",5),u.TgZ(105,"ng-select",41),u.NdJ("ngModelChange",function(t){return e.rechargedToID=t}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(106,"button",42),u.NdJ("click",function(){return e.getTransaction()}),u._uU(107,"Search"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(108,"div",28),u.qZA(),u.TgZ(109,"div",18),u.TgZ(110,"table",19),u.TgZ(111,"thead"),u.TgZ(112,"tr"),u.TgZ(113,"th",43),u._uU(114,"Transaction List"),u.qZA(),u.qZA(),u.TgZ(115,"tr"),u.TgZ(116,"th"),u._uU(117,"Sl No."),u.qZA(),u.TgZ(118,"th",44),u._uU(119,"Recharge To"),u.qZA(),u.TgZ(120,"th",22),u._uU(121,"Recharge By"),u.qZA(),u.TgZ(122,"th",23),u._uU(123,"Old Amount"),u.qZA(),u.TgZ(124,"th",23),u._uU(125,"Recharged Amount"),u.qZA(),u.TgZ(126,"th",45),u._uU(127,"New Amount"),u.qZA(),u.TgZ(128,"th",45),u._uU(129,"Date and Time"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(130,"tbody"),u.YNc(131,L,15,7,"tr",46),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(12),u.Q6J("formGroup",e.superStockistMasterForm),u.xp6(6),u.Q6J("ngIf",!e.superStockistMasterForm.get("userName").valid&&e.superStockistMasterForm.get("userName").touched),u.xp6(14),u.Q6J("disabled",!e.superStockistMasterForm.valid||e.isSuperStockistUpdateAble||e.pinCheckValidator),u.xp6(2),u.Q6J("disabled",!e.isSuperStockistUpdateAble),u.xp6(24),u.Q6J("ngForOf",e.superStockists),u.xp6(13),u.Q6J("formGroup",e.superStockistLimitForm),u.xp6(6),u.Q6J("ngForOf",e.superStockists),u.xp6(1),u.Q6J("ngIf",e.selectedSuperStockist),u.xp6(1),u.Q6J("ngIf",e.selectedSuperStockist),u.xp6(8),u.Q6J("ngIf",e.selectedSuperStockist),u.xp6(2),u.Q6J("disabled",!e.superStockistLimitForm.valid),u.xp6(16),u.Q6J("items",e.superStockists)("ngModel",e.rechargedToID),u.xp6(26),u.Q6J("ngForOf",e.transactionData))},directives:[Z.SP,Z.uX,g.a8,g.dk,g.kc,g.n5,g.dn,h.xw,h.Wh,h.SQ,h.yH,s._Y,s.JL,s.sg,f.KE,f.hX,S.Nt,s.Fj,s.JJ,s.u,i.O5,q.lW,T.YE,T.nU,i.sg,A.gD,k.Hw,f.R9,x.w9,s.On,f.TO,i.PC,b.Zl,v.ey],styles:[""]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.Bz.forChild(B)],o.Bz]}),t})();var M=r(5480),O=r(5566),Q=r(5396);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[i.ez,J,Z.Nh,M.q,O.o9,g.QW,s.u5,s.UX,Q.rP,T.JX,A.LD,k.Ps,x.A0]]}),t})()}}]);