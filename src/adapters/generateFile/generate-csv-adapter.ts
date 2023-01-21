import { createObjectCsvWriter } from 'csv-writer'
import { GenerateFileProtocol } from '../generate-file-protocol';

export class GenerateCsvAdapter implements GenerateFileProtocol {
  async generate(headers: any, data:any) {
    const csvWriter = createObjectCsvWriter({
      path: './test.csv',
      headerIdDelimiter: '\n',
      encoding: 'utf8',
      header: this.getHeaders(headers)
    })

    await csvWriter.writeRecords(data)
  }

  private getHeaders(headers:string[]) {
    return headers.map((item) => ({ id: item, title: item.replace('.', '-') }))
  }
}