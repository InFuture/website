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

        // uglify: {
        //     minify: {
        //         files: {
        //             'dist/js/jquery.min.js': 'src/js/jquery.min.js',
        //             'dist/js/jquery.plusanchor.min.js': 'src/js/jquery.plusanchor.min.js',
        //             'dist/js/jquery.easing.min.js': 'src/js/jquery.easing.min.js',
        //             'dist/js/script.js': ['src/js/faq.js', 'src/js/nav.js', 'src/js/sub.js']
        //         }
        //     }
        // },

        // imagemin: {
        //   dynamic: {
        //       files: [{
        //           expand: true,
        //           cwd: 'src/images/',
        //           src: ['**/*.{png,jpg,gif,svg}'],
        //           dest: 'dist/images/'
        //       }]
        //   }  
        // },

        watch: {
            style: {
                files: ['src/ss/**/*.scss', 'src/*.html', 'src/js/*.js', "src/images/**/*"],
                tasks: ['sass', 'htmlmin']
                // tasks: ['sass', 'htmlmin', 'uglify', 'imagemin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass:compile', 'htmlmin', 'watch']);
    // grunt.registerTask('default', ['sass:compile', 'uglify', 'htmlmin', 'imagemin', 'watch']);
}
