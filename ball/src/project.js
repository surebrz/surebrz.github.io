require=function t(e,o,n){function i(s,r){if(!o[s]){if(!e[s]){var l="function"==typeof require&&require;if(!r&&l)return l(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=o[s]={exports:{}};e[s][0].call(h.exports,function(t){var o=e[s][1][t];return i(o?o:t)},h,h.exports,t,e,o,n)}return o[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({Common:[function(t,e,o){"use strict";cc._RFpush(e,"c34d5KNfrVDv7J7WZWJBGlV","Common");var n={POST:"POST",GET:"GET",XMLHTTPRequest:function(t,e,o,i){i=i||n.GET;var a=cc.loader.getXMLHttpRequest();a.open(i,t,!0),cc.sys.isNative&&a.setRequestHeader("Accept-Encoding","gzip,deflate"),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.timeout=5e3,["loadstart","abort","error","load","loadend","timeout"].forEach(function(t){a["on"+t]=function(){}});var s="";for(var r in e)s=s+"&"+r+"="+e[r];s.length>0&&(s=s.substr(1)),cc.log(s),a.onreadystatechange=function(){4===a.readyState&&o(a)},a.send(s)},handler:function(t,e){return function(){e.apply(t,arguments)}}};e.exports=n,cc._RFpop()},{}],Const:[function(t,e,o){"use strict";cc._RFpush(e,"41c5b4P7WlF4aDAu4S4Gx1N","Const");var n={Events:{Disconnected:"Disconnected",EnterHall:"EnterHall",UpdataHall:"UpdataHall",UpdateRoomInfo:"UpdateRoomInfo",UpdateRoomPlayers:"UpdateRoomPlayers",GameStart:"GameStart",FrameEvent:"FrameEvent",ExitRoom:"ExitRoom"}};e.exports=n,cc._RFpop()},{}],EventManager:[function(t,e,o){"use strict";cc._RFpush(e,"416f5BudPtH2KZeaUScxuyG","EventManager");var n={handlers:{},registerEvent:function(t,e,o){var i=n.handlers;i[t]=i[t]||{},i[t][e]=o},unregisterEvent:function(t){var e=n.handlers;for(var o in e)delete e[o][t]},dispatchEvent:function(t,e){var o=n.handlers;for(var i in o[t])o[t][i](e)}};e.exports=n,cc._RFpop()},{}],GameControl:[function(t,e,o){"use strict";cc._RFpush(e,"585413jvtFBfqIhJStUFLPa","GameControl");var n=t("../common/NetworkWatcher"),i=t("../common/EventManager"),a=t("../common/Const").Events,s=(t("../common/Temp"),t("../common/Common").handler),r={START:"start",PAUSE:"pause",STOP:"stop"},l=function(t,e,o,n){this.spriteControl=t,this.spriteRightPad=e,this.spriteLeftPad=o,this.nodeBall=n,this.spriteControl.node.on(cc.Node.EventType.TOUCH_START,s(this,this.onTouchStart)),this.spriteControl.node.on(cc.Node.EventType.TOUCH_MOVE,s(this,this.onTouchMove)),i.registerEvent(a.FrameEvent,this,s(this,this.onFrameEvent)),this.reset()};l.RADIO=10,e.exports=l;var c=l.prototype;c.start=function(t){this.ballAngle=t||0,this.gameStatus=r.START},c.pause=function(){this.gameStatus=r.PAUSE},c.stop=function(){this.gameStatus=r.STOP},c.isStarted=function(){return this.gameStatus==r.START},c.reset=function(){this.ballX=0,this.ballY=0,this.ballAngle=0,this.ballSpeed=10240,this.stop(),this.frame=0,this.frameEvents=[],this.spriteLeftPad.node.y=0,this.spriteRightPad.node.y=0,this.nodeBall.x=0,this.nodeBall.y=0},c.playerArea=function(t){this.area=t},c.dispose=function(){i.unregisterEvent(this)},c.update=function(t){if(this.updateTimer=this.updateTimer||0,this.updateTimer+=t,!(this.updateTimer<1/30)){this.updateTimer=0,this.sendFrameEvent();for(var e=this.spriteRightPad.node.y,o=this.spriteLeftPad.node.y,n=0;n<this.frameEvents.length;n+=1){var i=this.frameEvents[n];this.frame=i.frame,isNaN(i.ly)||i.ly==-1||(o+=i.ly,cc.log(i.frame,o)),!isNaN(i.ry)&i.ry!=-1&&(e+=i.ry),this.nextBall(t,e,o)}this.spriteLeftPad.node.y=parseInt(o),this.spriteRightPad.node.y=parseInt(e),this.nodeBall.x=this.realBallX(),this.nodeBall.y=this.realBallY(),this.frame+=1,this.frameEvents=[]}},c.setupBall=function(t,e,o){this.ballX=t,this.ballY=e,this.ballAngle=o},c.realBallX=function(){return Math.floor(this.ballX/1024)},c.realBallY=function(){return Math.floor(this.ballY/1024)},c.nextBall=function(t,e,o){this.ballX=this.ballX+this.ballSpeed*Math.cos(this.ballAngle/180*Math.PI),this.ballY=this.ballY+this.ballSpeed*Math.sin(this.ballAngle/180*Math.PI),this.realBallX()-l.RADIO<=-this.spriteControl.node.width/2&&(this.ballX=1024*(-this.spriteControl.node.width/2+l.RADIO),this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=90+this.ballAngle),this.realBallX()+l.RADIO>=this.spriteControl.node.width/2&&(this.ballX=1024*(this.spriteControl.node.width/2-l.RADIO),this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=this.ballAngle-90),this.realBallY()-l.RADIO<=-this.spriteControl.node.height/2&&(this.ballY=1024*(-this.spriteControl.node.height/2+l.RADIO),this.ballAngle=360-this.ballAngle),this.realBallY()+l.RADIO>=this.spriteControl.node.height/2&&(this.ballY=1024*(this.spriteControl.node.height/2-l.RADIO),this.ballAngle=360-this.ballAngle),this.checkPads(e,o)},c.checkPads=function(t,e){for(var o=[this.spriteRightPad,this.spriteLeftPad],n=0;n<o.length;n+=1){var i=o[n],a=i.node.x,s=0==n?t:e,r=i.node.width,c=i.node.height;this.realBallX()>=a-r/2&&this.realBallX()<=a+r/2&&this.realBallY()>=s-c/2&&this.realBallY()<=s+c/2&&(this.ballAngle<90||this.ballAngle>270?(this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=this.ballAngle-90,this.ballX=1024*(a-i.node.width/2-l.RADIO)):(this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=90+this.ballAngle,this.ballX=1024*(a+i.node.width/2+l.RADIO)))}},c.onTouchStart=function(){this.lastTouchPos=null},c.onTouchMove=function(t){var e=[this.spriteRightPad,this.spriteLeftPad],o=e[this.area],n=t.getTouches(),i=n[0].getLocation(),a=i.x,s=i.y;this.lastTouchPos=this.lastTouchPos||i;var r=(a-this.lastTouchPos.x,s-this.lastTouchPos.y);this.lastTouchPos=cc.p(a,s);var l=o.node.x,c=Math.floor(5*r);this.collectFrameEvent(cc.p(l,c))},c.onFrameEvent=function(t){this.frameEvents.push(t)},c.collectFrameEvent=function(t){this.frameEvent={frame:this.frame,y:t.y}},c.sendFrameEvent=function(){if(this.frameEvent){var t="hall.hallHandler.turn_act";n.send(t,this.frameEvent),cc.log("send %s, %s",this.frameEvent.frame,this.frameEvent.y)}delete this.frameEvent},cc._RFpop()},{"../common/Common":"Common","../common/Const":"Const","../common/EventManager":"EventManager","../common/NetworkWatcher":"NetworkWatcher","../common/Temp":"Temp"}],NetworkWatcher:[function(t,e,o){"use strict";cc._RFpush(e,"96444Z7jbxGTrMLs8KuSnjP","NetworkWatcher");var n=window.pomelo,i=t("EventManager"),a=t("Const").Events,s={init:function(){n.on("dse_update_hall",function(t){cc.log("on dse_update_hall"),i.dispatchEvent(a.UpdateHall,t)}),n.on("dse_room_info",function(t){cc.log("on dse_room_info"),i.dispatchEvent(a.UpdateRoomInfo,t)}),n.on("dse_room_players",function(t){cc.log("on dse_room_players"),i.dispatchEvent(a.UpdateRoomPlayers,t)}),n.on("dse_game_start",function(t){cc.log("on dse_game_start"),i.dispatchEvent(a.GameStart,t)}),n.on("dse_turn_act",function(t){i.dispatchEvent(a.FrameEvent,t)}),n.on("disconnect",function(t){i.dispatchEvent(a.Disconnected,t)})},connect:function(t,e,o,r,l,c){var h="gate.gateHandler.queryEntry",m=function(t,e){var h="connector.entryHandler.enter";n.init({host:t,port:e,log:!0},function(){n.request(h,{username:o,password:r,rid:l},function(t){return t.error?void c(t):(s.init(),void i.dispatchEvent(a.EnterHall))})})};n.init({host:t,port:e,log:!0},function(){n.request(h,{username:o},function(t){return n.disconnect(),200!=t.code?void c(t):void m(t.host,t.port)})})},send:function(t,e,o){n.request(t,e,o)}};e.exports=s,cc._RFpop()},{Const:"Const",EventManager:"EventManager"}],SceneHall:[function(t,e,o){"use strict";cc._RFpush(e,"d4cdfJ0Sq1ORo1fQ0i5paKv","SceneHall");var n=t("../common/NetworkWatcher"),i=t("../common/EventManager"),a=t("../common/Const").Events,s=t("../common/Common").handler,r=t("../common/Temp");cc.Class({"extends":cc.Component,properties:{scrollView:{"default":null,type:cc.ScrollView},itemTemplate:{"default":null,type:cc.Node},spacing:10,totalCount:{"default":0,visible:!1}},onLoad:function(){i.registerEvent(a.Disconnected,this,s(this,this.returnToLogin)),i.registerEvent(a.UpdateHall,this,s(this,this.updateHall)),this.roomItems=[],this.requestRooms(),cc.log(this.itemTemplate),this.itemTemplate.getComponent(cc.Label).enabled=!1},onDestroy:function(){i.unregisterEvent(this)},requestRooms:function(){var t="hall.hallHandler.rooms";n.send(t,{},function(t){})},enterRoom:function(t){cc.log("enterRoom"),r.rid=t,cc.director.loadScene("Room")},returnToLogin:function(t){cc.director.loadScene("Login")},updateHall:function(t){if(cc.log(t.rooms),this.totalCount<t.rooms.length)for(var e=this.totalCount;e<t.rooms.length;e+=1)this.addRoom(e);for(var e=0;e<this.totalCount;e+=1)this.updateRoom(e,t.rooms[e])},addRoom:function(t){this.totalCount+=1,this.scrollView.content.height=this.totalCount*(this.itemTemplate.height+this.spacing)+this.spacing;var e=cc.instantiate(this.itemTemplate);this.scrollView.content.addChild(e),e.x=-e.parent.width/2,e.y=-e.height*(.5+t)-this.spacing*(t+1),this.roomItems[t]=e},updateRoom:function(t,e){var o=this.roomItems[t];if(o){var n=o.getComponent(cc.Label);if(e){var i=e.l?e.l:" empty ",a=e.r?e.r:" empty ";n.string=cc.js.formatStr("ROOM %s: %s / %s",e.rid,i,a),n.enabled=!0,o.roomData=e,o.on("touchend",s(this,this.onClickEnterRoom))}else n.enabled=!1,delete o.roomData}},onClickEnterRoom:function(t){var e=t.target;cc.log(e),this.enterRoom(e.roomData.rid),t.stopPropagation()}}),cc._RFpop()},{"../common/Common":"Common","../common/Const":"Const","../common/EventManager":"EventManager","../common/NetworkWatcher":"NetworkWatcher","../common/Temp":"Temp"}],SceneLogin:[function(t,e,o){"use strict";cc._RFpush(e,"cfe02bnZ0xOcL+HkSWlYKug","SceneLogin");var n=t("../common/EventManager"),i=t("../common/Const").Events,a=t("../common/NetworkWatcher"),s=t("../common/Common");cc.Class({"extends":cc.Component,properties:{usernameEdit:{type:cc.EditBox,"default":null},passwordEdit:{type:cc.EditBox,"default":null}},onLoad:function(){n.registerEvent(i.EnterHall,this,this.enterHall)},onDestroy:function(){n.unregisterEvent(this)},enterHall:function(){cc.director.loadScene("Hall")},onSignIn:function(){var t=this.usernameEdit.string,e=this.passwordEdit.string;cc.log(t,e);var o="nocknow.com",n=3014,i=0;a.connect(o,n,t,e,i,function(t){cc.log(t)})},onSignUp:function(){var t=this.usernameEdit.string,e=this.passwordEdit.string;cc.log(t,e);var o="http://nocknow.com/lockstep/?m=Home&a=signup",n={username:t,password:e};s.XMLHTTPRequest(o,n,function(t){cc.log(t.status,t.responseText)},s.POST)}}),cc._RFpop()},{"../common/Common":"Common","../common/Const":"Const","../common/EventManager":"EventManager","../common/NetworkWatcher":"NetworkWatcher"}],SceneRoom:[function(t,e,o){"use strict";cc._RFpush(e,"fb6edKh0V9LYaq9uTt2LFYK","SceneRoom");var n=t("../common/NetworkWatcher"),i=t("../common/EventManager"),a=t("../common/Const").Events,s=t("../common/Temp"),r=t("../common/Common").handler,l=t("../game/GameControl");cc.Class({"extends":cc.Component,properties:{waitingNode:cc.Node,gameNode:cc.Node,titleLabel:cc.Label,leftPlayerLabel:cc.Label,rightPlayerLabel:cc.Label,gamePadLeftSprite:cc.Sprite,gamePadRightSprite:cc.Sprite,gameControlSprite:cc.Sprite,gameBallNode:cc.Node},onLoad:function(){i.registerEvent(a.Disconnected,this,r(this,this.returnToLogin)),i.registerEvent(a.UpdateRoomInfo,this,r(this,this.updateRoom)),i.registerEvent(a.UpdateRoomPlayers,this,r(this,this.updatePlayers)),i.registerEvent(a.GameStart,this,r(this,this.gameStart)),i.registerEvent(a.ExitRoom,this,r(this,this.exitRoom)),this.players={left:{},right:{}},this.selfArea=0,this.roomId=0,this.requestRoomInfo(),this.gameControl=new l(this.gameControlSprite,this.gamePadRightSprite,this.gamePadLeftSprite,this.gameBallNode)},onDestroy:function(){this.gameControl.dispose(),i.unregisterEvent(this)},returnToLogin:function(t){cc.director.loadScene("Login")},requestRoomInfo:function(){cc.log("requestRoomInfo");var t=this,e="hall.hallHandler.enter_room";n.send(e,{rid:s.rid},function(e){e.error&&(cc.log(e),t.exitRoom())})},setRoomId:function(t){this.roomId=t,this.titleLabel.string=cc.js.formatStr("ROOM %s",t)},updateRoom:function(t){cc.log(t),this.setRoomId(t.room.rid),this.updatePlayers({room:t.room}),this.selfArea=t.sa,this.gameControl.isStarted()&&this.resetGame()},updatePlayers:function(t){this.waitingNode.active=!0,this.gameNode.active=!1,cc.log(this.waitingNode);var e=t.room;this.players.left=e.l,this.players.right=e.r,this.leftPlayerLabel.string=cc.js.formatStr("%s",e.l?e.l:"empty"),this.rightPlayerLabel.string=cc.js.formatStr("%s",e.r?e.r:"empty")},gameStart:function(t){this.waitingNode.active=!1,this.gameNode.active=!0,this.resetGame(),this.gameControl.start(t.ba)},resetGame:function(){this.gameControl.reset(),this.gameControl.playerArea(this.selfArea)},exitRoom:function(){if(0!=this.roomId){var t="hall.hallHandler.exit_room";n.send(t,{rid:s.rid},function(t){cc.log("exitRoom",t)})}cc.director.loadScene("Hall")},onClickExit:function(){this.exitRoom()},onClickReady:function(t){t.target.getComponent(cc.Button).enabled=!1;var e="hall.hallHandler.game_ready";n.send(e,{})},update:function(t){this.gameControl.isStarted()&&this.gameControl.update(t)}}),cc._RFpop()},{"../common/Common":"Common","../common/Const":"Const","../common/EventManager":"EventManager","../common/NetworkWatcher":"NetworkWatcher","../common/Temp":"Temp","../game/GameControl":"GameControl"}],Temp:[function(t,e,o){"use strict";cc._RFpush(e,"f8998aGAXNIrJuniJEMx/HF","Temp");var n=e.exports;n.rid=0,cc._RFpop()},{}]},{},["Common","Const","EventManager","NetworkWatcher","Temp","GameControl","SceneHall","SceneLogin","SceneRoom"]);