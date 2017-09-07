!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={cellSize:18,tailSize:200,endColor:"rgba(046, 204, 113, 0.25)",backgroundColor:"#ecf0f1",wallsColor:"#ccc",wallsWidth:2,playerSize:5,playersColors:["rgba(231, 076, 060, 1.0)","rgba(052, 152, 219, 1.0)","rgba(046, 204, 113, 1.0)","rgba(241, 196, 015, 1.0)"],playersControls:[[38,39,40,37],[90,68,83,81]]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=function(){function t(t){var e=this;this.clear=function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height)},this.font=function(t,i,n,r,o,l){void 0===n&&(n=0),void 0===r&&(r=0),void 0===o&&(o=12),void 0===l&&(l="Arial"),e.ctx.font=o.toString()+"px "+l,e.ctx.fillStyle=i,e.ctx.fillText(t,n,r)},this.circle=function(t,i,n,r,o){void 0===i&&(i=1),void 0===n&&(n=0),void 0===r&&(r=0),void 0===o&&(o=0),e.ctx.fillStyle=t,e.ctx.lineWidth=i,e.ctx.beginPath(),e.ctx.arc(n,r,o,0,2*Math.PI),e.ctx.fill()},this.rectangle=function(t,i,n,r,o){void 0===i&&(i=0),void 0===n&&(n=0),void 0===r&&(r=e.canvas.width),void 0===o&&(o=e.canvas.height),e.ctx.fillStyle=t,e.ctx.fillRect(i,n,r,o)},this.line=function(t,i,n,r,o,l){void 0===i&&(i=1),void 0===n&&(n=0),void 0===r&&(r=0),void 0===o&&(o=0),void 0===l&&(l=0),e.ctx.strokeStyle=t,e.ctx.lineWidth=i,e.ctx.beginPath(),e.ctx.moveTo(n,r),e.ctx.lineTo(o,l),e.ctx.stroke()},this.id=t;var i=document.createElement("canvas");i.setAttribute("id",this.id),document.getElementById("game").appendChild(i),this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d"),this.canvas.width=Math.floor(window.innerWidth/n.default.cellSize)*n.default.cellSize,this.canvas.height=Math.floor(window.innerHeight/n.default.cellSize)*n.default.cellSize}return t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),new(i(3).default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(4),r=i(5),o=i(6),l=function(){function t(){var t=this;this.chrono=new n.default(this),this.players=[],this.isFinished=!1,this.isStarted=!1,this.gameMod="versus",this.init=function(){t.isFinished=!1;for(var e=document.getElementById("game");e.firstChild;)e.removeChild(e.firstChild);t.labyrinth=new o.default,t.chrono.init(),0==t.players.length&&t.addPlayer(),t.players.map(function(e){e.labyrinth=t.labyrinth,e.hasFinished=!1,e.init()})},this.loop=function(){t.players.map(function(t){return t.loop()}),"versus"==t.gameMod&&t.players.filter(function(t){return t.hasFinished}).length>0?(t.stop(),t.chrono.stop()):"coop"==t.gameMod&&0==t.players.filter(function(t){return!t.hasFinished}).length?(t.stop(),t.chrono.stop()):t.start()},this.start=function(){t.isStarted=!0,t.loopID=window.requestAnimationFrame(t.loop)},this.stop=function(){t.isFinished=!0,t.isStarted=!1,t.loopID&&window.cancelAnimationFrame(t.loopID)},this.addPlayer=function(){t.players.push(new r.default(t.labyrinth,t.players.length,t.players.length))},window.addEventListener("resize",this.init),this.init(),document.addEventListener("keyup",function(e){13==e.keyCode&&t.players.length<4&&t.addPlayer()})}return t}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=this;this.diffTime=0,this.stopped=!1,this.init=function(){document.getElementById("versus").innerHTML="Versus",document.getElementById("message").innerHTML=" / ",document.getElementById("coop").innerHTML="Coop",document.getElementById("seconds").innerHTML="",document.getElementById("milliseconds").innerHTML=""},this.start=function(){e.stopped=!1,e.startTime=new Date,e.actualize()},this.stop=function(){e.stopped=!0},this.actualize=function(){e.diffTime=Math.abs((new Date).getTime()-e.startTime.getTime()),e.stopped||requestAnimationFrame(e.actualize),e.display()},this.display=function(){document.getElementById("versus").innerHTML="",document.getElementById("message").innerHTML="",document.getElementById("coop").innerHTML="",document.getElementById("seconds").innerHTML=((e.diffTime-e.diffTime%1e3)/1e3).toString()+"s ",document.getElementById("milliseconds").innerHTML=("00"+(e.diffTime%1e3).toString()+"0").slice(-4,-1)},this.game=t,this.init(),document.getElementById("versus").addEventListener("click",function(t){t.stopPropagation(),e.game.gameMod="versus",e.start(),e.game.start()}),document.getElementById("coop").addEventListener("click",function(t){t.stopPropagation(),e.game.gameMod="coop",e.start(),e.game.start()}),document.getElementById("chrono").addEventListener("click",function(t){e.game.init()})}return t}();e.default=n},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(1),o=function(){function t(t,e,i){void 0===i&&(i=0);var o=this;this.size=n.default.playerSize,this.moves=[!1,!1,!1,!1],this.history=[],this.hasFinished=!1,this.init=function(){o.canvas=new r.default(o.id.toString()),o.x=o.labyrinth.cellSize*(.5+o.randInt(0,o.labyrinth.width-1)),o.y=o.labyrinth.cellSize*(.5+o.randInt(0,o.labyrinth.height-1))},this.loop=function(){o.move(),o.draw()},this.controls=function(){document.addEventListener("keydown",function(t){n.default.playersControls[o.config].map(function(e,i){t.keyCode==e&&(o.moves[i]=!0)})}),document.addEventListener("keyup",function(t){n.default.playersControls[o.config].map(function(e,i){t.keyCode==e&&(o.moves[i]=!1)})})},this.draw=function(){o.canvas.clear(),o.canvas.circle(n.default.playersColors[o.id],1,o.x,o.y,o.size),o.canvas.circle(n.default.backgroundColor,1,o.x,o.y,o.size-1),o.canvas.circle(n.default.playersColors[o.id].substr(0,20)+"0.5)",1,o.x,o.y,o.size-1)},this.move=function(){var t=o.getActualCell();t.isEnd?o.hasFinished=!0:(o.moves[0]&&((o.y-o.size-n.default.wallsWidth/2)%o.labyrinth.cellSize==0?t.walls[0]||o.y--:o.y--),o.moves[1]&&((o.x+o.size)%o.labyrinth.cellSize==o.labyrinth.cellSize-1?t.walls[1]||o.x++:o.x++),o.moves[2]&&((o.y+o.size)%o.labyrinth.cellSize==o.labyrinth.cellSize-1?t.walls[2]||o.y++:o.y++),o.moves[3]&&((o.x-o.size-n.default.wallsWidth/2)%o.labyrinth.cellSize==0?t.walls[3]||o.x--:o.x--))},this.getActualCell=function(){return o.labyrinth.grid[Math.floor(o.y/o.labyrinth.cellSize)][Math.floor(o.x/o.labyrinth.cellSize)]},this.randInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},this.id=e,this.labyrinth=t,this.config=i,this.name="Player "+(e+1).toString(),this.menu=document.getElementById("player_"+(this.id+1).toString()),this.menu.style.backgroundColor=n.default.playersColors[this.id].substr(0,20)+"0.25)",this.controls(),this.init()}return t}();e.default=o},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),r=i(1),o=i(7),l=function(){function t(){var t=this;for(this.canvas=new r.default("labyrinth"),this.width=Math.floor(window.innerWidth/n.default.cellSize),this.height=Math.floor(window.innerHeight/n.default.cellSize),this.cellSize=n.default.cellSize,this.grid=[],this.createGrid=function(){for(var e=0;e<t.height;e++){t.grid.push([]);for(var i=0;i<t.width;i++)t.grid[e].push(new o.default(i+e*t.width))}},this.generateLabyrinth=function(){var e=t.randInt(0,t.height-1),i=t.randInt(0,t.width-1),n=t.randInt(0,3);if(!(0==e&&0==n||0==i&&3==n||e==t.height-1&&2==n||i==t.width-1&&1==n)&&t.grid[e][i].walls[n]){var r=void 0;switch(n){case 0:r=t.grid[0==e?t.height-1:e-1][i];break;case 1:r=t.grid[e][i==t.width-1?0:i+1];break;case 2:r=t.grid[e==t.height-1?0:e+1][i];break;case 3:r=t.grid[e][0==i?t.width-1:i-1]}t.grid[e][i].id!=r.id&&(t.grid[e][i].walls[n]=!1,r.walls[(n+2)%4]=!1,t.updateGroupId(t.grid[e][i].id,r.id))}},this.selectEnd=function(){t.grid[Math.floor(t.height/2)][Math.floor(t.width/2)].isEnd=!0},this.updateGroupId=function(e,i){t.grid.map(function(t,n){t.map(function(t,n){t.id==i&&(t.id=e)})})},this.isGenerated=function(){for(var e=0;e<t.height;e++)for(var i=0;i<t.width;i++)if(t.grid[e][i].id!=t.grid[0][0].id)return!1;return!0},this.drawLabyrinth=function(){t.grid.map(function(e,i){e.map(function(e,r){e.isEnd&&t.canvas.rectangle(n.default.endColor,t.cellSize*r,t.cellSize*i,t.cellSize,t.cellSize),e.walls.map(function(e,o){e&&t.canvas.line(n.default.wallsColor,n.default.wallsWidth,t.cellSize*(r+(1==o?1:0)),t.cellSize*(i+(2==o?1:0)),t.cellSize*(r+(3!=o?1:0)),t.cellSize*(i+(0!=o?1:0)))})})})},this.randInt=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},this.createGrid();!this.isGenerated();)this.generateLabyrinth();this.selectEnd(),this.drawLabyrinth()}return t}();e.default=l},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){var e=this;this.isEnd=!1,this.walls=[!0,!0,!0,!0],this.countWalls=function(){return e.walls.filter(function(t){return t}).length},this.id=t}return t}();e.default=n}]);