(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),s=(a(16),a(17),a(7)),c=a(2),l=a(3),h=a(5),u=a(4),b=a(1),m=a(6),d=(a(8),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).resetGame=a.resetGame.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"resetGame",value:function(){this.props.resetGame()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"btn",onClick:this.resetGame},"Reset"))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={box:a.props.box},a.markTurnHandler=a.markTurnHandler.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"markTurnHandler",value:function(e){this.props.markTurnHandler(e)}},{key:"componentWillReceiveProps",value:function(e){this.setState({box:e.box})}},{key:"render",value:function(){return i.a.createElement("div",{className:"tic-toe-box"},i.a.createElement("div",{className:"box1 ".concat("X"===this.state.box[0]?"Xcolor":"O"===this.state.box[0]?"Ocolor":""),id:"1",onClick:this.markTurnHandler},this.state.box[0]),i.a.createElement("div",{className:"box2 ".concat("X"===this.state.box[1]?"Xcolor":"O"===this.state.box[1]?"Ocolor":""),id:"2",onClick:this.markTurnHandler},this.state.box[1]),i.a.createElement("div",{className:"box3 ".concat("X"===this.state.box[2]?"Xcolor":"O"===this.state.box[2]?"Ocolor":""," "),id:"3",onClick:this.markTurnHandler},this.state.box[2]),i.a.createElement("div",{className:"box4 ".concat("X"===this.state.box[3]?"Xcolor":"O"===this.state.box[3]?"Ocolor":""),id:"4",onClick:this.markTurnHandler}," ",this.state.box[3]),i.a.createElement("div",{className:"box5 ".concat("X"===this.state.box[4]?"Xcolor":"O"===this.state.box[4]?"Ocolor":""),id:"5",onClick:this.markTurnHandler},this.state.box[4]),i.a.createElement("div",{className:"box6 ".concat("X"===this.state.box[5]?"Xcolor":"O"===this.state.box[5]?"Ocolor":""),id:"6",onClick:this.markTurnHandler},this.state.box[5]),i.a.createElement("div",{className:"box7 ".concat("X"===this.state.box[6]?"Xcolor":"O"===this.state.box[6]?"Ocolor":""),id:"7",onClick:this.markTurnHandler}," ",this.state.box[6]),i.a.createElement("div",{className:"box8 ".concat("X"===this.state.box[7]?"Xcolor":"O"===this.state.box[7]?"Ocolor":""),id:"8",onClick:this.markTurnHandler},this.state.box[7]),i.a.createElement("div",{className:"box9 ".concat("X"===this.state.box[8]?"Xcolor":"O"===this.state.box[8]?"Ocolor":""),id:"9",onClick:this.markTurnHandler},this.state.box[8]))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={selectedOption:e.selected},a.selectRadioButton=a.selectRadioButton.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"selectRadioButton",value:function(e){this.props.changeGameMode(e.target.value),this.setState({selectedOption:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"radiobtn"},i.a.createElement("div",{className:"radio1"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"BOT",checked:"BOT"===this.state.selectedOption,onChange:this.selectRadioButton}),"BOT")),i.a.createElement("div",{className:"radio2"},i.a.createElement("label",null,i.a.createElement("input",{type:"radio",value:"HUMAN",checked:"HUMAN"===this.state.selectedOption,onChange:this.selectRadioButton}),"HUMAN")))}}]),t}(n.Component),k={human:"X",blank:void 0,machine:"O"},x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).state={box:[],winnerPlayer:"",turn:k.human,selectedOption:"BOT"},e.markTurnHandler=e.markTurnHandler.bind(Object(b.a)(e)),e.resetGame=e.resetGame.bind(Object(b.a)(e)),e.handleOptionChange=e.handleOptionChange.bind(Object(b.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"resetGame",value:function(){this.setState({box:[],winnerPlayer:"",turn:k.human})}},{key:"markTurnHandler",value:function(e){var t=e.target.id-1;if(this.state.box[t]===k.blank&&""===this.state.winnerPlayer){var a=this.state.box;a[t]=this.state.turn,this.setState({box:a});var n=this.checkWinner();if(n&&n!==k.undefined)return this.setState({winnerPlayer:n}),void alert("Player "+n+" is the winner");n!==k.undefined?"BOT"===this.state.selectedOption?this.botMove(this.state.box):this.changeTurn():alert("It is a tie")}else alert("this move is not valid")}},{key:"botMove",value:function(e){for(var t,a=-1/0,n=0;n<9;n++)if(e[n]===k.blank){var i=Object(s.a)(e);i[n]=k.machine;var r=this.miniMax(i,!1);r>a&&(a=r,t=n)}var o="";e[t]=k.machine,this.boxValidation(e,k.machine)&&(o=k.machine),this.setState({box:e,winnerPlayer:o}),""!==o&&alert("Bot WIN")}},{key:"miniMax",value:function(e,t){if(this.boxValidation(e,k.machine))return 1;if(this.boxValidation(e,k.human))return-1;if(t){for(var a=-1/0,n=0;n<9;n++){var i=Object(s.a)(e);if(i[n]===k.blank){i[n]=k.machine;var r=this.miniMax(i,!1);r>a&&(a=r)}}return a===-1/0?0:a}for(var o=1/0,c=0;c<9;c++){var l=Object(s.a)(e);if(l[c]===k.blank){l[c]=k.human;var h=this.miniMax(l,!0);o>h&&(o=h)}}return o===1/0?0:o}},{key:"checkWinner",value:function(){var e=Object(s.a)(this.state.box),t=this.state.turn;return this.boxValidation(e,t)?t:this.checkDraw(e)?k.blank:null}},{key:"boxValidation",value:function(e,t){return e[0]===e[3]&&e[0]===e[6]&&t===e[0]||e[1]===e[4]&&e[1]===e[7]&&e[1]===t||e[2]===e[5]&&e[2]===e[8]&&e[2]===t||e[0]===e[4]&&e[0]===e[8]&&e[0]===t||e[2]===e[4]&&e[2]===e[6]&&e[2]===t||e[0]===e[1]&&e[0]===e[2]&&e[0]===t||e[3]===e[4]&&e[3]===e[5]&&e[3]===t||e[6]===e[7]&&e[6]===e[8]&&e[6]===t}},{key:"checkDraw",value:function(e){for(var t=!0,a=0;a<9;a++)if(e[a]===k.blank){t=!1;break}return t}},{key:"changeTurn",value:function(){this.state.turn===k.human?this.setState({turn:k.machine}):this.setState({turn:k.human})}},{key:"handleOptionChange",value:function(e){this.setState({selectedOption:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"center"},i.a.createElement("h1",null,"Unbeatable Tic Tac Toe B!tch"),i.a.createElement("p",null,"Player ",this.state.turn," turn "),i.a.createElement(v,{box:this.state.box,markTurnHandler:this.markTurnHandler}),i.a.createElement(d,{resetGame:this.resetGame}),i.a.createElement(O,{changeGameMode:this.handleOptionChange,selected:this.state.selectedOption}))}}]),t}(n.Component);var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.62aa4d7e.chunk.js.map