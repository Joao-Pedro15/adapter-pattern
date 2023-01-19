import { Workbook } from 'exceljs'
import { GenerateFileProtocol } from '../generate-file-protocol'

export class GenerateFileExcel implements GenerateFileProtocol {
  public readonly workbook = new Workbook()
  constructor(){}
  async generate(headers: {}[], data: {}[]) {
    const sheet = this.workbook.addWorksheet('Primeira Aba')
    sheet.columns = headers

    this.rows(data, sheet)

    sheet.getRow(1).font = {
      bold: true,
      color: { argb: 'FFCCCCCC' }
    }
    sheet.getRow(1).fill ={
      type: 'pattern',
      pattern: 'solid',
      bgColor: { argb: 'FF000000' }
    }  
    await sheet.workbook.xlsx.writeFile('test.xlsx')
  }

  private rows(data:{}[], sheet:any){
    for(let item of data) {
      sheet.addRow(data)
    }
  }
}