
    new TypeIt("#text1", {
        speed: 50,
        waitUntilVisible: true,
        lifeLike: true
      })
        .type('<span style="color:#A9A9A9">#include <<span>stdio.h</span>> </span>' , {delay: 300})
        .break({delay:500})
        .type('<span style="color:#00BFFF">int</span>')
        .break({delay:500})
        .type('{')
        .break({delay:500})
        .pause(500)
        .type('<span style="color:#00BFFF; margin-left:15px">int</span> a = 5;')
        .break({delay: 500})
        .type('<span style="color:#00BFFF; margin-left:15px">float</span> x = 2.78;')
        .break({delay: 500})
        .type('<span style="margin-left:15px">printf("a=%d/n", a);</span>')
        .break({delay: 500})
        .type('<span style="margin-left:15px">printf("x=%f/n", x);</span>')
        .break({delay: 500})
        .type('<span style="margin-left:15px">getchar();</span>')
        .break({delay: 500})
        .type('<span style="color:#00BFFF; margin-left:15px">return</span> 0;')
        .break({delay: 500})
        .type('}')
        .break({delay: 500})
        .type('........', {speed: 100, cursor: false})
        .delete(-8, {speed: 1, cursor: false})
        .break()
        .type('<span style="background-color:rgba(82, 98, 241, 0.27); ">a=5', {speed:1, cursor: false})
        .break()
        .type('<span style="background-color:rgba(82, 98, 241, 0.27);">x=2.780000</span>', {speed:1})
        .go();
      
      
      new TypeIt("#text2", {
        speed:300,
        waitUntilVisible: true,
        lifeLike:true
      })
        .type('Hello stoudents')
        .move(-6, {speed:200})
        .delete(1)
        .move('END', {speed:300})
        .type(';)')
        .go();
      
        
      
      new TypeIt("#text3", {
        speed: 50,
        waitUntilVisible: true,
        lifeLike: true,
        startDelay: 100
      })
        .type('<span style="color:#BA55D3">var</span> htmlContent <span style="color:#87CEEB"> =</span> <span style="color:#9370DB">$</span><span style="color:#FFFF00">(</span><span style="color:#87CEEB">"</span><span style="color:rgb(152, 241, 101)">h1</span><span style="color:#87CEEB">"</span><span style="color:#FFFF00">)</span><span style="color:#9370DB">.html</span><span style="color:#FFFF00">()</span><span style="color:#87CEEB">;</span>')
        .break({delay:500})
        .type('console<span style="color:#9370DB">.log</span><span style="color:#FFFF00">(</span>htmlContent<span style="color:#FFFF00"></span><span style="color:#FFFF00">)</span><span color:#87CEEB>;</span>')
        .break()
        .break()
        .type('>', {speed:1})
        .type('Вычислительная техника и программное обеспечение')
        .go();    
