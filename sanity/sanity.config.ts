import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: import.meta.env.SANITY_STUDIO_PROJECT_NAME,
  title: 'Escape',

  projectId: import.meta.env.SANITY_STUDIO_API_PROJECT_ID ?? '',
  dataset: import.meta.env.SANITY_STUDIO_API_DATASET ?? '',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
