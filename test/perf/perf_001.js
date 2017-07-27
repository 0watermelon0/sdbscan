const
	sdbscan = require("../../main.js"),
	dcdbscan = require('density-clustering'),
	Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var data = require("../data/well-separated.js");

// add tests
suite.
	add('sdbscan', function() {
	  sdbscan(data,1,3);
	}).
	add('density-cluster-dbscan', function() {
		let dbscan = new dcdbscan.DBSCAN();
		dbscan.run(data,1,3);
	}).
	on('cycle', function(event) {
	  console.log(String(event.target));
	}).
	on('complete', function() {
	  console.log('Fastest is ' + this.filter('fastest').map('name'));
	}).
	run({
		'async': true
	});