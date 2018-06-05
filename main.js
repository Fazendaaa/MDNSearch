'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = require("https");
const addTopics = (topics) => {
    return topics.reduce((acc, cur) => acc + '&topic='.concat(cur), '');
};
const allTopics = () => {
    const topics = ['api', 'addons', 'css', 'canvas', 'firefox', 'firefox-os', 'games', 'html', 'http', 'js',
        'marketplace', 'mathml', 'mobile', 'apps', 'svg', 'webdev', 'webext', 'webgl', 'docs', 'xpcom', 'xul'];
    return addTopics(topics);
};
const parseTerm = (term) => {
    if ('string' !== typeof term) {
        return term.reduce((acc, cur) => acc.concat(cur, '+'), '');
    }
    return term;
};
const parseTopics = (topics) => {
    if ('string' === typeof topics) {
        return addTopics([topics]);
    }
    return addTopics(topics);
};
exports.searchMDN = ({ term, page, locale, topics }) => new Promise((resolve) => {
    const baseTerm = (undefined !== term) ? parseTerm(term) : '';
    const baseNumber = (undefined !== page && 1 <= page) ? page.toString() : '1';
    const baseLocale = (undefined !== locale) ? locale : 'en-US';
    const baseTopics = (undefined !== topics) ? parseTopics(topics) : allTopics();
    const baseURL = `https://developer.mozilla.org/${baseLocale}/search.json?`;
    const url = baseURL.concat('locale='.concat(baseLocale), '&q='.concat(baseTerm), '&page='.concat(baseNumber), baseTopics);
    https_1.get(url, res => {
        let rawData = '';
        if (200 !== res.statusCode) {
            throw new Error('Request was not accepted.');
        }
        res.setEncoding('utf8');
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => resolve(JSON.parse(rawData)));
    });
});
