import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.08972a8d.js";var t="/minyu-blog/ElasticSearch/01/\u89E3\u538B\u76EE\u5F55.png",l="/minyu-blog/ElasticSearch/01/\u542F\u52A8\u6210\u529F\u9A8C\u8BC1.png",i="/minyu-blog/ElasticSearch/01/\u5B89\u88C5-1.png",p="/minyu-blog/ElasticSearch/01/linux-es\u542F\u52A8\u6210\u529F.png",o="/minyu-blog/ElasticSearch/01/\u6D4F\u89C8\u5668\u8BBF\u95EE\u6D4B\u8BD5-1.png",c="/minyu-blog/ElasticSearch/01/\u6D4F\u89C8\u5668\u8BBF\u95EE\u6D4B\u8BD5-2.png",u="/minyu-blog/ElasticSearch/01/linux\u95EE\u9898max-file-1.png",r="/minyu-blog/ElasticSearch/01/linux\u95EE\u9898-max-threadnum-1.png",d="/minyu-blog/ElasticSearch/01/\u5B89\u88C5\u95EE\u9898-max-virtual-1.png",m="/minyu-blog/ElasticSearch/01/kibana\u5B89\u88C5.png",k="/minyu-blog/ElasticSearch/01/kibana\u5B89\u88C5-linux.png",v="/minyu-blog/ElasticSearch/01/head.png";const b={},h=e('<h1 id="elasticsearch\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u5B89\u88C5" aria-hidden="true">#</a> Elasticsearch\u5B89\u88C5</h1><h2 id="\u5B89\u88C5\u548C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u548C\u914D\u7F6E" aria-hidden="true">#</a> \u5B89\u88C5\u548C\u914D\u7F6E</h2><h3 id="_1\u3001windows\u5B89\u88C5-\u96C6\u7FA43\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1\u3001windows\u5B89\u88C5-\u96C6\u7FA43\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 1\u3001windows\u5B89\u88C5\uFF08\u96C6\u7FA43\u4E2A\u8282\u70B9\uFF09</h3><ol><li><p>\u4E0B\u8F7D\u94FE\u63A5https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.4-windows-x86_64.zip</p></li><li><p>\u89E3\u538B\u7F29\u540E\u590D\u5236\u4E09\u4EFD\u3002</p><p><img src="'+t+`" alt=""></p></li><li><p>config\u76EE\u5F55\u4E0B\uFF0C\u4F9D\u6B21\u4FEE\u6539elasticsearch.yml\u6587\u4EF6</p><ul><li><p>node01</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node01
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9201</span> <span class="token comment">#restful\u7AEF\u53E3</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9301</span> <span class="token comment">#es\u5404\u8282\u70B9\u95F4\u901A\u4FE1\u7AEF\u53E3</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>node02</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node02
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9202</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9302</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>node03</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node03
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9203</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9303</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u4F9D\u6B21\u542F\u52A8</p><p>\u6570\u636E\u76EE\u5F55\u5728</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>node01<span class="token operator">-</span>elasticsearch<span class="token operator">-</span><span class="token number">7.17</span><span class="token number">.4</span>\\data\\
node02<span class="token operator">-</span>elasticsearch<span class="token operator">-</span><span class="token number">7.17</span><span class="token number">.4</span>\\data\\
node03<span class="token operator">-</span>elasticsearch<span class="token operator">-</span><span class="token number">7.17</span><span class="token number">.4</span>\\data\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F9D\u6B21\u542F\u52A8node01\u3001node02\u3001node03 bin\u76EE\u5F55\u4E0Belasticsearch.bat\u6587\u4EF6</p><p><img src="`+l+`" alt=""></p></li><li><p>jdk\u73AF\u5883\u4F9D\u8D56\u95EE\u9898</p><p>Elasticsearch \u662F\u4F7F\u7528 java \u5F00\u53D1\u7684\uFF0C\u4E14 7.8 \u7248\u672C\u7684 ES \u9700\u8981 JDK \u7248\u672C 1.8 \u4EE5\u4E0A\uFF0C\u9ED8\u8BA4\u5B89\u88C5 \u5305\u5E26\u6709 jdk \u73AF\u5883\uFF0C\u5982\u679C\u7CFB\u7EDF\u914D\u7F6E JAVA_HOME\uFF0C\u90A3\u4E48\u4F7F\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u7684 JDK\uFF0C\u5982\u679C\u6CA1\u6709\u914D \u7F6E\u4F7F\u7528\u81EA\u5E26\u7684 JDK\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528\u7CFB\u7EDF\u914D\u7F6E\u7684 JDK\u3002</p></li><li><p>\u5185\u5B58\u95EE\u9898</p><p>\u53CC\u51FB\u542F\u52A8\u7A97\u53E3\u95EA\u9000\uFF0C\u901A\u8FC7\u8DEF\u5F84\u8BBF\u95EE\u8FFD\u8E2A\u9519\u8BEF\uFF0C\u5982\u679C\u662F\u201C\u7A7A\u95F4\u4E0D\u8DB3\u201D\uFF0C\u8BF7\u4FEE\u6539 config/jvm.options \u914D\u7F6E\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u8BBE\u7F6E JVM \u521D\u59CB\u5185\u5B58\u4E3A 1G\u3002\u6B64\u503C\u53EF\u4EE5\u8BBE\u7F6E\u4E0E-Xmx \u76F8\u540C\uFF0C\u4EE5\u907F\u514D\u6BCF\u6B21\u5783\u573E\u56DE\u6536\u5B8C\u6210\u540E JVM \u91CD\u65B0\u5206\u914D\u5185\u5B58</span>
<span class="token comment"># Xms represents the initial size of total heap space</span>
<span class="token comment"># \u8BBE\u7F6E JVM \u6700\u5927\u53EF\u7528\u5185\u5B58\u4E3A 1G</span>
<span class="token comment"># Xmx represents the maximum size of total heap space</span>
<span class="token punctuation">-</span>Xms1g
<span class="token punctuation">-</span>Xmx1g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2\u3001linux\u5B89\u88C5-\u96C6\u7FA43\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2\u3001linux\u5B89\u88C5-\u96C6\u7FA43\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 2\u3001Linux\u5B89\u88C5\uFF08\u96C6\u7FA43\u4E2A\u8282\u70B9\uFF09</h3><h4 id="_1\u3001\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5</h4><ol><li><p>\u51C6\u5907\u4E09\u53F0Linux\u865A\u62DF\u673A</p></li><li><p>\u4E0B\u8F7D\u94FE\u63A5\uFF1Ahttps://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.5-linux-x86_64.tar.gz</p></li><li><p>\u89E3\u538B\u7F29</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#\u8FDB\u5165\u76EE\u5F55\u540E\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u540Eftp\u4E0A\u4F20\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5Linux\u4E2D\u4E0B\u8F7D</span>
<span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.5-linux-x86_64.tar.gz
<span class="token comment">#\u89E3\u538B\u7F29</span>
<span class="token function">tar</span> -xzf elasticsearch-7.17.5-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="image-20220731194052444"></p></li><li><p>config\u76EE\u5F55\u4E0B\uFF0C\u4FEE\u6539elasticsearch.yml\u6587\u4EF6</p><ul><li><p>node01</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node01
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 192.168.152.131
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9201</span> <span class="token comment">#restful\u7AEF\u53E3</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.152.131:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;192.168.152.133:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.152.134:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9301</span> <span class="token comment">#es\u5404\u8282\u70B9\u95F4\u901A\u4FE1\u7AEF\u53E3</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>node02</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node02
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 192.168.152.133
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9202</span> <span class="token comment">#restful\u7AEF\u53E3</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.152.131:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;192.168.152.133:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.152.134:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9302</span> <span class="token comment">#es\u5404\u8282\u70B9\u95F4\u901A\u4FE1\u7AEF\u53E3</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>node03</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node03
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 192.168.152.131
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9203</span> <span class="token comment">#restful\u7AEF\u53E3</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;192.168.152.131:9301&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;192.168.152.133:9302&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;192.168.152.134:9303&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9303</span> <span class="token comment">#es\u5404\u8282\u70B9\u95F4\u901A\u4FE1\u7AEF\u53E3</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node01&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u521B\u5EFA\u975Eroot\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u521B\u5EFA\u975Eroot\u8D26\u6237\uFF0Ces\u53EA\u80FD\u5728\u975Eroot\u8D26\u6237\u4E0B</span>
adduser esuser
<span class="token function">passwd</span> esuser
<span class="token comment">#\u7ED9\u8D26\u6237\u8D4B\u4E88\u76EE\u5F55\u6743\u9650</span>
<span class="token function">chown</span> -R elastic /usr/local/soft
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u521B\u5EFA\u7684\u975Eroot\u7528\u6237\u767B\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/soft/elasticsearch-7.17.5/bin/
<span class="token comment">#\u542F\u52A8</span>
./elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p></li></ol><h4 id="_2\u3001\u8BBF\u95EE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u8BBF\u95EE\u6D4B\u8BD5" aria-hidden="true">#</a> 2\u3001\u8BBF\u95EE\u6D4B\u8BD5</h4><ol><li><p>\u6D4F\u89C8\u5668\u8BBF\u95EE</p><ul><li>\u5355\u8282\u70B9</li></ul><p><img src="'+o+'" alt=""></p><ul><li><p>\u96C6\u7FA4\u8282\u70B9</p><p><img src="'+c+`" alt=""></p></li></ul></li><li><p>\u5982\u679C\u8BBF\u95EE\u4E0D\u4E86\uFF0C\u5173\u95ED\u9632\u706B\u5899</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#&gt;&gt;&gt;\u5173\u95ED\u9632\u706B\u5899</span>
<span class="token comment">#\u505C\u6B62firewall</span>
systemctl stop firewalld.service
<span class="token comment">#\u7981\u6B62firewall\u5F00\u673A\u542F\u52A8</span>
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_3\u3001\u666E\u904D\u9047\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u666E\u904D\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> 3\u3001\u666E\u904D\u9047\u5230\u7684\u95EE\u9898</h4><ol><li><p>max file descriptors [4096] for elasticsearch process is too low, increase to at least [65535]</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/security/limits.conf
\u5728\u6700\u540E\u589E\u52A0\u914D\u7F6E
* soft nofile <span class="token number">65536</span>
* hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u6587\u4EF6\u4FEE\u6539\u540E\u9700\u8981\u91CD\u65B0\u767B\u5F55\u7528\u6237\uFF0C\u624D\u4F1A\u751F\u6548</p><p><img src="`+u+`" alt="image-20210821203225401"></p></li><li><p>max number of threads [3795] for user [esuser] is too low, increase to at least [4096]</p><p>\u6700\u5927\u7EBF\u7A0B\u6570\u4E0D\u591F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span>  /etc/security/limits.conf
\u5728\u6700\u540E\u589E\u52A0\u914D\u7F6E
* soft nproc <span class="token number">4096</span>
* hard nproc <span class="token number">4096</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20210821203941397"></p></li><li><p>max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sysctl.conf
\u5728\u6700\u540E\u589E\u52A0\u914D\u7F6E
vm.max_map_count<span class="token operator">=</span><span class="token number">262144</span>
\u7136\u540E\u6267\u884C\u547D\u4EE4/sbin/sysctl -p \u7ACB\u5373\u751F\u6548
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20210821211157577"></p></li></ol><h3 id="_3\u3001kibana\u5B89\u88C5-windows" tabindex="-1"><a class="header-anchor" href="#_3\u3001kibana\u5B89\u88C5-windows" aria-hidden="true">#</a> 3\u3001kibana\u5B89\u88C5\uFF08windows\uFF09</h3><ol><li><p>\u4E0B\u8F7D\u94FE\u63A5https://artifacts.elastic.co/downloads/kibana/kibana-7.17.4-windows-x86_64.zip</p></li><li><p>\u89E3\u538B\u7F29\u540E\u8FDB\u5165config\u76EE\u5F55\u4E0B\uFF0C\u4FEE\u6539kibana.yml\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9201&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8</p><p>bin\u76EE\u5F55\u4E0B\u6267\u884Ckibana.bat\u6587\u4EF6\uFF0C\u542F\u52A8\u6210\u529F\u4E4B\u540E\u8BBF\u95EEhttp://localhost:5601</p><p><img src="`+m+`" alt=""></p></li></ol><h3 id="_4\u3001kibana\u5B89\u88C5-linux" tabindex="-1"><a class="header-anchor" href="#_4\u3001kibana\u5B89\u88C5-linux" aria-hidden="true">#</a> 4\u3001kibana\u5B89\u88C5\uFF08Linux\uFF09</h3><ol><li><p>\u4E0B\u8F7D\u94FE\u63A5\uFF1Ahttps://artifacts.elastic.co/downloads/kibana/kibana-7.17.5-linux-x86_64.tar.gz</p></li><li><p>\u89E3\u538B\u7F29</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u521B\u5EFA\u76EE\u5F55</span>
<span class="token function">mkdir</span> /usr/local/soft
<span class="token comment">#\u8FDB\u5165\u76EE\u5F55\u540E\uFF0C\u53EF\u4EE5\u4E0B\u8F7D\u540Eftp\u4E0A\u4F20\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5Linux\u4E2D\u4E0B\u8F7D</span>
<span class="token function">wget</span> https://artifacts.elastic.co/downloads/kibana/kibana-7.17.5-linux-x86_64.tar.gz
<span class="token comment">#\u89E3\u538B\u7F29</span>
<span class="token function">tar</span> -xvf kibana-7.17.5-linux-x86_64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u5165config\u76EE\u5F55\u4E0B\u4FEE\u6539kibana.yml\u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server.port</span><span class="token punctuation">:</span> <span class="token number">5601</span>
<span class="token key atrule">server.host</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.152.131&quot;</span> <span class="token comment">#\u5F53\u524DLinux\u7684ip</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://192.168.152.131:9201&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u975Eroot\u7528\u6237\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#root\u7528\u6237\u8D4B\u6743\u9650
chown -R elastic /usr/local/soft
#\u975Eroot\u7528\u6237bin\u76EE\u5F55\u4E0B\u6267\u884C
./kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p></li></ol><h3 id="_5\u3001head\u63D2\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_5\u3001head\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> 5\u3001head\u63D2\u4EF6\u5B89\u88C5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone git://github.com/mobz/elasticsearch-head.git
cd elasticsearch-head
npm install
npm run start
open http://localhost:9100/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u65E0\u6CD5\u53D1\u73B0ES\u8282\u70B9\uFF0C\u5C1D\u8BD5\u5728ES\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u5141\u8BB8\u8DE8\u57DF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5\u6210\u529F\u6548\u679C\u56FE\uFF1A</p><p><img src="`+v+`" alt="head"></p><h3 id="_6\u3001\u5E38\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5E38\u7528\u914D\u7F6E" aria-hidden="true">#</a> 6\u3001\u5E38\u7528\u914D\u7F6E</h3><ul><li><p>Cluster&amp;Node</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">cluster.name</span><span class="token punctuation">:</span>
	\u914D\u7F6Eelasticsearch\u7684\u96C6\u7FA4\u540D\u79F0\uFF0C\u9ED8\u8BA4\u662Felasticsearch\u3002\u5EFA\u8BAE\u4FEE\u6539\u6210\u4E00\u4E2A\u6709\u610F\u4E49\u7684\u540D\u79F0\u3002
<span class="token key atrule">node.name</span><span class="token punctuation">:</span>
	\u8282\u70B9\u540D\uFF0C\u901A\u5E38\u4E00\u53F0\u7269\u7406\u670D\u52A1\u5668\u5C31\u662F\u4E00\u4E2A\u8282\u70B9\uFF0Ces\u4F1A\u9ED8\u8BA4\u968F\u673A\u6307\u5B9A\u4E00\u4E2A\u540D\u5B57\uFF0C\u5EFA\u8BAE\u6307\u5B9A\u4E00\u4E2A\u6709\u610F\u4E49\u7684\u540D\u79F0\uFF0C\u65B9\u4FBF\u7BA1\u7406\u3002
	\u4E00\u4E2A\u6216\u591A\u4E2A\u8282\u70B9\u7EC4\u6210\u4E00\u4E2Acluster\u96C6\u7FA4\uFF0C\u96C6\u7FA4\u662F\u4E00\u4E2A\u903B\u8F91\u7684\u6982\u5FF5\uFF0C\u8282\u70B9\u662F\u7269\u7406\u6982\u5FF5\u3002
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> 
	\u6307\u5B9A\u8BE5\u8282\u70B9\u662F\u5426\u6709\u8D44\u683C\u88AB\u9009\u4E3E\u6210\u4E3Amaster\u7ED3\u70B9\uFF0C\u9ED8\u8BA4\u662Ftrue\uFF0C\u5982\u679C\u539F\u6765\u7684master\u5B95\u673A\u4F1A\u91CD\u65B0\u9009\u4E3E\u65B0\u7684master\u3002
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> 
	\u6307\u5B9A\u8BE5\u8282\u70B9\u662F\u5426\u5B58\u50A8\u7D22\u5F15\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E3Atrue\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Paths</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">path.conf</span><span class="token punctuation">:</span>
	\u8BBE\u7F6E\u914D\u7F6E\u6587\u4EF6\u7684\u5B58\u50A8\u8DEF\u5F84\uFF0Ctar\u6216zip\u5305\u5B89\u88C5\u9ED8\u8BA4\u5728es\u6839\u76EE\u5F55\u4E0B\u7684config\u6587\u4EF6\u5939\uFF0Crpm\u5B89\u88C5\u9ED8\u8BA4\u5728/etc/ elasticsearch
<span class="token key atrule">path.data</span><span class="token punctuation">:</span>
	\u8BBE\u7F6E\u7D22\u5F15\u6570\u636E\u7684\u5B58\u50A8\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u662Fes\u6839\u76EE\u5F55\u4E0B\u7684data\u6587\u4EF6\u5939\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u591A\u4E2A\u5B58\u50A8\u8DEF\u5F84\uFF0C\u7528\u9017\u53F7\u9694\u5F00\u3002
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span>
	\u8BBE\u7F6E\u65E5\u5FD7\u6587\u4EF6\u7684\u5B58\u50A8\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u662Fes\u6839\u76EE\u5F55\u4E0B\u7684logs\u6587\u4EF6\u5939
<span class="token key atrule">path.plugins</span><span class="token punctuation">:</span> 
	\u8BBE\u7F6E\u63D2\u4EF6\u7684\u5B58\u653E\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u662Fes\u6839\u76EE\u5F55\u4E0B\u7684plugins\u6587\u4EF6\u5939
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Memory</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
	\u8BBE\u7F6E\u4E3Atrue\u53EF\u4EE5\u9501\u4F4FES\u4F7F\u7528\u7684\u5185\u5B58\uFF0C\u907F\u514D\u5185\u5B58\u4E0Eswap\u5206\u533A\u4EA4\u6362\u6570\u636E\u3002swap\u5206\u533A\u901F\u5EA6\u4F1A\u975E\u5E38\u6162\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Network</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">network.host</span><span class="token punctuation">:</span> 
	\u8BBE\u7F6E\u7ED1\u5B9A\u4E3B\u673A\u7684ip\u5730\u5740\uFF0C\u8BBE\u7F6E\u4E3A0.0.0.0\u8868\u793A\u7ED1\u5B9A\u4EFB\u4F55ip\uFF0C\u5141\u8BB8\u5916\u7F51\u8BBF\u95EE\uFF0C\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u5177\u4F53\u7684ip\u3002
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
	\u8BBE\u7F6E\u5BF9\u5916\u670D\u52A1\u7684http\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A9200\u3002
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>  
    \u96C6\u7FA4\u7ED3\u70B9\u4E4B\u95F4\u901A\u4FE1\u7AEF\u53E3
<span class="token key atrule">http.cors.enabled</span><span class="token punctuation">:</span> 
    \u662F\u5426\u5141\u8BB8\u8DE8\u57DF
<span class="token key atrule">http.cors.allow-origin</span><span class="token punctuation">:</span> 
    <span class="token string">&quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Discovery</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span>
    \u914D\u7F6E\u6240\u6709node.master\u4E3Atrue\u7684\u8282\u70B9\u3002
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> 
    \u8BBE\u7F6E\u521D\u59CBmaster\u662F\u54EA\u4E2A\u8282\u70B9\uFF0C\u542F\u52A8\u670D\u52A1\u540E\u53EF\u4EE5\u81EA\u52A8\u751F\u6548\uFF0C\u7701\u7565\u9009\u4E3E\u8FC7\u7A0B\uFF0C\u63A8\u8350\u914D\u7F6E\u96C6\u7FA4\u4E2D\u7684\u4EC5master\u8282\u70B9
<span class="token key atrule">discovery.zen.ping.unicast.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;host1:port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;host2:port&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">]</span>
	\u8BBE\u7F6E\u96C6\u7FA4\u4E2Dmaster\u8282\u70B9\u7684\u521D\u59CB\u5217\u8868\u3002
<span class="token key atrule">discovery.zen.ping.timeout</span><span class="token punctuation">:</span> 3s
	\u8BBE\u7F6EES\u81EA\u52A8\u53D1\u73B0\u8282\u70B9\u8FDE\u63A5\u8D85\u65F6\u7684\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A3\u79D2\uFF0C\u5982\u679C\u7F51\u7EDC\u5EF6\u8FDF\u9AD8\u53EF\u8BBE\u7F6E\u5927\u4E9B\u3002
<span class="token key atrule">discovery.zen.minimum_master_nodes</span><span class="token punctuation">:</span>
	\u4E3B\u7ED3\u70B9\u6570\u91CF\u7684\u6700\u5C11\u503C <span class="token punctuation">,</span>\u6B64\u503C\u7684\u516C\u5F0F\u4E3A\uFF1A(master_eligible_nodes / 2) + 1 \uFF0C\u6BD4\u5982\uFF1A\u67093\u4E2A\u7B26\u5408\u8981\u6C42\u7684\u4E3B\u7ED3\u70B9\uFF0C\u90A3\u4E48\u8FD9\u91CC\u8981\u8BBE\u7F6E\u4E3A2\u3002
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> 
	\u5355\u673A\u5141\u8BB8\u7684\u6700\u5927\u5B58\u50A8\u7ED3\u70B9\u6570\uFF0C\u901A\u5E38\u5355\u673A\u542F\u52A8\u4E00\u4E2A\u7ED3\u70B9\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A1\uFF0C\u5F00\u53D1\u73AF\u5883\u5982\u679C\u5355\u673A\u542F\u52A8\u591A\u4E2A\u8282\u70B9\u53EF\u8BBE\u7F6E\u5927\u4E8E1\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,23),g=[h];function y(_,x){return s(),a("div",null,g)}var w=n(b,[["render",y],["__file","01.\u5B89\u88C5.html.vue"]]);export{w as default};
