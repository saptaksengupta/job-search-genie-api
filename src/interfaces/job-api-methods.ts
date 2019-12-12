import { Observable } from "rxjs";

export interface IJobApi {

    // General api related methods, that require in general, like create, get, etc...
    getJobs(optionalQueryParams?: object): Observable<any>;

}