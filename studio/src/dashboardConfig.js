export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec2a3e3cb3ba31b54b37f48',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-f2ut1bdq',
                  apiId: '68398e52-9ca5-4e0f-a20e-ce3e7e8c7c7c'
                },
                {
                  buildHookId: '5ec2a3e36b06e14a9adca638',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-znidfbme',
                  apiId: '8787a4f5-a822-4507-ba7d-25898d70eceb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/semblance/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-znidfbme.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
