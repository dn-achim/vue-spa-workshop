import Fuse from 'fuse.js'
import { Project, SearchResult } from '@/entities'
import { ProjectRepository, ProjectSearchInterface } from '@/services'

export class ProjectSearch implements ProjectSearchInterface {
  private fuse: Fuse<Project>

  private static options: Fuse.IFuseOptions<Project> = {
    includeScore: true,
    minMatchCharLength: 2,
    shouldSort: true,
    threshold: 0.3,
    keys: [
      {
        name: 'uuid',
        weight: 10
      },
      'titel',
      'beschreibung',
      'ansprechpartner',
      'stichpunkte',
      'ziele',
      'status',
      'beginn',
      'tags'
    ]
  }

  constructor (private readonly repository: ProjectRepository) {
    this.repository = repository
    this.fuse = new Fuse(
      this.repository.getAll(),
      ProjectSearch.options,
      Fuse.createIndex(
        ProjectSearch.options.keys ? ProjectSearch.options.keys : [],
        this.repository.getAll()
      )
    )
  }

  public search (phrase: string): SearchResult[] {
    return this
      .fuse
      .search(phrase)
      .map(elem => new SearchResult(elem))
  }

  filter (phrase?: string): SearchResult[] {
    return typeof phrase === 'string' && phrase.length > 0
      ? this.search(phrase).map(elem => new SearchResult(elem))
      : this.getAll()
  }

  private getAll (): SearchResult[] {
    return this
      .repository
      .getAll()
      .map((elem, idx) => ({
        item: elem,
        refIndex: idx,
        score: 1
      }))
  }

  public findOne (uuid: string): SearchResult | undefined {
    const hits = this.search(`=${uuid}`)
    return hits[0] || undefined
  }
}
