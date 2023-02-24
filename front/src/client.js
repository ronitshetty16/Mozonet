
import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2023-02-24',
    useCdn: true,
});
