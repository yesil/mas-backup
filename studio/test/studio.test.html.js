import '@adobe/mas';
import '../src/swc.js';
import '../src/studio.js';

import { mockFetch } from './mocks/fetch.js';
import { withAem } from '/test/mocks/aem.js';
import { withWcs } from './mocks/wcs.js';

import mas from './mocks/mas.js';

await mockFetch(withAem, withWcs);

await mas();
