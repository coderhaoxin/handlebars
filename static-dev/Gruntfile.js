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
      concat: {
        tasks: ['concat'],
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
    concat: {
      js: {
        src: 'js/*.js',
        dest: '../static/js/app.js'
      },
      css: {
        src: 'css/*.css',
        dest: '../static/css/app.css'
      }
    },
    jasmine: { //测试应该测试release后的，而非dev的
      src: '../static/js/app.js',
      options: {
        specs: 'test/*.js',
      }
    },
    copy: {
      lib: {
        files: [
          { src: 'lib/angular/angular.js',     dest: 'lib/angular.js' },
          { src: 'lib/angular/angular.min.js', dest: '../static/lib/angular.min.js' },
          { src: 'lib/bootstrap/dist/css/bootstrap.css',     dest: 'lib/bootstrap.css' },
          { src: 'lib/bootstrap/dist/css/bootstrap.min.css', dest: '../static/lib/bootstrap.min.css' },
          { src: 'lib/bootstrap/dist/js/bootstrap.js',       dest: 'lib/bootstrap.js' },
          { src: 'lib/bootstrap/dist/js/bootstrap.min.js',   dest: '../static/lib/bootstrap.min.js' },
          { src: 'lib/blueimp-file-upload/js/jquery.fileupload-angular.js', dest: 'lib/jquery.fileupload-angular.js' },
          { src: 'lib/blueimp-file-upload/js/jquery.fileupload-angular.js', dest: '../static/lib/jquery.fileupload-angular.js' },
          { src: 'lib/jquery/jquery.js',     dest: 'lib/jquery.js' },
          { src: 'lib/jquery/jquery.min.js', dest: '../static/lib/jquery.min.js' }
        ]
      }
    },
    watch: {
      concat_js_css: {
        files: ['js/*.js', 'css/*.css'],
        tasks: ['concat']
      },
      livereload: {
        files: ['../static/js/app.js', '../static/css/app.css'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['concurrent:watch'])
}
