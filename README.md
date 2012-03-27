TimeTrack
=========

Simple time tracker to test the speed of APIs responses.

Install
-------

	npm install timetrack -g

Use
===

Require the module
------------------

	var Timer = require('timetrack');

Start tracking
--------------
	var t = new Timer('Label');

Record a timestamp
------------------
	t.track('Label');

Turn off logs
-------------
	t.off();

Enable logs
-----------
	t.on();