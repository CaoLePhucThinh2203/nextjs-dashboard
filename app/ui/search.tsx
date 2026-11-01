'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // Reset về trang 1 khi search term thay đổi
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // Cập nhật URL mà không reload trang
    replace(`${pathname}?${params.toString()}`);
  }, 300); // chờ 300ms sau lần gõ cuối

  return (
    <input
      placeholder={placeholder}
      defaultValue={searchParams.get('query')?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}