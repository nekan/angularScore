module.exports = function(grunt){
	// Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		
		htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true,
		            'style-disabled': true
		        },
		        src: ['index.html']
		    }
		},
		concat: {
			js: {
				options: {
					separator: ';'
				},
				src: [
					'public/js/*.js'
				],
				dest: 'public/js/main.js'
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'public/js/main.min.js': ['public/js/main.min.js']
				}
			}
		},
		watch: {
		    html: {
		        files: ['public/js/*.js','public/css/*.css', 'views/**/*', 'routes/*'],
		        tasks: ['htmlhint'],
		        options: {
		        	livereload: true
		        }
		    }
		},
		grunt: {
	        files: ['Gruntfile.js']
	    },
		karma: {
	      unit: {
	        configFile: 'karma.conf.js'
	      }
	    },
		concurrent: {
		  dev: {
		    options: {
		      logConcurrentOutput: true,
		      limit: 5
		    },
		    tasks: [ 'nodemon:dev', 'watch']
		  }
		},
	    nodemon: {
	        dev: {
	        	script: 'server.js',
                options: { 
                    delayTime: 1,
                    env: {
                        PORT: 8000
                    },
                    cwd: __dirname,
                    watch: ['server.js', 'routes/*.js']
                }
            }
           
	    }

	});
	
	//grunt.registerTask("default", ['concurrent:dev']);
	grunt.registerTask("default", [ 'concurrent']);
}