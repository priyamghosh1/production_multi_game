!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[24],{3024:function(t,a,n){n.r(a),n.d(a,{MasterTerminalModule:function(){return ve}});var r=n(8583),o=n(3423),l=n(2340),c=n(3679),m=n(8259),s=n.n(m),u=n(7716),d=n(2088),Z=n(2173),g=n(3535),f=n(1599),T=n(5620),p=n(7431),h=n(5939),A=n(3738),q=n(5618),v=n(8295),x=n(9983),b=n(7441),U=n(1095),I=n(1494),k=n(2533),_=n(6640),N=n(2458),w=n(8030),y=n(6627),S=n(5396),J=n(4981);function L(e,t){1&e&&(u.TgZ(0,"mat-error"),u._uU(1,"This field is Required"),u.qZA())}function C(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(2);u.xp6(1),u.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function F(e,t){if(1&e&&(u.TgZ(0,"div",55),u.YNc(1,L,2,0,"mat-error",56),u.YNc(2,C,2,1,"mat-error",56),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),u.xp6(1),u.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function Q(e,t){if(1&e&&(u.TgZ(0,"mat-option",57),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.userId),u.xp6(1),u.hij(" ",i.userName," ")}}function M(e,t){if(1&e&&(u.TgZ(0,"mat-option",57),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.id),u.xp6(1),u.hij(" ",i.slab_status," ")}}function B(e,t){if(1&e&&(u.TgZ(0,"mat-option",57),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.userId),u.xp6(1),u.hij(" ",i.userName," ")}}function O(e,t){1&e&&(u.TgZ(0,"div"),u._UZ(1,"i",62),u.qZA())}function Y(e,t){1&e&&(u.TgZ(0,"div"),u._UZ(1,"i",63),u.qZA())}function P(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"button",64),u.NdJ("click",function(){u.CHM(i);var e=u.oxw().$implicit;return u.oxw().approveLogin(e)}),u._uU(1,"Approve"),u.qZA()}}function D(e,t){1&e&&(u.TgZ(0,"label"),u._uU(1,"Approved"),u.qZA())}function R(e,t){1&e&&(u.TgZ(0,"div"),u._UZ(1,"span",65),u.qZA())}function j(e,t){1&e&&(u.TgZ(0,"div"),u._UZ(1,"span",66),u.qZA())}function V(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"tr",58),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.YNc(5,O,2,0,"div",56),u.YNc(6,Y,2,0,"div",56),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u._uU(12),u.qZA(),u.TgZ(13,"td"),u._uU(14),u.qZA(),u.TgZ(15,"td"),u.YNc(16,P,2,0,"button",59),u.YNc(17,D,2,0,"label",56),u.qZA(),u.TgZ(18,"td"),u.YNc(19,R,2,0,"div",56),u.YNc(20,j,2,0,"div",56),u.qZA(),u.TgZ(21,"td"),u.TgZ(22,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().updateBlock(e.terminalId)}),u.qZA(),u.qZA(),u.TgZ(23,"td"),u.TgZ(24,"i",61),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().editTerminal(e)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var a=t.$implicit,n=t.index,r=u.oxw();u.Q6J("ngStyle",r.getBackgroundColor(n)),u.xp6(2),u.Oqu(n+1),u.xp6(2),u.hij(" ",a.terminalName," "),u.xp6(1),u.Q6J("ngIf","exe"==a.platform),u.xp6(1),u.Q6J("ngIf","apk"==a.platform),u.xp6(2),u.Oqu(a.pin),u.xp6(2),u.Oqu(a.balance),u.xp6(2),u.Oqu(a.commission),u.xp6(2),u.Oqu(a.stockist.userName),u.xp6(2),u.Q6J("ngIf",1==a.loginActivate),u.xp6(1),u.Q6J("ngIf",2==a.loginActivate),u.xp6(2),u.Q6J("ngIf","Offline"==a.status),u.xp6(1),u.Q6J("ngIf","Online"==a.status),u.xp6(2),u.Q6J("checked",a.blocked)}}function $(e,t){if(1&e&&(u.TgZ(0,"mat-option",57),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.terminalId),u.xp6(1),u.hij(" ",i.pin," ")}}function E(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",68),u.TgZ(4,"mat-icon",69),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.terminalName)}}function G(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",70),u.TgZ(4,"mat-icon",69),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.balance)}}function H(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Stockist owner"),u.qZA(),u._UZ(3,"input",68),u.TgZ(4,"mat-icon",69),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.userName)}}function z(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Stockist balance"),u.qZA(),u._UZ(3,"input",70),u.TgZ(4,"mat-icon",69),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.balance)}}function X(e,t){if(1&e&&(u.TgZ(0,"div",5),u.YNc(1,H,6,1,"mat-form-field",38),u.YNc(2,z,6,1,"mat-form-field",38),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal),u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function W(e,t){if(1&e&&(u.TgZ(0,"mat-error"),u._uU(1),u.qZA()),2&e){var i=u.oxw(3);u.xp6(1),u.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function K(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",72),u.TgZ(1,"mat-label"),u._uU(2,"Recharge amount"),u.qZA(),u._UZ(3,"input",73),u.TgZ(4,"mat-icon",69),u._uU(5," money"),u.qZA(),u.YNc(6,W,2,1,"mat-error",56),u.qZA()),2&e){var i=u.oxw(2);u.xp6(6),u.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function ee(e,t){if(1&e&&(u.TgZ(0,"div",5),u.YNc(1,K,7,1,"mat-form-field",71),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function te(e,t){if(1&e&&(u.TgZ(0,"mat-option",57),u._uU(1),u.qZA()),2&e){var i=t.$implicit;u.Q6J("value",i.terminalId),u.xp6(1),u.hij(" ",i.pin," ")}}function ie(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Name"),u.qZA(),u._UZ(3,"input",68),u.TgZ(4,"mat-icon",69),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.terminalName)}}function ae(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Current balance"),u.qZA(),u._UZ(3,"input",70),u.TgZ(4,"mat-icon",69),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.Q6J("value",i.selectedTerminal.balance)}}function ne(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Stockist owner"),u.qZA(),u._UZ(3,"input",68),u.TgZ(4,"mat-icon",69),u._uU(5,"person_pin"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.userName)}}function re(e,t){if(1&e&&(u.TgZ(0,"mat-form-field",67),u.TgZ(1,"mat-label"),u._uU(2,"Stockist balance"),u.qZA(),u._UZ(3,"input",70),u.TgZ(4,"mat-icon",69),u._uU(5,"account_balance_wallet"),u.qZA(),u.qZA()),2&e){var i=u.oxw(2);u.xp6(3),u.Q6J("value",i.selectedTerminal.stockist.balance)}}function oe(e,t){if(1&e&&(u.TgZ(0,"div",5),u.YNc(1,ne,6,1,"mat-form-field",38),u.YNc(2,re,6,1,"mat-form-field",38),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal),u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function le(e,t){1&e&&(u.TgZ(0,"mat-form-field",72),u.TgZ(1,"mat-label"),u._uU(2,"Recharge amount1"),u.qZA(),u._UZ(3,"input",73),u.TgZ(4,"mat-icon",69),u._uU(5," money"),u.qZA(),u.qZA())}function ce(e,t){if(1&e&&(u.TgZ(0,"div",5),u.YNc(1,le,6,0,"mat-form-field",71),u.qZA()),2&e){var i=u.oxw();u.xp6(1),u.Q6J("ngIf",i.selectedTerminal)}}function me(e,t){if(1&e&&(u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u._uU(12),u.qZA(),u.TgZ(13,"td"),u._uU(14),u.qZA(),u.qZA()),2&e){var i=t.$implicit,a=t.index;u.xp6(2),u.Oqu(a+1),u.xp6(2),u.Oqu(i.rechargedTo.userName),u.xp6(2),u.Oqu(i.rechargedby.userName),u.xp6(2),u.Oqu(i.oldAmount),u.xp6(2),u.Oqu(i.rechargedAmount),u.xp6(2),u.Oqu(i.newAmount),u.xp6(2),u.Oqu(i.dateAndTime)}}function se(e,t){if(1&e&&(u.TgZ(0,"tr"),u.TgZ(1,"td"),u._uU(2),u.qZA(),u.TgZ(3,"td"),u._uU(4),u.qZA(),u.TgZ(5,"td"),u._uU(6),u.qZA(),u.TgZ(7,"td"),u._uU(8),u.qZA(),u.TgZ(9,"td"),u._uU(10),u.qZA(),u.TgZ(11,"td"),u._uU(12),u.qZA(),u.TgZ(13,"td"),u._uU(14),u.qZA(),u.qZA()),2&e){var i=t.$implicit,a=t.index;u.xp6(2),u.Oqu(a+1),u.xp6(2),u.Oqu(i.rechargedTo.userName),u.xp6(2),u.Oqu(i.rechargedby.userName),u.xp6(2),u.Oqu(i.oldAmount),u.xp6(2),u.Oqu(i.rechargedAmount),u.xp6(2),u.Oqu(i.newAmount),u.xp6(2),u.Oqu(i.dateAndTime)}}function ue(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"tr"),u.TgZ(1,"td",53),u._uU(2),u.qZA(),u.TgZ(3,"td",53),u._uU(4),u.qZA(),u.TgZ(5,"td",53),u.TgZ(6,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().gamePermissionUpdate(1,e.terminalId)}),u.qZA(),u.qZA(),u.TgZ(7,"td",53),u.TgZ(8,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().gamePermissionUpdate(2,e.terminalId)}),u.qZA(),u.qZA(),u.TgZ(9,"td",53),u.TgZ(10,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().gamePermissionUpdate(3,e.terminalId)}),u.qZA(),u.qZA(),u.TgZ(11,"td",53),u.TgZ(12,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().gamePermissionUpdate(4,e.terminalId)}),u.qZA(),u.qZA(),u.TgZ(13,"td",53),u.TgZ(14,"input",60),u.NdJ("click",function(){var e=u.CHM(i).$implicit;return u.oxw().gamePermissionUpdate(5,e.terminalId)}),u.qZA(),u.qZA(),u.qZA()}if(2&e){var a=t.$implicit,n=t.index;u.xp6(2),u.Oqu(n+1),u.xp6(2),u.Oqu(a.terminalName),u.xp6(2),u.Q6J("checked",1==a.gamePermission.game1),u.xp6(2),u.Q6J("checked",1==a.gamePermission.game2),u.xp6(2),u.Q6J("checked",1==a.gamePermission.game3),u.xp6(2),u.Q6J("checked",1==a.gamePermission.game4),u.xp6(2),u.Q6J("checked",1==a.gamePermission.game5)}}function de(e,t){if(1&e){var i=u.EpF();u.TgZ(0,"div",74),u.TgZ(1,"div",75),u.TgZ(2,"mat-slide-toggle",76),u.NdJ("change",function(){u.CHM(i);var e=u.oxw();return e.showDevArea=!e.showDevArea}),u._uU(3),u.qZA(),u.qZA(),u.qZA()}if(2&e){var a=u.oxw();u.xp6(3),u.Oqu(a.showDevArea?"Hide Developer Area":"Show Developer Area")}}function Ze(e,t){if(1&e&&(u.TgZ(0,"div",74),u.TgZ(1,"div",77),u.TgZ(2,"pre"),u._uU(3),u._uU(4),u._uU(5,"\n      "),u.qZA(),u.qZA(),u._UZ(6,"div",75),u.qZA()),2&e){var i=u.oxw();u.xp6(3),u.hij("        ",i.terminalLimitForm.valid,"\n      "),u.xp6(1),u.hij("\n        terminalForm = ",i.terminalMasterForm.value,"\n      ")}}var ge=function(e,t){return{itemsPerPage:e,currentPage:t}};function fe(e,t,i){return(e<t?-1:1)*(i?1:-1)}var Te,pe=[{path:"",component:(Te=function(){function t(i,a,n,r,o,m){var s=this;e(this,t),this.masterTerminalService=i,this.masterStockistService=a,this.authService=n,this.masterSuperStockistService=r,this.commonService=o,this.transactionReportService=m,this.isProduction=l.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.superStockists=[],this.selectedTerminal=null,this.selectedStockiest=null,this.payoutSlabs=[],this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.terminalFilter=null,this.p=1,this.p1=1,this.itemsOnEveryPage=10,this.rechargedToID=null,this.transactionData=[],this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(function(e){s.user=e}),this.terminalMasterForm=new c.cw({id:new c.NI(null),terminalName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),stockistId:new c.NI(null,[c.kI.required]),payoutSlabId:new c.NI(null,[c.kI.required]),superStockistId:new c.NI(null,[c.kI.required]),pin:new c.NI(null,[c.kI.required]),commission:new c.NI(null,[c.kI.required,c.kI.max(this.user.commission)])}),this.terminalLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.max(0)])}),this.terminalAdjustLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.max(2)])})}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=e.terminals.filter(function(t){return t.stockist.userId===e.user.userId})}),this.sortedTerminalList=this.terminals.filter(function(t){return t.stockist.userId===e.user.userId}),this.payoutSlabs=this.masterTerminalService.getPayoutSlabs(),this.masterTerminalService.getPayoutSlabListener().subscribe(function(t){e.payoutSlabs=t}),this.masterSuperStockistService.getSuperStockistListener().subscribe(function(t){e.superStockists=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t;var i=e.stockists.findIndex(function(t){return t.userId===e.user.userId});e.selectedStockiest=e.stockists[i],e.terminalMasterForm.patchValue({stockistId:e.user.userId,superStockistId:e.selectedStockiest.superStockistId})})}},{key:"refreshTerminalList",value:function(){this.masterTerminalService.getAllUpdatedTerminals()}},{key:"gamePermissionUpdate",value:function(e,t){this.masterTerminalService.gamePermission(e,t).subscribe()}},{key:"updateBlock",value:function(e){this.masterTerminalService.updateBlock(e).subscribe()}},{key:"approveLogin",value:function(e){this.masterTerminalService.loginApprove(e.terminalId).subscribe()}},{key:"getTransaction",value:function(){var e=this;this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(function(t){e.transactionData=t.data})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([c.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId,payoutSlabId:e.payoutSlabId,pin:e.pin,commission:e.commission}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;s().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,pin:e.terminalMasterForm.value.pin,superStockistId:e.terminalMasterForm.value.superStockistId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,userId:e.user.userId,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),s().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"createNewTerminal",value:function(){var e=this;s().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId,superStockistId:e.terminalMasterForm.value.superStockistId,payoutSlabId:e.terminalMasterForm.value.payoutSlabId,createdBy:e.user.userId,pin:e.terminalMasterForm.value.pin,commission:e.terminalMasterForm.value.commission}).subscribe(function(t){1===t.success?(e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),s().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"checkPinValidation",value:function(){var e=this;this.commonService.checkPinValidation(this.terminalMasterForm.value.terminalName).subscribe(function(t){0===t.success?(s().fire({position:"top-end",icon:"error",title:"User already exists",showConfirmButton:!1,timer:2e3}),e.pinCheckValidator=!0,e.terminalMasterForm.patchValue({terminalName:null})):e.pinCheckValidator=!1})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var a="asc"===e.direction;switch(e.active){case"terminalName":return fe(t.terminalName,i.terminalName,a);case"stockistName":return fe(t.stockist.userName,i.stockist.userName,a);case"balance":return fe(t.balance,i.balance,a);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;parseInt(this.terminalLimitForm.value.amount)<0?s().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.terminalLimitForm.value.amount)>parseInt(String(this.user.balance))?s().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):s().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalLimitForm.controls.amount.setValidators([c.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),s().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"adjustPointToTerminal",value:function(){var e=this;parseInt(this.terminalAdjustLimitForm.value.amount)<0?s().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):s().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalAdjustLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:-e.terminalAdjustLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,a=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[a].balance=i.balance,e.terminals[a].stockist.balance=i.stockist.balance,e.authService.setUserBalanceBy(e.user.balance-e.terminalAdjustLimitForm.value.amount),e.sortedTerminalList[a].balance=i.balance,e.sortedTerminalList[a].stockist.balance=i.stockist.balance,e.highLightedRowIndex=a,e.terminalAdjustLimitForm.controls.amount.setValidators([c.kI.max(i.stockist.balance)]),e.terminalAdjustLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),s().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else s().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),t}(),Te.\u0275fac=function(e){return new(e||Te)(u.Y36(d.S),u.Y36(Z.E),u.Y36(g.e),u.Y36(f.Q),u.Y36(T.v),u.Y36(p.z))},Te.\u0275cmp=u.Xpm({type:Te,selectors:[["app-master-terminal"]],decls:256,vars:41,consts:[[2,"text-align","center"],["label","Create"],[1,"flex-row","mt-2"],[1,"col"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name",3,"change"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["formControlName","stockistId","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","payoutSlabId"],["formControlName","superStockistId","disabled",""],[1,"col-10","m-0","p-0"],["type","text","matInput","","formControlName","commission","placeholder","Commission"],[2,"color","red"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-button","","color","primary",3,"click"],[1,"material-icons"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"pageChange"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["label","Adjust Point"],["label","Tranaction"],["fxFlex","60"],["bindLabel","pin","bindValue","terminalId",3,"items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"click"],[1,"mt-2",2,"background-color","#6c757d5e"],[4,"ngFor","ngForOf"],["label","Terminal Tranaction"],["label","Game Allocation"],["appearance","fill",1,"example-full-width","col-5"],["matInput","","placeholder","Terminal Name",3,"ngModel","ngModelChange"],[1,"table","table-bordered","col-8"],["scope","col"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],["mat-button","","color","primary","style","border: black solid 1px",3,"click",4,"ngIf"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],[1,"bi","bi-pc-display-horizontal"],[1,"bi","bi-phone"],["mat-button","","color","primary",2,"border","black solid 1px",3,"click"],[1,"bi","bi-dot","red-color"],[1,"bi","bi-dot","green-color"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","number","min","1","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"h1"),u._uU(2,"Terminal"),u.qZA(),u.qZA(),u.TgZ(3,"mat-tab-group"),u.TgZ(4,"mat-tab",1),u.TgZ(5,"div",2),u.TgZ(6,"div",3),u.TgZ(7,"mat-card"),u.TgZ(8,"mat-card-header"),u._UZ(9,"div",4),u.TgZ(10,"mat-card-title"),u._uU(11,"New Terminal Form"),u.qZA(),u.qZA(),u.TgZ(12,"mat-card-content"),u.TgZ(13,"div",5),u.TgZ(14,"div",6),u.TgZ(15,"form",7),u.TgZ(16,"div",5),u.TgZ(17,"mat-form-field",6),u.TgZ(18,"mat-label"),u._uU(19,"Terminal Name"),u.qZA(),u.TgZ(20,"input",8),u.NdJ("change",function(){return t.checkPinValidation()}),u.qZA(),u.YNc(21,F,3,2,"div",9),u.qZA(),u.TgZ(22,"mat-form-field",6),u.TgZ(23,"mat-label"),u._uU(24,"PIN"),u.qZA(),u._UZ(25,"input",10),u.qZA(),u.qZA(),u.TgZ(26,"div",5),u.TgZ(27,"mat-form-field",6),u.TgZ(28,"mat-label"),u._uU(29,"Stockist"),u.qZA(),u.TgZ(30,"mat-select",11),u.YNc(31,Q,2,2,"mat-option",12),u.qZA(),u.qZA(),u.qZA(),u.TgZ(32,"div",5),u.TgZ(33,"mat-form-field",6),u.TgZ(34,"mat-label"),u._uU(35,"Payout Slab"),u.qZA(),u.TgZ(36,"mat-select",13),u.YNc(37,M,2,2,"mat-option",12),u.qZA(),u.qZA(),u.qZA(),u.TgZ(38,"div",5),u.TgZ(39,"mat-form-field",6),u.TgZ(40,"mat-label"),u._uU(41,"Super Stockist"),u.qZA(),u.TgZ(42,"mat-select",14),u.YNc(43,B,2,2,"mat-option",12),u.qZA(),u.qZA(),u.qZA(),u.TgZ(44,"div",5),u.TgZ(45,"div",15),u.TgZ(46,"mat-form-field",6),u.TgZ(47,"mat-label"),u._uU(48,"Commission"),u.qZA(),u._UZ(49,"input",16),u.qZA(),u.qZA(),u.TgZ(50,"label",17),u._uU(51),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(52,"div",5),u.TgZ(53,"button",18),u.NdJ("click",function(){return t.createNewTerminal()}),u._uU(54,"Create"),u.qZA(),u.TgZ(55,"button",18),u.NdJ("click",function(){return t.updateTerminal()}),u._uU(56,"Update"),u.qZA(),u.TgZ(57,"button",19),u.NdJ("click",function(){return t.clearMasterTerminalForm()}),u._uU(58,"clear"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(59,"div",20),u.TgZ(60,"table",21),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(61,"thead"),u.TgZ(62,"tr"),u.TgZ(63,"th",22),u._uU(64,"Terminal List"),u.qZA(),u.TgZ(65,"th",22),u.TgZ(66,"button",23),u.NdJ("click",function(){return t.refreshTerminalList()}),u._uU(67," Refresh "),u.TgZ(68,"span",24),u._uU(69,"refresh"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(70,"tr"),u.TgZ(71,"th"),u._uU(72,"Id"),u.qZA(),u.TgZ(73,"th",25),u._uU(74,"Terminal name"),u.qZA(),u.TgZ(75,"th",26),u._uU(76,"Pin"),u.qZA(),u.TgZ(77,"th",27),u._uU(78,"Balance"),u.qZA(),u.TgZ(79,"th",27),u._uU(80,"Commission"),u.qZA(),u.TgZ(81,"th",28),u._uU(82,"Stockist"),u.qZA(),u.TgZ(83,"th"),u._uU(84,"Login Approve"),u.qZA(),u.TgZ(85,"th"),u._uU(86,"Status"),u.qZA(),u.TgZ(87,"th",28),u._uU(88,"Blocked"),u.qZA(),u.TgZ(89,"th",29),u._uU(90,"Edit"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(91,"tbody"),u.YNc(92,V,25,14,"tr",30),u.ALo(93,"paginate"),u.qZA(),u.qZA(),u.TgZ(94,"pagination-controls",31),u.NdJ("pageChange",function(e){return t.p1=e}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(95,"mat-tab",32),u.TgZ(96,"div",33),u._UZ(97,"div",34),u.TgZ(98,"div",35),u.TgZ(99,"mat-card"),u.TgZ(100,"mat-card-header"),u._UZ(101,"div",4),u.TgZ(102,"mat-card-title"),u._uU(103,"Recharge Terminal"),u.qZA(),u.qZA(),u.TgZ(104,"mat-card-content"),u.TgZ(105,"div",5),u.TgZ(106,"div",6),u.TgZ(107,"form",7),u.TgZ(108,"div",5),u.TgZ(109,"mat-form-field",36),u.TgZ(110,"mat-label"),u._uU(111,"Terminal"),u.qZA(),u.TgZ(112,"mat-select",37),u.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),u.YNc(113,$,2,2,"mat-option",12),u.qZA(),u.qZA(),u.YNc(114,E,6,1,"mat-form-field",38),u.YNc(115,G,6,1,"mat-form-field",38),u.qZA(),u.YNc(116,X,3,2,"div",39),u.YNc(117,ee,2,1,"div",39),u.TgZ(118,"div",5),u.TgZ(119,"button",40),u.NdJ("click",function(){return t.rechargeToTerminal()}),u._uU(120,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(121,"div",34),u.qZA(),u.qZA(),u.TgZ(122,"mat-tab",41),u.TgZ(123,"div",33),u._UZ(124,"div",34),u.TgZ(125,"div",35),u.TgZ(126,"mat-card"),u.TgZ(127,"mat-card-header"),u._UZ(128,"div",4),u.TgZ(129,"mat-card-title"),u._uU(130,"Recharge Terminal"),u.qZA(),u.qZA(),u.TgZ(131,"mat-card-content"),u.TgZ(132,"div",5),u.TgZ(133,"div",6),u.TgZ(134,"form",7),u.TgZ(135,"div",5),u.TgZ(136,"mat-form-field",36),u.TgZ(137,"mat-label"),u._uU(138,"Terminal"),u.qZA(),u.TgZ(139,"mat-select",37),u.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),u.YNc(140,te,2,2,"mat-option",12),u.qZA(),u.qZA(),u.YNc(141,ie,6,1,"mat-form-field",38),u.YNc(142,ae,6,1,"mat-form-field",38),u.qZA(),u.YNc(143,oe,3,2,"div",39),u.YNc(144,ce,2,1,"div",39),u.TgZ(145,"div",5),u.TgZ(146,"button",19),u.NdJ("click",function(){return t.adjustPointToTerminal()}),u._uU(147,"Save"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(148,"div",34),u.qZA(),u.qZA(),u.TgZ(149,"mat-tab",42),u.TgZ(150,"div",33),u._UZ(151,"div",34),u.TgZ(152,"div",35),u.TgZ(153,"mat-card"),u.TgZ(154,"mat-card-header"),u._UZ(155,"div",4),u.TgZ(156,"mat-card-title"),u._uU(157,"Terminal Transaction Report"),u.qZA(),u.qZA(),u.TgZ(158,"mat-card-content"),u.TgZ(159,"div",5),u.TgZ(160,"div",6),u.TgZ(161,"div",43),u.TgZ(162,"ng-select",44),u.NdJ("ngModelChange",function(e){return t.rechargedToID=e}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(163,"button",45),u.NdJ("click",function(){return t.getTransaction()}),u._uU(164,"Search"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(165,"div",34),u.qZA(),u.TgZ(166,"div",46),u.TgZ(167,"table",21),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(168,"thead"),u.TgZ(169,"tr"),u.TgZ(170,"th",22),u._uU(171,"Terminal List"),u.qZA(),u.qZA(),u.TgZ(172,"tr"),u.TgZ(173,"th"),u._uU(174,"Id"),u.qZA(),u.TgZ(175,"th",25),u._uU(176,"Recharge To"),u.qZA(),u.TgZ(177,"th",26),u._uU(178,"Recharge By"),u.qZA(),u.TgZ(179,"th",27),u._uU(180,"Old Amount"),u.qZA(),u.TgZ(181,"th",27),u._uU(182,"Recharged Amount"),u.qZA(),u.TgZ(183,"th",28),u._uU(184,"New Amount"),u.qZA(),u.TgZ(185,"th",28),u._uU(186,"Date and Time"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(187,"tbody"),u.YNc(188,me,15,7,"tr",47),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(189,"mat-tab",48),u.TgZ(190,"div",33),u._UZ(191,"div",34),u.TgZ(192,"div",35),u.TgZ(193,"mat-card"),u.TgZ(194,"mat-card-header"),u._UZ(195,"div",4),u.TgZ(196,"mat-card-title"),u._uU(197,"Terminal Transaction Report"),u.qZA(),u.qZA(),u.TgZ(198,"mat-card-content"),u.TgZ(199,"div",5),u.TgZ(200,"div",6),u.TgZ(201,"div",43),u.TgZ(202,"ng-select",44),u.NdJ("ngModelChange",function(e){return t.rechargedToID=e}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(203,"button",45),u.NdJ("click",function(){return t.getTransaction()}),u._uU(204,"Search"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u._UZ(205,"div",34),u.qZA(),u.TgZ(206,"div",46),u.TgZ(207,"table",21),u.NdJ("matSortChange",function(e){return t.sortData(e)}),u.TgZ(208,"thead"),u.TgZ(209,"tr"),u.TgZ(210,"th",22),u._uU(211,"Terminal List"),u.qZA(),u.qZA(),u.TgZ(212,"tr"),u.TgZ(213,"th"),u._uU(214,"Id"),u.qZA(),u.TgZ(215,"th",25),u._uU(216,"Recharge To"),u.qZA(),u.TgZ(217,"th",26),u._uU(218,"Recharge By"),u.qZA(),u.TgZ(219,"th",27),u._uU(220,"Old Amount"),u.qZA(),u.TgZ(221,"th",27),u._uU(222,"Recharged Amount"),u.qZA(),u.TgZ(223,"th",28),u._uU(224,"New Amount"),u.qZA(),u.TgZ(225,"th",28),u._uU(226,"Date and Time"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(227,"tbody"),u.YNc(228,se,15,7,"tr",47),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(229,"mat-tab",49),u.TgZ(230,"mat-form-field",50),u.TgZ(231,"mat-label"),u._uU(232,"Terminal Name"),u.qZA(),u.TgZ(233,"input",51),u.NdJ("ngModelChange",function(e){return t.terminalFilter=e}),u.qZA(),u.qZA(),u.TgZ(234,"table",52),u.TgZ(235,"thead"),u.TgZ(236,"tr"),u.TgZ(237,"th",53),u._uU(238,"Sl. no."),u.qZA(),u.TgZ(239,"th",53),u._uU(240,"Terminal Name"),u.qZA(),u.TgZ(241,"th",53),u._uU(242,"Triple Chance"),u.qZA(),u.TgZ(243,"th",53),u._uU(244,"12 Card"),u.qZA(),u.TgZ(245,"th",53),u._uU(246,"16 Card"),u.qZA(),u.TgZ(247,"th",53),u._uU(248,"Single"),u.qZA(),u.TgZ(249,"th",53),u._uU(250,"Double"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(251,"tbody"),u.YNc(252,ue,15,7,"tr",47),u.ALo(253,"filter"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.YNc(254,de,4,1,"div",54),u.YNc(255,Ze,7,2,"div",54)),2&e&&(u.xp6(15),u.Q6J("formGroup",t.terminalMasterForm),u.xp6(6),u.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),u.xp6(10),u.Q6J("ngForOf",t.stockists),u.xp6(6),u.Q6J("ngForOf",t.payoutSlabs),u.xp6(6),u.Q6J("ngForOf",t.superStockists),u.xp6(8),u.hij("(Max: ",t.user.commission,")"),u.xp6(2),u.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble||t.pinCheckValidator),u.xp6(2),u.Q6J("disabled",!t.isTerminalUpdatAble),u.xp6(37),u.Q6J("ngForOf",u.xi3(93,32,t.sortedTerminalList,u.WLB(38,ge,t.itemsOnEveryPage,t.p1))),u.xp6(15),u.Q6J("formGroup",t.terminalLimitForm),u.xp6(6),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(2),u.Q6J("disabled",!t.terminalLimitForm.valid),u.xp6(15),u.Q6J("formGroup",t.terminalAdjustLimitForm),u.xp6(6),u.Q6J("ngForOf",t.sortedTerminalList),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(1),u.Q6J("ngIf",t.selectedTerminal),u.xp6(18),u.Q6J("items",t.sortedTerminalList)("ngModel",t.rechargedToID),u.xp6(26),u.Q6J("ngForOf",t.transactionData),u.xp6(14),u.Q6J("items",t.sortedTerminalList)("ngModel",t.rechargedToID),u.xp6(26),u.Q6J("ngForOf",t.transactionData),u.xp6(5),u.Q6J("ngModel",t.terminalFilter),u.xp6(19),u.Q6J("ngForOf",u.xi3(253,35,t.terminals,t.terminalFilter)),u.xp6(2),u.Q6J("ngIf",!t.isProduction),u.xp6(1),u.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[h.SP,h.uX,A.a8,A.dk,A.kc,A.n5,A.dn,q.xw,q.Wh,q.SQ,q.yH,c._Y,c.JL,c.sg,v.KE,v.hX,x.Nt,c.Fj,c.JJ,c.u,r.O5,b.gD,r.sg,U.lW,I.YE,I.nU,k.LS,_.w9,c.On,v.TO,N.ey,r.PC,w.Zl,y.Hw,v.R9,c.qQ,c.wV,S.Rr],pipes:[k._s,J.Z],styles:[".red-color[_ngcontent-%COMP%]{color:red;font-size:50px}.green-color[_ngcontent-%COMP%]{color:#1aff00;font-size:50px}"]}),Te)}],he=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[o.Bz.forChild(pe)],o.Bz]}),t}(),Ae=n(5480),qe=n(5566),ve=function(){var t=i(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[r.ez,he,h.Nh,Ae.q,qe.o9,A.QW,c.u5,c.UX,S.rP,I.JX,b.LD,y.Ps,_.A0,I.JX,J.h,k.JX]]}),t}()}}])}();