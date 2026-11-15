import type { Photo } from '@/lib/data/destinations';

/** Attribution line required by the Creative Commons licenses of the photos. */
export function PhotoCredits({ title, photos }: { title: string; photos: Photo[] }) {
  return (
    <details className="text-xs text-gray-400">
      <summary className="cursor-pointer hover:text-gray-600 w-fit">{title}</summary>
      <ul className="mt-3 space-y-1">
        {photos.map((p) => (
          <li key={p.src}>
            {p.sourceUrl ? (
              <>
                {p.alt}: {p.author},{' '}
                <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
                  {p.license}
                </a>
                , via Wikimedia Commons
              </>
            ) : (
              <>
                {p.alt}: {p.license ? `${p.license} ` : ''}© {p.author}
              </>
            )}
          </li>
        ))}
      </ul>
    </details>
  );
}
