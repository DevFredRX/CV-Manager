import { registerAs } from '@nestjs/config'
import { DatabaseOptions } from '@config/database.options'

export default registerAs('database', () => DatabaseOptions())