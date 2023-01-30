import { GenerateCsvAdapter } from './generateFile/generate-csv-adapter'
import { GenerateExcelAdapter } from './generateFile/generate-excel-adapter'

export interface GenerateFileProtocol {
  generate: GenerateFileFn
}

export interface GenerateFileFn {
  (headers: string[] | {}[], data: {}[]): Promise<any>
}