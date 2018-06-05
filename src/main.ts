/**
 * Searches the MDN website.
 */
'use strict';

import { get } from 'https';
import { MDNContext, MDNResponse } from './index';

const addTopics = (topics: Array<string>): string => {
    return topics.reduce((acc, cur) => acc + '&topic='.concat(cur), '');
};

const allTopics = (): string => {
    const topics = ['api', 'addons', 'css', 'canvas', 'firefox', 'firefox-os', 'games', 'html', 'http', 'js',
    'marketplace', 'mathml', 'mobile', 'apps', 'svg', 'webdev', 'webext', 'webgl', 'docs', 'xpcom', 'xul' ]

    return addTopics(topics);
};

const parseTerm = (term: string | Array<string>): string => {
    if ('string' !== typeof term) {
        return term.reduce((acc, cur) => acc.concat(cur, '+'), '');
    }

    return term;
}

const parseTopics = (topics: string | Array<string>): string => {
    if ('string' === typeof topics) {
        return addTopics([ topics ]);
    }

    return addTopics(topics);
};

export const searchMDN = ({ term, page, locale, topics }: MDNContext) => new Promise((resolve: (res: MDNResponse) => void) => {
    const baseTerm = (undefined !== term) ? parseTerm(term) : '';
    const baseNumber = (undefined !== page && 1 <= page) ? page.toString() : '1';
    const baseLocale = (undefined !== locale) ? locale : 'en-US';
    const baseTopics = (undefined !== topics) ? parseTopics(topics) : allTopics();
    const baseURL = `https://developer.mozilla.org/${baseLocale}/search.json?`;
    const url = baseURL.concat('locale='.concat(baseLocale), '&q='.concat(baseTerm), '&page='.concat(baseNumber), baseTopics);

    get(url, res => {
        let rawData = '';

        if (200 !== res.statusCode) {
            throw new Error('Request was not accepted.');
        }

        res.setEncoding('utf8');
        res.on('data', chunk => rawData += chunk);
        res.on('end', () => resolve(JSON.parse(rawData)));
    });
});
