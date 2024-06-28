import { init } from '@adobe/mas-commerce';

const locale =
    document
        .querySelector('meta[name="mas-locale"]')
        ?.getAttribute('content') ?? 'US_en';

const config = () => ({
    env: { name: 'stage' },
    commerce: { 'commerce.env': 'STAGE' },
    locale: { prefix: locale },
});

/** in tests, eagerly initialisation breaks mocks */
export default async () => {
    await init(config);
};
