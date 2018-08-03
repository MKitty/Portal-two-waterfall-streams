/*create by hj on 2016/7/5-6*/
			window.loadlock = false;
			window.nsInitFun = new Array();
			window.nsInit = function(obj) {
				window.nsInitFun.push(obj);
			};
			window.removeLoad = function() {
				$(".index").addClass("current");
				$(".loading").remove();
			};
			$(document).ready(function(e) {
				$(window).load(function() {
					//刷新及分享
					(function() {
						$(".flush").on("click", function(e) {
							var url = $(this).attr("data-url"); //请求数据的地址
							var position = $(this).attr("data-position"); //显示在哪  上下
							var timestamp = $(this).attr("data-timestamp"); //当前显示的版本的时间戳, 可以根据这个确定有没有新数据
							if(!url || !position || !timestamp) {
								window.location.reload();
								return false;
							}
							$.get(url, {
								timestamp: timestamp,
								t: new Date().getTime()
							}, function(d, t, j) {
								if(position == "down" || $(".flush-area").children("div").length <= 0) {
									$(".flush-area").append(d);
									$(".content").scrollTop($(".content .content-inner").height());
								}
								if(position == "up") {
									$(".flush-area").children("div:first-child").before(d);
									$(".content").scrollTop(0);
								}
							}, "text");
							return false;
						});
						$(".share-btn").on("click", function(e) {
							$(".share-prompt").show();
							return false;
						});
						$(".share-prompt").on("click", function() {
							$(".share-prompt").hide();
							return false;
						});
					})();

					//调用其它页面特定的初始化方法
					for(var i = 0; i < window.nsInitFun.length; i++) {
						window.nsInitFun[i]();
					}

					//删除掉加载
					if(!window.loadlock) {
						window.removeLoad();
					}

				});
			});
			
			
			window.loadlock = false;
			window.nsInitFun = new Array();
			window.nsInit = function(obj) {
				window.nsInitFun.push(obj);
			};
			window.removeLoad = function() {
				$(".index").addClass("current");
				$(".loading").remove();
			};
			$(document).ready(function(e) {
				$(window).load(function() {
					//刷新及分享
					(function() {
						$(".flush1").on("click", function(e) {
							var url = $(this).attr("data-url"); //请求数据的地址
							var position = $(this).attr("data-position"); //显示在哪  上下
							var timestamp = $(this).attr("data-timestamp"); //当前显示的版本的时间戳, 可以根据这个确定有没有新数据
							if(!url || !position || !timestamp) {
								window.location.reload();
								return false;
							}
							$.get(url, {
								timestamp: timestamp,
								t: new Date().getTime()
							}, function(d, t, j) {
								if(position == "down" || $(".flush-area1").children("div").length <= 0) {
									$(".flush-area1").append(d);
									$(".content").scrollTop($(".content .content-inner").height());
								}
								if(position == "up") {
									$(".flush-area1").children("div:first-child").before(d);
									$(".content").scrollTop(0);
								}
							}, "text");
							return false;
						});
						$(".share-btn").on("click", function(e) {
							$(".share-prompt").show();
							return false;
						});
						$(".share-prompt").on("click", function() {
							$(".share-prompt").hide();
							return false;
						});
					})();

					//调用其它页面特定的初始化方法
					for(var i = 0; i < window.nsInitFun.length; i++) {
						window.nsInitFun[i]();
					}

					//删除掉加载
					if(!window.loadlock) {
						window.removeLoad();
					}

				});
			});