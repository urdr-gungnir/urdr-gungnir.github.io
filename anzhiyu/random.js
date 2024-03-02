var posts=["2024/02/25/享受生活/减脂理论/","2024/03/02/享受生活/我的未来几个月的减脂计划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };