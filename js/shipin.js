
var video = document.getElementById("mp4");
    var btnstart = document.getElementById("btnstart");
    var current_time=document.getElementById('current_time');
    var btntime = document.getElementById("btntime");
    var btngo = document.getElementById("btngo");
    var btnback = document.getElementById("btnback");
    var btnmute=document.getElementById("btnmute");
    var btnsound=document.getElementById("btnsound");
    var btnbig=document.getElementById("btnbig");
    var totaltime=document.getElementById('totaltime');
    //视频开始播放时执行
    video.onplaying = function () {
        //获取当前video的总时间
        var allTime = video.duration;
        var h=Math.floor(allTime/3600);
        var m=Math.floor(allTime%3600/60);
        var s=Math.floor(allTime%60);
        h=h>=10?h:'0'+h;
        m=m>=10?m:'0'+m;
        s=s>=10?s:'0'+s;
        totaltime.innerHTML=h+':'+m+':'+s;//allTime.toString();
    };
    //视频播放位置发生变化时开始执行
    video.ontimeupdate = function () {
        btntime.value =100*this.currentTime/this.duration;///this.totaltime;
        var time=this.currentTime;
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);
        h=h>=10?h:'0'+h;
        m=m>=10?m:'0'+m;
        s=s>=10?s:'0'+s;
        current_time.innerHTML=h+':'+m+':'+s;
    };
 
    //播放进度条的事件
    btntime.addEventListener("mousedown",function(){
        this.οnmοusemοve=function(){
            video.currentTime=this.value*video.duration/100;
        }
        this.οnmοuseup=function(){
            this.οnmοusemοve=null;
            this.οnmοuseup=null;
        }
    });
 
    //快进的点击事件
    btngo.addEventListener("click", function () {
        btnstart.innerHTML = "播放";
        video.pause();
        time = setInterval(function () {
            video.currentTime += 5;
        }, 1000);
    });
    //快退的点击事件
    btnback.addEventListener("click", function () {
        btnstart.innerHTML = "播放";
        video.pause();
        time = setInterval(function () {
            video.currentTime -= 2;
            if (video.currentTime <= 0) {
                video.play();
                clearInterval(time);
            }
        }, 1000);
    });
    //静音的点击事件
    btnmute.addEventListener("click",function(){
        video.muted=!video.muted;
    });
    //音量进度条的事件
    btnsound.addEventListener("mousedown",function(){
        this.οnmοusemοve=function(){
            video.volume=this.value/100;
        }
        this.οnmοuseup=function(){
            this.οnmοusemοve=null;
            this.οnmοuseup=null;
        }
    });
    //全屏的点击事件
    btnbig.addEventListener("click",function(){
        if (video.webkitRequestFullScreen) {
            video.webkitRequestFullScreen();
        }
        else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        }
        else if (video.msRequestFullScreen) {
            video.msRequestFullScreen();
        }
        else if (video.RequestFullScreen) {
            video.RequestFullScreen();
        }
    });
    //播放的点击事件
    btnstart.addEventListener("click", function () {
        if (this.innerHTML == "播放") {
            video.play();
            this.innerHTML = "暂停";
        }
        else {
            video.pause();
            this.innerHTML = "播放";
        }
        clearInterval(time);
    })