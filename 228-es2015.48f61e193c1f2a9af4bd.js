"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[228],{5480:function(t,e,o){o.d(e,{q:function(){return a}});var n=o(1095),i=o(9983),r=o(7716);let a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[n.ot,i.c]}),t})()},6228:function(t,e,o){o.r(e),o.d(e,{PayoutSettingModule:function(){return S}});var n=o(8583),i=o(3423),r=o(1068),a=o(2340),u=o(8259),s=o.n(u),c=o(7716),p=o(2567),l=o(1841),m=o(4889);let g=(()=>{class t{constructor(t,e){this.http=t,this.errorService=e,this.BASE_API_URL=a.N.BASE_API_URL,this.gameTypes=[]}}return t.\u0275fac=function(e){return new(e||t)(c.LFG(l.eN),c.LFG(m.T))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=o(3535),Z=o(8295),T=o(3679),h=o(9983),f=o(1095);function y(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c.TgZ(12,"mat-form-field",8),c.TgZ(13,"input",9),c.NdJ("ngModelChange",function(t){return e.$implicit.payout=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(14,"td"),c.TgZ(15,"mat-form-field",8),c.TgZ(16,"input",9),c.NdJ("ngModelChange",function(t){return e.$implicit.multiplexer=t}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(17,"td"),c.TgZ(18,"div",10),c.TgZ(19,"button",11),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().updatePayout(e.gameTypeId,e.payout,e.multiplexer)}),c._uU(20,"Save"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,o=e.index;c.xp6(2),c.Oqu(o+1),c.xp6(2),c.Oqu(1!=t.gameTypeId?2!=t.gameTypeId?5!=t.gameTypeId?t.gameTypeName:"Double (Triple Chance)":"Triple (Triple Chance)":"Single (Triple Chance)"),c.xp6(2),c.Oqu(t.mrp),c.xp6(2),c.Oqu(t.winningPrice),c.xp6(2),c.Oqu(t.commission),c.xp6(3),c.Q6J("value",t.payout)("ngModel",t.payout),c.xp6(3),c.Q6J("value",t.multiplexer)("ngModel",t.multiplexer)}}const A=[{path:"",canActivate:[r.m],component:(()=>{class t{constructor(t,e,o){this.gameTypeService=t,this.payoutSettingService=e,this.authService=o,this.isProduction=a.N.production,this.showDevArea=!1,this.gameTypes=[],this.saveButton=!1,this.displayedColumns=["position","gameTypeName","mrp","winningPrice","commission","payout"],this.gameTypes=this.gameTypeService.getGameType(),this.gameTypeService.getGameTypeListener().subscribe(t=>{this.gameTypes=t})}ngOnInit(){}updatePayout(t,e,o){o>10?s().fire({position:"top-end",icon:"error",title:"Invalid multiplexer",showConfirmButton:!1,timer:3e3}):s().fire({title:"Confirmation",text:"Do you sure to update payout?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(n=>{if(n.isConfirmed){const n=[];n.push({gameTypeId:t,newPayout:e,multiplexer:o}),this.gameTypeService.updatePayout(n).subscribe(t=>{1===t.success?s().fire({position:"top-end",icon:"success",title:"Payout updated",showConfirmButton:!1,timer:1e3}):s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})}})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(p.u),c.Y36(g),c.Y36(d.e))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-payout-setting"]],decls:25,vars:1,consts:[[1,"container","pt-5"],[1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","6",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],[4,"ngFor","ngForOf"],["floatLabel","never"],["type","number","name","payout","matInput","","placeholder","payout","required","",3,"value","ngModel","ngModelChange"],[1,"offset-5"],["mat-raised-button","","color","primary","mat-stroked-button","",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"table",1),c.TgZ(2,"thead"),c.TgZ(3,"tr"),c.TgZ(4,"th",2),c._uU(5,"Set Payout"),c.qZA(),c.qZA(),c.TgZ(6,"tr"),c.TgZ(7,"th"),c._uU(8,"Sl. No."),c.qZA(),c.TgZ(9,"th",3),c._uU(10,"Game name"),c.qZA(),c.TgZ(11,"th",4),c._uU(12,"MRP"),c.qZA(),c.TgZ(13,"th",5),c._uU(14,"Winning Price"),c.qZA(),c.TgZ(15,"th",5),c._uU(16,"Commission"),c.qZA(),c.TgZ(17,"th",6),c._uU(18,"Payout"),c.qZA(),c.TgZ(19,"th",6),c._uU(20,"Multiplexer"),c.qZA(),c.TgZ(21,"th",6),c._uU(22,"Save"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(23,"tbody"),c.YNc(24,y,21,9,"tr",7),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(24),c.Q6J("ngForOf",e.gameTypes))},directives:[n.sg,Z.KE,T.wV,h.Nt,T.Fj,T.Q7,T.JJ,T.On,f.lW],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.Bz.forChild(A)],i.Bz]}),t})();var v=o(2789),b=o(5396),x=o(7441),C=o(5480);let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,q,v.p0,b.rP,x.LD,T.u5,T.UX,h.c,C.q]]}),t})()}}]);