(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),i=a.n(s),l=(a(15),a(16),a(2)),c=a(3),o=a(5),u=a(4),m=a(1),h=a(6),d=(a(8),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).resetGame=a.resetGame.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"resetGame",value:function(){this.props.resetGame()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.resetGame},"Reset"))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={box:a.props.box},a.markTurnHandler=a.markTurnHandler.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"markTurnHandler",value:function(e){this.props.markTurnHandler(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({box:e.box})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{border:"1px",className:"Center"},r.a.createElement("tr",null,r.a.createElement("td",{id:"1",className:"Square",onClick:this.markTurnHandler},this.state.box[0]),r.a.createElement("td",{id:"2",className:"Square",onClick:this.markTurnHandler},this.state.box[1]),r.a.createElement("td",{id:"3",className:"Square",onClick:this.markTurnHandler},this.state.box[2])),r.a.createElement("tr",null,r.a.createElement("td",{id:"4",className:"Square",onClick:this.markTurnHandler},this.state.box[3]),r.a.createElement("td",{id:"5",className:"Square",onClick:this.markTurnHandler},this.state.box[4]),r.a.createElement("td",{id:"6",className:"Square",onClick:this.markTurnHandler},this.state.box[5])),r.a.createElement("tr",null,r.a.createElement("td",{id:"7",className:"Square",onClick:this.markTurnHandler},this.state.box[6]),r.a.createElement("td",{id:"8",className:"Square",onClick:this.markTurnHandler},this.state.box[7]),r.a.createElement("td",{id:"9",className:"Square",onClick:this.markTurnHandler},this.state.box[8]))))}}]),t}(n.Component),k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={box:[],winnerPlayer:"",turn:"X"},e.markTurnHandler=e.markTurnHandler.bind(Object(m.a)(e)),e.resetGame=e.resetGame.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"resetGame",value:function(){var e="X";Math.random()>.5&&(e="O"),this.setState({box:[],winnerPlayer:"",turn:e})}},{key:"markTurnHandler",value:function(e){var t=this,a=e.target.id-1;if(void 0===this.state.box[a]&&""===this.state.winnerPlayer){var n=this.state.box;n[a]=this.state.turn,this.setState({box:n},(function(){return t.checkWinner()}))}else alert("This Move Is Not Allowed")}},{key:"checkWinner",value:function(){var e=this.state.box,t=this.state.turn;e[0]===e[3]&&e[0]===e[6]&&t===e[0]||e[1]===e[4]&&e[1]===e[7]&&e[1]===t||e[2]===e[5]&&e[2]===e[8]&&e[2]===t||e[0]===e[4]&&e[0]===e[8]&&e[0]===t||e[2]===e[4]&&e[2]===e[6]&&e[2]===t||e[0]===e[1]&&e[0]===e[2]&&e[0]===t||e[3]===e[4]&&e[3]===e[5]&&e[3]===t||e[6]===e[7]&&e[6]===e[8]&&e[6]===t?(this.setState({winnerPlayer:t}),alert("Player "+t+" is the winner")):this.changeTurn()}},{key:"changeTurn",value:function(){"X"===this.state.turn?this.setState({turn:"O"}):this.setState({turn:"X"})}},{key:"render",value:function(){return r.a.createElement("div",{class:"center"},r.a.createElement("h1",null,"Tic Tac Toe"),r.a.createElement("p",null,"player ",this.state.turn," turn "),r.a.createElement(b,{box:this.state.box,markTurnHandler:this.markTurnHandler}),r.a.createElement(d,{resetGame:this.resetGame}))}}]),t}(n.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d75bf276.chunk.js.map