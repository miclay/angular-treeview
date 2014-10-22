var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
};


module.exports = function(grunt) {
	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		uglify: {
			options:{
				preserveComments:'some'
			},
			dist: {
				files: [{
					expand: true,
					cwd:'src',
					src:'**/*.js',
					dest:'build'
				}]
			}
		},
		cssmin:{
			dist:{
				expand:true,
				cwd:'src',
				src:'**/*.css',
				dest:'build'
			}
		},
		copy:{
			dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.{htc,html,htm}'],
          dest: 'build'
        }]
      }
		}
	});

	grunt.registerTask('build', [
		'copy:dist',
		'uglify',
		'cssmin'
	]);
};