export interface FilterProps {
  filter: string
  changeFilter: (s: string) => void
  types: Types
}

export type Types = [
  {
    name: string
    url: string
  },
]
