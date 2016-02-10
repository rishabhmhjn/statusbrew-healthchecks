module.exports = function(grunt) {
  grunt.initConfig({
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec',
        // verbose: false,
        junitreport: {
          report: true,
          savePath: "./build/reports/jasmine/",
          useDotNotation: true,
          consolidate: true
        }
      },
      // all: ['spec/']
      all: []
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('test', 'jasmine_node');
  grunt.registerTask('default', ['jasmine_node']);
};
