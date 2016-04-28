module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({

        jekyll: {
            build : {
                dest: '_site'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.md', 'css/main.css', 'index.html'],
                tasks: ['jekyll']
            }
        },

        browserSync: {
            files: {
                src : ['_site/css/*.css', '_site/*.html']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                },
                port: 8080
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
};
