import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import { HelloWorld } from "./components/HelloWorld";
import { GenericBOS } from "./components/GenericBOS";

export const PLASMIC = initPlasmicLoader({
    projects: [
        {
            id: "panwJqaFrrhcK6STVUCQzQ",  // ID of a project you are using
            token: "WotCe9kqE2LRc2gPRmbfuaIhTpbx94UXrHDqcHDWzm9EoXpiyOrj7FVA56Hl0G9Cb0C9IzAkF9tfE4AfAqnw"  // API token for that project
        }
    ],
    // Fetches the latest revisions, whether or not they were unpublished!
    // Disable for production to ensure you render only published changes.
    preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
    name: 'HelloWorld',
    props: {
        verbose: 'boolean',
        children: 'slot'
    }
});

type Props = {
    componentProps?: Record<string, unknown>;
    src: string;
    meta?: {
      title: string;
      description: string;
    };
  };

PLASMIC.registerComponent(GenericBOS, {
    name: 'GenericBOS',
    props: {
        src: 'string',
        meta: {
            type: 'object',
            fields: {
                title: 'string',
                description: 'string',
            }
        },
        componentProps: 'object',
    }
});