!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[867],{3867:function(t,n,i){i.r(n),i.d(n,{SettingsModule:function(){return d}});var c=i(8583),r=i(3423),o=i(7716),u=i(1397);function g(e,t){if(1&e){var a=o.EpF();o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o.TgZ(4,"input",5),o.NdJ("click",function(){var e=o.CHM(a).$implicit;return o.oxw().activateGame(e)}),o.qZA(),o.qZA(),o.TgZ(5,"td"),o.TgZ(6,"input",6),o.NdJ("click",function(){var e=o.CHM(a).$implicit;return o.oxw().changeAutoGenerate(e)}),o.qZA(),o.qZA(),o.qZA()}if(2&e){var n=t.$implicit;o.xp6(2),o.Oqu(n.game_name),o.xp6(2),o.Q6J("checked","yes"===n.active),o.xp6(2),o.Q6J("disabled","no"===n.active)("checked","yes"==n.auto_generate)}}function s(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.qZA()),2&e){var a=t.$implicit;o.xp6(2),o.Oqu(a.game_name),o.xp6(2),o.Oqu(a.total_bet),o.xp6(2),o.Oqu(a.total_win),o.xp6(2),o.Oqu(a.profit)}}var Z,l=((Z=function(){function t(a){e(this,t),this.gameService=a,this.gameData=[],this.selectedGame=null}return a(t,[{key:"ngOnInit",value:function(){var e=this;this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(function(t){e.games=t}),this.gameData=this.gameService.getGameData(),this.gameService.getGameDataListener().subscribe(function(t){e.gameData=t,console.log(e.gameData)})}},{key:"changeAutoGenerate",value:function(e){this.gameService.updateAutogenertate(e.id)}},{key:"activateGame",value:function(e){this.gameService.activateActive(e.id)}}]),t}()).\u0275fac=function(e){return new(e||Z)(o.Y36(u.h))},Z.\u0275cmp=o.Xpm({type:Z,selectors:[["app-settings"]],decls:26,vars:2,consts:[[1,"container","pt-5"],[1,"table","col-6","text-center"],["scope","col"],[4,"ngFor","ngForOf"],[1,"table","table-bordered","table-dark","text-center","col-8"],["type","checkbox","data-toggle","toggle",3,"checked","click"],["type","checkbox","data-toggle","toggle",3,"disabled","checked","click"]],template:function(e,t){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"div",0),o.TgZ(2,"table",1),o.TgZ(3,"thead"),o.TgZ(4,"tr"),o.TgZ(5,"th",2),o._uU(6,"Game"),o.qZA(),o.TgZ(7,"th",2),o._uU(8,"Active Game"),o.qZA(),o.TgZ(9,"th",2),o._uU(10,"Auto Generate"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"tbody"),o.YNc(12,g,7,4,"tr",3),o.qZA(),o.qZA(),o.TgZ(13,"table",4),o.TgZ(14,"thead"),o.TgZ(15,"tr"),o.TgZ(16,"th"),o._uU(17,"Game Data"),o.qZA(),o.TgZ(18,"th"),o._uU(19,"Total Bet"),o.qZA(),o.TgZ(20,"th"),o._uU(21,"Total Win"),o.qZA(),o.TgZ(22,"th"),o._uU(23,"Profit"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(24,"tbody"),o.YNc(25,s,9,4,"tr",3),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e&&(o.xp6(12),o.Q6J("ngForOf",t.games),o.xp6(13),o.Q6J("ngForOf",t.gameData))},directives:[c.sg],styles:[""]}),Z),f=[{path:"",canActivate:[i(1068).m],component:l}],m=function(){var t=a(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.Bz.forChild(f)],r.Bz]}),t}(),p=i(3679),d=function(){var t=a(function t(){e(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,m,p.u5]]}),t}()}}])}();