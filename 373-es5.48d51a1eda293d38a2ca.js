!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[373],{1373:function(e,i,o){o.r(i),o.d(i,{MasterSuperStockistModule:function(){return V}});var n=o(8583),a=o(3423),u=o(1068),c=o(3679),s=o(8259),l=o.n(s),m=o(7716),d=o(3535),p=o(1599),Z=o(5620),g=o(7431),f=o(5939),h=o(3738),S=o(5618),k=o(8295),T=o(9983),q=o(1095),A=o(1494),x=o(7441),v=o(6627),b=o(6640),U=o(8030),y=o(2458);function _(t,e){1&t&&(m.TgZ(0,"mat-error"),m._uU(1,"This field is Required"),m.qZA())}function w(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){var r=m.oxw(2);m.xp6(1),m.hij("Minimum length of name is ",r.superStockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function I(t,e){if(1&t&&(m.TgZ(0,"div",47),m.YNc(1,_,2,0,"mat-error",48),m.YNc(2,w,2,1,"mat-error",48),m.qZA()),2&t){var r=m.oxw();m.xp6(1),m.Q6J("ngIf",r.superStockistMasterForm.get("userName").errors.required),m.xp6(1),m.Q6J("ngIf",r.superStockistMasterForm.get("userName").errors.minlength)}}function N(t,e){if(1&t){var r=m.EpF();m.TgZ(0,"tr",49),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m.TgZ(12,"i",50),m.NdJ("click",function(){var t=m.CHM(r).$implicit;return m.oxw().editStockist(t)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){var i=e.$implicit,o=e.index,n=m.oxw();m.Q6J("ngStyle",n.getBackgroundColor(o)),m.xp6(2),m.Oqu(o+1),m.xp6(2),m.Oqu(i.userName),m.xp6(2),m.Oqu(i.password),m.xp6(2),m.Oqu(i.balance),m.xp6(2),m.Oqu(i.commission)}}function C(t,e){if(1&t&&(m.TgZ(0,"mat-option",51),m._uU(1),m.qZA()),2&t){var r=e.$implicit;m.Q6J("value",r.userId),m.xp6(1),m.hij(" ",r.pin," ")}}function F(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",52),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",53),m.TgZ(4,"mat-icon",36),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){var r=m.oxw();m.xp6(3),m.Q6J("value",r.selectedSuperStockist.userName)}}function L(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",52),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",54),m.TgZ(4,"mat-icon",36),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){var r=m.oxw();m.xp6(3),m.Q6J("value",r.selectedSuperStockist.balance)}}function B(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",55),m.TgZ(1,"mat-label"),m._uU(2,"User balance"),m.qZA(),m._UZ(3,"input",54),m.TgZ(4,"mat-icon",36),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){var r=m.oxw();m.xp6(3),m.Q6J("value",r.user.balance)}}function J(t,e){if(1&t&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.qZA()),2&t){var r=e.$implicit,i=e.index;m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(r.rechargedTo.userName),m.xp6(2),m.Oqu(r.rechargedby.userName),m.xp6(2),m.Oqu(r.oldAmount),m.xp6(2),m.Oqu(r.rechargedAmount),m.xp6(2),m.Oqu(r.newAmount),m.xp6(2),m.Oqu(r.dateAndTime)}}var M,O=[{path:"",canActivate:[u.m],component:(M=function(){function e(r,i,o,n){var a=this;t(this,e),this.authService=r,this.masterSuperStockistService=i,this.commonService=o,this.transactionReportService=n,this.isSuperStockistUpdateAble=!1,this.superStockists=[],this.highLightedRowIndex=-1,this.selectedSuperStockist=null,this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){a.superStockists=t}),this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(function(t){a.user=t,console.log(a.user)})}return r(e,[{key:"ngOnInit",value:function(){this.superStockistMasterForm=new c.cw({id:new c.NI(null),userName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),pin:new c.NI(null,[c.kI.required]),commission:new c.NI(null,[c.kI.required])}),this.superStockistLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.minLength(2)])})}},{key:"getBackgroundColor",value:function(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"onSuperStockistSelect",value:function(t){this.selectedSuperStockist=this.superStockists.find(function(e){return e.userId===t.value})}},{key:"checkPinValidation",value:function(){var t=this;this.commonService.checkPinValidation(this.superStockistMasterForm.value.pin).subscribe(function(e){0===e.success?(l().fire({position:"top-end",icon:"error",title:"Pin already exists",showConfirmButton:!1,timer:2e3}),t.pinCheckValidator=!0):t.pinCheckValidator=!1})}},{key:"createNewSuperStockist",value:function(){var t=this;l().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(e){e.isConfirmed&&t.masterSuperStockistService.saveSuperStockist({userName:t.superStockistMasterForm.value.userName,pin:t.superStockistMasterForm.value.pin,createdBy:t.user.userId,commission:t.superStockistMasterForm.value.commission}).subscribe(function(e){1===e.success?(l().fire({position:"top-end",icon:"success",title:"Super Stockist created",timer:1e3}),t.superStockistMasterForm.reset()):l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})})})}},{key:"getTransaction",value:function(){var t=this;this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(function(e){t.transactionData=e.data})}},{key:"rechargeToSuperStockist",value:function(){var t=this;parseInt(this.superStockistLimitForm.value.amount)>parseInt(String(this.user.balance))?l().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):l().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(e){e.isConfirmed&&t.masterSuperStockistService.saveSuperStockistBalance({beneficiaryUid:t.superStockistLimitForm.value.beneficiaryUid,amount:t.superStockistLimitForm.value.amount,rechargeDoneByUid:t.user.userId}).subscribe(function(e){if(1===e.success){l().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3});var r=e.data,i=t.superStockists.findIndex(function(t){return t.userId===r.userId});t.superStockists[i].balance=r.balance,t.authService.setUserBalanceBy(t.user.balance-t.superStockistLimitForm.value.amount),t.selectedSuperStockist.balance=r.balance,t.superStockistLimitForm.patchValue({amount:""}),setTimeout(function(){t.highLightedRowIndex=-1},1e4)}else l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}},{key:"clearMasterSuperStockistForm",value:function(){this.superStockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isSuperStockistUpdateAble=!1}},{key:"editStockist",value:function(t){this.superStockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin,commission:t.commission}),this.isSuperStockistUpdateAble=!0}},{key:"updateSuperStockist",value:function(){var t=this;l().fire({title:"Confirmation",text:"Do you want update super stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(e){e.isConfirmed&&t.masterSuperStockistService.updateSuperStockist(t.superStockistMasterForm.value).subscribe(function(e){1===e.success?(l().fire({position:"top-end",icon:"success",title:"Super Stockist created",timer:1e3}),t.superStockistMasterForm.reset()):l().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})})})}}]),e}(),M.\u0275fac=function(t){return new(t||M)(m.Y36(d.e),m.Y36(p.Q),m.Y36(Z.v),m.Y36(g.z))},M.\u0275cmp=m.Xpm({type:M,selectors:[["app-master-super-stockist"]],decls:132,vars:14,consts:[["label","Create super stockist"],[1,"flex-row"],[1,""],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,""],["fxFlex","100"],[3,"formGroup"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["fxFlex","50"],["type","text","matInput","","formControlName","pin","placeholder","Enter name",3,"change"],[1,"col-10","m-0","p-0"],["fxFlex","col 100"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Super Stockist limit"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["appearance","legacy","class","ml-5",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Super Stockist Transaction Report"],["fxFlex","60"],["bindLabel","pin","bindValue","userId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],["scope","colgroup","colspan","7",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","stockistName"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["appearance","legacy",1,"ml-5"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-tab-group"),m.TgZ(1,"mat-tab",0),m.TgZ(2,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"mat-card"),m.TgZ(5,"mat-card-header"),m._UZ(6,"div",3),m.TgZ(7,"mat-card-title"),m._uU(8,"New Super Stockist Form"),m.qZA(),m.qZA(),m.TgZ(9,"mat-card-content"),m.TgZ(10,"div",4),m.TgZ(11,"div",5),m.TgZ(12,"form",6),m.TgZ(13,"div",7),m.TgZ(14,"mat-form-field",5),m.TgZ(15,"mat-label"),m._uU(16,"Super Stockist Name"),m.qZA(),m._UZ(17,"input",8),m.YNc(18,I,3,2,"div",9),m.qZA(),m.TgZ(19,"mat-form-field",10),m.TgZ(20,"mat-label"),m._uU(21,"PIN"),m.qZA(),m.TgZ(22,"input",11),m.NdJ("change",function(){return e.checkPinValidation()}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(23,"div",7),m.TgZ(24,"div",12),m.TgZ(25,"mat-form-field",13),m.TgZ(26,"mat-label"),m._uU(27,"Commission"),m.qZA(),m._UZ(28,"input",14),m.qZA(),m.qZA(),m.TgZ(29,"label",15),m._uU(30,"(Max: 100)"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(31,"div",7),m.TgZ(32,"button",16),m.NdJ("click",function(){return e.createNewSuperStockist()}),m._uU(33,"Create"),m.qZA(),m.TgZ(34,"button",16),m.NdJ("click",function(){return e.updateSuperStockist()}),m._uU(35,"Update"),m.qZA(),m.TgZ(36,"button",17),m.NdJ("click",function(){return e.clearMasterSuperStockistForm()}),m._uU(37,"clear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(38,"div",18),m.TgZ(39,"table",19),m.TgZ(40,"thead"),m.TgZ(41,"tr"),m.TgZ(42,"th",20),m._uU(43,"Stockist List"),m.qZA(),m.qZA(),m.TgZ(44,"tr"),m.TgZ(45,"th"),m._uU(46,"Id"),m.qZA(),m.TgZ(47,"th",21),m._uU(48,"Stockist name"),m.qZA(),m.TgZ(49,"th",22),m._uU(50,"Pin"),m.qZA(),m.TgZ(51,"th",23),m._uU(52,"Balance"),m.qZA(),m.TgZ(53,"th",23),m._uU(54,"Commission"),m.qZA(),m.TgZ(55,"th",24),m._uU(56,"Edit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(57,"tbody"),m.YNc(58,N,13,6,"tr",25),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(59,"mat-tab",26),m.TgZ(60,"div",27),m._UZ(61,"div",28),m.TgZ(62,"div",29),m.TgZ(63,"mat-card"),m.TgZ(64,"mat-card-header"),m._UZ(65,"div",3),m.TgZ(66,"mat-card-title"),m._uU(67,"Recharge Super Stockist"),m.qZA(),m.qZA(),m.TgZ(68,"mat-card-content"),m.TgZ(69,"div",7),m.TgZ(70,"div",30),m.TgZ(71,"form",6),m.TgZ(72,"div",7),m.TgZ(73,"mat-form-field",5),m.TgZ(74,"mat-label"),m._uU(75,"Super Stockist"),m.qZA(),m.TgZ(76,"mat-select",31),m.NdJ("selectionChange",function(t){return e.onSuperStockistSelect(t)}),m.YNc(77,C,2,2,"mat-option",32),m.qZA(),m.qZA(),m.YNc(78,F,6,1,"mat-form-field",33),m.YNc(79,L,6,1,"mat-form-field",33),m.qZA(),m.TgZ(80,"div",7),m.TgZ(81,"mat-form-field",34),m.TgZ(82,"mat-label"),m._uU(83,"Recharge amount"),m.qZA(),m._UZ(84,"input",35),m.TgZ(85,"mat-icon",36),m._uU(86," money"),m.qZA(),m.qZA(),m.YNc(87,B,6,1,"mat-form-field",37),m.qZA(),m.TgZ(88,"div",7),m.TgZ(89,"button",38),m.NdJ("click",function(){return e.rechargeToSuperStockist()}),m._uU(90,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(91,"div",28),m.qZA(),m.qZA(),m.TgZ(92,"mat-tab",39),m.TgZ(93,"div",27),m._UZ(94,"div",28),m.TgZ(95,"div",29),m.TgZ(96,"mat-card"),m.TgZ(97,"mat-card-header"),m._UZ(98,"div",3),m.TgZ(99,"mat-card-title"),m._uU(100,"Super Stockist Transaction Report"),m.qZA(),m.qZA(),m.TgZ(101,"mat-card-content"),m.TgZ(102,"div",7),m.TgZ(103,"div",40),m.TgZ(104,"div",5),m.TgZ(105,"ng-select",41),m.NdJ("ngModelChange",function(t){return e.rechargedToID=t}),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(106,"button",42),m.NdJ("click",function(){return e.getTransaction()}),m._uU(107,"Search"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(108,"div",28),m.qZA(),m.TgZ(109,"div",18),m.TgZ(110,"table",19),m.TgZ(111,"thead"),m.TgZ(112,"tr"),m.TgZ(113,"th",43),m._uU(114,"Transaction List"),m.qZA(),m.qZA(),m.TgZ(115,"tr"),m.TgZ(116,"th"),m._uU(117,"Sl No."),m.qZA(),m.TgZ(118,"th",44),m._uU(119,"Recharge To"),m.qZA(),m.TgZ(120,"th",22),m._uU(121,"Recharge By"),m.qZA(),m.TgZ(122,"th",23),m._uU(123,"Old Amount"),m.qZA(),m.TgZ(124,"th",23),m._uU(125,"Recharged Amount"),m.qZA(),m.TgZ(126,"th",45),m._uU(127,"New Amount"),m.qZA(),m.TgZ(128,"th",45),m._uU(129,"Date and Time"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(130,"tbody"),m.YNc(131,J,15,7,"tr",46),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t&&(m.xp6(12),m.Q6J("formGroup",e.superStockistMasterForm),m.xp6(6),m.Q6J("ngIf",!e.superStockistMasterForm.get("userName").valid&&e.superStockistMasterForm.get("userName").touched),m.xp6(14),m.Q6J("disabled",!e.superStockistMasterForm.valid||e.isSuperStockistUpdateAble||e.pinCheckValidator),m.xp6(2),m.Q6J("disabled",!e.isSuperStockistUpdateAble),m.xp6(24),m.Q6J("ngForOf",e.superStockists),m.xp6(13),m.Q6J("formGroup",e.superStockistLimitForm),m.xp6(6),m.Q6J("ngForOf",e.superStockists),m.xp6(1),m.Q6J("ngIf",e.selectedSuperStockist),m.xp6(1),m.Q6J("ngIf",e.selectedSuperStockist),m.xp6(8),m.Q6J("ngIf",e.selectedSuperStockist),m.xp6(2),m.Q6J("disabled",!e.superStockistLimitForm.valid),m.xp6(16),m.Q6J("items",e.superStockists)("ngModel",e.rechargedToID),m.xp6(26),m.Q6J("ngForOf",e.transactionData))},directives:[f.SP,f.uX,h.a8,h.dk,h.kc,h.n5,h.dn,S.xw,S.Wh,S.SQ,S.yH,c._Y,c.JL,c.sg,k.KE,k.hX,T.Nt,c.Fj,c.JJ,c.u,n.O5,q.lW,A.YE,A.nU,n.sg,x.gD,v.Hw,k.R9,b.w9,c.On,k.TO,n.PC,U.Zl,y.ey],styles:[""]}),M)}],Q=function(){var e=r(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[a.Bz.forChild(O)],a.Bz]}),e}(),Y=o(5480),D=o(5566),R=o(5396),V=function(){var e=r(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[n.ez,Q,f.Nh,Y.q,D.o9,h.QW,c.u5,c.UX,R.rP,A.JX,x.LD,v.Ps,b.A0]]}),e}()}}])}();