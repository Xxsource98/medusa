/**
 * @schema AdminCreateTaxRegion
 * type: object
 * description: The tax region's details.
 * x-schemaName: AdminCreateTaxRegion
 * required:
 *   - country_code
 * properties:
 *   country_code:
 *     type: string
 *     title: country_code
 *     description: The tax region's country code.
 *     example: us
 *   province_code:
 *     type: string
 *     title: province_code
 *     description: The tax region's province code.
 *   parent_id:
 *     type: string
 *     title: parent_id
 *     description: The ID of the parent tax region.
 *   default_tax_rate:
 *     type: object
 *     description: The tax region's default tax rate.
 *     required:
 *       - name
 *     properties:
 *       rate:
 *         type: number
 *         title: rate
 *         description: The rate to charge.
 *         example: 10
 *       code:
 *         type: string
 *         title: code
 *         description: The code the tax rate is identified by
 *       name:
 *         type: string
 *         title: name
 *         description: The default tax rate's name.
 *         example: VAT
 *       is_combinable:
 *         type: boolean
 *         description: Whether the tax rate should be combined with parent rates.
 *         externalDocs:
 *           url: https://docs.medusajs.com/v2/resources/commerce-modules/tax/tax-rates-and-rules#combinable-tax-rates
 *       metadata:
 *         type: object
 *         description: The default tax rate's metadata, used to store custom key-value pairs.
 *   metadata:
 *     type: object
 *     description: The tax region's metadata, used to store custom key-value pairs.
 * 
*/

