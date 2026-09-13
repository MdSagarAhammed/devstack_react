export type TechnologyCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools'

export type Difficulty = 'Beginner-Friendly' | 'Intermediate' | 'Advanced'

export interface Technology {
  id: number
  name: string
  category: TechnologyCategory
  description: string
  icon: string
  rating: number
  difficulty: Difficulty
  badge: string
}
