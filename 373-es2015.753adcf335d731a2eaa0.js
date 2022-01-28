"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[373],{5480:function(t,e,r){r.d(e,{q:function(){return n}});var o=r(1095),i=r(9983),s=r(7716);let n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[o.ot,i.c]}),t})()},1373:function(t,e,r){r.r(e),r.d(e,{MasterSuperStockistModule:function(){return I}});var o=r(8583),i=r(3423),s=r(1068),n=r(3679),a=r(8259),c=r.n(a),u=r(7716),m=r(3535),l=r(1599),f=r(5939),p=r(3738),d=r(5618),k=r(8295),Z=r(9983),g=r(1095);function x(t,e){1&t&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function h(t,e){if(1&t&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&t){const t=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",t.stockistStockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function S(t,e){if(1&t&&(u.TgZ(0,"div",11),u.YNc(1,x,2,0,"mat-error",12),u.YNc(2,h,2,1,"mat-error",12),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.stockistStockistMasterForm.get("userName").errors.required),u.xp6(1),u.Q6J("ngIf",t.stockistStockistMasterForm.get("userName").errors.minlength)}}const v=[{path:"",canActivate:[s.m],component:(()=>{class t{constructor(t,e){this.authService=t,this.superStockistService=e}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.stockistStockistMasterForm=new n.cw({id:new n.NI(null),userName:new n.NI(null,[n.kI.required,n.kI.minLength(2)]),pin:new n.NI(null,[n.kI.required])})}createNewSuperStockist(){c().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.superStockistService.saveSuperStockist({userName:this.stockistStockistMasterForm.value.userName,pin:this.stockistStockistMasterForm.value.pin,createdBy:this.user.userId}).subscribe(t=>{1===t.success?(c().fire({position:"top-end",icon:"success",title:"Super Stockist created",timer:1e3}),this.stockistStockistMasterForm.reset()):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})})})}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(m.e),u.Y36(l.Q))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-master-super-stockist"]],decls:26,vars:3,consts:[["label","Create stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"]],template:function(t,e){1&t&&(u.TgZ(0,"mat-tab-group"),u.TgZ(1,"mat-tab",0),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.TgZ(4,"mat-card"),u.TgZ(5,"mat-card-header"),u._UZ(6,"div",3),u.TgZ(7,"mat-card-title"),u._uU(8,"New Super Stockist Form"),u.qZA(),u.qZA(),u.TgZ(9,"mat-card-content"),u.TgZ(10,"div",4),u.TgZ(11,"div",5),u.TgZ(12,"form",6),u.TgZ(13,"div",4),u.TgZ(14,"mat-form-field",5),u.TgZ(15,"mat-label"),u._uU(16,"Super Stockist Name"),u.qZA(),u._UZ(17,"input",7),u.YNc(18,S,3,2,"div",8),u.qZA(),u.TgZ(19,"mat-form-field",5),u.TgZ(20,"mat-label"),u._uU(21,"PIN"),u.qZA(),u._UZ(22,"input",9),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"div",4),u.TgZ(24,"button",10),u.NdJ("click",function(){return e.createNewSuperStockist()}),u._uU(25,"Create"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(12),u.Q6J("formGroup",e.stockistStockistMasterForm),u.xp6(6),u.Q6J("ngIf",!e.stockistStockistMasterForm.get("userName").valid&&e.stockistStockistMasterForm.get("userName").touched),u.xp6(6),u.Q6J("disabled",!e.stockistStockistMasterForm.valid))},directives:[f.SP,f.uX,p.a8,p.dk,p.kc,p.n5,p.dn,d.xw,d.Wh,d.SQ,d.yH,n._Y,n.JL,n.sg,k.KE,k.hX,Z.Nt,n.Fj,n.JJ,n.u,o.O5,g.lW,k.TO],styles:[""]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[i.Bz.forChild(v)],i.Bz]}),t})();var q=r(5480),y=r(5566),N=r(5396),T=r(1494),w=r(7441),L=r(6627);let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.ez,A,f.Nh,q.q,y.o9,p.QW,n.u5,n.UX,N.rP,T.JX,w.LD,L.Ps]]}),t})()},1068:function(t,e,r){r.d(e,{m:function(){return s}});var o=r(7716),i=r(3535);let s=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(i.e))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);