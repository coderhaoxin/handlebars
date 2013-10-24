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
    concat: {
      js: {
        src: 'static-dev/js/*.js',
        dest: 'static/js/app.js'
      }
    },
    jshint: {
      beforeconcat: ['static-dev/js/*.js'],
      afterconcat: ['static/js/app.js']
    },
    csslint: {
      src: 'static/css/app.css'
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      concat: {
        src: 'static-dev/css/*.css',
        dest: 'static/css/app.css'
      }
    },
    jasmine: { //测试应该测试release后的，而非dev的
      src: 'static-dev/js/*.js',
      options: {
        specs: 'test/static/*.js',
      }
    },
    clean: {
      release: {
        src: ['static/css/*.css', 'static/js/*.js', 'static/lib/*']
      }
    },
    copy: {
      lib: {
        src: 'static-dev/lib/*',
        dest: 'static/lib/*'
      }
    }
    watch: {
      livereload: {
        files: ['static/js/app.js', 'static/css/app.css'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('dev', ['concurrent:watch'])
  grunt.registerTask('test',    [''])
  grunt.registerTask('release', [''])
}
