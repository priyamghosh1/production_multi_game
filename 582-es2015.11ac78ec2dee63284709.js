"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(t,e,i){i.d(e,{q:function(){return o}});var a=i(1095),n=i(9983),r=i(7716);let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[a.ot,n.c]}),t})()},4582:function(t,e,i){i.r(e),i.d(e,{MasterTerminalModule:function(){return ut}});var a=i(8583),n=i(3423),r=i(1068),o=i(2340),s=i(3679),l=i(8259),c=i.n(l),m=i(7716),u=i(2088),d=i(2173),Z=i(7431),g=i(3535),p=i(1599),h=i(5620),T=i(5939),f=i(3738),A=i(5618),q=i(8295),x=i(9983),b=i(7441),v=i(1095),k=i(1494),U=i(6640),I=i(2458),_=i(8030),S=i(6627),N=i(5396),w=i(4981);function J(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){const t=m.oxw(2);m.xp6(1),m.hij("Minimum length of name is ",t.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function y(t,e){if(1&t&&(m.TgZ(0,"div",53),m.YNc(1,J,2,1,"mat-error",54),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.terminalMasterForm.get("terminalName").errors.minlength)}}function F(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"mat-option",55),m.NdJ("blur",function(){const e=m.CHM(t).$implicit;return m.oxw().selectSuperStockist(e)}),m._uU(1),m.qZA()}if(2&t){const t=e.$implicit;m.Q6J("value",t.userId),m.xp6(1),m.hij(" ",t.userName," ")}}function L(t,e){if(1&t&&(m.TgZ(0,"mat-option",56),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.id),m.xp6(1),m.hij(" ",t.slab_status," ")}}function C(t,e){if(1&t&&(m.TgZ(0,"mat-option",56),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.userId),m.xp6(1),m.hij(" ",t.userName," ")}}function Q(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"button",61),m.NdJ("click",function(){m.CHM(t);const e=m.oxw().$implicit;return m.oxw().approveLogin(e)}),m._uU(1,"Approve"),m.qZA()}}function B(t,e){1&t&&(m.TgZ(0,"label"),m._uU(1,"Approved"),m.qZA())}function M(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"tr",57),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.TgZ(15,"td"),m.YNc(16,Q,2,0,"button",58),m.YNc(17,B,2,0,"label",54),m.qZA(),m.TgZ(18,"td"),m.TgZ(19,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().updateBlock(e.terminalId)}),m.qZA(),m.qZA(),m.TgZ(20,"td"),m.TgZ(21,"i",60),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().editTerminal(e)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=e.$implicit,i=e.index,a=m.oxw();m.Q6J("ngStyle",a.getBackgroundColor(i)),m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(t.terminalName),m.xp6(2),m.Oqu(t.password),m.xp6(2),m.Oqu(t.commission),m.xp6(2),m.Oqu(t.balance),m.xp6(2),m.Oqu(t.superStockist.userName),m.xp6(2),m.Oqu(t.stockist.userName),m.xp6(2),m.Q6J("ngIf",1==t.loginActivate),m.xp6(1),m.Q6J("ngIf",2==t.loginActivate),m.xp6(2),m.Q6J("checked",1==t.blocked)}}function Y(t,e){if(1&t&&(m.TgZ(0,"mat-option",56),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.terminalId),m.xp6(1),m.hij(" ",t.pin," ")}}function O(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",63),m.TgZ(4,"mat-icon",64),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.terminalName)}}function P(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",65),m.TgZ(4,"mat-icon",64),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.balance)}}function D(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Stockist owner"),m.qZA(),m._UZ(3,"input",63),m.TgZ(4,"mat-icon",64),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.userName)}}function R(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Stockist balance"),m.qZA(),m._UZ(3,"input",65),m.TgZ(4,"mat-icon",64),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.balance)}}function j(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,D,6,1,"mat-form-field",38),m.YNc(2,R,6,1,"mat-form-field",38),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal),m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function V(t,e){if(1&t&&(m.TgZ(0,"mat-error"),m._uU(1),m.qZA()),2&t){const t=m.oxw(3);m.xp6(1),m.hij(" Amount should not exceed ",t.terminalLimitForm.controls.amount.errors.max.max," ")}}function $(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",67),m.TgZ(1,"mat-label"),m._uU(2,"Recharge amount"),m.qZA(),m._UZ(3,"input",68),m.TgZ(4,"mat-icon",64),m._uU(5," money"),m.qZA(),m.YNc(6,V,2,1,"mat-error",54),m.qZA()),2&t){const t=m.oxw(2);m.xp6(6),m.Q6J("ngIf",t.terminalLimitForm.get("amount").hasError("max"))}}function E(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,$,7,1,"mat-form-field",66),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function G(t,e){if(1&t&&(m.TgZ(0,"mat-option",56),m._uU(1),m.qZA()),2&t){const t=e.$implicit;m.Q6J("value",t.terminalId),m.xp6(1),m.hij(" ",t.pin," ")}}function H(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Name"),m.qZA(),m._UZ(3,"input",63),m.TgZ(4,"mat-icon",64),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.terminalName)}}function X(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Current balance"),m.qZA(),m._UZ(3,"input",65),m.TgZ(4,"mat-icon",64),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.Q6J("value",t.selectedTerminal.balance)}}function z(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Stockist owner"),m.qZA(),m._UZ(3,"input",63),m.TgZ(4,"mat-icon",64),m._uU(5,"person_pin"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.userName)}}function W(t,e){if(1&t&&(m.TgZ(0,"mat-form-field",62),m.TgZ(1,"mat-label"),m._uU(2,"Stockist balance"),m.qZA(),m._UZ(3,"input",65),m.TgZ(4,"mat-icon",64),m._uU(5,"account_balance_wallet"),m.qZA(),m.qZA()),2&t){const t=m.oxw(2);m.xp6(3),m.Q6J("value",t.selectedTerminal.stockist.balance)}}function K(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,z,6,1,"mat-form-field",38),m.YNc(2,W,6,1,"mat-form-field",38),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal),m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function tt(t,e){1&t&&(m.TgZ(0,"mat-form-field",67),m.TgZ(1,"mat-label"),m._uU(2,"Recharge amount"),m.qZA(),m._UZ(3,"input",68),m.TgZ(4,"mat-icon",64),m._uU(5," money"),m.qZA(),m.qZA())}function et(t,e){if(1&t&&(m.TgZ(0,"div",4),m.YNc(1,tt,6,0,"mat-form-field",66),m.qZA()),2&t){const t=m.oxw();m.xp6(1),m.Q6J("ngIf",t.selectedTerminal)}}function it(t,e){if(1&t&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.qZA()),2&t){const t=e.$implicit,i=e.index;m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(t.rechargedTo.userName),m.xp6(2),m.Oqu(t.rechargedby.userName),m.xp6(2),m.Oqu(t.oldAmount),m.xp6(2),m.Oqu(t.rechargedAmount),m.xp6(2),m.Oqu(t.newAmount),m.xp6(2),m.Oqu(t.dateAndTime)}}function at(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"tr"),m.TgZ(1,"td",51),m._uU(2),m.qZA(),m.TgZ(3,"td",51),m._uU(4),m.qZA(),m.TgZ(5,"td",51),m.TgZ(6,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().gamePermissionUpdate(1,e.terminalId)}),m.qZA(),m.qZA(),m.TgZ(7,"td",51),m.TgZ(8,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().gamePermissionUpdate(2,e.terminalId)}),m.qZA(),m.qZA(),m.TgZ(9,"td",51),m.TgZ(10,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().gamePermissionUpdate(3,e.terminalId)}),m.qZA(),m.qZA(),m.TgZ(11,"td",51),m.TgZ(12,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().gamePermissionUpdate(4,e.terminalId)}),m.qZA(),m.qZA(),m.TgZ(13,"td",51),m.TgZ(14,"input",59),m.NdJ("click",function(){const e=m.CHM(t).$implicit;return m.oxw().gamePermissionUpdate(5,e.terminalId)}),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=e.$implicit,i=e.index;m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(t.terminalName),m.xp6(2),m.Q6J("checked",1==t.gamePermission.game1),m.xp6(2),m.Q6J("checked",1==t.gamePermission.game2),m.xp6(2),m.Q6J("checked",1==t.gamePermission.game3),m.xp6(2),m.Q6J("checked",1==t.gamePermission.game4),m.xp6(2),m.Q6J("checked",1==t.gamePermission.game5)}}function nt(t,e){if(1&t){const t=m.EpF();m.TgZ(0,"div",69),m.TgZ(1,"div",70),m.TgZ(2,"mat-slide-toggle",71),m.NdJ("change",function(){m.CHM(t);const e=m.oxw();return e.showDevArea=!e.showDevArea}),m._uU(3),m.qZA(),m.qZA(),m.qZA()}if(2&t){const t=m.oxw();m.xp6(3),m.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function rt(t,e){if(1&t&&(m.TgZ(0,"div",69),m.TgZ(1,"div",72),m.TgZ(2,"pre"),m._uU(3),m._uU(4),m.ALo(5,"json"),m._uU(6,"\n      "),m.qZA(),m.qZA(),m._UZ(7,"div",70),m.qZA()),2&t){const t=m.oxw();m.xp6(3),m.hij("        ",t.terminalLimitForm.valid,"\n        "),m.xp6(1),m.hij("\n        terminalForm = ",m.lcZ(5,2,t.terminalMasterForm.value),"\n")}}function ot(t,e,i){return(t<e?-1:1)*(i?1:-1)}const st=[{path:"",canActivate:[r.m],component:(()=>{class t{constructor(t,e,i,a,n,r){this.masterTerminalService=t,this.masterStockistService=e,this.transactionReportService=i,this.authService=a,this.masterSuperStockistService=n,this.commonService=r,this.isProduction=o.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.payoutSlabs=[],this.superStockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.rechargedToID=null,this.terminalFilter=null,this.transactionData=[],this.terminalMasterForm=new s.cw({id:new s.NI(null),terminalName:new s.NI(null,[s.kI.required,s.kI.minLength(2)]),stockistId:new s.NI(null,[s.kI.required]),payoutSlabId:new s.NI(null,[s.kI.required]),superStockistId:new s.NI(null,[s.kI.required]),pin:new s.NI(null,[s.kI.required]),commission:new s.NI(null,[s.kI.required,s.kI.max(100)])}),this.terminalLimitForm=new s.cw({beneficiaryUid:new s.NI(null,[s.kI.required]),amount:new s.NI(null,[s.kI.required,s.kI.max(0)])}),this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(t=>{this.user=t})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(t=>{this.terminals=t,this.sortedTerminalList=t}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(t=>{this.superStockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(t=>{this.payoutSlabs=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t})}updateBlock(t){this.masterTerminalService.updateBlock(t).subscribe()}getTransaction(){this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(t=>{this.transactionData=t.data})}onTerminalSelect(t){this.selectedTerminal=this.terminals.find(e=>e.terminalId===t.value),this.terminalLimitForm.controls.amount.setValidators([s.kI.max(this.selectedTerminal.stockist.balance)])}checkPinValidation(){this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(t=>{0===t.success?(c().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0,this.terminalMasterForm.patchValue({terminalName:null})):this.pinCheckValidator=!1})}approveLogin(t){this.masterTerminalService.loginApprove(t.terminalId).subscribe()}gamePermissionUpdate(t,e){this.masterTerminalService.gamePermission(t,e).subscribe()}editTerminal(t){this.terminalMasterForm.patchValue({id:t.terminalId,terminalName:t.terminalName,stockistId:t.stockistId,superStockistId:t.superStockistId,payoutSlabId:t.payoutSlabId,pin:t.password,commission:t.commission}),this.isTerminalUpdatAble=!0}refreshTerminalList(){this.masterTerminalService.getAllUpdatedTerminals()}updateTerminal(){c().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.updateTerminal({terminalId:this.terminalMasterForm.value.id,terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,pin:this.terminalMasterForm.value.pin,commission:this.terminalMasterForm.value.commission,userId:this.user.userId}).subscribe(t=>{1===t.success?(this.sortedTerminalList[this.highLightedRowIndex]=t.data,this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}selectSuperStockist(t){this.terminalMasterForm.patchValue({superStockistId:t.superStockistId}),this.terminalMasterForm.value.superStockistId=t.superStockistId}createNewTerminal(){c().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveNewTerminal({terminalName:this.terminalMasterForm.value.terminalName,stockistId:this.terminalMasterForm.value.stockistId,pin:this.terminalMasterForm.value.pin,superStockistId:this.terminalMasterForm.value.superStockistId,payoutSlabId:this.terminalMasterForm.value.payoutSlabId,createdBy:this.user.userId,commission:this.terminalMasterForm.value.commission}).subscribe(t=>{1===t.success?(this.highLightedRowIndex=0,this.terminalMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},5e3),c().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterTerminalForm(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}sortData(t){const e=this.terminals.slice();this.sortedTerminalList=t.active&&""!==t.direction?e.sort((e,i)=>{const a="asc"===t.direction;switch(t.active){case"terminalName":return ot(e.terminalName,i.terminalName,a);case"stockistName":return ot(e.stockist.userName,i.stockist.userName,a);case"balance":return ot(e.balance,i.balance,a);default:return 0}}):e}rechargeToTerminal(){parseInt(this.terminalLimitForm.value.amount)<0?c().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.terminalLimitForm.value.amount)>parseInt(String(this.selectedTerminal.stockist.balance))?c().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.authService.setUserBalanceBy(this.user.balance-this.terminalLimitForm.value.amount),this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}adjustPointToTerminal(){parseInt(this.terminalLimitForm.value.amount)<0?c().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.terminalLimitForm.value.amount)>parseInt(String(this.selectedTerminal.balance))?c().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):c().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterTerminalService.saveTerminalBalance({beneficiaryUid:this.terminalLimitForm.value.beneficiaryUid,stockistId:this.selectedTerminal.stockist.userId,amount:-this.terminalLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.terminals.findIndex(t=>t.terminalId===e.terminalId);this.terminals[i].balance=e.balance,this.terminals[i].stockist.balance=e.stockist.balance,this.sortedTerminalList[i].balance=e.balance,this.sortedTerminalList[i].stockist.balance=e.stockist.balance,this.authService.setUserBalanceBy(this.user.balance-this.terminalLimitForm.value.amount),this.highLightedRowIndex=i,this.terminalLimitForm.controls.amount.setValidators([s.kI.max(e.stockist.balance)]),this.terminalLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),c().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else c().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{console.log("data saving error",t)})})}}return t.\u0275fac=function(e){return new(e||t)(m.Y36(u.S),m.Y36(d.E),m.Y36(Z.z),m.Y36(g.e),m.Y36(p.Q),m.Y36(h.v))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-master-terminal"]],decls:209,vars:31,consts:[["label","Create terminal"],[1,"flex-row","mt-2"],[1,""],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","8",1,"text-center"],["scope","colgroup","colspan","4",1,"text-center"],["mat-button","","color","primary",3,"click"],[1,"material-icons"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Adjust Point"],["label","Terminal Tranaction"],["fxFlex","60"],["bindLabel","pin","bindValue","terminalId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[4,"ngFor","ngForOf"],["label","Game Allocation"],["appearance","fill",1,"example-full-width","col-5"],["matInput","","placeholder","Terminal Name",3,"ngModel","ngModelChange"],[1,"table","table-bordered","col-8"],["scope","col"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],["mat-button","","color","primary","style","border: black solid 1px",3,"click",4,"ngIf"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],["mat-button","","color","primary",2,"border","black solid 1px",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(m.TgZ(0,"mat-tab-group"),m.TgZ(1,"mat-tab",0),m.TgZ(2,"div",1),m.TgZ(3,"div",2),m.TgZ(4,"mat-card"),m.TgZ(5,"mat-card-header"),m._UZ(6,"div",3),m.TgZ(7,"mat-card-title"),m._uU(8,"New Terminal Form"),m.qZA(),m.qZA(),m.TgZ(9,"mat-card-content"),m.TgZ(10,"div",4),m.TgZ(11,"div",5),m.TgZ(12,"form",6),m.TgZ(13,"div",4),m.TgZ(14,"mat-form-field",5),m.TgZ(15,"mat-label"),m._uU(16,"Terminal Name"),m.qZA(),m.TgZ(17,"input",7),m.NdJ("change",function(){return e.checkPinValidation()}),m.qZA(),m.YNc(18,y,2,1,"div",8),m.qZA(),m.TgZ(19,"mat-form-field",5),m.TgZ(20,"mat-label"),m._uU(21,"PIN"),m.qZA(),m._UZ(22,"input",9),m.qZA(),m.qZA(),m.TgZ(23,"div",4),m.TgZ(24,"mat-form-field",5),m.TgZ(25,"mat-label"),m._uU(26,"Stockist"),m.qZA(),m.TgZ(27,"mat-select",10),m.YNc(28,F,2,2,"mat-option",11),m.qZA(),m.qZA(),m.TgZ(29,"mat-form-field",5),m.TgZ(30,"mat-label"),m._uU(31,"Payout Slab"),m.qZA(),m.TgZ(32,"mat-select",12),m.YNc(33,L,2,2,"mat-option",13),m.qZA(),m.qZA(),m.TgZ(34,"mat-form-field",5),m.TgZ(35,"mat-label"),m._uU(36,"Super Stockist"),m.qZA(),m.TgZ(37,"mat-select",14),m.YNc(38,C,2,2,"mat-option",13),m.qZA(),m.qZA(),m.qZA(),m.TgZ(39,"div",4),m.TgZ(40,"div",15),m.TgZ(41,"mat-form-field",5),m.TgZ(42,"mat-label"),m._uU(43,"Commission"),m.qZA(),m._UZ(44,"input",16),m.qZA(),m.qZA(),m.TgZ(45,"label",17),m._uU(46,"(Max: 100)"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(47,"div",4),m.TgZ(48,"button",18),m.NdJ("click",function(){return e.createNewTerminal()}),m._uU(49,"Create"),m.qZA(),m.TgZ(50,"button",18),m.NdJ("click",function(){return e.updateTerminal()}),m._uU(51,"Update"),m.qZA(),m.TgZ(52,"button",19),m.NdJ("click",function(){return e.clearMasterTerminalForm()}),m._uU(53,"clear"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(54,"div",20),m.TgZ(55,"table",21),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(56,"thead"),m.TgZ(57,"tr"),m.TgZ(58,"th",22),m._uU(59,"Terminal List"),m.qZA(),m.TgZ(60,"th",23),m.TgZ(61,"button",24),m.NdJ("click",function(){return e.refreshTerminalList()}),m._uU(62," Refresh "),m.TgZ(63,"span",25),m._uU(64,"refresh"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(65,"tr"),m.TgZ(66,"th"),m._uU(67,"Id"),m.qZA(),m.TgZ(68,"th",26),m._uU(69,"Terminal name"),m.qZA(),m.TgZ(70,"th",27),m._uU(71,"Pin"),m.qZA(),m.TgZ(72,"th",28),m._uU(73,"Commission"),m.qZA(),m.TgZ(74,"th",28),m._uU(75,"Balance"),m.qZA(),m.TgZ(76,"th",29),m._uU(77,"Super Stockist"),m.qZA(),m.TgZ(78,"th",29),m._uU(79,"Stockist"),m.qZA(),m.TgZ(80,"th"),m._uU(81,"Login Approve"),m.qZA(),m.TgZ(82,"th",29),m._uU(83,"Blocked"),m.qZA(),m.TgZ(84,"th",30),m._uU(85,"Edit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(86,"tbody"),m.YNc(87,M,22,11,"tr",31),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(88,"mat-tab",32),m.TgZ(89,"div",33),m._UZ(90,"div",34),m.TgZ(91,"div",35),m.TgZ(92,"mat-card"),m.TgZ(93,"mat-card-header"),m._UZ(94,"div",3),m.TgZ(95,"mat-card-title"),m._uU(96,"Recharge Terminal"),m.qZA(),m.qZA(),m.TgZ(97,"mat-card-content"),m.TgZ(98,"div",4),m.TgZ(99,"div",5),m.TgZ(100,"form",6),m.TgZ(101,"div",4),m.TgZ(102,"mat-form-field",36),m.TgZ(103,"mat-label"),m._uU(104,"Terminal"),m.qZA(),m.TgZ(105,"mat-select",37),m.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),m.YNc(106,Y,2,2,"mat-option",13),m.qZA(),m.qZA(),m.YNc(107,O,6,1,"mat-form-field",38),m.YNc(108,P,6,1,"mat-form-field",38),m.qZA(),m.YNc(109,j,3,2,"div",39),m.YNc(110,E,2,1,"div",39),m.TgZ(111,"div",4),m.TgZ(112,"button",40),m.NdJ("click",function(){return e.rechargeToTerminal()}),m._uU(113,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(114,"div",34),m.qZA(),m.qZA(),m.TgZ(115,"mat-tab",41),m.TgZ(116,"div",33),m._UZ(117,"div",34),m.TgZ(118,"div",35),m.TgZ(119,"mat-card"),m.TgZ(120,"mat-card-header"),m._UZ(121,"div",3),m.TgZ(122,"mat-card-title"),m._uU(123,"Recharge Terminal"),m.qZA(),m.qZA(),m.TgZ(124,"mat-card-content"),m.TgZ(125,"div",4),m.TgZ(126,"div",5),m.TgZ(127,"form",6),m.TgZ(128,"div",4),m.TgZ(129,"mat-form-field",36),m.TgZ(130,"mat-label"),m._uU(131,"Terminal"),m.qZA(),m.TgZ(132,"mat-select",37),m.NdJ("selectionChange",function(t){return e.onTerminalSelect(t)}),m.YNc(133,G,2,2,"mat-option",13),m.qZA(),m.qZA(),m.YNc(134,H,6,1,"mat-form-field",38),m.YNc(135,X,6,1,"mat-form-field",38),m.qZA(),m.YNc(136,K,3,2,"div",39),m.YNc(137,et,2,1,"div",39),m.TgZ(138,"div",4),m.TgZ(139,"button",40),m.NdJ("click",function(){return e.adjustPointToTerminal()}),m._uU(140,"Save"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(141,"div",34),m.qZA(),m.qZA(),m.TgZ(142,"mat-tab",42),m.TgZ(143,"div",33),m._UZ(144,"div",34),m.TgZ(145,"div",35),m.TgZ(146,"mat-card"),m.TgZ(147,"mat-card-header"),m._UZ(148,"div",3),m.TgZ(149,"mat-card-title"),m._uU(150,"Terminal Transaction Report"),m.qZA(),m.qZA(),m.TgZ(151,"mat-card-content"),m.TgZ(152,"div",4),m.TgZ(153,"div",5),m.TgZ(154,"div",43),m.TgZ(155,"ng-select",44),m.NdJ("ngModelChange",function(t){return e.rechargedToID=t}),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(156,"button",45),m.NdJ("click",function(){return e.getTransaction()}),m._uU(157,"Search"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m._UZ(158,"div",34),m.qZA(),m.TgZ(159,"div",20),m.TgZ(160,"table",21),m.NdJ("matSortChange",function(t){return e.sortData(t)}),m.TgZ(161,"thead"),m.TgZ(162,"tr"),m.TgZ(163,"th",23),m._uU(164,"Terminal List"),m.qZA(),m.qZA(),m.TgZ(165,"tr"),m.TgZ(166,"th"),m._uU(167,"Id"),m.qZA(),m.TgZ(168,"th",26),m._uU(169,"Recharge To"),m.qZA(),m.TgZ(170,"th",27),m._uU(171,"Recharge By"),m.qZA(),m.TgZ(172,"th",28),m._uU(173,"Old Amount"),m.qZA(),m.TgZ(174,"th",28),m._uU(175,"Recharged Amount"),m.qZA(),m.TgZ(176,"th",29),m._uU(177,"New Amount"),m.qZA(),m.TgZ(178,"th",29),m._uU(179,"Date and Time"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(180,"tbody"),m.YNc(181,it,15,7,"tr",46),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(182,"mat-tab",47),m.TgZ(183,"mat-form-field",48),m.TgZ(184,"mat-label"),m._uU(185,"Terminal Name"),m.qZA(),m.TgZ(186,"input",49),m.NdJ("ngModelChange",function(t){return e.terminalFilter=t}),m.qZA(),m.qZA(),m.TgZ(187,"table",50),m.TgZ(188,"thead"),m.TgZ(189,"tr"),m.TgZ(190,"th",51),m._uU(191,"Sl. no."),m.qZA(),m.TgZ(192,"th",51),m._uU(193,"Terminal Name"),m.qZA(),m.TgZ(194,"th",51),m._uU(195,"Triple Chance"),m.qZA(),m.TgZ(196,"th",51),m._uU(197,"12 Card"),m.qZA(),m.TgZ(198,"th",51),m._uU(199,"16 Card"),m.qZA(),m.TgZ(200,"th",51),m._uU(201,"Single"),m.qZA(),m.TgZ(202,"th",51),m._uU(203,"Double"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(204,"tbody"),m.YNc(205,at,15,7,"tr",46),m.ALo(206,"filter"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.YNc(207,nt,4,1,"div",52),m.YNc(208,rt,8,4,"div",52)),2&t&&(m.xp6(12),m.Q6J("formGroup",e.terminalMasterForm),m.xp6(6),m.Q6J("ngIf",!e.terminalMasterForm.get("terminalName").valid&&e.terminalMasterForm.get("terminalName").touched),m.xp6(10),m.Q6J("ngForOf",e.stockists),m.xp6(5),m.Q6J("ngForOf",e.payoutSlabs),m.xp6(5),m.Q6J("ngForOf",e.superStockists),m.xp6(10),m.Q6J("disabled",!e.terminalMasterForm.valid||e.isTerminalUpdatAble||e.pinCheckValidator),m.xp6(2),m.Q6J("disabled",!e.isTerminalUpdatAble),m.xp6(37),m.Q6J("ngForOf",e.sortedTerminalList),m.xp6(13),m.Q6J("formGroup",e.terminalLimitForm),m.xp6(6),m.Q6J("ngForOf",e.sortedTerminalList),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(2),m.Q6J("disabled",!e.terminalLimitForm.valid),m.xp6(15),m.Q6J("formGroup",e.terminalLimitForm),m.xp6(6),m.Q6J("ngForOf",e.sortedTerminalList),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(1),m.Q6J("ngIf",e.selectedTerminal),m.xp6(18),m.Q6J("items",e.sortedTerminalList)("ngModel",e.rechargedToID),m.xp6(26),m.Q6J("ngForOf",e.transactionData),m.xp6(5),m.Q6J("ngModel",e.terminalFilter),m.xp6(19),m.Q6J("ngForOf",m.xi3(206,28,e.terminals,e.terminalFilter)),m.xp6(2),m.Q6J("ngIf",!e.isProduction),m.xp6(1),m.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[T.SP,T.uX,f.a8,f.dk,f.kc,f.n5,f.dn,A.xw,A.Wh,A.SQ,A.yH,s._Y,s.JL,s.sg,q.KE,q.hX,x.Nt,s.Fj,s.JJ,s.u,a.O5,b.gD,a.sg,v.lW,k.YE,k.nU,U.w9,s.On,q.TO,I.ey,a.PC,_.Zl,S.Hw,q.R9,N.Rr],pipes:[w.Z,a.Ts],styles:[""]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[n.Bz.forChild(st)],n.Bz]}),t})();var ct=i(5480),mt=i(5566);let ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[a.ez,lt,T.Nh,ct.q,mt.o9,f.QW,s.u5,s.UX,N.rP,k.JX,b.LD,S.Ps,U.A0,w.h]]}),t})()}}]);