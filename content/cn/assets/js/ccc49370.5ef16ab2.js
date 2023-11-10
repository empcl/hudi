/*! For license information please see ccc49370.5ef16ab2.js.LICENSE.txt */
(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[46103],{39360:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(41217),s=a(76200),r=a(42544),i=a(95999),o=a(39960);const m=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(o.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(o.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(53810),g=a(51575);const d=function(e){const{content:t,sidebar:a}=e,{frontMatter:i,assets:o,metadata:d}=t,{title:p,description:u,nextItem:b,prevItem:h,date:v,tags:E,authors:P}=d,{hide_table_of_contents:_,keywords:N,toc_min_heading_level:f,toc_max_heading_level:k}=i,T=o.image??i.image;return l.createElement(s.Z,{wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogPostPage,sidebar:a,toc:!_&&t.toc&&t.toc.length>0?l.createElement(g.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:k}):void 0},l.createElement(n.Z,{title:p,description:u,keywords:N,image:T},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:v}),P.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:P.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),l.createElement(r.Z,{frontMatter:i,assets:o,metadata:d,isBlogPostPage:!0},l.createElement(t,null)),(b||h)&&l.createElement(m,{nextItem:b,prevItem:h}))}},86753:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(67294),n=a(95999),s=a(87462),r=a(86010);const i="iconEdit_mS5F";const o=function(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(i,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var m=a(53810);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},51575:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var l=a(87462),n=a(67294),s=a(86010),r=a(25002);const i="tableOfContents_vrFS";const o=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,s.Z)(i,"thin-scrollbar",t)},n.createElement(r.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var l=a(87462),n=a(67294),s=a(53810);function r(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:c,...g}=e;const d=(0,s.LU)(),p=m??d.tableOfContents.minHeadingLevel,u=c??d.tableOfContents.maxHeadingLevel,b=(0,s.DA)({toc:t,minHeadingLevel:p,maxHeadingLevel:u}),h=(0,n.useMemo)((()=>{if(i&&o)return{linkClassName:i,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:u}}),[i,o,p,u]);return(0,s.Si)(h),n.createElement(r,(0,l.Z)({toc:b,className:a,linkClassName:i},g))}},7774:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var l=a(67294),n=a(86010),s=a(39960);const r="tag_WK-t",i="tagRegular_LXbV",o="tagWithCount_S5Zl";const m=function(e){const{permalink:t,name:a,count:m}=e;return l.createElement(s.Z,{href:t,className:(0,n.Z)(r,{[i]:!m,[o]:m})},a,m&&l.createElement("span",null,m))}},59477:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var l=a(67294),n=a(39960);const s=e=>{let{authors:t=[],className:a,withLink:s=!0}=e;const r=e=>l.createElement("span",{className:a,itemProp:"name"},e.name);return l.createElement(l.Fragment,null,t.map(((e,a)=>l.createElement("div",{key:a},l.createElement("div",null,e.name&&l.createElement("div",null,0!==a?a!==t.length-1?",":"and":"",s?l.createElement(n.Z,{href:e.url,itemProp:"url"},r(e)):r(e)))))))}},76200:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(67294),n=a(86010),s=a(77498),r=a(39960);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(95999);function m(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}const c=function(e){const{sidebar:t,toc:a,children:r,...i}=e,o=t&&t.items.length>0,c="blog-list-page"===e.pageClassName,g="blog-tags-post-list-page"===e.pageClassName;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-2":!o,row:c||g,"tags-post-list":g}),itemScope:!0,itemType:"http://schema.org/Blog"},r),a&&l.createElement("div",{className:"col col--2"},a))))}},42544:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var l=a(67294),n=a(86010),s=a(3905),r=a(95999),i=a(39960),o=a(44996),m=a(53810),c=a(67707),g=a(86753);const d={blogPostTitle:"blogPostTitle_RC3s",videoImage:"videoImage_nxqj",blogPostPageTitle:"blogPostPageTitle_bKZt",blogPostPageTile:"blogPostPageTile_BsLs",blogPostData:"blogPostData_A2Le",blogpostReadingTime:"blogpostReadingTime_Mwxf",tagsWrapperPostPage:"tagsWrapperPostPage_VdId",blogPostDetailsFull:"blogPostDetailsFull_2lop","blog-list-page":"blog-list-page_Jl5M",container:"container_EXwA",row:"row_DZ33",authorsList:"authorsList_svFt",authorsListLong:"authorsListLong_kl47",authorTimeTags:"authorTimeTags_oN88",tag:"tag_MgfY",tagPostPage:"tagPostPage_gnvv",postHeader:"postHeader_Ipb1",greyLink:"greyLink_9KrM",blogPostText:"blogPostText_jBA8",blogInfo:"blogInfo_1FPd",blogPostAuthorsList:"blogPostAuthorsList_dlEG"};var p=a(7774),u=a(59477),b=a(16550),h=a(94184),v=a.n(h);const E=function(e){const t=function(){const{selectMessage:e}=(0,m.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),a=(0,b.TH)(),{withBaseUrl:h}=(0,o.C)(),{children:E,frontMatter:P,assets:_,metadata:N,truncated:f,isBlogPostPage:k=!1}=e,{date:T,formattedDate:Z,permalink:L,tags:I,readingTime:w,title:y,editUrl:C,authors:x}=N,A=_.image??P.image??"/assets/images/hudi-logo-medium.png",H=I.length>0,M=e=>{e&&window.open(e,"_blank","noopener noreferrer")};return l.createElement("article",{className:(0,n.Z)({"blog-list-item":!k}),itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=k?"h1":"h2";return l.createElement("header",{className:d.postHeader},l.createElement("div",null,!k&&A&&l.createElement("div",{className:"col blogThumbnail",itemProp:"blogThumbnail"},a.pathname.startsWith("/blog")?l.createElement(i.Z,{itemProp:"url",to:L},l.createElement("img",{src:h(A,{absolute:!0}),className:"blog-image"})):l.createElement("img",{onClick:()=>M(P?.navigate),src:h(A,{absolute:!0}),className:v()(d.videoImage,"blog-image")})),l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},k?l.createElement(e,{className:d.blogPostPageTitle,itemProp:"headline"},y):a.pathname.startsWith("/blog")?l.createElement(i.Z,{itemProp:"url",to:L},l.createElement(e,{className:d.blogPostTitle,itemProp:"headline"},y)):l.createElement(e,{onClick:()=>M(P?.navigate),className:d.blogPostTitle,itemProp:"headline"},y)),l.createElement("div",{className:(0,n.Z)(d.blogInfo,"margin-top--sm margin-bottom--sm")},0===x.length?l.createElement("div",{className:(0,n.Z)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},Z)):l.createElement(l.Fragment,null,k?l.createElement("div",{className:(0,n.Z)(d.blogPostText,"row")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},Z),l.createElement(u.Z,{authors:x,className:d.blogPostAuthorsList})):l.createElement("div",{className:(0,n.Z)(d.authorTimeTags,"row 'margin-vert--md'")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},Z," by"),l.createElement(u.Z,{authors:x,className:d.authorsList}))),k&&w&&l.createElement("div",{className:(0,n.Z)(d.blogPostData,{[d.blogpostReadingTime]:!k})},l.createElement(l.Fragment,null,void 0!==w&&l.createElement(l.Fragment,null,t(w)))))),!!I.length&&l.createElement(l.Fragment,null,l.createElement("ul",{className:(0,n.Z)(d.tags,d.authorTimeTags,"padding--none","margin-left--sm",{[d.tagsWrapperPostPage]:k})},I.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:(0,n.Z)(d.tag,{[d.tagPostPage]:k})},l.createElement(p.Z,{className:(0,n.Z)(d.greyLink),name:t,permalink:a}))})))))})(),k&&l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(s.Zo,{components:c.Z},E)),(H||f)&&k&&C&&l.createElement("footer0",{className:(0,n.Z)("row docusaurus-mt-lg",{[d.blogPostDetailsFull]:k})},l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.Z,{editUrl:C}))))}},94184:(e,t)=>{var a;!function(){"use strict";var l={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var r=n.apply(null,a);r&&e.push(r)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)l.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()}}]);