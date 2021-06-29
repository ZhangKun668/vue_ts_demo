# vue3_demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### video.js一些监听事件的汇总
 var playerVideo = videojs("my-player", options, function onPlayerReady() {
    videojs.log('Your player is ready!');
    
    this.on("loadstart",function(){
        console.log("开始请求数据 ");
    })
    this.on("progress",function(){
        console.log("正在请求数据 ");
    })
    this.on("loadedmetadata",function(){
        console.log("获取资源长度完成 ")
    })
    this.on("canplaythrough",function(){
		console.log("视频源数据加载完成")
    })
    this.on("waiting", function(){
        console.log("等待数据")
    });
    this.on("play", function(){
		console.log("视频开始播放")
    });
    this.on("playing", function(){
        console.log("视频播放中")
    });
    this.on("pause", function(){
        console.log("视频暂停播放")
    });
    this.on("ended", function(){
        console.log("视频播放结束");
    });
    this.on("error", function(){
        console.log("加载错误")
    });
    this.on("seeking",function(){
        console.log("视频跳转中");
    })
    this.on("seeked",function(){
        console.log("视频跳转结束");
    })
	this.on("ratechange", function(){
        console.log("播放速率改变")
    });
    this.on("timeupdate",function(){
        console.log("播放时长改变");
    })
    this.on("volumechange",function(){
        console.log("音量改变");
    })
    this.on("stalled",function(){
        console.log("网速异常");
    })
   
    
});