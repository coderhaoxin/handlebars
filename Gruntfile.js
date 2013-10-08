module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    meta: {},
    //
    nodemon: {
      prod: {
        options: {
          file: 'app.js',
          args: ['develop'],
          nodeArgs: [],
          ignoredFiles: ['README.md', 'node_modules/**'],
          watchedExtensions: ['js'],
          watchedFolders: ['service', 'util'],
          delayTime: 1,
          env: {
            PORT: '3000'
          },
          cwd: __dirname
        }
      },
      exec: {
        options: {
          exec: 'less'
        }
      }
    },
    //concat js,css files
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
    //min js files
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'static/js/app.min.js': ['static/js/app.js']
        }
      }
    },
    //
    jshint: {
      beforeconcat: ['static-dev/js/*.js'],
      afterconcat: ['static/js/app.js']
    },
    //
    jasmine: {
      src: 'static-dev/js/*.js',
      options: {
        specs: 'test/static/*.js',
      }
    },
    //
    csslint: {
      src: 'static/css/app.css'
    },
    //
    cssmin: {
      css: {
        src: 'static/css/app.css',
        dest: 'static/css/app.min.css'
      }
    },
    //
    watch: {
      jshint: {
        files: ['static/js/app.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      csslint: {
        files: ['static/css/app.css'],
        tasks: ['csslint'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('develop', ['concat', 'uglify', 'jshint']);
  grunt.registerTask('test',    ['']);
  grunt.registerTask('release', ['']);
}
