!function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[693],{5480:function(t,o,r){r.d(o,{q:function(){return u}});var n,s=r(1095),a=r(9983),c=r(7716),u=((n=e(function t(){i(this,t)})).\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[s.ot,a.c]}),n)},7693:function(t,o,r){r.r(o),r.d(o,{MasterStockistModule:function(){return E}});var n=r(8583),s=r(3423),a=r(1068),c=r(3679),u=r(2340),l=r(8259),d=r.n(l),m=r(7716),f=r(2173),g=r(3535),Z=r(1599),p=r(5939),k=r(3738),h=r(5618),v=r(8295),A=r(9983),S=r(7441),x=r(1095),q=r(1494),T=r(6627),b=r(2458),w=r(8030),y=r(5396);function I(t,e){1&t&&(m.TgZ(0,"mat-error"),m._uU(1,"This field is Required"),m.qZA())}function N(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){var i=m.oxw(2);m.xp6(1),m.hij("Minimum length of name is ",i.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function U(t,e){if(1&t&&(m.TgZ(0,"div",33),m.YNc(1,I,2,0,"mat-error",34),m.YNc(2,N,2,1,"mat-error",34),m.qZA()),2&t){var i=m.oxw();m.xp6(1),m.Q6J("ngIf",i.stockistMasterForm.get("userName").errors.required),m.xp6(1),m.Q6J("ngIf",i.stockistMasterForm.get("userName").errors.minlength)}}function L(t,e){if(1&t&&(m.TgZ(0,"mat-option",35),m._uU(1),m.qZA()),2&t){var i=e.$implicit;m.Q6J("value",i.id),m.xp6(1),m.hij(" ",i.user_name," ")}}function _(t,e){if(1&t){var i=m.EpF();m.TgZ(0,"tr",36),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m.TgZ(10,"i",37),m.NdJ("click",function(){var t=m.CHM(i).$implicit;return m.oxw().editStockist(t)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){var o=e.$implicit,r=e.index,n=m.oxw();m.Q6J("ngStyle",n.getBackgroundColor(r)),m.xp6(2),m.Oqu(r+1),m.xp6(2),m.Oqu(o.userName),m.xp6(2),m.Oqu(o.pin),m.xp6(2),m.Oqu(o.balance)}}function F(t,e){if(1&t&&(m.TgZ(0,"mat-option",35),m._uU(1),m.qZA()),2&t){var i=e.$implicit;m.Q6J("value",i.userId),m.xp6(1),m.hij(" ",i.pin," ")}}function C(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",38),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",39),m.TgZ(4,"mat-icon",30),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){var i=m.oxw();m.xp6(3),m.Q6J("value",i.selectedStockist.userName)}}function J(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",38),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",40),m.TgZ(4,"mat-icon",30),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){var i=m.oxw();m.xp6(3),m.Q6J("value",i.selectedStockist.balance)}}function B(t,e){if(1&t){var i=m.EpF();m.TgZ(0,"div",41),m.TgZ(1,"div",42),m.TgZ(2,"mat-slide-toggle",43),m.NdJ("change",function(){m.CHM(i);var t=m.oxw();return t.showDevArea=!t.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&t){var o=m.oxw();m.xp6(3),m.Oqu(o.showDevArea?"Hide Developer Area":"Show Developer Area")}}function M(t,e){if(1&t&&(m.TgZ(0,"div",41),m.TgZ(1,"div",44),m.TgZ(2,"pre"),m._uU(3),m.ALo(4,"json"),m.ALo(5,"json"),m.qZA(),m.qZA(),m.TgZ(6,"div",42),m.TgZ(7,"pre"),m._uU(8),m.ALo(9,"json"),m.qZA(),m.qZA(),m._UZ(10,"div",42),m.qZA()),2&t){var i=m.oxw();m.xp6(3),m.AsE("        stockistMasterForm = ",m.lcZ(4,3,i.stockistMasterForm.value),"\n        stockists = ",m.lcZ(5,5,i.stockists),"\n      "),m.xp6(5),m.hij("stockistLimitForm = ",m.lcZ(9,7,i.stockistLimitForm.value),"")}}function Q(t,e,i){return(t<e?-1:1)*(i?1:-1)}var Y,D=[{path:"",canActivate:[a.m],component:(Y=function(){function t(e,o,r){i(this,t),this.masterStockistService=e,this.authService=o,this.masterSuperStockistService=r,this.isProduction=u.N.production,this.showDevArea=!1,this.isStockistUpdatAble=!1,this.stockists=[],this.superStockists=[],this.sortedStockistList=[],this.selectedStockist=null,this.highLightedRowIndex=-1,this.stockistMasterForm=new c.cw({id:new c.NI(null),userName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),superStockistId:new c.NI(null,[c.kI.required]),pin:new c.NI(null,[c.kI.required])}),this.stockistLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.minLength(2)])})}return e(t,[{key:"ngOnInit",value:function(){var t=this;this.user=this.authService.userBehaviorSubject.value,this.stockists=this.masterStockistService.getStockists(),this.sortedStockistList=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(e){t.stockists=e,t.sortedStockistList=e}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(e){t.superStockists=e})}},{key:"onStockistSelect",value:function(t){this.selectedStockist=this.stockists.find(function(e){return e.userId===t.value})}},{key:"editStockist",value:function(t){this.highLightedRowIndex=this.stockists.findIndex(function(e){return e.userId===t.userId}),this.stockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin}),this.isStockistUpdatAble=!0}},{key:"upateStockist",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to update stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(e){e.isConfirmed&&t.masterStockistService.updateStockiist({id:t.stockistMasterForm.value.id,userName:t.stockistMasterForm.value.userName}).subscribe(function(e){1===e.success?(t.sortedStockistList[t.highLightedRowIndex]=e.data,t.stockistMasterForm.reset(),t.isStockistUpdatAble=!1,setTimeout(function(){t.highLightedRowIndex=-1},5e3),d().fire({position:"top-end",icon:"success",title:"Stockist updated",timer:1e3})):d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}},{key:"createNewStockist",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(e){e.isConfirmed&&t.masterStockistService.saveNewStockist({userName:t.stockistMasterForm.value.userName,pin:t.stockistMasterForm.value.pin,superStockistId:t.stockistMasterForm.value.superStockistId,createdBy:t.user.userId}).subscribe(function(e){1===e.success?(t.stockists.unshift(e.data),t.highLightedRowIndex=0,t.stockistLimitForm.reset(),t.clearMasterStockistForm(),setTimeout(function(){t.highLightedRowIndex=-1},1e4),d().fire({position:"top-end",icon:"success",title:"Balance updated",showConfirmButton:!1,timer:1e3})):d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}},{key:"getBackgroundColor",value:function(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterStockistForm",value:function(){this.stockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isStockistUpdatAble=!1}},{key:"sortData",value:function(t){var e=this.stockists.slice();this.sortedStockistList=t.active&&""!==t.direction?e.sort(function(e,i){var o="asc"===t.direction;switch(t.active){case"userName":return Q(e.userName,i.userName,o);case"pin":return Q(e.pin,i.pin,o);case"balance":return Q(e.balance,i.balance,o);default:return 0}}):e}},{key:"rechargeToStockist",value:function(){var t=this;d().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(e){e.isConfirmed&&t.masterStockistService.saveStockistBalance({beneficiaryUid:t.stockistLimitForm.value.beneficiaryUid,amount:t.stockistLimitForm.value.amount,rechargeDoneByUid:t.user.userId}).subscribe(function(e){if(1===e.success){var i=e.data,o=t.stockists.findIndex(function(t){return t.userId===i.userId});t.stockists[o].balance=i.balance,t.sortedStockistList[o].balance=i.balance,t.highLightedRowIndex=o,t.stockistLimitForm.patchValue({amount:""}),setTimeout(function(){t.highLightedRowIndex=-1},1e4),d().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else d().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(t){console.log("data saving error",t)})})}}]),t}(),Y.\u0275fac=function(t){return new(t||Y)(m.Y36(f.E),m.Y36(g.e),m.Y36(Z.Q))},Y.\u0275cmp=m.Xpm({type:Y,selectors:[["app-master-stockist"]],decls:89,vars:13,consts:[["label","Create stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","superStockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Stockist limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-tab-group"),m.TgZ(1,"mat-tab",0),m.TgZ(2,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"mat-card"),m.TgZ(5,"mat-card-header"),m._UZ(6,"div",3),m.TgZ(7,"mat-card-title"),m._uU(8,"New Stockist Form"),m.qZA(),m.qZA(),m.TgZ(9,"mat-card-content"),m.TgZ(10,"div",4),m.TgZ(11,"div",5),m.TgZ(12,"form",6),m.TgZ(13,"div",4),m.TgZ(14,"mat-form-field",5),m.TgZ(15,"mat-label"),m._uU(16,"Stockist Name"),m.qZA(),m._UZ(17,"input",7),m.YNc(18,U,3,2,"div",8),m.qZA(),m.TgZ(19,"mat-form-field",5),m.TgZ(20,"mat-label"),m._uU(21,"PIN"),m.qZA(),m._UZ(22,"input",9),m.qZA(),m.qZA(),m.TgZ(23,"div",4),m.TgZ(24,"mat-form-field",5),m.TgZ(25,"mat-label"),m._uU(26,"Super Stockist"),m.qZA(),m.TgZ(27,"mat-select",10),m.YNc(28,L,2,2,"mat-option",11),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(29,"div",4),m.TgZ(30,"button",12),m.NdJ("click",function(){return e.createNewStockist()}),m._uU(31,"Create"),m.qZA(),m.TgZ(32,"button",12),m.NdJ("click",function(){return e.upateStockist()}),m._uU(33,"Update"),m.qZA(),m.TgZ(34,"button",13),m.NdJ("click",function(){return e.clearMasterStockistForm()}),m._uU(35,"clear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(36,"div",14),m.TgZ(37,"table",15),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(38,"thead"),m.TgZ(39,"tr"),m.TgZ(40,"th",16),m._uU(41,"Stockist List"),m.qZA(),m.qZA(),m.TgZ(42,"tr"),m.TgZ(43,"th"),m._uU(44,"Id"),m.qZA(),m.TgZ(45,"th",17),m._uU(46,"Stockist name"),m.qZA(),m.TgZ(47,"th",18),m._uU(48,"Pin"),m.qZA(),m.TgZ(49,"th",19),m._uU(50,"Balance"),m.qZA(),m.TgZ(51,"th",20),m._uU(52,"Edit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(53,"tbody"),m.YNc(54,_,11,5,"tr",21),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(55,"mat-tab",22),m.TgZ(56,"div",1),m._UZ(57,"div",23),m.TgZ(58,"div",24),m.TgZ(59,"mat-card"),m.TgZ(60,"mat-card-header"),m._UZ(61,"div",3),m.TgZ(62,"mat-card-title"),m._uU(63,"Recharge Stockist"),m.qZA(),m.qZA(),m.TgZ(64,"mat-card-content"),m.TgZ(65,"div",4),m.TgZ(66,"div",25),m.TgZ(67,"form",6),m.TgZ(68,"div",4),m.TgZ(69,"mat-form-field",5),m.TgZ(70,"mat-label"),m._uU(71,"Stockist"),m.qZA(),m.TgZ(72,"mat-select",26),m.NdJ("selectionChange",function(t){return e.onStockistSelect(t)}),m.YNc(73,F,2,2,"mat-option",11),m.qZA(),m.qZA(),m.YNc(74,C,6,1,"mat-form-field",27),m.YNc(75,J,6,1,"mat-form-field",27),m.qZA(),m.TgZ(76,"div",4),m.TgZ(77,"mat-form-field",28),m.TgZ(78,"mat-label"),m._uU(79,"Recharge amount"),m.qZA(),m._UZ(80,"input",29),m.TgZ(81,"mat-icon",30),m._uU(82," money"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(83,"div",4),m.TgZ(84,"button",31),m.NdJ("click",function(){return e.rechargeToStockist()}),m._uU(85,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(86,"div",23),m.qZA(),m.qZA(),m.qZA(),m.YNc(87,B,4,1,"div",32),m.YNc(88,M,11,9,"div",32)),2&t&&(m.xp6(12),m.Q6J("formGroup",e.stockistMasterForm),m.xp6(6),m.Q6J("ngIf",!e.stockistMasterForm.get("userName").valid&&e.stockistMasterForm.get("userName").touched),m.xp6(10),m.Q6J("ngForOf",e.superStockists),m.xp6(2),m.Q6J("disabled",!e.stockistMasterForm.valid||e.isStockistUpdatAble),m.xp6(2),m.Q6J("disabled",!e.isStockistUpdatAble),m.xp6(22),m.Q6J("ngForOf",e.sortedStockistList),m.xp6(13),m.Q6J("formGroup",e.stockistLimitForm),m.xp6(6),m.Q6J("ngForOf",e.sortedStockistList),m.xp6(1),m.Q6J("ngIf",e.selectedStockist),m.xp6(1),m.Q6J("ngIf",e.selectedStockist),m.xp6(9),m.Q6J("disabled",!e.stockistLimitForm.valid),m.xp6(3),m.Q6J("ngIf",!e.isProduction),m.xp6(1),m.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[p.SP,p.uX,k.a8,k.dk,k.kc,k.n5,k.dn,h.xw,h.Wh,h.SQ,h.yH,c._Y,c.JL,c.sg,v.KE,v.hX,A.Nt,c.Fj,c.JJ,c.u,n.O5,S.gD,n.sg,x.lW,q.YE,q.nU,T.Hw,v.R9,v.TO,b.ey,n.PC,w.Zl,y.Rr],pipes:[n.Ts],styles:["@-webkit-keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@-webkit-keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}@keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}"]}),Y),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],R=function(){var t=e(function t(){i(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[s.Bz.forChild(D)],s.Bz]}),t}(),O=r(5480),j=r(5566),E=function(){var t=e(function t(){i(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.ez,R,p.Nh,O.q,j.o9,k.QW,c.u5,c.UX,y.rP,q.JX,S.LD,T.Ps]]}),t}()},1068:function(t,o,r){r.d(o,{m:function(){return c}});var n,s=r(7716),a=r(3535),c=((n=function(){function t(e){i(this,t),this.authService=e}return e(t,[{key:"canActivate",value:function(t,e){return this.authService.isAdmin()}}]),t}()).\u0275fac=function(t){return new(t||n)(s.LFG(a.e))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n)}}])}();