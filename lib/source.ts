import { loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';

const docs = defineDocs({
  dir: 'content',
  docs: { schema: pageSchema },
  meta: { schema: metaSchema },
});

// Docs are served from the root, not /docs -- the public URLs (docs.srating.io/game/get)
// predate this site and are linked from srating.io.
export const source = loader({
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});
