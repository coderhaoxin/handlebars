module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    meta: {},
    //
    concurrent: {
      nodemon: {
        tasks: ['nodemon'],
        options: {
          logConcurrentOutput: true
        }
      },
      watch: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      autoprefixer: {
        tasks: ['autoprefixer'],
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
      },
      csslint: {
        tasks: ['csslint'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
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
      }
    },
    //
    jshint: {
      beforeconcat: ['static-dev/js/*.js'],
      afterconcat: ['static/js/app.js']
    },
    //
    csslint: {
      src: 'static/css/app.css'
    },
    //
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      concat: {
        src: 'static-dev/css/*.css',
        dest: 'static/css/app.css'
      }
    },
    //
    jasmine: {
      src: 'static-dev/js/*.js',
      options: {
        specs: 'test/static/*.js',
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

  grunt.registerTask('dev', ['concurrent:nodemon', 'concurrent:watch']);
  grunt.registerTask('test',    ['']);
  grunt.registerTask('release', ['']);
}
