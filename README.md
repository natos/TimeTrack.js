TimeTrack
=========

Simple time tracker to test the speed on JavaScript.

Install
-------

	npm install -g timetrack

Use
===

Require the module
------------------

	var TimeTrack = require('timetrack');

Start tracking
--------------
	var timer = new TimeTrack('Name');

Record a timestamp
------------------
	timer.track('Label');

Turn off logs
-------------
	timer.off();

Enable logs
-----------
	timer.on();