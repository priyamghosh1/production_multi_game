"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(t,e,i){i.d(e,{q:function(){return o}});var a=i(1095),n=i(9983),r=i(7716);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[a.ot,n.c]}),t})()},4582:function(t,e,i){i.r(e),i.d(e,{MasterTerminalModule:function(){return dt}});var a=i(8583),n=i(3423),r=i(1068),o=i(2340),s=i(3679),l=i(8259),m=i.n(l),c=i(7716),u=i(2088),d=i(2173),Z=i(7431),g=i(3535),p=i(1599),h=i(5620),T=i(5939),f=i(3738),A=i(5618),q=i(8295),x=i(9983),b=i(7441),v=i(1095),k=i(1494),U=i(6640),I=i(2458),_=i(8030),N=i(6627),S=i(5396),w=i(4981);function J(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(2);c.xp6(1),c.hij("Minimum length of name is ",t.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function F(t,e){if(1&t&&(c.TgZ(0,"div",53),c.YNc(1,J,2,1,"mat-error",54),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.minlength)}}function L(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"mat-option",55),c.NdJ("blur",function(){const e=c.CHM(t).$implicit;return c.oxw().selectSuperStockist(e)}),c._uU(1),c.qZA()}if(2&t){const t=e.$implicit;c.Q6J("value",t.userId),c.xp6(1),c.hij(" ",t.userName," ")}}function y(t,e){if(1&t&&(c.TgZ(0,"mat-option",56),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.id),c.xp6(1),c.hij(" ",t.slab_status," ")}}function C(t,e){if(1&t&&(c.TgZ(0,"mat-option",56),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.userId),c.xp6(1),c.hij(" ",t.userName," ")}}function Q(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"button",61),c.NdJ("click",function(){c.CHM(t);const e=c.oxw().$implicit;return c.oxw().approveLogin(e)}),c._uU(1,"Approve"),c.qZA()}}function B(t,e){1&t&&(c.TgZ(0,"label"),c._uU(1,"Approved"),c.qZA())}function M(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr",57),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.TgZ(13,"td"),c._uU(14),c.qZA(),c.TgZ(15,"td"),c.YNc(16,Q,2,0,"button",58),c.YNc(17,B,2,0,"label",54),c.qZA(),c.TgZ(18,"td"),c.TgZ(19,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().updateBlock(e.terminalId)}),c.qZA(),c.qZA(),c.TgZ(20,"td"),c.TgZ(21,"i",60),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().editTerminal(e)}),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,i=e.index,a=c.oxw();c.Q6J("ngStyle",a.getBackgroundColor(i)),c.xp6(2),c.Oqu(i+1),c.xp6(2),c.Oqu(t.terminalName),c.xp6(2),c.Oqu(t.password),c.xp6(2),c.Oqu(t.commission),c.xp6(2),c.Oqu(t.balance),c.xp6(2),c.Oqu(t.superStockist.userName),c.xp6(2),c.Oqu(t.stockist.userName),c.xp6(2),c.Q6J("ngIf",1==t.loginActivate),c.xp6(1),c.Q6J("ngIf",2==t.loginActivate),c.xp6(2),c.Q6J("checked",1==t.blocked)}}function Y(t,e){if(1&t&&(c.TgZ(0,"mat-option",56),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.terminalId),c.xp6(1),c.hij(" ",t.pin," ")}}function O(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Name"),c.qZA(),c._UZ(3,"input",63),c.TgZ(4,"mat-icon",64),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.terminalName)}}function P(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Current balance"),c.qZA(),c._UZ(3,"input",65),c.TgZ(4,"mat-icon",64),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.balance)}}function D(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Stockist owner"),c.qZA(),c._UZ(3,"input",63),c.TgZ(4,"mat-icon",64),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.userName)}}function R(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Stockist balance"),c.qZA(),c._UZ(3,"input",65),c.TgZ(4,"mat-icon",64),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.balance)}}function j(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,D,6,1,"mat-form-field",38),c.YNc(2,R,6,1,"mat-form-field",38),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal),c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function V(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(3);c.xp6(1),c.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function $(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",67),c.TgZ(1,"mat-label"),c._uU(2,"Recharge amount"),c.qZA(),c._UZ(3,"input",68),c.TgZ(4,"mat-icon",64),c._uU(5," money"),c.qZA(),c.YNc(6,V,2,1,"mat-error",54),c.qZA()),2&t){const t=c.oxw(2);c.xp6(6),c.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function E(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,$,7,1,"mat-form-field",66),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function G(t,e){if(1&t&&(c.TgZ(0,"mat-option",56),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t.terminalId),c.xp6(1),c.hij(" ",t.pin," ")}}function H(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Name"),c.qZA(),c._UZ(3,"input",63),c.TgZ(4,"mat-icon",64),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.terminalName)}}function X(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Current balance"),c.qZA(),c._UZ(3,"input",65),c.TgZ(4,"mat-icon",64),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.Q6J("value",t.selectedTerminal.balance)}}function z(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Stockist owner"),c.qZA(),c._UZ(3,"input",63),c.TgZ(4,"mat-icon",64),c._uU(5,"person_pin"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.userName)}}function W(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",62),c.TgZ(1,"mat-label"),c._uU(2,"Stockist balance"),c.qZA(),c._UZ(3,"input",65),c.TgZ(4,"mat-icon",64),c._uU(5,"account_balance_wallet"),c.qZA(),c.qZA()),2&t){const t=c.oxw(2);c.xp6(3),c.Q6J("value",t.selectedTerminal.stockist.balance)}}function K(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,z,6,1,"mat-form-field",38),c.YNc(2,W,6,1,"mat-form-field",38),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal),c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function tt(t,e){if(1&t&&(c.TgZ(0,"mat-error"),c._uU(1),c.qZA()),2&t){const t=c.oxw(3);c.xp6(1),c.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function et(t,e){if(1&t&&(c.TgZ(0,"mat-form-field",67),c.TgZ(1,"mat-label"),c._uU(2,"Recharge amount"),c.qZA(),c._UZ(3,"input",68),c.TgZ(4,"mat-icon",64),c._uU(5," money"),c.qZA(),c.YNc(6,tt,2,1,"mat-error",54),c.qZA()),2&t){const t=c.oxw(2);c.xp6(6),c.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function it(t,e){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,et,7,1,"mat-form-field",66),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngIf",t.selectedTerminal)}}function at(t,e){if(1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.qZA(),c.TgZ(13,"td"),c._uU(14),c.qZA(),c.qZA()),2&t){const t=e.$implicit,i=e.index;c.xp6(2),c.Oqu(i+1),c.xp6(2),c.Oqu(t.rechargedTo.userName),c.xp6(2),c.Oqu(t.rechargedby.userName),c.xp6(2),c.Oqu(t.oldAmount),c.xp6(2),c.Oqu(t.rechargedAmount),c.xp6(2),c.Oqu(t.newAmount),c.xp6(2),c.Oqu(t.dateAndTime)}}function nt(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",51),c._uU(2),c.qZA(),c.TgZ(3,"td",51),c._uU(4),c.qZA(),c.TgZ(5,"td",51),c.TgZ(6,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().gamePermissionUpdate(1,e.terminalId)}),c.qZA(),c.qZA(),c.TgZ(7,"td",51),c.TgZ(8,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().gamePermissionUpdate(2,e.terminalId)}),c.qZA(),c.qZA(),c.TgZ(9,"td",51),c.TgZ(10,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().gamePermissionUpdate(3,e.terminalId)}),c.qZA(),c.qZA(),c.TgZ(11,"td",51),c.TgZ(12,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().gamePermissionUpdate(4,e.terminalId)}),c.qZA(),c.qZA(),c.TgZ(13,"td",51),c.TgZ(14,"input",59),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().gamePermissionUpdate(5,e.terminalId)}),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit,i=e.index;c.xp6(2),c.Oqu(i+1),c.xp6(2),c.Oqu(t.terminalName),c.xp6(2),c.Q6J("checked",1==t.gamePermission.game1),c.xp6(2),c.Q6J("checked",1==t.gamePermission.game2),c.xp6(2),c.Q6J("checked",1==t.gamePermission.game3),c.xp6(2),c.Q6J("checked",1==t.gamePermission.game4),c.xp6(2),c.Q6J("checked",1==t.gamePermission.game5)}}function rt(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"div",69),c.TgZ(1,"div",70),c.TgZ(2,"mat-slide-toggle",71),c.NdJ("change",function(){c.CHM(t);const e=c.oxw();return e.showDevArea=!e.showDevArea}),c._uU(3),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=c.oxw();c.xp6(3),c.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function ot(t,e){if(1&t&&(c.TgZ(0,"div",69),c.TgZ(1,"div",72),c.TgZ(2,"pre"),c._uU(3),c._uU(4),c.ALo(5,"json"),c._uU(6,"\n      "),c.qZA(),c.qZA(),c._UZ(7,"div",70),c.qZA()),2&t){const t=c.oxw();c.xp6(3),c.hij("        ",t.terminalLimitForm.valid,"\n        "),c.xp6(1),c.hij("\n        terminalForm = ",c.lcZ(5,2,t.terminalMasterForm.value),"\n")}}function st(t,e,i){return(t<e?-1:1)*(i?1:-1)}const lt=[{path:"",canActivate:[r.m],component:(()=>{class t{constructor(t,e,i,a,n,r){this.masterTerminalService=t,this.masterStockistService=e,this.transactionReportService=i,this.authService=a,this.masterSuperStockistService=n,this.commonService=r,this.isProduction=o.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.payoutSlabs=[],this.superStockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.rechargedToID=null,this.terminalFilter=null,this.transactionData=[],this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required]),payoutSlabId:new s.NI(null,[s.kI.required]),superStockistId:new s.NI(null,[s.kI.required]),pin:new s.NI(null,[s.kI.required]),commission:new s.NI(null,[s.kI.required,s.kI.max(100)])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])}),this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(t=>{this.user=t})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(t=>{this.terminals=t,this.sortedTerminalList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(t=>{this.superStockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(t=>{this.payoutSlabs=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t})}updateBlock(t){this.masterTerminalService.updateBlock(t).subscribe()}getTransaction(){this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(t=>{this.transactionData=t.data})}onTerminalSelect(t){this.selectedTerminal=this.terminals.find(e=>e.terminalId===t.value),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}checkPinValidation(){this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(t=>{0===t.success?(m().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0,this.terminalMasterForm.patchValue({terminalName:null})):this.pinCheckValidator=!1})}approveLogin(t){this.masterTerminalService.loginApprove(t.terminalId).subscribe()}gamePermissionUpdate(t,e){this.masterTerminalService.gamePermission(t,e).subscribe()}editTerminal(t){this.terminalMasterForm.patchValue({id:t.terminalId,terminalName:t.terminalName,stockistId:t.stockistId,superStockistId:t.superStockistId,payoutSlabId:t.payoutSlabId,pin:t.password,commission:t.commission}),this.isTerminalUpdatAble=!0}refreshTerminalList(){this.masterTerminalService.getAllUpdatedTerminals()}updateTerminal(){m().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.updateTerminal({terminalId:this.terminalMasterForm.value.id,terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,pin:this.terminalMasterForm.value.pin,commission:this.terminalMasterForm.value.commission,userId:this.user.userId}).subscribe(t=>{1===t.success?(this.sortedTerminalList[this.highLightedRowIndex]=t.data,this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}selectSuperStockist(t){this.terminalMasterForm.patchValue({superStockistId:t.superStockistId}),this.terminalMasterForm.value.superStockistId=t.superStockistId}createNewTerminal(){m().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveNewTerminal({terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,pin:this.terminalMasterForm.value.pin,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,createdBy:this.user.userId,commission:this.terminalMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.highLightedRowIndex=0,this.terminalMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterTerminalForm(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}sortData(t){const e=this.terminals.slice();this.sortedTerminalList=t.active&&""!==t.direction?e.sort((e,i)=>{const a="asc"===t.direction;switch(t.active){case"terminalName":return st(e.terminalName,i.terminalName,a);case"stockistName":return st(e.stockist.userName,i.stockist.userName,a);case"balance":return st(e.balance,i.balance,a);default:return 0}}):e}rechargeToTerminal(){parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.terminalLimitForm.value.amount)>parseInt(String(this.selectedTerminal.stockist.balance))?m().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.authService.setUserBalanceBy(this.user.balance-this.terminalLimitForm.value.amount),this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}adjustPointToTerminal(){parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.terminalLimitForm.value.amount)>parseInt(String(this.selectedTerminal.stockist.balance))?m().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:-this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.authService.setUserBalanceBy(this.user.balance-this.terminalLimitForm.value.amount),this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(u.S),c.Y36(d.E),c.Y36(Z.z),c.Y36(g.e),c.Y36(p.Q),c.Y36(h.v))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-master-terminal"]],decls:209,vars:32,consts:[["label","Create terminal"],[1,"flex-row","mt-2"],[1,""],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","8",1,"text-center"],["scope","colgroup","colspan","4",1,"text-center"],["mat-button","","color","primary",3,"click"],[1,"material-icons"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Adjust Point"],["label","Terminal Tranaction"],["fxFlex","60"],["bindLabel","pin","bindValue","terminalId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[4,"ngFor","ngForOf"],["label","Game Allocation"],["appearance","fill",1,"example-full-width","col-5"],["matInput","","placeholder","Terminal Name",3,"ngModel","ngModelChange"],[1,"table","table-bordered","col-8"],["scope","col"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],["mat-button","","color","primary","style","border: black solid 1px",3,"click",4,"ngIf"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],["mat-button","","color","primary",2,"border","black solid 1px",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(c.TgZ(0,"mat-tab-group"),c.TgZ(1,"mat-tab",0),c.TgZ(2,"div",1),c.TgZ(3,"div",2),c.TgZ(4,"mat-card"),c.TgZ(5,"mat-card-header"),c._UZ(6,"div",3),c.TgZ(7,"mat-card-title"),c._uU(8,"New Terminal Form"),c.qZA(),c.qZA(),c.TgZ(9,"mat-card-content"),c.TgZ(10,"div",4),c.TgZ(11,"div",5),c.TgZ(12,"form",6),c.TgZ(13,"div",4),c.TgZ(14,"mat-form-field",5),c.TgZ(15,"mat-label"),c._uU(16,"Terminal Name"),c.qZA(),c.TgZ(17,"input",7),c.NdJ("change",function(){return e.checkPinValidation()}),c.qZA(),c.YNc(18,F,2,1,"div",8),c.qZA(),c.TgZ(19,"mat-form-field",5),c.TgZ(20,"mat-label"),c._uU(21,"PIN"),c.qZA(),c._UZ(22,"input",9),c.qZA(),c.qZA(),c.TgZ(23,"div",4),c.TgZ(24,"mat-form-field",5),c.TgZ(25,"mat-label"),c._uU(26,"Stockist"),c.qZA(),c.TgZ(27,"mat-select",10),c.YNc(28,L,2,2,"mat-option",11),c.qZA(),c.qZA(),c.TgZ(29,"mat-form-field",5),c.TgZ(30,"mat-label"),c._uU(31,"Payout Slab"),c.qZA(),c.TgZ(32,"mat-select",12),c.YNc(33,y,2,2,"mat-option",13),c.qZA(),c.qZA(),c.TgZ(34,"mat-form-field",5),c.TgZ(35,"mat-label"),c._uU(36,"Super Stockist"),c.qZA(),c.TgZ(37,"mat-select",14),c.YNc(38,C,2,2,"mat-option",13),c.qZA(),c.qZA(),c.qZA(),c.TgZ(39,"div",4),c.TgZ(40,"div",15),c.TgZ(41,"mat-form-field",5),c.TgZ(42,"mat-label"),c._uU(43,"Commission"),c.qZA(),c._UZ(44,"input",16),c.qZA(),c.qZA(),c.TgZ(45,"label",17),c._uU(46,"(Max: 100)"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(47,"div",4),c.TgZ(48,"button",18),c.NdJ("click",function(){return e.createNewTerminal()}),c._uU(49,"Create"),c.qZA(),c.TgZ(50,"button",18),c.NdJ("click",function(){return e.updateTerminal()}),c._uU(51,"Update"),c.qZA(),c.TgZ(52,"button",19),c.NdJ("click",function(){return e.clearMasterTerminalForm()}),c._uU(53,"clear"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(54,"div",20),c.TgZ(55,"table",21),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(56,"thead"),c.TgZ(57,"tr"),c.TgZ(58,"th",22),c._uU(59,"Terminal List"),c.qZA(),c.TgZ(60,"th",23),c.TgZ(61,"button",24),c.NdJ("click",function(){return e.refreshTerminalList()}),c._uU(62," Refresh "),c.TgZ(63,"span",25),c._uU(64,"refresh"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(65,"tr"),c.TgZ(66,"th"),c._uU(67,"Id"),c.qZA(),c.TgZ(68,"th",26),c._uU(69,"Terminal name"),c.qZA(),c.TgZ(70,"th",27),c._uU(71,"Pin"),c.qZA(),c.TgZ(72,"th",28),c._uU(73,"Commission"),c.qZA(),c.TgZ(74,"th",28),c._uU(75,"Balance"),c.qZA(),c.TgZ(76,"th",29),c._uU(77,"Super Stockist"),c.qZA(),c.TgZ(78,"th",29),c._uU(79,"Stockist"),c.qZA(),c.TgZ(80,"th"),c._uU(81,"Login Approve"),c.qZA(),c.TgZ(82,"th",29),c._uU(83,"Blocked"),c.qZA(),c.TgZ(84,"th",30),c._uU(85,"Edit"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(86,"tbody"),c.YNc(87,M,22,11,"tr",31),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(88,"mat-tab",32),c.TgZ(89,"div",33),c._UZ(90,"div",34),c.TgZ(91,"div",35),c.TgZ(92,"mat-card"),c.TgZ(93,"mat-card-header"),c._UZ(94,"div",3),c.TgZ(95,"mat-card-title"),c._uU(96,"Recharge Terminal"),c.qZA(),c.qZA(),c.TgZ(97,"mat-card-content"),c.TgZ(98,"div",4),c.TgZ(99,"div",5),c.TgZ(100,"form",6),c.TgZ(101,"div",4),c.TgZ(102,"mat-form-field",36),c.TgZ(103,"mat-label"),c._uU(104,"Terminal"),c.qZA(),c.TgZ(105,"mat-select",37),c.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),c.YNc(106,Y,2,2,"mat-option",13),c.qZA(),c.qZA(),c.YNc(107,O,6,1,"mat-form-field",38),c.YNc(108,P,6,1,"mat-form-field",38),c.qZA(),c.YNc(109,j,3,2,"div",39),c.YNc(110,E,2,1,"div",39),c.TgZ(111,"div",4),c.TgZ(112,"button",40),c.NdJ("click",function(){return e.rechargeToTerminal()}),c._uU(113,"Save"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(114,"div",34),c.qZA(),c.qZA(),c.TgZ(115,"mat-tab",41),c.TgZ(116,"div",33),c._UZ(117,"div",34),c.TgZ(118,"div",35),c.TgZ(119,"mat-card"),c.TgZ(120,"mat-card-header"),c._UZ(121,"div",3),c.TgZ(122,"mat-card-title"),c._uU(123,"Recharge Terminal"),c.qZA(),c.qZA(),c.TgZ(124,"mat-card-content"),c.TgZ(125,"div",4),c.TgZ(126,"div",5),c.TgZ(127,"form",6),c.TgZ(128,"div",4),c.TgZ(129,"mat-form-field",36),c.TgZ(130,"mat-label"),c._uU(131,"Terminal"),c.qZA(),c.TgZ(132,"mat-select",37),c.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),c.YNc(133,G,2,2,"mat-option",13),c.qZA(),c.qZA(),c.YNc(134,H,6,1,"mat-form-field",38),c.YNc(135,X,6,1,"mat-form-field",38),c.qZA(),c.YNc(136,K,3,2,"div",39),c.YNc(137,it,2,1,"div",39),c.TgZ(138,"div",4),c.TgZ(139,"button",40),c.NdJ("click",function(){return e.adjustPointToTerminal()}),c._uU(140,"Save"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(141,"div",34),c.qZA(),c.qZA(),c.TgZ(142,"mat-tab",42),c.TgZ(143,"div",33),c._UZ(144,"div",34),c.TgZ(145,"div",35),c.TgZ(146,"mat-card"),c.TgZ(147,"mat-card-header"),c._UZ(148,"div",3),c.TgZ(149,"mat-card-title"),c._uU(150,"Terminal Transaction Report"),c.qZA(),c.qZA(),c.TgZ(151,"mat-card-content"),c.TgZ(152,"div",4),c.TgZ(153,"div",5),c.TgZ(154,"div",43),c.TgZ(155,"ng-select",44),c.NdJ("ngModelChange",function(t){return e.rechargedToID=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(156,"button",45),c.NdJ("click",function(){return e.getTransaction()}),c._uU(157,"Search"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c._UZ(158,"div",34),c.qZA(),c.TgZ(159,"div",20),c.TgZ(160,"table",21),c.NdJ("matSortChange",function(t){return e.sortData(t)}),c.TgZ(161,"thead"),c.TgZ(162,"tr"),c.TgZ(163,"th",23),c._uU(164,"Terminal List"),c.qZA(),c.qZA(),c.TgZ(165,"tr"),c.TgZ(166,"th"),c._uU(167,"Id"),c.qZA(),c.TgZ(168,"th",26),c._uU(169,"Recharge To"),c.qZA(),c.TgZ(170,"th",27),c._uU(171,"Recharge By"),c.qZA(),c.TgZ(172,"th",28),c._uU(173,"Old Amount"),c.qZA(),c.TgZ(174,"th",28),c._uU(175,"Recharged Amount"),c.qZA(),c.TgZ(176,"th",29),c._uU(177,"New Amount"),c.qZA(),c.TgZ(178,"th",29),c._uU(179,"Date and Time"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(180,"tbody"),c.YNc(181,at,15,7,"tr",46),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(182,"mat-tab",47),c.TgZ(183,"mat-form-field",48),c.TgZ(184,"mat-label"),c._uU(185,"Terminal Name"),c.qZA(),c.TgZ(186,"input",49),c.NdJ("ngModelChange",function(t){return e.terminalFilter=t}),c.qZA(),c.qZA(),c.TgZ(187,"table",50),c.TgZ(188,"thead"),c.TgZ(189,"tr"),c.TgZ(190,"th",51),c._uU(191,"Sl. no."),c.qZA(),c.TgZ(192,"th",51),c._uU(193,"Terminal Name"),c.qZA(),c.TgZ(194,"th",51),c._uU(195,"Triple Chance"),c.qZA(),c.TgZ(196,"th",51),c._uU(197,"12 Card"),c.qZA(),c.TgZ(198,"th",51),c._uU(199,"16 Card"),c.qZA(),c.TgZ(200,"th",51),c._uU(201,"Single"),c.qZA(),c.TgZ(202,"th",51),c._uU(203,"Double"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(204,"tbody"),c.YNc(205,nt,15,7,"tr",46),c.ALo(206,"filter"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.YNc(207,rt,4,1,"div",52),c.YNc(208,ot,8,4,"div",52)),2&t&&(c.xp6(12),c.Q6J("formGroup",e.terminalMasterForm),c.xp6(6),c.Q6J("ngIf",!e.terminalMasterForm.get("terminalName").valid&&e.terminalMasterForm.get("terminalName").touched),c.xp6(10),c.Q6J("ngForOf",e.stockists),c.xp6(5),c.Q6J("ngForOf",e.payoutSlabs),c.xp6(5),c.Q6J("ngForOf",e.superStockists),c.xp6(10),c.Q6J("disabled",!e.terminalMasterForm.valid||e.isTerminalUpdatAble||e.pinCheckValidator),c.xp6(2),c.Q6J("disabled",!e.isTerminalUpdatAble),c.xp6(37),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(13),c.Q6J("formGroup",e.terminalLimitForm),c.xp6(6),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(2),c.Q6J("disabled",!e.terminalLimitForm.valid),c.xp6(15),c.Q6J("formGroup",e.terminalLimitForm),c.xp6(6),c.Q6J("ngForOf",e.sortedTerminalList),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(1),c.Q6J("ngIf",e.selectedTerminal),c.xp6(2),c.Q6J("disabled",!e.terminalLimitForm.valid),c.xp6(16),c.Q6J("items",e.sortedTerminalList)("ngModel",e.rechargedToID),c.xp6(26),c.Q6J("ngForOf",e.transactionData),c.xp6(5),c.Q6J("ngModel",e.terminalFilter),c.xp6(19),c.Q6J("ngForOf",c.xi3(206,29,e.terminals,e.terminalFilter)),c.xp6(2),c.Q6J("ngIf",!e.isProduction),c.xp6(1),c.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[T.SP,T.uX,f.a8,f.dk,f.kc,f.n5,f.dn,A.xw,A.Wh,A.SQ,A.yH,s._Y,s.JL,s.sg,q.KE,q.hX,x.Nt,s.Fj,s.JJ,s.u,a.O5,b.gD,a.sg,v.lW,k.YE,k.nU,U.w9,s.On,q.TO,I.ey,a.PC,_.Zl,N.Hw,q.R9,S.Rr],pipes:[w.Z,a.Ts],styles:[""]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.Bz.forChild(lt)],n.Bz]}),t})();var ct=i(5480),ut=i(5566);let dt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.ez,mt,T.Nh,ct.q,ut.o9,f.QW,s.u5,s.UX,S.rP,k.JX,b.LD,N.Ps,U.A0,w.h]]}),t})()}}]);