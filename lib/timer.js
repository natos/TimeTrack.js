
/**
 * Track JavaScript processing time
 * @class Timer
 *
 * @example Start tracking
 * new Timer('name');
 *
 * @example Record a timestamp
 * Use Timer.track('Label');
 *
 * @example Turn off logs
 * Use Timer.off();
 */


/**
 * @constructor
 * @param {string} name Instance name, will show up on the logs
 * @param {class} [transport] optional transport, uses console.log by default
 */
var Timer = function(name, transport) {

	// Prefix to show on the console
	this.prefix = ' Timer > ';

	// Boolean to turn on/off logs
	this.status = true;

	// Concept name of the tracking instance
	this.name = name;

	// The time where the instance is created
	this.now = new Date();

	// Define transport, console by default
	this.transport = transport || console;

	// Get own log functions
	this.log = this.transport.hasOwnProperty('log') && this.transport.log || this.transport.info;
	
	// Chaining
	return this;

}

/**
 * Turn tracking on
 * @method on
 */
Timer.prototype.on = function() {

	this.status = true;

	// Chaining
	return this;
}

/**
 * Turn tracking off
 * @method off
 */
Timer.prototype.off = function() {

	this.status = false;

	// Chaining
	return this;
}

/**
 * Track 
 * @method track
 */
Timer.prototype.track = function(str) {

	var time = new Date();
	var timeDiff = time.valueOf() - this.now.valueOf();
	var msg = this.prefix + (this.name ? this.name : '') + ' > ' + str + ': ' + (timeDiff/1000) + 's (' + timeDiff + ')';

	this.status && this.log( msg );

	// Chaining
	return this;
}


//	Exports for NodeJS
if (typeof exports !== 'undefined') {
	// old school
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = Timer;
	}
	exports.Timer = Timer;
}

