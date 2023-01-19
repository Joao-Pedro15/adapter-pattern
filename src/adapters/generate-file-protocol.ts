export interface GenerateFileProtocol {
  generate: GenerateFileFn
}

export interface GenerateFileFn {
  (headers: string[] | {}[], data: {}[]): Promise<any>
}