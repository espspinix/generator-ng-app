'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');
var url = require('url');

_.str = require('underscore.string');
_.mixin(_.str.exports());

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
    cgUtils.getNameArg(this, args);
    yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ControllerGenerator, yeoman.generators.Base);

ControllerGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [
        {
            type: 'confirm',
            name: 'needtemplate',
            message: 'Does this controller need an external html file (i.e. template)?',
            default: true
        },
        {
            name: 'route',
            message: 'Enter your route url (i.e. /mycontroller/:id).  If you don\'t want a route added for you, leave this empty.'
        }
        ];

    cgUtils.addNamePrompt(this, prompts, 'controller');

    this.prompt(prompts, function(props) {
        if (props.name) {
            this.name = props.name;
        }
        this.needtemplate = props.needtemplate;
        this.route = url.resolve('', props.route);

        cgUtils.askForModuleAndDir('controller', this, false, cb);
    }.bind(this));
};

ControllerGenerator.prototype.files = function files() {
    var configName = 'controllerSimpleTemplates';
    var defaultDir = 'templates/simple';
    if (this.needtemplate) {
        configName = 'controllerComplexTemplates';
        defaultDir = 'templates/complex';
    }

    this.htmlPath = path.join(this.dir, this.name + '.controller.html').replace(/\\/g, '/');
    this.htmlPath = this.htmlPath.replace('app/', '');

    cgUtils.processTemplates(this.name, this.dir, 'controller', this, defaultDir, configName, this.module);

    if (this.route && this.route.length > 0) {
        var templateUrl = this.dir + this.name + '.controller' +  '.html';
        cgUtils.injectRoute(this.module.file, this.config.get('uirouter'), this.name, this.route, templateUrl, this.name, this);
    }
};
