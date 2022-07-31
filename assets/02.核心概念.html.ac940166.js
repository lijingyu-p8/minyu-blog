import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,e as r}from"./app.71e07f4f.js";var l="/minyu-blog/ElasticSearch/02/clipboard.png",d="/minyu-blog/ElasticSearch/02/\u5012\u6392\u7D22\u5F15\u7684\u7ED3\u6784.png",h="/minyu-blog/ElasticSearch/02/B+Tree.png",s="/minyu-blog/ElasticSearch/02/\u5143\u6570\u636E.png",c="/minyu-blog/ElasticSearch/02/shard.png";const n={},t=r('<h1 id="elasticsearch\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> ElasticSearch\u6838\u5FC3\u6982\u5FF5</h1><h2 id="\u4E00\u3001\u5168\u6587\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5168\u6587\u68C0\u7D22" aria-hidden="true">#</a> \u4E00\u3001\u5168\u6587\u68C0\u7D22</h2><p>\u7D22\u5F15\u7CFB\u7EDF\u901A\u8FC7\u626B\u63CF\u6587\u7AE0\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8BCD\uFF0C\u5BF9\u5176\u521B\u5EFA\u7D22\u5F15\uFF0C\u6307\u660E\u5728\u6587\u7AE0\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\u548C\u4F4D\u7F6E\uFF0C\u5F53\u7528\u6237\u67E5\u8BE2\u65F6\uFF0C\u7D22\u5F15\u7CFB\u7EDF\u5C31\u4F1A\u6839\u636E\u4E8B\u5148\u5EFA\u7ACB\u7684\u7D22\u5F15\u8FDB\u884C\u67E5\u627E\uFF0C\u5E76\u5C06\u67E5\u627E\u7684\u7ED3\u679C\u53CD\u9988\u7ED9\u7528\u6237\u7684\u68C0\u7D22\u65B9\u5F0F\u3002</p><h2 id="\u4E8C\u3001\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u4E8C\u3001\u6838\u5FC3\u6982\u5FF5</h2><h3 id="_2-1\u3001\u5012\u6392\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u5012\u6392\u7D22\u5F15" aria-hidden="true">#</a> 2.1\u3001\u5012\u6392\u7D22\u5F15</h3><p><img src="'+l+'" alt=""></p><p>\u5012\u6392\u7D22\u5F15\u4F1A\u5728\u5B58\u50A8\u6570\u636E\u65F6\u5C06\u5173\u952E\u8BCD\u548C\u6570\u636E\u8FDB\u884C\u5173\u8054\uFF0C\u4FDD\u5B58\u5230\u5012\u6392\u8868\u4E2D\uFF0C\u7136\u540E\u67E5\u8BE2\u65F6\uFF0C\u5C06\u67E5\u8BE2\u5185\u5BB9\u8FDB\u884C\u5206\u8BCD\u540E\u5728\u5012\u6392\u8868\u4E2D\u8FDB\u884C\u67E5\u8BE2\uFF0C\u6700\u540E\u5339\u914D\u6570\u636E\u5373\u53EF\u3002</p><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\u7684\u6B63\u5411\u7D22\u5F15\uFF0C\u6839\u636Eid\u53EF\u4EE5\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u67D0\u4E00\u6761\u6570\u636E\uFF0C\u662Fkey-value\u6A21\u578B\u3002\u5012\u6392\u7D22\u5F15\u662F\u53CD\u8FC7\u6765\uFF0C\u5C06\u6570\u636E\u8FDB\u884C\u5206\u8BCD\u62C6\u5206\uFF0C\u67E5\u627E\u7684\u65F6\u5019\u6839\u636E\u67D0\u4E2A\u8BCD\u6C47\uFF0C\u6309\u7167\u76F8\u5173\u5EA6\u6700\u7EC8\u5B9A\u4F4D\u5230id\u3002\u7C7B\u4F3Cvalue-key\u6A21\u578B\u3002</p><p>\u6BD4\u5982\u5BF9brand Name\u5B57\u6BB5\u5EFA\u7ACB\u5012\u6392\u7D22\u5F15\uFF0C\u4F1A\u5BF9\u6BCF\u6761\u8BB0\u5F55\u8FDB\u884C\u5206\u8BCD\uFF0C\u5E76\u8BB0\u5F55\u8FD9\u4E2A\u8BCD\u6C47\u51FA\u73B0\u5728\u54EA\u6761\u8BB0\u5F55\u4E2D\uFF0C\u201C\u5C0F\u7C73\u201D\u51FA\u73B0\u57281\u30012....100W\u4E2D\uFF0C&quot;NFC&quot;\u51FA\u73B0\u57282\u30013\u4E2D\u3002\u8FDB\u884C\u6570\u636E\u5B58\u50A8\u65F6\u4F1A\u6309\u7167\u5206\u8BCD\u89C4\u5219\u8FDB\u884C\u5206\u8BCD\u3001\u5012\u6392\u7D22\u5F15\u7684\u6784\u5EFA\uFF0C\u5E76\u4E14\u5728\u67E5\u8BE2\u65F6\uFF0C\u4E5F\u4F1A\u9488\u5BF9query string\u8FDB\u884C\u5206\u8BCD\u3002</p><h3 id="_2-2\u3001\u5012\u6392\u7D22\u5F15\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u5012\u6392\u7D22\u5F15\u7684\u7ED3\u6784" aria-hidden="true">#</a> 2.2\u3001\u5012\u6392\u7D22\u5F15\u7684\u7ED3\u6784</h3><p><img src="'+d+'" alt=""></p><p>\u4E3B\u8981\u5206\u4E3Aterm index \u8BCD\u9879\u7D22\u5F15\u3001term dictionary\u8BCD\u9879\u5B57\u5178\u3001posting list\u5012\u6392\u8868\u3002</p><ul><li>term dictionary\uFF1A\u8BCD\u9879\u5B57\u5178\u4E2D\u5B58\u50A8\u5206\u8BCD\u540E\u7684\u5404\u4E2A\u8BCD\u8BED\u3002</li><li>term index\uFF1A\u662F\u5BF9\u8BCD\u9879\u5B57\u5178\u4E2D\u7684\u5404\u4E2A\u8BCD\u9879\u5EFA\u7ACB\u7D22\u5F15\u3002</li><li>posting list\uFF1A\u5012\u6392\u8868\uFF0C\u5728\u5012\u6392\u8868\u4E2D\u4E3B\u8981\u4F1A\u5B58\u50A8\u5305\u542B\u5F53\u524D\u8BCD\u9879doc\u7684ids\u3002\u5E76\u4E14\u8FD8\u4F1A\u5305\u542B\u5176\u4ED6\u4FE1\u606F\uFF1A <ul><li>TF term frequency\uFF1A\u8BCD\u9891\uFF0C\u641C\u7D22\u7684\u5173\u952E\u8BCD\u5728\u6BCF\u4E2Adoc\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\uFF0C\u6B21\u6570\u8D8A\u591A\uFF0C\u4EE3\u8868\u76F8\u5173\u6027\u8D8A\u9AD8\u3002</li><li>IDF inverse doc frequency\uFF1A\u641C\u7D22\u7684\u5173\u952E\u8BCD\u5728\u6574\u4F53\u5012\u6392\u7D22\u5F15\u4E2D\u51FA\u73B0\u7684\u6B21\u6570\uFF0C\u51FA\u73B0\u7684\u6B21\u6570\u8D8A\u591A\uFF0C\u4EE3\u8868\u76F8\u5173\u6027\u8D8A\u4F4E\uFF0C\u5173\u952E\u8BCD\u8D8A\u4E0D\u91CD\u8981\uFF0C\u6BD4\u5982\u201C\u662F\u201D\u3001\u201C\u4E86\u201D\u8FD9\u7C7B\u8BCD\u6C47\uFF0C\u5C31\u662F\u975E\u5E38\u4E0D\u91CD\u8981\u7684\u6570\u636E\u3002</li><li>\u6BCF\u4E2Adoc\u7684\u957F\u5EA6\uFF1A\u8D8A\u957F\u76F8\u5173\u5EA6\u8D8A\u4F4E\u3002</li><li>\u5305\u542B\u8FD9\u4E2A\u5173\u952E\u8BCD\u7684\u6240\u6709doc\u7684\u5E73\u5747\u957F\u5EA6\u3002</li></ul></li></ul><h3 id="_2-3\u3001\u5012\u6392\u7D22\u5F15\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u5012\u6392\u7D22\u5F15\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2.3\u3001\u5012\u6392\u7D22\u5F15\u7684\u4F18\u52BF</h3><p><img src="'+h+'" alt=""></p><p>\u7C7B\u4F3CMySQL\u7684B+Tree\u7D22\u5F15\u7ED3\u6784\uFF0C\u5C5E\u4E8E\u6B63\u5411\u7D22\u5F15\uFF0C\u5F53\u9762\u5BF9\u5C0F\u6570\u636E\u91CF\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u63D0\u5347\u68C0\u7D22\u901F\u5EA6\uFF0C\u4F46\u662F\u5F53\u7528\u4E8E\u5927\u6570\u636E\u91CF\u4EE5\u53CA\u68C0\u7D22\u9700\u6C42\u7684\u65F6\u5019\uFF0C\u5C31\u529B\u4E0D\u4ECE\u5FC3\u4E86\u3002</p><ul><li>\u5F53\u6570\u636E\u91CF\u4E0A\u4EBF\u7684\u65F6\u5019\uFF0C\u5BF9\u4E8E\u641C\u7D22\u5F15\u64CE\u6765\u8BF4\uFF0C\u6570\u636E\u91CF\u5176\u5B9E\u8FD8\u5C0F\uFF0C\u4F46\u662F\u5982\u679C\u4F7F\u7528MySQL\u8FD9\u79CD\u6B63\u5411\u7D22\u5F15\uFF0C\u5C31\u4F1A\u5BFC\u81F4B+Tree\u7684\u7D22\u5F15\u6DF1\u5EA6\u975E\u5E38\u6DF1\uFF0C\u968F\u4E4B\u800C\u6765\u7684IO\u5C31\u4F1A\u53D8\u7684\u5F88\u53EF\u6015\u3002</li><li>\u68C0\u7D22\u6570\u636E\u7684\u9700\u6C42\uFF0C\u5E76\u4E0D\u662F\u7C7B\u4F3C\u6B63\u6392\u7D22\u5F15\u90A3\u6837\uFF0C\u4F7F\u7528like %XXX%\u5373\u53EF\u641C\u7D22\u5230\u6570\u636E\uFF0C\u68C0\u7D22\u66F4\u591A\u7684\u573A\u666F\u662F\u5173\u952E\u8BCD\u201C\u4E2D\u56FD\u201D\uFF0C\u53EF\u4EE5\u68C0\u7D22\u51FA\u4E2D\u56FD\u3001\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u3001China\u8FD9\u79CD\u7684\u6570\u636E\u3002</li><li>\u7D22\u5F15\u7684\u5B57\u6BB5\u5F80\u5F80\u662F\u5F88\u957F\u7684\u5927\u6587\u672C\uFF0C\u4E5F\u4E0D\u9002\u5408\u5EFA\u7ACB\u6B63\u6392\u7D22\u5F15\u3002</li></ul><p>\u57FA\u4E8E\u5012\u6392\u7D22\u5F15\uFF0C\u53EF\u4EE5\u68C0\u7D22\u6D77\u91CF\u6570\u636E\uFF0C\u5E76\u53EF\u4EE5\u652F\u6301\u8BF8\u5982\u540C\u4E49\u8BCD\u8F6C\u6362\u3001\u4E2D\u82F1\u6587\u8F6C\u6362\u3001\u76F8\u5173\u5EA6\u8BC4\u5206\u7B49\u529F\u80FD\u3002</p><h3 id="_2-4\u3001es\u7684\u6838\u5FC3\u5173\u952E\u8BCD" tabindex="-1"><a class="header-anchor" href="#_2-4\u3001es\u7684\u6838\u5FC3\u5173\u952E\u8BCD" aria-hidden="true">#</a> 2.4\u3001ES\u7684\u6838\u5FC3\u5173\u952E\u8BCD</h3><p><img src="'+s+'" alt="image-20210729161235554"></p><h4 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h4><p>ElasticSearch\u76F8\u5F53\u4E8E\u5173\u7CFB\u578B\u6570\u636E\u5E93MySQL\uFF0C\u662F\u4E00\u4E2A\u5B58\u50A8\u6570\u636E\u3001\u63D0\u4F9B\u641C\u7D22\u67E5\u8BE2\u529F\u80FD\u7684\u6574\u4F53\u5E94\u7528\u7A0B\u5E8F\u3002</p><h4 id="\u7D22\u5F15-index" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15-index" aria-hidden="true">#</a> \u7D22\u5F15\uFF08index\uFF09</h4><p>\u7D22\u5F15\u3002\u7C7B\u4F3C\u4E8E\u6570\u636E\u5E93\uFF0C\u5B83\u662F\u6211\u4EEC\u5B58\u50A8\u548C\u7D22\u5F15\u5173\u8054\u6570\u636E\u7684\u5730\u65B9\u3002\u5176\u5B9E\u4E5F\u53EF\u4EE5\u6309\u7167\u4E00\u5F20\u6570\u636E\u5E93\u8868\u7684\u6982\u5FF5\u6765\u7406\u89E3\u3002\u4E00\u4E2Aindex\u4F1A\u5B58\u50A8\u4E00\u7C7B\u4E8B\u52A1\u7684\u6570\u636E\uFF0C\u6BD4\u5982dog_index\uFF0C\u4F1A\u5B58\u50A8\u6240\u6709dog\u7684\u6570\u636E\u3002</p><p>[^\u63D0\u793A\uFF1A\u4E8B\u5B9E\u4E0A\uFF0C\u6211\u4EEC\u7684\u6570\u636E\u88AB\u5B58\u50A8\u548C\u7D22\u5F15\u5728\u5206\u7247(shards)\u4E2D\uFF0C\u7D22\u5F15\u53EA\u662F\u4E00\u4E2A\u903B\u8F91\u7A7A\u95F4\uFF0C\u8FD9\u4E2A\u903B\u8F91\u7A7A\u95F4\u628A\u4E00\u4E2A\u6216\u591A\u4E2A\u5206\u7247\u5206\u7EC4\u5728\u4E00\u8D77\u3002\u7136\u800C\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E9B\u5185\u90E8\u7EC6\u8282\u2014\u2014\u6211\u4EEC\u7684\u7A0B\u5E8F\u5B8C\u5168\u4E0D\u7528\u5173\u5FC3\u5206\u7247\u3002\u5BF9\u4E8E\u6211\u4EEC\u7684\u7A0B\u5E8F\u800C\u8A00\uFF0C\u6587\u6863\u5B58\u50A8\u5728\u7D22\u5F15(index)\u4E2D\u3002\u5269\u4E0B\u7684\u7EC6\u8282\u7531Elasticsearch\u5173\u5FC3\u65E2\u53EF\u3002]:</p><h4 id="\u7C7B\u578B-type" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B-type" aria-hidden="true">#</a> \u7C7B\u578B\uFF08type\uFF09</h4><p>\u7C7B\u578B\u3002\u5982\u679C\u628Aindex\u7406\u89E3\u6210\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u53EF\u53C2\u7167\u6570\u636E\u5E93\u4E2D\u7684table\u8868\u7684\u6982\u5FF5\u6765\u7406\u89E3type\u3002\u62E5\u6709\u81EA\u5DF1\u7684mapping\u7ED3\u6784\u3001\u62E5\u6709field\u5B57\u6BB5\u3001\u5C5E\u6027\u7B49\u4FE1\u606F\uFF0C\u4F46\u662F\u5728es7\u4E2D\u9010\u6E10\u88AB\u5E9F\u5F03\uFF0C\u5728es8\u4E2D\u88AB\u5F7B\u5E95\u5E9F\u5F03\u3002\u4E00\u822Ces\u4F1A\u9ED8\u8BA4\u8BBE\u7F6Etype\u503C\u4E3A_doc\u3002</p><h4 id="\u6587\u6863-document" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863-document" aria-hidden="true">#</a> \u6587\u6863\uFF08document\uFF09</h4><ul><li>\u5B58\u50A8\u5728Elasticsearch\u4E2D\u7684\u4E3B\u8981\u5B9E\u4F53\u53EB\u6587\u6863\uFF08document\uFF09\u3002\u7528\u5173\u7CFB\u578B\u6570\u636E\u5E93\u6765\u7C7B\u6BD4\u7684\u8BDD\uFF0C\u4E00\u4E2A\u6587\u6863\u76F8\u5F53\u4E8E\u6570\u636E\u5E93\u8868\u4E2D\u7684\u4E00\u884C\u8BB0\u5F55\uFF0C\u662Fjson\u683C\u5F0F\u3002</li><li>Elasticsearch\u4E2D\u7684\u6587\u6863\uFF0C\u53EF\u4EE5\u6709\u4E0D\u540C\u7684mapping\u7ED3\u6784\uFF0C\u4F46Elasticsearch\u7684\u6587\u6863\u4E2D\uFF0C\u76F8\u540C\u5B57\u6BB5\u5FC5\u987B\u6709\u76F8\u540C\u7C7B\u578B\u3002\u6BD4\u5982\u5B58\u50A8\u4E24\u6761\u6570\u636E\u7684\u65F6\u5019\uFF0Cname\u5B57\u6BB5\u7684\u7C7B\u578B\u5FC5\u987B\u76F8\u540C\uFF0C\u4E0D\u80FD\u4E00\u4E2A\u662Fstring\uFF0C\u53E6\u4E00\u4E2Ainteger\u3002</li><li>\u6587\u6863\u7531\u591A\u4E2A\u5B57\u6BB5\u7EC4\u6210\uFF0C\u6BCF\u4E2A\u5B57\u6BB5\u53EF\u80FD\u591A\u6B21\u51FA\u73B0\u5728\u4E00\u4E2A\u6587\u6863\u91CC\uFF0C\u8FD9\u6837\u7684\u5B57\u6BB5\u53EB\u591A\u503C\u5B57\u6BB5\uFF08multivalued\uFF09\u3002 \u6BCF\u4E2A\u5B57\u6BB5\u7684\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F\u6587\u672C\u3001\u6570\u503C\u3001\u65E5\u671F\u7B49\u3002\u5B57\u6BB5\u7C7B\u578B\u4E5F\u53EF\u4EE5\u662F\u590D\u6742\u7C7B\u578B\uFF0C\u4E00\u4E2A\u5B57\u6BB5\u5305\u542B\u5176\u4ED6\u5B50\u6587\u6863\u6216\u8005\u6570\u7EC4\u3002</li></ul><h4 id="\u5B57\u6BB5-field" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5-field" aria-hidden="true">#</a> \u5B57\u6BB5\uFF08field\uFF09</h4><p>\u5B57\u6BB5\u3002\u548CMySQL\u4E2D\u7684\u5B57\u6BB5\u7C7B\u4F3C\uFF0C\u4E5F\u6709\u81EA\u5DF1\u7684\u7C7B\u578B\uFF0C\u6570\u636E\u7ED3\u6784\u3002</p><h4 id="\u8282\u70B9-node" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9-node" aria-hidden="true">#</a> \u8282\u70B9\uFF08node\uFF09</h4><p>\u8282\u70B9\uFF0C\u4E00\u4E2AES\u5B9E\u4F8B\u5C31\u662F\u4E00\u4E2Anode\u3002\u4E0D\u540C\u7684node\u53EF\u4EE5\u5EFA\u7ACB\u5728\u540C\u4E00\u53F0\u7269\u7406\u673A\u4E0A\uFF0C\u4F46\u662F\u4E3A\u4E86\u66F4\u597D\u7684\u6027\u80FD\uFF0C\u4E00\u822C\u4E00\u53F0\u7269\u7406\u673A\u4E0A\u53EA\u4F1A\u914D\u7F6E\u4E00\u4E2Aes\u5B9E\u4F8B\uFF0C\u4E0D\u4F1A\u5B89\u88C5\u5176\u4ED6\u670D\u52A1\u3002</p><h2 id="\u4E09\u3001es\u7684\u5206\u7247\u548C\u526F\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001es\u7684\u5206\u7247\u548C\u526F\u672C" aria-hidden="true">#</a> \u4E09\u3001ES\u7684\u5206\u7247\u548C\u526F\u672C</h2><h3 id="_3-1\u3001\u5206\u7247" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001\u5206\u7247" aria-hidden="true">#</a> 3.1\u3001\u5206\u7247</h3><p>\u4E3A\u4E86\u5C06\u6570\u636E\u6DFB\u52A0\u5230Elasticsearch\uFF0C\u6211\u4EEC\u9700\u8981\u7D22\u5F15(index)\u2014\u2014\u4E00\u4E2A\u5B58\u50A8\u5173\u8054\u6570\u636E\u7684\u5730\u65B9\u3002\u5B9E\u9645\u4E0A\uFF0C\u7D22\u5F15\u53EA\u662F\u4E00\u4E2A\u7528\u6765\u6307\u5411\u4E00\u4E2A\u6216\u591A\u4E2A\u5206\u7247(shards)\u7684\u201C\u903B\u8F91\u547D\u540D\u7A7A\u95F4(logical namespace)\u201D.</p><ul><li>\u4E00\u4E2A\u5206\u7247(shard)\u662F\u4E00\u4E2A\u6700\u5C0F\u7EA7\u522B\u201C\u5DE5\u4F5C\u5355\u5143(worker unit)\u201D\uFF0C\u5B83\u53EA\u662F\u4FDD\u5B58\u4E86\u7D22\u5F15\u4E2D\u6240\u6709\u6570\u636E\u7684\u4E00\u90E8\u5206\u3002</li><li>\u5206\u7247\u53EF\u4EE5\u662F\u4E3B\u5206\u7247(primary shard)\u6216\u8005\u662F\u526F\u672C\u5206\u7247(replica shard)\u3002</li><li>\u4E00\u4E2A\u7D22\u5F15\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u5206\u7247\uFF0C\u57287.0\u4E4B\u524D\u9ED8\u8BA4\u4E94\u4E2A\u4E3B\u5206\u7247\uFF0C\u6BCF\u4E2A\u4E3B\u5206\u7247\u4E00\u4E2A\u526F\u672C\u3002\u57287.0\u4E4B\u540E\u9ED8\u8BA4\u4E00\u4E2A\u4E3B\u5206\u7247\u3002\u526F\u672C\u53EF\u4EE5\u5728\u7D22\u5F15\u521B\u5EFA\u4E4B\u540E\u4FEE\u6539\u6570\u91CF\uFF0C\u4F46\u662F\u4E3B\u5206\u7247\u7684\u6570\u91CF\u4E00\u65E6\u786E\u5B9A\u4E0D\u53EF\u4FEE\u6539\uFF0C\u53EA\u80FD\u521B\u5EFA\u7D22\u5F15\u3002</li><li>\u6BCF\u4E2A\u5206\u7247\u90FD\u662F\u4E00\u4E2ALucene\u5B9E\u4F8B\uFF0C\u6709\u5B8C\u6574\u7684\u521B\u5EFA\u7D22\u5F15\u548C\u5904\u7406\u8BF7\u6C42\u7684\u80FD\u529B\u3002</li><li>ES\u4F1A\u81EA\u52A8\u5728nodes\u4E0A\u505A\u5206\u7247\u5747\u8861\u3002</li><li>\u4E00\u4E2Adoc\u4E0D\u53EF\u80FD\u540C\u65F6\u5B58\u5728\u4E8E\u591A\u4E2A\u4E3B\u5206\u7247\u4E2D\uFF0C\u4F46\u662F\u5F53\u6BCF\u4E2A\u4E3B\u5206\u7247\u7684\u526F\u672C\u6570\u91CF\u4E0D\u4E3A1\u65F6\uFF0C\u53EF\u4EE5\u540C\u65F6\u5B58\u5728\u4E8E\u591A\u4E2A\u526F\u672C\u4E2D\uFF0C\u6240\u4EE5\u4E3B\u5206\u7247\u7684\u6570\u91CF\u51B3\u5B9A\u4E86\u7D22\u5F15\u6700\u591A\u80FD\u5B58\u50A8\u591A\u5C11\u6570\u636E\u3002</li><li>\u6BCF\u4E2A\u4E3B\u5206\u7247\u548C\u5176\u526F\u672C\u5206\u7247\u4E0D\u80FD\u540C\u65F6\u5B58\u5728\u4E8E\u540C\u4E00\u4E2A\u8282\u70B9\u4E0A\uFF0C\u6240\u4EE5\u6700\u4F4E\u7684\u53EF\u7528\u914D\u7F6E\u662F\u4E24\u4E2A\u8282\u70B9\u4E92\u4E3A\u4E3B\u5907\u3002</li></ul><h3 id="_3-2\u3001\u526F\u672C" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001\u526F\u672C" aria-hidden="true">#</a> 3.2\u3001\u526F\u672C</h3><p>\u5728\u4E00\u4E2A\u7F51\u7EDC / \u4E91\u7684\u73AF\u5883\u91CC\uFF0C\u5931\u8D25\u968F\u65F6\u90FD\u53EF\u80FD\u53D1\u751F\uFF0C\u5728\u67D0\u4E2A\u5206\u7247/\u8282\u70B9\u4E0D\u77E5\u600E\u4E48\u7684\u5C31\u5904\u4E8E\u79BB\u7EBF\u72B6\u6001\uFF0C\u6216\u8005\u7531\u4E8E\u4EFB\u4F55\u539F\u56E0\u6D88\u5931\u4E86\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6709\u4E00\u4E2A\u6545\u969C\u8F6C\u79FB\u673A\u5236\u662F\u975E\u5E38\u6709\u7528\u5E76\u4E14\u662F\u5F3A\u70C8\u63A8\u8350\u7684\u3002\u4E3A\u6B64\u76EE\u7684\uFF0CElasticsearch \u5141\u8BB8\u4F60\u521B\u5EFA\u5206\u7247\u7684\u4E00\u4EFD\u6216\u591A\u4EFD\u62F7\u8D1D\uFF0C\u8FD9\u4E9B\u62F7\u8D1D\u53EB\u505A\u526F\u672C\u5206\u7247\u3002</p><ul><li>\u526F\u672C\u5206\u7247\u53EA\u662F\u4E3B\u5206\u7247\u7684\u4E00\u4E2A\u526F\u672C\uFF0C\u5B83\u53EF\u4EE5\u89E3\u51B3\u786C\u4EF6\u6545\u969C\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u53EF\u4EE5\u63D0\u4F9B\u8BFB\u8BF7\u6C42\uFF0C\u6BD4\u5982\u641C\u7D22\u6216\u8005\u4ECE\u522B\u7684shard\u53D6\u56DE\u6587\u6863\u3002</li><li>\u5F53\u7D22\u5F15\u521B\u5EFA\u5B8C\u6210\u7684\u65F6\u5019\uFF0C\u4E3B\u5206\u7247\u7684\u6570\u91CF(number_of_shards)\u5C31\u56FA\u5B9A\u4E86\uFF0C\u4F46\u662F\u526F\u672C\u5206\u7247(number_of_replicas)\u7684\u6570\u91CF\u53EF\u4EE5\u968F\u65F6\u8C03\u6574\u3002</li><li>\u526F\u672C\u5206\u7247\u53EF\u4EE5\u63D0\u4F9B\u786C\u4EF6\u6545\u969C\u65F6\u7684\u5BB9\u707E\u4EE5\u53CA\u9632\u6B62\u6570\u636E\u4E22\u5931\u7684\u529F\u80FD\uFF0C\u6240\u4EE5\u4E3B\u5206\u7247\u548C\u526F\u672C\u5206\u7247\u662F\u4E0D\u80FD\u5728\u540C\u4E00\u4E2Aes \u5B9E\u4F8Bnode\u4E2D\u7684\u3002</li><li>\u526F\u672C\u5206\u7247\u53EF\u4EE5\u63D0\u4F9B\u5BB9\u707E\u3001\u63D0\u9AD8\u67E5\u8BE2\u6027\u80FD\u3002\u4F46\u662F\u526F\u672C\u5206\u7247\u4E0D\u80FD\u63D0\u4F9B\u5199\u5165\u529F\u80FD\u3002</li></ul><h3 id="_3-3\u3001\u5206\u914D" tabindex="-1"><a class="header-anchor" href="#_3-3\u3001\u5206\u914D" aria-hidden="true">#</a> 3.3\u3001\u5206\u914D</h3><p>\u5C06\u5206\u7247\u5206\u914D\u7ED9\u67D0\u4E2A\u8282\u70B9\u7684\u8FC7\u7A0B\uFF0C\u5305\u62EC\u5206\u914D\u4E3B\u5206\u7247\u6216\u8005\u526F\u672C\u3002\u5982\u679C\u662F\u526F\u672C\uFF0C\u8FD8\u5305\u542B\u4ECE\u4E3B\u5206\u7247\u590D\u5236\u6570\u636E\u7684\u8FC7\u7A0B\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u7531 master \u8282\u70B9\u5B8C\u6210\u7684\u3002</p><p><img src="'+c+'" alt="shard"></p><h2 id="\u56DB\u3001\u9762\u8BD5\u9898-es\u7684\u4F18\u52BF\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u9762\u8BD5\u9898-es\u7684\u4F18\u52BF\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u56DB\u3001\u9762\u8BD5\u9898\uFF1AES\u7684\u4F18\u52BF\u6709\u54EA\u4E9B</h2><ul><li>\u9762\u5411\u5F00\u53D1\u8005\u53CB\u597D\uFF0C\u5C4F\u853D\u4E86Lucene\u7684\u590D\u6742\u7279\u6027\uFF0C\u96C6\u7FA4\u81EA\u52A8\u53D1\u73B0\uFF08cluster discovery\uFF09</li><li>\u81EA\u52A8\u7EF4\u62A4\u6570\u636E\u5728\u591A\u4E2A\u8282\u70B9\u4E0A\u7684\u5EFA\u7ACB</li><li>\u4F1A\u5E2E\u6211\u4EEC\u505A\u641C\u7D22\u8BF7\u6C42\u7684\u8D1F\u8F7D\u5747\u8861</li><li>\u81EA\u52A8\u7EF4\u62A4\u5197\u4F59\u526F\u672C\uFF0C\u4FDD\u8BC1\u4E86\u90E8\u5206\u8282\u70B9\u5B95\u673A\u7684\u60C5\u51B5\u4E0B\u4ECD\u7136\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6570\u636E\u4E22\u5931</li><li>ES\u57FA\u4E8ELucene\u63D0\u4F9B\u4E86\u5F88\u591A\u9AD8\u7EA7\u529F\u80FD\uFF1A\u590D\u5408\u67E5\u8BE2\u3001\u805A\u5408\u5206\u6790\u3001\u57FA\u4E8E\u5730\u7406\u4F4D\u7F6E\u7B49\u3002</li><li>\u5BF9\u4E8E\u5927\u516C\u53F8\uFF0C\u53EF\u4EE5\u6784\u5EFA\u51E0\u767E\u53F0\u670D\u52A1\u5668\u7684\u5927\u578B\u5206\u5E03\u5F0F\u96C6\u7FA4\uFF0C\u5904\u7406PB\u7EA7\u522B\u6570\u636E\uFF1B\u5BF9\u4E8E\u5C0F\u516C\u53F8\uFF0C\u5F00\u7BB1\u5373\u7528\uFF0C\u95E8\u69DB\u4F4E\u4E0A\u624B\u7B80\u5355\u3002</li><li>\u76F8\u6BD4\u8F83\u4F20\u7EDF\u6570\u636E\u5E93\uFF0C\u63D0\u4F9B\u4E86\u5168\u6587\u68C0\u7D22\uFF0C\u540C\u4E49\u8BCD\u5904\u7406\uFF08\u7F8E\u4E3D\u7684cls&gt;\u6F02\u4EAE\u7684cls\uFF09\uFF0C\u76F8\u5173\u5EA6\u6392\u540D\u3002\u805A\u5408\u5206\u6790\u4EE5\u53CA\u6D77\u91CF\u6570\u636E\u7684\u8FD1\u5B9E\u65F6\uFF08NTR\uFF09\u5904\u7406\uFF0C\u8FD9\u4E9B\u4F20\u7EDF\u6570\u636E\u5E93\u5B8C\u5168\u505A\u4E0D\u5230\u3002</li></ul>',45),o=[t];function p(u,_){return a(),i("div",null,o)}var x=e(n,[["render",p],["__file","02.\u6838\u5FC3\u6982\u5FF5.html.vue"]]);export{x as default};
