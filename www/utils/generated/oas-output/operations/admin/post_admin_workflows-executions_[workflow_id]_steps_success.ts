/**
 * @oas [post] /admin/workflows-executions/{workflow_id}/steps/success
 * operationId: PostWorkflowsExecutionsWorkflow_idStepsSuccess
 * summary: Succeed a Step in a Workflow's Execution
 * x-sidebar-summary: Succed a Step
 * description: Set the status of a step in a workflow's execution as successful. This is useful for long-running workflows.
 * x-authenticated: true
 * parameters:
 *   - name: workflow_id
 *     in: path
 *     description: The workflows execution's workflow id.
 *     required: true
 *     schema:
 *       type: string
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminCreateWorkflowsAsyncResponse"
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |-
 *       curl -X POST '{backend_url}/admin/workflows-executions/{workflow_id}/steps/success' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *         "transaction_id": "{value}",
 *         "step_id": "{value}"
 *       }'
 * tags:
 *   - Workflows Executions
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           description: The details of succeeding the workflow step.
 *           required:
 *             - success
 *           properties:
 *             success:
 *               type: boolean
 *               title: success
 *               description: Whether the workflow step was succeeded.
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 * 
*/

