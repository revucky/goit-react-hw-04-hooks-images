(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItemImage_ImageGalleryItem__Hyfri","ImageGalleryItem-image":"ImageGalleryItemImage_ImageGalleryItem-image__3nn3B"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},17:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),s=a(10),i=a.n(s),u=a(14),l=a(15),m=a(3),b=a(4),j=a.n(b),h=a(8),p=a(1),f=function(e){var t=e.submit,a=Object(n.useState)(""),c=Object(m.a)(a,2),r=c[0],o=c[1];return Object(p.jsx)("header",{className:j.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(t(r),o("")):h.b.error("Type what you want see")},className:j.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(p.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(p.jsx)("input",{className:j.a.SearchFormInput,type:"text",value:r,onChange:function(e){return o(e.target.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},d=a(11),O=a.n(d),g=function(e){var t=e.src,a=e.id,n=e.openModal,c=e.openLarge,r=e.srcLarge;return Object(p.jsx)("li",{id:a,className:O.a.ImageGalleryItem,children:Object(p.jsx)("img",{className:O.a.ImageGalleryItemImage,onClick:function(){n(),c(r)},src:t,alt:""})})},x=a(16),_=a.n(x),S=function(e){var t=e.img,a=e.modalO,n=e.largeUrl;return Object(p.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,c=e.id,r=e.largeImageURL;return Object(p.jsx)(g,{openLarge:n,openModal:a,src:t,srcLarge:r},c)}))})},y=a(17),I=a.n(y),v=function(e){var t=e.onClick;return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:t,type:"button",className:I.a.Button,children:"Load more..."})})},k=a(12),w=a.n(k),F=function(e){var t=e.onClick,a=e.backDrop,c=e.src;return Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]),Object(p.jsx)("div",{className:w.a.Overlay,onClick:a,children:Object(p.jsx)("div",{className:w.a.Modal,children:Object(p.jsx)("img",{src:c,alt:""})})})},B=a(13),L=a.n(B),G=(a(44),a(45),a(46),"24480734-3d80cd0fb88d3e4535c800802"),N="https://pixabay.com/api/",C=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),s=o[0],b=o[1],j=Object(n.useState)(1),d=Object(m.a)(j,2),O=d[0],g=d[1],x=Object(n.useState)(!1),_=Object(m.a)(x,2),y=_[0],I=_[1],k=Object(n.useState)(""),w=Object(m.a)(k,2),B=w[0],C=w[1],M=Object(n.useState)(!1),E=Object(m.a)(M,2),D=E[0],T=E[1];function U(){return(U=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"?key=").concat(G,"&q=").concat(a,"&page=").concat(O,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){T(!0),function(){return U.apply(this,arguments)}().then((function(e){return e.json()})).then((function(e){return b(1===O?e.hits:[].concat(Object(u.a)(s),Object(u.a)(e.hits)))})).finally((function(){T(!1)}))}),[a,O]);var J=function(e){I(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{submit:function(e){c(e),b([])}}),D&&Object(p.jsx)(L.a,{className:"App-header",type:"ThreeDots",color:"#3f51b5",height:80,width:80,timeout:1500}),s.length>0&&Object(p.jsx)(S,{largeUrl:function(e){C(e)},modalO:function(){I(!y)},img:s}),s.length>0&&Object(p.jsx)(v,{onClick:function(){g(O+1)}}),D&&1!==O&&Object(p.jsx)(L.a,{}),y&&Object(p.jsx)(F,{src:B,handleEscape:function(e){"Escape"===e.code&&J()},onClick:J,backDrop:function(e){e.target===e.currentTarget&&J()}}),Object(p.jsx)(h.a,{position:"top-center",autoClose:3e3})]})};a(47);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ab188aae.chunk.js.map