"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[124],{5124:function(t,e,i){i.r(e),i.d(e,{MasterStockistRoutingModule:function(){return M}});var o=i(3423),s=i(3679),r=i(8259),a=i.n(r),n=i(7716),c=i(2173),u=i(3535),l=i(1599),d=i(5620),m=i(7431),Z=i(5939),g=i(3738),h=i(5618),p=i(8295),f=i(9983),k=i(8583),T=i(1095),q=i(1494),A=i(7441),x=i(6627),S=i(6640),b=i(8030),v=i(2458);function U(t,e){1&t&&(n.TgZ(0,"mat-error"),n._uU(1,"This field is Required"),n.qZA())}function I(t,e){if(1&t&&(n.TgZ(0,"mat-error"),n._uU(1),n.qZA()),2&t){const t=n.oxw(2);n.xp6(1),n.hij("Minimum length of name is ",t.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function _(t,e){if(1&t&&(n.TgZ(0,"div",44),n.YNc(1,U,2,0,"mat-error",45),n.YNc(2,I,2,1,"mat-error",45),n.qZA()),2&t){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.required),n.xp6(1),n.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.minlength)}}function N(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"tr",46),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA(),n.TgZ(13,"td"),n.TgZ(14,"i",47),n.NdJ("click",function(){const e=n.CHM(t).$implicit;return n.oxw().editStockist(e)}),n.qZA(),n.qZA(),n.qZA()}if(2&t){const t=e.$implicit,i=e.index,o=n.oxw();n.Q6J("ngStyle",o.getBackgroundColor(i)),n.xp6(2),n.Oqu(i+1),n.xp6(2),n.Oqu(t.userName),n.xp6(2),n.Oqu(t.password),n.xp6(2),n.Oqu(t.balance),n.xp6(2),n.Oqu(t.commission),n.xp6(2),n.AsE("",t.superStockistName," (",t.superStockistPin,")")}}function w(t,e){if(1&t&&(n.TgZ(0,"mat-option",48),n._uU(1),n.qZA()),2&t){const t=e.$implicit;n.Q6J("value",t.userId),n.xp6(1),n.hij(" ",t.pin," ")}}function y(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",49),n.TgZ(1,"mat-label"),n._uU(2,"Name"),n.qZA(),n._UZ(3,"input",50),n.TgZ(4,"mat-icon",32),n._uU(5,"person_pin"),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(3),n.Q6J("value",t.selectedStockist.userName)}}function C(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",49),n.TgZ(1,"mat-label"),n._uU(2,"Current balance"),n.qZA(),n._UZ(3,"input",51),n.TgZ(4,"mat-icon",32),n._uU(5,"account_balance_wallet"),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(3),n.Q6J("value",t.selectedStockist.balance)}}function L(t,e){if(1&t&&(n.TgZ(0,"mat-form-field",52),n.TgZ(1,"mat-label"),n._uU(2,"User balance"),n.qZA(),n._UZ(3,"input",51),n.TgZ(4,"mat-icon",32),n._uU(5,"account_balance_wallet"),n.qZA(),n.qZA()),2&t){const t=n.oxw();n.xp6(3),n.Q6J("value",t.user.balance)}}function F(t,e){if(1&t&&(n.TgZ(0,"tr"),n.TgZ(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA(),n.TgZ(13,"td"),n._uU(14),n.qZA(),n.qZA()),2&t){const t=e.$implicit,i=e.index;n.xp6(2),n.Oqu(i+1),n.xp6(2),n.Oqu(t.rechargedTo.userName),n.xp6(2),n.Oqu(t.rechargedby.userName),n.xp6(2),n.Oqu(t.oldAmount),n.xp6(2),n.Oqu(t.rechargedAmount),n.xp6(2),n.Oqu(t.newAmount),n.xp6(2),n.Oqu(t.dateAndTime)}}let B=(()=>{class t{constructor(t,e,i,o,s){this.masterStockistService=t,this.authService=e,this.masterSuperStockistService=i,this.commonService=o,this.transactionReportService=s,this.stockists=[],this.isStockistUpdatAble=!1,this.selectedStockist=null,this.highLightedRowIndex=-1,this.superStockists=[],this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(t=>{this.user=t})}ngOnInit(){this.stockistMasterForm=new s.cw({id:new s.NI(null),userName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),pin:new s.NI(null,[s.kI.required]),commission:new s.NI(null,[s.kI.required,s.kI.max(this.user.commission)])}),this.stockistLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.minLength(2)])}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t,this.sortedStockistList=this.stockists.filter(t=>t.superStockistId===this.user.userId)}),this.sortedStockistList=this.stockists.filter(t=>t.superStockistId===this.user.userId)}getTransaction(){this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(t=>{this.transactionData=t.data})}onStockistSelect(t){this.selectedStockist=this.stockists.find(e=>e.userId===t.value)}checkPinValidation(){this.commonService.checkPinValidation(this.stockistMasterForm.value.userName).subscribe(t=>{0===t.success?(a().fire({position:"top-end",icon:"error",title:"Pin already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0,this.stockistMasterForm.patchValue({userName:null})):this.pinCheckValidator=!1})}rechargeToStockist(){this.selectedStockist.superStockistBalance<this.stockistLimitForm.value.amount?a().fire({position:"top-end",icon:"error",title:"Insufficient balance",showConfirmButton:!1,timer:1e3}):a().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveStockistBalance({beneficiaryUid:this.stockistLimitForm.value.beneficiaryUid,amount:this.stockistLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){a().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3});const e=t.data,i=this.stockists.findIndex(t=>t.userId===e.userId);this.stockists[i].superStockistBalance=e.superStockistBalance,this.stockists[i].balance=e.balance,this.sortedStockistList[i].balance=e.balance,this.selectedStockist.balance=e.balance,this.sortedStockistList[i].superStockistBalance=e.superStockistBalance,this.authService.setUserBalanceBy(this.user.balance-this.stockistLimitForm.value.amount),console.log(this.user),this.highLightedRowIndex=i,this.stockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4)}else a().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}updateStockist(){a().fire({title:"Confirmation",text:"Do you sure to update stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.updateStockiist({stockistId:this.stockistMasterForm.value.id,stockistName:this.stockistMasterForm.value.userName,superStockistId:this.user.userId,userId:this.user.userId,commission:this.stockistMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.sortedStockistList[this.highLightedRowIndex]=t.data,this.stockistMasterForm.reset(),this.isStockistUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),a().fire({position:"top-end",icon:"success",title:"Stockist updated",timer:1e3})):a().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}editStockist(t){this.highLightedRowIndex=this.stockists.findIndex(e=>e.userId===t.userId),this.stockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin,commission:t.commission}),this.isStockistUpdatAble=!0}clearMasterStockistForm(){this.stockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isStockistUpdatAble=!1}createNewStockist(){a().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveNewStockist({userName:this.stockistMasterForm.value.userName,pin:this.stockistMasterForm.value.pin,superStockistId:this.user.userId,createdBy:this.user.userId,commission:this.stockistMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.sortedStockistList.unshift(t.data),this.stockistMasterForm.reset(),a().fire({position:"top-end",icon:"success",title:"Stockist Created",showConfirmButton:!1,timer:1e3}),this.highLightedRowIndex=0,setTimeout(()=>{this.highLightedRowIndex=-1},5e3)):a().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(c.E),n.Y36(u.e),n.Y36(l.Q),n.Y36(d.v),n.Y36(m.z))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-master-stockist"]],decls:133,vars:15,consts:[["label","Create stockist"],[1,"flex-row","mt-2"],[1,"col-8"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8","mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Stockist limit"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","number","min","1","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["appearance","legacy","class","ml-5",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Stockist Tranaction Report"],["fxFlex","60"],["bindLabel","pin","bindValue","userId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["scope","colgroup","colspan","7",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","stockistName"],[4,"ngFor","ngForOf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["appearance","legacy",1,"ml-5"]],template:function(t,e){1&t&&(n.TgZ(0,"mat-tab-group"),n.TgZ(1,"mat-tab",0),n.TgZ(2,"div",1),n.TgZ(3,"div",2),n.TgZ(4,"mat-card"),n.TgZ(5,"mat-card-header"),n._UZ(6,"div",3),n.TgZ(7,"mat-card-title"),n._uU(8,"New Stockist Form"),n.qZA(),n.qZA(),n.TgZ(9,"mat-card-content"),n.TgZ(10,"div",4),n.TgZ(11,"div",5),n.TgZ(12,"form",6),n.TgZ(13,"div",4),n.TgZ(14,"mat-form-field",5),n.TgZ(15,"mat-label"),n._uU(16,"Stockist Name"),n.qZA(),n.TgZ(17,"input",7),n.NdJ("change",function(){return e.checkPinValidation()}),n.qZA(),n.YNc(18,_,3,2,"div",8),n.qZA(),n.TgZ(19,"mat-form-field",5),n.TgZ(20,"mat-label"),n._uU(21,"PIN"),n.qZA(),n._UZ(22,"input",9),n.qZA(),n.qZA(),n.TgZ(23,"div",4),n.TgZ(24,"div",10),n.TgZ(25,"mat-form-field",5),n.TgZ(26,"mat-label"),n._uU(27,"Commission"),n.qZA(),n._UZ(28,"input",11),n.qZA(),n.qZA(),n.TgZ(29,"label",12),n._uU(30),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(31,"div",4),n.TgZ(32,"button",13),n.NdJ("click",function(){return e.createNewStockist()}),n._uU(33,"Create"),n.qZA(),n.TgZ(34,"button",13),n.NdJ("click",function(){return e.updateStockist()}),n._uU(35,"Update"),n.qZA(),n.TgZ(36,"button",14),n.NdJ("click",function(){return e.clearMasterStockistForm()}),n._uU(37,"clear"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(38,"div",15),n.TgZ(39,"table",16),n.TgZ(40,"thead"),n.TgZ(41,"tr"),n.TgZ(42,"th",17),n._uU(43,"Stockist List"),n.qZA(),n.qZA(),n.TgZ(44,"tr"),n.TgZ(45,"th"),n._uU(46,"Id"),n.qZA(),n.TgZ(47,"th",18),n._uU(48,"Stockist name"),n.qZA(),n.TgZ(49,"th",19),n._uU(50,"Pin"),n.qZA(),n.TgZ(51,"th",20),n._uU(52,"Balance"),n.qZA(),n.TgZ(53,"th",20),n._uU(54,"Commission"),n.qZA(),n.TgZ(55,"th",20),n._uU(56,"Super Stockist Name"),n.qZA(),n.TgZ(57,"th",21),n._uU(58,"Edit"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(59,"tbody"),n.YNc(60,N,15,8,"tr",22),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(61,"mat-tab",23),n.TgZ(62,"div",24),n._UZ(63,"div",25),n.TgZ(64,"div",2),n.TgZ(65,"mat-card"),n.TgZ(66,"mat-card-header"),n._UZ(67,"div",3),n.TgZ(68,"mat-card-title"),n._uU(69,"Recharge Stockist"),n.qZA(),n.qZA(),n.TgZ(70,"mat-card-content"),n.TgZ(71,"div",4),n.TgZ(72,"div",26),n.TgZ(73,"form",6),n.TgZ(74,"div",4),n.TgZ(75,"mat-form-field",5),n.TgZ(76,"mat-label"),n._uU(77,"Stockist"),n.qZA(),n.TgZ(78,"mat-select",27),n.NdJ("selectionChange",function(t){return e.onStockistSelect(t)}),n.YNc(79,w,2,2,"mat-option",28),n.qZA(),n.qZA(),n.YNc(80,y,6,1,"mat-form-field",29),n.YNc(81,C,6,1,"mat-form-field",29),n.qZA(),n.TgZ(82,"div",4),n.TgZ(83,"mat-form-field",30),n.TgZ(84,"mat-label"),n._uU(85,"Recharge amount"),n.qZA(),n._UZ(86,"input",31),n.TgZ(87,"mat-icon",32),n._uU(88," money"),n.qZA(),n.qZA(),n.YNc(89,L,6,1,"mat-form-field",33),n.qZA(),n.TgZ(90,"div",4),n.TgZ(91,"button",34),n.NdJ("click",function(){return e.rechargeToStockist()}),n._uU(92,"Save"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(93,"div",25),n.qZA(),n.qZA(),n.TgZ(94,"mat-tab",35),n.TgZ(95,"div",24),n._UZ(96,"div",25),n.TgZ(97,"div",2),n.TgZ(98,"mat-card"),n.TgZ(99,"mat-card-header"),n._UZ(100,"div",3),n.TgZ(101,"mat-card-title"),n._uU(102,"Stockist Tranaction Report "),n.qZA(),n.qZA(),n.TgZ(103,"mat-card-content"),n.TgZ(104,"div",4),n.TgZ(105,"div",36),n.TgZ(106,"ng-select",37),n.NdJ("ngModelChange",function(t){return e.rechargedToID=t}),n.qZA(),n.qZA(),n.qZA(),n.TgZ(107,"button",38),n.NdJ("click",function(){return e.getTransaction()}),n._uU(108,"Search"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n._UZ(109,"div",25),n.qZA(),n.TgZ(110,"div",39),n.TgZ(111,"table",16),n.TgZ(112,"thead"),n.TgZ(113,"tr"),n.TgZ(114,"th",40),n._uU(115,"Transaction List"),n.qZA(),n.qZA(),n.TgZ(116,"tr"),n.TgZ(117,"th"),n._uU(118,"Sl No."),n.qZA(),n.TgZ(119,"th",41),n._uU(120,"Recharge To"),n.qZA(),n.TgZ(121,"th",19),n._uU(122,"Recharge By"),n.qZA(),n.TgZ(123,"th",20),n._uU(124,"Old Amount"),n.qZA(),n.TgZ(125,"th",20),n._uU(126,"Recharged Amount"),n.qZA(),n.TgZ(127,"th",42),n._uU(128,"New Amount"),n.qZA(),n.TgZ(129,"th",42),n._uU(130,"Date and Time"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(131,"tbody"),n.YNc(132,F,15,7,"tr",43),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(12),n.Q6J("formGroup",e.stockistMasterForm),n.xp6(6),n.Q6J("ngIf",!e.stockistMasterForm.get("userName").valid&&e.stockistMasterForm.get("userName").touched),n.xp6(12),n.hij("(Max: ",e.user.commission,")"),n.xp6(2),n.Q6J("disabled",!e.stockistMasterForm.valid||e.isStockistUpdatAble||e.pinCheckValidator),n.xp6(2),n.Q6J("disabled",!e.isStockistUpdatAble),n.xp6(26),n.Q6J("ngForOf",e.sortedStockistList),n.xp6(13),n.Q6J("formGroup",e.stockistLimitForm),n.xp6(6),n.Q6J("ngForOf",e.sortedStockistList),n.xp6(1),n.Q6J("ngIf",e.selectedStockist),n.xp6(1),n.Q6J("ngIf",e.selectedStockist),n.xp6(8),n.Q6J("ngIf",e.selectedStockist),n.xp6(2),n.Q6J("disabled",!e.stockistLimitForm.valid),n.xp6(15),n.Q6J("items",e.stockists)("ngModel",e.rechargedToID),n.xp6(26),n.Q6J("ngForOf",e.transactionData))},directives:[Z.SP,Z.uX,g.a8,g.dk,g.kc,g.n5,g.dn,h.xw,h.Wh,h.SQ,h.yH,s._Y,s.JL,s.sg,p.KE,p.hX,f.Nt,s.Fj,s.JJ,s.u,k.O5,T.lW,q.YE,q.nU,k.sg,A.gD,s.qQ,s.wV,x.Hw,p.R9,S.w9,s.On,p.TO,k.PC,b.Zl,v.ey],styles:[""]}),t})();const J=[{path:"",canActivate:[i(2396).c],component:B,data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[o.Bz.forChild(J)],o.Bz]}),t})()}}]);