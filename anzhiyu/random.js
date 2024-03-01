var posts=["2024/02/25/享受生活/减脂理论/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };