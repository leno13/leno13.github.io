(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{8363:function(s,t,e){"use strict";e.r(t);var i=e("7a23");const a=Object(i["F"])("data-v-0f98e892");Object(i["s"])("data-v-0f98e892");const n={class:"play"},r={key:0,class:"column"},o={class:"box"},c={class:"line upper"},h={class:"question"},d=Object(i["g"])("p",null,"Question:",-1),l={class:"hitRate"},u={class:"rate"},b={class:"tries"},w={class:"line downer"},j={key:0,class:"history"},g={class:"line dots"},O={key:0,class:"dot green-dot"},v={key:1,class:"dot red-dot"},p=Object(i["g"])("p",null,"Last 10 tries",-1),y={key:1,class:"history no-history"},f={class:"answers"},m={key:1,class:"column"},k=Object(i["g"])("p",null,[Object(i["f"])("No questions"),Object(i["g"])("br"),Object(i["f"])("Please add a question")],-1);Object(i["q"])();const A=a((s,t,e,a,A,_)=>(Object(i["p"])(),Object(i["d"])("div",n,[A.question?(Object(i["p"])(),Object(i["d"])("div",r,[Object(i["g"])("div",o,[Object(i["g"])("div",c,[Object(i["g"])("div",h,[d,Object(i["g"])("div",null,Object(i["y"])(A.question),1)]),Object(i["g"])("div",l,[Object(i["g"])("div",u,Object(i["y"])(_.getHitRate)+"%",1),Object(i["g"])("div",b,Object(i["y"])(_.getTries),1)])]),Object(i["g"])("div",w,[A.history.length?(Object(i["p"])(),Object(i["d"])("div",j,[Object(i["g"])("div",g,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(A.history,(s,t)=>(Object(i["p"])(),Object(i["d"])("div",{key:t},[s?(Object(i["p"])(),Object(i["d"])("div",O)):(Object(i["p"])(),Object(i["d"])("div",v))]))),128))]),p])):(Object(i["p"])(),Object(i["d"])("div",y,"No history")),Object(i["g"])("button",{id:"next",class:"primary",onClick:t[1]||(t[1]=(...s)=>_.next&&_.next(...s))},"Next")])]),Object(i["g"])("div",f,[(Object(i["p"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(A.answers,(s,t)=>(Object(i["p"])(),Object(i["d"])("div",{key:t,class:["answer",s["class"]],onClick:s=>_.checkAnswer(t,A.id)},Object(i["y"])(s["answer"]),11,["onClick"]))),128))])])):(Object(i["p"])(),Object(i["d"])("div",m,[k]))])));var _=e("4360");function x(s){for(let t=s.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[s[t],s[e]]=[s[e],s[t]]}}function C(s){return Math.floor(Math.random()*s)}var q={data(){return{id:"isus",last_id:"",question:"I just got into the car, alahu akbar",answers:[{answer:"yes",class:""},{answer:"perhaps",class:""},{answer:"OGK",class:""},{answer:"Vaya con Dios In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual",class:""}],history:[1,1,0],goodAnswer:"yes",answerClicked:!1,hit:0,miss:0,auto_jump:JSON.parse(localStorage.getItem("auto_jump_to_next"))}},methods:{checkAnswer(s,t){if(!this.answerClicked){for(var e in this.answers){var i=this.answers[e];i["answer"]==this.goodAnswer?(i["class"]="good-answer",e==s&&(this.addToHistory(1),i["class"]="good-answer-emphasize",_["a"].commit("incrementHit",this.id))):e!=s?i["class"]="bad-answer":(this.addToHistory(0),i["class"]="bad-answer-emphasize",_["a"].commit("incrementMiss",this.id))}this.auto_jump&&setTimeout(()=>this.next(),1500),this.answerClicked=!0}},addToHistory(s){var t=this.history.length;t<10||this.history.shift(),this.history=[...this.history,s],s?this.hit+=1:this.miss+=1},next(){for(var s in this.answers)this.answers[s]["class"]="";this.answerClicked=!1;var t=["aferat","casuna","idiosincrasie","perimat","BMW","adventisti","Iulius Caesar","naturale","blonde","arrow","turkey","conception","seat","hunter"],e=_["a"].state.allQuestion,i=C(e.length),a=e[i],n=[];if(this.id=a["id"],""==this.last_id)this.last_id=this.id;else{if(this.last_id==this.id)return void this.next();this.last_id=this.id}this.question=a["question"],this.goodAnswer=a["answer"][C(a["answer"].length)],this.answers[0]["answer"]=this.goodAnswer,this.history=a["history"],this.hit=a["hit"],this.miss=a["miss"];var r=this.goodAnswer.substring(0,2).toLowerCase(),o=new Set(this.goodAnswer);function c(s,t){for(var e of s)if(!t.has(e))return!1;return!0}for(var s in _["a"].state.allBadAnswers){var h=_["a"].state.allBadAnswers;h[s].toLowerCase().startsWith(r,0)&&(n.includes(h[s])||h[s]==this.goodAnswer||n.push(h[s]));var d=new Set(h[s].toLowerCase()),l=0;l=d.size>o.size?d.size/o.size:o.size/d.size;var u=!1;l<1.3&&(u=d.size>o.size?c(o,d):c(d,o)),u&&(n.includes(h[s])||this.goodAnswer==h[s]||n.push(h[s]))}if(n.length<3)while(n.length<5){var b=C(t.length);b=t[b],n.includes(b)||b==this.goodAnswer||n.push(b)}var w=[this.goodAnswer,...a["badAnswers"]];while(w.length<4){var j=C(n.length);j=n[j],w.includes(j)||w.push(j)}for(var s in x(w),[0,1,2,3])this.answers[s]["answer"]=w[s]}},created(){_["a"].state.allQuestion.length?this.next():this.question="",x(this.answers)},computed:{getTries(){var s=this.miss+this.hit;if(1==s){var t=s+" try";return t}t=s+" tries";return t},getHitRate(){var s=this.hit+this.miss;return 0==s?0:Math.floor(this.hit/s*100)}}};e("98f0");q.render=A,q.__scopeId="data-v-0f98e892";t["default"]=q},"98f0":function(s,t,e){"use strict";e("c5de")},c5de:function(s,t,e){}}]);
//# sourceMappingURL=about.639320e0.js.map