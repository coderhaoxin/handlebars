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
        src: 'static-dev/js/*.js',
        dest: 'static/js/app.js'
      },
      css: {
        src: 'static-dev/css/*.css',
        dest: 'static/css/app.css'
      }
    },
    jasmine: { //测试应该测试release后的，而非dev的
      src: 'static/js/app.js',
      options: {
        specs: 'static-dev/test/*.js',
      }
    },
    copy: {
      lib: {
        files: [
          { src: 'static-dev/lib/angular/angular.js',     dest: 'static-dev/lib/angular.js' },
          { src: 'static-dev/lib/angular/angular.min.js', dest: 'static/lib/angular.min.js' },
          { src: 'static-dev/lib/bootstrap/dist/css/bootstrap.css',     dest: 'static-dev/lib/bootstrap.css' },
          { src: 'static-dev/lib/bootstrap/dist/css/bootstrap.min.css', dest: 'static/lib/bootstrap.min.css' },
          { src: 'static-dev/lib/bootstrap/dist/js/bootstrap.js',       dest: 'static-dev/lib/bootstrap.js' },
          { src: 'static-dev/lib/bootstrap/dist/js/bootstrap.min.js',   dest: 'static/lib/bootstrap.min.js' },
          { src: 'static-dev/lib/blueimp-file-upload/js/jquery.fileupload-angular.js', dest: 'static-dev/lib/jquery.fileupload-angular.js' },
          { src: 'static-dev/lib/blueimp-file-upload/js/jquery.fileupload-angular.js', dest: 'static/lib/jquery.fileupload-angular.js' },
          { src: 'static-dev/lib/jquery/jquery.js',     dest: 'static-dev/lib/jquery.js' },
          { src: 'static-dev/lib/jquery/jquery.min.js', dest: 'static/lib/jquery.min.js' }
        ]
      }
    },
    watch: {
      livereload: {
        files: ['static/js/app.js', 'static/css/app.css'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['concurrent:watch'])
  grunt.registerTask('release', ['concurrent:copy', 'concurrent:concat', 'concurrent:jasmine'])
}
