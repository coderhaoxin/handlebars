module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    meta: {},
    concurrent: {
      watch: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      jasmine: {
        tasks: ['jasmine'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    jasmine: { //测试应该测试release后的，而非dev的
      src: '**.js',
      options: {
        specs: 'test/*.js',
      }
    },
    copy: {
      lib: {
        files: [{
          src: 'lib/angular/angular.js',
          dest: 'lib/angular.js'
        },{
          src: 'lib/angular/angular.min.js',
          dest: 'lib/angular.min.js'
        },{
          src: 'lib/bootstrap/dist/css/bootstrap.css',
          dest: 'lib/bootstrap.css'
        },{
          src: 'lib/bootstrap/dist/css/bootstrap.min.css',
          dest: 'lib/bootstrap.min.css'
        },{
          src: 'lib/bootstrap/dist/js/bootstrap.js',
          dest: 'lib/bootstrap.js'
        },{
          src: 'lib/bootstrap/dist/js/bootstrap.min.js',
          dest: 'lib/bootstrap.min.js'
        },{
          src: 'lib/blueimp-file-upload/js/jquery.fileupload-angular.js',
          dest: 'lib/jquery.fileupload-angular.js'
        },{
          src: 'lib/blueimp-file-upload/js/jquery.fileupload-angular.js',
          dest: 'lib/jquery.fileupload-angular.js'
        },{
          src: 'lib/jquery/jquery.js',
          dest: 'lib/jquery.js'
        },{
          src: 'lib/jquery/jquery.min.js',
          dest: 'lib/jquery.min.js'
        }]
      }
    },
    clean: {
      lib: ['lib/angular',
            'lib/blueimp-canvas-to-blob',
            'lib/blueimp-file-upload',
            'lib/blueimp-load-image',
            'lib/blueimp-tmpl',
            'lib/bootstrap',
            'lib/jquery']
    },
    watch: {
      livereload: {
        files: ['**.js', '**.css', '**.html'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['concurrent:watch'])
}
