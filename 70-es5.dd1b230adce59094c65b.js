!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[70],{6024:function(t,a,n){n.r(a),n.d(a,{MasterTerminalModule:function(){return de}});var r=n(8583),o=n(3423),l=n(3679),c=n(8259),m=n.n(c),s=n(7716),u=n(1599),d=n(3535),Z=n(2088),g=n(5620),f=n(7431),p=n(5939),T=n(3738),h=n(5618),A=n(8295),q=n(9983),v=n(7441),b=n(1095),x=n(1494),k=n(2533),I=n(6640),U=n(2458),_=n(8030),N=n(6627),S=n(4981);function y(e,t){1&e&&(s.TgZ(0,"mat-error"),s._uU(1,"This field is Required"),s.qZA())}function w(e,t){if(1&e&&(s.TgZ(0,"mat-error"),s._uU(1),s.qZA()),2&e){var i=s.oxw(2);s.xp6(1),s.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function J(e,t){if(1&e&&(s.TgZ(0,"div",51),s.YNc(1,y,2,0,"mat-error",52),s.YNc(2,w,2,1,"mat-error",52),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),s.xp6(1),s.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function C(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"mat-option",53),s.NdJ("blur",function(){var e=s.CHM(i).$implicit;return s.oxw().selectSuperStockist(e)}),s._uU(1),s.qZA()}if(2&e){var a=t.$implicit;s.Q6J("value",a.stockist_id),s.xp6(1),s.hij(" ",a.user_name," ")}}function F(e,t){if(1&e&&(s.TgZ(0,"mat-option",54),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.id),s.xp6(1),s.hij(" ",i.slab_status," ")}}function L(e,t){if(1&e&&(s.TgZ(0,"mat-option",54),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.userId),s.xp6(1),s.hij(" ",i.userName," ")}}function Q(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"button",59),s.NdJ("click",function(){s.CHM(i);var e=s.oxw().$implicit;return s.oxw().approveLogin(e)}),s._uU(1,"Approve"),s.qZA()}}function B(e,t){1&e&&(s.TgZ(0,"label"),s._uU(1,"Approved"),s.qZA())}function M(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"tr",55),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.qZA(),s.TgZ(13,"td"),s._uU(14),s.qZA(),s.TgZ(15,"td"),s.YNc(16,Q,2,0,"button",56),s.YNc(17,B,2,0,"label",52),s.qZA(),s.TgZ(18,"td"),s.TgZ(19,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().updateBlock(e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(20,"td"),s.TgZ(21,"i",58),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().editTerminal(e)}),s.qZA(),s.qZA(),s.qZA()}if(2&e){var a=t.$implicit,n=t.index,r=s.oxw();s.Q6J("ngStyle",r.getBackgroundColor(n)),s.xp6(2),s.Oqu(n+1),s.xp6(2),s.Oqu(a.terminalName),s.xp6(2),s.Oqu(a.pin),s.xp6(2),s.Oqu(a.commission),s.xp6(2),s.Oqu(a.balance),s.xp6(2),s.Oqu(a.superStockist.userName),s.xp6(2),s.Oqu(a.stockist.userName),s.xp6(2),s.Q6J("ngIf",1==a.loginActivate),s.xp6(1),s.Q6J("ngIf",2==a.loginActivate),s.xp6(2),s.Q6J("checked",a.blocked)}}function Y(e,t){if(1&e&&(s.TgZ(0,"mat-option",54),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.terminalId),s.xp6(1),s.hij(" ",i.pin," ")}}function O(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Name"),s.qZA(),s._UZ(3,"input",61),s.TgZ(4,"mat-icon",62),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.terminalName)}}function P(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Current balance"),s.qZA(),s._UZ(3,"input",63),s.TgZ(4,"mat-icon",62),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.balance)}}function R(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Stockist owner"),s.qZA(),s._UZ(3,"input",61),s.TgZ(4,"mat-icon",62),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.userName)}}function D(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Stockist balance"),s.qZA(),s._UZ(3,"input",63),s.TgZ(4,"mat-icon",62),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.balance)}}function V(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,R,6,1,"mat-form-field",35),s.YNc(2,D,6,1,"mat-form-field",35),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal),s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function j(e,t){1&e&&(s.TgZ(0,"mat-form-field",65),s.TgZ(1,"mat-label"),s._uU(2,"Recharge amount"),s.qZA(),s._UZ(3,"input",66),s.TgZ(4,"mat-icon",62),s._uU(5," money"),s.qZA(),s.qZA())}function $(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,j,6,0,"mat-form-field",64),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function E(e,t){if(1&e&&(s.TgZ(0,"mat-option",54),s._uU(1),s.qZA()),2&e){var i=t.$implicit;s.Q6J("value",i.terminalId),s.xp6(1),s.hij(" ",i.pin," ")}}function G(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Name"),s.qZA(),s._UZ(3,"input",61),s.TgZ(4,"mat-icon",62),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.terminalName)}}function H(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Current balance"),s.qZA(),s._UZ(3,"input",63),s.TgZ(4,"mat-icon",62),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw();s.xp6(3),s.Q6J("value",i.selectedTerminal.balance)}}function X(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Stockist owner"),s.qZA(),s._UZ(3,"input",61),s.TgZ(4,"mat-icon",62),s._uU(5,"person_pin"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.userName)}}function z(e,t){if(1&e&&(s.TgZ(0,"mat-form-field",60),s.TgZ(1,"mat-label"),s._uU(2,"Stockist balance"),s.qZA(),s._UZ(3,"input",63),s.TgZ(4,"mat-icon",62),s._uU(5,"account_balance_wallet"),s.qZA(),s.qZA()),2&e){var i=s.oxw(2);s.xp6(3),s.Q6J("value",i.selectedTerminal.stockist.balance)}}function W(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,X,6,1,"mat-form-field",35),s.YNc(2,z,6,1,"mat-form-field",35),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal),s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function K(e,t){1&e&&(s.TgZ(0,"mat-form-field",65),s.TgZ(1,"mat-label"),s._uU(2,"Recharge amount"),s.qZA(),s._UZ(3,"input",66),s.TgZ(4,"mat-icon",62),s._uU(5," money"),s.qZA(),s.qZA())}function ee(e,t){if(1&e&&(s.TgZ(0,"div",4),s.YNc(1,K,6,0,"mat-form-field",64),s.qZA()),2&e){var i=s.oxw();s.xp6(1),s.Q6J("ngIf",i.selectedTerminal)}}function te(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.qZA(),s.TgZ(13,"td"),s._uU(14),s.qZA(),s.qZA()),2&e){var i=t.$implicit,a=t.index;s.xp6(2),s.Oqu(a+1),s.xp6(2),s.Oqu(i.rechargedTo.userName),s.xp6(2),s.Oqu(i.rechargedby.userName),s.xp6(2),s.Oqu(i.oldAmount),s.xp6(2),s.Oqu(i.rechargedAmount),s.xp6(2),s.Oqu(i.newAmount),s.xp6(2),s.Oqu(i.dateAndTime)}}function ie(e,t){if(1&e){var i=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td",50),s._uU(2),s.qZA(),s.TgZ(3,"td",50),s._uU(4),s.qZA(),s.TgZ(5,"td",50),s.TgZ(6,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(1,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(7,"td",50),s.TgZ(8,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(2,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(9,"td",50),s.TgZ(10,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(3,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(11,"td",50),s.TgZ(12,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(4,e.terminalId)}),s.qZA(),s.qZA(),s.TgZ(13,"td",50),s.TgZ(14,"input",57),s.NdJ("click",function(){var e=s.CHM(i).$implicit;return s.oxw().gamePermissionUpdate(5,e.terminalId)}),s.qZA(),s.qZA(),s.qZA()}if(2&e){var a=t.$implicit,n=t.index;s.xp6(2),s.Oqu(n+1),s.xp6(2),s.Oqu(a.terminalName),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game1),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game2),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game3),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game4),s.xp6(2),s.Q6J("checked",1==a.gamePermission.game5)}}var ae,ne=function(e,t){return{itemsPerPage:e,currentPage:t}},re=((ae=function(){function t(i,a,n,r,o){var c=this;e(this,t),this.masterSuperStockistService=i,this.authService=a,this.masterTerminalService=n,this.commonService=r,this.transactionReportService=o,this.isTerminalUpdatAble=!1,this.payoutSlabs=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.terminalFilter=null,this.p=1,this.p1=1,this.itemsOnEveryPage=10,this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(function(e){c.user=e}),this.terminalMasterForm=new l.cw({id:new l.NI(null),terminalName:new l.NI(null,[l.kI.required,l.kI.minLength(2)]),stockistId:new l.NI(null,[l.kI.required]),payoutSlabId:new l.NI(null,[l.kI.required]),superStockistId:new l.NI(null,[l.kI.required]),pin:new l.NI(null,[l.kI.required]),commission:new l.NI(null,[l.kI.required,l.kI.max(this.user.commission)])}),this.terminalLimitForm=new l.cw({beneficiaryUid:new l.NI(null,[l.kI.required]),amount:new l.NI(null,[l.kI.required])})}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.terminals=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=e.terminals.filter(function(t){return t.superStockistId===e.user.userId})}),this.sortedTerminalList=this.terminals.filter(function(t){return t.superStockistId===e.user.userId}),this.masterSuperStockistService.getStockistBySuperStockistId(this.user.userId),this.masterSuperStockistService.getStockistListener().subscribe(function(t){e.stockists=t}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(function(t){e.payoutSlabs=t})}},{key:"gamePermissionUpdate",value:function(e,t){this.masterTerminalService.gamePermission(e,t).subscribe()}},{key:"updateBlock",value:function(e){this.masterTerminalService.updateBlock(e).subscribe()}},{key:"approveLogin",value:function(e){this.masterTerminalService.loginApprove(e.terminalId).subscribe()}},{key:"getTransaction",value:function(){var e=this;this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(function(t){e.transactionData=t.data})}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var a="asc"===e.direction;switch(e.active){case"terminalName":return oe(t.terminalName,i.terminalName,a);case"stockistName":return oe(t.stockist.userName,i.stockist.userName,a);case"balance":return oe(t.balance,i.balance,a);default:return 0}}):t}},{key:"checkPinValidation",value:function(){var e=this;this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(function(t){0===t.success?(m().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),e.pinCheckValidator=!0,e.terminalMasterForm.patchValue({terminalName:null})):e.pinCheckValidator=!1})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value})}},{key:"selectSuperStockist",value:function(e){this.terminalMasterForm.patchValue({superStockistId:e.super_stockist_id}),this.terminalMasterForm.value.superStockistId=e.superStockistId}},{key:"rechargeToTerminal",value:function(){var e=this;parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):this.selectedTerminal.stockist.balance<this.terminalLimitForm.value.amount?m().fire({position:"top-end",icon:"error",title:"Insufficient balance",showConfirmButton:!1,timer:1e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"adjustPointToTerminal",value:function(){var e=this;parseInt(this.terminalLimitForm.value.amount)<0?m().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):this.selectedTerminal.stockist.balance<this.terminalLimitForm.value.amount?m().fire({position:"top-end",icon:"error",title:"Insufficient balance",showConfirmButton:!1,timer:1e3}):m().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:-e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),m().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"updateTerminal",value:function(){var e=this;m().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.user.userId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,pin:e.terminalMasterForm.value.pin,userId:e.user.userId,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){console.log("data saving error",e)})})}},{key:"editTerminal",value:function(e){this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockistId,pin:e.pin,payoutSlabId:e.payoutSlabId,commission:e.commission,superStockistId:e.superStockistId}),this.isTerminalUpdatAble=!0}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.isTerminalUpdatAble=!1}},{key:"createNewTerminal",value:function(){var e=this;m().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.user.userId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,createdBy:e.user.userId,pin:e.terminalMasterForm.value.pin,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.clearMasterTerminalForm(),m().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3}),e.highLightedRowIndex=0,setTimeout(function(){e.highLightedRowIndex=-1},5e3)):m().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),t}()).\u0275fac=function(e){return new(e||ae)(s.Y36(u.Q),s.Y36(d.e),s.Y36(Z.S),s.Y36(g.v),s.Y36(f.z))},ae.\u0275cmp=s.Xpm({type:ae,selectors:[["app-master-terminal"]],decls:204,vars:37,consts:[["label","Create terminal"],[1,"flex-row","mt-2"],[1,"col-8"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId"],[3,"value","blur",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","superStockistId","disabled",""],[1,"m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-12","mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"pageChange"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Adjust Point"],["label","Terminal Tranaction"],["fxFlex","60"],["bindLabel","pin","bindValue","terminalId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],[4,"ngFor","ngForOf"],["label","Game Allocation"],["appearance","fill",1,"example-full-width","col-5"],["matInput","","placeholder","Terminal Name",3,"ngModel","ngModelChange"],[1,"table","table-bordered","col-8"],["scope","col"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value","blur"],[3,"value"],[3,"ngStyle"],["mat-button","","color","primary","style","border: black solid 1px",3,"click",4,"ngIf"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],["mat-button","","color","primary",2,"border","black solid 1px",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","number","min","1","matInput","","formControlName","amount","placeholder","Enter amount"]],template:function(e,t){1&e&&(s.TgZ(0,"mat-tab-group"),s.TgZ(1,"mat-tab",0),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"mat-card"),s.TgZ(5,"mat-card-header"),s._UZ(6,"div",3),s.TgZ(7,"mat-card-title"),s._uU(8,"New Terminal Form"),s.qZA(),s.qZA(),s.TgZ(9,"mat-card-content"),s.TgZ(10,"div",4),s.TgZ(11,"div",5),s.TgZ(12,"form",6),s.TgZ(13,"div",4),s.TgZ(14,"mat-form-field",5),s.TgZ(15,"mat-label"),s._uU(16,"Terminal Name"),s.qZA(),s.TgZ(17,"input",7),s.NdJ("change",function(){return t.checkPinValidation()}),s.qZA(),s.YNc(18,J,3,2,"div",8),s.qZA(),s.TgZ(19,"mat-form-field",5),s.TgZ(20,"mat-label"),s._uU(21,"PIN"),s.qZA(),s._UZ(22,"input",9),s.qZA(),s.qZA(),s.TgZ(23,"div",4),s.TgZ(24,"mat-form-field",5),s.TgZ(25,"mat-label"),s._uU(26,"Stockist"),s.qZA(),s.TgZ(27,"mat-select",10),s.YNc(28,C,2,2,"mat-option",11),s.qZA(),s.qZA(),s.TgZ(29,"mat-form-field",5),s.TgZ(30,"mat-label"),s._uU(31,"Payout Slab"),s.qZA(),s.TgZ(32,"mat-select",12),s.YNc(33,F,2,2,"mat-option",13),s.qZA(),s.qZA(),s.qZA(),s.TgZ(34,"div",4),s.TgZ(35,"mat-form-field",5),s.TgZ(36,"mat-label"),s._uU(37,"Super Stockist"),s.qZA(),s.TgZ(38,"mat-select",14),s.YNc(39,L,2,2,"mat-option",13),s.qZA(),s.qZA(),s.TgZ(40,"div",15),s.TgZ(41,"mat-form-field",5),s.TgZ(42,"mat-label"),s._uU(43,"Commission"),s.qZA(),s._UZ(44,"input",16),s.qZA(),s.qZA(),s.TgZ(45,"label",17),s._uU(46),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(47,"div",4),s.TgZ(48,"button",18),s.NdJ("click",function(){return t.createNewTerminal()}),s._uU(49,"Create"),s.qZA(),s.TgZ(50,"button",18),s.NdJ("click",function(){return t.updateTerminal()}),s._uU(51,"Update"),s.qZA(),s.TgZ(52,"button",19),s.NdJ("click",function(){return t.clearMasterTerminalForm()}),s._uU(53,"clear"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(54,"div",20),s.TgZ(55,"table",21),s.TgZ(56,"thead"),s.TgZ(57,"tr"),s.TgZ(58,"th",22),s._uU(59,"Terminal List"),s.qZA(),s.qZA(),s.TgZ(60,"tr"),s.TgZ(61,"th"),s._uU(62,"Id"),s.qZA(),s.TgZ(63,"th",23),s._uU(64,"Terminal name"),s.qZA(),s.TgZ(65,"th",24),s._uU(66,"Pin"),s.qZA(),s.TgZ(67,"th",25),s._uU(68,"Commission"),s.qZA(),s.TgZ(69,"th",25),s._uU(70,"Balance"),s.qZA(),s.TgZ(71,"th",26),s._uU(72,"Super Stockist"),s.qZA(),s.TgZ(73,"th",26),s._uU(74,"Stockist"),s.qZA(),s.TgZ(75,"th"),s._uU(76,"Login Approve"),s.qZA(),s.TgZ(77,"th",26),s._uU(78,"Blocked"),s.qZA(),s.TgZ(79,"th",27),s._uU(80,"Edit"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(81,"tbody"),s.YNc(82,M,22,11,"tr",28),s.ALo(83,"paginate"),s.qZA(),s.qZA(),s.TgZ(84,"pagination-controls",29),s.NdJ("pageChange",function(e){return t.p1=e}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(85,"mat-tab",30),s.TgZ(86,"div",31),s._UZ(87,"div",32),s.TgZ(88,"div",2),s.TgZ(89,"mat-card"),s.TgZ(90,"mat-card-header"),s._UZ(91,"div",3),s.TgZ(92,"mat-card-title"),s._uU(93,"Recharge Terminal"),s.qZA(),s.qZA(),s.TgZ(94,"mat-card-content"),s.TgZ(95,"div",4),s.TgZ(96,"div",5),s.TgZ(97,"form",6),s.TgZ(98,"div",4),s.TgZ(99,"mat-form-field",33),s.TgZ(100,"mat-label"),s._uU(101,"Terminal"),s.qZA(),s.TgZ(102,"mat-select",34),s.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),s.YNc(103,Y,2,2,"mat-option",13),s.qZA(),s.qZA(),s.YNc(104,O,6,1,"mat-form-field",35),s.YNc(105,P,6,1,"mat-form-field",35),s.qZA(),s.YNc(106,V,3,2,"div",36),s.YNc(107,$,2,1,"div",36),s.TgZ(108,"div",4),s.TgZ(109,"button",37),s.NdJ("click",function(){return t.rechargeToTerminal()}),s._uU(110,"Save"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(111,"div",32),s.qZA(),s.qZA(),s.TgZ(112,"mat-tab",38),s.TgZ(113,"div",31),s._UZ(114,"div",32),s.TgZ(115,"div",2),s.TgZ(116,"mat-card"),s.TgZ(117,"mat-card-header"),s._UZ(118,"div",3),s.TgZ(119,"mat-card-title"),s._uU(120,"Recharge Terminal"),s.qZA(),s.qZA(),s.TgZ(121,"mat-card-content"),s.TgZ(122,"div",4),s.TgZ(123,"div",5),s.TgZ(124,"form",6),s.TgZ(125,"div",4),s.TgZ(126,"mat-form-field",33),s.TgZ(127,"mat-label"),s._uU(128,"Terminal"),s.qZA(),s.TgZ(129,"mat-select",34),s.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),s.YNc(130,E,2,2,"mat-option",13),s.qZA(),s.qZA(),s.YNc(131,G,6,1,"mat-form-field",35),s.YNc(132,H,6,1,"mat-form-field",35),s.qZA(),s.YNc(133,W,3,2,"div",36),s.YNc(134,ee,2,1,"div",36),s.TgZ(135,"div",4),s.TgZ(136,"button",37),s.NdJ("click",function(){return t.adjustPointToTerminal()}),s._uU(137,"Save"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(138,"div",32),s.qZA(),s.qZA(),s.TgZ(139,"mat-tab",39),s.TgZ(140,"div",31),s._UZ(141,"div",32),s.TgZ(142,"div",2),s.TgZ(143,"mat-card"),s.TgZ(144,"mat-card-header"),s._UZ(145,"div",3),s.TgZ(146,"mat-card-title"),s._uU(147,"Terminal Transaction Report"),s.qZA(),s.qZA(),s.TgZ(148,"mat-card-content"),s.TgZ(149,"div",4),s.TgZ(150,"div",5),s.TgZ(151,"div",40),s.TgZ(152,"ng-select",41),s.NdJ("ngModelChange",function(e){return t.rechargedToID=e}),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(153,"button",42),s.NdJ("click",function(){return t.getTransaction()}),s._uU(154,"Search"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(155,"div",32),s.qZA(),s.TgZ(156,"div",43),s.TgZ(157,"table",44),s.NdJ("matSortChange",function(e){return t.sortData(e)}),s.TgZ(158,"thead"),s.TgZ(159,"tr"),s.TgZ(160,"th",22),s._uU(161,"Terminal List"),s.qZA(),s.qZA(),s.TgZ(162,"tr"),s.TgZ(163,"th"),s._uU(164,"Id"),s.qZA(),s.TgZ(165,"th",23),s._uU(166,"Recharge To"),s.qZA(),s.TgZ(167,"th",24),s._uU(168,"Recharge By"),s.qZA(),s.TgZ(169,"th",25),s._uU(170,"Old Amount"),s.qZA(),s.TgZ(171,"th",25),s._uU(172,"Recharged Amount"),s.qZA(),s.TgZ(173,"th",26),s._uU(174,"New Amount"),s.qZA(),s.TgZ(175,"th",26),s._uU(176,"Date and Time"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(177,"tbody"),s.YNc(178,te,15,7,"tr",45),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(179,"mat-tab",46),s.TgZ(180,"mat-form-field",47),s.TgZ(181,"mat-label"),s._uU(182,"Terminal Name"),s.qZA(),s.TgZ(183,"input",48),s.NdJ("ngModelChange",function(e){return t.terminalFilter=e}),s.qZA(),s.qZA(),s.TgZ(184,"table",49),s.TgZ(185,"thead"),s.TgZ(186,"tr"),s.TgZ(187,"th",50),s._uU(188,"Sl. no."),s.qZA(),s.TgZ(189,"th",50),s._uU(190,"Terminal Name"),s.qZA(),s.TgZ(191,"th",50),s._uU(192,"Triple Chance"),s.qZA(),s.TgZ(193,"th",50),s._uU(194,"12 Card"),s.qZA(),s.TgZ(195,"th",50),s._uU(196,"16 Card"),s.qZA(),s.TgZ(197,"th",50),s._uU(198,"Single"),s.qZA(),s.TgZ(199,"th",50),s._uU(200,"Double"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(201,"tbody"),s.YNc(202,ie,15,7,"tr",45),s.ALo(203,"filter"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&e&&(s.xp6(12),s.Q6J("formGroup",t.terminalMasterForm),s.xp6(6),s.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),s.xp6(10),s.Q6J("ngForOf",t.stockists),s.xp6(5),s.Q6J("ngForOf",t.payoutSlabs),s.xp6(6),s.Q6J("ngForOf",t.superStockists),s.xp6(7),s.hij("(Max: ",t.user.commission,")"),s.xp6(2),s.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble||t.pinCheckValidator),s.xp6(2),s.Q6J("disabled",!t.isTerminalUpdatAble),s.xp6(32),s.Q6J("ngForOf",s.xi3(83,28,t.sortedTerminalList,s.WLB(34,ne,t.itemsOnEveryPage,t.p1))),s.xp6(15),s.Q6J("formGroup",t.terminalLimitForm),s.xp6(6),s.Q6J("ngForOf",t.sortedTerminalList),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(2),s.Q6J("disabled",!t.terminalLimitForm.valid),s.xp6(15),s.Q6J("formGroup",t.terminalLimitForm),s.xp6(6),s.Q6J("ngForOf",t.sortedTerminalList),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(1),s.Q6J("ngIf",t.selectedTerminal),s.xp6(2),s.Q6J("disabled",!t.terminalLimitForm.valid),s.xp6(16),s.Q6J("items",t.sortedTerminalList)("ngModel",t.rechargedToID),s.xp6(26),s.Q6J("ngForOf",t.transactionData),s.xp6(5),s.Q6J("ngModel",t.terminalFilter),s.xp6(19),s.Q6J("ngForOf",s.xi3(203,31,t.terminals,t.terminalFilter)))},directives:[p.SP,p.uX,T.a8,T.dk,T.kc,T.n5,T.dn,h.xw,h.Wh,h.SQ,h.yH,l._Y,l.JL,l.sg,A.KE,A.hX,q.Nt,l.Fj,l.JJ,l.u,r.O5,v.gD,r.sg,b.lW,x.YE,x.nU,k.LS,I.w9,l.On,A.TO,U.ey,r.PC,_.Zl,N.Hw,A.R9,l.qQ,l.wV],pipes:[k._s,S.Z],styles:[""]}),ae);function oe(e,t,i){return(e<t?-1:1)*(i?1:-1)}var le=[{path:"",canActivate:[n(2396).c],component:re,data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],ce=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(le)],o.Bz]}),t}(),me=n(5480),se=n(5566),ue=n(5396),de=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,ce,p.Nh,me.q,se.o9,T.QW,l.u5,l.UX,ue.rP,x.JX,v.LD,N.Ps,I.A0,S.h,k.JX]]}),t}()}}])}();