import { ProjectInterface } from '@/entities'

export const mockProjects = (): ProjectInterface[] =>
  [
    {
      uuid: 'a-b-c-d-1',
      titel: 'Mock-Titel 1',
      beschreibung: 'Dies ist die Mock-Beschreibung des ersten Projekts',
      ansprechpartner: [
        'Ansprechpartner-1-1',
        'Ansprechpartner-1-2',
        'Ansprechpartner-1-3',
        'Ansprechpartner-1-4'
      ],
      stichpunkte: 'Stichpunkt-1-1, Stichpunkt-1-2, Stichpunkt-1-3',
      ziele: 'Ziel 1-1, Ziel 1-2, Ziel 1-3',
      status: 'aktiv',
      beginn: '2018-08-01',
      tags: [
        'Banane',
        'Apfel',
        'tag-1-1',
        'tag-1-2',
        'tag-1-3'
      ]
    },
    {
      uuid: 'a-b-c-d-2',
      titel: 'Mock-Titel 2',
      beschreibung: 'Dies ist die Mock-Beschreibung des zweiten Projekts',
      ansprechpartner: [
        'Ansprechpartner-2-1',
        'Ansprechpartner-2-2',
        'Ansprechpartner-2-3',
        'Ansprechpartner-2-4'
      ],
      stichpunkte: 'Stichpunkt-2-1, Stichpunkt-2-2, Stichpunkt-2-3',
      ziele: 'Ziel 2-1, Ziel 2-2, Ziel 2-3',
      status: 'aktiv',
      beginn: '2018-09-01',
      tags: [
        'Banane',
        'Orange',
        'tag-2-1',
        'tag-2-2',
        'tag-2-3'
      ]
    }
  ]
