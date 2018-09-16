const path    = require('path');
const assert  = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-kops:component', () => {
  describe('when component name has only letters', () => {
    const component_name = 'testcomp';

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/component'))
        .withArguments([component_name]);
    });

    it('should generate component files', () => {
      assert.file([
        `src/components/${component_name}/${component_name}.js`,
        `src/components/${component_name}/${component_name}.pug`,
        `src/components/${component_name}/${component_name}.styl`
      ]);
    });
  });

  describe('when component name has a dash on it\'s name', () => {
    const component_name = 'test-comp';

    beforeAll(() => {
      return helpers
        .run(path.join(__dirname, '../generators/component'))
        .withArguments([component_name]);
    });

    it('should generate component files', () => {
      assert.file([
        `src/components/${component_name}/${component_name}.js`,
        `src/components/${component_name}/${component_name}.pug`,
        `src/components/${component_name}/${component_name}.styl`
      ]);
    });

    it('should have normalized the model name for script', () => {
      assert.fileContent(
        `src/components/${component_name}/${component_name}.js`,
        /class TestCompModel/
      );
    });
  });
});
