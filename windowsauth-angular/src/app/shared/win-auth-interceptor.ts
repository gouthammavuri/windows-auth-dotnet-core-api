import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpEvent
  } from '@angular/common/http';

@Injectable()
export class WinAuthInterceptor implements HttpInterceptor {
    
    constructor(){
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({ withCredentials: true });
        return next.handle(req);
    }
}