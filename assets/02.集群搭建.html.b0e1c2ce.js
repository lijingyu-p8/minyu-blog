import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.d56de547.js";var l="/minyu-blog/RocketMQ/02/\u9ED8\u8BA4\u542F\u52A8\u53C2\u6570-1.png",i="/minyu-blog/RocketMQ/02/\u4FEE\u6539\u540E\u542F\u52A8\u53C2\u6570-1.png",o="/minyu-blog/RocketMQ/02/\u542F\u52A8nameserver-1.png",r="/minyu-blog/RocketMQ/02/\u542F\u52A8broker-1.png",p="/minyu-blog/RocketMQ/02/\u63A7\u5236\u53F0\u4E0B\u8F7D-1.png",c="/minyu-blog/RocketMQ/02/maven\u6253\u5305\u754C\u9762-1.png",t="/minyu-blog/RocketMQ/02/\u63A7\u5236\u53F0-1.png",m="/minyu-blog/RocketMQ/02/\u96C6\u7FA4\u914D\u7F6E-1.png",d="/minyu-blog/RocketMQ/02/\u4E24\u4E3B\u4E24\u4ECE-1.png",v="/minyu-blog/RocketMQ/02/\u96C6\u7FA4\u642D\u5EFA\u6210\u529F-1.png",u="/minyu-blog/RocketMQ/02/\u81EA\u52A8\u9009\u4E3E-1.png";const b={},k=e(`<h1 id="_02-rocketmq\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_02-rocketmq\u5B89\u88C5" aria-hidden="true">#</a> 02.RocketMQ\u5B89\u88C5</h1><h2 id="\u4E00\u3001\u5355\u673A\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5355\u673A\u5B89\u88C5" aria-hidden="true">#</a> \u4E00\u3001\u5355\u673A\u5B89\u88C5</h2><ul><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1\u3001\u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#2\u3001\u8FDB\u5165\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> /usr/local/soft
<span class="token comment">#3\u3001\u4E0B\u8F7D</span>
<span class="token function">wget</span> https://archive.apache.org/dist/rocketmq/4.9.0/rocketmq-all-4.9.0-bin-release.zip
<span class="token comment">#4\u3001\u89E3\u538B</span>
<span class="token function">unzip</span> rocketmq-all-4.9.0-bin-release.zip
<span class="token comment">#5\u3001\u91CD\u547D\u540D</span>
<span class="token function">mv</span> rocketmq-all-4.9.0-bin-release rocketmq-4.9.0
<span class="token comment">#6\u3001\u8FDB\u5165\u76EE\u5F55</span>
<span class="token builtin class-name">cd</span> rocketmq-4.9.0
<span class="token comment">#7.\u4FEE\u6539\u521D\u59CB\u5185\u5B58</span>
<span class="token function">vim</span> bin/runserver.sh
<span class="token comment">#\u5C06\u865A\u62DF\u673A\u914D\u7F6E\u51CF\u5C0F</span>
-Xms512m -Xmx512m -Xmn128m
<span class="token function">vim</span> bin/runbroker.sh
<span class="token comment">#\u5C06\u865A\u62DF\u673A\u914D\u7F6E\u51CF\u5C0F</span>
-Xms512m -Xmx512m -Xmn128m
<span class="token comment">#8\u3001\u542F\u52A8nameserver</span>
bin/mqnamesrv
<span class="token comment">#9\u3001\u542F\u52A8broker</span>
bin/mqbroker -n localhost:9876 <span class="token comment">#\u8FDE\u63A5nameserver 9876</span>
<span class="token comment">#10\u3001\u5173\u95ED</span>
bin/mqshutdown nameserver  bin/mqshutdown namesrv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539\u521D\u59CB\u5185\u5B58</p><p>\u9ED8\u8BA4\u7684\u542F\u52A8\u53C2\u6570\u865A\u62DF\u673A\u5185\u5B58\u8BBE\u7F6E\u8FC7\u5927\uFF0C\u4E0D\u9002\u5408\u5E73\u65F6demo\u7EC3\u4E60</p><p><img src="`+l+'" alt=""></p></li><li><p>\u4FEE\u6539\u540E</p><p><img src="'+i+'" alt=""></p></li><li><p>\u542F\u52A8nameserver</p><p><img src="'+o+'" alt=""></p></li><li><p>\u542F\u52A8broker</p><p><img src="'+r+'" alt=""></p></li></ul><h2 id="\u4E8C\u3001dashboard\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001dashboard\u5B89\u88C5" aria-hidden="true">#</a> \u4E8C\u3001dashboard\u5B89\u88C5</h2><ul><li><p>\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://github.com/apache/rocketmq-externals/releases</p><p><img src="'+p+`" alt=""></p></li><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#1.\u521B\u5EFA\u8DEF\u5F84\uFF0C\u5C06zip\u62F7\u8D1D\u5230\u76EE\u5F55\u4E0B</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#2.\u89E3\u538B\u7F29</span>
<span class="token function">unzip</span> rocketmq-externals-rocketmq-console-1.0.0.zip
<span class="token comment">#3.\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u7AEF\u53E3\uFF0C\u6539\u4E3A\u975E8080\u3002\u56E0\u4E3A8080\u592A\u5E38\u7528\u4E86\uFF0C\u62C5\u5FC3\u4F1A\u51B2\u7A81</span>
src/main/resources application.properties
<span class="token comment">#4.rocketmq-console\u76EE\u5F55\u4E0B\u6267\u884Cmaven\u6253\u5305</span>
mvn clean package -Dmaven.test.skip<span class="token operator">=</span>true <span class="token comment">#\u6267\u884C\u7F16\u8BD1</span>
<span class="token comment">#5.\u8FDB\u5165\u5230target\u76EE\u5F55\u4E0B\u627E\u7F16\u8BD1\u597D\u7684jar\u5305</span>
rocketmq-console-ng-1.0.1.jar
<span class="token comment">#6.\u79FB\u52A8\u5230soft\u4E0B</span>
<span class="token function">mv</span> rocketmq-console-ng-1.0.0.jar /usr/local/soft
<span class="token comment">#7.\u542F\u52A8</span>
java -jar rocketmq-console-ng-1.0.1.jar --rocketmq.config.namesrvAddr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:9876
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>maven\u6253\u5305\u754C\u9762</p><p><img src="`+c+'" alt=""></p></li><li><p>\u542F\u52A8\u6210\u529F</p><p><img src="'+t+'" alt=""></p></li></ul><h2 id="\u4E09\u3001\u96C6\u7FA4\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u96C6\u7FA4\u642D\u5EFA" aria-hidden="true">#</a> \u4E09\u3001\u96C6\u7FA4\u642D\u5EFA</h2><ol><li><p>rocketMq\u63D0\u4F9B\u4E86\u96C6\u7FA4\u642D\u5EFA\u7684\u53C2\u8003\u914D\u7F6E\uFF0C\u76EE\u5F55\u5728rocketmq-4.9.0/conf</p><p><img src="'+m+'" alt=""></p><p>\u9ED8\u8BA4\u63D0\u4F9B\u7684\u662F\u4E24\u4E3B\u4E24\u4ECE\u3002\u4E0D\u8FC7\u5982\u679C\u60F3\u8981\u9AD8\u53EF\u7528\uFF0C\u81EA\u52A8\u9009\u4E3E\u3002\u4E00\u822C\u90FD\u8981\u662F\u4E00\u4E3B\u642D\u914D\u4E24\u4E2A\u4ECE\u3002\u800C\u4E0D\u662F\u4E00\u4E3B\u642D\u914D\u4E00\u4E2A\u4ECE\u3002</p><p><img src="'+d+`" alt=""></p></li><li><p>dledger</p><p>rockerMq\u9ED8\u8BA4\u662F\u4E0D\u652F\u6301\u4E3B\u8282\u70B9\u5B95\u673A\uFF0C\u81EA\u52A8\u9009\u4E3E\u7684\u3002\u5F15\u5165dledger\u63D2\u4EF6\uFF0C\u53EF\u5B9E\u73B0\u81EA\u52A8\u9009\u4E3E\u529F\u80FD\u3002</p></li><li><p>\u914D\u7F6E\u4FEE\u6539</p><p>\u4E3B\u8282\u70B9\u4FEE\u6539broker-a.properties</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6574\u4F53\u96C6\u7FA4\u7684\u540D\u79F0\uFF0C\u5982\u679C\u662F\u4E24\u4E2A\u4E3B\uFF0C\u90A3\u4E48\u4E24\u4E2A\u4E3B\u7684\u96C6\u7FA4\u540D\u79F0\u9700\u8981\u76F8\u540C</span>
<span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>DefaultCluster
<span class="token comment">#broker\u540D\u79F0\uFF0C\u4E00\u4E3B\u4E24\u4ECE\u642D\u5EFA\u9AD8\u53EF\u7528\u96C6\u7FA4\uFF0CbrokerName\u9700\u8981\u76F8\u540C</span>
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token comment">#\u89D2\u8272\uFF0Cmaster\u3001slaver</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SYNC_MASTER
<span class="token comment">#\u5237\u7248\u673A\u5236\uFF0C\u540C\u6B65\u3001\u5F02\u6B65</span>
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>ASYNC_FLUSH
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span><span class="token number">192.168</span>.73.40:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.41:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.42:9876<span class="token punctuation">;</span>
<span class="token comment"># dleger</span>
<span class="token comment">#\u542F\u7528</span>
enableDLegerCommitLog <span class="token operator">=</span> <span class="token boolean">true</span>
dLegerGroup <span class="token operator">=</span> broker-a
<span class="token comment"># \u5144\u5F1F\u8282\u70B9\u7684\u5730\u5740</span>
dLegerPeers <span class="token operator">=</span> n0-192.168.73.40:40911<span class="token punctuation">;</span>n1-192.168.73.41:40911<span class="token punctuation">;</span>n2-192.168.73.42:40911
<span class="token comment">#\u81EA\u5DF1\u7684id</span>
dLegerSelfId <span class="token operator">=</span> n0
<span class="token comment">#\u53D1\u9001\u6D88\u606F\u7684\u7EBF\u7A0B\u6570\u91CF</span>
sendMessageThreadPoolNums <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E24\u4E2A\u4ECE\u8282\u70B9\u4FEE\u6539broker-a-s.properties</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>DefaultCluster
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SLAVE
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>ASYNC_FLUSH
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span><span class="token number">192.168</span>.73.40:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.41:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.42:9876<span class="token punctuation">;</span>
<span class="token comment"># dleger</span>
<span class="token comment">#\u542F\u7528</span>
enableDLegerCommitLog <span class="token operator">=</span> <span class="token boolean">true</span>
dLegerGroup <span class="token operator">=</span> broker-a
<span class="token comment"># \u5144\u5F1F\u8282\u70B9\u7684\u5730\u5740</span>
dLegerPeers <span class="token operator">=</span> n0-192.168.73.40:40911<span class="token punctuation">;</span>n1-192.168.73.41:40911<span class="token punctuation">;</span>n2-192.168.73.42:40911
<span class="token comment">#\u81EA\u5DF1\u7684id</span>
dLegerSelfId <span class="token operator">=</span> n1
<span class="token comment">#\u53D1\u9001\u6D88\u606F\u7684\u7EBF\u7A0B\u6570\u91CF</span>
sendMessageThreadPoolNums <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u522B\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E3B\u8282\u70B9\uFF0Cbin\u76EE\u5F55\u4E0B</span>
./mqbroker -c <span class="token punctuation">..</span>/conf/2m-2s-sync/broker-a.properties
<span class="token comment">#\u4ECE\u8282\u70B9\uFF0Cbin\u76EE\u5F55\u4E0B</span>
./mqbroker -c <span class="token punctuation">..</span>/conf/2m-2s-sync/broker-a-s.properties
<span class="token comment">#\u5206\u522B\u542F\u52A8nameserver</span>
<span class="token comment">#\u67E5\u770B\u63A7\u5236\u53F0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u96C6\u7FA4\u642D\u5EFA\u6548\u679C</p><p><img src="`+v+'" alt=""></p></li><li><p>\u4E3B\u8282\u70B9\u5B95\u673A\u3002\u89E6\u53D1\u81EA\u52A8\u9009\u4E3E</p><p><img src="'+u+`" alt=""></p></li></ol><h2 id="\u56DB\u3001\u96C6\u7FA4\u914D\u7F6E\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u96C6\u7FA4\u914D\u7F6E\u8BE6\u89E3" aria-hidden="true">#</a> \u56DB\u3001\u96C6\u7FA4\u914D\u7F6E\u8BE6\u89E3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6307\u5B9A\u6574\u4E2Abroker\u96C6\u7FA4\u7684\u540D\u79F0\uFF0C\u6216\u8005\u8BF4\u662FRocketMQ\u96C6\u7FA4\u7684\u540D\u79F0</span>
<span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>rocket-MS
<span class="token comment">#\u6307\u5B9Amaster-slave\u96C6\u7FA4\u7684\u540D\u79F0\u3002\u4E00\u4E2ARocketMQ\u96C6\u7FA4\u53EF\u4EE5\u5305\u542B\u591A\u4E2Amaster-slave\u96C6\u7FA4</span>
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token comment">#0 \u8868\u793A Master\uFF0C&gt;0 \u8868\u793A Slave</span>
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#nameServer\u5730\u5740\uFF0C\u5206\u53F7\u5206\u5272</span>
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span>nameserver1:9876<span class="token punctuation">;</span>nameserver2:9876
<span class="token comment">#\u9ED8\u8BA4\u4E3A\u65B0\u5EFATopic\u6240\u521B\u5EFA\u7684\u961F\u5217\u6570</span>
<span class="token assign-left variable">defaultTopicQueueNums</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token comment">#\u662F\u5426\u5141\u8BB8 Broker \u81EA\u52A8\u521B\u5EFATopic\uFF0C\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4E2D\u5173\u95ED</span>
<span class="token assign-left variable">autoCreateTopicEnable</span><span class="token operator">=</span>true
<span class="token comment">#\u662F\u5426\u5141\u8BB8 Broker \u81EA\u52A8\u521B\u5EFA\u8BA2\u9605\u7EC4\uFF0C\u5EFA\u8BAE\u751F\u4EA7\u73AF\u5883\u4E2D\u5173\u95ED</span>
<span class="token assign-left variable">autoCreateSubscriptionGroup</span><span class="token operator">=</span>true
<span class="token comment">#Broker\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u5373Broker\u4E0Eproducer\u4E0Econsumer\u901A\u4FE1\u7684\u7AEF\u53E3</span>
<span class="token assign-left variable">listenPort</span><span class="token operator">=</span><span class="token number">10911</span>
<span class="token comment">#HA\u9AD8\u53EF\u7528\u76D1\u542C\u7AEF\u53E3\uFF0C\u5373Master\u4E0ESlave\u95F4\u901A\u4FE1\u7684\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u503C\u4E3AlistenPort+1</span>
<span class="token assign-left variable">haListenPort</span><span class="token operator">=</span><span class="token number">10912</span>
<span class="token comment">#\u6307\u5B9A\u5220\u9664\u6D88\u606F\u5B58\u50A8\u8FC7\u671F\u6587\u4EF6\u7684\u65F6\u95F4\u4E3A\u51CC\u66684\u70B9</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token comment">#\u6307\u5B9A\u672A\u53D1\u751F\u66F4\u65B0\u7684\u6D88\u606F\u5B58\u50A8\u6587\u4EF6\u7684\u4FDD\u7559\u65F6\u957F\u4E3A48\u5C0F\u65F6\uFF0C48\u5C0F\u65F6\u540E\u8FC7\u671F\uFF0C\u5C06\u4F1A\u88AB\u5220\u9664</span>
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token comment">#\u6307\u5B9AcommitLog\u76EE\u5F55\u4E2D\u6BCF\u4E2A\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u9ED8\u8BA41G</span>
<span class="token assign-left variable">mapedFileSizeCommitLog</span><span class="token operator">=</span><span class="token number">1073741824</span>
<span class="token comment">#\u6307\u5B9AConsumeQueue\u7684\u6BCF\u4E2ATopic\u7684\u6BCF\u4E2AQueue\u6587\u4EF6\u4E2D\u53EF\u4EE5\u5B58\u653E\u7684\u6D88\u606F\u6570\u91CF\uFF0C\u9ED8\u8BA430w\u6761</span>
<span class="token assign-left variable">mapedFileSizeConsumeQueue</span><span class="token operator">=</span><span class="token number">300000</span>
<span class="token comment">#\u5728\u6E05\u9664\u8FC7\u671F\u6587\u4EF6\u65F6\uFF0C\u5982\u679C\u8BE5\u6587\u4EF6\u88AB\u5176\u4ED6\u7EBF\u7A0B\u6240\u5360\u7528\uFF08\u5F15\u7528\u6570\u5927\u4E8E0\uFF0C\u6BD4\u5982\u8BFB\u53D6\u6D88\u606F\uFF09\uFF0C\u6B64\u65F6\u4F1A\u963B\u6B62</span>
\u6B64\u6B21\u5220\u9664\u4EFB\u52A1\uFF0C\u540C\u65F6\u5728\u7B2C\u4E00\u6B21\u8BD5\u56FE\u5220\u9664\u8BE5\u6587\u4EF6\u65F6\u8BB0\u5F55\u5F53\u524D\u65F6\u95F4\u6233\u3002\u8BE5\u5C5E\u6027\u5219\u8868\u793A\u4ECE\u7B2C\u4E00\u6B21\u62D2\u7EDD\u5220\u9664
\u540E\u5F00\u59CB\u8BA1\u65F6\uFF0C\u8BE5\u6587\u4EF6\u6700\u591A\u53EF\u4EE5\u4FDD\u7559\u7684\u65F6\u957F\u3002\u5728\u6B64\u65F6\u95F4\u5185\u82E5\u5F15\u7528\u6570\u4ECD\u4E0D\u4E3A0\uFF0C\u5219\u5220\u9664\u4ECD\u4F1A\u88AB\u62D2\u7EDD\u3002\u4E0D\u8FC7
\u65F6\u95F4\u5230\u540E\uFF0C\u6587\u4EF6\u5C06\u88AB\u5F3A\u5236\u5220\u9664
<span class="token assign-left variable">destroyMapedFileIntervalForcibly</span><span class="token operator">=</span><span class="token number">120000</span>
<span class="token comment">#\u6307\u5B9Acommitlog\u3001consumequeue\u6240\u5728\u78C1\u76D8\u5206\u533A\u7684\u6700\u5927\u4F7F\u7528\u7387\uFF0C\u8D85\u8FC7\u8BE5\u503C\uFF0C\u5219\u9700\u7ACB\u5373\u6E05\u9664\u8FC7\u671F\u6587</span>
\u4EF6 di
<span class="token assign-left variable">skMaxUsedSpaceRatio</span><span class="token operator">=</span><span class="token number">88</span>
<span class="token comment">#\u6307\u5B9Astore\u76EE\u5F55\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u5728\u5F53\u524D\u7528\u6237\u4E3B\u76EE\u5F55\u4E2D</span>
<span class="token assign-left variable">storePathRootDir</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store
<span class="token comment">#commitLog\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token assign-left variable">storePathCommitLog</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/commitlog
<span class="token comment">#consumeueue\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token assign-left variable">storePathConsumeQueue</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/consumequeue
<span class="token comment">#index\u76EE\u5F55\u8DEF\u5F84</span>
<span class="token assign-left variable">storePathIndex</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/index
<span class="token comment">#checkpoint\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token assign-left variable">storeCheckpoint</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/checkpoint
<span class="token comment">#abort\u6587\u4EF6\u8DEF\u5F84</span>
<span class="token assign-left variable">abortFile</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/abort
<span class="token comment">#\u6307\u5B9A\u6D88\u606F\u7684\u6700\u5927\u5927\u5C0F</span>
<span class="token assign-left variable">maxMessageSize</span><span class="token operator">=</span><span class="token number">65536</span>
<span class="token comment">#Broker\u7684\u89D2\u8272</span>
<span class="token comment"># - ASYNC_MASTER \u5F02\u6B65\u590D\u5236Master</span>
<span class="token comment"># - SYNC_MASTER \u540C\u6B65\u53CC\u5199Master</span>
<span class="token comment"># - SLAVE</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SYNC_MASTER
<span class="token comment">#\u5237\u76D8\u7B56\u7565</span>
<span class="token comment"># - ASYNC_FLUSH \u5F02\u6B65\u5237\u76D8</span>
<span class="token comment"># - SYNC_FLUSH \u540C\u6B65\u5237\u76D8</span>
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>SYNC_FLUSH
<span class="token comment">#\u53D1\u6D88\u606F\u7EBF\u7A0B\u6C60\u6570\u91CF</span>
<span class="token assign-left variable">sendMessageThreadPoolNums</span><span class="token operator">=</span><span class="token number">128</span>
<span class="token comment">#\u62C9\u6D88\u606F\u7EBF\u7A0B\u6C60\u6570\u91CF</span>
<span class="token assign-left variable">pullMessageThreadPoolNums</span><span class="token operator">=</span><span class="token number">128</span>
<span class="token comment">#\u5F3A\u5236\u6307\u5B9A\u672C\u673AIP\uFF0C\u9700\u8981\u6839\u636E\u6BCF\u53F0\u673A\u5668\u8FDB\u884C\u4FEE\u6539\u3002\u5B98\u65B9\u4ECB\u7ECD\u53EF\u4E3A\u7A7A\uFF0C\u7CFB\u7EDF\u9ED8\u8BA4\u81EA\u52A8\u8BC6\u522B\uFF0C\u4F46\u591A\u7F51\u5361\u65F6IP\u5730\u5740\u53EF\u80FD\u8BFB\u53D6\u9519\u8BEF</span>
<span class="token assign-left variable">brokerIP1</span><span class="token operator">=</span><span class="token number">192.168</span>.3.105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),g=[k];function h(f,_){return n(),a("div",null,g)}var S=s(b,[["render",h],["__file","02.\u96C6\u7FA4\u642D\u5EFA.html.vue"]]);export{S as default};
