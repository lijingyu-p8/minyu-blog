<template><div><h1 id="_02-rocketmq安装" tabindex="-1"><a class="header-anchor" href="#_02-rocketmq安装" aria-hidden="true">#</a> 02.RocketMQ安装</h1>
<h2 id="一、单机安装" tabindex="-1"><a class="header-anchor" href="#一、单机安装" aria-hidden="true">#</a> 一、单机安装</h2>
<ul>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#1、创建目录</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#2、进入目录</span>
<span class="token builtin class-name">cd</span> /usr/local/soft
<span class="token comment">#3、下载</span>
<span class="token function">wget</span> https://archive.apache.org/dist/rocketmq/4.9.0/rocketmq-all-4.9.0-bin-release.zip
<span class="token comment">#4、解压</span>
<span class="token function">unzip</span> rocketmq-all-4.9.0-bin-release.zip
<span class="token comment">#5、重命名</span>
<span class="token function">mv</span> rocketmq-all-4.9.0-bin-release rocketmq-4.9.0
<span class="token comment">#6、进入目录</span>
<span class="token builtin class-name">cd</span> rocketmq-4.9.0
<span class="token comment">#7.修改初始内存</span>
<span class="token function">vim</span> bin/runserver.sh
<span class="token comment">#将虚拟机配置减小</span>
-Xms512m -Xmx512m -Xmn128m
<span class="token function">vim</span> bin/runbroker.sh
<span class="token comment">#将虚拟机配置减小</span>
-Xms512m -Xmx512m -Xmn128m
<span class="token comment">#8、启动nameserver</span>
bin/mqnamesrv
<span class="token comment">#9、启动broker</span>
bin/mqbroker -n localhost:9876 <span class="token comment">#连接nameserver 9876</span>
<span class="token comment">#10、关闭</span>
bin/mqshutdown nameserver  bin/mqshutdown namesrv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改初始内存</p>
<p>默认的启动参数虚拟机内存设置过大，不适合平时demo练习</p>
<p><img src="/RocketMQ/02/默认启动参数-1.png" alt=""></p>
</li>
<li>
<p>修改后</p>
<p><img src="/RocketMQ/02/修改后启动参数-1.png" alt=""></p>
</li>
<li>
<p>启动nameserver</p>
<p><img src="/RocketMQ/02/启动nameserver-1.png" alt=""></p>
</li>
<li>
<p>启动broker</p>
<p><img src="/RocketMQ/02/启动broker-1.png" alt=""></p>
</li>
</ul>
<h2 id="二、dashboard安装" tabindex="-1"><a class="header-anchor" href="#二、dashboard安装" aria-hidden="true">#</a> 二、dashboard安装</h2>
<ul>
<li>
<p>下载地址：https://github.com/apache/rocketmq-externals/releases</p>
<p><img src="/RocketMQ/02/控制台下载-1.png" alt=""></p>
</li>
<li>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#1.创建路径，将zip拷贝到目录下</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#2.解压缩</span>
<span class="token function">unzip</span> rocketmq-externals-rocketmq-console-1.0.0.zip
<span class="token comment">#3.修改配置文件端口，改为非8080。因为8080太常用了，担心会冲突</span>
src/main/resources application.properties
<span class="token comment">#4.rocketmq-console目录下执行maven打包</span>
mvn clean package -Dmaven.test.skip<span class="token operator">=</span>true <span class="token comment">#执行编译</span>
<span class="token comment">#5.进入到target目录下找编译好的jar包</span>
rocketmq-console-ng-1.0.1.jar
<span class="token comment">#6.移动到soft下</span>
<span class="token function">mv</span> rocketmq-console-ng-1.0.0.jar /usr/local/soft
<span class="token comment">#7.启动</span>
java -jar rocketmq-console-ng-1.0.1.jar --rocketmq.config.namesrvAddr<span class="token operator">=</span><span class="token number">127.0</span>.0.1:9876
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>maven打包界面</p>
<p><img src="/RocketMQ/02/maven打包界面-1.png" alt=""></p>
</li>
<li>
<p>启动成功</p>
<p><img src="/RocketMQ/02/控制台-1.png" alt=""></p>
</li>
</ul>
<h2 id="三、集群搭建" tabindex="-1"><a class="header-anchor" href="#三、集群搭建" aria-hidden="true">#</a> 三、集群搭建</h2>
<ol>
<li>
<p>rocketMq提供了集群搭建的参考配置，目录在rocketmq-4.9.0/conf</p>
<p><img src="/RocketMQ/02/集群配置-1.png" alt=""></p>
<p>默认提供的是两主两从。不过如果想要高可用，自动选举。一般都要是一主搭配两个从。而不是一主搭配一个从。</p>
<p><img src="/RocketMQ/02/两主两从-1.png" alt=""></p>
</li>
<li>
<p>dledger</p>
<p>rockerMq默认是不支持主节点宕机，自动选举的。引入dledger插件，可实现自动选举功能。</p>
</li>
<li>
<p>配置修改</p>
<p>主节点修改broker-a.properties</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#整体集群的名称，如果是两个主，那么两个主的集群名称需要相同</span>
<span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>DefaultCluster
<span class="token comment">#broker名称，一主两从搭建高可用集群，brokerName需要相同</span>
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token comment">#角色，master、slaver</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SYNC_MASTER
<span class="token comment">#刷版机制，同步、异步</span>
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>ASYNC_FLUSH
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span><span class="token number">192.168</span>.73.40:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.41:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.42:9876<span class="token punctuation">;</span>
<span class="token comment"># dleger</span>
<span class="token comment">#启用</span>
enableDLegerCommitLog <span class="token operator">=</span> <span class="token boolean">true</span>
dLegerGroup <span class="token operator">=</span> broker-a
<span class="token comment"># 兄弟节点的地址</span>
dLegerPeers <span class="token operator">=</span> n0-192.168.73.40:40911<span class="token punctuation">;</span>n1-192.168.73.41:40911<span class="token punctuation">;</span>n2-192.168.73.42:40911
<span class="token comment">#自己的id</span>
dLegerSelfId <span class="token operator">=</span> n0
<span class="token comment">#发送消息的线程数量</span>
sendMessageThreadPoolNums <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个从节点修改broker-a-s.properties</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>DefaultCluster
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SLAVE
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>ASYNC_FLUSH
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span><span class="token number">192.168</span>.73.40:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.41:9876<span class="token punctuation">;</span><span class="token number">192.168</span>.73.42:9876<span class="token punctuation">;</span>
<span class="token comment"># dleger</span>
<span class="token comment">#启用</span>
enableDLegerCommitLog <span class="token operator">=</span> <span class="token boolean">true</span>
dLegerGroup <span class="token operator">=</span> broker-a
<span class="token comment"># 兄弟节点的地址</span>
dLegerPeers <span class="token operator">=</span> n0-192.168.73.40:40911<span class="token punctuation">;</span>n1-192.168.73.41:40911<span class="token punctuation">;</span>n2-192.168.73.42:40911
<span class="token comment">#自己的id</span>
dLegerSelfId <span class="token operator">=</span> n1
<span class="token comment">#发送消息的线程数量</span>
sendMessageThreadPoolNums <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分别启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#主节点，bin目录下</span>
./mqbroker -c <span class="token punctuation">..</span>/conf/2m-2s-sync/broker-a.properties
<span class="token comment">#从节点，bin目录下</span>
./mqbroker -c <span class="token punctuation">..</span>/conf/2m-2s-sync/broker-a-s.properties
<span class="token comment">#分别启动nameserver</span>
<span class="token comment">#查看控制台</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>集群搭建效果</p>
<p><img src="/RocketMQ/02/集群搭建成功-1.png" alt=""></p>
</li>
<li>
<p>主节点宕机。触发自动选举</p>
<p><img src="/RocketMQ/02/自动选举-1.png" alt=""></p>
</li>
</ol>
<h2 id="四、集群配置详解" tabindex="-1"><a class="header-anchor" href="#四、集群配置详解" aria-hidden="true">#</a> 四、集群配置详解</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#指定整个broker集群的名称，或者说是RocketMQ集群的名称</span>
<span class="token assign-left variable">brokerClusterName</span><span class="token operator">=</span>rocket-MS
<span class="token comment">#指定master-slave集群的名称。一个RocketMQ集群可以包含多个master-slave集群</span>
<span class="token assign-left variable">brokerName</span><span class="token operator">=</span>broker-a
<span class="token comment">#0 表示 Master，>0 表示 Slave</span>
<span class="token assign-left variable">brokerId</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#nameServer地址，分号分割</span>
<span class="token assign-left variable">namesrvAddr</span><span class="token operator">=</span>nameserver1:9876<span class="token punctuation">;</span>nameserver2:9876
<span class="token comment">#默认为新建Topic所创建的队列数</span>
<span class="token assign-left variable">defaultTopicQueueNums</span><span class="token operator">=</span><span class="token number">4</span>
<span class="token comment">#是否允许 Broker 自动创建Topic，建议生产环境中关闭</span>
<span class="token assign-left variable">autoCreateTopicEnable</span><span class="token operator">=</span>true
<span class="token comment">#是否允许 Broker 自动创建订阅组，建议生产环境中关闭</span>
<span class="token assign-left variable">autoCreateSubscriptionGroup</span><span class="token operator">=</span>true
<span class="token comment">#Broker对外提供服务的端口，即Broker与producer与consumer通信的端口</span>
<span class="token assign-left variable">listenPort</span><span class="token operator">=</span><span class="token number">10911</span>
<span class="token comment">#HA高可用监听端口，即Master与Slave间通信的端口，默认值为listenPort+1</span>
<span class="token assign-left variable">haListenPort</span><span class="token operator">=</span><span class="token number">10912</span>
<span class="token comment">#指定删除消息存储过期文件的时间为凌晨4点</span>
<span class="token assign-left variable">deleteWhen</span><span class="token operator">=</span>04
<span class="token comment">#指定未发生更新的消息存储文件的保留时长为48小时，48小时后过期，将会被删除</span>
<span class="token assign-left variable">fileReservedTime</span><span class="token operator">=</span><span class="token number">48</span>
<span class="token comment">#指定commitLog目录中每个文件的大小，默认1G</span>
<span class="token assign-left variable">mapedFileSizeCommitLog</span><span class="token operator">=</span><span class="token number">1073741824</span>
<span class="token comment">#指定ConsumeQueue的每个Topic的每个Queue文件中可以存放的消息数量，默认30w条</span>
<span class="token assign-left variable">mapedFileSizeConsumeQueue</span><span class="token operator">=</span><span class="token number">300000</span>
<span class="token comment">#在清除过期文件时，如果该文件被其他线程所占用（引用数大于0，比如读取消息），此时会阻止</span>
此次删除任务，同时在第一次试图删除该文件时记录当前时间戳。该属性则表示从第一次拒绝删除
后开始计时，该文件最多可以保留的时长。在此时间内若引用数仍不为0，则删除仍会被拒绝。不过
时间到后，文件将被强制删除
<span class="token assign-left variable">destroyMapedFileIntervalForcibly</span><span class="token operator">=</span><span class="token number">120000</span>
<span class="token comment">#指定commitlog、consumequeue所在磁盘分区的最大使用率，超过该值，则需立即清除过期文</span>
件 di
<span class="token assign-left variable">skMaxUsedSpaceRatio</span><span class="token operator">=</span><span class="token number">88</span>
<span class="token comment">#指定store目录的路径，默认在当前用户主目录中</span>
<span class="token assign-left variable">storePathRootDir</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store
<span class="token comment">#commitLog目录路径</span>
<span class="token assign-left variable">storePathCommitLog</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/commitlog
<span class="token comment">#consumeueue目录路径</span>
<span class="token assign-left variable">storePathConsumeQueue</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/consumequeue
<span class="token comment">#index目录路径</span>
<span class="token assign-left variable">storePathIndex</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/index
<span class="token comment">#checkpoint文件路径</span>
<span class="token assign-left variable">storeCheckpoint</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/checkpoint
<span class="token comment">#abort文件路径</span>
<span class="token assign-left variable">abortFile</span><span class="token operator">=</span>/usr/local/rocketmq-all-4.5.0/store/abort
<span class="token comment">#指定消息的最大大小</span>
<span class="token assign-left variable">maxMessageSize</span><span class="token operator">=</span><span class="token number">65536</span>
<span class="token comment">#Broker的角色</span>
<span class="token comment"># - ASYNC_MASTER 异步复制Master</span>
<span class="token comment"># - SYNC_MASTER 同步双写Master</span>
<span class="token comment"># - SLAVE</span>
<span class="token assign-left variable">brokerRole</span><span class="token operator">=</span>SYNC_MASTER
<span class="token comment">#刷盘策略</span>
<span class="token comment"># - ASYNC_FLUSH 异步刷盘</span>
<span class="token comment"># - SYNC_FLUSH 同步刷盘</span>
<span class="token assign-left variable">flushDiskType</span><span class="token operator">=</span>SYNC_FLUSH
<span class="token comment">#发消息线程池数量</span>
<span class="token assign-left variable">sendMessageThreadPoolNums</span><span class="token operator">=</span><span class="token number">128</span>
<span class="token comment">#拉消息线程池数量</span>
<span class="token assign-left variable">pullMessageThreadPoolNums</span><span class="token operator">=</span><span class="token number">128</span>
<span class="token comment">#强制指定本机IP，需要根据每台机器进行修改。官方介绍可为空，系统默认自动识别，但多网卡时IP地址可能读取错误</span>
<span class="token assign-left variable">brokerIP1</span><span class="token operator">=</span><span class="token number">192.168</span>.3.105
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
