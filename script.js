d3.select('div.block')
	.style('height', window.innerHeight + 'px');

var svg = d3.select('svg')
	.attr('width', 800)
	.attr('height', 250);

var line = d3.svg.line()
	.x(function(d) { return d[0]; })
	.y(function(d) { return d[1]; })
	.interpolate('basis');

var data = [];
var rangeStart = 50;
var rangeStop = 250;
var rangeStep = 10;

// first batch of data
var data = d3.range(rangeStart, rangeStop, rangeStep).map(function(y_offset) {
		return d3.range(100, 700, 10).map(function(d) {
			var y = d;
			if (y < 300 || y > 500)
				y = 50;
			else
				y = 500;
			return [d, y_offset - Math.random() * Math.random() * y / 10];
		});
	});

svg.selectAll('path')
	.data(data)
	.enter()
	.append('path')
	.attr('d', line);

setInterval(function() {
	data = d3.range(rangeStart, rangeStop, rangeStep).map(function(y_offset) {
		return d3.range(100, 700, 10).map(function(d) {
			var y = d;
			if (y < 300 || y > 500)
				y = 50;
			else
				y = 500;
			return [d, y_offset - Math.random() * Math.random() * y / 10];
		});
	});

	svg.selectAll('path')
	.data(data)
	.transition()
	.ease('back')
	.duration(750)
	.attr('d', line);
}, 740);
