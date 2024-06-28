import '@adobe/mas';
import '../src/swc.js';
import '../src/studio.js';

import { withAem } from '/test/mocks/aem.js';
import { mockFetch } from '/test/mocks/fetch.js';

mockFetch(withAem);
