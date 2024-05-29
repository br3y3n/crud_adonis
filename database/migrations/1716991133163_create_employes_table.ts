import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('mobile')
      table.string('bod')
      table.string('doj')
      table.string('address')
      table.timestamp('created_at')
      
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}