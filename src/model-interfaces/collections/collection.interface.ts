import { APObject } from '../objects/object.interface';
import {
    CollectionCurrentField,
    CollectionFirstField, CollectionItemsField,
    CollectionLastField,
    TotalItemsField
} from '../../fields';

/**
 * A `Collection` is a subtype of [Object](../objects/object.interface.ts) that
 * represents ordered or unordered sets of [Object](../objects/object.interface.ts)
 * or [Link](../objects/link.interface.ts) instances.
 * 
 * Refer to the [Activity Streams 2.0 Core](https://www.w3.org/TR/activitystreams-core/#collection)
 * specification for a complete description of the `Collection` type. 
 *
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#dfn-collection Docs}
 */
export interface APCollection extends APObject {
    type: 'Collection';

    /**
     * A non-negative integer specifying the total number of objects contained by
     * the logical view of the collection. This number might not reflect the actual
     * number of items serialized within the Collection object instance.
     *
     * {@link https://www.w3.org/ns/activitystreams#totalItems Docs}
     */
    totalItems?: TotalItemsField;

    /**
     * In a paged Collection, indicates the page that contains
     * the most recently updated member items.
     *
     * {@link https://www.w3.org/ns/activitystreams#current Docs}
     */
    current?: CollectionCurrentField;

    /**
     * In a paged Collection,indicates the furthest proceeding
     * page of items in the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#first Docs}
     */
    first?: CollectionFirstField;

    /**
     * In a paged Collection, indicates the furthest proceeding
     * page of the collection.
     *
     * {@link https://www.w3.org/ns/activitystreams#last Docs}
     */
    last?: CollectionLastField;

    /**
     * Identifies the items contained in a collection.
     * The items might be ordered or unordered.
     *
     * {@link https://www.w3.org/ns/activitystreams#items Docs}
     */
    items?: CollectionItemsField[];
}
