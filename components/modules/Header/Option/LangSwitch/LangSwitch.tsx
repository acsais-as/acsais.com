"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useRouter,
  useParams,
  useSelectedLayoutSegments,
} from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();
  const params = useParams();
  const urlSegments: string[] | null = useSelectedLayoutSegments();

  // const localActive = useLocale();

  const handleLocaleChange = (event: { target: { value: any } }) => {
    const newLocale = event.target.value;

    // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
    // urlSegments will contain the segments after the locale.
    // We replace the URL with the new locale and the rest of the segments.
    if (urlSegments !== null) {
      router.push(`/${newLocale}/${urlSegments.join("/")}`);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-transparent py-2">
      <form className="max-w-sm mx-auto">
        <select
          onChange={handleLocaleChange}
          value={params?.locale}
          className="cursor-pointer px-1 bg-[#1E2639] border border-[#ebebeb] text-[#ebebeb] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue="ru" value="ru">
            RU
          </option>
          <option value="en">ENG</option>
          <option value="zh">ZH</option>
          <option value="ar">AR</option>
        </select>
      </form>
    </div>
  );
}
