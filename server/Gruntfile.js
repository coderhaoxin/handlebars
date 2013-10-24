module.exports = function (grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    meta: {},
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
      }
    },
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
    jshint: {
      beforeconcat: ['static-dev/js/*.js'],
      afterconcat: ['static/js/app.js']
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

  grunt.registerTask('dev', ['concurrent:nodemon', 'concurrent:watch'])
}
