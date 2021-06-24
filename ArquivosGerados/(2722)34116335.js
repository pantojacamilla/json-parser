    'use strict';&#xD;&#xA;    /**&#xD;&#xA;     * AWS Lambda function that stops servers.&#xD;&#xA;     *&#xD;&#xA;     * @author Sam Verschueren      <sam.verschueren@gmail.com>&#xD;&#xA;     * @since  09 Oct. 2015&#xD;&#xA;     */&#xD;&#xA;    // module dependencies&#xD;&#xA;    var AWS = require('aws-sdk');&#xD;&#xA;    	AWS.config.update({region: 'ap-southeast-2'});&#xD;&#xA;    var pify = require('pify');&#xD;&#xA;    var Promise = require('pinkie-promise');&#xD;&#xA;    var ec2 = new AWS.EC2();&#xD;&#xA;    /**&#xD;&#xA;     * The handler function.&#xD;&#xA;     *&#xD;&#xA;     * @param {object}  event		The data regarding the event.&#xD;&#xA;     * @param {object}  context		The AWS Lambda execution context.&#xD;&#xA;     */&#xD;&#xA;    exports.handler = function (event, context) {&#xD;&#xA;    	// Describe the instances&#xD;&#xA;    	pify(ec2.describeInstances.bind(ec2), Promise)() //(describeParams)&#xD;&#xA;    		.then(function (data) {&#xD;&#xA;    			var stopParams = {&#xD;&#xA;    				InstanceIds: []&#xD;&#xA;    			};&#xD;&#xA;    			data.Reservations.forEach(function (reservation) {&#xD;&#xA;    				reservation.Instances.forEach(function (instance) {&#xD;&#xA;    					if (instance.State.Code === 16) {&#xD;&#xA;    						// 0: pending, 16: running, 32: shutting-down, 48: terminated, 64: stopping, 80: stopped&#xD;&#xA;    						values = instance.Tags["schedule"].Value.Split("|")&#xD;&#xA;    						for (v of values) {&#xD;&#xA;    							if (v == 'stop6pmdaily'){&#xD;&#xA;    								stopParams.InstanceIds.push(instance.InstanceId);&#xD;&#xA;    							}&#xD;&#xA;    						}&#xD;&#xA;    					}&#xD;&#xA;    				});&#xD;&#xA;    			});&#xD;&#xA;    			if (stopParams.InstanceIds.length > 0) {&#xD;&#xA;    				// Stop the instances&#xD;&#xA;    				return pify(ec2.stopInstances.bind(ec2), Promise)(stopParams);&#xD;&#xA;    			}&#xD;&#xA;    		})&#xD;&#xA;    		.then(context.succeed)&#xD;&#xA;    		.catch(context.fail);&#xD;&#xA;    };