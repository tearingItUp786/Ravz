module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({

        jekyll: {
            build: {
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
                files: ['_layouts/*.html', '_includes/*.html', 'css/main.css', 'js/*.js', 'index.html', ],
                tasks: ['jekyll']
            }
        },

        browserSync: {
            files: {
                src: ['_site/css/*.css', '_site/*.html']
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
        },
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    sizes: [{
                        namge: "large",
                        width: '1024px',
                    }],
                    quality: 80
                },
                files: [{
                    expand: true,
                    src: ['**.{JPG,gif,png}'],
                    cwd: 'images/portfolio_originals/',
                    dest: 'images/portfolio/'
                }]
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-responsive-images');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browserSync', 'watch']);
    grunt.registerTask('resize', ['responsive_images']);
};
