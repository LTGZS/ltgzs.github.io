// videojs 简单使用
    var myVideo = videojs('myVideo', {
        bigPlayButton: true,
        textTrackDisplay: false,
        posterImage: false,
        errorDisplay: false,
    })
    myVideo.play()
    var changeVideo = function (vdoSrc) {
        if (/\.m3u8$/.test(vdoSrc)) { //判断视频源是否是m3u8的格式
            myVideo.src({
                src: vdoSrc,
                type: 'application/x-mpegURL' //在重新添加视频源的时候需要给新的type的值
            })
        } else {
            myVideo.src(vdoSrc)
        }
        myVideo.load();
        myVideo.play();
    }
    //var src = 'https://www7.laqddcc.com/hls/2019/12/01/0ksevhwi/playlist.m3u8';
	//CHC高清电影
    document.querySelector('.qiehuan').addEventListener('click', function () {
        changeVideo(src='http://ivi.bupt.edu.cn/hls/chchd.m3u8');
    })
	//cctv3
	document.querySelector('.qiehuann').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8');
	})
	//cctv4
	document.querySelector('.qiehuannn').addEventListener('click', function () {
	    changeVideo(src='https://www7.laqddcc.com/hls/2019/12/01/PSqc40JX/playlist.m3u8');
	})
	//cctv5
	document.querySelector('.qiehuannnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8');
	})
	//cctv6
	document.querySelector('.qiehuannnnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8');
	})
	//cctv8
	document.querySelector('.qiehuannnnnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8');
	})
	//湖南卫视
	document.querySelector('.qiehuannnnnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/hunanhd.m3u8');
	})
	//湖北卫视
	document.querySelector('.qiehuannnnnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/hbhd.m3u8');
	})
	//安徽卫视
	document.querySelector('.qiehuannnnnn').addEventListener('click', function () {
	    changeVideo(src='http://ivi.bupt.edu.cn/hls/ahhd.m3u8');
	})