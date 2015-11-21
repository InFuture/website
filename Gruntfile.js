module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            compile: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                },
                files: {
                    'dist/ss/main.css': 'src/ss/main.scss'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'src/index.html'
                }
            }
        },

        uglify: {
            minify: {
                files: {
                    'dist/js/jquery.min.js': 'src/js/jquery.min.js',
                    'dist/js/jquery.plusanchor.min.js': 'src/js/jquery.plusanchor.min.js',
                    'dist/js/jquery.easing.min.js': 'src/js/jquery.easing.min.js',
                    'dist/js/script.js': ['src/js/faq.js', 'src/js/nav.js']
                }
            }
        },

        copy: {

            options: {
                timestamp: true,
            },
            main: {
                nonull: true,
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**'],
                    dest: 'dist/images/'
                }]
            }

        },

        watch: {
            style: {
                files: ['src/ss/**/*.scss', '*.html', '*.js', "src/images/**"],
                tasks: ['sass', 'htmlmin', 'uglify', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass:compile', 'uglify', 'htmlmin', 'copy', 'watch']);
}
