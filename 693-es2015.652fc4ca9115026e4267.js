"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[693],{5480:function(t,e,i){i.d(e,{q:function(){return c}});var o=i(1095),s=i(9983),r=i(7716);let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[o.ot,s.c]}),t})()},7693:function(t,e,i){i.r(e),i.d(e,{MasterStockistModule:function(){return E}});var o=i(8583),s=i(3423),r=i(1068),c=i(3679),n=i(2340),a=i(8259),u=i.n(a),l=i(7716),m=i(2173),d=i(3535),g=i(1599),Z=i(5620),h=i(5939),p=i(3738),f=i(5618),k=i(8295),S=i(9983),x=i(7441),A=i(1095),q=i(1494),T=i(6627),v=i(2458),b=i(8030),w=i(5396);function I(t,e){1&t&&(l.TgZ(0,"mat-error"),l._uU(1,"This field is Required"),l.qZA())}function N(t,e){if(1&t&&(l.TgZ(0,"mat-error"),l._uU(1),l.qZA()),2&t){const t=l.oxw(2);l.xp6(1),l.hij("Minimum length of name is ",t.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function U(t,e){if(1&t&&(l.TgZ(0,"div",38),l.YNc(1,I,2,0,"mat-error",35),l.YNc(2,N,2,1,"mat-error",35),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.required),l.xp6(1),l.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.minlength)}}function _(t,e){if(1&t&&(l.TgZ(0,"mat-option",39),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("value",t.userId),l.xp6(1),l.hij(" ",t.userName," ")}}function L(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"tr",40),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.TgZ(5,"td"),l._uU(6),l.qZA(),l.TgZ(7,"td"),l._uU(8),l.qZA(),l.TgZ(9,"td"),l._uU(10),l.qZA(),l.TgZ(11,"td"),l._uU(12),l.qZA(),l.TgZ(13,"td"),l.TgZ(14,"i",41),l.NdJ("click",function(){const e=l.CHM(t).$implicit;return l.oxw().editStockist(e)}),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=e.$implicit,i=e.index,o=l.oxw();l.Q6J("ngStyle",o.getBackgroundColor(i)),l.xp6(2),l.Oqu(i+1),l.xp6(2),l.Oqu(t.userName),l.xp6(2),l.Oqu(t.password),l.xp6(2),l.Oqu(t.balance),l.xp6(2),l.Oqu(t.commission),l.xp6(2),l.AsE("",t.superStockistName," (",t.superStockistPin,")")}}function y(t,e){if(1&t&&(l.TgZ(0,"mat-option",39),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("value",t.userId),l.xp6(1),l.hij(" ",t.pin," ")}}function C(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",42),l.TgZ(1,"mat-label"),l._uU(2,"Name"),l.qZA(),l._UZ(3,"input",43),l.TgZ(4,"mat-icon",34),l._uU(5,"person_pin"),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.Q6J("value",t.selectedStockist.userName)}}function F(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",42),l.TgZ(1,"mat-label"),l._uU(2,"Current balance"),l.qZA(),l._UZ(3,"input",44),l.TgZ(4,"mat-icon",34),l._uU(5,"account_balance_wallet"),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.Q6J("value",t.selectedStockist.balance)}}function J(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",42),l.TgZ(1,"mat-label"),l._uU(2,"Super stockist owner"),l.qZA(),l._UZ(3,"input",43),l.TgZ(4,"mat-icon",34),l._uU(5,"person_pin"),l.qZA(),l.qZA()),2&t){const t=l.oxw(2);l.xp6(3),l.Q6J("value",t.selectedStockist.superStockistName)}}function B(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",42),l.TgZ(1,"mat-label"),l._uU(2,"Super stockist balance"),l.qZA(),l._UZ(3,"input",44),l.TgZ(4,"mat-icon",34),l._uU(5,"account_balance_wallet"),l.qZA(),l.qZA()),2&t){const t=l.oxw(2);l.xp6(3),l.Q6J("value",t.selectedStockist.superStockistBalance)}}function M(t,e){if(1&t&&(l.TgZ(0,"div",4),l.YNc(1,J,6,1,"mat-form-field",30),l.YNc(2,B,6,1,"mat-form-field",30),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngIf",t.selectedStockist),l.xp6(1),l.Q6J("ngIf",t.selectedStockist)}}function Q(t,e){if(1&t&&(l.TgZ(0,"mat-error"),l._uU(1),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.hij(" Amount should not exceed ",t.stockistLimitForm.controls.amount.errors.max.max," ")}}function Y(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",45),l.TgZ(1,"div",46),l.TgZ(2,"mat-slide-toggle",47),l.NdJ("change",function(){l.CHM(t);const e=l.oxw();return e.showDevArea=!e.showDevArea}),l._uU(3),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=l.oxw();l.xp6(3),l.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function D(t,e){if(1&t&&(l.TgZ(0,"div",45),l.TgZ(1,"div",48),l.TgZ(2,"pre"),l._uU(3),l.ALo(4,"json"),l.ALo(5,"json"),l.qZA(),l.qZA(),l.TgZ(6,"div",46),l.TgZ(7,"pre"),l._uU(8),l.ALo(9,"json"),l.qZA(),l.qZA(),l._UZ(10,"div",46),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.AsE("        stockistMasterForm = ",l.lcZ(4,3,t.stockistMasterForm.value),"\n        stockists = ",l.lcZ(5,5,t.stockists),"\n      "),l.xp6(5),l.hij("stockistLimitForm = ",l.lcZ(9,7,t.stockistLimitForm.value),"")}}function R(t,e,i){return(t<e?-1:1)*(i?1:-1)}const j=[{path:"",canActivate:[r.m],component:(()=>{class t{constructor(t,e,i,o){this.masterStockistService=t,this.authService=e,this.masterSuperStockistService=i,this.commonService=o,this.isProduction=n.N.production,this.showDevArea=!1,this.isStockistUpdateAble=!1,this.stockists=[],this.superStockists=[],this.sortedStockistList=[],this.selectedStockist=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(t=>{this.user=t}),this.stockistMasterForm=new c.cw({id:new c.NI(null),userName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),superStockistId:new c.NI(null,[c.kI.required]),pin:new c.NI(null,[c.kI.required]),commission:new c.NI(null,[c.kI.required,c.kI.max(100)])}),this.stockistLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.minLength(2)])})}ngOnInit(){this.stockists=this.masterStockistService.getStockists(),this.sortedStockistList=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t,this.sortedStockistList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(t=>{this.superStockists=t})}onStockistSelect(t){this.selectedStockist=this.stockists.find(e=>e.userId===t.value)}editStockist(t){this.highLightedRowIndex=this.stockists.findIndex(e=>e.userId===t.userId),this.stockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin,superStockistId:t.superStockistId,commission:t.commission}),this.isStockistUpdateAble=!0}updateStockist(){u().fire({title:"Confirmation",text:"Do you sure to update stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.updateStockiist({id:this.stockistMasterForm.value.id,userName:this.stockistMasterForm.value.userName,commission:this.stockistMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.sortedStockistList[this.highLightedRowIndex]=t.data,this.stockistMasterForm.reset(),this.isStockistUpdateAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Stockist updated",timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}checkPinValidation(){this.commonService.checkPinValidation(this.stockistMasterForm.value.userName).subscribe(t=>{0===t.success?(u().fire({position:"top-end",icon:"error",title:"Pin already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0,this.stockistMasterForm.patchValue({userName:null})):this.pinCheckValidator=!1})}createNewStockist(){u().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveNewStockist({userName:this.stockistMasterForm.value.userName,pin:this.stockistMasterForm.value.pin,superStockistId:this.stockistMasterForm.value.superStockistId,createdBy:this.user.userId,commission:this.stockistMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.highLightedRowIndex=0,this.stockistLimitForm.reset(),this.stockistMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Stockist Created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterStockistForm(){this.stockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isStockistUpdateAble=!1}sortData(t){const e=this.stockists.slice();this.sortedStockistList=t.active&&""!==t.direction?e.sort((e,i)=>{const o="asc"===t.direction;switch(t.active){case"userName":return R(e.userName,i.userName,o);case"pin":return R(e.pin,i.pin,o);case"balance":return R(e.balance,i.balance,o);default:return 0}}):e}rechargeToStockist(){this.stockistLimitForm.value.amount>this.selectedStockist.superStockistBalance?u().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveStockistBalance({beneficiaryUid:this.stockistLimitForm.value.beneficiaryUid,amount:this.stockistLimitForm.value.amount,rechargeDoneByUid:this.selectedStockist.superStockistId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.stockists.findIndex(t=>t.userId===e.userId);this.stockists[i].balance=e.balance,this.sortedStockistList[i].balance=e.balance,this.selectedStockist.superStockistBalance=e.superStockistBalance,this.highLightedRowIndex=i,this.stockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(m.E),l.Y36(d.e),l.Y36(g.Q),l.Y36(Z.v))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-master-stockist"]],decls:103,vars:15,consts:[["label","Create stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","superStockistId"],[3,"value",4,"ngFor","ngForOf"],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Stockist limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],[4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(l.TgZ(0,"mat-tab-group"),l.TgZ(1,"mat-tab",0),l.TgZ(2,"div",1),l.TgZ(3,"div",2),l.TgZ(4,"mat-card"),l.TgZ(5,"mat-card-header"),l._UZ(6,"div",3),l.TgZ(7,"mat-card-title"),l._uU(8,"New Stockist Form"),l.qZA(),l.qZA(),l.TgZ(9,"mat-card-content"),l.TgZ(10,"div",4),l.TgZ(11,"div",5),l.TgZ(12,"form",6),l.TgZ(13,"div",4),l.TgZ(14,"mat-form-field",5),l.TgZ(15,"mat-label"),l._uU(16,"Stockist Name"),l.qZA(),l.TgZ(17,"input",7),l.NdJ("change",function(){return e.checkPinValidation()}),l.qZA(),l.YNc(18,U,3,2,"div",8),l.qZA(),l.TgZ(19,"mat-form-field",5),l.TgZ(20,"mat-label"),l._uU(21,"PIN"),l.qZA(),l._UZ(22,"input",9),l.qZA(),l.qZA(),l.TgZ(23,"div",4),l.TgZ(24,"mat-form-field",5),l.TgZ(25,"mat-label"),l._uU(26,"Super Stockist"),l.qZA(),l.TgZ(27,"mat-select",10),l.YNc(28,_,2,2,"mat-option",11),l.qZA(),l.qZA(),l.qZA(),l.TgZ(29,"div",4),l.TgZ(30,"div",12),l.TgZ(31,"mat-form-field",5),l.TgZ(32,"mat-label"),l._uU(33,"Commission"),l.qZA(),l._UZ(34,"input",13),l.qZA(),l.qZA(),l.TgZ(35,"label",14),l._uU(36,"(Max: 100)"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(37,"div",4),l.TgZ(38,"button",15),l.NdJ("click",function(){return e.createNewStockist()}),l._uU(39,"Create"),l.qZA(),l.TgZ(40,"button",15),l.NdJ("click",function(){return e.updateStockist()}),l._uU(41,"Update"),l.qZA(),l.TgZ(42,"button",16),l.NdJ("click",function(){return e.clearMasterStockistForm()}),l._uU(43,"clear"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(44,"div",17),l.TgZ(45,"table",18),l.NdJ("matSortChange",function(t){return e.sortData(t)}),l.TgZ(46,"thead"),l.TgZ(47,"tr"),l.TgZ(48,"th",19),l._uU(49,"Stockist List"),l.qZA(),l.qZA(),l.TgZ(50,"tr"),l.TgZ(51,"th"),l._uU(52,"Id"),l.qZA(),l.TgZ(53,"th",20),l._uU(54,"Stockist name"),l.qZA(),l.TgZ(55,"th",21),l._uU(56,"Pin"),l.qZA(),l.TgZ(57,"th",22),l._uU(58,"Balance"),l.qZA(),l.TgZ(59,"th",22),l._uU(60,"Commission"),l.qZA(),l.TgZ(61,"th",22),l._uU(62,"Super Stockist Name"),l.qZA(),l.TgZ(63,"th",23),l._uU(64,"Edit"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(65,"tbody"),l.YNc(66,L,15,8,"tr",24),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(67,"mat-tab",25),l.TgZ(68,"div",1),l._UZ(69,"div",26),l.TgZ(70,"div",27),l.TgZ(71,"mat-card"),l.TgZ(72,"mat-card-header"),l._UZ(73,"div",3),l.TgZ(74,"mat-card-title"),l._uU(75,"Recharge Stockist"),l.qZA(),l.qZA(),l.TgZ(76,"mat-card-content"),l.TgZ(77,"div",4),l.TgZ(78,"div",28),l.TgZ(79,"form",6),l.TgZ(80,"div",4),l.TgZ(81,"mat-form-field",5),l.TgZ(82,"mat-label"),l._uU(83,"Stockist"),l.qZA(),l.TgZ(84,"mat-select",29),l.NdJ("selectionChange",function(t){return e.onStockistSelect(t)}),l.YNc(85,y,2,2,"mat-option",11),l.qZA(),l.qZA(),l.YNc(86,C,6,1,"mat-form-field",30),l.YNc(87,F,6,1,"mat-form-field",30),l.qZA(),l.YNc(88,M,3,2,"div",31),l.TgZ(89,"div",4),l.TgZ(90,"mat-form-field",32),l.TgZ(91,"mat-label"),l._uU(92,"Recharge amount"),l.qZA(),l._UZ(93,"input",33),l.TgZ(94,"mat-icon",34),l._uU(95," money"),l.qZA(),l.YNc(96,Q,2,1,"mat-error",35),l.qZA(),l.qZA(),l.TgZ(97,"div",4),l.TgZ(98,"button",36),l.NdJ("click",function(){return e.rechargeToStockist()}),l._uU(99,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(100,"div",26),l.qZA(),l.qZA(),l.qZA(),l.YNc(101,Y,4,1,"div",37),l.YNc(102,D,11,9,"div",37)),2&t&&(l.xp6(12),l.Q6J("formGroup",e.stockistMasterForm),l.xp6(6),l.Q6J("ngIf",!e.stockistMasterForm.get("userName").valid&&e.stockistMasterForm.get("userName").touched),l.xp6(10),l.Q6J("ngForOf",e.superStockists),l.xp6(10),l.Q6J("disabled",!e.stockistMasterForm.valid||e.isStockistUpdateAble||e.pinCheckValidator),l.xp6(2),l.Q6J("disabled",!e.isStockistUpdateAble),l.xp6(26),l.Q6J("ngForOf",e.sortedStockistList),l.xp6(13),l.Q6J("formGroup",e.stockistLimitForm),l.xp6(6),l.Q6J("ngForOf",e.sortedStockistList),l.xp6(1),l.Q6J("ngIf",e.selectedStockist),l.xp6(1),l.Q6J("ngIf",e.selectedStockist),l.xp6(1),l.Q6J("ngIf",e.selectedStockist),l.xp6(8),l.Q6J("ngIf",e.stockistLimitForm.get("amount").hasError("max")),l.xp6(2),l.Q6J("disabled",!e.stockistLimitForm.valid),l.xp6(3),l.Q6J("ngIf",!e.isProduction),l.xp6(1),l.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[h.SP,h.uX,p.a8,p.dk,p.kc,p.n5,p.dn,f.xw,f.Wh,f.SQ,f.yH,c._Y,c.JL,c.sg,k.KE,k.hX,S.Nt,c.Fj,c.JJ,c.u,o.O5,x.gD,o.sg,A.lW,q.YE,q.nU,T.Hw,k.R9,k.TO,v.ey,o.PC,b.Zl,w.Rr],pipes:[o.Ts],styles:["@-webkit-keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@-webkit-keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}@keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}"]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(j)],s.Bz]}),t})();var P=i(5480),V=i(5566);let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,O,h.Nh,P.q,V.o9,p.QW,c.u5,c.UX,w.rP,q.JX,x.LD,T.Ps]]}),t})()}}]);