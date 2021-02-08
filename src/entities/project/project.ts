import { ProjectInterface } from '@/entities'

export class Project implements ProjectInterface {
  readonly uuid?: string
  ansprechpartner: string[]
  beginn: string | null
  beschreibung: string
  status: string
  stichpunkte: string
  tags: string[]
  titel: string
  ziele: string

  constructor (data: ProjectInterface) {
    if (data.uuid !== undefined) {
      this.uuid = data.uuid
    }
    this.ansprechpartner = data.ansprechpartner
    this.beginn = data.beginn
    this.beschreibung = data.beschreibung
    this.status = data.status
    this.stichpunkte = data.stichpunkte
    this.tags = data.tags
    this.titel = data.titel
    this.ziele = data.ziele
  }
}
