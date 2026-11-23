import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'fr', 'ar'],
  defaultLocale: 'en',
  // hreflang is set in each page's metadata (x-default -> /en). The automatic Link header
  // pointed x-default to "/", which is only a redirect, so Google ignored it.
  alternateLinks: false
});

export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
