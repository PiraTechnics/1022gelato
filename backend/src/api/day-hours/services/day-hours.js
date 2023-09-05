'use strict';

/**
 * day-hours service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::day-hours.day-hours');
