var posts=["2024/02/25/享受生活/减脂理论/","2024/02/24/安全相关/安全岗面经（自刷用）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };