require=function t(e,c,s){function i(l,r){if(!c[l]){if(!e[l]){var n="function"==typeof require&&require;if(!r&&n)return n(l,!0);if(h)return h(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var o=c[l]={exports:{}};e[l][0].call(o.exports,function(t){var c=e[l][1][t];return i(c?c:t)},o,o.exports,t,e,c,s)}return c[l].exports}for(var h="function"==typeof require&&require,l=0;l<s.length;l++)i(s[l]);return i}({cell_base:[function(t,e,c){"use strict";cc._RF.push(e,"c6755Q3leNODrRIRTbTKSDr","cell_base");cc.Class({ctor:function(){this.rects=[],this.rotates=[],this.rotateIndex=-1,this.x=0,this.y=0,this.initRects(),this.initRotates(),this.rotateRight()},initRects:function(){},initRotates:function(){},applyRotate:function(){for(var t=0;t<this.rects.length;t+=1)this.rects[t].x=this.rotates[this.rotateIndex][t].x,this.rects[t].y=this.rotates[this.rotateIndex][t].y},rotateRight:function(){this.rotateIndex+=1,this.rotateIndex%=this.rotates.length,this.applyRotate()},rotateLeft:function(){this.rotateIndex-=1,this.rotateIndex+=this.rotates.length,this.rotateIndex%=this.rotates.length,this.applyRotate()},width:function(){for(var t=0,e=0;e<this.rects.length;e+=1)t<=this.rects[e].x&&(t=this.rects[e].x);return t},height:function(){for(var t=0,e=0;e<this.rects.length;e+=1)t<=this.rects[e].y&&(t=this.rects[e].y);return t}});cc._RF.pop()},{}],cell_i:[function(t,e,c){"use strict";cc._RF.push(e,"3df67UNzaNLZ647VVAutxLs","cell_i");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(0,0)),this.rects.push(cc.v2(0,1)),this.rects.push(cc.v2(0,2)),this.rects.push(cc.v2(0,3))},initRotates:function(){this.rotates.push([cc.v2(0,0),cc.v2(0,1),cc.v2(0,2),cc.v2(0,3)]),this.rotates.push([cc.v2(0,1),cc.v2(1,1),cc.v2(2,1),cc.v2(3,1)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_j:[function(t,e,c){"use strict";cc._RF.push(e,"9d522TacK1PX5yGx/Cs72zj","cell_j");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(1,0)),this.rects.push(cc.v2(1,1)),this.rects.push(cc.v2(0,2)),this.rects.push(cc.v2(1,2))},initRotates:function(){this.rotates.push([cc.v2(1,0),cc.v2(1,1),cc.v2(0,2),cc.v2(1,2)]),this.rotates.push([cc.v2(0,1),cc.v2(0,2),cc.v2(1,2),cc.v2(2,2)]),this.rotates.push([cc.v2(0,0),cc.v2(1,0),cc.v2(0,1),cc.v2(0,2)]),this.rotates.push([cc.v2(0,1),cc.v2(1,1),cc.v2(2,1),cc.v2(2,2)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_l:[function(t,e,c){"use strict";cc._RF.push(e,"4a2c0QEmNlCI7II32HznF14","cell_l");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(0,0)),this.rects.push(cc.v2(0,1)),this.rects.push(cc.v2(0,2)),this.rects.push(cc.v2(1,2))},initRotates:function(){this.rotates.push([cc.v2(0,0),cc.v2(0,1),cc.v2(0,2),cc.v2(1,2)]),this.rotates.push([cc.v2(0,1),cc.v2(1,1),cc.v2(2,1),cc.v2(0,2)]),this.rotates.push([cc.v2(0,0),cc.v2(1,0),cc.v2(1,1),cc.v2(1,2)]),this.rotates.push([cc.v2(2,1),cc.v2(0,2),cc.v2(1,2),cc.v2(2,2)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_o:[function(t,e,c){"use strict";cc._RF.push(e,"c2b2b81D3pK47X+WM+hWN87","cell_o");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(0,0)),this.rects.push(cc.v2(0,1)),this.rects.push(cc.v2(1,0)),this.rects.push(cc.v2(1,1))},initRotates:function(){this.rotates.push([cc.v2(0,0),cc.v2(0,1),cc.v2(1,0),cc.v2(1,1)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_s:[function(t,e,c){"use strict";cc._RF.push(e,"681beQB8ZBJMJMjHnGxu3y/","cell_s");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(1,1)),this.rects.push(cc.v2(2,1)),this.rects.push(cc.v2(0,2)),this.rects.push(cc.v2(1,2))},initRotates:function(){this.rotates.push([cc.v2(1,1),cc.v2(2,1),cc.v2(0,2),cc.v2(1,2)]),this.rotates.push([cc.v2(0,0),cc.v2(0,1),cc.v2(1,1),cc.v2(1,2)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_t:[function(t,e,c){"use strict";cc._RF.push(e,"49281BdV51Hcp6pWnikVXZq","cell_t");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(0,1)),this.rects.push(cc.v2(1,1)),this.rects.push(cc.v2(2,1)),this.rects.push(cc.v2(1,2))},initRotates:function(){this.rotates.push([cc.v2(0,1),cc.v2(1,1),cc.v2(2,1),cc.v2(1,2)]),this.rotates.push([cc.v2(1,0),cc.v2(0,1),cc.v2(1,1),cc.v2(1,2)]),this.rotates.push([cc.v2(1,0),cc.v2(0,1),cc.v2(1,1),cc.v2(2,1)]),this.rotates.push([cc.v2(0,0),cc.v2(0,1),cc.v2(1,1),cc.v2(0,2)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],cell_z:[function(t,e,c){"use strict";cc._RF.push(e,"b2d1c3QFNlEIrVksEmzzL9V","cell_z");var s=t("./cell_base.js");cc.Class({"extends":s,initRects:function(){this.rects.push(cc.v2(0,1)),this.rects.push(cc.v2(1,1)),this.rects.push(cc.v2(1,2)),this.rects.push(cc.v2(2,2))},initRotates:function(){this.rotates.push([cc.v2(0,1),cc.v2(1,1),cc.v2(1,2),cc.v2(2,2)]),this.rotates.push([cc.v2(1,0),cc.v2(1,1),cc.v2(0,1),cc.v2(0,2)])}});cc._RF.pop()},{"./cell_base.js":"cell_base"}],common:[function(t,e,c){"use strict";cc._RF.push(e,"e2ddcQ8rvtD760w/0M7uMgX","common");var s=e.exports;s.Phases={PRE_START:"PRE_START",START:"START",PAUSE:"PAUSE",GAME_OVER:"GAMEOVER"},cc._RF.pop()},{}],game:[function(t,e,c){"use strict";cc._RF.push(e,"f68b5d4xwtD14Ewy3RdIIn0","game");var s=t("./cells/cell_t.js"),i=t("./cells/cell_i.js"),h=t("./cells/cell_l.js"),l=t("./cells/cell_j.js"),r=t("./cells/cell_s.js"),n=t("./cells/cell_z.js"),a=t("./cells/cell_o.js"),o=32,u=32,p=t("./common.js").Phases;cc.Class({"extends":cc.Component,properties:{graphicsNode:{type:cc.Node,"default":null},nextGraphicsNode:{type:cc.Node,"default":null},startBtn:{type:cc.Button,"default":null},pauseLabel:{type:cc.Label,"default":null},scoreLabel:{type:cc.Label,"default":null},lineLabel:{type:cc.Label,"default":null},levelLabel:{type:cc.Label,"default":null}},onLoad:function(){this.phase=p.PRE_START,this.width=this.graphicsNode.width/o,this.height=this.graphicsNode.height/u,this.graphics=this.graphicsNode.getComponent(cc.Graphics),this.nextGraphics=this.nextGraphicsNode.getComponent(cc.Graphics),this.clear(),this.initCell(),this.startBtn.node.on("click",this.onClickStart,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)},clear:function(){this.score=0,this.line=0,this.level=1,this.frameCount=0,this.data=new Uint8Array(this.width*this.height),this.fastFall=!1,this.inEffect=0,this.keyCode=cc.KEY.none},initCell:function(){this.nextCell=this.generateNextCell()},onClickStart:function(){this.startGame()},onKeyDown:function(t){var e=t.keyCode;cc.log(e),this.phase==p.START&&e!=cc.KEY.p?this.keyCode=e:this.keyCode=cc.KEY.none,this.phase==p.START&&e==cc.KEY.p&&this.pause(),this.phase==p.PAUSE&&e==cc.KEY.r&&this.resume()},getDataAtXY:function(t,e){var c=e*this.width+t;return c<0||c>this.data.length-1?0:this.data[c]},setDataAtXY:function(t,e,c){c=c||0;var s=e*this.width+t;s<0||s>this.data.length-1||(this.data[s]=c)},generateNextCell:function(t){var e=[i,a,s,h,l,r,n];return new(t=t||e[Math.floor(Math.random()*e.length)])},generateCurrCell:function(){this.currentCell=cc.instantiate(this.nextCell),this.currentCell.x=Math.floor(this.width/2-this.currentCell.width()/2),this.currentCell.y=0,this.nextCell=this.generateNextCell()},startGame:function(){this.clear(),this.phase=p.START,this.generateCurrCell(),this.refreshNextCell(),this.startBtn.node.active=!1,this.pauseLabel.visible=!0,cc.log("startGame")},pause:function(){this.phase=p.PAUSE,this.pauseLabel.string="[R]esume"},resume:function(){this.phase=p.START,this.pauseLabel.string="[P]ause"},gameover:function(){this.phase=p.GAME_OVER,this.startBtn.node.active=!0,this.pauseLabel.visible=!1},checkHit:function(){var t=this.currentCell.x,e=this.currentCell.y,c=0;for(c=0;c<this.currentCell.rects.length;c+=1){var s=this.currentCell.rects[c],i=s.x+t,h=s.y+e;if(i<0||i>=this.width)return!0;if(h>=this.height)return!0;if(this.getDataAtXY(i,h)>0)return!0}return!1},fallCell:function(){var t=this.currentCell.x,e=this.currentCell.y,c=0;for(e+=1,c=0;c<this.currentCell.rects.length;c+=1){var s=this.currentCell.rects[c],i=s.x+t,h=s.y+e;if(h>=this.height)return!0;if(this.getDataAtXY(i,h)>0)return!0}return this.currentCell.y=e,!1},checkGameover:function(){return 0==this.currentCell.y},refreshData:function(){for(var t=this.currentCell.x,e=this.currentCell.y,c=0;c<this.currentCell.rects.length;c+=1){var s=this.currentCell.rects[c],i=s.x+t,h=s.y+e;this.setDataAtXY(i,h,1)}},checkClearLines:function(){for(var t=[],e=0;e<this.data.length/this.width;e+=1){for(var c=!0,s=0;s<this.width;s+=1)if(0==this.data[e*this.width+s]){c=!1;break}c&&t.push(e)}return t.length>0&&cc.log(t),this.line+=t.length,this.lineLabel.string=this.line,this.score+=t.length*t.length,this.scoreLabel.string=this.score,t},clearLines:function(t){for(var e=0;e<t.length;e+=1)for(var c=t[e];c>=0;c-=1)for(var s=0;s<this.width;s+=1)this.setDataAtXY(s,c,this.getDataAtXY(s,c-1))},moveLeft:function(){this.currentCell.x-=1,this.currentCell.x<0?this.currentCell.x=0:this.checkHit()&&(this.currentCell.x+=1)},moveRight:function(){this.currentCell.x+=1,this.currentCell.x+this.currentCell.width()>this.width-1?this.currentCell.x=this.width-this.currentCell.width()-1:this.checkHit()&&(this.currentCell.x-=1)},rotateCell:function(){this.currentCell.rotateRight(),this.checkHit()&&this.currentCell.rotateLeft()},refresh:function(){this.cleanGraphics(),this.drawGrid(),this.drawData(),this.drawCurrCell()},cleanGraphics:function(){this.graphics.clear(),this.graphics.fillColor=cc.hexToColor("#FFFFFF"),this.graphics.rect(0,0,this.width*o,this.height*u),this.graphics.fill()},drawGrid:function(){this.graphics.strokeColor=cc.hexToColor("#0000FF");for(var t=0;t<=this.height;t+=1)this.graphics.moveTo(0,t*u),this.graphics.lineTo(this.width*o,t*u),this.graphics.stroke();for(var e=0;e<=this.width;e+=1)this.graphics.moveTo(e*o,0*u),this.graphics.lineTo(e*o,this.height*u),this.graphics.stroke()},drawData:function(){this.graphics.fillColor=cc.hexToColor("#666666");for(var t=0;t<this.height;t+=1)for(var e=0;e<this.width;e+=1){var c=e*o,s=(this.height-t-1)*u;this.getDataAtXY(e,t)>0&&(this.graphics.rect(c,s,o,u),this.graphics.fill())}},drawCurrCell:function(){this.graphics.fillColor=cc.hexToColor("#660000");for(var t=0;t<this.currentCell.rects.length;t+=1){var e=this.currentCell.rects[t],c=(e.x+this.currentCell.x)*o,s=(this.height-(e.y+this.currentCell.y)-1)*u;this.graphics.rect(c,s,o,u),this.graphics.fill()}},refreshNextCell:function(){this.nextGraphics.clear(),this.nextGraphics.fillColor=cc.hexToColor("#FFFFFF"),this.nextGraphics.rect(0,0,4*o,4*u),this.nextGraphics.fill(),this.nextGraphics.fillColor=cc.hexToColor("#666600");for(var t=0;t<this.nextCell.rects.length;t+=1){var e=this.nextCell.rects[t],c=(this.nextGraphicsNode.width-this.nextCell.width()*o)/2,s=(this.nextGraphicsNode.height-this.nextCell.height()*u)/2;c+=e.x*o-o/2,s+=e.y*u+u/2,s=this.nextGraphicsNode.height-s,this.nextGraphics.rect(c,s,o,u),this.nextGraphics.fill()}},update:function(t){this.frameCount+=1,this.updateKey(),this.updateLogic(t)},updateKey:function(){this.keyCode==cc.KEY.left?this.moveLeft():this.keyCode==cc.KEY.right?this.moveRight():this.keyCode==cc.KEY.up?this.rotateCell():this.keyCode==cc.KEY.down&&(this.fastFall=!0),this.keyCode=cc.KEY.none},updateLogic:function(t){if(!(this.inEffect>0))if(this.phase==p.START){var e=20+5*(10-this.level);if(this.fastFall&&(e=5),this.frameCount%e==0&&(cc.log("updateLogic"),this.fallCell()))if(this.checkGameover())this.gameover();else{this.fastFall=!1,this.refreshData();var c=this.checkClearLines();this.clearLines(c),this.generateCurrCell(),this.refreshNextCell()}this.refresh()}else this.phase==p.PAUSE||this.phase==p.GAME_OVER||this.phase==p.PRE_START}}),cc._RF.pop()},{"./cells/cell_i.js":"cell_i","./cells/cell_j.js":"cell_j","./cells/cell_l.js":"cell_l","./cells/cell_o.js":"cell_o","./cells/cell_s.js":"cell_s","./cells/cell_t.js":"cell_t","./cells/cell_z.js":"cell_z","./common.js":"common"}]},{},["cell_base","cell_i","cell_j","cell_l","cell_o","cell_s","cell_t","cell_z","common","game"]);