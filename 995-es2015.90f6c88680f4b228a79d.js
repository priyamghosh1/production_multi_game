"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[995],{5995:function(t,i,e){e.r(i),e.d(i,{CpanelModule:function(){return C}});var n=e(8583),r=e(3423),c=e(7716),p=e(1449),o=e(291),s=e(3535),u=e(5913);const l=["PrintTemplate"];function d(t,i){1&t&&(c.TgZ(0,"span"),c._uU(1,"Little dummy Template"),c.qZA(),c.TgZ(2,"h1"),c._uU(3," Test template to print Sukanta "),c.qZA(),c.TgZ(4,"span"),c._uU(5,"Some text"),c.qZA())}function a(t,i){1&t&&(c.TgZ(0,"div",11),c._uU(1," Div to print "),c.TgZ(2,"h1"),c._uU(3," Test div to print "),c.qZA(),c.TgZ(4,"span"),c._uU(5,"Vfl Bochum 1848"),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"span",12),c._uU(8,"FC Schalke 05 - this should NOT print"),c.qZA(),c._UZ(9,"br"),c._UZ(10,"app-receipt",13),c._UZ(11,"img",14),c.qZA()),2&t&&(c.xp6(10),c.Q6J("helloText","Hello!"))}const g=function(){return{color:"red"}},m=function(){return{border:"solid 1px"}},h=function(t,i){return{h1:t,h2:i}};function v(t,i){if(1&t){const t=c.EpF();c.TgZ(0,"div"),c.YNc(1,d,6,0,"ng-template",4,5,c.W1O),c.YNc(3,a,12,1,"div",6),c.TgZ(4,"button",7),c.NdJ("click",function(){return c.CHM(t),c.oxw().printDiv()}),c._uU(5,"Print div"),c.qZA(),c.TgZ(6,"button",7),c.NdJ("click",function(){return c.CHM(t),c.oxw().printTemplate()}),c._uU(7,"Print Template"),c.qZA(),c.TgZ(8,"button",7),c.NdJ("click",function(){return c.CHM(t),c.oxw().printHTMLElementToCurrentWithCustomCSS()}),c._uU(9,"Print Template"),c.qZA(),c.TgZ(10,"div",8),c._uU(11," print this "),c.qZA(),c.TgZ(12,"button",9),c._uU(13,"print"),c.qZA(),c.TgZ(14,"div",10),c._uU(15," sdfs sdf"),c.qZA(),c.qZA()}2&t&&(c.xp6(3),c.Q6J("ngIf",!1),c.xp6(9),c.Q6J("printStyle",c.WLB(4,h,c.DdM(2,g),c.DdM(3,m))))}let Z=(()=>{class t{constructor(t,i){this.ngxPrinterService=t,this.authService=i,this.printWindowSubscription=this.ngxPrinterService.$printWindowOpen.subscribe(t=>{console.log("Print window is open:",t)}),this.$printItems=this.ngxPrinterService.$printItems}ngOnInit(){this.user=this.authService.userBehaviorSubject.value}printDiv(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("printDiv"),this.ngxPrinterService.printOpenWindow=!1}printTemplate(){this.ngxPrinterService.printAngular(this.PrintTemplateTpl)}printHTMLElementToCurrentWithCustomCSS(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.renderClass="current-window",this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement),this.ngxPrinterService.printOpenWindow=!0,this.ngxPrinterService.renderClass="default"}printerMarkerClicked(){alert("Print marker clicked")}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(o.Al),c.Y36(s.e))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-cpanel"]],viewQuery:function(t,i){if(1&t&&(c.Gf(l,5),c.Gf(p.$,5,c.SBq)),2&t){let t;c.iGM(t=c.CRH())&&(i.PrintTemplateTpl=t.first),c.iGM(t=c.CRH())&&(i.PrintComponent=t.first)}},decls:7,vars:2,consts:[[1,"d-flex","mt-5"],[1,"col-3"],[1,"col-6"],[4,"ngIf"],["id","test"],["PrintTemplate",""],["id","printDiv","directPrint","true","style","border: 1px solid black;",4,"ngIf"],[3,"click"],["id","print-section"],["printSectionId","print-section","ngxPrint","",3,"printStyle"],["ngxPrintItemMarker","","directPrint","true"],["id","printDiv","directPrint","true",2,"border","1px solid black"],["ngxNoPrint",""],[1,"dummy-bg",3,"helloText"],["id","imId2","src","assets/images/developer.jpg",2,"width","50px","height","50px","margin","5px"]],template:function(t,i){1&t&&(c.TgZ(0,"div"),c.TgZ(1,"div",0),c._UZ(2,"div",1),c.TgZ(3,"div",2),c._uU(4),c.qZA(),c._UZ(5,"div",1),c.qZA(),c.YNc(6,v,16,7,"div",3),c.qZA()),2&t&&(c.xp6(4),c.hij(" Welcome to ",i.user.userName," "),c.xp6(2),c.Q6J("ngIf",!1))},directives:[n.O5,u.I,p.$],styles:[""]}),t})();const T=[{path:"",canActivate:[e(1068).m],component:Z}];let f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[r.Bz.forChild(T)],r.Bz]}),t})();var x=e(3738),P=e(3679),S=e(8295),A=e(2700);let C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,f,x.QW,P.u5,S.lN,u.K,A.ReceiptModule]]}),t})()}}]);