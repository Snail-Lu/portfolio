(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){e.exports={todolist_container:"TodoList_todolist_container__8iBoj",title:"TodoList_title__2ut57",todo_item:"TodoList_todo_item__2l-Tw",filter_box:"TodoList_filter_box__6rNxO",current_filter_item:"TodoList_current_filter_item__1PCj0",filter_item:"TodoList_filter_item__3z3Is"}},13:function(e,t,a){e.exports={clock_container:"PointerClock_clock_container__tXDaN",clock_border:"PointerClock_clock_border__AF1uW",clock_mark:"PointerClock_clock_mark__Naj1a",clock_mark_hightlight:"PointerClock_clock_mark_hightlight__3fWJc",clock_num:"PointerClock_clock_num__1tIUg",hour_hand:"PointerClock_hour_hand__1cfC4",minute_hand:"PointerClock_minute_hand__2Rgyk",second_hand:"PointerClock_second_hand__k9gct",normal:"PointerClock_normal__1bZE9",current:"PointerClock_current__13mft",clock_item:"PointerClock_clock_item__1b7ej"}},17:function(e,t,a){e.exports={clock_container:"DigitalClock_clock_container__3eCYB",normal:"DigitalClock_normal__2Z0Zo",current:"DigitalClock_current__3LDYU",clock_item:"DigitalClock_clock_item__2CN0a"}},18:function(e,t,a){e.exports={home:"Home_home__z4TnO",home_content:"Home_home_content__3rXzF"}},26:function(e,t,a){e.exports={demo_detail_container:"DemoDetail_demo_detail_container__2V_e3",container_title:"DemoDetail_container_title__55ypN",left_arrow:"DemoDetail_left_arrow__3zkR4"}},27:function(e,t,a){e.exports={addtodo_box:"AddTodo_addtodo_box__14MxW",input_box:"AddTodo_input_box__2_kP4",submit_button:"AddTodo_submit_button__W5i1x"}},3:function(e,t,a){e.exports={left_nav:"LeftNav_left_nav__2JFG2",left_nav_title:"LeftNav_left_nav_title__xt-Tk",avatar:"LeftNav_avatar__1T3o5",title:"LeftNav_title__cOsmk",left_nav_content:"LeftNav_left_nav_content__1tOyr",nav_item:"LeftNav_nav_item__djBc_",nav_item_selected:"LeftNav_nav_item_selected__2_Xy7",hide_btn:"LeftNav_hide_btn__hzjp7",leftarrowmove:"LeftNav_leftarrowmove__2ZkOm",left_nav_to_hide:"LeftNav_left_nav_to_hide__vzQg1",navhide:"LeftNav_navhide__2CNpc",left_nav_to_show:"LeftNav_left_nav_to_show__1CGNl",navshow:"LeftNav_navshow__ZOPZa",show_btn:"LeftNav_show_btn__dQwyC",rightarrowmove:"LeftNav_rightarrowmove__3kWNo"}},32:function(e,t,a){e.exports={copy_right_container:"CopyRight_copy_right_container__22njE",github_link:"CopyRight_github_link__2otwq"}},33:function(e,t,a){e.exports={title:"App_title__25lnk",app:"App_app__3NpdJ",content:"App_content__37EGB"}},46:function(e,t,a){e.exports=a.p+"static/media/avatar.50a374e0.jpg"},49:function(e,t,a){e.exports=a(77)},5:function(e,t,a){e.exports={demo_list_container:"DemoList_demo_list_container__3hLfF",container_title:"DemoList_container_title__3XTKe",style_demo_item:"DemoList_style_demo_item__2RA-M",date:"DemoList_date__2pDqh",info:"DemoList_info__3B97O",name:"DemoList_name__1amBp",uncompleted:"DemoList_uncompleted__82JYi",completed:"DemoList_completed__3u864",tags_list:"DemoList_tags_list__2b2eh",tags_item:"DemoList_tags_item__3Dozw",desc:"DemoList_desc__3sPDn",btn:"DemoList_btn__2L65U"}},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(19),r=a.n(o),c=(a(54),a(12)),s=a(2),l=a(5),u=a.n(l),m=a(9),d="effect",_="functional";a(45);var p=Object(m.b)((function(e){return{list:e.demoList?e.demoList:[]}}),(function(e){return{getDemoList:function(t){e({type:"REQUEST_DEMO_LIST",demoType:t})}}}))((function(e){var t=e.getDemoList,a=e.list,i=Object(s.f)().routerid;return t("effect"===i?d:_),n.a.createElement("div",{className:u.a.demo_list_container},n.a.createElement("div",{className:u.a.container_title},"effect"===i?"\u7279\u6548\u578bDEMO":"\u529f\u80fd\u578bDEMO"),a.map((function(e,t){return n.a.createElement("div",{className:u.a.style_demo_item,key:e.component},n.a.createElement("div",{className:u.a.date},e.date),n.a.createElement("div",{className:u.a.info},n.a.createElement("h3",{className:u.a.name},n.a.createElement("span",null,e.name),n.a.createElement("span",{className:e.completed?u.a.completed:u.a.uncompleted},e.completed?"\u5df2\u5b8c\u6210":"\u5f00\u53d1\u4e2d")),n.a.createElement("div",{className:u.a.tags_list},e.tags.map((function(e){return n.a.createElement("span",{className:u.a.tags_item,key:e},e)}))),n.a.createElement("div",{className:u.a.desc},e.desc),e.completed?n.a.createElement(c.b,{to:"/".concat(i,"/").concat(e.component)},n.a.createElement("span",{className:u.a.btn},"\u6548\u679c\u5c55\u793a")):n.a.createElement("div",{className:u.a.btn},"\u8fd8\u672a\u5b8c\u6210\uff0c\u656c\u8bf7\u671f\u5f85")))})))})),v=a(26),f=a.n(v),h=a(11),g=a.n(h),E=function(e){var t=e.onClick,a=e.completed,i=e.text,o=e.deleteTodo;return n.a.createElement("li",{className:g.a.todo_item},n.a.createElement("span",{className:g.a.todo_item_content,style:{textDecoration:a?"line-through":"none"},onClick:t},i),n.a.createElement("span",{className:g.a.close_btn,onClick:o},"x"))},b=function(e){var t=e.active,a=e.children,i=e.onClick;return t?n.a.createElement("span",{className:g.a.current_filter_item},a):n.a.createElement("a",{href:"",onClick:function(e){e.preventDefault(),i()},className:g.a.filter_item},a)},S=Object(m.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(b),k=a(27),N=a.n(k),C=function(e){var t,a=e.dispatch;return n.a.createElement("div",{className:N.a.addtodo_box},n.a.createElement("form",{onSubmit:function(e){(e.preventDefault(),t.value.trim())&&(a({type:"ADD_TODO",id:1,text:t.value}),t.value="")}},n.a.createElement("input",{ref:function(e){t=e},className:N.a.input_box,placeholder:"\u8f93\u5165\u5f85\u529e\u4e8b\u9879"}),n.a.createElement("button",{type:"submit",className:N.a.submit_button},"\u6dfb\u52a0")))},D=C=Object(m.b)()(C),L=function(e){var t=e.todos,a=e.onTodoClick,i=e.onDeleteClick;return n.a.createElement("div",{className:g.a.todolist_container},n.a.createElement(D,null),n.a.createElement("div",{className:g.a.filter_box},"\u663e\u793a: ",n.a.createElement(S,{filter:"SHOW_ALL"},"\u5168\u90e8"),", ",n.a.createElement(S,{filter:"SHOW_ACTIVE"},"\u5f85\u5b8c\u6210"),", ",n.a.createElement(S,{filter:"SHOW_COMPLETED"},"\u5df2\u5b8c\u6210")),n.a.createElement("ul",null,t.map((function(e,t){return n.a.createElement(E,Object.assign({key:t},e,{onClick:function(){return a(t)},deleteTodo:function(){return i(t)}}))}))))},x=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}))}},y=Object(m.b)((function(e){return{todos:x(e.todos,e.visibilityFilter)}}),(function(e){return{onTodoClick:function(t){e({type:"TOGGLE_TODO",index:t})},onDeleteClick:function(t){e({type:"DELETE_TODO",index:t})}}}))(L),O=a(21),T=a(22),q=a(25),w=a(24),j=a(17),A=a.n(j),M=function(e){Object(q.a)(a,e);var t=Object(w.a)(a);function a(e){var i;return Object(O.a)(this,a),(i=t.call(this,e)).getCurrentTime=function(){var e=i.state.clockArray,t=new Date,a=t.getHours();a>19&&(e[1]=[0,1,2,3]);var n=(a=a<10?"0"+a:a+"").split(""),o=t.getMinutes(),r=(o=o<10?"0"+o:o+"").split(""),c=t.getSeconds(),s=(c=c<10?"0"+c:c+"").split(""),l=n.concat(r,s);i.setState({h:n,m:r,s:s,currentTime:l,clockArray:e})},i.state={clockArray:[[0,1,2],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5],[0,1,2,3,4,5,6,7,8,9]]},i}return Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.getCurrentTime()}),200)}},{key:"render",value:function(){var e=this.state,t=e.clockArray,a=e.currentTime,i=void 0===a?[]:a;return n.a.createElement("div",{className:A.a.clock_container},t.map((function(e,t){return n.a.createElement("div",{className:A.a.clock_item},n.a.createElement("div",{key:e[0].toString()},e.map((function(e){return n.a.createElement("div",{className:e==i[t]?A.a.current:A.a.normal,key:e},e)}))))})))}}]),a}(i.Component),J=a(23),H=a(13),P=a.n(H),V=function(e){Object(q.a)(a,e);var t=Object(w.a)(a);function a(e){var i;return Object(O.a)(this,a),(i=t.call(this,e)).getCurrentTime=function(){var e=new Date,t=e.getHours();t>11&&(t-=12);var a=e.getMinutes(),n=e.getSeconds();i.setState({hoursDeg:30*t+.5*a,minutesDeg:6*a+.1*n,secondsDeg:6*n})},i}return Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.getCurrentTime()}),200)}},{key:"render",value:function(){var e,t=this.state,a=t.hoursDeg,i=t.minutesDeg,o=t.secondsDeg,r=(e=60,Object(J.a)(new Array(e).keys()));return n.a.createElement("div",{className:P.a.clock_container},n.a.createElement("div",{className:P.a.clock_border},r.map((function(e){return n.a.createElement("div",{style:{transform:"rotate("+6*e+"deg)"},className:"".concat(e%5===0?P.a.clock_mark_hightlight:P.a.clock_mark)},e%5===0?n.a.createElement("span",{className:P.a.clock_num,style:{transform:"rotate("+6*-e+"deg)"}},e/5!=0?e/5:12):null)})),n.a.createElement("div",{style:{transform:"rotate("+a+"deg)"},className:P.a.hour_hand}),n.a.createElement("div",{style:{transform:"rotate("+i+"deg)"},className:P.a.minute_hand}),n.a.createElement("div",{style:{transform:"rotate("+o+"deg)"},className:P.a.second_hand})))}}]),a}(i.Component),I={effect:[{name:"\u52a8\u6001\u6570\u5b57\u65f6\u949f",desc:"\u7b80\u6613\u52a8\u6001\u6570\u5b57\u65f6\u949f\uff0c\u6bcf\u4f4d\u6570\u5b57\u5728\u5176\u5217\u8868\u4e2d\u6eda\u52a8\u53d8\u5316\uff0c\u6837\u5f0f\u8f83\u4e3a\u7b80\u5355\uff0c\u4ee3\u7801\u91cf\u4e0d\u5927",tags:["\u6570\u5b57\u65f6\u949f","CSS-transition","JavaScript"],date:"Apr 18, 2019",component:"digitalclock",completed:!0},{name:"\u52a8\u6001\u6307\u9488\u65f6\u949f",desc:"\u4f7f\u7528css+js\u5b9e\u73b0\u7684\u52a8\u6001\u6307\u9488\u65f6\u949f\uff0c\u6a21\u62df\u5b9e\u7269\u65f6\u949f\u7684\u8fd0\u884c\u6548\u679c",tags:["\u6307\u9488\u65f6\u949f","CSS-transition","JavaScript"],date:"Apr 19, 2019",component:"pointerclock",completed:!0},{name:"3D\u65cb\u8f6c\u8f6e\u64ad",desc:"\u4f7f\u7528css-animation\u5b9e\u73b0\u7684\u52a8\u6001\u6570\u5b57\u65f6\u949f",tags:["CSS","CSS-animation","JavaScript"],date:"May 3, 2019",component:"RotateSwiper",completed:!1},{name:"\u56fe\u7247\u5012\u5f71\u6548\u679c",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 15, 2019",component:"PhotoReflection",completed:!1},{name:"\u6d4b\u8bd5",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 20, 2019",component:"Test1",completed:!1},{name:"\u6d4b\u8bd52",desc:"\u56fe\u7247\u5012\u5f71\u6548\u679c\u793a\u4f8b",tags:["CSS","CSS-animation","JavaScript"],date:"May 20, 2019",component:"Test2",completed:!1}],functional:[{name:"\u5546\u57ce\u5e38\u7528\u4fc3\u9500\u63d2\u4ef6",desc:"\u5546\u57ce\u8425\u9500\u6d3b\u52a8\u7ecf\u5e38\u4f7f\u7528\u7684\u4fc3\u9500\u63d2\u4ef6\uff0c\u76ee\u524d\u5305\u542b\u5927\u8f6c\u76d8\u3001\u7ea2\u5305\u96e8\u3001\u7b7e\u5230\u3001\u4e5d\u5bab\u683c\u3001\u6253\u5730\u9f20\uff0c\u540e\u7eed\u4f1a\u6301\u7eed\u66f4\u65b0...",tags:["CSS","CSS-animation","JavaScript"],date:"Jun 3, 2019",component:"SalesComponent",completed:!1},{name:"\u5b9e\u65f6\u804a\u5929",desc:"\u5728\u7ebf\u5b9e\u65f6\u901a\u8baf\u804a\u5929demo",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"RealTimeChat",completed:!1},{name:"\u4effwindows\u684c\u9762",desc:"windows\u684c\u9762\u6a21\u4eff\uff0c\u5305\u542b\u6709\u6709\u56fe\u6807\u7684\u62d6\u62fd\u3001\u5f39\u7a97\u7b49",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"WindowsDesktop",completed:!1},{name:"\u4eff\u5c0f\u7c73\u8ba1\u7b97\u5668",desc:"\u5c0f\u7c73\u8ba1\u7b97\u5668\u7684\u529f\u80fd\u6a21\u4eff",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"XMCalculator",completed:!1},{name:"\u97f3\u4e50\u64ad\u653e\u5668",desc:"\u4e00\u4e2a\u672c\u5730\u97f3\u4e50\u64ad\u653e\u7684\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u754c\u9762\u6a21\u4eff\u7f51\u6613\u4e91",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"AudioPlayer",completed:!1},{name:"\u89c6\u9891\u64ad\u653e\u5668",desc:"\u4e00\u4e2a\u672c\u5730\u89c6\u9891\u64ad\u653e\u7684\u89c6\u9891\u64ad\u653e\u5668",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"VideoPlayer",completed:!1},{name:"TodoList",desc:"\u5b66\u4e60react-redux\u65f6\u5236\u4f5c\u7684\u4e00\u4e2atodoList Demo",tags:["CSS","CSS-animation","JavaScript"],date:"Jul 3, 2019",component:"todolist",completed:!0}]},W={digitalclock:M,pointerclock:V,todolist:y},R=Object(s.g)((function(e){var t=Object(s.f)(),a=t.routerid,i=t.demo,o={};I[a].forEach((function(e){e.component===i&&(o=e)}));var r=W[i];return n.a.createElement("div",{className:f.a.demo_detail_container},n.a.createElement("div",{className:f.a.container_title},n.a.createElement("span",{onClick:function(){return e.history.goBack()},className:f.a.left_arrow}),n.a.createElement("span",null,o.name)),n.a.createElement(r,null))})),z=a(18),B=a.n(z),Q=function(){return n.a.createElement("div",{className:B.a.home},n.a.createElement("div",{className:B.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:B.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."),n.a.createElement("div",{className:B.a.home_content},"Lorem ipsum dolor sit amet, eum dolorem omnesque in, vim inani malorum honestatis eu. Tincidunt reprimique ius id, vim accusata indoctum cu, ludus melius assueverit duo ei. Mei tation graeco principes an, cu atqui nominati maluisset eos. Mel atqui detraxit ne. Vix in noluisse petentium, no mea eripuit principes, vero luptatum sententiae est id. Prompta repudiare adipiscing ea mel, nec integre periculis no. His at veri ludus eloquentiam, eam te appetere imperdiet neglegentur, usu in convenire repudiandae. His an minimum vivendum, cu vix dicam libris integre. Novum essent no nec, vis magna copiosae gloriatur ut. Sapientem moderatius complectitur te sea, te eos expetenda qualisque euripidis, sea ut malorum convenire. Cum id paulo probatus persecuti, an sea quem posse. Cu vix audire aperiri detracto, nominavi contentiones his id. At cum vidisse probatus. Vis ex viderer argumentum, vix te assentior interesset, odio nostrud sanctus pro id. Vel ei posidonium vituperatoribus, inermis omittam sea eu, odio ullamcorper et vel. Eos integre insolens id, sea ad nulla minimum deterruisset. Mel sumo aperiri no, per sale nobis salutatus ut, te persequeris disputationi sit. Qui ad cibo ornatus albucius, sea no feugait civibus convenire, alii idque oporteat sea an. Vitae molestiae hendrerit ut est. Sed mediocrem petentium salutandi in. An cum appetere philosophia delicatissimi, falli recteque tincidunt id vis. Hinc causae nominati mei no, ut quas voluptatum qui. Duo munere equidem euripidis at, postulant voluptatibus duo et. Quo in zril aliquid."))},F=a(3),G=a.n(F),Z=a(46),U=a.n(Z),X=Object(m.b)((function(e){return{show:e.showNav}}),(function(e){return{switchClick:function(t){e(function(e){return{type:e}}(t))}}}))((function(e){var t=e.show,a=e.switchClick;return t?n.a.createElement("div",{className:"".concat(G.a.left_nav," ").concat(G.a.left_nav_to_show)},n.a.createElement("div",{className:G.a.left_nav_title},n.a.createElement("img",{src:U.a,className:G.a.avatar}),n.a.createElement("div",{className:G.a.title},"\u4f5c\u54c1\u96c6")),n.a.createElement("div",{className:G.a.left_nav_content},n.a.createElement(c.b,{to:"/",exact:!0,activeClassName:G.a.nav_item_selected},n.a.createElement("div",{className:G.a.nav_item},"\u9996\u9875")),n.a.createElement(c.b,{to:"/effect",activeClassName:G.a.nav_item_selected},n.a.createElement("div",{className:G.a.nav_item},"\u7279\u6548\u578b")),n.a.createElement(c.b,{to:"/functional",activeClassName:G.a.nav_item_selected},n.a.createElement("div",{className:G.a.nav_item},"\u529f\u80fd\u578b"))),n.a.createElement("div",{className:G.a.hide_btn,onClick:function(){return a("HIDE_NAV")}},"\xab")):n.a.createElement("div",{className:G.a.show_btn,onClick:function(){return a("SHOW_NAV")}},"\xbb")})),Y=a(32),K=a.n(Y),$=function(){return n.a.createElement("div",{className:K.a.copy_right_container},"CopyRight \xa9 2020 ",n.a.createElement("a",{href:"https://github.com/Snail-Lu/react-project-template",className:K.a.github_link},"Snail-Lu"))},ee=a(33),te=a.n(ee),ae=function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:te.a.app},n.a.createElement(X,null),n.a.createElement("div",{className:te.a.content},n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/:routerid",exact:!0},n.a.createElement(p,null)),n.a.createElement(s.a,{path:"/:routerid/:demo",exact:!0},n.a.createElement(R,null)),n.a.createElement(s.a,{path:"/",exact:!0},n.a.createElement(Q,null))),n.a.createElement($,null))))},ie=a(14);var ne=Object(ie.combineReducers)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(J.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e,a){return a===t.index?Object.assign({},e,{completed:!e.completed}):e}));case"DELETE_TODO":return e.filter((function(e,a){return a!==t.index}));default:return e}},demoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DEMO_LIST":return I[t.demoType];default:return e}},showNav:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_NAV":return!0;case"HIDE_NAV":return!1;default:return e}}}),oe=a(47),re=a(48),ce=[oe.a],se=Object(re.composeWithDevTools)({}),le=Object(ie.createStore)(ne,se(ie.applyMiddleware.apply(void 0,ce)));r.a.render(n.a.createElement(m.a,{store:le},n.a.createElement(ae,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c78f6197.chunk.js.map