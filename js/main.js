remark.macros.scale=function(e){return'<img src="'+this+'" style="width: '+e+'" />'};var slideShow=remark.create({ratio:"16:9",navigation:{scroll:!0,touch:!0,click:!1},slideNumberFormat:function(e,i){return percentage=Math.round(e/i*100),percentage+"%"},countIncrementalSlides:!1,highlightLanguage:"remark",highlightStyle:"monokai",highlightLines:!0,highlightSpans:!1});