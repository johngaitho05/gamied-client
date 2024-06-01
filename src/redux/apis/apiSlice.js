import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken, baseUrl } from "../../helpers/utils.js";

export const createRequest = (url, method = 'GET', body = {}, is_form = false) => {
    let req = { url, method: method, formData: is_form };
    if (['POST', 'PUT'].indexOf(method) !== -1) req.body = body;
    return req;
};

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
      { baseUrl,
        prepareHeaders: (headers) => {
            let token = getAccessToken()
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getToken: builder.mutation({
            query: (body) => createRequest(`/auth/token`, 'POST', body),
        }),
        refreshToken: builder.mutation({
            query: (body) => createRequest(`/auth/token/refresh`, 'POST', body),
        }),
        getUserDetails: builder.query({
            query: () => createRequest(`/auth/me`),
            providesTags: ['userDetails'],

        }),
        getCourses: builder.query({
            query: () => createRequest(`/courses`),
            providesTags: ['courseList']
        }),
        getCourseDetails: builder.query({
            query: (courseId) => createRequest(`/courses/${courseId}`),
            providesTags: ['courseDetails'],
        }),
        getLessonDetails: builder.query({
            query: (data) => createRequest(`/courses/${data.courseId}/lessons/${data.lessonId}`),
            providesTags: ['lessonDetails'],
        }),
        getAssessments: builder.query({
            query: () => createRequest(`/assessments`),
            providesTags: ['assessmentList'],
        }),
        getAssessmentDetails: builder.query({
            query: (assessmentId) => createRequest(`/assessments/${assessmentId}`),
            providesTags: ['assessmentList'],
        }),
        submitAssessment: builder.mutation({
            query: (assessmentId, body) => createRequest(`/assessments/${assessmentId}`, 'POST', body, true),
            async onQueryStarted(body, { dispatch }) {
                dispatch(apiSlice.util.invalidateTags(['assessmentList', 'assessmentDetails', 'userDetails']));
            },
        }),
    }),
});

export const {
    useGetTokenMutation,
    useRefreshTokenMutation,
    useGetUserDetailsQuery,
    useGetCoursesQuery,
    useGetCourseDetailsQuery,
    useGetLessonDetailsQuery,
    useGetAssessmentsQuery,
    useGetAssessmentDetailsQuery,
    useSubmitAssessmentMutation
} = apiSlice;
