export interface Filters {
    name: string;
    slug: string;
    options: Array<any>;
}

export interface Documents {
    id: number;
    url: string;
    slug: string;
    title: string;
    score: number;
    parent: object;
    locale: string;
    excerpt: string;
    edit_url: string;
    tags: Array<any>;
}

export interface MDNResponse {
    end: number;
    next: string;
    page: number;
    start: number;
    pages: number;
    count: number;
    query: string;
    locale: string;
    previous: string;
    filters: Array<Filters>;
    documents: Array<Documents>;
}

export interface MDNContext {
    page?: number;
    locale?: string;
    term: string | Array<string>;
    topics?: string | Array<string>;
}
