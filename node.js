/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    "parserOptions": {
        "ecmaFeatures": {"globalReturn": true},
    },
    "plugins": ["node"],
    "globals": {
        "__dirname": false,
        "__filename": false,
        "clearImmediate": false,
        "clearInterval": false,
        "clearTimeout": false,
        "console": false,
        "exports": false,
        "Intl": false,
        "module": false,
        "process": false,
        "require": false,
        "setImmediate": false,
        "setInterval": false,
        "setTimeout": false,
    },
    "rules": {
        "node/no-deprecated-api": "error",
        "node/no-missing-import": "error",
        "node/no-missing-require": "error",
        "node/no-unpublished-import": "error",
        "node/no-unpublished-require": "error",
        "node/no-unsupported-features": "error",
        "node/process-exit-as-throw": "error",
        "node/shebang": "error",
    },
}
