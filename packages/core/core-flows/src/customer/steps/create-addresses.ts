import {
  CreateCustomerAddressDTO,
  ICustomerModuleService,
} from "@medusajs/types"
import { ModuleRegistrationName } from "@medusajs/utils"
import { StepResponse, createStep } from "@medusajs/workflows-sdk"

export const createCustomerAddressesStepId = "create-customer-addresses"
/**
 * This step creates one or more customer addresses.
 */
export const createCustomerAddressesStep = createStep(
  createCustomerAddressesStepId,
  async (data: CreateCustomerAddressDTO[], { container }) => {
    const service = container.resolve<ICustomerModuleService>(
      ModuleRegistrationName.CUSTOMER
    )

    const addresses = await service.createCustomerAddresses(data)

    return new StepResponse(
      addresses,
      addresses.map((address) => address.id)
    )
  },
  async (ids, { container }) => {
    if (!ids?.length) {
      return
    }

    const service = container.resolve<ICustomerModuleService>(
      ModuleRegistrationName.CUSTOMER
    )

    await service.deleteCustomerAddresses(ids)
  }
)
