module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    meta: {},
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
    jshint: {
      beforeconcat: ['static-dev/js/*.js'],
      afterconcat: ['static/js/app.js']
    },
    jasmine: {
      src: 'static-dev/js/*.js',
      options: {
        specs: 'test/static/*.js',
      }
    },
    csslint: {
      src: 'static/css/app.css'
    },
    cssmin: {
      css: {
        src: 'static/css/app.css',
        dest: 'static/css/app.min.css'
      }
    },
    watch: {
      concat_js_css: {
        files: ['public/app/*/*.js', 'public/app/*/*.css'],
        tasks: ['concat']
      },
      jshint_jsmin: {
        files: ['static/js/app.js'],
        tasks: ['jshint', 'uglify']
      },
      csslint_cssmin: {
        files: ['static/css/app.css'],
        tasks: ['csslint', 'cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('develop', ['concat', 'uglify', 'jshint']);
}
