module.exports = [
    {
        type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',},
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },

    {
        type: 'input',
        name: 'project',
        message: 'What is your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How does the user install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project used for?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the parameters for contributions to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your application?',
    },
    {
        type: 'input',
        name: 'usergit',
        message: 'What is your GitHub link?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can users send questions to regarding this project?',
    },
    ];