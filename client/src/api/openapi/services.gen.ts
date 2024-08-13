// This file is auto-generated by @hey-api/openapi-ts

import { client, type Options } from '@hey-api/client-fetch';
import type { LogoutError, LogoutResponse, GetChallengesError, GetChallengesResponse, CreateChallengeData, CreateChallengeError, CreateChallengeResponse, GetSeriesError, GetSeriesResponse, CreateChallengeSeriesData, CreateChallengeSeriesError, CreateChallengeSeriesResponse, GetCategoriesError, GetCategoriesResponse, GoogleAuthData, GoogleAuthError, GoogleAuthResponse } from './types.gen';

export const logout = (options?: Options) => { return (options?.client ?? client).post<LogoutResponse, LogoutError>({
    ...options,
    url: '/sessions/logout'
}); };

export const getChallenges = (options?: Options) => { return (options?.client ?? client).get<GetChallengesResponse, GetChallengesError>({
    ...options,
    url: '/challenges'
}); };

export const createChallenge = (options: Options<CreateChallengeData>) => { return (options?.client ?? client).post<CreateChallengeResponse, CreateChallengeError>({
    ...options,
    url: '/challenges'
}); };

export const getSeries = (options?: Options) => { return (options?.client ?? client).get<GetSeriesResponse, GetSeriesError>({
    ...options,
    url: '/challenges/series'
}); };

export const createChallengeSeries = (options: Options<CreateChallengeSeriesData>) => { return (options?.client ?? client).post<CreateChallengeSeriesResponse, CreateChallengeSeriesError>({
    ...options,
    url: '/challenges/series'
}); };

export const getCategories = (options?: Options) => { return (options?.client ?? client).get<GetCategoriesResponse, GetCategoriesError>({
    ...options,
    url: '/challenges/categories'
}); };

export const googleAuth = (options: Options<GoogleAuthData>) => { return (options?.client ?? client).post<GoogleAuthResponse, GoogleAuthError>({
    ...options,
    url: '/google-auth'
}); };