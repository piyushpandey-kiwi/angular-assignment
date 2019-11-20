import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Params } from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-token',
    }),
};

@Injectable({
    providedIn: 'root'
})

export class RequestService {

    baseApiUrl: string;

    constructor(
        private httpClient: HttpClient) {
        this.baseApiUrl = environment.baseApiURL;
    }

    public get<T>(endPoint: string) {
        return this.httpClient.get<T>(`${this.baseApiUrl}${endPoint}`);
    }
    public getWithParams<T>(endPoint: string, params?: Params) {
        return this.httpClient.get<T>(`${this.baseApiUrl}${endPoint}`, { params });
    }
    public post<T>(endPoint: string, data: object | string, formData = false) {
        if (formData) {
            httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        return this.httpClient.post<T>(`${this.baseApiUrl}${endPoint}`, data, httpOptions);
    }

    public authUser<T>(endPoint: string, data: object | string, formData = false) {
        if (formData) {
            httpOptions.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        return this.httpClient.post<T>(`${endPoint}`, data, httpOptions);
    }

    public put<T>(endPoint: string, data?: object) {
        return this.httpClient.put<T>(`${this.baseApiUrl}${endPoint}`, data);
    }

    public delete<T>(endPoint: string) {
        return this.httpClient.delete<T>(`${this.baseApiUrl}${endPoint}`);
    }

    public deleteWithBody<T>(endPoint: string, data: object) {
        return this.httpClient.request<T>('delete', `${this.baseApiUrl}${endPoint}`, { body: data });
    }

}
