export type ModalMode = '' | 'show' | 'change'

export interface IModal {
  isActive: boolean
  idNote: string
  mode: ModalMode
}
