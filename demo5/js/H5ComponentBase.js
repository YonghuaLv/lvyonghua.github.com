/* 基本图文组件对象 */

var  H5ComponentBase = function (name,cfg) {
	var cfg = cfg || {};
	var id =('h5_c_'+Math.random()).replace('.','_');
	// 把当前组件类型添加到样式中进行标记
	var cls = ' h5_component_'+cfg.type;
	var compoent = $('<div class="h5_component '+cls+' h5_component_name_'+name +' " id="'+id+'">');
	//可配置参数设置
	cfg.text && compoent.text(cfg.text);
	cfg.width && compoent.width(cfg.width/2);
	cfg.height && compoent.height(cfg.height/2);
	cfg.css && compoent.css(cfg.css);
	cfg.bg && compoent.css('backgroundImage', 'url('+cfg.bg+')');
	// cfg.relativeTo && compoent.css(translate, 'value');
	
	if (cfg.center===true) {
		compoent.css({
			marginLeft: (cfg.width/4*-1)+'px',
			left: '50%'
		});
	}
	//...可以定义更多参数
	if(typeof cfg.onclick === 'function' ){
		compoent.on('click',cfg.onclick);
	}

	compoent.on('onLoad', function() {
		setTimeout(function(){
			compoent.addClass(cls+'_load').removeClass(cls+'_leave');
			cfg.animateIn && compoent.animate( cfg.animateIn );
		},cfg.delay || 0)
		return false;
	})
	compoent.on('onLeave', function() {
		// event.preventDefault();
		setTimeout(function(){
			compoent.addClass(cls+'_leave').removeClass(cls+'_load');
			cfg.animateOut && compoent.animate( cfg.animateOut );
		},cfg.delay || 0)
		return false;
	})
	return compoent;
}