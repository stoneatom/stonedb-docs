"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[1885],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77354:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={id:"prometheus+grafana-monitor",sidebar_position:4.21},p="Prometheus+Grafana\u642d\u5efaMySQL/StoneDB\u76d1\u63a7\u5e73\u53f0",i={unversionedId:"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",id:"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",title:"Prometheus+Grafana\u642d\u5efaMySQL/StoneDB\u76d1\u63a7\u5e73\u53f0",description:"Prometheus\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/00-monitoring-and-alerting/prometheus+grafana-monitor.md",sourceDirName:"03-O&M-Guide/00-monitoring-and-alerting",slug:"/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",permalink:"/zh/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/website/i18n/zh/docusaurus-plugin-content-docs/current/03-O&M-Guide/00-monitoring-and-alerting/prometheus+grafana-monitor.md",tags:[],version:"current",lastUpdatedBy:"Shlpeng",lastUpdatedAt:1658843760,formattedLastUpdatedAt:"2022/7/26",sidebarPosition:4.21,frontMatter:{id:"prometheus+grafana-monitor",sidebar_position:4.21},sidebar:"autoSidebar",previous:{title:"\u5e38\u89c4\u53d8\u66f4",permalink:"/zh/docs/O&M-Guide/regular-change-operations"},next:{title:"\u4f7f\u7528mysqldump\u5907\u4efd\u6062\u590dStoneDB",permalink:"/zh/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore"}},u={},d=[{value:"Prometheus\u4ecb\u7ecd",id:"prometheus\u4ecb\u7ecd",level:2},{value:"\u90e8\u7f72\u73af\u5883",id:"\u90e8\u7f72\u73af\u5883",level:2},{value:"\u4e3a\u4f55\u8981\u6302\u8f7d\u6570\u636e\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6\uff1f",id:"\u4e3a\u4f55\u8981\u6302\u8f7d\u6570\u636e\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u7b2c\u4e00\u6b65\uff1a\u90e8\u7f72Prometheus",id:"\u7b2c\u4e00\u6b65\u90e8\u7f72prometheus",level:2},{value:"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72exporter",id:"\u7b2c\u4e8c\u6b65\u90e8\u7f72exporter",level:2},{value:"\u90e8\u7f72node_exporter",id:"\u90e8\u7f72node_exporter",level:3},{value:"\u90e8\u7f72mysqld_exporter",id:"\u90e8\u7f72mysqld_exporter",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u914d\u7f6ePrometheus\u76d1\u542cmysqld_exporter\u548cnode_exporter",id:"\u7b2c\u4e09\u6b65\u914d\u7f6eprometheus\u76d1\u542cmysqld_exporter\u548cnode_exporter",level:2},{value:"\u7b2c\u56db\u6b65\uff1a\u90e8\u7f72Grafana",id:"\u7b2c\u56db\u6b65\u90e8\u7f72grafana",level:2},{value:"Docker \u90e8\u7f72",id:"docker-\u90e8\u7f72",level:3},{value:"\u7b2c\u4e94\u6b65\uff1a\u914d\u7f6eGrafana\u5c55\u793aPrometheus\u76d1\u63a7\u6570\u636e",id:"\u7b2c\u4e94\u6b65\u914d\u7f6egrafana\u5c55\u793aprometheus\u76d1\u63a7\u6570\u636e",level:2},{value:"\u914d\u7f6ePrometheus\u6570\u636e\u6e90",id:"\u914d\u7f6eprometheus\u6570\u636e\u6e90",level:3},{value:"\u914d\u7f6eGrafana \u76d1\u63a7\u56fe\u8868",id:"\u914d\u7f6egrafana-\u76d1\u63a7\u56fe\u8868",level:3}],m={toc:d};function c(e){var t=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheusgrafana\u642d\u5efamysqlstonedb\u76d1\u63a7\u5e73\u53f0"},"Prometheus+Grafana\u642d\u5efaMySQL/StoneDB\u76d1\u63a7\u5e73\u53f0"),(0,o.kt)("h2",{id:"prometheus\u4ecb\u7ecd"},"Prometheus\u4ecb\u7ecd"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus"},"Prometheus")," \u662f\u7531\u524d Google \u5de5\u7a0b\u5e08\u4ece 2012 \u5e74\u5f00\u59cb\u5728 ",(0,o.kt)("a",{parentName:"p",href:"http://soundcloud.com/"},"Soundcloud")," \u4ee5\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u7814\u53d1\u7684\u7cfb\u7edf\u76d1\u63a7\u548c\u544a\u8b66\u5de5\u5177\u5305\uff0c\u81ea\u6b64\u4ee5\u540e\uff0c\u8bb8\u591a\u516c\u53f8\u548c\u7ec4\u7ec7\u90fd\u91c7\u7528\u4e86 Prometheus \u4f5c\u4e3a\u76d1\u63a7\u544a\u8b66\u5de5\u5177\u3002Prometheus \u7684\u5f00\u53d1\u8005\u548c\u7528\u6237\u793e\u533a\u975e\u5e38\u6d3b\u8dc3\uff0c\u5b83\u73b0\u5728\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u53ef\u4ee5\u72ec\u7acb\u4e8e\u4efb\u4f55\u516c\u53f8\u8fdb\u884c\u7ef4\u62a4\u3002\u4e3a\u4e86\u8bc1\u660e\u8fd9\u4e00\u70b9\uff0cPrometheus \u4e8e 2016 \u5e74 5 \u6708\u52a0\u5165 ",(0,o.kt)("a",{parentName:"p",href:"https://cncf.io/"},"CNCF")," \u57fa\u91d1\u4f1a\uff0c\u6210\u4e3a\u7ee7 ",(0,o.kt)("a",{parentName:"p",href:"http://kubernetes.io/"},"Kubernetes")," \u4e4b\u540e\u7684\u7b2c\u4e8c\u4e2a CNCF \u6258\u7ba1\u9879\u76ee\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.fuckcloudnative.io/di-yi-zhang-jie-shao/overview"},"https://prometheus.fuckcloudnative.io/di-yi-zhang-jie-shao/overview")),(0,o.kt)("p",null,"Prometheus \u5b98\u65b9\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"https://prometheus.io/download/")),(0,o.kt)("p",null,"Grafana \u4ecb\u7ecd\uff1a\nGrafana \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u76d1\u63a7\u6570\u636e\u5206\u6790\u548c\u53ef\u89c6\u5316\u5957\u4ef6\u3002\u6700\u5e38\u7528\u4e8e\u5bf9\u57fa\u7840\u8bbe\u65bd\u548c\u5e94\u7528\u6570\u636e\u5206\u6790\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u8fdb\u884c\u53ef\u89c6\u5316\u5206\u6790\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u5176\u4ed6\u9700\u8981\u6570\u636e\u53ef\u89c6\u5316\u5206\u6790\u7684\u9886\u57df\u3002Grafana \u53ef\u4ee5\u5e2e\u52a9\u4f60\u67e5\u8be2\u3001\u53ef\u89c6\u5316\u3001\u544a\u8b66\u3001\u5206\u6790\u4f60\u6240\u5728\u610f\u7684\u6307\u6807\u548c\u6570\u636e\u3002\u53ef\u4ee5\u4e0e\u6574\u4e2a\u56e2\u961f\u5171\u4eab\uff0c\u6709\u52a9\u4e8e\u57f9\u517b\u56e2\u961f\u7684\u6570\u636e\u9a71\u52a8\u6587\u5316\u3002\n\u5177\u4f53\u4ecb\u7ecd\u53ef\u4ee5\u67e5\u770b\u5b98\u7f51\u4ecb\u7ecd\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/introduction/"},"Grafana \u7b80\u4ecb")),(0,o.kt)("p",null,"Grafana \u5b98\u7f51\u5730\u5740\uff1a ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/"},"https://grafana.com/")),(0,o.kt)("h2",{id:"\u90e8\u7f72\u73af\u5883"},"\u90e8\u7f72\u73af\u5883"),(0,o.kt)("p",null,"A\u673a\u5668 Docker \u90e8\u7f72 Prometheus+Grafana",(0,o.kt)("br",{parentName:"p"}),"\n","B\u673a\u5668 mysqld_exporter+node_exporter"),(0,o.kt)("h3",{id:"\u4e3a\u4f55\u8981\u6302\u8f7d\u6570\u636e\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6"},"\u4e3a\u4f55\u8981\u6302\u8f7d\u6570\u636e\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6\uff1f"),(0,o.kt)("p",null,"\u56e0\u4e3a\u672c\u6587\u91c7\u7528docker \u90e8\u7f72\u65b9\u5f0f\uff0cdocker\u5bb9\u5668\u91cd\u542f\u540e\u6ca1\u6709\u6302\u8f7d\u51fa\u6765\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u6587\u4ef6\u6709\u53ef\u80fd\u4f1a\u88ab\u91cd\u7f6e\uff0c\u4e3a\u4e86\u9632\u6b62\u76d1\u63a7\u6570\u636e\u4e22\u5931\uff0c\u9700\u8981\u628a\u6570\u636e\u6587\u4ef6\u6302\u8f7d\u51fa\u6765\uff0c\u53e6\u5916\u6302\u8f7d\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5728\u7269\u7406\u673a\u4e0a\u4fee\u6539\uff0c\u91cd\u542fdocker\u5373\u53ef\u5e94\u7528\u5230docker\u4e2d\uff0c\u4e0d\u9700\u8981\u8fdb\u5165\u5230\u5bb9\u5668\u5185\u90e8\u4fee\u6539\u3002"),(0,o.kt)("h2",{id:"\u7b2c\u4e00\u6b65\u90e8\u7f72prometheus"},"\u7b2c\u4e00\u6b65\uff1a\u90e8\u7f72Prometheus"),(0,o.kt)("p",null,"\u5728A\u673a\u5668\u4e0a\u4f7f\u7528docker\u5148\u62c9\u8d77\u4e00\u4e2aPrometheus\uff0c\u6216\u8005\u4ecePrometheus\u5b98\u7f51\u4e0b\u8f7dtar\u5305\u89e3\u538b\uff0c\u62ff\u5230\u91cc\u9762\u7684prometheus.yml\u548cdata\u6587\u4ef6\uff0c\u653e\u7f6e\u5230\u6307\u5b9a\u76ee\u5f55\u3002\u672c\u6587\u628adata\u548cyml\u6587\u4ef6\u5206\u522b\u653e\u7f6e\u5230/home/prometheus\u4e0b\u7684data/\u548cconfig/\u6587\u4ef6\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5148\u542f\u52a8\u4e00\u4e2a\u6ca1\u6709\u6302\u8f7d\u6ca1\u6709\u7aef\u53e3\u6620\u5c04\u7684Prometheus\ndocker run -d    \\\nprom/prometheus\n\nmkdir -p /home/prometheus/data/\nmkdir -p /home/prometheus/config/\n# \u62f7\u8d1d\u914d\u7f6e\u548c\u6570\u636e\u6587\u4ef6\ndocker ps\ndocker cp 3fe0e3ea2aa5:/etc/prometheus/prometheus.yml /home/prometheus/config/\ndocker cp  3fe0e3ea2aa5:/prometheus /home/prometheus/data/\n# data\u6587\u4ef6\u5939\u9700\u8981\u8bbe\u7f6e\u4e0b\u6743\u9650\uff0c\u5426\u5219\u6302\u8f7d\u8fdb\u53bb\u4f1a\u51fa\u73b0\u6570\u636e\u5199\u5165\u6743\u9650\u4e0d\u8db3\u7684\u95ee\u9898\nchmod 777 /home/zsp/prometheus/data/*\n\ncd /home/zsp/prometheus/\ntree\n.\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 prometheus.yml\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 chunks_head\n    \u2502\xa0\xa0 \u251c\u2500\u2500 000001\n    \u2502\xa0\xa0 \u2514\u2500\u2500 000002\n    \u251c\u2500\u2500 queries.active\n    \u2514\u2500\u2500 wal\n        \u251c\u2500\u2500 00000000\n        \u2514\u2500\u2500 00000001\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u542f\u52a8\u4e00\u4e2a\u65b0\u5bb9\u5668\u5e76\u8bbe\u7f6e\u6302\u8f7d\u6570\u636e\u76ee\u5f55\u548c\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d  --restart=always --name=prometheus  -p 9090:9090  \\\n-v /home/prometheus/config/prometheus.yml:/etc/prometheus/prometheus.yml  \\\n-v /home/prometheus/data/:/prometheus/     prom/prometheus \\\n--config.file=/etc/prometheus/prometheus.yml \\\n--storage.tsdb.path=/prometheus \\\n--web.enable-admin-api \\\n--web.enable-lifecycle \\\n--web.external-url='http://A\u673a\u5668IP:9090'  \\\n--storage.tsdb.retention.time=30d\n\n")),(0,o.kt)("p",null,"\u67e5\u770bA\u673a\u5668IP:9090 \u5373\u90e8\u7f72\u6210\u529f\uff0c\u4e0d\u6210\u529f\u8bf7\u4f7f\u7528docker logs \u5bb9\u5668ID\u67e5\u770b\u9519\u8bef\u65e5\u5fd7\u8fdb\u884c\u6392\u67e5\n",(0,o.kt)("img",{alt:"image.png",src:r(86063).Z,width:"2240",height:"1174"})),(0,o.kt)("h2",{id:"\u7b2c\u4e8c\u6b65\u90e8\u7f72exporter"},"\u7b2c\u4e8c\u6b65\uff1a\u90e8\u7f72exporter"),(0,o.kt)("p",null,"\u4ee5MySQL\u548c\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\u4e3a\u793a\u4f8b\uff1a\n\u5efa\u8bae\u4f7f\u7528supervisord\u8fdb\u7a0b\u6765\u63a7\u5236\u76d1\u63a7\u7aef\u7684exporter\u670d\u52a1\u884c\u4e3a\u3002\nsupervisord\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/0b9054b33db3"},"https://www.jianshu.com/p/0b9054b33db3")),(0,o.kt)("h3",{id:"\u90e8\u7f72node_exporter"},"\u90e8\u7f72node_exporter"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u89e3\u538bnode_exporter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz\ntar -zxvf node_exporter-1.3.1.linux-amd64.tar.gz\nmv node_exporter-1.3.1.linux-amd64 node_exporter\nmv node_exporter /usr/local/\ncd /usr/local/node_exporter/\n# \u542f\u52a8 node_exporter\u6d4b\u8bd5\u662f\u5426\u6b63\u5e38\n./node_exporter\n\n# \u542f\u52a8\u65b0\u7ec8\u7aef\u754c\u9762\uff0c\u67e5\u8be2\nss -nltp |grep 9100\nLISTEN     0      128         :::9100                    :::*                   users:(("node_exporter",pid=17268,fd=3))\n')),(0,o.kt)("p",null,"\u4f7f\u7528supervisor\u7ba1\u7406node_exporter\u8fdb\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/supervisord.d/node_exporter.ini\n\n[program:node_exporter]\ndirectory = /usr/local/node_exporter/\ncommand = /usr/local/node_exporter/node_exporter\nautostart = true\nstartsecs = 5\nautorestart = true\nstartretries = 3\nuser = root\nredirect_stderr = true\nstdout_logfile_maxbytes = 20MB\nstdout_logfile_backups = 20\nstdout_logfile = /var/log/supervisor/node_exporter.log\n\nsystemctl restart supervisord\n")),(0,o.kt)("h3",{id:"\u90e8\u7f72mysqld_exporter"},"\u90e8\u7f72mysqld_exporter"),(0,o.kt)("p",null,"\u767b\u5f55\u673a\u5668B mysql\u6570\u636e\u5e93\u8bbe\u7f6emysql\u76d1\u63a7\u8d26\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"GRANT REPLICATION CLIENT, PROCESS ON . TO 'exporter'@'localhost' identified by 'exporter@123';\nGRANT SELECT ON performance_schema.* TO 'exporter'@'localhost';\nflush privileges;\n")),(0,o.kt)("p",null,"\u4e0b\u8f7d\u89e3\u538b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/prometheus/mysqld_exporter/releases/download/v0.14.0/mysqld_exporter-0.14.0.linux-amd64.tar.gz\ntar -zxvf mysqld_exporter-0.14.0.linux-amd64.tar.gz\nmv mysqld_exporter-0.14.0.linux-amd64 mysqld_exporter\nmv mysqld_exporter /usr/local/\ncd /usr/local/mysqld_exporter/\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e.my.cnf\u76d1\u63a7\u8d26\u53f7\u767b\u5f55\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi .my.cnf\n[client]\nuser=exporter\npassword=exporter@123\n")),(0,o.kt)("p",null,"\u542f\u52a8mysqld_exporter\u76d1\u63a7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \u6d4b\u8bd5exporter\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\n/usr/local/mysqld_exporter/mysqld_exporter --config.my-cnf=/usr/local/mysqld_exporter/.my.cnf\n\nss -nltp |grep 9104\nLISTEN     0      128         :::9104                    :::*                   users:(("mysqld_exporter",pid=17266,fd=3))\n')),(0,o.kt)("p",null,"\u4f7f\u7528supervisor\u7ba1\u7406mysqld_exporter\u8fdb\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/supervisord.d/mysqld_exporter.ini\n\n[program:mysqld_exporter]\ndirectory = /usr/local/mysqld_exporter/\ncommand = /usr/local/mysqld_exporter/mysqld_exporter --config.my-cnf=/usr/local/mysqld_exporter/.my.cnf\nautostart = true\nstartsecs = 5\nautorestart = true\nstartretries = 3\nuser = root\nredirect_stderr = true\nstdout_logfile_maxbytes = 20MB\nstdout_logfile_backups = 20\nstdout_logfile = /var/log/supervisor/mysqld_exporter.log\n\nsystemctl restart supervisord\n")),(0,o.kt)("h2",{id:"\u7b2c\u4e09\u6b65\u914d\u7f6eprometheus\u76d1\u542cmysqld_exporter\u548cnode_exporter"},"\u7b2c\u4e09\u6b65\uff1a\u914d\u7f6ePrometheus\u76d1\u542cmysqld_exporter\u548cnode_exporter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# my global config\nglobal:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n          # - alertmanager:9093\n\n# Load rules once and periodically evaluate them according to the global \'evaluation_interval\'.\nrule_files:\n  # - "first_rules.yml"\n  # - "second_rules.yml"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it\'s Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: "prometheus"\n\n    # metrics_path defaults to \'/metrics\'\n    # scheme defaults to \'http\'.\n\n    static_configs:\n      - targets: ["localhost:9090"]\n\n  - job_name: "node_exporter"\n    static_configs:\n      - targets: ["B\u673a\u5668IP:9100"]\n        labels:\n          instance: B\u673a\u5668_stonedb\n\n  - job_name: "mysqld_exporter"\n    static_configs:\n      - targets: ["B\u673a\u5668IP:9104"]\n        labels:\n          instance: B\u673a\u5668_stonedb\n')),(0,o.kt)("p",null,"\u6dfb\u52a0mysqld_exporter \u548cnode_exporter\u540e\uff0cdocker\u9700\u8981\u91cd\u542f\u5bb9\u5668\u52a0\u8f7d\u4e0b\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker restart 892d640f51b2\n")),(0,o.kt)("p",null,"\u7a0d\u7b49\u4e00\u4f1a\u513f\u67e5\u770bPrometheus \u4e0a\u7684Status-Targets\u72b6\u6001\uff08\u8fd9\u4e00\u6b65\u5fd8\u8bb0\u622a\u56fe\u4e86\uff0c\u4f7f\u7528\u5176\u4ed6\u73af\u5883\u622a\u56fe\u4ee3\u66ff\uff09\uff0cmetrics\u5168\u4e3aup\u5219\u8868\u793a\u76d1\u63a7\u91c7\u96c6metrics\u91c7\u96c6\u6210\u529f\n",(0,o.kt)("img",{alt:"image.png",src:r(78798).Z,width:"2240",height:"1174"})),(0,o.kt)("h2",{id:"\u7b2c\u56db\u6b65\u90e8\u7f72grafana"},"\u7b2c\u56db\u6b65\uff1a\u90e8\u7f72Grafana"),(0,o.kt)("h3",{id:"docker-\u90e8\u7f72"},"Docker \u90e8\u7f72"),(0,o.kt)("p",null,"\u548cDocker \u90e8\u7f72Prometheus\u4e00\u6837\uff0c\u9700\u8981\u5148\u628aGrafana\u91cc\u9762\u7684\u6570\u636e\u6587\u4ef6\u548c\u914d\u7f6e\u6587\u4ef6\u6302\u8f7d\u51fa\u6765\uff0c\u548c\u4e0a\u9762\u300a",(0,o.kt)("a",{parentName:"p",href:"#qoziY"},"docker \u590d\u5236config \u548cdata\u6587\u4ef6\u547d\u4ee4"),"\u300b \u6b65\u9aa4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name=grafana -p 13000:3000 grafana/grafana\ndocker cp c2bfbdd0827f:/etc/grafana/grafana.ini /home/zsp/grafana/config/\ndocker cp c2bfbdd0827f:/var/lib/grafana/ /home/zsp/grafana/data/\ntree\n.\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 grafana.ini\n\u2514\u2500\u2500 data\n    \u2514\u2500\u2500 grafana\n        \u251c\u2500\u2500 alerting\n        \u2502\xa0\xa0 \u2514\u2500\u2500 1\n        \u2502\xa0\xa0     \u2514\u2500\u2500 __default__.tmpl\n        \u251c\u2500\u2500 csv\n        \u251c\u2500\u2500 grafana.db\n        \u251c\u2500\u2500 plugins\n        \u2514\u2500\u2500 png\n")),(0,o.kt)("p",null,"\u542f\u52a8Grafana "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d  --restart=always --name=grafana  -p 13000:3000  \\\n-v /home/zsp/grafana/config/grafana.ini:/etc/grafana/grafana.ini  \\\n-v /home/zsp/grafana/data/grafana/:/var/lib/grafana/    grafana/grafana\n")),(0,o.kt)("p",null,"\u542f\u52a8\u540e\u8bbf\u95ee\uff1a",(0,o.kt)("a",{parentName:"p",href:"http://192.168.30.101:13000/"},"http://A\u673a\u5668IP:13000/"),"\n\u521d\u59cb\u8d26\u53f7\u5bc6\u7801\u4e3a\uff1aadmin   admin\n",(0,o.kt)("img",{alt:"image.png",src:r(6404).Z,width:"1125",height:"590"})),(0,o.kt)("h2",{id:"\u7b2c\u4e94\u6b65\u914d\u7f6egrafana\u5c55\u793aprometheus\u76d1\u63a7\u6570\u636e"},"\u7b2c\u4e94\u6b65\uff1a\u914d\u7f6eGrafana\u5c55\u793aPrometheus\u76d1\u63a7\u6570\u636e"),(0,o.kt)("h3",{id:"\u914d\u7f6eprometheus\u6570\u636e\u6e90"},"\u914d\u7f6ePrometheus\u6570\u636e\u6e90"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:r(67136).Z,width:"1125",height:"590"}),(0,o.kt)("img",{alt:"image.png",src:r(77268).Z,width:"2240",height:"1174"}),"\n\u4e00\u822c\u8bbe\u7f6e\u8fd9\u4e24\u4e2a\u5730\u65b9\u5c31\u53ef\u4ee5\u4e86",(0,o.kt)("img",{alt:"image.png",src:r(70486).Z,width:"2240",height:"1174"}),"\n\u70b9\u51fb\u5e95\u90e8Save & test\u51fa\u73b0Data source is working\u5373\u53ef",(0,o.kt)("img",{alt:"image.png",src:r(26165).Z,width:"2083",height:"512"})),(0,o.kt)("h3",{id:"\u914d\u7f6egrafana-\u76d1\u63a7\u56fe\u8868"},"\u914d\u7f6eGrafana \u76d1\u63a7\u56fe\u8868"),(0,o.kt)("p",null,"\u901a\u8fc7import \u5bfc\u5165\u5b98\u65b9\u56fe\u8868\uff0c\u4e5f\u53ef\u81ea\u5b9a\u4e49\u6dfb\u52a0\u81ea\u5df1\u9700\u8981\u7684\u56fe\u8868\uff0c\u5b98\u65b9\u76d1\u63a7\u56fe\u8868\u67e5\u627e\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/"},"https://grafana.com/grafana/dashboards/"),"\n\u672c\u6587\u5c55\u793anode_exporter\u56fe\u8868\u7f16\u53f7\u4e3a 11074\n\u548cmysql \u56fe\u8868\u7f16\u53f7\u4e3a 11323\n",(0,o.kt)("img",{alt:"image.png",src:r(1784).Z,width:"2240",height:"1174"}),"\n",(0,o.kt)("img",{alt:"image.png",src:r(18631).Z,width:"1985",height:"811"}),"\n",(0,o.kt)("img",{alt:"image.png",src:r(96383).Z,width:"1125",height:"590"}),"\nMysql \u914d\u7f6e\u540c\u7406\uff0c\u4e0d\u505a\u8fc7\u591a\u622a\u56fe\uff0c\u4ee5\u4e0b\u662f\u5c55\u793a\u6548\u679c\u622a\u56fe\n",(0,o.kt)("img",{alt:"image.png",src:r(75965).Z,width:"1125",height:"590"}),"\n",(0,o.kt)("img",{alt:"image.png",src:r(64146).Z,width:"1125",height:"590"})))}c.isMDXComponent=!0},6404:function(e,t,r){t.Z=r.p+"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},1784:function(e,t,r){t.Z=r.p+"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},18631:function(e,t,r){t.Z=r.p+"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},96383:function(e,t,r){t.Z=r.p+"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},75965:function(e,t,r){t.Z=r.p+"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},64146:function(e,t,r){t.Z=r.p+"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},86063:function(e,t,r){t.Z=r.p+"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},78798:function(e,t,r){t.Z=r.p+"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},77268:function(e,t,r){t.Z=r.p+"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},67136:function(e,t,r){t.Z=r.p+"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},26165:function(e,t,r){t.Z=r.p+"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},70486:function(e,t,r){t.Z=r.p+"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"}}]);