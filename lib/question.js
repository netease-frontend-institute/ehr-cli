module.exports = [
    {
        name: "name",
        type: 'input',
        message: "请输入项目名称",
        validate (val) {
            if (val === '') {
                return 'Name is required!'
            } else {
                return true
            }
        }
    }, {
        name: "pageType",
        type: 'list',
        message: "请选择应用类型",
        choices: [{
            name: '单页应用',
            value: 'single',
            short: 'single-page'
        }, {
            name: '多页应用',
            value: 'multi',
            short: 'multi-page'
        }]
    }, {
        name: "ts",
        type: 'confirm',
        message: "是否使用ts",
        when:  function(answers) {
            return answers.pageType === 'single';
        }
    }, {
        name: 'autoInstall',
        type: 'list',
        message: '项目创建完成后是否需要安装依赖包',
        choices: [
            {
                name: 'Yes, use NPM',
                value: 'npm',
                short: 'npm',
            },
            {
                name: 'Yes, use Yarn',
                value: 'yarn',
                short: 'yarn',
            },
            {
                name: 'No, I will handle that myself',
                value: false,
                short: 'no',
            },
        ]
    }
];
