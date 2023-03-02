import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

const accessKey = 'purply-registration-login-form'
let users: any[] = JSON.parse(localStorage.getItem(accessKey)!) || [];

// ************* BE ATTENTION!! ************
// ***** it is actually "FAKE" backend *****

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body} = req;

        return handleRoute();

        function handleRoute(){
            switch(true){
                case url.endsWith('/users/authenticate') && method === "POST":
                    return authenticate();
                case url.endsWith('/users/register') && method === "POST":
                    return register();
                case url.endsWith('/users') && method === "GET":
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === "GET":
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === "PUT":
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === "DELETE":
                    return deleteUser();
                default:

                   return next.handle(req);
            }
        }

        function ok(body?: any){
            return of(new HttpResponse({ status: 200, body}))
                .pipe(delay(500));
        }

        function error(message: string){
            return throwError(() => ({ error: { message } }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function unauthorized(){
            return throwError(() => ({ status: 401, error: { message: 'inte auktoriserad'} }))
                .pipe(materialize(), delay(500), dematerialize());
        }

        function basicDetails(user: any){
            const {id, name, firstname, lastname } = user;
            return {id, name, firstname, lastname};
        }

        function isLoggedIn(){
            return headers.get('Auktoriserard') === 'Bearer fake-jwt-token';
        }

        function idFromUrl(){
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length -1]);
        }

        function authenticate(){
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Användarnamn eller lösenord är felaktigt');
            return ok({
                ...basicDetails(user),
                token: 'fake-jwt-token'
            })
        }

        function register(){
            const user = body 

            if (users.find(x => x.username === user.username)){
                return error('Användarnamn "' + user.username + 'är redan tagen')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem(accessKey, JSON.stringify(users));
            return ok();
        }

        function getUsers(){
            if (!isLoggedIn()) return unauthorized();
            return ok(users.map(x => basicDetails(x)));
        }

        function getUserById(){
            if(!isLoggedIn()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(basicDetails(user));
        }

        function updateUser(){
            if(!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            if(!params.password){
                delete params.password;
            }

            Object.assign(user, params);
            localStorage.setItem(accessKey, JSON.stringify(users));

            return ok();
        }

        function deleteUser(){
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem(accessKey, JSON.stringify(users));
            return ok();
        }
        
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: BackendInterceptor, 
    multi: true
}