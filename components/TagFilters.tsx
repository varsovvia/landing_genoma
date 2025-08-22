'use client';

interface TagFiltersProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagFilters({ tags, selectedTag, onTagSelect }: TagFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onTagSelect(null)}
        className={`tag-pill ${!selectedTag ? 'active' : ''}`}
        aria-pressed={!selectedTag}
      >
        All
      </button>
      
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
          aria-pressed={selectedTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
