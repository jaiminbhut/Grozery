module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.js',
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/style.js',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'screen',
        message: 'What is your screen name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{pascalCase screen}}/index.js',
        templateFile: 'plop-templates/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase screen}}/style.js',
        templateFile: 'plop-templates/Styles.js.hbs',
      },
    ],
  });
};
