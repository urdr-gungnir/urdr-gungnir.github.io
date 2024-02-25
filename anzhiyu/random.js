var posts=["2024/02/23/hello-world/","2024/02/24/安全岗面经（自刷用）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };