// import { Injectable } from '@angular/core';
// import {Select, Store } from '@ngxs/store';
// import { Observable } from 'rxjs';
// import { AsyncState } from '../shared/async.state';

// import { StartAsyncLoad, FinishAsyncLoad } from './async.actions';

// @Injectable()
// export class AsyncService {
//   @Select(AsyncState.isLoading) isLoading: Observable<boolean>;

//   constructor(private store: Store) {}

//   start(): void {
//     this.store.dispatch(new StartAsyncLoad());
//   }

//   finish(): void {
//     this.store.dispatch(new FinishAsyncLoad());
//   }
// }
