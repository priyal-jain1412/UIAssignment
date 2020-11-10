var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/buttons/docs.mdx.js"]=function(e){function t(t){for(var s,o,c=t[0],i=t[1],r=t[2],d=0,b=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(u&&u(t);b.length;)b.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],s=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(s=!1)}s&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={13:0},l=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var r=0;r<c.length;r++)t(c[r]);var u=i;return l.push([253,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},253:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return L})),n.d(t,"getContents",(function(){return C}));var s=n(0),a=n.n(s),l=n(4),o=n(1),c=(n(23),n(14)),i=n(56),r=n(13),u=n(10),d=a.a.createElement(r.a,{isNeutral:!0},a.a.createElement(u.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"download"}),"Button Neutral"),b=(r.a,u.a,[{id:"with-icon-right",label:"With right icon",element:a.a.createElement(r.a,{isNeutral:!0},"Button Neutral",a.a.createElement(u.a,{className:"slds-button__icon slds-button__icon_right",sprite:"utility",symbol:"download"}))}]),h=n(78),m=n(3),p=n.n(m),f=n(5),g=n.n(f),v=function(e){return a.a.createElement("span",{className:"slds-text-not-pressed"},a.a.createElement(u.a,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"add"}),e.children)};v.propTypes={children:p.a.string.isRequired};var O=function(e){return a.a.createElement("span",{className:"slds-text-pressed"},a.a.createElement(u.a,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"check"}),e.children)};O.propTypes={children:p.a.string.isRequired};var j=function(e){var t=e.isDisabled,n=e.isPressed;return a.a.createElement(r.a,{isNeutral:!0,className:g()("slds-button_dual-stateful",{"slds-is-pressed":n}),disabled:t,"aria-live":"assertive"},a.a.createElement(v,null,"Follow"),a.a.createElement(O,null,"Following"))};j.propTypes={isDisabled:p.a.bool,isPressed:p.a.bool};var y=a.a.createElement(j,null,a.a.createElement(v,null,"Follow"),a.a.createElement(O,null,"Following")),w=[{id:"pressed",label:"pressed",element:a.a.createElement(j,{isPressed:!0},a.a.createElement(v,null,"Follow"),a.a.createElement(O,null,"Following"))}],E=n(2),_=n(37),k=l.c.a,S=l.c.code,T=l.c.em,x=l.c.h2,B=l.c.h3,D=l.c.li,N=l.c.p,F=l.c.strong,I=l.c.ul,L=function(){return Object(s.createElement)(l.b,{},Object(s.createElement)("div",{className:"doc lead"},"Buttons are clickable items used to perform an action."),Object(s.createElement)(o.a,null,Object(s.createElement)(a.a.Fragment,null,r.b,Object(E.e)(r.c,"neutral"),Object(E.e)(r.c,"brand"),Object(E.e)(r.c,"outline-brand"),Object(E.e)(r.c,"destructive"),Object(E.e)(r.c,"text-destructive"),Object(E.e)(r.c,"success"))),x({id:"About-Buttons"},"About Buttons"),N({},"Buttons should be used in situations where users might need to:"),I({},D({},"submit a form"),D({},"begin a new task"),D({},"trigger a new UI element to appear on the page"),D({},"specify a new or next step in a process")),B({id:"Button-vs.-Link"},"Button vs. Link"),N({},"The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:"),I({},D({},"Use a ",F({},"link")," when you’re ",F({},"navigating to another place"),', such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.'),D({},"Use ",F({},"buttons")," when you are ",F({},"performing an action"),', such as: "submit," "merge," "create new," "upload," etc.'),D({},"An action is almost ",F({},"always")," on the same page")),B({id:"Accessibility"},"Accessibility"),N({},'If pressing a Button results in a new URL, or the resultant UI makes sense as "a new browser tab", that is a link ',S({},"<a>"),". Everything else is a ",S({},"<button>"),"."),N({},"The distinction is important to screen reader users to know what's going to happen next. Will I navigate somewhere or will something happen on the page? So it's important to choose the right HTML element for the job."),N({},"If you absolutely cannot use a ",S({},"<button />")," element for an action and instead need to use an ",S({},"<a />"),", you are required to do 2 things:"),I({},D({},"Add ",S({},'role="button"')," attribute to the ",S({},"<a />")," to make the element announce itself as a ",S({},"button")," element."),D({},"Add a JavaScript event handler for when the user presses the space key. This is because a ",S({},"button")," element will respond by default to both the enter and space keys being pressed, but an ",S({},"<a />")," element will not.")),N({},"Finally, color alone does not suffice when conveying the meaning of buttons. Ensure that the text you use in the button matches the meaning you are trying to convey via color. For example, if you use the destructive button to point out a potential warning, make sure the text communicates the same message."),Object(s.createElement)(o.a,null,Object(s.createElement)(a.a.Fragment,null,Object(E.e)(r.c,"base-link"),Object(E.e)(r.c,"neutral-link"),Object(E.e)(r.c,"brand-link"),Object(E.e)(r.c,"outline-brand-link"),Object(E.e)(r.c,"destructive-link"),Object(E.e)(r.c,"text-destructive-link"),Object(E.e)(r.c,"success-link"))),B({id:"Links-that-look-like-Buttons"},"Links that look like Buttons"),N({},'Use these with caution - dictation software users may not be able to properly identify these actions, as they can say "show buttons" and these won\'t highlight since they are semantically links, even though they may look like buttons.'),B({id:"Mobile"},"Mobile"),Object(s.createElement)(_.a,{patternSpecificText:"buttons will have an increased size to accommodate tapping with a finger instead of the more precise mouse cursor"}),Object(s.createElement)(o.a,{frameOnly:!0},Object(s.createElement)(a.a.Fragment,null,Object(E.e)(r.c,"base-link"),Object(E.e)(r.c,"neutral-link"),Object(E.e)(r.c,"brand-link"),Object(E.e)(r.c,"outline-brand-link"),Object(E.e)(r.c,"destructive-link"),Object(E.e)(r.c,"text-destructive-link"),Object(E.e)(r.c,"success-link"))),x({id:"Base"},"Base"),N({},"The base ",S({},"slds-button")," looks like a plain text link. It removes all the styling of the native button."),N({},"The base and neutral buttons are used most frequently and can be used multiple times per feature. Use these buttons when the actions are of secondary importance to the content surrounding it, such as in the actions ribbon in a page header."),Object(s.createElement)(o.a,{toggleCode:!1},r.b),x({id:"Variations"},"Variations"),B({id:"Neutral"},"Neutral"),N({},"Add the ",S({},"slds-button_neutral")," class to create a neutral button."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"neutral")),B({id:"Brand"},"Brand"),N({},"To create the brand button, add the ",S({},"slds-button_brand")," class to the ",S({},"slds-button")," class. The brand color tokens can be overridden for theme specific usage."),N({},"The Brand button generally should only be used once per component screen at any one time. It is used for when there is an action that is clearly more important than the other actions and you need to draw attention to it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action."),N({},"Not all features need to have primary actions, sometimes the actions are secondary to the content and are all of equal importance."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"brand")),B({id:"Outline-Brand"},"Outline Brand"),N({},"To create the outline brand button, add the ",S({},"slds-button_outline-brand")," class to the ",S({},"slds-button")," class. The brand color tokens can be overridden for theme specific usage."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"outline-brand")),B({id:"Inverse"},"Inverse"),N({},"Use the inverse button on dark backgrounds. Add the ",S({},"slds-button_inverse")," class to the ",S({},"slds-button")," class."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"inverse")),B({id:"Destructive"},"Destructive"),N({},"To create the destructive button, add the ",S({},"slds-button_destructive")," class to the ",S({},"slds-button")," class."),N({},"This button is used to indicate a destructive action to the user, like permanently erasing data."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"destructive")),B({id:"Text-Destructive"},"Text Destructive"),N({},"To create the text destructive button, add the ",S({},"slds-button_text-destructive")," class to the ",S({},"slds-button")," class."),N({},"This button is used to indicate a destructive action to the user, like permanently erasing data. Use this version when the ",k({href:"#Destructive"},"Destructive")," button would be too distracting to the experience."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"text-destructive")),B({id:"Success"},"Success"),N({},"To create the success button, add the ",S({},"slds-button_success")," class to the ",S({},"slds-button")," class."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"success")),x({id:"Disabled"},"Disabled"),N({},"Use a disabled attribute when a button can’t be clicked. To create a disabled button, append the ",S({},"disabled")," attribute to the button."),Object(s.createElement)(o.a,null,Object(s.createElement)(a.a.Fragment,null,Object(E.e)(r.d,"disabled"),Object(E.e)(r.d,"neutral-disabled"),Object(E.e)(r.d,"brand-disabled"),Object(E.e)(r.d,"outline-brand-disabled"),Object(E.e)(r.d,"destructive-disabled"),Object(E.e)(r.d,"text-destructive-disabled"),Object(E.e)(r.d,"success-disabled"))),x({id:"With-Icons"},"With Icons"),N({},"The SVG, element, or icon inside the button receives the ",S({},"slds-button__icon")," class. You can position the icon on the left or the right using ",S({},"slds-button__icon_left")," or ",S({},"slds-button__icon_right"),", which applies the correct amount of space between the icon and the text."),B({id:"Left-Icon"},"Left Icon"),Object(s.createElement)(o.a,null,d),Object(s.createElement)(_.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"button icons"}),Object(s.createElement)(o.a,{frameOnly:!0},d),B({id:"Right-Icon"},"Right Icon"),Object(s.createElement)(o.a,null,Object(E.e)(b,"with-icon-right")),x({id:"Stateful"},"Stateful"),N({},"Stateful buttons have three states: not selected (default), selected and focused, and selected with hover state."),N({},"The stateful button requires the ",S({},"slds-button_stateful")," class and the ",S({},"slds-button_neutral")," class in addition to the ",S({},"slds-button")," class. Stateful buttons are only used with the neutral variation."),N({},"The button contains three spans with classes that hide or show the content of the spans based on the class on the button. Each span contains text and a corresponding icon. The SVG will have the ",S({},"slds-button__icon_left")," class setting the icon on the left."),Object(s.createElement)(c.a,{type:"a11y",header:"Accessibility Requirement"},Object(s.createElement)("p",null,"Be sure to include the attribute ",Object(s.createElement)("code",null,'aria-live="assertive"')," on the button. The ",Object(s.createElement)("code",null,'aria-live="assertive"')," attribute means the value of the ",Object(s.createElement)("code",null,"<span>")," inside the button will be spoken whenever it changes.")),Object(s.createElement)(c.a,{type:"note",header:"JavaScript Requirement"},Object(s.createElement)("p",null,"When the user clicks the button, use JavaScript to toggle the class from"," ",Object(s.createElement)("code",null,"slds-not-selected")," to ",Object(s.createElement)("code",null,"slds-is-selected-clicked"),". As soon as focus leaves the button, use JavaScript to toggle the class from"," ",Object(s.createElement)("code",null,"slds-is-selected-clicked")," to ",Object(s.createElement)("code",null,"slds-is-selected"),".")),B({id:"Not-Selected"},"Not Selected"),N({},"Stateful button uses the class ",S({},"slds-not-selected")," in its initial state."),Object(s.createElement)(o.a,null,h.b),B({id:"Selected-and-Focused"},"Selected and Focused"),N({},"When selected and still focused, stateful button uses the class ",S({},"slds-is-selected-clicked"),"."),Object(s.createElement)(o.a,null,Object(E.e)(h.c,"selected-clicked")),B({id:"Selected-with-Hover-State"},"Selected with Hover State"),N({},"Once selected and blurred (user moved focus away from the button), stateful button uses the class ",S({},"slds-is-selected"),"."),Object(s.createElement)(o.a,null,Object(E.e)(h.c,"selected")),x({id:"Dual-Stateful-Button"},"Dual Stateful Button"),N({},"Dual Stateful buttons have two states, similar to a ",k({href:"/accessibility/patterns/togglebutton/#site-main-content"},"Toggle Button"),": not pressed (default), and pressed."),N({},"The Dual Stateful button requires the ",S({},"slds-button_dual-stateful")," class, along with a combination of the ",S({},"slds-button")," and ",S({},"slds-button_neutral")," classes. While Dual Stateful buttons are only used with the neutral Button variation, the pressed state changes the button ",T({},"style")," to that of the Brand variation."),N({},"The button contains two spans. Each span contains display text and a corresponding SVG icon with the class ",S({},"slds-button__icon-left")," and has classes that hide or show the contents. By default, the first span with the class ",S({},"slds-text-is-not-pressed")," is displayed; when the class ",S({},"slds-is-pressed")," is applied to the parent button, the span with the class ",S({},"slds-text-is-pressed")," is displayed."),Object(s.createElement)(c.a,{type:"a11y",header:"Accessibility Requirement"},Object(s.createElement)("p",null,"Be sure to include the attribute ",Object(s.createElement)("code",null,'aria-live="assertive"')," on the button. The ",Object(s.createElement)("code",null,'aria-live="assertive"')," attribute means the value of the ",Object(s.createElement)("code",null,"<span>")," inside the button will be spoken whenever it changes.")),Object(s.createElement)(c.a,{type:"note",header:"JavaScript Requirement"},Object(s.createElement)("p",null,"When the user clicks the button, use JavaScript to toggle the"," ",Object(s.createElement)("code",null,"slds-is-pressed")," class on or off, depending on the previous state. Remember, only the pressed state requires this class.")),B({id:"Not-Pressed"},"Not Pressed"),Object(s.createElement)(o.a,null,y),B({id:"Pressed"},"Pressed"),N({},"To display the pressed state, use the class ",S({},"slds-is-pressed")," on the ",S({},"<button>")," element."),Object(s.createElement)(o.a,null,Object(E.e)(w,"pressed")),x({id:"Sizing"},"Sizing"),B({id:"Stretch"},"Stretch"),N({},"To allow the button's width to take up the entire width available, apply the ",S({},"slds-button_stretch")," class to the button."),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"stretch")),B({id:"Full-Width"},"Full Width"),N({},"Creates a full width button with styling resets"),Object(s.createElement)(o.a,{toggleCode:!1},Object(E.e)(r.c,"full-width")),x({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(s.createElement)(i.a,{name:"buttons",type:"component"}))},C=function(){return Object(l.a)(L())}}});