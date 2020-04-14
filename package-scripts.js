const { series, rimraf, } = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps start',
        build: {
            script: series(
                'nps lint',
                'nps clean',
                'nps build.project',
                'nps notify.build',
            ),
            description: 'Build project into the dist directory',
            project: {
                script: series (
                    'nps notify.tsc',
                    'tsc',
                ),
                hiddenFromHelp: true
            }
        },
        lint: {
            script: "tslint -t stylish --project \"tsconfig.json\"",
            hiddenFromHelp: true
        },
        clean: {
            default: {
                script: series(
                    `nps notify.clean`,
                    `nps clean.dist`,
                ),
                description: 'Remove the ./dist folder'
            },
            dist: {
                script: rimraf('./dist'),
                hiddenFromHelp: true
            }
        },
        test: {
            script: series(
                'nps notify.test',
                'jest',
            ),
            description: 'Run unitary test of the module'
        },
        notify: {
            build: notify('matiase9', 'long'),
            clean: notify('clean folder', 'medium'),
            tsc: notify('tsc', 'default'),
            test: notify('test', 'small')
        }
    }
};

function notify(name, type) {
    return {
        hiddenFromHelp: true,
        silent: true,
        description: `Shows ${name} banners to the console`,
        script: `ts-node --transpileOnly ./commands/notify.ts "${name}" "${type}" `,
    };
}