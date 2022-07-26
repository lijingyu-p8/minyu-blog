const e=JSON.parse('{"key":"v-36cecbb4","path":"/ElasticSearch/05.%E6%9F%A5%E8%AF%A2.html","title":"05.Elasticsearch","lang":"en-US","frontmatter":{"icon":"edit","date":"2022-07-24T00:00:00.000Z","article":true,"category":["ElasticSearch"],"summary":"05.Elasticsearch Query DSL 1\u3001\u6307\u5B9Aid\u67E5\u8BE2 2\u3001match_all\\r\u67E5\u8BE2\u6240\u6709; 3\u3001match\\r\u6761\u4EF6\u5339\u914D\uFF0C\u5173\u952E\u8BCD\u4F1A\u88AB\u5206\u8BCD; \\r\u7B80\u5355\u641C\u7D22; \\r\u6307\u5B9A\u53C2\u6570; 1. query: \u67E5\u8BE2\u7684\u5173\u952E\u8BCD 2. operator: match\u67E5\u8BE2\u3002\u5173\u952E\u8BCD\u662F\u4F1A\u88AB\u5206\u8BCD\uFF0C\u67E5\u8BE2\u7ED3\u679C\u662Fbool\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u662For\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E3Aand\uFF0C\u53EA\u6709\u5168\u90E8\u5206\u8BCD\u7ED3\u679C\u5339\u914D\u624D\u662F\u76EE\u6807\u6570\u636E","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/minyu-blog/ElasticSearch/05.%E6%9F%A5%E8%AF%A2.html"}],["meta",{"property":"og:site_name","content":"\u654F\u9C7C-BLOG"}],["meta",{"property":"og:title","content":"05.Elasticsearch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T14:31:15.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:published_time","content":"2022-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T14:31:15.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Query DSL","slug":"query-dsl","children":[{"level":3,"title":"1\u3001\u6307\u5B9Aid\u67E5\u8BE2","slug":"_1\u3001\u6307\u5B9Aid\u67E5\u8BE2","children":[]},{"level":3,"title":"2\u3001match_all","slug":"_2\u3001match-all","children":[]},{"level":3,"title":"3\u3001match","slug":"_3\u3001match","children":[]},{"level":3,"title":"4\u3001term","slug":"_4\u3001term","children":[]},{"level":3,"title":"5\u3001terms","slug":"_5\u3001terms","children":[]},{"level":3,"title":"6\u3001_source","slug":"_6\u3001-source","children":[]},{"level":3,"title":"6\u3001prefix","slug":"_6\u3001prefix","children":[]},{"level":3,"title":"7\u3001sort\u6392\u5E8F","slug":"_7\u3001sort\u6392\u5E8F","children":[]}]},{"level":2,"title":"\u7EC4\u5408\u67E5\u8BE2","slug":"\u7EC4\u5408\u67E5\u8BE2","children":[]},{"level":2,"title":"\u8303\u56F4\u67E5\u8BE2","slug":"\u8303\u56F4\u67E5\u8BE2","children":[]},{"level":2,"title":"\u5206\u9875\u67E5\u8BE2","slug":"\u5206\u9875\u67E5\u8BE2","children":[]},{"level":2,"title":"\u6A21\u7CCA\u67E5\u8BE2","slug":"\u6A21\u7CCA\u67E5\u8BE2","children":[]},{"level":2,"title":"\u805A\u5408\u67E5\u8BE2","slug":"\u805A\u5408\u67E5\u8BE2","children":[{"level":3,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5","children":[]},{"level":3,"title":"\u805A\u5408\u6392\u5E8F","slug":"\u805A\u5408\u6392\u5E8F","children":[]},{"level":3,"title":"global","slug":"global","children":[]},{"level":3,"title":"histogram","slug":"histogram","children":[]},{"level":3,"title":"stats\u6269\u5C55","slug":"stats\u6269\u5C55","children":[]},{"level":3,"title":"cardinality","slug":"cardinality","children":[]},{"level":3,"title":"top_hits","slug":"top-hits","children":[]},{"level":3,"title":"filters","slug":"filters","children":[]},{"level":3,"title":"\u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148","slug":"\u6DF1\u5EA6\u4F18\u5148\u3001\u5E7F\u5EA6\u4F18\u5148","children":[]},{"level":3,"title":"adjacency_matrix\u90BB\u63A5\u77E9\u9635","slug":"adjacency-matrix\u90BB\u63A5\u77E9\u9635","children":[]}]},{"level":2,"title":"\u6279\u91CF\u67E5\u8BE2","slug":"\u6279\u91CF\u67E5\u8BE2","children":[]},{"level":2,"title":"\u811A\u672Cscript","slug":"\u811A\u672Cscript","children":[]},{"level":2,"title":"\u76F8\u5173\u6027\u5F97\u5206\u539F\u7406\u53CA\u6392\u5E8F\u89C4\u5219\u4F18\u5316","slug":"\u76F8\u5173\u6027\u5F97\u5206\u539F\u7406\u53CA\u6392\u5E8F\u89C4\u5219\u4F18\u5316","children":[{"level":3,"title":"1\u3001analyzer\u548Csearch_analyzer","slug":"_1\u3001analyzer\u548Csearch-analyzer","children":[]},{"level":3,"title":"2\u3001shard local IDF\u548Cglobal IDF\uFF08\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u95EE\u9898\u89E3\u6790\uFF09","slug":"_2\u3001shard-local-idf\u548Cglobal-idf-\u591Ashard\u4E0B\u8BC4\u5206\u4E0D\u51C6\u786E\u95EE\u9898\u89E3\u6790","children":[]},{"level":3,"title":"3\u3001multi_match\u591A\u5B57\u6BB5\u641C\u7D22","slug":"_3\u3001multi-match\u591A\u5B57\u6BB5\u641C\u7D22","children":[]},{"level":3,"title":"4\u3001function score query","slug":"_4\u3001function-score-query","children":[]}]},{"level":2,"title":"Nested Search\u590D\u6742\u7C7B\u578B\u67E5\u8BE2","slug":"nested-search\u590D\u6742\u7C7B\u578B\u67E5\u8BE2","children":[{"level":3,"title":"1\u3001\u57FA\u672C\u6982\u5FF5","slug":"_1\u3001\u57FA\u672C\u6982\u5FF5","children":[]},{"level":3,"title":"2\u3001\u67E5\u8BE2\u8BED\u6CD5\u4EE5\u53CAmapping","slug":"_2\u3001\u67E5\u8BE2\u8BED\u6CD5\u4EE5\u53CAmapping","children":[]},{"level":3,"title":"3\u3001\u590D\u6742\u67E5\u8BE2\u793A\u4F8B","slug":"_3\u3001\u590D\u6742\u67E5\u8BE2\u793A\u4F8B","children":[]},{"level":3,"title":"4\u3001score_mode","slug":"_4\u3001score-mode","children":[]}]},{"level":2,"title":"Join\u67E5\u8BE2","slug":"join\u67E5\u8BE2","children":[{"level":3,"title":"\u57FA\u672C\u6982\u5FF5","slug":"\u57FA\u672C\u6982\u5FF5-1","children":[]},{"level":3,"title":"\u521B\u5EFAmapping","slug":"\u521B\u5EFAmapping","children":[]},{"level":3,"title":"\u521B\u5EFA\u6570\u636E","slug":"\u521B\u5EFA\u6570\u636E","children":[]},{"level":3,"title":"\u6570\u636E\u67E5\u8BE2","slug":"\u6570\u636E\u67E5\u8BE2","children":[]}]},{"level":2,"title":"\u9AD8\u4EAE\u67E5\u8BE2","slug":"\u9AD8\u4EAE\u67E5\u8BE2","children":[]},{"level":2,"title":"","slug":"","children":[]}],"git":{"createdTime":1658673075000,"updatedTime":1658673075000,"contributors":[{"name":"lijingyu-p8","email":"lijingyu_dlmu@163.com","commits":1}]},"readingTime":{"minutes":24.5,"words":7350},"filePathRelative":"ElasticSearch/05.\u67E5\u8BE2.md","localizedDate":"July 24, 2022"}');export{e as data};
