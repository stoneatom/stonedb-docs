"use strict";(self.webpackChunkstoneDB=self.webpackChunkstoneDB||[]).push([[9920],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37097:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"prometheus+grafana-monitor",sidebar_position:4.21},l="Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases",p={unversionedId:"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",id:"O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",title:"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases",description:"Introduction",source:"@site/../Docs/03-O&M-Guide/00-monitoring-and-alerting/prometheus+grafana-monitor.md",sourceDirName:"03-O&M-Guide/00-monitoring-and-alerting",slug:"/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",permalink:"/docs/O&M-Guide/monitoring-and-alerting/prometheus+grafana-monitor",draft:!1,editUrl:"https://github.com/stoneatom/stonedb/edit/stonedb-5.7/Docs/03-O&M-Guide/00-monitoring-and-alerting/prometheus+grafana-monitor.md",tags:[],version:"current",lastUpdatedBy:"xuejiao-joy",lastUpdatedAt:1660121036,formattedLastUpdatedAt:"8/10/2022",sidebarPosition:4.21,frontMatter:{id:"prometheus+grafana-monitor",sidebar_position:4.21},sidebar:"autoSidebar",previous:{title:"Regular Change Operations",permalink:"/docs/O&M-Guide/regular-change-operations"},next:{title:"Use mysqldump to Back Up or Recover StoneDB",permalink:"/docs/O&M-Guide/backup-and-recovery/use-mysqldump-backup-and-restore"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Prometheus introduction",id:"prometheus-introduction",level:3},{value:"Grafana introduction",id:"grafana-introduction",level:3},{value:"Environment introduction",id:"environment-introduction",level:3},{value:"The importance of mounting data and configuration files",id:"the-importance-of-mounting-data-and-configuration-files",level:4},{value:"<strong>Step 1. Deploy Prometheus</strong>",id:"step-1-deploy-prometheus",level:2},{value:"Step 2. <strong>Deploy Prometheus Exporter</strong>",id:"step-2-deploy-prometheus-exporter",level:2},{value:"Deploy node_exporter",id:"deploy-node_exporter",level:3},{value:"<strong>Deploy mysqld_exporter</strong>",id:"deploy-mysqld_exporter",level:3},{value:"<strong>Step 4. Deploy Grafana</strong>",id:"step-4-deploy-grafana",level:2},{value:"<strong>Step 5. Configure Grafana to display monitoring data from Prometheus</strong>",id:"step-5-configure-grafana-to-display-monitoring-data-from-prometheus",level:2},{value:"<strong>Configure the Prometheus data source</strong>",id:"configure-the-prometheus-data-source",level:3},{value:"<strong>Configure Grafana Monitoring Dashboards</strong>",id:"configure-grafana-monitoring-dashboards",level:3}],u={toc:m};function c(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-prometheus-and-grafana-to-monitor-mysql-or-stonedb-databases"},"Use Prometheus and Grafana to Monitor MySQL or StoneDB Databases"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"prometheus-introduction"},"Prometheus introduction"),(0,o.kt)("p",null,"Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. Since its inception in 2012, many companies and organizations have adopted Prometheus, and the project has a very active developer and user community. It is now a standalone open-source project and independently maintained by any company. To emphasize this, and to clarity the governance structure of the project, Prometheus joined the Cloud Native Computing Foundation in 2016 as the second hosted project, after Kubernetes."),(0,o.kt)("p",null,"For more information about Prometheus, visit ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/introduction/overview/"},"https://prometheus.io/docs/introduction/overview/"),"."),(0,o.kt)("p",null,"To download Prometheus, visit ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"https://prometheus.io/download/"),"."),(0,o.kt)("h3",{id:"grafana-introduction"},"Grafana introduction"),(0,o.kt)("p",null,"Grafana is a suite of open-source visualization and analytics tools. It enables you to query, visualize, alert on, and explore your metrics, logs, and traces wherever they are stored, as well as share them to your teams. It is most commonly used to analyze and visualize time series data collected from infrastructure and applications.\nFor more information, visit ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/introduction/"},"https://grafana.com/docs/grafana/latest/introduction/"),"."),(0,o.kt)("h3",{id:"environment-introduction"},"Environment introduction"),(0,o.kt)("p",null,"Machine A: on which Prometheus and Grafana are deployed in Docker containers"),(0,o.kt)("p",null,"Machine B: on which mysqld_exporter and node_exporter are deployed"),(0,o.kt)("h4",{id:"the-importance-of-mounting-data-and-configuration-files"},"The importance of mounting data and configuration files"),(0,o.kt)("p",null,"In the example of this topic, Prometheus and Grafana are deployed in Docker containers. If the data and configuration files are not mounted, they may be reset when Docker containers are restarted. Therefore, to prevent the loss of monitoring data, we strongly recommend that you mount the data and configuration files. Another benefit of doing this is that you can modify the configuration file directly on the physical machine and restart the Docker container to make the modification take effect."),(0,o.kt)("h2",{id:"step-1-deploy-prometheus"},(0,o.kt)("strong",{parentName:"h2"},"Step 1. Deploy Prometheus")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On machine A, start Prometheus on a Docker container. Alternatively, download the TAR package from the official site of Prometheus, extract the ",(0,o.kt)("strong",{parentName:"li"},"data")," and ",(0,o.kt)("strong",{parentName:"li"},"prometheus.yml")," files from the package, and save each file to the specified directory, for example, save ",(0,o.kt)("strong",{parentName:"li"},"data")," to directory ",(0,o.kt)("strong",{parentName:"li"},"/home/prometheus/data")," and ",(0,o.kt)("strong",{parentName:"li"},"prometheus.yml")," to directory ",(0,o.kt)("strong",{parentName:"li"},"/home/prometheus/config"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Start Prometheus which is not configured with file mounting and port mapping.\ndocker run -d    \\\nprom/prometheus\n\nmkdir -p /home/prometheus/data/\nmkdir -p /home/prometheus/config/\n# Copy the configuration and data files.\ndocker ps\ndocker cp 3fe0e3ea2aa5:/etc/prometheus/prometheus.yml /home/prometheus/config/\ndocker cp  3fe0e3ea2aa5:/prometheus /home/prometheus/data/\n# You must be granted the permissions to operate on the 'data' folder. Otherwise, mapping will fail due to insufficient permissions.\nchmod 777 /home/zsp/prometheus/data/*\n\ncd /home/zsp/prometheus/\ntree\n.\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 prometheus.yml\n\u2514\u2500\u2500 data\n    \u251c\u2500\u2500 chunks_head\n    \u2502\xa0\xa0 \u251c\u2500\u2500 000001\n    \u2502\xa0\xa0 \u2514\u2500\u2500 000002\n    \u251c\u2500\u2500 queries.active\n    \u2514\u2500\u2500 wal\n        \u251c\u2500\u2500 00000000\n        \u2514\u2500\u2500 00000001\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start another container and configure the directories to which the data and configuration files are mounted.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d  --restart=always --name=prometheus  -p 9090:9090  \\\n-v /home/prometheus/config/prometheus.yml:/etc/prometheus/prometheus.yml  \\\n-v /home/prometheus/data/:/prometheus/     prom/prometheus \\\n--config.file=/etc/prometheus/prometheus.yml \\\n--storage.tsdb.path=/prometheus \\\n--web.enable-admin-api \\\n--web.enable-lifecycle \\\n--web.external-url='http://IP address of machine A:9090'  \\\n--storage.tsdb.retention.time=30d\n\n")),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},'"http://<IP address of machine A>:9090"')," appears, Prometheus is successfully deployed. If the deployment fails, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs <Container ID>")," command to view logs and rectify the fault.\n",(0,o.kt)("img",{alt:"image.png",src:a(86063).Z,width:"2240",height:"1174"})),(0,o.kt)("h2",{id:"step-2-deploy-prometheus-exporter"},"Step 2. ",(0,o.kt)("strong",{parentName:"h2"},"Deploy Prometheus Exporter")),(0,o.kt)("p",null,"The following example shows how to monitor the OS and a MySQL database."),(0,o.kt)("p",null,"We recommend that you use the supervisord process to monitor Prometheus Exporter. For details about how to use supervisord, visit: ",(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/0b9054b33db3"},"https://www.jianshu.com/p/0b9054b33db3"),"."),(0,o.kt)("h3",{id:"deploy-node_exporter"},"Deploy node_exporter"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and decompress the installation package of node_exporter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz\ntar -zxvf node_exporter-1.3.1.linux-amd64.tar.gz\nmv node_exporter-1.3.1.linux-amd64 node_exporter\nmv node_exporter /usr/local/\ncd /usr/local/node_exporter/\n# Start node_exporter to check whether it is successfully deployed.\n./node_exporter\n\n# Start the interface again and check whether the port is open.\nss -nltp |grep 9100\nLISTEN     0      128         :::9100                    :::*                   users:(("node_exporter",pid=17268,fd=3))\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use the supervisor to manage the node_exporter process.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vi /etc/supervisord.d/node_exporter.ini\n\n[program:node_exporter]\ndirectory = /usr/local/node_exporter/\ncommand = /usr/local/node_exporter/node_exporter\nautostart = true\nstartsecs = 5\nautorestart = true\nstartretries = 3\nuser = root\nredirect_stderr = true\nstdout_logfile_maxbytes = 20MB\nstdout_logfile_backups = 20\nstdout_logfile = /var/log/supervisor/node_exporter.log\n\nsystemctl restart supervisord\n")),(0,o.kt)("h3",{id:"deploy-mysqld_exporter"},(0,o.kt)("strong",{parentName:"h3"},"Deploy mysqld_exporter")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the MySQL database on machine B and configure a MySQL monitoring account.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"GRANT REPLICATION CLIENT, PROCESS ON . TO 'exporter'@'localhost' identified by 'exporter@123';\nGRANT SELECT ON performance_schema.* TO 'exporter'@'localhost';\nflush privileges;\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Download and decompress mysqld_exporter.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/prometheus/mysqld_exporter/releases/download/v0.14.0/mysqld_exporter-0.14.0.linux-amd64.tar.gz\ntar -zxvf mysqld_exporter-0.14.0.linux-amd64.tar.gz\nmv mysqld_exporter-0.14.0.linux-amd64 mysqld_exporter\nmv mysqld_exporter /usr/local/\ncd /usr/local/mysqld_exporter/\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Configure the monitoring account in the",(0,o.kt)("strong",{parentName:"li"}," .my.cnf")," file to allow the account to log in to the configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi .my.cnf\n[client]\nuser=exporter\npassword=exporter@123\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start mysqld_exporter to monitor the database.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Test whether mysqld_exporter is working properly.\n/usr/local/mysqld_exporter/mysqld_exporter --config.my-cnf=/usr/local/mysqld_exporter/.my.cnf\n\nss -nltp |grep 9104\nLISTEN     0      128         :::9104                    :::*                   users:(("mysqld_exporter",pid=17266,fd=3))\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Use Supervisor to manage the mysqld_exporter process.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat /etc/supervisord.d/mysqld_exporter.ini\n\n[program:mysqld_exporter]\ndirectory = /usr/local/mysqld_exporter/\ncommand = /usr/local/mysqld_exporter/mysqld_exporter --config.my-cnf=/usr/local/mysqld_exporter/.my.cnf\nautostart = true\nstartsecs = 5\nautorestart = true\nstartretries = 3\nuser = root\nredirect_stderr = true\nstdout_logfile_maxbytes = 20MB\nstdout_logfile_backups = 20\nstdout_logfile = /var/log/supervisor/mysqld_exporter.log\n\nsystemctl restart supervisord\n")),(0,o.kt)("h1",{id:"step-3-configure-prometheus-to-monitor-mysqld_exporter-and-node_exporter"},(0,o.kt)("strong",{parentName:"h1"},"Step 3. Configure Prometheus to monitor mysqld_exporter and node_exporter")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Complete the following configuration:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# my global config\nglobal:\n  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.\n  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.\n  # scrape_timeout is set to the global default (10s).\n\n# Alertmanager configuration\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n          # - alertmanager:9093\n\n# Load rules once and periodically evaluate them according to the global \'evaluation_interval\'.\nrule_files:\n  # - "first_rules.yml"\n  # - "second_rules.yml"\n\n# A scrape configuration containing exactly one endpoint to scrape:\n# Here it\'s Prometheus itself.\nscrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: "prometheus"\n\n    # metrics_path defaults to \'/metrics\'\n    # scheme defaults to \'http\'.\n\n    static_configs:\n      - targets: ["localhost:9090"]\n\n  - job_name: "node_exporter"\n    static_configs:\n      - targets: ["IP address of machine B:9100"]\n        labels:\n          instance: IP address of machine B_stonedb\n\n  - job_name: "mysqld_exporter"\n    static_configs:\n      - targets: ["IP address of machine B:9104"]\n        labels:\n          instance: IP address of machine B_stonedb\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"After mysqld_exporter and node_exporter are added, restart the Docker container to load the configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker restart 892d640f51b2\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Wait a while and view",(0,o.kt)("strong",{parentName:"li"}," State")," on the",(0,o.kt)("strong",{parentName:"li"}," Targets")," page of Prometheus. If the value for every metric is ",(0,o.kt)("strong",{parentName:"li"},"up"),", performance data is collected.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(78798).Z,width:"2240",height:"1174"})),(0,o.kt)("h2",{id:"step-4-deploy-grafana"},(0,o.kt)("strong",{parentName:"h2"},"Step 4. Deploy Grafana")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy Grafana in a Docker container.")),(0,o.kt)("p",null,"The method to deploy Grafana is the same as the method to deploy Prometheus. You also need to mount the data and configuration files. The command to deploy Grafana is similar to that used to deploy Prometheus."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name=grafana -p 13000:3000 grafana/grafana\ndocker cp c2bfbdd0827f:/etc/grafana/grafana.ini /home/zsp/grafana/config/\ndocker cp c2bfbdd0827f:/var/lib/grafana/ /home/zsp/grafana/data/\ntree\n.\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 grafana.ini\n\u2514\u2500\u2500 data\n    \u2514\u2500\u2500 grafana\n        \u251c\u2500\u2500 alerting\n        \u2502\xa0\xa0 \u2514\u2500\u2500 1\n        \u2502\xa0\xa0     \u2514\u2500\u2500 __default__.tmpl\n        \u251c\u2500\u2500 csv\n        \u251c\u2500\u2500 grafana.db\n        \u251c\u2500\u2500 plugins\n        \u2514\u2500\u2500 png\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start Grafana.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d  --restart=always --name=grafana  -p 13000:3000  \\\n-v /home/zsp/grafana/config/grafana.ini:/etc/grafana/grafana.ini  \\\n-v /home/zsp/grafana/data/grafana/:/var/lib/grafana/    grafana/grafana\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Visit ",(0,o.kt)("inlineCode",{parentName:"li"},"http://<IP address of machine A>:13000")," and log in to Grafana. The default username and password are ",(0,o.kt)("strong",{parentName:"li"},"admin")," and ",(0,o.kt)("strong",{parentName:"li"},"admin"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(6404).Z,width:"1125",height:"590"})),(0,o.kt)("h2",{id:"step-5-configure-grafana-to-display-monitoring-data-from-prometheus"},(0,o.kt)("strong",{parentName:"h2"},"Step 5. Configure Grafana to display monitoring data from Prometheus")),(0,o.kt)("h3",{id:"configure-the-prometheus-data-source"},(0,o.kt)("strong",{parentName:"h3"},"Configure the Prometheus data source")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to Grafana. In the left-side navigation pane, choose ",(0,o.kt)("strong",{parentName:"li"},"Configuration")," > ",(0,o.kt)("strong",{parentName:"li"},"Data sources"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(67136).Z,width:"1125",height:"590"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Time series databases")," area, click ",(0,o.kt)("strong",{parentName:"li"},"Prometheus"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(77268).Z,width:"2240",height:"1174"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"URL")," and ",(0,o.kt)("strong",{parentName:"li"},"Scrape Interval"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(70486).Z,width:"2240",height:"1174"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save & test"),'. If message "Data source is working" is displayed, the data source is configured.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(26165).Z,width:"2083",height:"512"})),(0,o.kt)("h3",{id:"configure-grafana-monitoring-dashboards"},(0,o.kt)("strong",{parentName:"h3"},"Configure Grafana Monitoring Dashboards")),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Configuration")," page, choose ",(0,o.kt)("strong",{parentName:"p"},"+")," > ",(0,o.kt)("strong",{parentName:"p"},"Import"),", and import the official dashboards. You can customize dashboards based on your needs.\nLink to obtaining official dashboards: ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/"},"https://grafana.com/grafana/dashboards/"),"\nThe following procedure shows how to configure dashboard 11074 to monitor node_exporter."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the left-side navigation pane, choose ",(0,o.kt)("strong",{parentName:"li"},"+")," > ",(0,o.kt)("strong",{parentName:"li"},"Import"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(1784).Z,width:"2240",height:"1174"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Import via Grafana.com")," text box, enter the dashboard ID and click",(0,o.kt)("strong",{parentName:"li"}," Load"),".  In this example, the dashboard ID is 11074 which is a dashboard for monitoring OSs.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(18631).Z,width:"1985",height:"811"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"VictoriaMetrics")," drop-down list, select ",(0,o.kt)("strong",{parentName:"li"},"Prometheus"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image.png",src:a(96383).Z,width:"1125",height:"590"}),"\nThe procedure to configure the monitoring dashboard for a MySQL database is similar to the previous example. "),(0,o.kt)("p",null,"Following are some example screenshots after the monitoring dashboard 1132 is configured."),(0,o.kt)("p",null,"Screenshot 1:\n",(0,o.kt)("img",{alt:"image.png",src:a(75965).Z,width:"1125",height:"590"}),"\nScreenshot 2:\n",(0,o.kt)("img",{alt:"image.png",src:a(64146).Z,width:"1125",height:"590"})))}c.isMDXComponent=!0},6404:function(e,t,a){t.Z=a.p+"assets/images/Grafana-852904716c1613128ede307c4a3480cc.png"},1784:function(e,t,a){t.Z=a.p+"assets/images/Grafana_import1-4bd395b93278cb52e40af1f8f44d27dd.png"},18631:function(e,t,a){t.Z=a.p+"assets/images/Grafana_import2-cddf105a844975cbe79a436d176f7ec5.png"},96383:function(e,t,a){t.Z=a.p+"assets/images/Grafana_import3-6b954db5d95cf525654442816143d349.png"},75965:function(e,t,a){t.Z=a.p+"assets/images/Mysql_setting1-c9a909d895ff73cac6e1ec1f28baf259.png"},64146:function(e,t,a){t.Z=a.p+"assets/images/Mysql_setting2-31bb4c699f6aafe26fe8698f8fc2e827.png"},86063:function(e,t,a){t.Z=a.p+"assets/images/Prometheus-b3a844fcb06939b1f3fda1aede4a1aea.png"},78798:function(e,t,a){t.Z=a.p+"assets/images/Prometheus_Status_Targets-15b584fbf5a8b02fdce9dd573b46682a.png"},77268:function(e,t,a){t.Z=a.p+"assets/images/Prometheus_add_data_source-633a200cab2d22224fb248bc1ea80a0e.png"},67136:function(e,t,a){t.Z=a.p+"assets/images/Prometheus_data_source-8d1413d03ac23406bc8d294d02825beb.png"},26165:function(e,t,a){t.Z=a.p+"assets/images/Prometheus_save-c965fd60de0bd754a8d7b0c7ce8b62d8.png"},70486:function(e,t,a){t.Z=a.p+"assets/images/Prometheus_settings-e543d5e77bffb6756008a72d498298ca.png"}}]);