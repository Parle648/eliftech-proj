export interface IOption {
  name: string;
  value: 0 | 1 | -1;
  description: string;
}

export const sortOptions: IOption[] = [
  { name: '', value: -1, description: 'sort by' },
  { name: 'title', value: 0, description: 'title from z to a' },
  { name: 'title', value: 1, description: 'title from a to z' },
  { name: 'event_date', value: 0, description: 'date from new to old' },
  { name: 'event_date', value: 1, description: 'date from old to new' },
  { name: 'organizer', value: 0, description: 'organizer z to a' },
  { name: 'organizer', value: 1, description: 'organizer a to z' },
];
