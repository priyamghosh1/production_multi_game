!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[70],{6024:function(t,a,n){n.r(a),n.d(a,{MasterTerminalModule:function(){return pe}});var r=n(8583),o=n(3423),l=n(3679),c=n(8259),m=n.n(c),s=n(7716),u=n(1599),d=n(3535),Z=n(2088),g=n(5620),f=n(7431),p=n(5939),T=n(3738),h=n(5618),A=n(8295),q=n(9983),v=n(7441),b=n(1095),x=n(1494),k=n(2533),U=n(6640),I=n(2458),_=n(8030),N=n(6627),S=n(4981);function y(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"This field is Required"),s.qZA())}function w(e,t){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.qZA()),2&e){var i=s.oxw(2);s.xp6(1),s.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function J(e,t){if(1&e&&(s.TgZ(0,"div",53),s.YNc(1,y,2,0,"mat-error",54),s.YNc(2,w,2,1,"mat-error",54),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),s.xp6(1),s.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function C(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"mat-option",55),s.NdJ("blur",function(){var e=s.CHM(i).$implicit;return s.oxw().selectSuperStockist(e)}),s._uU(1),s.qZA()}if(2&e){var a=t.$implicit;s.Q6J("value",a.stockist_id),s.xp6(1),s.hij(" ",a.user_name," ")}}function L(e,t){if(1&e&&(s.TgZ(0,"mat-option",56),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.id),s.xp6(1),s.hij(" ",i.slab_status," ")}}function F(e,t){if(1&e&&(s.TgZ(0,"mat-option",56),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.userId),s.xp6(1),s.hij(" ",i.userName," ")}}function Q(e,t){1&e&&(s.TgZ(0,"div"),s._UZ(1,"i",61),s.qZA())}function B(e,t){1&e&&(s.TgZ(0,"div"),s._UZ(1,"i",62),s.qZA())}function M(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"button",63),s.NdJ("click",function(){s.CHM(i);var e=s.oxw().$implicit;return s.oxw().approveLogin(e)}),s._uU(1,"Approve"),s.qZA()}}function Y(e,t){1&e&&(s.TgZ(0,"label"),s._uU(1,"Approved"),s.qZA())}function O(e,t){1&e&&(s.TgZ(0,"div"),s._UZ(1,"span",64),s.qZA())}function P(e,t){1&e&&(s.TgZ(0,"div"),s._UZ(1,"span",65),s.qZA())}function R(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"tr",57),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.YNc(5,Q,2,0,"div",54),s.YNc(6,B,2,0,"div",54),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.qZA(),s.TgZ(13,"td"),s._uU(14),s.qZA(),s.TgZ(15,"td"),s._uU(16),s.qZA(),s.TgZ(17,"td"),s.YNc(18,M,2,0,"button",58),s.YNc(19,Y,2,0,"label",54),s.qZA(),s.TgZ(20,"td"),s.YNc(21,O,2,0,"div",54),s.YNc(22,P,2,0,"div",54),s.qZA(),s.TgZ(23,"td"),s.TgZ(24,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().updateBlock(e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(25,"td"),s.TgZ(26,"i",60),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().editTerminal(e)}),s.qZA(),s.qZA(),s.qZA()}if(2&e){var a=t.$implicit,n=t.index,r=s.oxw();s.Q6J("ngStyle",r.getBackgroundColor(n)),s.xp6(2),s.Oqu(n+1),s.xp6(2),s.hij(" ",a.terminalName," "),s.xp6(1),s.Q6J("ngIf","exe"==a.platform),s.xp6(1),s.Q6J("ngIf","apk"==a.platform),s.xp6(2),s.Oqu(a.pin),s.xp6(2),s.Oqu(a.commission),s.xp6(2),s.Oqu(a.balance),s.xp6(2),s.Oqu(a.superStockist.userName),s.xp6(2),s.Oqu(a.stockist.userName),s.xp6(2),s.Q6J("ngIf",1==a.loginActivate),s.xp6(1),s.Q6J("ngIf",2==a.loginActivate),s.xp6(2),s.Q6J("ngIf","Offline"==a.status),s.xp6(1),s.Q6J("ngIf","Online"==a.status),s.xp6(2),s.Q6J("checked",a.blocked)}}function D(e,t){if(1&e&&(s.TgZ(0,"mat-option",56),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.terminalId),s.xp6(1),s.hij(" ",i.pin," ")}}function j(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Name"),s.qZA(),s._UZ(3,"input",67),s.TgZ(4,"mat-icon",68),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.terminalName)}}function V(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Current balance"),s.qZA(),s._UZ(3,"input",69),s.TgZ(4,"mat-icon",68),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.balance)}}function $(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Stockist owner"),s.qZA(),s._UZ(3,"input",67),s.TgZ(4,"mat-icon",68),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.userName)}}function E(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Stockist balance"),s.qZA(),s._UZ(3,"input",69),s.TgZ(4,"mat-icon",68),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.balance)}}function G(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,$,6,1,"mat-form-field",37),s.YNc(2,E,6,1,"mat-form-field",37),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal),s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function H(e,t){1&e&&(s.TgZ(0,"mat-form-field",71),s.TgZ(1,"mat-label"),s._uU(2,"Recharge amount"),s.qZA(),s._UZ(3,"input",72),s.TgZ(4,"mat-icon",68),s._uU(5," money"),s.qZA(),s.qZA())}function z(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,H,6,0,"mat-form-field",70),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function X(e,t){if(1&e&&(s.TgZ(0,"mat-option",56),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.terminalId),s.xp6(1),s.hij(" ",i.pin," ")}}function W(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Name"),s.qZA(),s._UZ(3,"input",67),s.TgZ(4,"mat-icon",68),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.terminalName)}}function K(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Current balance"),s.qZA(),s._UZ(3,"input",69),s.TgZ(4,"mat-icon",68),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.balance)}}function ee(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Stockist owner"),s.qZA(),s._UZ(3,"input",67),s.TgZ(4,"mat-icon",68),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.userName)}}function te(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",66),s.TgZ(1,"mat-label"),s._uU(2,"Stockist balance"),s.qZA(),s._UZ(3,"input",69),s.TgZ(4,"mat-icon",68),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.balance)}}function ie(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,ee,6,1,"mat-form-field",37),s.YNc(2,te,6,1,"mat-form-field",37),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal),s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function ae(e,t){1&e&&(s.TgZ(0,"mat-form-field",71),s.TgZ(1,"mat-label"),s._uU(2,"Recharge amount"),s.qZA(),s._UZ(3,"input",72),s.TgZ(4,"mat-icon",68),s._uU(5," money"),s.qZA(),s.qZA())}function ne(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,ae,6,0,"mat-form-field",70),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function re(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.qZA(),s.TgZ(13,"td"),s._uU(14),s.qZA(),s.qZA()),2&e){var i=t.$implicit,a=t.index;s.xp6(2),s.Oqu(a+1),s.xp6(2),s.Oqu(i.rechargedTo.userName),s.xp6(2),s.Oqu(i.rechargedby.userName),s.xp6(2),s.Oqu(i.oldAmount),s.xp6(2),s.Oqu(i.rechargedAmount),s.xp6(2),s.Oqu(i.newAmount),s.xp6(2),s.Oqu(i.dateAndTime)}}function oe(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td",52),s._uU(2),s.qZA(),s.TgZ(3,"td",52),s._uU(4),s.qZA(),s.TgZ(5,"td",52),s.TgZ(6,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(1,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(7,"td",52),s.TgZ(8,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(2,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(9,"td",52),s.TgZ(10,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(3,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(11,"td",52),s.TgZ(12,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(4,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(13,"td",52),s.TgZ(14,"input",59),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(5,e.terminalId)}),s.qZA(),s.qZA(),s.qZA()}if(2&e){var a=t.$implicit,n=t.index;s.xp6(2),s.Oqu(n+1),s.xp6(2),s.Oqu(a.terminalName),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game1),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game2),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game3),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game4),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game5)}}var le,ce=function(e,t){return{itemsPerPage:e,currentPage:t}},me=((le=function(){function t(i,a,n,r,o){var c=this;e(this,t),this.masterSuperStockistService=i,this.authService=a,this.masterTerminalService=n,this.commonService=r,this.transactionReportService=o,this.isTerminalUpdatAble=!1,this.payoutSlabs=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.terminalFilter=null,this.p=1,this.p1=1,this.itemsOnEveryPage=10,this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(function(e){c.user=e}),this.terminalMasterForm=new l.cw({id:new l.NI(null),terminalName:new l.NI(null,[l.kI.required,l.kI.minLength(2)]),stockistId:new l.NI(null,[l.kI.required]),payoutSlabId:new l.NI(null,[l.kI.required]),superStockistId:new l.NI(null,[l.kI.required]),pin:new l.NI(null,[l.kI.required]),commission:new l.NI(null,[l.kI.required,l.kI.max(this.user.commission)])}),this.terminalLimitForm=new l.cw({beneficiaryUid:new l.NI(null,[l.kI.required]),amount:new l.NI(null,[l.kI.required])})}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.terminals=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=e.terminals.filter(function(t){return t.superStockistId===e.user.userId})}),this.sortedTerminalList=this.terminals.filter(function(t){return t.superStockistId===e.user.userId}),this.masterSuperStockistService.getStockistBySuperStockistId(this.user.userId),this.masterSuperStockistService.getStockistListener().subscribe(function(t){e.stockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(function(t){e.payoutSlabs=t})}},{key:"refreshTerminalList",value:function(){this.masterTerminalService.getAllUpdatedTerminals()}},{key:"gamePermissionUpdate",value:function(e,t){this.masterTerminalService.gamePermission(e,t).subscribe()}},{key:"updateBlock",value:function(e){this.masterTerminalService.updateBlock(e).subscribe()}},{key:"approveLogin",value:function(e){this.masterTerminalService.loginApprove(e.terminalId).subscribe()}},{key:"getTransaction",value:function(){var e=this;this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(function(t){e.transactionData=t.data})}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var a="asc"===e.direction;switch(e.active){case"terminalName":return se(t.terminalName,i.terminalName,a);case"stockistName":return se(t.stockist.userName,i.stockist.userName,a);case"balance":return se(t.balance,i.balance,a);default:return 0}}):t}},{key:"checkPinValidation",value:function(){var e=this;this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(function(t){0===t.success?(m().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),e.pinCheckValidator=!0,e.terminalMasterForm.patchValue({terminalName:null})):e.pinCheckValidator=!1})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value})}},{key:"selectSuperStockist",value:function(e){this.terminalMasterForm.patchValue({superStockistId:e.super_stockist_id}),this.terminalMasterForm.value.superStockistId=e.superStockistId}},{key:"rechargeToTerminal",value:function(){var e=this;parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):this.selectedTerminal.stockist.balance<this.terminalLimitForm.value.amount?m().fire({position:"top-end",icon:"error",title:"Insufficient balance",showConfirmButton:!1,timer:1e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"adjustPointToTerminal",value:function(){var e=this;parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):this.selectedTerminal.stockist.balance<this.terminalLimitForm.value.amount?m().fire({position:"top-end",icon:"error",title:"Insufficient balance",showConfirmButton:!1,timer:1e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:-e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"updateTerminal",value:function(){var e=this;m().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.user.userId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,pin:e.terminalMasterForm.value.pin,userId:e.user.userId,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"editTerminal",value:function(e){this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockistId,pin:e.pin,payoutSlabId:e.payoutSlabId,commission:e.commission,superStockistId:e.superStockistId}),this.isTerminalUpdatAble=!0}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1}},{key:"createNewTerminal",value:function(){var e=this;m().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.user.userId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,createdBy:e.user.userId,pin:e.terminalMasterForm.value.pin,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.clearMasterTerminalForm(),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3}),e.highLightedRowIndex=0,setTimeout(function(){e.highLightedRowIndex=-1},5e3)):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),t}()).\u0275fac=function(e){return new(e||le)(s.Y36(u.Q),s.Y36(d.e),s.Y36(Z.S),s.Y36(g.v),s.Y36(f.z))},le.\u0275cmp=s.Xpm({type:le,selectors:[["app-master-terminal"]],decls:211,vars:37,consts:[["label","Create terminal"],[1,"flex-row","mt-2"],[1,"col-8"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-12","mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","4",1,"text-center"],["mat-button","","color","primary",3,"click"],[1,"material-icons"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"pageChange"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Adjust Point"],["label","Terminal Tranaction"],["fxFlex","60"],["bindLabel","pin","bindValue","terminalId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],[4,"ngFor","ngForOf"],["label","Game Allocation"],["appearance","fill",1,"example-full-width","col-5"],["matInput","","placeholder","Terminal Name",3,"ngModel","ngModelChange"],[1,"table","table-bordered","col-8"],["scope","col"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],["mat-button","","color","primary","style","border: black solid 1px",3,"click",4,"ngIf"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],[1,"bi","bi-pc-display-horizontal"],[1,"bi","bi-phone"],["mat-button","","color","primary",2,"border","black solid 1px",3,"click"],[1,"bi","bi-dot","red-color"],[1,"bi","bi-dot","green-color"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","number","min","1","matInput","","formControlName","amount","placeholder","Enter amount"]],template:function(e,t){1&e&&(s.TgZ(0,"mat-tab-group"),s.TgZ(1,"mat-tab",0),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"mat-card"),s.TgZ(5,"mat-card-header"),s._UZ(6,"div",3),s.TgZ(7,"mat-card-title"),s._uU(8,"New Terminal Form"),s.qZA(),s.qZA(),s.TgZ(9,"mat-card-content"),s.TgZ(10,"div",4),s.TgZ(11,"div",5),s.TgZ(12,"form",6),s.TgZ(13,"div",4),s.TgZ(14,"mat-form-field",5),s.TgZ(15,"mat-label"),s._uU(16,"Terminal Name"),s.qZA(),s.TgZ(17,"input",7),s.NdJ("change",function(){return t.checkPinValidation()}),s.qZA(),s.YNc(18,J,3,2,"div",8),s.qZA(),s.TgZ(19,"mat-form-field",5),s.TgZ(20,"mat-label"),s._uU(21,"PIN"),s.qZA(),s._UZ(22,"input",9),s.qZA(),s.qZA(),s.TgZ(23,"div",4),s.TgZ(24,"mat-form-field",5),s.TgZ(25,"mat-label"),s._uU(26,"Stockist"),s.qZA(),s.TgZ(27,"mat-select",10),s.YNc(28,C,2,2,"mat-option",11),s.qZA(),s.qZA(),s.TgZ(29,"mat-form-field",5),s.TgZ(30,"mat-label"),s._uU(31,"Payout Slab"),s.qZA(),s.TgZ(32,"mat-select",12),s.YNc(33,L,2,2,"mat-option",13),s.qZA(),s.qZA(),s.qZA(),s.TgZ(34,"div",4),s.TgZ(35,"mat-form-field",5),s.TgZ(36,"mat-label"),s._uU(37,"Super Stockist"),s.qZA(),s.TgZ(38,"mat-select",14),s.YNc(39,F,2,2,"mat-option",13),s.qZA(),s.qZA(),s.TgZ(40,"div",15),s.TgZ(41,"mat-form-field",5),s.TgZ(42,"mat-label"),s._uU(43,"Commission"),s.qZA(),s._UZ(44,"input",16),s.qZA(),s.qZA(),s.TgZ(45,"label",17),s._uU(46),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(47,"div",4),s.TgZ(48,"button",18),s.NdJ("click",function(){return t.createNewTerminal()}),s._uU(49,"Create"),s.qZA(),s.TgZ(50,"button",18),s.NdJ("click",function(){return t.updateTerminal()}),s._uU(51,"Update"),s.qZA(),s.TgZ(52,"button",19),s.NdJ("click",function(){return t.clearMasterTerminalForm()}),s._uU(53,"clear"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(54,"div",20),s.TgZ(55,"table",21),s.TgZ(56,"thead"),s.TgZ(57,"tr"),s.TgZ(58,"th",22),s._uU(59,"Terminal List"),s.qZA(),s.TgZ(60,"th",22),s.TgZ(61,"button",23),s.NdJ("click",function(){return t.refreshTerminalList()}),s._uU(62," Refresh "),s.TgZ(63,"span",24),s._uU(64,"refresh"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(65,"tr"),s.TgZ(66,"th"),s._uU(67,"Id"),s.qZA(),s.TgZ(68,"th",25),s._uU(69,"Terminal name"),s.qZA(),s.TgZ(70,"th",26),s._uU(71,"Pin"),s.qZA(),s.TgZ(72,"th",27),s._uU(73,"Commission"),s.qZA(),s.TgZ(74,"th",27),s._uU(75,"Balance"),s.qZA(),s.TgZ(76,"th",28),s._uU(77,"Super Stockist"),s.qZA(),s.TgZ(78,"th",28),s._uU(79,"Stockist"),s.qZA(),s.TgZ(80,"th"),s._uU(81,"Login Approve"),s.qZA(),s.TgZ(82,"th"),s._uU(83,"Status"),s.qZA(),s.TgZ(84,"th",28),s._uU(85,"Blocked"),s.qZA(),s.TgZ(86,"th",29),s._uU(87,"Edit"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(88,"tbody"),s.YNc(89,R,27,15,"tr",30),s.ALo(90,"paginate"),s.qZA(),s.qZA(),s.TgZ(91,"pagination-controls",31),s.NdJ("pageChange",function(e){return t.p1=e}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(92,"mat-tab",32),s.TgZ(93,"div",33),s._UZ(94,"div",34),s.TgZ(95,"div",2),s.TgZ(96,"mat-card"),s.TgZ(97,"mat-card-header"),s._UZ(98,"div",3),s.TgZ(99,"mat-card-title"),s._uU(100,"Recharge Terminal"),s.qZA(),s.qZA(),s.TgZ(101,"mat-card-content"),s.TgZ(102,"div",4),s.TgZ(103,"div",5),s.TgZ(104,"form",6),s.TgZ(105,"div",4),s.TgZ(106,"mat-form-field",35),s.TgZ(107,"mat-label"),s._uU(108,"Terminal"),s.qZA(),s.TgZ(109,"mat-select",36),s.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),s.YNc(110,D,2,2,"mat-option",13),s.qZA(),s.qZA(),s.YNc(111,j,6,1,"mat-form-field",37),s.YNc(112,V,6,1,"mat-form-field",37),s.qZA(),s.YNc(113,G,3,2,"div",38),s.YNc(114,z,2,1,"div",38),s.TgZ(115,"div",4),s.TgZ(116,"button",39),s.NdJ("click",function(){return t.rechargeToTerminal()}),s._uU(117,"Save"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(118,"div",34),s.qZA(),s.qZA(),s.TgZ(119,"mat-tab",40),s.TgZ(120,"div",33),s._UZ(121,"div",34),s.TgZ(122,"div",2),s.TgZ(123,"mat-card"),s.TgZ(124,"mat-card-header"),s._UZ(125,"div",3),s.TgZ(126,"mat-card-title"),s._uU(127,"Recharge Terminal"),s.qZA(),s.qZA(),s.TgZ(128,"mat-card-content"),s.TgZ(129,"div",4),s.TgZ(130,"div",5),s.TgZ(131,"form",6),s.TgZ(132,"div",4),s.TgZ(133,"mat-form-field",35),s.TgZ(134,"mat-label"),s._uU(135,"Terminal"),s.qZA(),s.TgZ(136,"mat-select",36),s.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),s.YNc(137,X,2,2,"mat-option",13),s.qZA(),s.qZA(),s.YNc(138,W,6,1,"mat-form-field",37),s.YNc(139,K,6,1,"mat-form-field",37),s.qZA(),s.YNc(140,ie,3,2,"div",38),s.YNc(141,ne,2,1,"div",38),s.TgZ(142,"div",4),s.TgZ(143,"button",39),s.NdJ("click",function(){return t.adjustPointToTerminal()}),s._uU(144,"Save"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(145,"div",34),s.qZA(),s.qZA(),s.TgZ(146,"mat-tab",41),s.TgZ(147,"div",33),s._UZ(148,"div",34),s.TgZ(149,"div",2),s.TgZ(150,"mat-card"),s.TgZ(151,"mat-card-header"),s._UZ(152,"div",3),s.TgZ(153,"mat-card-title"),s._uU(154,"Terminal Transaction Report"),s.qZA(),s.qZA(),s.TgZ(155,"mat-card-content"),s.TgZ(156,"div",4),s.TgZ(157,"div",5),s.TgZ(158,"div",42),s.TgZ(159,"ng-select",43),s.NdJ("ngModelChange",function(e){return t.rechargedToID=e}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(160,"button",44),s.NdJ("click",function(){return t.getTransaction()}),s._uU(161,"Search"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(162,"div",34),s.qZA(),s.TgZ(163,"div",45),s.TgZ(164,"table",46),s.NdJ("matSortChange",function(e){return t.sortData(e)}),s.TgZ(165,"thead"),s.TgZ(166,"tr"),s.TgZ(167,"th",22),s._uU(168,"Terminal List"),s.qZA(),s.qZA(),s.TgZ(169,"tr"),s.TgZ(170,"th"),s._uU(171,"Id"),s.qZA(),s.TgZ(172,"th",25),s._uU(173,"Recharge To"),s.qZA(),s.TgZ(174,"th",26),s._uU(175,"Recharge By"),s.qZA(),s.TgZ(176,"th",27),s._uU(177,"Old Amount"),s.qZA(),s.TgZ(178,"th",27),s._uU(179,"Recharged Amount"),s.qZA(),s.TgZ(180,"th",28),s._uU(181,"New Amount"),s.qZA(),s.TgZ(182,"th",28),s._uU(183,"Date and Time"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(184,"tbody"),s.YNc(185,re,15,7,"tr",47),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(186,"mat-tab",48),s.TgZ(187,"mat-form-field",49),s.TgZ(188,"mat-label"),s._uU(189,"Terminal Name"),s.qZA(),s.TgZ(190,"input",50),s.NdJ("ngModelChange",function(e){return t.terminalFilter=e}),s.qZA(),s.qZA(),s.TgZ(191,"table",51),s.TgZ(192,"thead"),s.TgZ(193,"tr"),s.TgZ(194,"th",52),s._uU(195,"Sl. no."),s.qZA(),s.TgZ(196,"th",52),s._uU(197,"Terminal Name"),s.qZA(),s.TgZ(198,"th",52),s._uU(199,"Triple Chance"),s.qZA(),s.TgZ(200,"th",52),s._uU(201,"12 Card"),s.qZA(),s.TgZ(202,"th",52),s._uU(203,"16 Card"),s.qZA(),s.TgZ(204,"th",52),s._uU(205,"Single"),s.qZA(),s.TgZ(206,"th",52),s._uU(207,"Double"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(208,"tbody"),s.YNc(209,oe,15,7,"tr",47),s.ALo(210,"filter"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(12),s.Q6J("formGroup",t.terminalMasterForm),s.xp6(6),s.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),s.xp6(10),s.Q6J("ngForOf",t.stockists),s.xp6(5),s.Q6J("ngForOf",t.payoutSlabs),s.xp6(6),s.Q6J("ngForOf",t.superStockists),s.xp6(7),s.hij("(Max: ",t.user.commission,")"),s.xp6(2),s.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble||t.pinCheckValidator),s.xp6(2),s.Q6J("disabled",!t.isTerminalUpdatAble),s.xp6(39),s.Q6J("ngForOf",s.xi3(90,28,t.sortedTerminalList,s.WLB(34,ce,t.itemsOnEveryPage,t.p1))),s.xp6(15),s.Q6J("formGroup",t.terminalLimitForm),s.xp6(6),s.Q6J("ngForOf",t.sortedTerminalList),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(2),s.Q6J("disabled",!t.terminalLimitForm.valid),s.xp6(15),s.Q6J("formGroup",t.terminalLimitForm),s.xp6(6),s.Q6J("ngForOf",t.sortedTerminalList),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(2),s.Q6J("disabled",!t.terminalLimitForm.valid),s.xp6(16),s.Q6J("items",t.sortedTerminalList)("ngModel",t.rechargedToID),s.xp6(26),s.Q6J("ngForOf",t.transactionData),s.xp6(5),s.Q6J("ngModel",t.terminalFilter),s.xp6(19),s.Q6J("ngForOf",s.xi3(210,31,t.terminals,t.terminalFilter)))},directives:[p.SP,p.uX,T.a8,T.dk,T.kc,T.n5,T.dn,h.xw,h.Wh,h.SQ,h.yH,l._Y,l.JL,l.sg,A.KE,A.hX,q.Nt,l.Fj,l.JJ,l.u,r.O5,v.gD,r.sg,b.lW,x.YE,x.nU,k.LS,U.w9,l.On,A.TO,I.ey,r.PC,_.Zl,N.Hw,A.R9,l.qQ,l.wV],pipes:[k._s,S.Z],styles:[".red-color[_ngcontent-%COMP%]{color:red;font-size:50px}.green-color[_ngcontent-%COMP%]{color:#1aff00;font-size:50px}"]}),le);function se(e,t,i){return(e<t?-1:1)*(i?1:-1)}var ue=[{path:"",canActivate:[n(2396).c],component:me,data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],de=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(ue)],o.Bz]}),t}(),Ze=n(5480),ge=n(5566),fe=n(5396),pe=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,de,p.Nh,Ze.q,ge.o9,T.QW,l.u5,l.UX,fe.rP,x.JX,v.LD,N.Ps,U.A0,S.h,k.JX]]}),t}()}}])}();