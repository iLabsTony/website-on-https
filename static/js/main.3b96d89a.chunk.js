(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={preScreen:"PreScreen_preScreen__2sTdO",invisible:"PreScreen_invisible__2VJIf"}},,function(e,t,n){e.exports={tips:"Tips_tips__gHWAH",invisible:"Tips_invisible__1hgSW"}},function(e,t,n){e.exports={chooseEar:"ChooseEar_chooseEar__2TmTa",invisible:"ChooseEar_invisible__1O-fQ"}},function(e,t,n){e.exports={firstEar:"FirstEar_firstEar__1fw2E",invisible:"FirstEar_invisible__1p6nE"}},function(e,t,n){e.exports={tonePlay:"TonePlay_tonePlay__35ne4",invisible:"TonePlay_invisible__16pgV"}},function(e,t,n){e.exports={howMany:"HowMany_howMany__5TRCr",invisible:"HowMany_invisible__SX3Qd"}},function(e,t,n){e.exports={newTone:"NewTone_newTone__3GdvJ",invisible:"NewTone_invisible__1FpIC"}},function(e,t,n){e.exports={secondEar:"SecondEar_secondEar__1bC_4",invisible:"SecondEar_invisible__1Ui9W"}},,,,,,,function(e,t,n){e.exports={noiseDetect:"NoiseDetect_noiseDetect__oaAEw"}},function(e,t,n){e.exports={audioTest:"AudioTest_audioTest__1nQqo"}},function(e,t,n){e.exports={scButton:"SCButton_scButton__19Sd9"}},function(e,t,n){e.exports={lottieTest:"LottieTest_lottieTest__1hiz4"}},,,function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a,o=n(0),c=n.n(o),i=n(27),s=n.n(i),r=(n(39),n(12)),l=n(7),u=(n(40),n(28)),m=n.n(u),d=window.scAudio,E=window.oscillator,f=window.gainNodeL,v=window.gainNodeR,p=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];d.resume(),E.frequency.value=e;var c=Math.pow(10,.05*n)*a,i=parseInt(t);f.gain.setTargetAtTime(c*(1!==i?1:0),0,o?0:.01),v.gain.setTargetAtTime(c*(-1!==i?1:0),0,o?0:.01)},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];d.resume(),f.gain.setTargetAtTime(0,0,e?0:.01),v.gain.setTargetAtTime(0,0,e?0:.01)},y={},N=function(e){return c.a.createElement("div",{className:m.a.noiseDetect},c.a.createElement("div",{id:"noiseVolume",className:"text"},"Ambient noise level: 0"),c.a.createElement("button",{id:"detectButton",className:"button",onClick:function(){var t,n;t=function(e){document.getElementById("noiseVolume").innerHTML="Ambient noise level: "+e,document.getElementById("detectButton").innerHTML="Stop"},n=function(){var t=document.getElementById("detectButton");t.innerHTML="Stoping... (About 5s)",setTimeout(function(){t.innerHTML="Detect",e.history.push("/audiotest")},5e3)},y.stream?(y.stream.getTracks().forEach(function(e){return e.stop()}),y.microphone.disconnect(y.analyser),y.analyser.disconnect(y.processor),y.processor.disconnect(y.noisyAudio.destination),y.noisyAudio.suspend(),y.noisyAudio.close().then(function(){y.microphone=null,y.analyser=null,y.processor.onaudioprocess=null,y.processor=null,y.noisyAudio=null,y={},n()})):navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){y.noisyAudio=new(window.AudioContext||window.webkitAudioContext),y.noisyAudio.resume(),y.stream=e,y.microphone=y.noisyAudio.createMediaStreamSource(e),y.analyser=y.noisyAudio.createAnalyser(),y.analyser.smoothingTimeConstant=.3,y.analyser.fftSize=1024,y.processor=y.noisyAudio.createScriptProcessor(2048,1,1),y.microphone.connect(y.analyser),y.analyser.connect(y.processor),y.processor.connect(y.noisyAudio.destination),y.processor.onaudioprocess=function(){var e=new Uint8Array(y.analyser.frequencyBinCount);y.analyser.getByteFrequencyData(e);for(var n=0,a=e.length,o=0;o<a;o++)n+=e[o];var c=n/a,i=Math.round(c);t(i)}}).catch(function(e){console.log("[LogError]===","getInputVolume",e,"===LOG_ERROR_END")})}},"Detect"))},w=n(10),h=n(29),_=n.n(h),g=-20,x=250,T=0,O=[],A=[],C=function(){var e=Object(o.useState)(-20),t=Object(w.a)(e,2),n=t[0],a=t[1],i=Object(o.useState)(0),s=Object(w.a)(i,2),r=s[0],l=s[1];Object(o.useEffect)(function(){u(),m(),d(),window.oscillator.start()},[]),Object(o.useEffect)(function(){r?E():(O.forEach(function(e){window.clearInterval(e)}),A.forEach(function(e){window.clearTimeout(e)}),b())},[r]);var u=function(){var e=document.getElementById("frequency"),t=e.options[e.selectedIndex].value;x=t},m=function(){var e=document.getElementById("pan"),t=e.options[e.selectedIndex].value;T=t},d=function(){var e=document.getElementById("volume").value;g=e,a(e)},E=function(){for(var e=0;e<3;e++)f(2*e*300)},f=function(e){A.push(setTimeout(function(){p(x,T,g,r),O.push(setInterval(function(){p(x,T,g,r)},2400))},e)),A.push(setTimeout(function(){b(),O.push(setInterval(function(){b()},2400))},e+300))};return c.a.createElement("div",{className:_.a.audioTest},c.a.createElement("h1",null,"Audio Test"),c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement("h2",null,"Frequency (hz)"),c.a.createElement("select",{id:"frequency",className:"dropdown",onChange:u},c.a.createElement("option",{value:"250"},"250"),c.a.createElement("option",{value:"500"},"500"),c.a.createElement("option",{value:"750"},"750"),c.a.createElement("option",{value:"1000"},"1000"),c.a.createElement("option",{value:"1500"},"1500"),c.a.createElement("option",{value:"2000"},"2000"),c.a.createElement("option",{value:"3000"},"3000"),c.a.createElement("option",{value:"4000"},"4000"),c.a.createElement("option",{value:"6000"},"6000"),c.a.createElement("option",{value:"8000"},"8000"))),c.a.createElement("div",null,c.a.createElement("h2",null,"Ear selector"),c.a.createElement("select",{id:"pan",className:"dropdown",onChange:m},c.a.createElement("option",{value:"0"},"Both"),c.a.createElement("option",{value:"-1"},"Left"),c.a.createElement("option",{value:"1"},"Right"))),c.a.createElement("div",null,c.a.createElement("h2",null,"Volume: ",n," dbFS"),c.a.createElement("input",{id:"volume",type:"range",min:"-96",max:"0",value:n,step:"1",className:"slider",onChange:d}),c.a.createElement("div",{className:"volume-buttons"},c.a.createElement("button",{className:"button",onClick:function(){var e=n;n>-96&&(e=+n-5),a(e<-96?-96:e),g=e}},"-5"),c.a.createElement("button",{className:"button",onClick:function(){var e=n;n<0&&(e=+n+5),a(e>0?0:e),g=e}},"+5"))),c.a.createElement("div",null,c.a.createElement("button",{id:"button",className:"button",onClick:function(){window.scAudio.resume(),l(0===r?1:0)}},0===r?"Play":"Stop"))))},j=n(1),I=n(13),S=n.n(I),P=n(2),k=n.n(P),B=n(14),L={flowIndex:0,earIndex:-1,tips:!0},M=function(e,t){switch(t.type){case"SET_DATA":var n=t.payload.flowIndex||0;return Object(B.a)({},e,t.payload||{},{tips:0===n,chooseEar:1===n,firstEar:2===n,tonePlay:[3,6,9,12].includes(n),howMany:[4,7,10,13].includes(n),newTone:[5,11].includes(n),secondEar:8===n});default:throw new Error}},D=c.a.createContext({}),q=n(15),F=n.n(q),H=n(30),R=n.n(H),V=function(e){var t=e.title,n=e.action,a=e.style;return c.a.createElement("div",{className:k()(R.a.scButton,a),onClick:n},t)},G=function(e){var t=Object(o.useContext)(D);return c.a.createElement("div",{className:k()(F.a.tips,"frame",Object(j.a)({},F.a.invisible,!t.tips))},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"text"},"Full screen animation")),c.a.createElement(V,{title:"Start",action:function(){e.gotoNext()},style:["main-button"]}))},J=n(16),z=n.n(J),Q=function(e){var t=Object(o.useContext)(D);return c.a.createElement("div",{className:k()(z.a.chooseEar,"frame",Object(j.a)({},z.a.invisible,!t.chooseEar))},c.a.createElement("div",{className:"text-wrapper"},c.a.createElement("span",{className:"text"},"Ok. Let's set a"),c.a.createElement("span",{className:"text green"},"Pre-screen listening level"),c.a.createElement("span",{className:"text dot"},"..........."),c.a.createElement("span",{className:"text"},"Choose an ",c.a.createElement("span",{className:"yellow"},"ear"))),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement("div",{className:"left-button",onClick:function(){return e.gotoNext(-1)}},"Left"),c.a.createElement("div",{className:"right-button",onClick:function(){return e.gotoNext(1)}},"Right")))},U=n(17),W=n.n(U),X=function(e){var t=Object(o.useContext)(D);return function(){var n=1===t.earIndex?"Right Ear!":"Left Ear!";return c.a.createElement("div",{className:k()(W.a.firstEar,"frame",Object(j.a)({},W.a.invisible,!t.firstEar))},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text"},n),c.a.createElement("span",{className:"text"},"Awesome!"),c.a.createElement("div",{className:"first-button"},"1"),c.a.createElement("span",{className:"text"},"Find a quiet room."),c.a.createElement("span",{className:"text"},".........."),c.a.createElement("div",{className:"second-button"},"2"),c.a.createElement("span",{className:"text"},"Now we\u2019re going to play some beep tones to find the right level."),c.a.createElement("span",{className:"text"},"Tell us how many you hear.")),c.a.createElement(V,{title:"Play",action:function(){window.scAudio.resume(),e.gotoNext()},style:["main-button"]}))}()},K=n(18),Y=n.n(K),Z=(n(41),function(e){var t=Object(o.useContext)(D),n=t.tonePlay;Object(o.useEffect)(function(){n&&setTimeout(function(){e.gotoNext()},5e3)},[t]);return c.a.createElement("div",{className:k()(Y.a.tonePlay,"frame",Object(j.a)({},Y.a.invisible,!n))},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"progress"})),c.a.createElement("span",{className:"message"},"Okay, the tones are playing...")))}),$=n(19),ee=n.n($),te=function(e){var t=Object(o.useContext)(D),n=function(t){console.log("[LogHowMany]===",t,"===LOG_TEST_END"),e.gotoNext()};return c.a.createElement("div",{className:k()(ee.a.howMany,"frame",Object(j.a)({},ee.a.invisible,!t.howMany))},c.a.createElement("span",{className:"text title"},"How many tones did you hear?"),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement("div",{className:"button",onClick:function(){n(0)}},"0"),c.a.createElement("div",{className:"button",onClick:function(){n(1)}},"1"),c.a.createElement("div",{className:"button",onClick:function(){n(2)}},"2"),c.a.createElement("div",{className:"button",onClick:function(){n(3)}},"3")))},ne=n(20),ae=n.n(ne),oe=function(e){var t=Object(o.useContext)(D);return c.a.createElement("div",{className:k()(ae.a.newTone,"frame",Object(j.a)({},ae.a.invisible,!t.newTone))},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"text"},"Please listen to a ",c.a.createElement("span",{className:"green"},"new")," set of tones")),c.a.createElement(V,{title:"Play",action:function(){e.gotoNext()},style:["main-button"]}))},ce=n(21),ie=n.n(ce),se=function(e){var t=Object(o.useContext)(D);return function(){var n=-1===t.earIndex?"Right Ear":"Left Ear";return c.a.createElement("div",{className:k()(ie.a.secondEar,"frame",Object(j.a)({},ie.a.invisible,!t.secondEar))},c.a.createElement("div",{className:"title"},c.a.createElement("span",{className:"text"},"Great!  Let's do the ",c.a.createElement("span",{className:"yellow"},n)," now.")),c.a.createElement(V,{title:"Play",action:function(){e.gotoNext(0-t.earIndex)},style:["main-button"]}))}()},re=window.oscillator,le=0,ue=(a=function(){var e=Object(o.useContext)(D),t=e.flowIndex,n=e.earIndex,a=e.tonePlay;Object(o.useEffect)(function(){a?i():(r(),re.frequency.value=250)},[a]);var i=function(){s(250),setTimeout(function(){r(),re.frequency.value=1e3},1e3),setTimeout(function(){s(1e3)},2e3),setTimeout(function(){r(),re.frequency.value=2e3},3e3),setTimeout(function(){s(2e3)},4e3)},s=function(e){[3,9].includes(t)?le=70:[6,12].includes(t)&&(le=40),p(e,n,le-96,1)},r=function(){le=0,0,b()},l=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;e.dispatch({type:"SET_DATA",payload:{flowIndex:t+1,earIndex:a}})};return function(){var e={gotoNext:l};return c.a.createElement("div",{className:S.a.preScreen},c.a.createElement(G,e),c.a.createElement(Q,e),c.a.createElement(X,e),c.a.createElement(Z,e),c.a.createElement(te,e),c.a.createElement(oe,e),c.a.createElement(se,e),c.a.createElement("div",{className:k()("finished",Object(j.a)({},S.a.invisible,14!==t))},"Finished PreScreen"))}()},function(e){var t=Object(o.useReducer)(M,L),n=Object(w.a)(t,2),i=n[0],s=n[1];return c.a.createElement(D.Provider,{value:Object(B.a)({},i,{dispatch:s})},c.a.createElement(a,e))}),me=n(31),de=n.n(me),Ee=function(e){return c.a.createElement("div",{className:de.a.lottieTest},"Lottie")},fe=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.b,{exact:!0,path:"/",component:function(){return c.a.createElement(l.a,{to:"/noiseDetect"})}}),c.a.createElement(l.b,{exact:!0,path:"/noiseDetect",component:N}),c.a.createElement(l.b,{path:"/audiotest",component:C}),c.a.createElement(l.b,{path:"/prescreen",component:ue}),c.a.createElement(l.b,{path:"/lottietest",component:Ee}))},ve=Object(l.f)(function(){return c.a.createElement("div",{className:"App"},c.a.createElement(fe,null))});s.a.render(c.a.createElement(r.a,{basename:"/website-on-https/"},c.a.createElement(ve,null)),document.getElementById("root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.3b96d89a.chunk.js.map