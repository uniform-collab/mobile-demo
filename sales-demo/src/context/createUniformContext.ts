import { Context, ManifestV2 } from '@uniformdev/context';

import manifest from './manifest.json';

export default function createUniformContext(): Context {
  // Docs: https://docs.uniform.app/integrations/data/google-analytics#activate-ga-plugin
  const context = new Context({
    defaultConsent: false,
    manifest: manifest as ManifestV2,
  });
  return context;
}
