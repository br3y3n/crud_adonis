import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Employe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ })
  declare name: string

  @column({})
  declare email: string

  @column({})
  declare mobile: string

  @column({})
  declare bod: string

  @column({})
  declare doj: string

  @column({})
  declare address: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

 
}