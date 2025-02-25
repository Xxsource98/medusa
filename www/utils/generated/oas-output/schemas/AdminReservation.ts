/**
 * @schema AdminReservation
 * type: object
 * description: The reservation's details.
 * x-schemaName: AdminReservation
 * required:
 *   - id
 *   - line_item_id
 *   - location_id
 *   - quantity
 *   - external_id
 *   - description
 *   - inventory_item_id
 *   - inventory_item
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The reservation's ID.
 *   line_item_id:
 *     type: string
 *     title: line_item_id
 *     description: The reservation's line item id.
 *   location_id:
 *     type: string
 *     title: location_id
 *     description: The reservation's location id.
 *   quantity:
 *     type: number
 *     title: quantity
 *     description: The reservation's quantity.
 *   external_id:
 *     type: string
 *     title: external_id
 *     description: The reservation's external id.
 *   description:
 *     type: string
 *     title: description
 *     description: The reservation's description.
 *   inventory_item_id:
 *     type: string
 *     title: inventory_item_id
 *     description: The reservation's inventory item id.
 *   inventory_item:
 *     type: object
 *     description: The reservation's inventory item.
 *   metadata:
 *     type: object
 *     description: The reservation's metadata.
 *   created_by:
 *     type: string
 *     title: created_by
 *     description: The reservation's created by.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The reservation's deleted at.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The reservation's created at.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The reservation's updated at.
 * 
*/

