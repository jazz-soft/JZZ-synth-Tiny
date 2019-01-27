module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
        all: ['src/*.js']
    },
    uglify: {
      javascript: {
        expand: true,
        cwd: 'javascript',
        src: '*.js',
        dest: 'minified'
      }
    }
  });
  grunt.task.registerTask('assemble', 'Build script', function() {
    var tiny = require('webaudio-tinysynth');
    var src = grunt.file.read('src/JZZ.synth.Tiny.js').split(/\r?\n/);
    var dest = [];
    for (var i = 0; i < src.length; i++) {
      if (src[i] == '//#include webaudio-tinysynth') dest.push(tiny.toString());
      else dest.push(src[i]);
    }
    grunt.file.write('javascript/JZZ.synth.Tiny.js', dest.join(require('os').EOL));
  });
  grunt.task.registerTask('version', 'Check version consistency', function() {
    var pkg = grunt.file.readJSON('package.json');
    var JZZ = require('jzz');
    require('.')(JZZ);
    var ver = JZZ.synth.Tiny.version();
    if (ver == pkg.version) {
       grunt.log.ok('Version:', ver);
    }
    else {
      grunt.log.error('Version:', ver, '!=', pkg.version);
      return false;
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['uglify', 'version']);
};
