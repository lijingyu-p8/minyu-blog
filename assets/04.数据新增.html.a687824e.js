import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.f751154e.js";var t="/minyu-blog/ElasticSearch/04/\u5F02\u5E38.png";const o={},p=e(`<h1 id="elasticsearch\u6570\u636E\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u6570\u636E\u65B0\u589E" aria-hidden="true">#</a> Elasticsearch\u6570\u636E\u65B0\u589E</h1><h2 id="\u4E00\u3001\u6570\u636E\u65B0\u589E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u65B0\u589E" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u65B0\u589E</h2><p>\u521B\u5EFA\u6570\u636E\u65F6\uFF0C\u6570\u636E\u8981\u4E3Ajson\u683C\u5F0F\u3002_doc\u4EE3\u8868type\uFF0C\u9ED8\u8BA4\u4E3A__doc\uFF0C7.0\u4E2D\u5DF2\u7ECF\u4E0D\u63D0\u5021\u4F7F\u7528type\uFF0C8.0\u4E4B\u540E\u4F1A\u5254\u9664\u3002</p><p>\u5F53\u4E0D\u6307\u5B9Aid\u65F6\uFF0C\u5FC5\u987B\u4E3Apost\u8BF7\u6C42\uFF0CES\u4F1A\u751F\u6210\u9ED8\u8BA4\u7684id\u3002\u5F53\u6307\u5B9Aid\uFF08\u793A\u4F8B8888\uFF09\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u7528put\u8BF7\u6C42\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>#\u81EA\u52A8\u751F\u6210id
POST product/_doc
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AAA xiaomi phone&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shouji zhong de zhandouji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1199</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;xingjiabi&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fashao&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;buka&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
#\u6307\u5B9Aid
PUT product/_doc/<span class="token number">8888</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AAA xiaomi phone&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shouji zhong de zhandouji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1199</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;xingjiabi&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fashao&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;buka&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C\u3001\u5F3A\u5236\u521B\u5EFA-create" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5F3A\u5236\u521B\u5EFA-create" aria-hidden="true">#</a> \u4E8C\u3001\u5F3A\u5236\u521B\u5EFA_create</h2><p>\u4F7F\u7528_create\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u65E0\u6570\u636E\u624D\u4F1A\u521B\u5EFA\u6210\u529F\uFF0C\u5B58\u5728\u76F8\u540Cid\u6570\u636E\uFF0C\u4F1A\u629B\u5F02\u5E38\uFF0C\u521B\u5EFA\u5931\u8D25\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST product/_create/<span class="token number">11111</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AAA xiaomi phone&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shouji zhong de zhandouji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1199</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;xingjiabi&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;fashao&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;buka&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt=""></p>',9),i=[p];function c(u,l){return s(),a("div",null,i)}var v=n(o,[["render",c],["__file","04.\u6570\u636E\u65B0\u589E.html.vue"]]);export{v as default};
