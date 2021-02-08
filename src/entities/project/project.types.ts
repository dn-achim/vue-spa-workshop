export interface ProjectInterface {
  readonly uuid?: string;
  ansprechpartner: string[];
  beginn: string | null;
  beschreibung: string;
  status: string;
  stichpunkte: string;
  tags: string[];
  titel: string;
  ziele: string;
}
