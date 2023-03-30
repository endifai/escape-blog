export const post = {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'reference',
            to: [{type: 'topic'}]
        },
        {
            name: 'isFeatured',
            title: 'Featured',
            type: 'boolean'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'author',
            type: 'object',
            title: 'Author',
            fields: [
                {
                    name: 'name',
                    type: 'string',
                    title: 'Name'
                },
                {
                    name: 'avatar',
                    type: 'image',
                    title: 'Avatar'
                }
            ]
        }
    ]
}