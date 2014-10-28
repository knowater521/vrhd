/**
 * @fileoverview 房间模型
 * @authors
	Tony.Liang <pillar0514@gmail.com>
 * @description 房间的数据模型
 */
define('mods/model/room',function(require,exports,module){

	var $ = require('lib');
	var $model = require('lib/mvc/model');

	var Room = $model.extend({
		defaults : {
			//单位米转化为像素的比例
			ratio : 20,
			//长宽高，单位为米
			length : 4,
			width : 3,
			height : 2.5,
			lengthPx : 800,
			widthPx : 600,
			heightPx : 500
		},
		events : {
			'change:length' : 'computeSize',
			'change:width' : 'computeSize',
			'change:height' : 'computeSize'
		},
		build : function(){
			this.computeSize();
		},
		computeSize : function(){
			var length = this.get('length');
			var width = this.get('width');
			var height = this.get('height');

			var pxSize = {};
			var ratio = this.get('ratio');
			pxSize.lengthPx = length * ratio;
			pxSize.widthPx = width * ratio;
			pxSize.heightPx = height * ratio;

			this.set(pxSize);
		}
	});

	module.exports = Room;

});