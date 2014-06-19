/*
 * grunt-line-number-plugin
 * https://github.com/sne11ius/grunt-line-number-plugin
 *
 * Copyright (c) 2014 Cornelius Lilge
 * Licensed under the GPL-3.0 license.
 */

'use strict';

module.exports = function(grunt) {


  grunt.registerMultiTask('line_number_plugin', 'Ye olde c style "__file__" replacer.', function() {
    /*
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
    */
  });

};
