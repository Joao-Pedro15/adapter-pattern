import { GenerateCsvAdapter } from './generateFile/generate-csv-adapter'
import { GenerateExcelAdapter } from './generateFile/generate-excel-adapter'

export interface GenerateFileProtocol {
  generate: GenerateFileFn
}

export interface GenerateFileFn {
  (headers: string[] | {}[], data: {}[]): Promise<any>
}

export interface GenerateFileTarget {
  csvFile: GenerateFileFn
  excelFile: GenerateFileFn
}

export class GenerateFileAdapter implements GenerateFileTarget {
  async csvFile(headers: string[] | {}[], data: {}[]) {
    return await new GenerateCsvAdapter().generate(headers, data)
  }

  async excelFile(headers: string[] | {}[], data: {}[]) {
    return await new GenerateExcelAdapter().generate(headers, data)
  }

  
}