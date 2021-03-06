/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreateBabelConfig = ({ actions }) => {
    actions.setBabelPreset({
        name: 'babel-preset-gatsby',
        options: {
        reactRuntime: 'automatic',
        },
    });
}