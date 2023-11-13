export class CreateOrderDto {
  readonly orderDetails: string

  readonly orderName: string

  readonly user: {
    readonly id: number
  }
}
