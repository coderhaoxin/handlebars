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
          ignoredFiles: ['README.md', 'package.json', 'node_modules/**'],
          watchedExtensions: ['js'],
          watchedFolders: ['model', 'service', 'util'],
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
    watch: {
      livereload: {
        files: ['model/*.js', 'service/*.js', 'util/*.js'],
        options: {
          livereload: true
        }
      }
    }
  })

  grunt.registerTask('default', ['concurrent:nodemon', 'concurrent:watch'])
}
