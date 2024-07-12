// This file is auto-generated by @hey-api/openapi-ts

export const $AuthSource = {
    type: 'string',
    enum: ['google'],
    nullable: false
} as const;

export const $IUser = {
    properties: {
        id: {
            type: 'number',
            format: 'double'
        },
        email: {
            type: 'string'
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        authSource: {
            '$ref': '#/components/schemas/AuthSource'
        }
    },
    required: ['id', 'email', 'firstName', 'lastName', 'authSource'],
    type: 'object',
    additionalProperties: false
} as const;

export const $IChallenge = {
    properties: {
        id: {
            type: 'number',
            format: 'double'
        },
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        author: {
            '$ref': '#/components/schemas/IUser'
        },
        series: {
            items: {
                '$ref': '#/components/schemas/IChallengeSeries'
            },
            type: 'array'
        },
        version: {
            type: 'number',
            format: 'double'
        },
        versionCreatedAt: {
            type: 'string',
            format: 'date-time'
        },
        versionAuthor: {
            '$ref': '#/components/schemas/IUser'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: ['id', 'title', 'description', 'author', 'series', 'version', 'versionCreatedAt', 'versionAuthor', 'createdAt', 'updatedAt'],
    type: 'object',
    additionalProperties: false
} as const;

export const $IChallengeSeries = {
    properties: {
        id: {
            type: 'number',
            format: 'double'
        },
        title: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        challenges: {
            items: {
                '$ref': '#/components/schemas/IChallenge'
            },
            type: 'array'
        },
        author: {
            '$ref': '#/components/schemas/IUser'
        },
        version: {
            type: 'number',
            format: 'double'
        },
        versionCreatedAt: {
            type: 'string',
            format: 'date-time'
        },
        versionAuthor: {
            '$ref': '#/components/schemas/IUser'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    },
    required: ['id', 'title', 'description', 'challenges', 'author', 'version', 'versionCreatedAt', 'versionAuthor', 'createdAt', 'updatedAt'],
    type: 'object',
    additionalProperties: false
} as const;