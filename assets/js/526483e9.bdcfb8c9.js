"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[2249],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90125:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"use-gravity-to-migrate",sidebar_position:8.2},s="Use Gravity to Migrate Data to StoneDB",p={unversionedId:"data-migration-to-stonedb/use-gravity-to-migrate",id:"data-migration-to-stonedb/use-gravity-to-migrate",title:"Use Gravity to Migrate Data to StoneDB",description:"Gravity introduction",source:"@site/../Docs/07-data-migration-to-stonedb/use-gravity-to-migrate.md",sourceDirName:"07-data-migration-to-stonedb",slug:"/data-migration-to-stonedb/use-gravity-to-migrate",permalink:"/docs/data-migration-to-stonedb/use-gravity-to-migrate",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/../Docs/07-data-migration-to-stonedb/use-gravity-to-migrate.md",tags:[],version:"current",lastUpdatedBy:"cxd",lastUpdatedAt:1658995803,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:8.2,frontMatter:{id:"use-gravity-to-migrate",sidebar_position:8.2},sidebar:"autoSidebar",previous:{title:"Use Outter to Migrate Data to StoneDB",permalink:"/docs/data-migration-to-stonedb/use-outter-to-migrate"},next:{title:"Failed to Start StoneDB",permalink:"/docs/troubleshooting/failed-to-start"}},u={},m=[{value:"Gravity introduction",id:"gravity-introduction",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Features",id:"features",level:2},{value:"Limits",id:"limits",level:3},{value:"<strong>Configuration file example</strong>",id:"configuration-file-example",level:2},{value:"Deployment schemes",id:"deployment-schemes",level:2},{value:"Deploy Gravity on a Docker container",id:"deploy-gravity-on-a-docker-container",level:3},{value:"Deploy Gravity on a Kubernetes container",id:"deploy-gravity-on-a-kubernetes-container",level:3},{value:"Deploy Gravity on an ECS",id:"deploy-gravity-on-an-ecs",level:3},{value:"Configure monitoring for synchronization tasks",id:"configure-monitoring-for-synchronization-tasks",level:2}],d={toc:m};function c(t){var e=t.components,l=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-gravity-to-migrate-data-to-stonedb"},"Use Gravity to Migrate Data to StoneDB"),(0,o.kt)("h2",{id:"gravity-introduction"},"Gravity introduction"),(0,o.kt)("p",null,"Gravity is a data migration tool developed by Mobike written in Golang. Though it is not frequently updated on GitHub, many developers are responding to issues. Gravity supports full synchronization, incremental synchronization, and publish of data updates to message queues. It can be deployed on elastic cloud servers (ECSs), Docker containers, and Kubernetes containers."),(0,o.kt)("p",null,"It is designed to be a customizable data migration tool that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports multiple data sources and destinations."),(0,o.kt)("li",{parentName:"ul"},"Supports Kubernetes-based replication clusters.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gravity",src:a(6014).Z,width:"1188",height:"700"})),(0,o.kt)("p",null,"For more information about Gravity on GitHub, visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity"},"https://github.com/moiot/gravity"),"."),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data Bus: uses change data capture (MySQL binlog, MongoDB Oplog) and batch table scan to publish data to Kafka for downstream consumption."),(0,o.kt)("li",{parentName:"ul"},"Unidirectional data synchronization: fully or incrementally synchronizes data from one MySQL cluster to another MySQL cluster."),(0,o.kt)("li",{parentName:"ul"},"Bidirectional data synchronization: fully or incrementally synchronizes data between two MySQL clusters."),(0,o.kt)("li",{parentName:"ul"},"Synchronization of shards to the merged table: synchronizes MySQL sharded tables to the merged table. You can specify the corresponding relationship between the source table and the destination table."),(0,o.kt)("li",{parentName:"ul"},"Online data mutation: supports data changes during the replication. For example, you can rename, encrypt, and decrypt columns.")),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Input support"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Input")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Status")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MySQL Binlog"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MySQL Scan"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mongo Oplog"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TiDB Binlog"),(0,o.kt)("td",{parentName:"tr",align:null},"Doing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PostgreSQL WAL"),(0,o.kt)("td",{parentName:"tr",align:null},"Doing")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Output support"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Output")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Status")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MySQL/TiDB"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,o.kt)("td",{parentName:"tr",align:null},"Doing")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data mutation support"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Mutation")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Status")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Filter data"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rename columns"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Delete columns"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,o.kt)("p",null,"For information about the architecture, visit: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity/blob/master/docs/2.0/00-arch.md"},"https://github.com/moiot/gravity/blob/master/docs/2.0/00-arch.md"),"."),(0,o.kt)("h3",{id:"limits"},"Limits"),(0,o.kt)("p",null,"The binlog format of the data source can only be",(0,o.kt)("strong",{parentName:"p"}," row"),"."),(0,o.kt)("h2",{id:"configuration-file-example"},(0,o.kt)("strong",{parentName:"h2"},"Configuration file example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# \'name\' specifies the cluster name. It is mandatory.\nname = "mysql2mysqlDemo"\n\n# Name of the database that stores information about binlog positions and heartbeats. The default value is \'_gravity\'. This database is automatically generated on the data source.\ninternal-db-name = "_gravity"\n\n#\n# Define the input plugin. The following uses \'mysql\' as an example.\n#\n[input]\n# Type of the databases used for synchronization.\ntype = "mysql"\n# Synchronization task type. Possible values are \'stream\', \'batch\', and \'replication\'. \'stream\' specifies incremental synchronization, \'batch\' specifies full synchronization, and \'replication\' specifies both full synchronization and incremental synchronization.\nmode = "replication"\n[input.config.source]\nhost = "192.168.30.183"\nusername = "zz"\npassword = "********"\nport = 3307\n\n#\n# Define the output plugin. The following uses \'mysql\' as an example.\n#\n[output]\ntype = "mysql"\n[output.config.target]\nhost = "192.168.30.101"\nusername = "root"\npassword = "********"\nport = 3306\n\n# Define routing rules.\n[[output.config.routes]]\nmatch-schema = "zg"\nmatch-table = "test_source_table"\ntarget-schema = "zg"\ntarget-table = "test_target_table\n')),(0,o.kt)("h2",{id:"deployment-schemes"},"Deployment schemes"),(0,o.kt)("h3",{id:"deploy-gravity-on-a-docker-container"},"Deploy Gravity on a Docker container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 8080:8080 -v ${PWD}/config.toml:/etc/gravity/config.toml  --net=host --name=innodb2stone moiot/gravity:latest\n")),(0,o.kt)("h3",{id:"deploy-gravity-on-a-kubernetes-container"},"Deploy Gravity on a Kubernetes container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://codeload.github.com/moiot/gravity-operator/tar.gz/refs/tags/v0.3.12 -C gravity-operator-0.3.12.tar.gz\ntar -zxvf gravity-operator-0.3.12.tar.gz\n\ncd gravity-operator/charts/gravity-operator\nhelm install --name gravity-operator ./\n")),(0,o.kt)("p",null,"Then perform the following steps to create a synchronization task:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the Kubernetes dashboard, check that Gravity is running properly and find the port corresponding to ",(0,o.kt)("strong",{parentName:"li"},"admin web-server"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the port to log in to Gravity."),(0,o.kt)("li",{parentName:"ol"},"Configure the template to create the synchronization task.")),(0,o.kt)("p",null,"The parameters that you need to configure in the template are similar to those provided in the configuration file example."),(0,o.kt)("h3",{id:"deploy-gravity-on-an-ecs"},"Deploy Gravity on an ECS"),(0,o.kt)("p",null,"We do not recommend this scheme because it requires preparations of the Golang environment and the compilation is complex."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/moiot/gravity.git\n\ncd gravity && make\nbin/gravity -config mysql2mysql.toml\n")),(0,o.kt)("h2",{id:"configure-monitoring-for-synchronization-tasks"},"Configure monitoring for synchronization tasks"),(0,o.kt)("p",null,"Add Gravity to Prometheus to monitor synchronization tasks. The following code provides an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'- job_name: "gravity_innodb2stone"\nstatic_configs:\n- targets: ["192.168.46.150:8080"]\nlabels:\n          instance: innodb2stone\n')),(0,o.kt)("p",null,"The following are two screenshot examples of the Grafana monitoring dashboard. For details about display templates of Grafana, visit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moiot/gravity/tree/master/deploy/grafana"},"https://github.com/moiot/gravity/tree/master/deploy/grafana"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example-1",src:a(60377).Z,width:"1125",height:"590"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"example-2",src:a(63268).Z,width:"1125",height:"590"})))}c.isMDXComponent=!0},6014:function(t,e,a){e.Z=a.p+"assets/images/Gravity-e92717be2bfa143012153dd9cd112d4d.png"},60377:function(t,e,a){e.Z=a.p+"assets/images/example-1-dd086d4d488bb8369f957e965c0f289f.png"},63268:function(t,e,a){e.Z=a.p+"assets/images/example-2-27fb5eb6d609f4d4b11ab86421bb8c78.png"}}]);