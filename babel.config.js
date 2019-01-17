// Copyright (c) 2014-present, Facebook, Inc. All rights reserved.

'use strict';

module.exports = {
    "plugins": [
        "@babel/plugin-proposal-class-properties"
        ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      env: {
        test: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],

        },
      },
};