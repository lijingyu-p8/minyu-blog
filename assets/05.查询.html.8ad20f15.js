import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.71e07f4f.js";var p="/minyu-blog/ElasticSearch/05/match_all.png",e="/minyu-blog/ElasticSearch/05/filter-1.png",o="/minyu-blog/ElasticSearch/05/range-1.png",i="/minyu-blog/ElasticSearch/05/\u6DF1\u5EA6\u5206\u9875.png",l="/minyu-blog/ElasticSearch/05/\u6EDA\u52A8\u67E5\u8BE2.png",u="/minyu-blog/ElasticSearch/05/aggs-1.png",c="/minyu-blog/ElasticSearch/05/aggs-2.png",r="/minyu-blog/ElasticSearch/05/aggs-order1.png",d="/minyu-blog/ElasticSearch/05/aggs-order2.png",v="/minyu-blog/ElasticSearch/05/aggs-global-1.png",k="/minyu-blog/ElasticSearch/05/histogram.png",q="/minyu-blog/ElasticSearch/05/date-histogram.png",m="/minyu-blog/ElasticSearch/05/\u6570\u503C-stats.png",b="/minyu-blog/ElasticSearch/05/string-stats.png",g="/minyu-blog/ElasticSearch/05/cardinality.png",y="/minyu-blog/ElasticSearch/05/filters-1.png",h="/minyu-blog/ElasticSearch/05/\u90BB\u63A5\u77E9\u9635.png",_="/minyu-blog/ElasticSearch/05/analyzer-1.png",x="/minyu-blog/ElasticSearch/05/IDF-1.png",f="/minyu-blog/ElasticSearch/05/multi-1.png",j="/minyu-blog/ElasticSearch/05/multi-2.png",E="/minyu-blog/ElasticSearch/05/cross-1.png",T="/minyu-blog/ElasticSearch/05/nested-1.png",z="/minyu-blog/ElasticSearch/05/high-light-.png";const G={},S=t(`<h1 id="_05-elasticsearch" tabindex="-1"><a class="header-anchor" href="#_05-elasticsearch" aria-hidden="true">#</a> 05.Elasticsearch</h1><h2 id="query-dsl" tabindex="-1"><a class="header-anchor" href="#query-dsl" aria-hidden="true">#</a> Query DSL</h2><h3 id="_1\u3001\u6307\u5B9Aid\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u6307\u5B9Aid\u67E5\u8BE2" aria-hidden="true">#</a> 1\u3001\u6307\u5B9Aid\u67E5\u8BE2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET product/_doc/8888
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2\u3001match-all" tabindex="-1"><a class="header-anchor" href="#_2\u3001match-all" aria-hidden="true">#</a> 2\u3001match_all</h3><ul><li><p>\u67E5\u8BE2\u6240\u6709</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET student/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }
}
# &quot;query&quot;\uFF1A\u8FD9\u91CC\u7684 query \u4EE3\u8868\u4E00\u4E2A\u67E5\u8BE2\u5BF9\u8C61\uFF0C\u91CC\u9762\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u67E5\u8BE2\u5C5E\u6027
# &quot;match_all&quot;\uFF1A\u67E5\u8BE2\u7C7B\u578B\uFF0C\u4F8B\u5982\uFF1A match_all(\u4EE3\u8868\u67E5\u8BE2\u6240\u6709)\uFF0C match\uFF0C term \uFF0C range \u7B49\u7B49
# {\u67E5\u8BE2\u6761\u4EF6}\uFF1A\u67E5\u8BE2\u6761\u4EF6\u4F1A\u6839\u636E\u7C7B\u578B\u7684\u4E0D\u540C\uFF0C\u5199\u6CD5\u4E5F\u6709\u5DEE\u5F02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20210807114649608"></p></li></ul><h3 id="_3\u3001match" tabindex="-1"><a class="header-anchor" href="#_3\u3001match" aria-hidden="true">#</a> 3\u3001match</h3><ul><li><p>\u6761\u4EF6\u5339\u914D\uFF0C\u5173\u952E\u8BCD\u4F1A\u88AB\u5206\u8BCD</p></li><li><p>\u7B80\u5355\u641C\u7D22</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET student/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zhangsan&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6307\u5B9A\u53C2\u6570</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET student/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;to be or not to be&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;and&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;zero_terms_query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span> 
        <span class="token property">&quot;fuzziness&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;auto_generate_synonyms_phrase_query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;standard&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>query: \u67E5\u8BE2\u7684\u5173\u952E\u8BCD</li><li>operator: match\u67E5\u8BE2\u3002\u5173\u952E\u8BCD\u662F\u4F1A\u88AB\u5206\u8BCD\uFF0C\u67E5\u8BE2\u7ED3\u679C\u662Fbool\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u662For\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E3Aand\uFF0C\u53EA\u6709\u5168\u90E8\u5206\u8BCD\u7ED3\u679C\u5339\u914D\u624D\u662F\u76EE\u6807\u6570\u636E\u3002</li><li>minimum_should_match: \u6700\u5C0F\u5339\u914D\u6570\u91CF\uFF0C\u9ED8\u8BA4\u662F1\uFF0C\u6BD4\u5982my name li \u5206\u8BCD\u540E\u662F\u4E09\u4E2A\u8BCD\uFF0C\u82E5\u8BBE\u7F6E\u4E3A2\uFF0C\u53EA\u6709\u5176\u4E2D\u4E24\u4E2A\u5339\u914D\u4E0A\u4E86\uFF0C\u624D\u7B97\u5339\u914D\u6210\u529F\u3002</li><li>zero_terms_query: \u96F6\u8BCD\u67E5\u8BE2\uFF0CES\u67E5\u8BE2\u9ED8\u8BA4\u662F\u4F1A\u5BF9\u65E0\u6548\u8BCD\u8FDB\u884C\u8FC7\u6EE4\u7684\uFF0Cis\u3001a\u3001he\u3001or\u8FD9\u7C7B\u8BCD\u4F1A\u88AB\u8FC7\u6EE4\u6389\u3002\u8BBE\u7F6E\u4E3A&quot;all&quot;\u5219\u4E0D\u4F1A\u88AB\u8FC7\u6EE4\uFF0C\u6BD4\u5982\u67E5\u8BE2&quot;to be or not to be&quot;\uFF0C\u5C31\u4E0D\u80FD\u88AB\u8FC7\u6EE4\uFF0C\u5426\u5219\u6CA1\u6709\u7ED3\u679C\u3002</li><li>fuzziness: \u6A21\u7CCA\u67E5\u8BE2\u6700\u5927\u8BEF\u5DEE\uFF0C\u5E76\u975E\u8D8A\u5927\u8D8A\u597D\uFF0C\u6700\u5927\u8BEF\u5DEE\u8D8A\u5927\uFF0C\u5BFC\u81F4\u53EC\u56DE\u7387\u9AD8\uFF0C\u4F46\u662F\u7ED3\u679C\u4E0D\u51C6\u786E\u3002</li><li>auto_generate_synonyms_phrase_query: \u542F\u7528\u540C\u4E49\u8BCD\uFF0C\u6BD4\u5982like love \u53EF\u4EE5\u7406\u89E3\u4E3A\u540C\u4E49\u8BCD\uFF0CES\u67E5\u8BE2\u65F6\uFF0C\u9ED8\u8BA4\u65F6\u5F00\u542F\u7684\u3002</li><li>analyzer: \u6307\u5B9A\u5206\u8BCD\u5668\uFF0C\u9ED8\u8BA4\u7684\u662Fstandard\u3002</li></ol></li><li></li></ul><h3 id="_4\u3001term" tabindex="-1"><a class="header-anchor" href="#_4\u3001term" aria-hidden="true">#</a> 4\u3001term</h3><ul><li><p>\u5173\u952E\u8BCD\u4E0D\u4F1A\u88AB\u5206\u8BCD\uFF0C\u5F53\u4F5C\u4E00\u4E2A\u5B8C\u6574\u7684\u77ED\u8BED\u8FDB\u884C\u5339\u914D</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xiaomi phone&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F1A\u4F7F\u7528\u5B8C\u6574\u7684\u201Cxiaomi phone\u201D\u8FDB\u884C\u6570\u636E\u5339\u914D\u3002\u6240\u4EE5\u6709\u53EF\u80FD\u5BFC\u81F4\u4F1A\u641C\u7D22\u4E0D\u5230\u5339\u914D\u7684\u8BB0\u5F55\u3002</p></li><li></li></ul><h3 id="_5\u3001terms" tabindex="-1"><a class="header-anchor" href="#_5\u3001terms" aria-hidden="true">#</a> 5\u3001terms</h3><ul><li><p>\u548Cterm\u67E5\u8BE2\u6548\u679C\u76F8\u540C\uFF0C\u4F46\u662F\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u503C\u3002\u53EA\u8981\u5176\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u6587\u6863\u5373\u5339\u914D\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;nfc&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ul><h3 id="_6\u3001-source" tabindex="-1"><a class="header-anchor" href="#_6\u3001-source" aria-hidden="true">#</a> 6\u3001_source</h3><ul><li><p>\u6307\u5B9A\u67E5\u8BE2\u5B57\u6BB5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Ces\u67E5\u8BE2\u7ED3\u679C\u4F1A\u628A_source\u5305\u542B\u7684\u6240\u6709\u5B57\u6BB5\u90FD\u8FD4\u56DE\u3002\u53EF\u4EE5\u901A\u8FC7&quot;__source&quot;\u6307\u5B9A\u8FD4\u56DE\u7684\u5B57\u6BB5\u3002</p></li><li><p>includes\uFF1A\u6765\u6307\u5B9A\u60F3\u8981\u663E\u793A\u7684\u5B57\u6BB5</p></li><li><p>excludes\uFF1A\u6765\u6307\u5B9A\u4E0D\u60F3\u8981\u663E\u793A\u7684\u5B57\u6BB5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET product/_search
{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;name&quot;: &quot;xiaomi phone&quot;
    }
  },
  &quot;_source&quot;: [&quot;name&quot;,&quot;price&quot;], 
  &quot;_source&quot;: {
    &quot;excludes&quot;: [&quot;desc&quot;,&quot;price&quot;],
    &quot;includes&quot;: [&quot;desc&quot;,&quot;price&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li></li></ul><h3 id="_6\u3001prefix" tabindex="-1"><a class="header-anchor" href="#_6\u3001prefix" aria-hidden="true">#</a> 6\u3001prefix</h3><h3 id="_7\u3001sort\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#_7\u3001sort\u6392\u5E8F" aria-hidden="true">#</a> 7\u3001sort\u6392\u5E8F</h3><ul><li><p>\u6392\u5E8F\uFF0Cdesc\u3001asc</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u7EC4\u5408\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u67E5\u8BE2" aria-hidden="true">#</a> \u7EC4\u5408\u67E5\u8BE2</h2><ul><li><p>bool\u628A\u5404\u79CD\u5176\u5B83\u67E5\u8BE2\u901A\u8FC7must\uFF08\u5FC5\u987B \uFF09\u3001 must_not\uFF08\u5FC5\u987B\u4E0D\uFF09\u3001 should\uFF08\u5E94\u8BE5\uFF09\u7684\u65B9\u5F0F\u8FDB\u884C\u7EC4\u5408\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;must_not&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;minimum_should_match&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>must</p><p>\u5FC5\u987B\u5305\u542B\uFF0C\u8FD4\u56DE\u7684\u6587\u6863\u5FC5\u987B\u6EE1\u8DB3must\u5B50\u53E5\u7684\u6761\u4EF6\uFF0C\u5E76\u4E14\u53C2\u4E0E\u8BA1\u7B97\u5206\u503C\u3002</p></li><li><p>must_not</p><p>\u5FC5\u987B\u4E0D\u5305\u542B\uFF0C\u8FD4\u56DE\u7684\u6587\u6863\u5FC5\u987B\u4E0D\u6EE1\u8DB3must_not\u5B9A\u4E49\u7684\u6761\u4EF6\u3002\u4E0D\u8BA1\u7B97\u76F8\u5173\u5EA6\u5206\u6570\u3002</p></li><li><p>should</p><p>\u53EF\u80FD\u5305\u542B\uFF0C\u8FD4\u56DE\u7684\u6587\u6863\u53EF\u80FD\u6EE1\u8DB3should\u5B50\u53E5\u7684\u6761\u4EF6\u3002\u5728\u4E00\u4E2ABool\u67E5\u8BE2\u4E2D\uFF0C\u5982\u679C\u6CA1\u6709must\u6216\u8005filter\uFF0C\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2Ashould\u5B50\u53E5\uFF0C\u90A3\u4E48\u53EA\u8981\u6EE1\u8DB3\u4E00\u4E2A\u5C31\u53EF\u4EE5\u8FD4\u56DE\u3002</p></li><li><p>filter</p><p>\u8FC7\u6EE4\uFF0C\u8FD4\u56DE\u7684\u6587\u6863\u5FC5\u987B\u6EE1\u8DB3filter\u5B50\u53E5\u7684\u6761\u4EF6\u3002\u4F46\u662F\u4E0D\u4F1A\u50CFMust\u4E00\u6837\u53C2\u4E0E\u8BA1\u7B97\u5206\u503C\u3002filter\u4E0D\u4F1A\u8BA1\u7B97score\uFF0C\u7ED3\u679C\u662F\u4F1A\u88AB\u7F13\u5B58\u7684\u3002</p></li><li><p>minimum_should_match</p><p>minimum_should_match\u53C2\u6570\u5B9A\u4E49\u4E86\u81F3\u5C11\u6EE1\u8DB3\u51E0\u4E2A\u5B50\u53E5\u3002\u7C7B\u4F3C\u4E8Esql\u4E2D\u7684in()\uFF0C\u8BA1\u7B97\u76F8\u5173\u5EA6\u5206\u6570\u3002</p></li><li><p>boost</p><p>\u641C\u7D22\u6743\u91CD</p></li><li><p>filter\u7F13\u5B58\u95EE\u9898</p><p><img src="`+e+'" alt="img"></p><ol><li>filter\u53EA\u6709\u5F53\u6267\u884C\u5230\u4E00\u5B9A\u6B21\u6570\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u5BF9\u70ED\u6570\u636E\u8FDB\u884C\u7F13\u5B58\uFF0C\u7F13\u5B58\u7684\u65F6\u5019\u4F1A\u4F7F\u7528\u4E8C\u8FDB\u5236\u6570\u7EC4\u7684\u5F62\u5F0F\u8FDB\u884C\u7F13\u5B58\uFF0C\u6BCF\u6761doc\u4F1A\u5BF9\u5E940\u30011\uFF0C1\u4EE3\u8868\u5339\u914D\uFF0C0\u4EE3\u8868\u4E0D\u5339\u914D\u3002</li><li>filer\u4E2D\u4FDD\u5B58\u7684\u662F\u5339\u914D\u7ED3\u679C\uFF0C\u6240\u4EE5\u641C\u7D22\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5F97\u5230\u7ED3\u679C\u3002</li><li>\u6267\u884Cquery\u7684\u65F6\u5019\uFF0Cfilter\u4E00\u822C\u4F1A\u5728query\u4E4B\u524D\u8FDB\u884C\u6267\u884C\uFF0C\u8FC7\u6EE4\u7ED3\u679C\uFF0C\u4E5F\u53EF\u4EE5\u63D0\u9AD8query\u67E5\u8BE2\u901F\u5EA6\u3002</li><li>filter\u4E0D\u4F1A\u8BA1\u7B97\u76F8\u5173\u5EA6\u5206\u6570\u3002\u6548\u7387\u4E5F\u4F1A\u6BD4query\u9AD8\u3002</li><li>\u5F53\u5143\u6570\u636E\uFF08\u539F\u59CB\u6570\u636E\uFF09\u66F4\u65B0\u7684\u65F6\u5019\uFF0Ccache\u4E5F\u4F1A\u66F4\u65B0\u3002</li></ol></li></ul><h2 id="\u8303\u56F4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8303\u56F4\u67E5\u8BE2" aria-hidden="true">#</a> \u8303\u56F4\u67E5\u8BE2</h2><ul><li><p>\u67E5\u8BE2\u627E\u51FA\u90A3\u4E9B\u843D\u5728\u6307\u5B9A\u533A\u95F4\u5185\u7684\u6570\u5B57\u6216\u8005\u65F6\u95F4\u3002 range \u67E5\u8BE2\u5141\u8BB8\u4EE5\u4E0B\u5B57\u7B26</p><p><img src="'+o+`" alt=""></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;range&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;gte&quot;</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;lte&quot;</span><span class="token operator">:</span> <span class="token number">4000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u5206\u9875\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u9875\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u9875\u67E5\u8BE2</h2><ul><li><p>from\uFF1A\u5F53\u524D\u9875\u7684\u8D77\u59CB\u7D22\u5F15\uFF0C\u9ED8\u8BA4\u4ECE 0 \u5F00\u59CB\u3002 from = (pageNum - 1) * size</p></li><li><p>size\uFF1A\u6BCF\u9875\u663E\u793A\u591A\u5C11\u6761</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET product/_search
{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;from&quot;: 3,
  &quot;size&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Deep pageing\u6DF1\u5EA6\u5206\u9875\u95EE\u9898</p><p>1.\u5F53\u6570\u636E\u8D85\u8FC71W\uFF0C\u4E0D\u8981\u4F7F\u7528</p><p>2.\u8FD4\u56DE\u7ED3\u679C\u4E0D\u8981\u8D85\u8FC71000\u4E2A\uFF0C500\u4EE5\u4E0B\u4E3A\u5B9C</p><p>3.\u5C3D\u91CF\u907F\u514D\u6DF1\u5EA6\u5206\u9875\u67E5\u8BE2</p><p>4.\u4F7F\u7528\u6E38\u6807\u67E5\u8BE2Scroll search\uFF08\u53EA\u80FD\u4E0B\u4E00\u9875\uFF0C\u6CA1\u529E\u6CD5\u4E0A\u4E00\u9875\uFF0C\u4E0D\u9002\u5408\u5B9E\u65F6\u67E5\u8BE2\uFF09</p><p><img src="`+i+`" alt="img"></p><p>\u6570\u636E\u5206\u6563\u5728\u4E0D\u540C\u7684\u5206\u7247\u4E2D\uFF0C\u5F53\u5206\u9875\u8981\u67E5\u8BE21-500\u7684\u6570\u636E\u65F6\uFF0C\u6BCF\u4E2A\u5206\u7247\u90FD\u8981\u67E5\u51FA500\u4E2A\u6570\u636E\uFF0C\u603B\u5171\u662F2500\uFF0C\u7136\u540E\u518D\u6574\u4F53\u8FDB\u884C\u67E5\u8BE2\uFF0C\u53D61-500\u3002\u6D89\u53CA\u5230\u6570\u636E\u7684\u805A\u5408\u3002\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u7279\u522B\u591A\u3002\u5982\u679C\u5206\u9875\u6570\u91CF\u8F83\u5C11\uFF0C\u8FD8\u53EF\u4EE5\uFF0C\u8FD4\u56DE\u7ED3\u679C\u5982\u679C\u592A\u591A\uFF0C\u5F71\u54CD\u8F83\u5927\u3002</p><p>\u4F7F\u7528scrollSearch \u6EDA\u52A8\u641C\u7D22\uFF0C\u6BCF\u6B21\u6267\u884C\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2Aid\u3002\u67E5\u8BE2\u7684\u65F6\u5019\uFF0C\u4F7F\u7528id\u8FDB\u884C\u67E5\u8BE2\uFF0C\u5C31\u4F1A\u67E5\u4E0B\u4E00\u9875\uFF0C\u7F3A\u70B9\u662F\u65E0\u6CD5\u67E5\u8BE2\u4E0A\u4E00\u9875\u3002</p></li><li><p>\u6E38\u6807\u6EDA\u52A8\u67E5\u8BE2</p><p>\u76F8\u5F53\u4E8Emysql\u4E2D\u751F\u6210\u5FEB\u7167\u7684\u65B9\u5F0F,\u6240\u4EE5\u5982\u679C\u5728\u6E38\u6807\u67E5\u8BE2\u671F\u95F4\u6709\u589E\u5220\u6539\u64CD\u4F5C,\u662F\u83B7\u53D6\u4E0D\u5230\u6700\u65B0\u7684\u6570\u636E\u7684.\u5728\u8FC7\u671F\u65F6\u95F4\u5185,\u4E4B\u540E\u7684\u67E5\u8BE2\u7684scroll_id\u662F\u4E0D\u53D8\u7684.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search?scroll=1m <span class="token comment">//\u8FC7\u671F\u65F6\u95F4\u4E3A1\u5206\u949F</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

GET _search/scroll
<span class="token punctuation">{</span>
  <span class="token property">&quot;scroll&quot;</span><span class="token operator">:</span><span class="token string">&quot;1m&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scroll_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u7B2C\u4E00\u6B21\u67E5\u8BE2\u8FD4\u56DE\u7684_scroll_id&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u7ED3\u679C</p><p><img src="`+l+`" alt="image-20210808182901155"></p></li><li></li></ul><h2 id="\u6A21\u7CCA\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6A21\u7CCA\u67E5\u8BE2" aria-hidden="true">#</a> \u6A21\u7CCA\u67E5\u8BE2</h2><ul><li><p>\u8FD4\u56DE\u5305\u542B\u4E0E\u641C\u7D22\u5B57\u8BCD\u76F8\u4F3C\u7684\u5B57\u8BCD\u7684\u6587\u6863\u3002\u7F16\u8F91\u8DDD\u79BB\u662F\u5C06\u4E00\u4E2A\u672F\u8BED\u8F6C\u6362\u4E3A\u53E6\u4E00\u4E2A\u672F\u8BED\u6240\u9700\u7684\u4E00\u4E2A\u5B57\u7B26\u66F4\u6539\u7684\u6B21\u6570\u3002</p></li><li><p>\u8FD9\u4E9B\u66F4\u6539\u53EF\u4EE5\u5305\u62EC\uFF1A</p><p>1\u3001\u66F4\u6539\u5B57\u7B26\uFF08box \u2192 fox\uFF09 2\u3001\u5220\u9664\u5B57\u7B26\uFF08black \u2192 lack\uFF09 3\u3001\u63D2\u5165\u5B57\u7B26\uFF08sic \u2192 sick\uFF09 4\u3001\u8F6C\u7F6E\u4E24\u4E2A\u76F8\u90BB\u5B57\u7B26\uFF08act \u2192 cat\uFF09</p></li><li><p>\u4E3A\u4E86\u627E\u5230\u76F8\u4F3C\u7684\u672F\u8BED\uFF0C fuzzy \u67E5\u8BE2\u4F1A\u5728\u6307\u5B9A\u7684\u7F16\u8F91\u8DDD\u79BB\u5185\u521B\u5EFA\u4E00\u7EC4\u641C\u7D22\u8BCD\u7684\u6240\u6709\u53EF\u80FD\u7684\u53D8\u4F53\u6216\u6269\u5C55\u3002\u7136\u540E\u67E5\u8BE2\u8FD4\u56DE\u6BCF\u4E2A\u6269\u5C55\u7684\u5B8C\u5168\u5339\u914D\u3002</p></li><li><p>\u901A\u8FC7 fuzziness \u4FEE\u6539\u7F16\u8F91\u8DDD\u79BB\u3002\u4E00\u822C\u4F7F\u7528\u9ED8\u8BA4\u503C AUTO\uFF0C\u6839\u636E\u672F\u8BED\u7684\u957F\u5EA6\u751F\u6210\u7F16\u8F91\u8DDD\u79BB\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fuzzy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;phronee&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fuzziness&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u805A\u5408\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u67E5\u8BE2" aria-hidden="true">#</a> \u805A\u5408\u67E5\u8BE2</h2><h3 id="\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h3><ul><li><p>\u805A\u5408\u5141\u8BB8\u4F7F\u7528\u8005\u5BF9 es \u6587\u6863\u8FDB\u884C\u7EDF\u8BA1\u5206\u6790\uFF0C\u7C7B\u4F3C\u5173\u7CFB\u578B\u6570\u636E\u5E93\u4E2D\u7684 group by\uFF0C\u4E5F\u6709\u5F88\u591A\u5176\u4ED6\u7684\u805A\u5408\uFF0C\u4F8B\u5982\u53D6\u6700\u5927\u503C\u3001\u5E73\u5747\u503C\u7B49\u7B49\u3002</p></li><li><p>\u805A\u5408\u4F7F\u7528aggs\u5173\u952E\u5B57\uFF0C\u4F7F\u7528&quot;size&quot;: 0\uFF0C\u53EF\u4EE5\u4E0D\u8FD4\u56DE\u539F\u59CB\u6570\u636E</p></li><li><p>\u805A\u5408\u5206\u6790\u7684\u5B57\u6BB5\u5982\u679C\u662Ftext\u7C7B\u578B\uFF0C\u4E00\u5B9A\u6253\u5F00doc value\u521B\u5EFA\u6B63\u6392\u7D22\u5F15\uFF0C\u5426\u5219\u6253\u5F00fielddata =true(\u4E0D\u63A8\u8350)\u3002</p></li><li><p>bucket\uFF1A\u6876</p></li><li><p>metirc\uFF1A\u5EA6\u91CF\uFF08\u5355\u4F4D\u3001\u6570\u91CF\uFF09</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;MAX_XIAOMI&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u83B7\u53D6\u6700\u5927\u503C</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AGV_XIAOMI&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u83B7\u53D6\u5E73\u5747\u503C</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;distinct_age&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;cardinality&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u53BB\u91CD\u4E4B\u540E\u53D6\u603B\u6570</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u4E00\u6B21\u8FD4\u56DEcount\uFF0C max\uFF0C min\uFF0C avg \u548C sum \u4E94\u4E2A\u6307\u6807</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price_groupby&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u6876\u805A\u5408\uFF0C\u76F8\u5F53\u4E8Egroup by\u5206\u7EC4\u7EDF\u8BA1</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//\u6876\u805A\u5408\u5D4C\u5957\u805A\u5408\u67E5\u8BE2</span>
        <span class="token property">&quot;price_sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;sum&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20210807223439731"></p><p><img src="'+c+`" alt="image-20210808220509565"></p></li></ul><h3 id="\u805A\u5408\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u805A\u5408\u6392\u5E8F" aria-hidden="true">#</a> \u805A\u5408\u6392\u5E8F</h3><ul><li><p>\u6392\u5E8F</p><p>order\u53EF\u4EE5\u6307\u5B9A\u6392\u5E8F\u5B57\u6BB5\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5D4C\u5957\u7684aggs\u805A\u5408\u67E5\u8BE2\u7684name\u8FDB\u884C\u6392\u5E8F\u3002 _key\uFF1A\u6309\u6BCF\u4E2A\u6876\u7684\u952E\u503C\u6570\u503C\u6392\u5E8F\uFF0C\u5B57\u7B26\u4E32\u503C\u7684\u5B57\u6BCD\u987A\u5E8F\u6392\u5E8F\uFF0C\u53EA\u5728 terms \u5185\u4F7F\u7528\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search?size=<span class="token number">0</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tag_avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tags.keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;agg_price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;asc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;agg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20210815161143574"></p></li><li><p>\u591A\u6876\u6392\u5E8F</p><p>\u591A\u4E2Aaggs\u7684name\u8FDB\u884C\u6392\u5E8F\uFF0C\u4E00\u7EA7\u3001\u4E8C\u7EA7\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tags.keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;agg_stats&gt;stats.sum&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET product/_search
{
  &quot;size&quot;: 0,
  &quot;aggs&quot;: {
    &quot;tag_avg_price&quot;: {
      &quot;terms&quot;: {
        &quot;field&quot;: &quot;tags.keyword&quot;,
        &quot;order&quot;: {
          &quot;agg_stats&gt;stats.sum&quot;: &quot;desc&quot;
        }
      },
      &quot;aggs&quot;: {
        &quot;agg_stats&quot;: {
          &quot;filter&quot;: {
            &quot;terms&quot;: {
              &quot;type.keyword&quot;: [
                &quot;\u8033\u673A&quot;,&quot;\u624B\u673A&quot;,&quot;\u7535\u89C6&quot;
              ]
            }
          },
          &quot;aggs&quot;: {
            &quot;stats&quot;: {
              &quot;extended_stats&quot;: {
                &quot;field&quot;: &quot;price&quot;
              }
            }
          }
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>extended_stats\u4F1A\u628A\u6240\u6709\u7684\u8BA1\u7B97\u7ED3\u679C\u8FDB\u884C\u5C55\u793A\uFF0C\u6BD4\u5982sum\u3001avg\u3001max\u7B49\u7B49</p><p><img src="`+d+`" alt="image-20210815174758474"></p></li></ul><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> global</h3><ul><li><p>\u9ED8\u8BA4\u7684aggs\u805A\u5408\u67E5\u8BE2\uFF0C\u662F\u53D7\u5230\u5916\u5C42\u7684\u67E5\u8BE2\u7ED3\u679C\u7684\u5F71\u54CD\u3002</p></li><li><p>\u5F53aggs\u805A\u5408\u67E5\u8BE2\u5185\u90E8\u5D4C\u5957\u4E86\u4E0B\u94BB\u5206\u6790\uFF0C\u4F7F\u7528\u4E86global\uFF0C\u5219global\u5C42\u7684\u67E5\u8BE2\uFF0C\u662F\u4E0D\u53D7\u5916\u5C42\u5F71\u54CD\u7684\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search?size=<span class="token number">0</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;avg_price1&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avg_price2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg_price2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5916\u5C42\u7684avg\u805A\u5408\uFF0C\u53D7\u5230\u4E86query\u7684\u5F71\u54CD\uFF0C\u8BA1\u7B97\u7684\u7ED3\u679C\u662F\u5728query\u7ED3\u679C\u57FA\u7840\u4E0A\u8FDB\u884C\u5206\u6790\u7684\u3002\u5185\u90E8\u7684global\u662F\u5168\u5C40\u5206\u6790\u3002\u4E0D\u53D7\u5916\u5C42\u5F71\u54CD\u3002</p></li><li><p><img src="`+v+`" alt="image-20210815162836093"></p></li></ul><h3 id="histogram" tabindex="-1"><a class="header-anchor" href="#histogram" aria-hidden="true">#</a> histogram</h3><ul><li><p>\u67F1\u72B6\u56FE\u805A\u5408\uFF0C\u53EF\u4EE5\u8BBE\u5B9A\u95F4\u9694\u533A\u95F4\u3002</p><ol><li>interval\uFF1A\u8BBE\u5B9A\u95F4\u9694\u533A\u95F4</li><li>min_doc_count\uFF1A\u53EA\u5C55\u793A\u7ED3\u679C\u5927\u4E8E\u7B49\u4E8E1\u6761\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u8FC7\u6EE4\u6389\u7A7A\u6570\u636E\u3002</li><li>keyed\uFF1A\u5C55\u793Abucket\u7ED3\u679C\u4E2D\uFF0C\u662Fkey-value\u5F62\u5F0F</li><li>missing\uFF1A\u5F53\u67D0\u6761\u8BB0\u5F55\u662F\u7A7A\u7F6E\u65F6\uFF0C\u4F1A\u7ED9\u9ED8\u8BA4\u503C</li><li>extended_bounds\uFF1A\u5F53\u7EDF\u8BA1\u6570\u636E\u65F6\uFF0C\u6700\u5927\u6570\u636E\u4E0D\u5230\u8BBE\u5B9A\u7684\u6700\u5927\u503C\uFF0C\u4F1A\u81EA\u52A8\u8865\u5145\uFF0C\u5E76count\u4E3A0\uFF1B</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;histogram&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;keyed&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;missing&quot;</span><span class="token operator">:</span> <span class="token number">4999</span><span class="token punctuation">,</span>
        <span class="token property">&quot;extended_bounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">10000</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;avg_price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+'" alt="image-20210815172023702"></p></li><li><p>date-histogram</p><p>\u65F6\u95F4\u683C\u5F0F\u7684\u67F1\u72B6\u56FE\u7EDF\u8BA1\u3002format\u683C\u5F0F\u5316</p><p><img src="'+q+`" alt="image-20210815173525084"></p></li></ul><h3 id="stats\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#stats\u6269\u5C55" aria-hidden="true">#</a> stats\u6269\u5C55</h3><p>ES\u63D0\u4F9B\u9ED8\u8BA4\u7684\u805A\u5408\u6269\u5C55\u5B9E\u73B0\uFF0C\u6BD4\u5982\u6570\u503C\u578B\uFF0C\u53EF\u4EE5\u5355\u72EC\u67E5\u8BE2min\u3001max\u3001avg\u7B49\u8BA1\u7B97\u7ED3\u679C\uFF0CES\u63D0\u4F9B\u6269\u5C55stats\u5173\u952E\u5B57\u6307\u4EE4\uFF0C\u53EF\u4EE5\u9ED8\u8BA4\u63D0\u4F9B\u4E00\u7CFB\u5217\u7684\u9ED8\u8BA4\u5B9E\u73B0\u3002</p><ul><li><p>\u6570\u503C\u7C7B\u578B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search?size=<span class="token number">0</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="image-20210815213552986"></p></li><li><p>string\u7C7B\u578B</p><p>\u9ED8\u8BA4\u63D0\u4F9B\u5B57\u7B26\u603B\u6570\u3001\u6700\u5C0F\u957F\u5EA6\u3001\u6700\u5927\u957F\u5EA6\u3001\u5E73\u5747\u957F\u5EA6\u7B49\u4FE1\u606F\u3002</p><p>entropy \u71B5\u503C\uFF1A\u57FA\u4E8E\u805A\u5408\u6240\u6536\u96C6\u5230\u7684\u6240\u6709\u9879\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u51FA\u73B0\u7684\u6982\u7387</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search?size=<span class="token number">0</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;string_stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt="image-20210815214526293"></p></li></ul><h3 id="cardinality" tabindex="-1"><a class="header-anchor" href="#cardinality" aria-hidden="true">#</a> cardinality</h3><ul><li><p>\u53BB\u91CD\u67E5\u8BE2\uFF0C\u5E76\u4E14\u51E0\u4E4E\u6240\u6709\u7684aggs\u805A\u5408\u67E5\u8BE2\uFF0C\u90FD\u652F\u6301script</p></li><li><p>ES\u805A\u5408\u67E5\u8BE2\u662F\u75311-6%\u7684\u8BEF\u5DEE\u7684\uFF0Cprecision_threshold\u53C2\u6570\u53EF\u4EE5\u51CF\u5C0F\u8BEF\u5DEE\uFF0C\u4F46\u662F\u4F1A\u589E\u52A0\u5BF9\u5185\u5B58\u7684\u6D88\u8017\u3002</p></li><li><p>precision_threshold\u9ED8\u8BA4\u503C\u4E3A3000\uFF0C\u6700\u5927\u503C\u4E3A4\u4E07\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u4E0D\u9700\u8981\u7279\u610F\u6539\u53D8\u3002\u8BBE\u5B9A\u503C\u8D8A\u5927\uFF0C\u7CBE\u5EA6\u8D8A\u9AD8\u3002\u4F46\u662F\u5BF9\u5185\u5B58\u7684\u6D88\u8017\u4E5F\u8D8A\u5927\uFF0C\u5185\u5B58\u6D88\u8017\u4E3Aprecision_threshold * 8 \u4E2AByte\uFF0C1000*8/1000 \u5927\u69828kb\u3002\u5982\u679C\u672C\u8EAB\u6570\u636E\u91CD\u590D\u5EA6\u5C31\u5F88\u4F4E\uFF0C\u6CA1\u5FC5\u8981\u8BBE\u7F6E\u592A\u5927\uFF0C\u53BB\u91CD\u67E5\u8BE2\u662F\u6BD4\u8F83\u6D88\u8017\u8D44\u6E90\u7684\u3002</p><p><img src="'+g+`" alt="image-20210815221155749"></p></li></ul><h3 id="top-hits" tabindex="-1"><a class="header-anchor" href="#top-hits" aria-hidden="true">#</a> top_hits</h3><ul><li><p>\u53D6\u524Dn\u6761\u6570\u636E\u3002</p><p>\u6309\u7167type\u8FDB\u884C\u5206\u7EC4\uFF0C\u6309\u7167\u6BCF\u7EC4\u6570\u91CF\u7684\u5012\u5E8F\u6392\u5E8F\uFF0C\u53D6\u524D\u4E24\u4E2Abucket\uFF08\u7EC4\uFF09\u3002\u5E76\u4E14\u6BCF\u7EC4\u5185\u6570\u636E\uFF0C\u6309\u7167\u4EF7\u683C\u5012\u5E8F\u6392\u5E8F\uFF0C\u53D6\u524D\u4E24\u4E2A\u7EC4\u5185\u660E\u7EC6\u6570\u636E\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;top_tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.keyword&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;_count&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;top_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;top_hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="filters" tabindex="-1"><a class="header-anchor" href="#filters" aria-hidden="true">#</a> filters</h3><ul><li><p>filers\u505A\u805A\u5408\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5BF9\u9664\u4E86\u6307\u5B9A\u7684\u805A\u5408\u6761\u4EF6\u8FDB\u884C\u805A\u5408\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5BF9\u6761\u4EF6\u5916\u7684\u6570\u636E\u505Aother\u805A\u5408\u3002</p></li><li><p>other_bucket\uFF1A\u662F\u5426\u5BF9\u5269\u4F59\u6570\u636E\u505A\u805A\u5408</p></li><li><p>other_bucket_key\uFF1A\u6307\u5B9Aother\u7684\u805A\u5408\u7684key</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test_filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;other_bucket&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;other_bucket_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;other_type&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tv&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;type.keyword&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7535\u89C6&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+y+`" alt="image-20210816214702491"></p></li></ul><h3 id="\u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148" aria-hidden="true">#</a> \u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148</h3><ul><li>terms\u6876\u805A\u5408\uFF0CES\u57FA\u4E8E\u6211\u4EEC\u7684\u6570\u636E\u52A8\u6001\u8FDB\u884C\u805A\u5408\u5206\u7EC4\u6784\u5EFA\u6876\uFF0C\u4F46\u662Fes\u5E76\u4E0D\u77E5\u9053\u4F1A\u6784\u5EFA\u51FA\u591A\u5C11\u4E2A\u6876\uFF0C\u6240\u4EE5\u4F1A\u628A\u6240\u6709\u7684\u6570\u636E\u90FD\u62FF\u5230\u5185\u5B58\u4E2D\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5355\u4E2A\u5B57\u6BB5\u7684\u805A\u5408\u901F\u5EA6\u8FD8\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u5982\u679C\u591A\u4E2A\u5B57\u6BB5\u8FDB\u884C\u805A\u5408\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6784\u5EFA\u5927\u91CF\u7684\u7EC4\uFF0C\u6700\u7EC8\u6709\u53EF\u80FD\u5BFC\u81F4\u53D1\u751FOOM\u95EE\u9898\u3002</li><li>\u6BD4\u59821\u4E07\u4E2A\u6F14\u5458\uFF0C\u6BCF\u4E2A\u6F14\u5458\u6F14\u4E8610\u90E8\u7535\u5F71\uFF0C\u8981\u805A\u5408\u6F14\u5458\u70B9\u8D5E\u6570\u524D10\u7684\u6F14\u5458\u3001\u5E76\u4E14\u6F14\u5458\u70B9\u8D5E\u6570\u524D10\u7684\u7535\u5F71\uFF0C\u5C31\u9700\u8981\u805A\u54081\u4E07+1\u4E07*10\u4E2A\u7EC4\u5408\uFF0C\u5982\u679C\u805A\u5408\u7684\u6DF1\u5EA6\u518D\u591A\u4E00\u5C42\uFF0C\u805A\u5408\u7684\u7EC4\u5408\u6570\u636E\u91CF\u5C31\u4F1A\u66F4\u5927\u3002\u8FD9\u5C31\u4F1A\u5F88\u5BB9\u6613\u5BFC\u81F4jvm\u95EE\u9898\u3002</li><li>\u6DF1\u5EA6\u4F18\u5148\uFF1A\u5148\u805A\u5408\u6240\u6709\u6570\u636E\uFF0C\u6784\u5EFA\u4E00\u9897\u5B8C\u6574\u7684\u6811\uFF0C\u518D\u8FDB\u884C\u6570\u636E\u7B5B\u9009\u3001\u5254\u9664\u65E0\u7528\u6570\u636E\u3002</li><li>\u5E7F\u5EA6\u4F18\u5148\uFF1A\u5148\u6784\u5EFA\u7B2C\u4E00\u5C42\u7684\u805A\u5408\u7ED3\u679C\uFF0C\u5254\u9664\u65E0\u7528\u6570\u636E\uFF0C\u518D\u8FDB\u884C\u4E0B\u4E00\u5C42\u6570\u636E\u7684\u805A\u5408\uFF0C\u5C31\u4F1A\u51CF\u5C11\u5185\u5B58\u7684\u6D88\u8017\uFF0C\u63D0\u5347\u901F\u5EA6\u3002\u4F46\u662F\u5E7F\u5EA6\u4F18\u5148\u53EA\u9002\u7528\u4E8E\u6BCF\u4E2A\u7EC4\u805A\u5408\u6570\u91CF\u8FDC\u5C0F\u4E8E\u7EC4\u603B\u6570\u7684\u60C5\u51B5\u3002</li><li>terms.collect_mode\u5C5E\u6027\u7528\u4E8E\u8BBE\u7F6E\u5E7F\u5EA6\u4F18\u5148\u8FD8\u662F\u6DF1\u5EA6\u4F18\u5148\uFF0C\u9ED8\u8BA4\u662F\u6DF1\u5EA6\u4F18\u5148\uFF08depth_first\uFF09\uFF0C\u5E7F\u5EA6\u4F18\u5148\u5219\u4FEE\u6539\u4E3Abreadth_first\u3002</li></ul><h3 id="adjacency-matrix\u90BB\u63A5\u77E9\u9635" tabindex="-1"><a class="header-anchor" href="#adjacency-matrix\u90BB\u63A5\u77E9\u9635" aria-hidden="true">#</a> adjacency_matrix\u90BB\u63A5\u77E9\u9635</h3><ul><li><p>\u5BF9\u6BCF\u4E2A\u805A\u5408\u7ED3\u679C\u5355\u72EC\u8FDB\u884C\u5C55\u793A\uFF0C\u5E76\u4E14\u4F1A\u5BF9\u6BCF\u4E2A\u805A\u5408\u7ED3\u679C\u8FDB\u884C\u805A\u5408&amp;\u8FD0\u7B97\u805A\u5408\u3002\u6BD4\u5982\u805A\u5408A\u3001B\u3001C\uFF0C\u9664\u4E86\u5C55\u793AA\u3001B\u3001C\u6761\u4EF6\u7684\u805A\u5408\u7ED3\u679C\u5916\uFF0C\u8FD8\u4F1A\u8FDB\u884CA&amp;B\u3001A&amp;C\u3001B&amp;C\u7ED3\u679C\u7684\u805A\u5408\u3002</p></li><li><p>A&amp;B\u7684\u542B\u4E49\u662F\uFF1Adoc\u65E2\u8981\u5339\u914DA\u6761\u4EF6\u7684\u805A\u5408\u53C8\u8981\u5339\u914DB\u6761\u4EF6\u7684\u805A\u5408\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /emails/_bulk?refresh
{&quot;index&quot;:{&quot;_id&quot;:1}}
{&quot;accounts&quot;:[&quot;a&quot;,&quot;f&quot;]}
{&quot;index&quot;:{&quot;_id&quot;:2}}
{&quot;accounts&quot;:[&quot;a&quot;,&quot;b&quot;]}
{&quot;index&quot;:{&quot;_id&quot;:3}}
{&quot;accounts&quot;:[&quot;c&quot;,&quot;b&quot;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+`" alt="image-20210816225430405"></p></li></ul><h2 id="\u6279\u91CF\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6279\u91CF\u67E5\u8BE2" aria-hidden="true">#</a> \u6279\u91CF\u67E5\u8BE2</h2><ul><li><p>mget\u5B9E\u73B0\u6279\u91CF\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4E00\u6B21\u67E5\u8BE2\u540C\u4E00\u7D22\u5F15\u4E0B\u7684\u6570\u636E\uFF0C\u4E5F\u53EF\u4EE5\u67E5\u8BE2\u4E0D\u540C\u7D22\u5F15\u4E0B\u7684\u6570\u636E\u3002get\u8DEF\u5F84\u4E2D\u5982\u679C\u5305\u542B\u4E86index\uFF0C\u5219body\u4E2D\u53EF\u4EE5\u7701\u7565\u3002</p></li><li><p>\u5982\u679C\u67E5\u8BE2\u8D85\u65F6\u4E86\uFF0C\u4F1A\u8FD4\u56DE\u8D85\u65F6\u524D\u67E5\u8BE2\u5230\u7684\u6240\u6709\u6570\u636E\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /_mget
GET /&lt;index&gt;/_mget
body\u53C2\u6570\u8BF4\u660E
<span class="token punctuation">{</span>
    <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span>\u5FC5\u586B
    <span class="token property">&quot;ids&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;id1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;id2&quot;</span><span class="token punctuation">]</span>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u5F62\u5F0F\u67E5\u8BE2
    <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span>\u7D22\u5F15\uFF0C\u5982\u679Cpath\u4E2D\u6307\u5B9A\u4E86\uFF0C\u6B64\u5904\u53EF\u4EE5\u7701\u7565
    <span class="token string">&quot;_source&quot;</span>\uFF1A\u6307\u5B9A\u7ED3\u679C\u4E2D\u7684\u5B57\u6BB5\uFF0C\u9ED8\u8BA4\u8FD4\u56DE\u6240\u6709<span class="token punctuation">[</span><span class="token string">&quot;field1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;field2&quot;</span><span class="token punctuation">]</span>
    <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;user&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;user.location&quot;</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token property">&quot;_stored_fields&quot;</span><span class="token operator">:</span>\u67E5\u8BE2store\u8BBE\u7F6E\u4E3A<span class="token boolean">true</span>\u7684\u5B57\u6BB5<span class="token punctuation">[</span><span class="token string">&quot;field1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;field2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET product2/_mget
<span class="token punctuation">{</span>
  <span class="token property">&quot;ids&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
GET /_mget
<span class="token punctuation">{</span>
  <span class="token property">&quot;docs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;product2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>
      <span class="token comment">//\u67E5\u8BE2\u9664\u4E86name\u5916\u6240\u6709\u7684\u6570\u636E</span>
      <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//\u67E5\u8BE2store\u4E3Atrue\u7684\u6570\u636E</span>
      <span class="token property">&quot;stored_fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;field3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;field4&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u811A\u672Cscript" tabindex="-1"><a class="header-anchor" href="#\u811A\u672Cscript" aria-hidden="true">#</a> \u811A\u672Cscript</h2><ul><li><p>\u67E5\u8BE2\u65F6\u4F7F\u7528painless\uFF0Csource\u6307\u5B9A\u5177\u4F53\u5B57\u6BB5\uFF0C\u4F7F\u7528doc[&#39;filedName&#39;].value</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET product/_search
{
  &quot;script_fields&quot;: {
    &quot;price_query&quot;: {
      &quot;script&quot;: {
        &quot;lang&quot;: &quot;painless&quot;,
        &quot;source&quot;: &quot;doc[&#39;price&#39;].value+params.num&quot;,
        &quot;params&quot;: {
          &quot;num&quot;: 2
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="\u76F8\u5173\u6027\u5F97\u5206\u539F\u7406\u53CA\u6392\u5E8F\u89C4\u5219\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u6027\u5F97\u5206\u539F\u7406\u53CA\u6392\u5E8F\u89C4\u5219\u4F18\u5316" aria-hidden="true">#</a> \u76F8\u5173\u6027\u5F97\u5206\u539F\u7406\u53CA\u6392\u5E8F\u89C4\u5219\u4F18\u5316</h2><h3 id="_1\u3001analyzer\u548Csearch-analyzer" tabindex="-1"><a class="header-anchor" href="#_1\u3001analyzer\u548Csearch-analyzer" aria-hidden="true">#</a> 1\u3001analyzer\u548Csearch_analyzer</h3><ul><li>analyzer\uFF1A\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u6307\u5B9A\u4E86analyzer\u5206\u6790\u5668\u3002\u4F1A\u5728\u63D2\u5165\u6570\u636E\u7684\u65F6\u5019\uFF0C\u6839\u636E\u6307\u5B9A\u7684\u5206\u6790\u5668\u8FDB\u884C\u5206\u8BCD\uFF0C\u521B\u5EFA\u5012\u6392\u7D22\u5F15\u3002</li><li>search_analyzer\uFF1A\u5728\u4F7F\u7528\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22\u65F6\uFF0C\u4F1A\u4F7F\u7528search_analyzer\u5206\u6790\u5668\u5BF9\u5173\u952E\u8BCD\u8FDB\u884C\u5206\u8BCD\u3002\u5982\u679C\u6CA1\u6709\u7279\u6B8A\u6307\u5B9A\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0Bsearch_analyzer\u548Canalyzer\u662F\u76F8\u540C\u7684\uFF0C\u5E76\u4E14\u5728\u67E5\u8BE2mapping\u65F6\uFF0C\u53EA\u4F1A\u5C06\u4E24\u8005\u4E0D\u540C\u7684search_analyzer\u8FDB\u884C\u5C55\u793A\u3002</li><li><img src="`+_+'" alt="image-20210810213509844"></li></ul><h3 id="_2\u3001shard-local-idf\u548Cglobal-idf-\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u95EE\u9898\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_2\u3001shard-local-idf\u548Cglobal-idf-\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u95EE\u9898\u89E3\u6790" aria-hidden="true">#</a> 2\u3001shard local IDF\u548Cglobal IDF\uFF08\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u95EE\u9898\u89E3\u6790\uFF09</h3><ul><li>ES\u5728\u8BA1\u7B97\u76F8\u5173\u6027\u5F97\u5206score\u65F6\uFF0C\u4F1A\u9075\u5FAA\u4E09\u4E2A\u6761\u4EF6\uFF1ATF\u3001IDF\u3001\u76F8\u540C\u6761\u4EF6\u4E0B\u6570\u636E\u77ED\u7684\u8BC4\u5206\u9AD8\u3002IDF\u8BC4\u5206\u662F\u8BA1\u7B97\u8BCD\u6761\u5728\u5F53\u524D\u5206\u7247\u4E0B\u6574\u4E2A\u7D22\u5F15\u5185\u7684\u76F8\u5173\u6027\uFF0C\u5982\u679C\u8BCD\u9891\u975E\u5E38\u9AD8\uFF0C\u90A3\u4E48IDF\u8BC4\u5206\u5C31\u4F1A\u6BD4\u8F83\u4F4E\u3002\u6240\u4EE5\u5982\u679C\u6570\u636E\u5206\u914D\u4E0D\u5747\uFF0C\u5C31\u4F1A\u51FA\u73B0\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u7684\u95EE\u9898\u3002\u6BD4\u5982\u67D0\u4E2A\u5206\u7247\u4E0B1\u4E07\u6761\u6570\u636E\uFF0C\u53E6\u4E00\u4E2A\u5206\u7247\u4E0B\u53EA10\u6761\u6570\u636E\uFF0C\u90A3\u4E48\u540C\u4E00\u5173\u952E\u8BCD\u5728\u4E0D\u540Cshard\u4E0B\u7684IDF\u8BC4\u5206\u5C31\u4E0D\u540C\uFF0C\u5F53\u53D1\u751F\u8DE8\u5206\u7247\u67E5\u8BE2\u6570\u636E\u7684\u60C5\u51B5\u65F6\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6570\u636E\u4E0D\u51C6\u786E\u3002</li><li>\u89E3\u51B3\uFF1A\u5404\u4E2A\u5206\u7247\u5927\u5C0F\u5C3D\u91CF\u8BBE\u7F6E\u6210\u4E00\u6837\u5927\uFF0C\u5E76\u4E14\u751F\u4EA7\u73AF\u5883\u6781\u5C11\u51FA\u73B0\u8FD9\u79CD\u95EE\u9898\uFF0C\u56E0\u4E3A\u751F\u4EA7\u73AF\u5883\u6570\u636E\u91CF\u5927\uFF0C\u5404\u4E2A\u5206\u7247\u914D\u7F6E\u7684\u6BD4\u8F83\u5408\u7406\uFF0C\u6700\u7EC8\u8BEF\u5DEE\u4F1A\u975E\u5E38\u5C0F\u3002</li><li><img src="'+x+`" alt="image-20210810214740182"></li></ul><h3 id="_3\u3001multi-match\u591A\u5B57\u6BB5\u641C\u7D22" tabindex="-1"><a class="header-anchor" href="#_3\u3001multi-match\u591A\u5B57\u6BB5\u641C\u7D22" aria-hidden="true">#</a> 3\u3001multi_match\u591A\u5B57\u6BB5\u641C\u7D22</h3><ul><li><p>\u6D4B\u8BD5\u6570\u636E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>\u6CE8\u610F\uFF1A\u4E2D\u6587\u5206\u8BCD\u9700\u8981\u628A\u5403\u9E21\u3001\u624B\u673A\u3001\u5FEB\u5145\u3001\u8D85\u7EA7\u8BBE\u7F6E\u4E3A\u70ED\u8BCD\u3002
PUT score
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;search_analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT /score/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5403\u9E21\u624B\u673A\uFF0C\u6E38\u620F\u795E\u5668\uFF0C\u8D85\u7EA7&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u57FA\u4E8ETX\u6DF1\u5EA6\u5B9A\u5236\uFF0C\u6D41\u7545\u6E38\u620F\u4E0D\u53D1\u70ED\uFF0C\u7269\u7406\u5916\u6302\uFF0C\u5FEB\u5145&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-05-20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collected_num&quot;</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u6027\u4EF7\u6BD4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u53D1\u70E7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u4E0D\u5361&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
PUT /score/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u7C73NFC\u624B\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u652F\u6301\u5168\u529F\u80FDNFC,\u4E13\u4E1A\u5403\u9E21\uFF0C\u5FEB\u5145&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-05-20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collected_num&quot;</span><span class="token operator">:</span> <span class="token number">299</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u6027\u4EF7\u6BD4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u53D1\u70E7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u516C\u4EA4\u5361&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
PUT /score/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NFC\u624B\u673A\uFF0C\u8D85\u7EA7&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u624B\u673A\u4E2D\u7684\u8F70\u70B8\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-05-20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collected_num&quot;</span><span class="token operator">:</span> <span class="token number">1299</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u6027\u4EF7\u6BD4&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u53D1\u70E7&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u95E8\u7981\u5361&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
PUT /score/_doc/<span class="token number">4</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5C0F\u7C73\u8033\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8033\u673A\u4E2D\u7684\u9EC4\u7116\u9E21&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-05-20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collected_num&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u4F4E\u8C03&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u9632\u6C34&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u97F3\u8D28\u597D&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
PUT /score/_doc/<span class="token number">5</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7EA2\u7C73\u8033\u673A&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8033\u673A\u4E2D\u7684\u80AF\u5FB7\u57FA&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">399</span><span class="token punctuation">,</span>
  <span class="token property">&quot;createtime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-05-20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;collected_num&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tags&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;\u725B\u903C&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u7EED\u822A\u957F&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;\u8D28\u91CF\u597D&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u76F8\u5173\u6027\u5206\u6570\u8BA1\u7B97\u89C4\u5219</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u641C\u7D22\u5173\u952E\u8BCD\uFF1A\u5403\u9E21\u624B\u673A
GET score/_search
{
  &quot;query&quot;: {
    &quot;bool&quot;: {
      &quot;should&quot;: [
        {&quot;match&quot;: {&quot;name&quot;: &quot;\u5403\u9E21\u624B\u673A&quot;}},
        {&quot;match&quot;: {&quot;desc&quot;: &quot;\u5403\u9E21\u624B\u673A&quot;}}
      ]
    }
  }
}
\u7ED3\u679C\u5206\u6790\uFF1A
\u671F\u671B\u7684\u5339\u914D\u7ED3\u679C\u662Fdoc1&gt;doc2&gt;doc3
TF/IDF:
TF: \u5173\u952E\u8BCD\u5728\u6BCF\u4E2Adoc\u4E2D\u51FA\u73B0\u7684\u6B21\u6570
IDF: \u5173\u952E\u8BCD\u5728\u6574\u4E2A\u7D22\u5F15\u4E2D\u51FA\u73B0\u7684\u6B21\u6570
relevance score\u8BA1\u7B97\u89C4\u5219\uFF1A\u6BCF\u4E2Aquery\u7684\u5206\u6570\uFF0C\u4E58\u4EE5matched query\u6570\u91CF\uFF0C\u9664\u4EE5\u603Bquery\u6570\u91CF
1.\u5B83\u4F1A\u6267\u884C should \u8BED\u53E5\u4E2D\u7684\u4E24\u4E2A\u67E5\u8BE2\u3002
2.\u52A0\u548C\u4E24\u4E2A\u67E5\u8BE2\u7684\u8BC4\u5206\u3002
3.\u4E58\u4EE5\u5339\u914D\u8BED\u53E5\u7684\u603B\u6570\u3002
4.\u9664\u4EE5\u6240\u6709\u8BED\u53E5\u603B\u6570
\u7B97\u4E00\u4E0Bdoc1\u7684\u5206\u6570
{&quot;match&quot;: {&quot;name&quot;: &quot;\u5403\u9E21\u624B\u673A&quot;}},
	doc1:	\u5403\u9E211\u6B21\uFF0C\u624B\u673A1\u6B21\uFF0C\u8BA12\u5206	
	doc2:	\u5403\u9E210\u6B21\uFF0C\u624B\u673A1\u6B21\uFF0C\u8BA11\u5206
	doc3:	\u5403\u9E210\u6B21\uFF0C\u624B\u673A1\u6B21\uFF0C\u8BA11\u5206
{&quot;match&quot;: {&quot;desc&quot;: &quot;\u5403\u9E21\u624B\u673A&quot;}}
	doc1:	\u5403\u9E210\u6B21\uFF0C\u624B\u673A0\u6B21\uFF0C\u8BA10\u5206	
	doc2:	\u5403\u9E210\u6B21\uFF0C\u624B\u673A1\u6B21\uFF0C\u8BA11\u5206
	doc3:	\u5403\u9E210\u6B21\uFF0C\u624B\u673A1\u6B21\uFF0C\u8BA11\u5206
\u603B\u5206\uFF1A\uFF08query1+query2\uFF09*matched query / total query
	doc1:	query1+query2\uFF1A2		matched\uFF1A1	total query\uFF1A2		result\uFF1A2*1/2=1
	doc2:	query1+query2\uFF1A2		matched\uFF1A2	total query\uFF1A2		result\uFF1A2*2/2=2
	doc3:	query1+query2\uFF1A2		matched\uFF1A2	total query\uFF1A2		result\uFF1A2*2/2=2
matched query\u6570\u91CF = 2
\u603Bquery\u6570\u91CF = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+'" alt="image-20210810224116296"></p><p>\u56E0\u4E3A\u76F8\u5173\u6027\u8BC4\u5206\u7684\u8BA1\u7B97\u89C4\u5219\uFF0C\u6700\u5E94\u8BE5\u5339\u914D\u7684doc1\uFF0C\u76F8\u5173\u6027\u53CD\u800C\u6700\u4F4E\u3002\u7ED3\u679C\u662F\u9519\u8BEF\u7684\u3002</p></li><li><p>best_fields</p><p>\u9ED8\u8BA4\u7684\u641C\u7D22\u7B56\u7565\u3002\u5BF9\u4E8E\u540C\u4E00\u4E2Aquery\uFF0C\u5355\u4E2Afield\u5339\u914D\u66F4\u591A\u7684term\uFF0C\u5219\u4F18\u5148\u6392\u5E8F\u3002\u5F53\u67E5\u8BE2\u591A\u4E2A\u5B57\u6BB5\u65F6\uFF0C\u5982\u679C\u5173\u952E\u8BCD\u5728\u67D0\u4E2A\u5B57\u6BB5\u4E2D\u88AB\u5339\u914D\u7684\u6B21\u6570\u6BD4\u8F83\u591A\uFF0C\u5219\u8FD9\u4E2A\u5B57\u6BB5\u662Fbest_ields\uFF0C\u6700\u597D\u7684\u5B57\u6BB5\u3002\u5176\u4F59\u5B57\u6BB5\u5339\u914D\u7684\u76F8\u5173\u6027\u5206\u6570\u5C31\u4F1A\u88AB\u5FFD\u7565\uFF0C\u8FD9\u4E2A\u8BCD\u6761\u7684\u76F8\u5173\u6027\u5206\u6570\u5C31\u4F1A\u4EE5best_fields\u4E3A\u51C6\u3002</p><p>\u4F7F\u7528dis_max\uFF0C\u9ED8\u8BA4\u7684\u641C\u7D22\u7B56\u7565\u662Fbest_fields\u3002\u56E0\u4E3Aname\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u5339\u914D\u201C\u5403\u9E21\u624B\u673A\u201D\u6B21\u6570\u6700\u591A\uFF0Cscore\u8BC4\u5206\u6700\u9AD8\uFF0C\u6240\u4EE5\u662Fbest_fields.</p><p><img src="'+j+`" alt="image-20210810224445067"></p></li><li><p>most_fields</p><p>\u5982\u679C\u4E00\u6B21\u8BF7\u6C42\u4E2D\uFF0C\u5BF9\u4E8E\u540C\u4E00\u4E2Adoc\uFF0C\u5339\u914D\u5230\u67D0\u4E2Aterm\u7684field\u8D8A\u591A\uFF0C\u5219\u8D8A\u4F18\u5148\u6392\u5E8F\u3002\u6BD4\u5982doc1\uFF0C\u56DB\u4E2A\u5B57\u6BB5\u5339\u914D\u5230\u4E86\u5173\u952E\u8BCD\uFF0Cdoc2\u662F3\u4E2A\u5B57\u6BB5\u5339\u914D\u5230\u4E86\u5173\u952E\u8BCD\u3002\u90A3\u4E48doc1\u4F18\u5148\u5C55\u793A\u3002\u56E0\u4E3A\u5339\u914D\u7684field\u6700\u591A\u3002</p></li><li><p>cross_fields</p><p>\u6D4B\u8BD5\u6570\u636E\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>POST /teacher/_bulk
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>	
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u8FDE&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u9E4F\u9E4F&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5F20&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u660E\u660E&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5468&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5FD7\u5FD7&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u4EA6\u51E1&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u4EAC&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5F66\u7956&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5E05&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u8FDE&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5468&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5F20&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u9A6C&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;\u59D3&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u8BF8\u845B&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;\u540D&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;\u5434\u78CA&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET teacher/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5434\u78CA&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;most_fields&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;name.\u59D3&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;name.\u540D&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u9ED8\u8BA4\u641C\u7D22\u7B56\u7565\u6216\u8005most_fields\u8FDB\u884C\u641C\u7D22\u65F6\uFF0C\u671F\u671B\u7684\u5434\u78CA\u4E0D\u4F1A\u5728\u7B2C\u4E00\u6761\u3002\u56E0\u4E3A\u76F8\u5173\u6027\u8BC4\u5206\u6709\u95EE\u9898\u3002\u5728\u59D3\u4E2D\uFF0C\u201C\u5434\u201D\u6BD4\u8F83\u591A\uFF0C\u6240\u4EE5IDF\u4F1A\u6BD4\u8F83\u4F4E\uFF0C\u76F8\u53CD\u5728\u540D\u4E2DIDF\u5C31\u4F1A\u6BD4\u8F83\u9AD8\u3002\u5BF9\u4E8E\u540D\u201C\u78CA\u201D\uFF0C\u5728\u540D\u4E2DIDF\u5206\u4F4E\uFF0C\u59D3\u4E2D\u5206\u9AD8\uFF0C\u6240\u4EE5\u5C31\u4F1A\u5BFC\u81F4\u95EE\u9898\u3002</p><p>cross_fields\u4EA4\u53C9\u7684\u5B57\u6BB5\u3002\u542B\u4E49\u662F\u5173\u952E\u8BCD\u5206\u8BCD\u4E4B\u540E\uFF0C\u6BCF\u4E2A\u5173\u952E\u5B57\uFF0C\u5FC5\u987B\u5728\u5176\u4E2D\u81F3\u5C11\u4E00\u4E2A\u5B57\u6BB5\u4E2D\u5339\u914D\u3002</p><p>\u6BD4\u5982\u201C\u5434\u78CA\u201D\uFF0C\u4F7F\u7528cross_fields\u7B56\u7565\uFF0C\u4F1A\u4EA7\u751F\u4FE9\u4E2A\u6761\u4EF6:</p><p>1\u3001\u59D3\u6216\u8005\u540D\u4E2D,\u5FC5\u987B\u6709\u5434 2\u3001\u59D3\u6216\u8005\u540D\u4E2D,\u5FC5\u987B\u6709\u78CA</p><p>\u9ED8\u8BA4\u662F\u6216\u64CD\u4F5C\u3002\u6EE1\u8DB3\u4E00\u6761\u5C31\u884C,\u5B58\u5728\u5434,\u6216\u8005\u78CA\u5373\u53EF\u3002\u53EF\u4EE5\u4F7F\u7528and\u64CD\u4F5C,\u53EA\u6709\u4E24\u6761\u90FD\u6EE1\u8DB3,\u5B58\u5728\u5B8C\u6574\u7684\u5434\u78CA\uFF0C\u624D\u53EF\u4EE5\u3002</p><p><img src="`+E+`" alt="image-20210811205415883"></p></li><li><p>dix_max</p><p>dix_max\u67E5\u8BE2\uFF08Disjunction Max Query\uFF09\uFF1A\u5C06\u4EFB\u4F55\u4E0E\u4EFB\u4E00\u67E5\u8BE2\u5339\u914D\u7684\u6587\u6863\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4F46\u53EA\u5C06\u6700\u4F73\u5339\u914D\u7684\u8BC4\u5206\u4F5C\u4E3A\u67E5\u8BE2\u7684\u8BC4\u5206\u7ED3\u679C\u8FD4\u56DE\u3002\u6BD4\u5982\u67E5\u8BE2\u65F6name\u3001desc\u4E24\u4E2A\u5B57\u6BB5\uFF0Cname\u7684\u8BC4\u5206\u7ED3\u679C\u6BD4desc\u9AD8\uFF0C\u5219\u4EE5name\u7684\u8BC4\u5206\u4E3A\u51C6\u8FDB\u884C\u8FD4\u56DE\uFF0Cdesc\u5B57\u6BB5\u7684\u8BC4\u5206\u5C06\u88AB\u5FFD\u7565\u3002</p><p>dix_max\u9ED8\u8BA4\u7684best_fields\u7B56\u7565\uFF0C\u4F1A\u5E26\u6765\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u641C\u7D22\u8BCD\u5728fields\u5B57\u6BB5\u4E2D\u5168\u90E8\u5B58\u5728\u65F6\uFF0C\u53EA\u4F1A\u4EE5\u5176\u4E2D\u4E00\u4E2A\u5B57\u6BB5\u7684\u8BC4\u5206\u4E3A\u51C6\uFF0C\u5F53doc1\u53EA\u5339\u914D\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u4F46\u662F\u8BC4\u5206\u9AD8\uFF0Cdoc2\u5339\u914D\u76842\u4E2A\u5B57\u6BB5\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5339\u914D2\u4E2A\u5B57\u6BB5\u7684\u5E94\u8BE5\u4F18\u5148\u5C55\u793A\uFF0C\u4F46\u662F\u56E0\u4E3Abest_fields\u7B56\u7565\uFF0C\u5BFC\u81F4\u5176\u4F59\u5B57\u6BB5\u4E0D\u53C2\u4E0E\u8BC4\u5206\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E0D\u51C6\u786E\u3002\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528tie_breaker\u8BBE\u7F6E\u5176\u4F59\u5B57\u6BB5\u7684\u53C2\u4E0E\u5EA6\uFF0C\u5B98\u65B9\u5EFA\u8BAE0.1-0.4\u4E4B\u95F4\u3002\u592A\u5927\u7684\u8BDD\uFF0C\u6709\u53EF\u80FD\u5BFC\u81F4\u55A7\u5BBE\u593A\u4E3B\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET score/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dis_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;queries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u5FEB\u5145&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u5FEB\u5145&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>tie_breaker</p><p>\u53D6\u503C\u8303\u56F4 [0,1]\uFF0C\u5176\u4E2D 0 \u4EE3\u8868\u4F7F\u7528 dis_max \u6700\u4F73\u5339\u914D\u8BED\u53E5\u7684\u666E\u901A\u903B\u8F91\uFF0C1\u8868\u793A\u6240\u6709\u5339\u914D\u8BED\u53E5\u540C\u7B49\u91CD\u8981\u3002\u6700\u4F73\u7684\u7CBE\u786E\u503C\u9700\u8981\u6839\u636E\u6570\u636E\u4E0E\u67E5\u8BE2\u8C03\u8BD5\u5F97\u51FA\uFF0C\u4F46\u662F\u5408\u7406\u503C\u5E94\u8BE5\u4E0E\u96F6\u63A5\u8FD1\uFF08\u5904\u4E8E 0.1 - 0.4 \u4E4B\u95F4\uFF09\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u98A0\u8986 dis_max \u6700\u4F73\u5339\u914D\u6027\u8D28\u7684\u6839\u672C\u3002</p></li><li><p>multi_match</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET score/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;multi_match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u5FEB\u5145&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;desc&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;most_fields&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tie_breaker&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4\u3001function-score-query" tabindex="-1"><a class="header-anchor" href="#_4\u3001function-score-query" aria-hidden="true">#</a> 4\u3001function score query</h3><ul><li><p>\u5FC5\u987B\u5B9A\u4E49\u4E00\u4E2A\u67E5\u8BE2\u548C\u4E00\u4E2A\u6216\u591A\u4E2A\u51FD\u6570\uFF0C\u81EA\u5B9A\u4E49\u51FD\u6570\u4F1A\u4E3A\u67E5\u8BE2\u8FD4\u56DE\u7684\u6BCF\u4E2A\u6587\u6863\u8BA1\u7B97\u4E00\u4E2A\u65B0\u5206\u6570\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol><li><p>field_value_factor</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;functions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					<span class="token property">&quot;field_value_factor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;collected_num&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;modifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ln2p&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;factor&quot;</span><span class="token operator">:</span> <span class="token number">1.2</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C06\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C\u8FDB\u884C\u8BA1\u7B97\u5F97\u51FA\u5206\u6570\u3002</p><ul><li>field\uFF1A\u8981\u8BA1\u7B97\u7684\u5B57\u6BB5\uFF0C\uFF08\u9700\u8981\u662F\u6570\u503C\u578B\uFF09</li><li>factor\uFF1A\u5F53\u524D\u5206\u6570\u8BA1\u7B97\uFF0C\u5BF9\u6574\u4E2A\u7ED3\u679C\u4EA7\u751F\u7684\u6743\u91CD\u6BD4\u3002</li><li>modifier\uFF1A\u4EE5\u4F55\u79CD\u8FD0\u7B97\u65B9\u5F0F\u8BA1\u7B97\uFF0C\u63A5\u53D7\u4EE5\u4E0B\u679A\u4E3E\u3002 <ol><li>none\uFF1A\u4E0D\u5904\u7406</li><li>log\uFF1A\u8BA1\u7B97\u5BF9\u6570</li><li>log1p\uFF1A\u5148\u5C06\u5B57\u6BB5\u503C +1\uFF0C\u518D\u8BA1\u7B97\u5BF9\u6570</li><li>log2p\uFF1A\u5148\u5C06\u5B57\u6BB5\u503C +2\uFF0C\u518D\u8BA1\u7B97\u5BF9\u6570</li><li>ln\uFF1A\u8BA1\u7B97\u81EA\u7136\u5BF9\u6570</li><li>ln1p\uFF1A\u5148\u5C06\u5B57\u6BB5\u503C +1\uFF0C\u518D\u8BA1\u7B97\u81EA\u7136\u5BF9\u6570</li><li>ln2p\uFF1A\u5148\u5C06\u5B57\u6BB5\u503C +2\uFF0C\u518D\u8BA1\u7B97\u81EA\u7136\u5BF9\u6570</li><li>square\uFF1A\u8BA1\u7B97\u5E73\u65B9</li><li>sqrt\uFF1A\u8BA1\u7B97\u5E73\u65B9\u6839</li><li>reciprocal\uFF1A\u8BA1\u7B97\u5012\u6570</li></ol></li><li>weight\uFF1A\u5F53\u524D\u7684\u5206\u6570\u8BA1\u7B97\u51FD\u6570\uFF0C\u5BF9\u6574\u4E2A\u7ED3\u679C\u4EA7\u751F\u7684\u6743\u91CD\u6BD4\u3002</li></ul></li><li><p>random_score</p><p>\u968F\u673A\u5F97\u5230 0 \u5230 1 \u5206\u6570\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;random_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>script_score</p><p>\u901A\u8FC7\u81EA\u5B9A\u4E49\u811A\u672C\u8BA1\u7B97\u5206\u503C</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;script_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Math.log(1 + doc[&#39;price&#39;].value)&quot;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>boost_mode</p><p>\u6307\u5B9A\u8BA1\u7B97\u540E\u7684\u5206\u6570\u4E0E\u539F\u59CB\u7684_score\u5982\u4F55\u5408\u5E76\uFF0C\u6709\u4EE5\u4E0B\u9009\u9879\uFF1A</p><ol><li>imultiply\uFF1A\u67E5\u8BE2\u5206\u6570\u548C\u51FD\u6570\u5206\u6570\u76F8\u4E58</li><li>sum\uFF1A\u67E5\u8BE2\u5206\u6570\u548C\u51FD\u6570\u5206\u6570\u76F8\u52A0</li><li>avg\uFF1A\u53D6\u5E73\u5747\u503C</li><li>replace\uFF1A\u66FF\u6362\u539F\u59CB\u5206\u6570</li><li>min\uFF1A\u53D6\u67E5\u8BE2\u5206\u6570\u548C\u51FD\u6570\u5206\u6570\u7684\u6700\u5C0F\u503C</li><li>max\uFF1A\u53D6\u67E5\u8BE2\u5206\u6570\u548C\u51FD\u6570\u5206\u6570\u7684\u6700\u5927\u503C</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;function_score&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;boost_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;multiply&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>max_boost</p><p>\u8BBE\u7F6E\u76F8\u5173\u6027\u5206\u6570\u7684\u4E0A\u9650\uFF0C\u6BD4\u5982&quot;max_boost&quot;: 10\uFF0C\u5219\u8BA1\u7B97\u7684\u76F8\u5173\u6027\u5206\u6570\u6700\u5927\u4E3A10\uFF0C\u8D85\u8FC7\u7684\u9650\u5236\u4E3A10\uFF0C\u5C0F\u4E8E10\u7684\uFF0C\u4ECD\u7136\u662F\u539F\u6570\u636E\u3002</p></li></ol><h2 id="nested-search\u590D\u6742\u7C7B\u578B\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#nested-search\u590D\u6742\u7C7B\u578B\u67E5\u8BE2" aria-hidden="true">#</a> Nested Search\u590D\u6742\u7C7B\u578B\u67E5\u8BE2</h2><h3 id="_1\u3001\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> 1\u3001\u57FA\u672C\u6982\u5FF5</h3><ul><li><p>nested\u7C7B\u578B\u662Fobject\u6570\u636E\u7C7B\u578B\u7684\u4E13\u7528\u7248\u672C\uFF0C\u5B83\u5141\u8BB8\u4EE5\u53EF\u4EE5\u5F7C\u6B64\u72EC\u7ACB\u5730\u67E5\u8BE2\u5BF9\u8C61\u7684\u65B9\u5F0F\u5BF9\u5BF9\u8C61\u6570\u7EC4\u8FDB\u884C\u7D22\u5F15\uFF0C\u5F53\u5B58\u50A8\u5185\u90E8\u5BF9\u8C61\u4E3A\u590D\u6742\u7C7B\u578B\u65F6\u5E94\u8BE5\u4F7F\u7528nested\u800C\u4E0D\u662Fobject\u3002</p></li><li><p>\u9ED8\u8BA4\u7684object\u7C7B\u578B\uFF0C\u4F1A\u5C06\u590D\u6742\u7C7B\u578B\u6240\u6709\u6570\u636E\u4E2D\u76F8\u540C\u5B57\u6BB5\u7684\u503C\u521B\u5EFA\u4E3A\u540C\u4E00\u4E2A\u7D22\u5F15\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PUT /order/_doc/1
{
	&quot;order_name&quot;: &quot;\u5C0F\u7C7310 Pro\u8BA2\u5355&quot;,
	&quot;desc&quot;: &quot;shouji zhong de zhandouji&quot;,
	&quot;goods_count&quot;: 3,
	&quot;total_price&quot;: 12699,
	&quot;goods_list&quot;: [
		{
			&quot;name&quot;: &quot;\u5C0F\u7C7310 PRO MAX 5G&quot;,
			&quot;price&quot;: 4999
		},
		{
			&quot;name&quot;: &quot;\u94A2\u5316\u819C&quot;,
			&quot;price&quot;: 19
		},
		{
			&quot;name&quot;: &quot;\u624B\u673A\u58F3&quot;,
			&quot;price&quot;: 199
		}
	]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136goods_list\u5B58\u5728\u4E09\u6761\u6570\u636E\uFF0C\u4F46\u662F\u5728\u521B\u5EFA\u7D22\u5F15\u65F6\uFF0C\u4F1A\u5C06\u6240\u6709\u7684name\u3001price\u7EDF\u4E00\u521B\u5EFA\uFF0C\u5B9E\u9645\u5E94\u8BE5\u6309\u7167\u4E09\u6761\u6570\u636E\u8FDB\u884C\u5206\u89E3\u67E5\u627E\uFF0C\u4F46\u662F\u6700\u7EC8\u4F1A\u6C47\u805A\u6210\u4E00\u6761\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>#\u4E09\u6761\u6570\u636E\u53D8\u6210\u4E86\u4E00\u6761
<span class="token punctuation">{</span>
	<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&quot;\u5C0F\u7C7310&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;PRO&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;MAX&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;5G&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;\u94A2\u5316\u819C&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;\u624B\u673A\u58F3&quot;</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token number">4999</span><span class="token punctuation">,</span>
		<span class="token number">19</span><span class="token punctuation">,</span>
		<span class="token number">199</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5224\u65AD\u6570\u636E\u683C\u5F0F\u662F\u5D4C\u5957\u7C7B\u578B\uFF0C\u521B\u5EFAmapping\u65F6\uFF0C\u5B57\u6BB5\u7C7B\u578B\u5E94\u8BE5\u6307\u5B9A\u4E3Anested\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4F1A\u521B\u5EFA\u4E3Aobject\u7C7B\u578B\u3002\u5BFC\u81F4\u6309\u7167\u6761\u4EF6\u67E5\u8BE2\u65F6\u7ED3\u679C\u9519\u8BEF\u3002</p></li></ul><h3 id="_2\u3001\u67E5\u8BE2\u8BED\u6CD5\u4EE5\u53CAmapping" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u67E5\u8BE2\u8BED\u6CD5\u4EE5\u53CAmapping" aria-hidden="true">#</a> 2\u3001\u67E5\u8BE2\u8BED\u6CD5\u4EE5\u53CAmapping</h3><ul><li><p>\u67E5\u8BE2\u65F6\u8981\u4F7F\u7528nested\u67E5\u8BE2\uFF0Cpath\u4E3Anested\u5D4C\u5957\u7684\u7EA7\u522B\uFF0Cnested\u5BF9\u8C61\u7684\u67E5\u8BE2\u6DF1\u5EA6\u3002query\u4E3A\u5B50\u67E5\u8BE2\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path_to_nested_doc&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFAmapping\u793A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;goods_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
						<span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
							<span class="token property">&quot;keyword&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
								<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
								<span class="token property">&quot;ignore_above&quot;</span><span class="token operator">:</span> <span class="token number">256</span>
							<span class="token punctuation">}</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>goods_list\u4E3Anested\u67E5\u8BE2\uFF0C\u6240\u4EE5\u8981\u67E5\u8BE2goods_list\u6570\u636E\u65F6\uFF0C\u8981\u4F7F\u7528nested\uFF0C\u5E76\u4E14path\u4F7F\u7528goods_list\u3002</p><p>\u6B63\u786E\u7684\u67E5\u8BE2\u7ED3\u679C</p><p><img src="`+T+`" alt="image-20210815101508207"></p><p>\u5982\u679C\u4E0D\u4F7F\u7528nested\u7C7B\u578B\uFF0C\u67E5\u8BE2\u65F6\u5C06\u4F1A\u5339\u914Dgoods_list\u6240\u6709\u7684\u6570\u636E\uFF0C\u5E76\u4E0D\u53EA\u662F\u6309\u7167\u6BCF\u6761\u5355\u72EC\u5339\u914D\u3002</p></li></ul><h3 id="_3\u3001\u590D\u6742\u67E5\u8BE2\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u590D\u6742\u67E5\u8BE2\u793A\u4F8B" aria-hidden="true">#</a> 3\u3001\u590D\u6742\u67E5\u8BE2\u793A\u4F8B</h3><ul><li><p>\u590D\u6742\u7684\u5D4C\u5957\u67E5\u8BE2\u793A\u4F8B</p><p>\u521B\u5EFAmapping</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /area
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;cities&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nested&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_max_word&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D2\u5165\u6570\u636E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /area/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC\u5E02&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E30\u53F0\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6D77\u6DC0\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u671D\u9633\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E1C\u57CE\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u897F\u57CE\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u660C\u5E73\u533A&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT /area/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6CB3\u5357\u7701&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u90D1\u5DDE\u5E02&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u91D1\u6C34\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9AD8\u65B0\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u90D1\u4E1C\u65B0\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E8C\u4E03\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u539F\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u60E0\u6D4E\u533A&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9E64\u58C1\u5E02&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5C71\u57CE\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6DC7\u6EE8\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9E64\u5C71\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u671D\u6B4C&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6D5A\u53BF&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT /area/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;province&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u53F0\u6E7E\u7701&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u53F0\u5317\u5E02&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u6B63\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5927\u540C\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E2D\u5C71\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E07\u534E\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4FE1\u4E49\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u677E\u5C71\u533A&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9AD8\u96C4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;district&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u5C0F\u6E2F\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u9F13\u5C71\u533A&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u4E09\u6C11\u533A&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u793A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>#city\u4E3A\u5305\u542B\u5317\u4EAC\u5E02 \u6216\u8005 \u5305\u542B\u6DC7\u6EE8\u533A\u7684\u7701\u4EFD\u4FE1\u606F
GET area/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;province&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;province.cities&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;province.cities.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5317\u4EAC&quot;</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;province.cities.district&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                      <span class="token property">&quot;term&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;province.cities.district.name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6DC7\u6EE8\u533A&quot;</span>
                      <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_4\u3001score-mode" tabindex="-1"><a class="header-anchor" href="#_4\u3001score-mode" aria-hidden="true">#</a> 4\u3001score_mode</h3><ul><li><p>score_mode\uFF1A\u805A\u5408\u5206\u6570\u8BA1\u7B97\u65B9\u5F0F</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;nested&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;path_to_nested_doc&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;score_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avg&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>avg \uFF08\u9ED8\u8BA4\uFF09\uFF1A\u4F7F\u7528\u6240\u6709\u5339\u914D\u7684\u5B50\u5BF9\u8C61\u7684\u5E73\u5747\u76F8\u5173\u6027\u5F97\u5206\u3002</li><li>max\uFF1A\u4F7F\u7528\u6240\u6709\u5339\u914D\u7684\u5B50\u5BF9\u8C61\u4E2D\u7684\u6700\u9AD8\u76F8\u5173\u6027\u5F97\u5206\u3002</li><li>min\uFF1A\u4F7F\u7528\u6240\u6709\u5339\u914D\u7684\u5B50\u5BF9\u8C61\u4E2D\u6700\u4F4E\u7684\u76F8\u5173\u6027\u5F97\u5206\u3002</li><li>none\uFF1A\u4E0D\u8981\u4F7F\u7528\u5339\u914D\u7684\u5B50\u5BF9\u8C61\u7684\u76F8\u5173\u6027\u5206\u6570\u3002\u8BE5\u67E5\u8BE2\u4E3A\u7236\u6587\u6863\u5206\u914D\u5F97\u5206\u4E3A0\u3002</li><li>sum\uFF1A\u5C06\u6240\u6709\u5339\u914D\u7684\u5B50\u5BF9\u8C61\u7684\u76F8\u5173\u6027\u5F97\u5206\u76F8\u52A0\u3002</li></ol></li></ul><h2 id="join\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#join\u67E5\u8BE2" aria-hidden="true">#</a> Join\u67E5\u8BE2</h2><h3 id="\u57FA\u672C\u6982\u5FF5-1" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6982\u5FF5-1" aria-hidden="true">#</a> \u57FA\u672C\u6982\u5FF5</h3><ul><li>\u5728\u540C\u4E00\u7D22\u5F15\u7684\u6587\u6863\u4E2D\u521B\u5EFA\u7236/\u5B50\u5173\u7CFB</li></ul><h3 id="\u521B\u5EFAmapping" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmapping" aria-hidden="true">#</a> \u521B\u5EFAmapping</h3><ul><li><p>\u521B\u5EFA\u4E86\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u540D\u79F0\u4E3Amy_join_field\uFF0Ctype\u4E3Ajoin\u3002\u6307\u5B9A\u4E0A\u4E0B\u7EA7\u5173\u7CFB\uFF0C\u4E0A\u7EA7\u4E3Adepart\uFF0C\u4E0B\u7EA7\u4E3Aemployee</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT join_test
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;join&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;relations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;depart&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u521B\u5EFA\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E</h3><ul><li><p>\u521B\u5EFA\u7236\u7EA7\u7684\u65F6\u5019\uFF0Cjoin\u5B57\u6BB5\u5185\u8981\u6307\u660E\u5F53\u524D\u6570\u636E\u7684join name\u3002\u7528\u4E8E\u9650\u5B9A\u5F53\u524D\u6570\u636E\u662F\u5426\u4E3A\u7236\u7EA7\u3002</p></li><li><p>\u521B\u5EFA\u5B50\u7EA7\u6570\u636E\u7684\u65F6\u5019\uFF0C\u9664\u4E86\u8981\u6307\u5B9Ajoin name\uFF0C\u8FD8\u8981\u6307\u5B9Arouting=1(\u7236\u7EA7id)\uFF0C\u8981\u4FDD\u8BC1\u5B50\u7EA7\u548C\u7236\u7EA7\u5728\u540C\u4E00\u5206\u7247\u5185\u3002\u5E76\u4E14\u8FD8\u8981\u6307\u5B9Aparent\u7684id\u662F\u54EA\u4E2A\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT join_test/_doc/<span class="token number">1</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u884C\u653F\u90E8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;depart&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT join_test/_doc/<span class="token number">2</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D22\u52A1\u90E8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;depart&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
PUT join_test/_doc/<span class="token number">3</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u7814\u53D1\u90E8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;depart&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

POST join_test/_doc?routing=<span class="token number">1</span>?refresh
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E00&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
POST join_test/_doc?routing=<span class="token number">1</span>?refresh
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E8C&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
POST join_test/_doc?routing=<span class="token number">1</span>?refresh
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;my_join_field&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="\u6570\u636E\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u67E5\u8BE2" aria-hidden="true">#</a> \u6570\u636E\u67E5\u8BE2</h3><ol><li><p>\u67E5\u8BE2\u7236\u7EA7\u6570\u636E</p><p>\u4F7F\u7528has_child\u5173\u952E\u5B57\u8FDB\u884C\u67E5\u8BE2\uFF0Ctype\u6307\u5B9A\u5B50\u7EA7\u7684\u7C7B\u578B\u3002\u5E76\u4E14\u53EA\u80FD\u67E5\u8BE2\u51FA\u5B58\u5728\u5B50\u7EA7\u7684\u7236\u7EA7\u6570\u636E\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET join_test/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;has_child&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u8BE2\u5B50\u7EA7\u6570\u636E</p><p>\u67E5\u8BE2\u5B50\u7EA7\u6570\u636E\u65F6\uFF0C\u8981\u4F7F\u7528has_parent\u5173\u952E\u5B57\uFF0C\u5E76\u4E14parent_type\u6307\u5B9A\u4E3A\u7236\u7EA7\u7684\u7C7B\u578B\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET join_test/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;has_parent&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;parent_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;depart&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u6307\u5B9Aid\u67E5\u8BE2</span>
GET join_test/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;employee&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;conut&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_join_field&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u9AD8\u4EAE\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u4EAE\u67E5\u8BE2" aria-hidden="true">#</a> \u9AD8\u4EAE\u67E5\u8BE2</h2><ul><li><p>\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5173\u952E\u8BCD\u9AD8\u4EAE\u663E\u793A\uFF0C\u4E00\u822C\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\u5373\u53EF\u3002</p></li><li><p>\u4E09\u79CD\u9AD8\u4EAE</p><ol><li>unified \uFF1A\u9ED8\u8BA4\u7684\u9AD8\u4EAE\u65B9\u5F0F\uFF0C\u4F7F\u7528Lucene\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002</li><li>plain \uFF1A\u6027\u80FD\u8F83\u9AD8\uFF0C\u6D88\u8017\u5C11\u91CF\u5185\u5B58\uFF0C\u6027\u4EF7\u6BD4\u9AD8\u3002</li><li>fvh\uFF1Afast vactor highlighter \u9002\u5408\u5B57\u6BB5\u8F83\u5927\uFF0C\u8F83\u590D\u6742\u7684\u67E5\u8BE2\u60C5\u51B5\uFF0C\u5B57\u6BB5\u9700\u8981\u8BBE\u7F6E\u4E3Avactor\u7C7B\u578B\u3002</li></ol><p>\u5E38\u7528plain\u5373\u53EF\u3002</p></li><li><p>\u81EA\u5B9A\u4E49\u6807\u7B7E</p><ol><li>pre_tag\uFF1A\u8D77\u59CB\u6807\u7B7E</li><li>post_tag\uFF1A\u7ED3\u675F\u6807\u7B7E</li><li>\u6BCF\u4E2A\u9AD8\u4EAE\u5B57\u6BB5\u90FD\u9700\u8981\u5BF9\u5E94\u4E00\u4E2A\u67E5\u8BE2</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET news/_search
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;baoqiang&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;baoqiang&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;b&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/b&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unified&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;pre_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;b&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post_tags&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;/b&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;unified&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+z+'" alt="image-20210815121901367"></p></li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>',82),P=[S];function w(F,U){return s(),a("div",null,P)}var A=n(G,[["render",w],["__file","05.\u67E5\u8BE2.html.vue"]]);export{A as default};
