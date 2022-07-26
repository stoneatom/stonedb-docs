"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9377],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"mdl-wait",sidebar_position:9.3},c="Metadata Lock Waits",l={unversionedId:"troubleshooting/mdl-wait",id:"troubleshooting/mdl-wait",title:"Metadata Lock Waits",description:"Although StoneDB does not support transactions, metadata locks for which you apply are not released if transactions are enabled and the transactions are not submitted or rolled back in time. In this case, if another thread executes a DDL operation on this table, a thread congestion will occur and then any threads perform queries or updates on this table are congested. This is because the write lock applied for by the DDL operation conflicts with the read lock. You need to locate and terminate the thread that causes the congestion in time. Otherwise, the maximum number of connections will be reached in a short period of time.",source:"@site/../Docs/08-troubleshooting/mdl-wait.md",sourceDirName:"08-troubleshooting",slug:"/troubleshooting/mdl-wait",permalink:"/docs/troubleshooting/mdl-wait",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/08-troubleshooting/mdl-wait.md",tags:[],version:"current",lastUpdatedBy:"Shlpeng",lastUpdatedAt:1658843760,formattedLastUpdatedAt:"7/26/2022",sidebarPosition:9.3,frontMatter:{id:"mdl-wait",sidebar_position:9.3},sidebar:"autoSidebar",previous:{title:"Excessively Large Data Directory",permalink:"/docs/troubleshooting/excessive-large-directory"},next:{title:"StoneDB Crashed",permalink:"/docs/troubleshooting/stonedb-crashed"}},d={},u=[],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-lock-waits"},"Metadata Lock Waits"),(0,r.kt)("p",null,"Although StoneDB does not support transactions, metadata locks for which you apply are not released if transactions are enabled and the transactions are not submitted or rolled back in time. In this case, if another thread executes a DDL operation on this table, a thread congestion will occur and then any threads perform queries or updates on this table are congested. This is because the write lock applied for by the DDL operation conflicts with the read lock. You need to locate and terminate the thread that causes the congestion in time. Otherwise, the maximum number of connections will be reached in a short period of time."),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"performance_schema")," is enabled, you can execute the following statement to locate the thread that causes the congestion."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select locked_schema,\nlocked_table,\nlocked_type,\nwaiting_processlist_id,\nwaiting_age,\nwaiting_query,\nwaiting_state,\nblocking_processlist_id,\nblocking_age,\nsubstring_index(sql_text, \"transaction_begin;\", -1) AS blocking_query,\nsql_kill_blocking_connection\nfrom (select b.owner_thread_id as granted_thread_id,\n      a.object_schema as locked_schema,\n      a.object_name as locked_table,\n      \"Metadata Lock\" AS locked_type,\n      c.processlist_id as waiting_processlist_id,\n      c.processlist_time as waiting_age,\n      c.processlist_info as waiting_query,\n      c.processlist_state as waiting_state,\n      d.processlist_id as blocking_processlist_id,\n      d.processlist_time as blocking_age,\n      d.processlist_info as blocking_query,\n      concat('kill ', d.processlist_id) as sql_kill_blocking_connection\n      from performance_schema.metadata_locks a\n      join performance_schema.metadata_locks b\n      on a.object_schema = b.object_schema\n      and a.object_name = b.object_name\n      and a.lock_status = 'PENDING'\n      and b.lock_status = 'GRANTED'\n      and a.owner_thread_id <> b.owner_thread_id\n      and a.lock_type = 'EXCLUSIVE'\n      join performance_schema.threads c\n      on a.owner_thread_id = c.thread_id\n      join performance_schema.threads d\n      on b.owner_thread_id = d.thread_id) t1,\n      (select thread_id,\n       group_concat(case\n                    when event_name = 'statement/sql/begin' then\n                    \"transaction_begin\"\n                    else\n                    sql_text\n                    end order by event_id separator \";\") as sql_text\n       from performance_schema.events_statements_history\n       group by thread_id) t2\n where t1.granted_thread_id = t2.thread_id;\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("strong",{parentName:"p"},"performance_schema")," is disabled, execute the following statement to locate the thread."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select * from sys.schema_table_lock_waits where blocking_lock_type <> 'SHARED_UPGRADABLE'\\G\n")))}h.isMDXComponent=!0}}]);