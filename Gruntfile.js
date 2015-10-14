'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 1500,
			height:2250,
            name: 'ViewPortMedium_Zoom'
          }, {
            width: 1000,
			height:1500,
            name: 'ViewPortSmall_Zoom'
          }, {
            width: 1088,
			height:1632,
            name: 'ViewPortLarge_PDP'
          }, {
            width: 544,
			height:816,
            name: 'ViewPortMedium_PDP'
          }, {
            width: 272,
			height:408,
            name: 'ViewPortSmall_PDP'
          }, {
            width: 230,
			height:334,
			aspectRatio:false,
            name: 'ViewPortLarge_List'
          }, {
            width: 276,
			height:400,
			aspectRatio:false,
            name: 'ViewPortMedium_List'
          }, {
            width: 136,
			height:204,
            name: 'ViewPortSmall_List'
          }, {
            width: 30,
			height: 30,
			aspectRatio:false,
            name: 'styleSwatch'
          }],
		  engine:'im'
        },
		
        files: [{
          expand: true,
          src: ['assets/img/**/*.{jpg,gif,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },
    connect: {
      dev: {
        options: {
          port: 3000,
          base: './dist/'
        }
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*', '!assets/img/**/*.*'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      all_files: {
        expand: true,
        files: ['**/*', '!assets/img/**/*.*'],
        tasks: 'copy'
      },
      images: {
        expand: true,
        files: 'assets/img/**/*.{jpg,gif,png}',
        tasks: 'responsive_images'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['copy','responsive_images', 'connect', 'watch']);
};