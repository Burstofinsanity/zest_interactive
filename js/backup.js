// JavaScript Document
/*$('.vid_controler').children().mousemove( function(ev) {
			if(touch_down){
				var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
				var width = $('#'+container_id+' .vid_container .inner')[0].offsetWidth;
				var cur_pos = $('#'+container_id+' .vid_pos').css('left');
				cur_pos = parseFloat(cur_pos.replace('px'));
				var left= ev.clientX - touch_start[0];
				var pos = (cur_pos + left);
				var vid_left =left / width;
				var pos_p = ((pos /width)*100);
				if(pos_p < 0){ pos_p = 0};
				if(pos_p < 1-0){ pos_p = 100};
				$('#'+container_id+' .vid_pos').css('left',pos_p+'%');
				touch_start[0] = ev.clientX;
				var vid = document.getElementById('vid_'+container_id);
				var vid_pos = vid.currentTime;
				var vid_dur = vid.duration;
				var vid_adjust = vid_left * vid_dur;
				var new_pos = vid_pos + vid_adjust;
				 vid.currentTime = new_pos;
				
			}
	});
	$('.vid_container').mousemove( function(ev) {
			if(touch_down){
				var container_id = $(this).parentsUntil('#bottom, #top').parent().attr('id');
				var width = $('#'+container_id+' .vid_container .inner')[0].offsetWidth;
				var cur_pos = $('#'+container_id+' .vid_pos').css('left');
				cur_pos = parseFloat(cur_pos.replace('px'));
				var left= ev.clientX - touch_start[0];
				var pos = (cur_pos + left);
				var pos_p = ((pos /width)*100);
				if(pos_p < 0){ pos_p = 0} else
				if(pos_p > 100){ pos_p = 100};
				$('#'+container_id+' .vid_pos').css('left',pos_p+'%');
				touch_start[0] = ev.clientX;
				var vid = document.getElementById('vid_'+container_id);
				var vid_pos = vid.currentTime;
				var vid_dur = vid.duration;
				var vid_adjust = vid_left * vid_dur;
				var new_pos = vid_pos + vid_adjust;
				 vid.currentTime = new_pos;
				 vid.play();
				 vid.pause();
			}
	});
	$(document).mouseup( function(ev) {
		touch_down = false;
		var vid_pos = $('#bottom .vid_pos').css('left');
		if(vid_pos != '50%'){
			$('#bottom .vid_pos').animate({left:"50%"});
			$('#bottom .vid_container .phase_2_video')[0].pause;
			//document.getElementById('vid_bottom').play;
		}
		var vid_pos2 = $('#top .vid_pos').css('left');
		if(vid_pos2 != '50%'){
			$('#top .vid_pos').animate({left:"50%"});
			//document.getElementById('vid_top').play;
		}
	});
	$('.vid_pos').on("touchstart", function(ev) {
		var e = ev.originalEvent;
		console.log(e.touches);
	});*/