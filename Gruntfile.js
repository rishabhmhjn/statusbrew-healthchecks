module.exports = function(grunt) {


  grunt.initConfig({
    clean: {
      build: './build'
    },
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        specFolders: ['spec'],
        isVerbose: false,
        showColors: false,
        includeStackTrace: false,
        junitreport: {
          report: true,
          savePath: "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      all: []
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean', 'jasmine_node']);
  grunt.registerTask('default', ['test']);
};
