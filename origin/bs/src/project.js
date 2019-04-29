require=function t(e,o,n){function s(a,r){if(!o[a]){if(!e[a]){var c="function"==typeof require&&require;if(!r&&c)return c(a,!0);if(i)return i(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var l=o[a]={exports:{}};e[a][0].call(l.exports,function(t){var o=e[a][1][t];return s(o||t)},l,l.exports,t,e,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)s(n[a]);return s}({BodyCollision:[function(t,e,o){"use strict";cc._RF.push(e,"4d4c7/xP21Mfoy0IXMhjIgX","BodyCollision"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.count=0},onCollisionEnter:function(t,e){this.count+=1,console.log("enter collision count: "+this.count)},onCollisionExit:function(t,e){console.log("exit collision")}}),cc._RF.pop()},{}],BulletBase:[function(t,e,o){"use strict";cc._RF.push(e,"d7b3ee51DFBp42YieJrgfo7","BulletBase");var n=cc.Class({ctor:function(t){this.shooter=t,this.prefabNode=null,this.x=0,this.y=0,this.angle=0,this.speed=0},update:function(t){},getRotatePolygon:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.angle;for(var n=t>>10,s=e>>10,i=this.prefabNode.width*this.prefabNode.scaleX/2,a=this.prefabNode.height*this.prefabNode.scaleY/2,r=o*Math.PI/180,c=[cc.v2(-i,a).rotate(r),cc.v2(i,a).rotate(r),cc.v2(i,-a).rotate(r),cc.v2(-i,-a).rotate(r)],h=0;h<c.length;h+=1)c[h]=cc.v2(c[h].x+n,c[h].y+s);return c}});e.exports=n,cc._RF.pop()},{}],BulletHandgun:[function(t,e,o){"use strict";cc._RF.push(e,"3dae7DOXtlMYY7CbZDYiu55","BulletHandgun");var n=t("./BulletBase"),s=t("../common/Temp");cc.Class({extends:n,ctor:function(t){var e=t.shootOffet();this.x=Math.floor(e.x+t.realX())<<10,this.y=Math.floor(e.y+t.realY())<<10,this.angle=t.shootAngle,this.speed=5120,this.life=180;var o=s.scene;o.bulletPool.size()>0?this.prefabNode=o.bulletPool.get():this.prefabNode=cc.instantiate(o.bulletPrefab);for(var n=0;n<=o.bullets.length;n+=1)if(!o.bullets[n]){o.bullets[n]=this;break}this.prefabNode.rotation=360-this.angle,this.prefabNode.parent=t.node.parent,o.camera.addTarget(this.prefabNode)},update:function(t){0!=this.life&&(this.x+=Math.floor(this.speed*Math.cos(this.angle/180*Math.PI)),this.y+=Math.floor(this.speed*Math.sin(this.angle/180*Math.PI)),this.checkObstacle()?(this.prefabNode.x=this.x>>10,this.prefabNode.y=this.y>>10,this.life-=1):this.life=0)},dispose:function(){var t=s.scene;t.bulletPool.put(this.prefabNode),this.prefabNode.removeFromParent(),t.camera.removeTarget(this.prefabNode)},checkObstacle:function(){var t=s.scene.map.obstaclePolygons,e=this.getRotatePolygon();for(i=0;i<t.length;i+=1){var o=t[i];if(cc.Intersection.polygonPolygon(e,o))return!1}return!0}});cc._RF.pop()},{"../common/Temp":"Temp","./BulletBase":"BulletBase"}],Common:[function(t,e,o){"use strict";cc._RF.push(e,"c34d5KNfrVDv7J7WZWJBGlV","Common");var n={POST:"POST",GET:"GET",XMLHTTPRequest:function(t,e,o,s){s=s||n.GET;var i=cc.loader.getXMLHttpRequest();i.open(s,t,!0),cc.sys.isNative&&i.setRequestHeader("Accept-Encoding","gzip,deflate"),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.timeout=5e3,["loadstart","abort","error","load","loadend","timeout"].forEach(function(t){i["on"+t]=function(){}});var a="";for(var r in e)a=a+"&"+r+"="+e[r];a.length>0&&(a=a.substr(1)),cc.log(a),i.onreadystatechange=function(){4===i.readyState&&o(i)},i.send(a)},handler:function(t,e){return function(){e.apply(t,arguments)}}};e.exports=n,cc._RF.pop()},{}],Const:[function(t,e,o){"use strict";cc._RF.push(e,"41c5b4P7WlF4aDAu4S4Gx1N","Const");var n={Events:{Disconnected:"Disconnected",EnterHall:"EnterHall",UpdataHall:"UpdataHall",UpdateRoomInfo:"UpdateRoomInfo",UpdateRoomPlayers:"UpdateRoomPlayers",GameStart:"GameStart",FrameEvent:"FrameEvent",ExitRoom:"ExitRoom",JoyPlayerMove:"JoyPlayerMove",JoyPlayerIdle:"JoyPlayerIdle",JoyPlayerShoot:"JoyPlayerShoot",JoyPlayerStopShoot:"JoyPlayerStopShoot",PlayerMove:"PlayerMove",PlayerIdle:"PlayerIdle",PlayerShoot:"PlayerShoot",PlayerStopShoot:"PlayerStopShoot"}};e.exports=n,cc._RF.pop()},{}],EventManager:[function(t,e,o){"use strict";cc._RF.push(e,"416f5BudPtH2KZeaUScxuyG","EventManager");var n={handlers:{},registerEvent:function(t,e,o){var s=n.handlers;s[t]=s[t]||{},s[t][e]=o},unregisterEvent:function(t){var e=n.handlers;for(var o in e)delete e[o][t]},dispatchEvent:function(t,e){var o=n.handlers;for(var s in o[t])o[t][s](e)}};e.exports=n,cc._RF.pop()},{}],Follow:[function(t,e,o){"use strict";cc._RF.push(e,"1432dIUTnFAZrmQLHIVkYJN","Follow"),cc.Class({extends:cc.Component,properties:{target:{default:null,type:cc.Node}},onLoad:function(){if(this.target){var t=cc.follow(this.target,cc.rect(0,0,2e3,2e3));this.node.runAction(t)}}}),cc._RF.pop()},{}],GameCharacter:[function(t,e,o){"use strict";cc._RF.push(e,"cc99eZXMBFEwZu6Ew43UdNG","GameCharacter");t("../state/StateMachine");var n=cc.Class({ctor:function(){this.x=0,this.y=0,this.angle=0,this.speed=4096},realX:function(){return this.x>>10},realY:function(){return this.y>>10}});e.exports=n,cc._RF.pop()},{"../state/StateMachine":"StateMachine"}],GameControl:[function(t,e,o){"use strict";cc._RF.push(e,"585413jvtFBfqIhJStUFLPa","GameControl");var n=t("../network/NetworkWatcher"),s=t("../manager/EventManager"),i=t("../common/Const").Events,a=(t("../common/Temp"),t("../common/Common").handler),r={START:"start",PAUSE:"pause",STOP:"stop"},c=function(t,e,o,n){this.spriteControl=t,this.spriteRightPad=e,this.spriteLeftPad=o,this.nodeBall=n,this.spriteControl.node.on(cc.Node.EventType.TOUCH_START,a(this,this.onTouchStart)),this.spriteControl.node.on(cc.Node.EventType.TOUCH_MOVE,a(this,this.onTouchMove)),s.registerEvent(i.FrameEvent,this,a(this,this.onFrameEvent)),this.reset()};c.RADIO=10,e.exports=c;var h=c.prototype;h.start=function(t){this.ballAngle=t||0,this.gameStatus=r.START},h.pause=function(){this.gameStatus=r.PAUSE},h.stop=function(){this.gameStatus=r.STOP},h.isStarted=function(){return this.gameStatus==r.START},h.reset=function(){this.ballX=0,this.ballY=0,this.ballAngle=0,this.ballSpeed=10240,this.stop(),this.frame=0,this.frameEvents=[],this.spriteLeftPad.node.y=0,this.spriteRightPad.node.y=0,this.nodeBall.x=0,this.nodeBall.y=0},h.playerArea=function(t){this.area=t},h.dispose=function(){s.unregisterEvent(this)},h.update=function(t){if(this.updateTimer=this.updateTimer||0,this.updateTimer+=t,!(this.updateTimer<1/30)){this.updateTimer=0,this.sendFrameEvent();for(var e=this.spriteRightPad.node.y,o=this.spriteLeftPad.node.y,n=0;n<this.frameEvents.length;n+=1){var s=this.frameEvents[n];this.frame=s.frame,isNaN(s.ly)||-1==s.ly||(o+=s.ly,cc.log(s.frame,o)),!isNaN(s.ry)&-1!=s.ry&&(e+=s.ry),this.nextBall(t,e,o)}this.spriteLeftPad.node.y=parseInt(o),this.spriteRightPad.node.y=parseInt(e),this.nodeBall.x=this.realBallX(),this.nodeBall.y=this.realBallY(),this.frame+=1,this.frameEvents=[]}},h.setupBall=function(t,e,o){this.ballX=t,this.ballY=e,this.ballAngle=o},h.realBallX=function(){return Math.floor(this.ballX/1024)},h.realBallY=function(){return Math.floor(this.ballY/1024)},h.nextBall=function(t,e,o){this.ballX=this.ballX+this.ballSpeed*Math.cos(this.ballAngle/180*Math.PI),this.ballY=this.ballY+this.ballSpeed*Math.sin(this.ballAngle/180*Math.PI),this.realBallX()-c.RADIO<=-this.spriteControl.node.width/2&&(this.ballX=1024*(-this.spriteControl.node.width/2+c.RADIO),this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=90+this.ballAngle),this.realBallX()+c.RADIO>=this.spriteControl.node.width/2&&(this.ballX=1024*(this.spriteControl.node.width/2-c.RADIO),this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=this.ballAngle-90),this.realBallY()-c.RADIO<=-this.spriteControl.node.height/2&&(this.ballY=1024*(-this.spriteControl.node.height/2+c.RADIO),this.ballAngle=360-this.ballAngle),this.realBallY()+c.RADIO>=this.spriteControl.node.height/2&&(this.ballY=1024*(this.spriteControl.node.height/2-c.RADIO),this.ballAngle=360-this.ballAngle),this.checkPads(e,o)},h.checkPads=function(t,e){for(var o=[this.spriteRightPad,this.spriteLeftPad],n=0;n<o.length;n+=1){var s=o[n],i=s.node.x,a=0==n?t:e,r=s.node.width,h=s.node.height;this.realBallX()>=i-r/2&&this.realBallX()<=i+r/2&&this.realBallY()>=a-h/2&&this.realBallY()<=a+h/2&&(this.ballAngle<90||this.ballAngle>270?(this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=this.ballAngle-90,this.ballX=1024*(i-s.node.width/2-c.RADIO)):(this.ballAngle<180?this.ballAngle=180-this.ballAngle:this.ballAngle=90+this.ballAngle,this.ballX=1024*(i+s.node.width/2+c.RADIO)))}},h.onTouchStart=function(){this.lastTouchPos=null},h.onTouchMove=function(t){var e=[this.spriteRightPad,this.spriteLeftPad][this.area],o=t.getTouches()[0].getLocation(),n=o.x,s=o.y;this.lastTouchPos=this.lastTouchPos||o;this.lastTouchPos.x;var i=s-this.lastTouchPos.y;this.lastTouchPos=cc.p(n,s);var a=e.node.x,r=Math.floor(5*i);this.collectFrameEvent(cc.p(a,r))},h.onFrameEvent=function(t){this.frameEvents.push(t)},h.collectFrameEvent=function(t){this.frameEvent={frame:this.frame,y:t.y}},h.sendFrameEvent=function(){if(this.frameEvent){n.send("hall.hallHandler.turn_act",this.frameEvent),cc.log("send %s, %s",this.frameEvent.frame,this.frameEvent.y)}delete this.frameEvent},cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../common/Temp":"Temp","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher"}],GameMap:[function(t,e,o){"use strict";cc._RF.push(e,"779c2M8QA1KuanUDBtSF95d","GameMap");var n={LAYER1:"layer1",LAYER2:"layer2",LAYER3:"layer3",EVENTS:"events",OBSTACLES:"obstacles"},s=cc.Class({ctor:function(t){this.tiledMap=t,this.mapSize=this.tiledMap.getMapSize(),this.mapTileSize=this.tiledMap.getTileSize(),this.mapPixelSize={width:this.mapSize.width*this.mapTileSize.width,height:this.mapSize.height*this.mapTileSize.height},this.obstaclePolygons=null,this.setupObstacles()},setupObstacles:function(){var t=this.tiledMap.getObjectGroup(n.OBSTACLES).getObjects();this.obstaclePolygons=[];for(var e=0;e<t.length;e+=1){var o=t[e].getProperties(),s=[];switch(o.type){case 0:s.push(this.mp2ccp(cc.v2(o.x,o.y))),s.push(this.mp2ccp(cc.v2(o.x+o.width,o.y))),s.push(this.mp2ccp(cc.v2(o.x+o.width,o.y+o.height))),s.push(this.mp2ccp(cc.v2(o.x,o.y+o.height)));break;case 2:for(var i=0;i<o.points.length;i+=1)s.push(this.mp2ccp(cc.v2(o.points[i])))}this.obstaclePolygons.push(s)}cc.log(this.obstaclePolygons)},mp2ccp:function(t){var e=t.x-this.mapPixelSize.width/2,o=this.mapPixelSize.height-t.y-this.mapPixelSize.height/2;return cc.v2(e,o)}});e.exports=s,cc._RF.pop()},{}],GamePlayer:[function(t,e,o){"use strict";cc._RF.push(e,"f7725/of/ZJYbUtSQ1axQlR","GamePlayer");var n=t("./GameCharacter"),s=t("../state/StateMachine"),a=(t("../state/StateBodyMove"),t("../state/StateBodyIdle")),r=t("../state/StateBodyShoot"),c=t("../state/StateFeetRun"),h=t("../state/StateFeetIdle"),l=t("../weapon/WeaponHandgun"),d=t("../common/Temp");cc.Class({extends:n,ctor:function(t){this.node=t,this.nodeBody=t.getChildByName("Body"),this.nodeFeet=t.getChildByName("Feet"),this.stateMachine={body:new s(this),feet:new s(this)},this.weapons=[new l(this)],this.shootAngle=0,this.x=Math.floor(this.node.x)<<10,this.y=Math.floor(this.node.y)<<10,this.canMove=!1,this.initState()},update:function(t){if(this.stateMachine.body.update(t),this.stateMachine.feet.update(t),this.canMove&&this.isMoving()){var e=d.scene,o=this.x,n=this.y,s=e.map.obstaclePolygons,i=0;o+=this.speed*Math.cos(this.angle/180*Math.PI);var a=this.getBodyRotatePolygon(Math.floor(o),Math.floor(n));for(i=0;i<s.length;i+=1){r=s[i];if(cc.Intersection.polygonPolygon(a,r)){o=this.x;break}}for(n+=this.speed*Math.sin(this.angle/180*Math.PI),a=this.getBodyRotatePolygon(Math.floor(o),Math.floor(n)),i=0;i<s.length;i+=1){var r=s[i];if(cc.Intersection.polygonPolygon(a,r)){n=this.y;break}}this.x=Math.floor(o),this.y=Math.floor(n),this.node.x=o/1024,this.node.y=n/1024}},initState:function(){this.stateMachine.body.changeTo(new a),this.stateMachine.feet.changeTo(new h)},move:function(t){this.angle=t,this.nodeFeet.rotation=360-t,this.stateMachine.feet.changeTo(new c)},idle:function(){this.stateMachine.feet.changeTo(new h)},shoot:function(t){this.checkShootAngle(t)&&(this.shootAngle=t,this.nodeBody.rotation=360-t),this.stateMachine.body.changeTo(new r)},stopShoot:function(){this.stateMachine.body.changeTo(new a)},isMoving:function(){return this.stateMachine.feet.isInState(c)},shootOffet:function(){var t=this.nodeBody.width/2*this.node.scaleX,e=-24*this.node.scaleY,o=cc.v2(t,e),n=(360+Math.floor(180*o.signAngle(cc.Vec2.RIGHT)/Math.PI))%360;return o.rotateSelf((this.shootAngle+n)*Math.PI/180),o},checkShootAngle:function(t){var e=d.scene.map.obstaclePolygons,o=this.getBodyRotatePolygon(this.x,this.y,t);for(i=0;i<e.length;i+=1){var n=e[i];if(cc.Intersection.polygonPolygon(o,n))return!1}return!0},getBodyRotatePolygon:function(t,e,o){t=t||this.x,e=e||this.y,o=o||this.shootAngle;for(var n=t>>10,s=e>>10,i=this.nodeBody.width*this.node.scaleX/2,a=this.nodeBody.height*this.node.scaleY/2,r=o*Math.PI/180,c=[cc.v2(-i,a).rotate(r),cc.v2(i,a).rotate(r),cc.v2(i,-a).rotate(r),cc.v2(-i,-a).rotate(r)],h=0;h<c.length;h+=1)c[h]=cc.v2(c[h].x+n,c[h].y+s);return c}});cc._RF.pop()},{"../common/Temp":"Temp","../state/StateBodyIdle":"StateBodyIdle","../state/StateBodyMove":"StateBodyMove","../state/StateBodyShoot":"StateBodyShoot","../state/StateFeetIdle":"StateFeetIdle","../state/StateFeetRun":"StateFeetRun","../state/StateMachine":"StateMachine","../weapon/WeaponHandgun":"WeaponHandgun","./GameCharacter":"GameCharacter"}],GameShootControl:[function(t,e,o){"use strict";cc._RF.push(e,"d48b17LcplFpYIXZah22YP4","GameShootControl");var n=t("../network/NetworkWatcher"),s=t("../manager/EventManager"),i=t("../common/Const").Events,a=(t("../common/Temp"),t("../common/Common").handler),r={START:"start",PAUSE:"pause",STOP:"stop"},c=function(t){this.players=t,this.origPositions=[];for(var e=0;e<t.length;e+=1)this.origPositions.push(t[e].position);s.registerEvent(i.JoyPlayerMove,this,a(this,this.onJoyPlayerMove)),s.registerEvent(i.JoyPlayerIdle,this,a(this,this.onJoyPlayerIdle)),s.registerEvent(i.JoyPlayerShoot,this,a(this,this.onJoyPlayerShoot)),s.registerEvent(i.JoyPlayerStopShoot,this,a(this,this.onJoyPlayerStopShoot)),s.registerEvent(i.FrameEvent,this,a(this,this.onFrameEvent)),this.reset()};c.RADIO=10,e.exports=c;var h=c.prototype;h.start=function(){this.gameStatus=r.START},h.pause=function(){this.gameStatus=r.PAUSE},h.stop=function(){this.gameStatus=r.STOP},h.isStarted=function(){return this.gameStatus==r.START},h.reset=function(){this.stop(),this.frame=0,this.frameEvents=[];var t=0;for(t=0;t<this.players.length;t+=1)this.players[t].x=this.origPositions[t].x,this.players[t].y=this.origPositions[t].y},h.playerArea=function(t){this.area=t},h.dispose=function(){s.unregisterEvent(this)},h.update=function(t){if(this.updateTimer=this.updateTimer||0,this.updateTimer+=t,this.updateTimer<1/30)return!1;this.updateTimer=0,this.frameEvent?this.sendFrameEvent():this.sendEmptyFrameEvent(),this.frame+=1;var e=this.frameEvents.shift();return e&&(this.frame=e.frame,this.dealPlayerAct(e.p1),this.dealPlayerAct(e.p2)),!0},h.dealPlayerAct=function(t){t.move?s.dispatchEvent(i.PlayerMove,{index:t.player,angle:t.move.angle}):s.dispatchEvent(i.PlayerIdle,{index:t.player}),t.shoot?s.dispatchEvent(i.PlayerShoot,{index:t.player,angle:t.shoot.angle}):s.dispatchEvent(i.PlayerStopShoot,{index:t.player})},h.onFrameEvent=function(t){this.frameEvents.push(t)},h.onJoyPlayerMove=function(t){this.collectFrameEvent(i.JoyPlayerMove,t.angle)},h.onJoyPlayerIdle=function(t){this.collectFrameEvent(i.JoyPlayerIdle)},h.onJoyPlayerShoot=function(t){this.collectFrameEvent(i.JoyPlayerShoot,t.angle)},h.onJoyPlayerStopShoot=function(t){this.collectFrameEvent(i.JoyPlayerStopShoot)},h.collectFrameEvent=function(t,e){switch(this.frameEvent=this.frameEvent||{},t){case i.JoyPlayerMove:this.frameEvent.move={angle:e};break;case i.JoyPlayerIdle:this.frameEvent.move=null,delete this.frameEvent.move;break;case i.JoyPlayerShoot:this.frameEvent.shoot={angle:e};break;case i.JoyPlayerStopShoot:this.frameEvent.shoot=null,delete this.frameEvent.shoot}},h.sendFrameEvent=function(){if(this.frameEvent){n.send("hall.hallHandler.turn_act",this.frameEvent)}delete this.frameEvent},h.sendEmptyFrameEvent=function(){n.send("hall.hallHandler.turn_act",{})},cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../common/Temp":"Temp","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher"}],JoyStickMove:[function(t,e,o){"use strict";cc._RF.push(e,"2fde6ylkyxFE6SCHKzBBU/0","JoyStickMove");var n=t("../manager/EventManager"),s=t("../common/Const").Events;cc.Class({extends:cc.Component,properties:{backGround:{default:null,type:cc.Node},centerSticker:{default:null,type:cc.Node}},onLoad:function(){this.radius=this.backGround.width/2,this.originPos=this.centerSticker.position,this.angle=0,this.acting=!1,this.setInputControl()},setInputControl:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation());cc.pDistance(e,this.originPos)>this.radius||(this.centerSticker.position=e)},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation()),o=cc.pDistance(e,this.originPos),n=cc.v2(e.x,e.y);this.centerSticker.position=n.normalize().mul(Math.min(o,this.radius)),this.angle=(360+Math.floor(180*n.signAngle(cc.Vec2.RIGHT)/Math.PI))%360,this.acting=!0},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){this.centerSticker.position=this.originPos,this.acting=!1,n.dispatchEvent(s.JoyPlayerIdle,{})},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){this.centerSticker.position=this.originPos,this.acting=!1,n.dispatchEvent(s.JoyPlayerIdle,{})},this)},update:function(t){this.acting&&n.dispatchEvent(s.JoyPlayerMove,{angle:this.angle})}}),cc._RF.pop()},{"../common/Const":"Const","../manager/EventManager":"EventManager"}],JoyStickShoot:[function(t,e,o){"use strict";cc._RF.push(e,"6a410yOw/lJH52DxqPbePG1","JoyStickShoot");var n=t("../manager/EventManager"),s=t("../common/Const").Events;cc.Class({extends:cc.Component,properties:{backGround:{default:null,type:cc.Node},centerSticker:{default:null,type:cc.Node}},onLoad:function(){cc.log(this.centerSticker),this.radius=this.node.width/2,this.originPos=this.centerSticker.position,this.angle=0,this.acting=!1,this.setInputControl()},setInputControl:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation());cc.pDistance(e,this.originPos)>this.radius||(this.centerSticker.position=e)},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){var e=this.node.convertToNodeSpaceAR(t.getLocation()),o=cc.pDistance(e,this.originPos),n=cc.v2(e.x,e.y);this.centerSticker.position=n.normalize().mul(Math.min(o,this.radius)),this.angle=(360+Math.floor(180*n.signAngle(cc.Vec2.RIGHT)/Math.PI))%360,this.acting=!0},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){this.centerSticker.position=this.originPos,this.acting=!1,n.dispatchEvent(s.JoyPlayerStopShoot,{})},this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,function(t){this.centerSticker.position=this.originPos,this.acting=!1,n.dispatchEvent(s.JoyPlayerStopShoot,{})},this)},update:function(t){this.acting&&n.dispatchEvent(s.JoyPlayerShoot,{angle:this.angle})}}),cc._RF.pop()},{"../common/Const":"Const","../manager/EventManager":"EventManager"}],NetworkWatcher:[function(t,e,o){"use strict";cc._RF.push(e,"96444Z7jbxGTrMLs8KuSnjP","NetworkWatcher");var n=window.pomelo,s=t("../manager/EventManager"),i=t("../common/Const").Events,a={init:function(){n.on("dse_update_hall",function(t){cc.log("on dse_update_hall"),s.dispatchEvent(i.UpdateHall,t)}),n.on("dse_room_info",function(t){cc.log("on dse_room_info"),s.dispatchEvent(i.UpdateRoomInfo,t)}),n.on("dse_room_players",function(t){cc.log("on dse_room_players"),s.dispatchEvent(i.UpdateRoomPlayers,t)}),n.on("dse_game_start",function(t){cc.log("on dse_game_start"),s.dispatchEvent(i.GameStart,t)}),n.on("dse_turn_act",function(t){s.dispatchEvent(i.FrameEvent,t)}),n.on("disconnect",function(t){s.dispatchEvent(i.Disconnected,t)})},connect:function(t,e,o,r,c,h){var l=function(t,e){n.init({host:t,port:e,log:!0},function(){n.request("connector.entryHandler.enter",{username:o,password:r,rid:c},function(t){t.error?h(t):(a.init(),s.dispatchEvent(i.EnterHall))})})};n.init({host:t,port:e,log:!0},function(){n.request("gate.gateHandler.queryEntry",{username:o},function(t){n.disconnect(),200==t.code?l(t.host,t.port):h(t)})})},send:function(t,e,o){n.request(t,e,o)}};e.exports=a,cc._RF.pop()},{"../common/Const":"Const","../manager/EventManager":"EventManager"}],SceneBase:[function(t,e,o){"use strict";cc._RF.push(e,"0c857Iv51VJD5QhOcdE/mZ2","SceneBase");var n=t("../common/Temp");cc.Class({extends:cc.Component,properties:{},onLoad:function(){cc.log(cc.js.getClassName(this)),n.scene=this}}),cc._RF.pop()},{"../common/Temp":"Temp"}],SceneHall:[function(t,e,o){"use strict";cc._RF.push(e,"d4cdfJ0Sq1ORo1fQ0i5paKv","SceneHall");var n=t("../network/NetworkWatcher"),s=t("../manager/EventManager"),i=t("../common/Const").Events,a=t("../common/Common").handler,r=t("../common/Temp"),c=t("./SceneBase");cc.Class({extends:c,properties:{userList:{default:null,type:cc.ScrollView},roomList:{default:null,type:cc.ScrollView},itemTemplate:{default:null,type:cc.Node},userTempale:{default:null,type:cc.Node},spacing:10,totalCount:{default:0,visible:!1}},onLoad:function(){this._super(),s.registerEvent(i.Disconnected,this,a(this,this.returnToLogin)),s.registerEvent(i.UpdateHall,this,a(this,this.updateHall)),this.roomItems=[],this.userItems=[],this.requestRooms(),cc.log(this.itemTemplate),this.itemTemplate.getComponent(cc.Label).enabled=!1,this.userTempale.getComponent(cc.Label).enabled=!1},onDestroy:function(){s.unregisterEvent(this)},requestRooms:function(){n.send("hall.hallHandler.rooms",{},function(t){})},enterRoom:function(t){cc.log("enterRoom"),r.rid=t,cc.director.loadScene("Shooting")},returnToLogin:function(t){cc.director.loadScene("Login")},updateHall:function(t){if(cc.log(t.rooms),this.totalCount<t.rooms.length)for(n=this.totalCount;n<t.rooms.length;n+=1)this.addRoom(n);for(n=0;n<this.totalCount;n+=1)this.updateRoom(n,t.rooms[n]);var e=this.userItems.length,o=t.users.length;if(e<o)for(n=e;n<o;n+=1)this.addUser(n);for(var n=0;n<o;n+=1)this.updateUser(n,t.users[n])},addRoom:function(t){this.totalCount+=1,this.roomList.content.height=this.totalCount*(this.itemTemplate.height+this.spacing)+this.spacing;var e=cc.instantiate(this.itemTemplate);this.roomList.content.addChild(e),e.x=-e.parent.width/2,e.y=-e.height*(.5+t)-this.spacing*(t+1),this.roomItems[t]=e},addUser:function(t){var e=this.userItems.length+1;this.userList.content.height=e*(this.userTempale.height+this.spacing)+this.spacing;var o=cc.instantiate(this.userTempale);this.userList.content.addChild(o),o.x=-o.parent.width/2,o.y=-o.height*(.5+t)-this.spacing*(t+1),this.userItems[t]=o},updateRoom:function(t,e){var o=this.roomItems[t];if(o){var n=o.getComponent(cc.Label);if(e){var s=e.l?e.l:" empty ",i=e.r?e.r:" empty ";n.string=cc.js.formatStr("ROOM %s: %s / %s",e.rid,s,i),n.enabled=!0,o.roomData=e,o.on("touchend",a(this,this.onClickEnterRoom))}else n.enabled=!1,delete o.roomData}},updateUser:function(t,e){var o=this.userItems[t],n=o.getComponent(cc.Label);e?(n.string=cc.js.formatStr("%s",e),n.enabled=!0,o.userName=e):(n.enabled=!1,delete o.roomData)},onClickEnterRoom:function(t){var e=t.target;cc.log(e),this.enterRoom(e.roomData.rid),t.stopPropagation()}}),cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../common/Temp":"Temp","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher","./SceneBase":"SceneBase"}],SceneLogin:[function(t,e,o){"use strict";cc._RF.push(e,"cfe02bnZ0xOcL+HkSWlYKug","SceneLogin");var n=t("../manager/EventManager"),s=t("../common/Const").Events,i=t("../network/NetworkWatcher"),a=t("../common/Common"),r=t("./SceneBase");cc.Class({extends:r,properties:{ServerIpEdit:{type:cc.EditBox,default:null},ServerPortEdit:{type:cc.EditBox,default:null},usernameEdit:{type:cc.EditBox,default:null},passwordEdit:{type:cc.EditBox,default:null}},onLoad:function(){this._super(),n.registerEvent(s.EnterHall,this,this.enterHall),this.platform=cc.sys.os},onDestroy:function(){n.unregisterEvent(this)},enterHall:function(){cc.director.loadScene("Hall")},onSignIn:function(){var t=this.usernameEdit.string,e=this.passwordEdit.string,o=this.ServerIpEdit.string,n=this.ServerPortEdit.string;cc.log(o,n,t,e);i.connect(o,n,t,e,0,function(t){cc.log("code: "+t.code+" error: "+t.error)})},onSignUp:function(){var t=this.usernameEdit.string,e=this.passwordEdit.string;cc.log(t,e);var o={username:t,password:e};a.XMLHTTPRequest("http://localhost/lockstep/index.php/Home/Index/signup",o,function(t){cc.log(t.status,t.responseText)},a.POST)}}),cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher","./SceneBase":"SceneBase"}],SceneRoom:[function(t,e,o){"use strict";cc._RF.push(e,"fb6edKh0V9LYaq9uTt2LFYK","SceneRoom");var n=t("../network/NetworkWatcher"),s=t("../manager/EventManager"),i=t("../common/Const").Events,a=t("../common/Temp"),r=t("../common/Common").handler,c=t("./SceneBase"),h=t("../game/GameControl");cc.Class({extends:c,properties:{waitingNode:cc.Node,gameNode:cc.Node,titleLabel:cc.Label,leftPlayerLabel:cc.Label,rightPlayerLabel:cc.Label,gamePadLeftSprite:cc.Sprite,gamePadRightSprite:cc.Sprite,gameControlSprite:cc.Sprite,gameBallNode:cc.Node},onLoad:function(){this._super(),s.registerEvent(i.Disconnected,this,r(this,this.returnToLogin)),s.registerEvent(i.UpdateRoomInfo,this,r(this,this.updateRoom)),s.registerEvent(i.UpdateRoomPlayers,this,r(this,this.updatePlayers)),s.registerEvent(i.GameStart,this,r(this,this.gameStart)),s.registerEvent(i.ExitRoom,this,r(this,this.exitRoom)),this.players={left:{},right:{}},this.selfArea=0,this.roomId=0,this.requestRoomInfo(),this.gameControl=new h(this.gameControlSprite,this.gamePadRightSprite,this.gamePadLeftSprite,this.gameBallNode)},onDestroy:function(){this.gameControl.dispose(),s.unregisterEvent(this)},returnToLogin:function(t){cc.director.loadScene("Login")},requestRoomInfo:function(){cc.log("requestRoomInfo");var t=this;n.send("hall.hallHandler.enter_room",{rid:a.rid},function(e){e.error&&(cc.log(e),t.exitRoom())})},setRoomId:function(t){this.roomId=t,this.titleLabel.string=cc.js.formatStr("ROOM %s",t)},updateRoom:function(t){cc.log(t),this.setRoomId(t.room.rid),this.updatePlayers({room:t.room}),this.selfArea=t.sa,this.gameControl.isStarted()&&this.resetGame()},updatePlayers:function(t){this.waitingNode.active=!0,this.gameNode.active=!1,cc.log(this.waitingNode);var e=t.room;this.players.left=e.l,this.players.right=e.r,this.leftPlayerLabel.string=cc.js.formatStr("%s",e.l?e.l:"empty"),this.rightPlayerLabel.string=cc.js.formatStr("%s",e.r?e.r:"empty")},gameStart:function(t){this.waitingNode.active=!1,this.gameNode.active=!0,this.resetGame(),this.gameControl.start(t.ba)},resetGame:function(){this.gameControl.reset(),this.gameControl.playerArea(this.selfArea)},exitRoom:function(){if(0!=this.roomId){n.send("hall.hallHandler.exit_room",{rid:a.rid},function(t){cc.log("exitRoom",t)})}cc.director.loadScene("Hall")},onClickExit:function(){this.exitRoom()},onClickReady:function(t){t.target.getComponent(cc.Button).enabled=!1;n.send("hall.hallHandler.game_ready",{})},update:function(t){this.gameControl.isStarted()&&this.gameControl.update(t)}}),cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../common/Temp":"Temp","../game/GameControl":"GameControl","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher","./SceneBase":"SceneBase"}],SceneShooting:[function(t,e,o){"use strict";cc._RF.push(e,"59334BQ9ilNPZ3nMrdjSrK9","SceneShooting");var n=t("../network/NetworkWatcher"),s=t("../manager/EventManager"),i=t("../common/Const").Events,a=t("../common/Temp"),r=t("../common/Common").handler,c=t("../game/GameMap"),h=t("../game/GamePlayer"),l=t("./SceneBase"),d=t("../game/GameShootControl");cc.macro.ENABLE_TILEDMAP_CULLING=!1,cc.Class({extends:l,properties:{mapNode:{default:null,type:cc.TiledMap},player1:{default:null,type:cc.Node},player2:{default:null,type:cc.Node},camera:{default:null,type:cc.Camera},statusNode:{default:null,type:cc.Node}},onLoad:function(){this._super(),s.registerEvent(i.PlayerMove,this,r(this,this.onPlayerMove)),s.registerEvent(i.PlayerIdle,this,r(this,this.onPlayerIdle)),s.registerEvent(i.PlayerShoot,this,r(this,this.onPlayerShoot)),s.registerEvent(i.PlayerStopShoot,this,r(this,this.onPlayerStopShoot)),s.registerEvent(i.Disconnected,this,r(this,this.returnToLogin)),s.registerEvent(i.UpdateRoomInfo,this,r(this,this.updateRoom)),s.registerEvent(i.UpdateRoomPlayers,this,r(this,this.updatePlayers)),s.registerEvent(i.GameStart,this,r(this,this.gameStart)),s.registerEvent(i.ExitRoom,this,r(this,this.exitRoom)),cc.director.getCollisionManager().enabled=!0,this.frameCount=0,this.map=null,this.bullets=[],this.bulletPool=new cc.NodePool,this.bulletPrefab=null,this.players=[],this.Init()},initUi:function(){this.selfArea=0,this.roomId=0,this.requestRoomInfo()},onDestroy:function(){this.control.dispose(),s.unregisterEvent(this)},Init:function(){var t=new h(this.player1),e=new h(this.player2);this.players.push(t),this.players.push(e);var o=this;cc.loader.loadRes("prefabs/handgunBullet",function(t,e){o.bulletPrefab=e;for(var n=0;n<100;n+=1){var s=cc.instantiate(e);o.bulletPool.put(s)}o.isEnemyLoaded=!0,o.initUi()}),this.map=new c(this.mapNode),this.control=new d([this.player1,this.player2])},onPlayerIdle:function(t){this.players[t.index].idle()},onPlayerMove:function(t){this.players[t.index].canMove=!0,this.players[t.index].move(t.angle)},onPlayerShoot:function(t){this.players[t.index].shoot(t.angle)},onPlayerStopShoot:function(t){this.players[t.index].stopShoot()},update:function(t){if(this.control.isStarted()&&this.control.update(t)){this.frameCount+=1;for(var e=0;e<this.players.length;e+=1)this.players[e].update(t),this.players[e].canMove=!1;for(var o=0;o<this.bullets.length;o+=1)this.bullets[o]&&(this.bullets[o].update(t),this.bullets[o].life<=0&&(this.bullets[o].dispose(),this.bullets[o]=null))}},returnToLogin:function(t){cc.director.loadScene("Login")},requestRoomInfo:function(){cc.log("requestRoomInfo");var t=this;n.send("hall.hallHandler.enter_room",{rid:a.rid},function(e){e.error&&(cc.log(e),t.exitRoom())})},setRoomId:function(t){this.roomId=t,cc.find("Widget/LabelStatus",this.statusNode).getComponent(cc.Label).string=cc.js.formatStr("房间 %s",t)},updateRoom:function(t){cc.log(t),this.setRoomId(t.room.rid),this.updatePlayers({room:t.room}),this.selfArea=t.sa,this.control.isStarted()&&this.resetGame()},updatePlayers:function(t){this.statusNode.active=!0;var e=t.room;cc.find("Widget/LabelPlayer1",this.statusNode).getComponent(cc.Label).string=cc.js.formatStr("玩家1：%s",e.l?e.l:"未加入"),cc.find("Widget/LabelPlayer2",this.statusNode).getComponent(cc.Label).string=cc.js.formatStr("玩家2：%s",e.r?e.r:"未加入")},gameStart:function(t){this.statusNode.active=!1,this.resetGame(),this.control.start(t.ba),this.camera.getComponent("camera-control").target=[this.player1,this.player2][this.selfArea]},resetGame:function(){this.control.reset(),this.control.playerArea(this.selfArea)},exitRoom:function(){if(0!=this.roomId){n.send("hall.hallHandler.exit_room",{rid:a.rid},function(t){cc.log("exitRoom",t)})}cc.director.loadScene("Hall")},onClickExit:function(){this.exitRoom()},onClickReady:function(t){t.target.getComponent(cc.Button).enabled=!1;n.send("hall.hallHandler.game_ready",{})}}),cc._RF.pop()},{"../common/Common":"Common","../common/Const":"Const","../common/Temp":"Temp","../game/GameMap":"GameMap","../game/GamePlayer":"GamePlayer","../game/GameShootControl":"GameShootControl","../manager/EventManager":"EventManager","../network/NetworkWatcher":"NetworkWatcher","./SceneBase":"SceneBase"}],StateBase:[function(t,e,o){"use strict";cc._RF.push(e,"3fd7dLTMZNHqKNiccC6lv3r","StateBase");var n=cc.Class({ctor:function(){this.disposed=!1},onUpdate:function(t,e){},onEnter:function(t){},onDispose:function(t){},isDisposed:function(){return this.disposed}});e.exports=n,cc._RF.pop()},{}],StateBodyIdle:[function(t,e,o){"use strict";cc._RF.push(e,"d2506xWwqZJjodFbP4ECk9l","StateBodyIdle");var n=t("./StateBase"),s=cc.Class({extends:n,ctor:function(){},onEnter:function(t){this._super(t),t.nodeBody.getComponent(cc.Animation).play("handgun_idle")}});e.exports=s,cc._RF.pop()},{"./StateBase":"StateBase"}],StateBodyMove:[function(t,e,o){"use strict";cc._RF.push(e,"fe089BhmJRDgZ9rKSVm4Uyb","StateBodyMove");var n=t("./StateBase"),s=cc.Class({extends:n,ctor:function(){},onEnter:function(t){this._super(t),t.nodeBody.getComponent(cc.Animation).play("handgun_move")}});e.exports=s,cc._RF.pop()},{"./StateBase":"StateBase"}],StateBodyShoot:[function(t,e,o){"use strict";cc._RF.push(e,"60f93m/fNlL6ZLAT5WPCQi6","StateBodyShoot");var n=t("./StateBase"),s=t("./StateBodyIdle"),i=cc.Class({extends:n,ctor:function(){this.target=null,this.frameCount=0},onEnter:function(t){this._super(t),this.target=t,t.nodeBody.getComponent(cc.Animation).play("handgun_shoot"),t.nodeBody.getComponent(cc.Animation).on("stop",this.onAnimationStop,this)},onAnimationStop:function(){this.disposed=!0,this.target.nodeBody.getComponent(cc.Animation).off("stop",this.onAnimationStop,this)},onDispose:function(t){t.nodeBody.getComponent(cc.Animation).stop(),t.stateMachine.body.changeTo(new s)},onUpdate:function(t,e){this._super(t,e),this.frameCount%10==0&&e.weapons[0].doAttack(),this.frameCount+=1}});e.exports=i,cc._RF.pop()},{"./StateBase":"StateBase","./StateBodyIdle":"StateBodyIdle"}],StateFeetIdle:[function(t,e,o){"use strict";cc._RF.push(e,"11c9c9zl4FMM5sxTvipHZDX","StateFeetIdle");var n=t("./StateBase"),s=cc.Class({extends:n,ctor:function(){},onEnter:function(t){this._super(t),t.nodeFeet.getComponent(cc.Animation).play("feet_idle")}});e.exports=s,cc._RF.pop()},{"./StateBase":"StateBase"}],StateFeetRun:[function(t,e,o){"use strict";cc._RF.push(e,"b1e609HMClLqbsNitbLLsf5","StateFeetRun");var n=t("./StateBase"),s=cc.Class({extends:n,ctor:function(){},onEnter:function(t){this._super(t),t.nodeFeet.getComponent(cc.Animation).play("feet_run")}});e.exports=s,cc._RF.pop()},{"./StateBase":"StateBase"}],StateMachine:[function(t,e,o){"use strict";cc._RF.push(e,"93d84oOGIdOUJiC/kie+QKh","StateMachine");var n=cc.Class({ctor:function(t){this.states=[],this.target=t},changeTo:function(t){var e=[];if(!this.isInState(t)){for(s=0;s<this.states.length;s+=1)(n=this.states[s])&&n.__proto__!=t.__proto__&&(e.push(n),this.states[s]=null);for(var o=0;o<e.length;o+=1){var n=e[o];n.isDisposed()||n.onDispose(this.target)}for(var s=0;s<=this.states.length;s+=1)if(!this.states[s]){this.states[s]=t,t.onEnter(this.target);break}}},add:function(t,e){e=e||this.states.length,this.states[e]=t,t.onEnter(this.target)},remove:function(t){for(var e=[],o=0;o<this.states.length;o+=1)(s=this.states[o])&&s instanceof t&&(e.push(s),this.states[o]=null);for(var n=0;n<e.length;n+=1){var s=e[n];s.isDisposed()||s.onDispose(this.target)}},isInState:function(t){if("function"==typeof t){for(e=0;e<this.states.length;e+=1)if((o=this.states[e])instanceof t)return!0}else for(var e=0;e<this.states.length;e+=1){var o=this.states[e];if(o&&o.__proto__===t.__proto__)return!0}return!1},update:function(t){for(var e=[],o=0;o<this.states.length;o+=1)(s=this.states[o])&&!s.isDisposed()&&s.onUpdate(t,this.target),s&&s.isDisposed()&&(e.push(s),this.states[o]=null);for(var n=0;n<e.length;n+=1){var s=e[n];s.onDispose(this.target)}}});e.exports=n,cc._RF.pop()},{}],Temp:[function(t,e,o){"use strict";cc._RF.push(e,"f8998aGAXNIrJuniJEMx/HF","Temp");var n={rid:0,scene:null};e.exports=n,cc._RF.pop()},{}],Wall:[function(t,e,o){"use strict";cc._RF.push(e,"75848KEsr1Es45wncnWG2RA","Wall");var n=cc.Enum({Left:0,Right:1,Top:2,Bottom:3});cc.Class({extends:cc.Component,properties:{type:{default:n.Left,type:n},wallWidth:50,mapWidth:1280,mapHeight:1280},start:function(){var t=this.getComponent(cc.BoxCollider);t&&(this.type===n.Left?(this.node.height=this.mapHeight-2*this.wallWidth,this.node.width=this.wallWidth,this.node.x=this.wallWidth/2,this.node.y=this.mapHeight/2):this.type===n.Right?(this.node.height=this.mapHeight-2*this.wallWidth,this.node.width=this.wallWidth,this.node.x=this.mapWidth-this.wallWidth/2,this.node.y=this.mapHeight/2):this.type===n.Top?(this.node.width=this.mapWidth-2*this.wallWidth,this.node.height=this.wallWidth,this.node.x=this.mapWidth/2,this.node.y=this.mapHeight-this.wallWidth/2):this.type===n.Bottom&&(this.node.width=this.mapWidth-2*this.wallWidth,this.node.height=this.wallWidth,this.node.x=this.mapWidth/2,this.node.y=this.wallWidth/2),t.size=this.node.getContentSize())}}),cc._RF.pop()},{}],WeaponBase:[function(t,e,o){"use strict";cc._RF.push(e,"e23ecz7EktJH7wOvR8IFfBZ","WeaponBase");var n=cc.Class({ctor:function(t){this.user=t},attack:function(){}});e.exports=n,cc._RF.pop()},{}],WeaponHandgun:[function(t,e,o){"use strict";cc._RF.push(e,"354faGxAGFHAaUXX2iUuD72","WeaponHandgun");var n=t("./WeaponBase"),s=t("../bullet/BulletHandgun"),i=t("../common/Temp"),a=cc.Class({extends:n,ctor:function(t){this.user=t},doAttack:function(){for(var t=i.scene,e=new s(this.user),o=0;o<=t.bullets.length;o+=1)if(!t.bullets[o]){t.bullets[o]=e;break}}});e.exports=a,cc._RF.pop()},{"../bullet/BulletHandgun":"BulletHandgun","../common/Temp":"Temp","./WeaponBase":"WeaponBase"}],"camera-control":[function(t,e,o){"use strict";cc._RF.push(e,"309771OUd5K+7tIScaJxxjS","camera-control"),cc.Class({extends:cc.Component,properties:{target:{default:null,type:cc.Node}},onLoad:function(){this.camera=this.getComponent(cc.Camera)},onEnable:function(){cc.director.getCollisionManager().attachDebugDrawToCamera(this.camera)},onDisable:function(){cc.director.getCollisionManager().detachDebugDrawFromCamera(this.camera)},lateUpdate:function(t){var e=this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);this.node.position=this.node.parent.convertToNodeSpaceAR(e)}}),cc._RF.pop()},{}]},{},["BulletBase","BulletHandgun","camera-control","BodyCollision","Follow","Wall","Common","Const","Temp","GameCharacter","GameControl","GameMap","GamePlayer","GameShootControl","JoyStickMove","JoyStickShoot","EventManager","NetworkWatcher","SceneBase","SceneHall","SceneLogin","SceneRoom","SceneShooting","StateBase","StateBodyIdle","StateBodyMove","StateBodyShoot","StateFeetIdle","StateFeetRun","StateMachine","WeaponBase","WeaponHandgun"]);