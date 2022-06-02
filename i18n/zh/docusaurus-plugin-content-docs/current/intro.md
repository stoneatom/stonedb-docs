---
sidebar_position: 1
---

# StoneDB简介

StoneDB是由石原子科技公司自主设计、研发的国内首款基于MySQL内核打造的开源HTAP（Hybrid Transactional and Analytical Processing）融合型数据库，可实现与MySQL的无缝切换。StoneDB具备超高性能、金融级高可用、实时分析等特点，为用户提供一站式OLTP（Online Transactional Processing）、OLAP（Online Analytical Processing）、HTAP解决方案。
StoneDB高度兼容MySQL 5.6、5.7协议和MySQL生态等重要特性，支持MySQL常用的功能及语法，支持MySQL生态中的系统工具和客户端，如Navicat、Workbench、mysqldump、mydumper均适用于StoneDB。由于高度兼容MySQL，因此StoneDB的所有工作负载都可以继续使用MySQL数据库体系运行。
StoneDB专门针对OLAP应用程序进行了设计和优化，在常规x86服务器上支持百亿数据场景下进行高性能、多维度字段组合的复杂查询，相对比常规事务引擎，其查询速度提升了十倍以上。
StoneDB采用基于知识网格技术和列式存储引擎。该存储引擎为海量数据背景下OLAP应用而设计，通过列式存储数据、知识网格过滤、高效数据压缩等特性，为应用系统提供低成本和高性能的数据查询支持。
StoneDB具有以下特征：
- 海量数据背景：实测单机可以支持百亿+数据量的秒级查询。
- 复杂查询：支持任意字段组合的复杂聚合类查询。
- 数据库维护成本低：在没有专职运维人员的情况下，数据库性能依然稳定。
- 低存储成本：高压缩比的数据存储极大节省了磁盘空间，平均压缩比大于10:1，最高可以达到40:1。
- 迁移成本低：独立部署，无其它依赖，MySQL生态中的系统工具和客户端可直接在StoneDB上使用。
