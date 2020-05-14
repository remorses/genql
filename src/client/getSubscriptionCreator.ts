import { Observable } from 'rxjs'
import { concatMap, publishReplay, refCount } from 'rxjs/operators'
import { ClientOptions, SubscriptionClient } from 'subscriptions-transport-ws'
import ws from 'ws'
import { Gql } from './requestToGql'

export interface SubscriptionCreatorOptions {
  uri: string
  options?: ClientOptions
}

export const getSubscriptionCreator = ({ uri, options }: SubscriptionCreatorOptions) => {
  const client = new SubscriptionClient(uri, { lazy: true, reconnect: true, ...options }, ws)

  const clientObservable = new Observable<SubscriptionClient>(subscriber => {
    subscriber.next(client)
    return () => client.close()
  }).pipe(
    publishReplay(1),
    refCount(),
  )

  return (gql: Gql) =>
    clientObservable.pipe(
      concatMap(
        client =>
          new Observable<any>(subscriber => {
            const s = client.request(gql).subscribe(subscriber)
            return () => s.unsubscribe()
          }),
      ),
    )
}
